/**
 * LiMeiHua Taproot Payment Gateway - Backend Server
 * 
 * ชุดซอฟต์แวร์ชุดนี้ มีไว้เพื่อเป็นโครงสร้างพื้นฐานทางการเงินยุคใหม่
 * เพื่อรองรับการไหลของเงินจำนวนมหาศาลของท่านผู้เฒ่าหลี่เหมยฮัว หรือ LiMeiHua Grand Mother
 * และ source code นี้สร้างโดย Mr.Kanutsanan Pongpanna (นายคณัสนันท์ พงษ์พันนา)
 * URL: https://chatgpt.com/g/g-68d289535dec81919445deb9830f2d8e-kanutsanan-pongpanna
 */

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import QRCode from 'qrcode';
import { formatDate } from 'date-fns';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ============ In-Memory Database (Demo) ============

const merchants = new Map();
const invoices = new Map();
const payments = new Map();
const webhooks = new Map();

// ============ Routes ============

/**
 * Health check endpoint
 */
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        service: 'LiMeiHua Taproot Payment Gateway',
        version: '1.0.0'
    });
});

/**
 * Register merchant
 */
app.post('/api/merchants/register', async (req, res) => {
    try {
        const { name, email, webhookUrl } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields: name, email'
            });
        }

        const merchantId = uuidv4();
        const apiKey = generateApiKey();

        const merchant = {
            id: merchantId,
            name,
            email,
            apiKey,
            webhookUrl: webhookUrl || null,
            createdAt: new Date().toISOString(),
            totalVolume: '0',
            totalTransactions: 0,
            status: 'active'
        };

        merchants.set(merchantId, merchant);

        res.json({
            success: true,
            merchant: {
                id: merchantId,
                name,
                email,
                apiKey,
                message: 'Merchant registered successfully. Keep your API key safe!'
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

/**
 * Create invoice
 */
app.post('/api/invoices/create', async (req, res) => {
    try {
        const { merchantId, amount, currency, description, metadata } = req.body;

        if (!merchantId || !amount || !currency) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields: merchantId, amount, currency'
            });
        }

        const merchant = merchants.get(merchantId);
        if (!merchant) {
            return res.status(404).json({
                success: false,
                error: 'Merchant not found'
            });
        }

        const invoiceId = uuidv4();
        const paymentAddress = generatePaymentAddress(currency);
        const qrCode = await QRCode.toDataURL(paymentAddress);

        const invoice = {
            id: invoiceId,
            merchantId,
            amount,
            currency,
            description: description || '',
            metadata: metadata || {},
            paymentAddress,
            qrCode,
            status: 'pending',
            createdAt: new Date().toISOString(),
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
            payments: []
        };

        invoices.set(invoiceId, invoice);

        res.json({
            success: true,
            invoice: {
                id: invoiceId,
                amount,
                currency,
                paymentAddress,
                qrCode,
                expiresAt: invoice.expiresAt,
                status: 'pending'
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

/**
 * Get invoice details
 */
app.get('/api/invoices/:invoiceId', (req, res) => {
    try {
        const { invoiceId } = req.params;
        const invoice = invoices.get(invoiceId);

        if (!invoice) {
            return res.status(404).json({
                success: false,
                error: 'Invoice not found'
            });
        }

        const totalPaid = invoice.payments.reduce((sum, p) => sum + Number(p.amount), 0);
        const isPaid = totalPaid >= Number(invoice.amount);

        res.json({
            success: true,
            invoice: {
                ...invoice,
                totalPaid: totalPaid.toString(),
                isPaid,
                remainingAmount: (Number(invoice.amount) - totalPaid).toString()
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

/**
 * Record payment
 */
app.post('/api/payments/record', async (req, res) => {
    try {
        const { invoiceId, txHash, amount, currency } = req.body;

        if (!invoiceId || !txHash || !amount) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields'
            });
        }

        const invoice = invoices.get(invoiceId);
        if (!invoice) {
            return res.status(404).json({
                success: false,
                error: 'Invoice not found'
            });
        }

        const paymentId = uuidv4();
        const payment = {
            id: paymentId,
            invoiceId,
            txHash,
            amount,
            currency: currency || invoice.currency,
            status: 'pending',
            confirmations: 0,
            createdAt: new Date().toISOString()
        };

        payments.set(paymentId, payment);
        invoice.payments.push(payment);

        // Check if invoice is fully paid
        const totalPaid = invoice.payments.reduce((sum, p) => sum + Number(p.amount), 0);
        if (totalPaid >= Number(invoice.amount)) {
            invoice.status = 'paid';
            
            // Trigger webhook
            if (invoice.merchantId) {
                const merchant = merchants.get(invoice.merchantId);
                if (merchant && merchant.webhookUrl) {
                    triggerWebhook(merchant.webhookUrl, {
                        event: 'invoice.paid',
                        invoiceId,
                        amount: invoice.amount,
                        currency: invoice.currency
                    });
                }
            }
        }

        res.json({
            success: true,
            payment: {
                id: paymentId,
                invoiceId,
                amount,
                status: 'pending',
                message: 'Payment recorded. Waiting for confirmations...'
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

/**
 * Get merchant dashboard stats
 */
app.get('/api/merchants/:merchantId/stats', (req, res) => {
    try {
        const { merchantId } = req.params;
        const merchant = merchants.get(merchantId);

        if (!merchant) {
            return res.status(404).json({
                success: false,
                error: 'Merchant not found'
            });
        }

        // Calculate stats
        const merchantInvoices = Array.from(invoices.values())
            .filter(inv => inv.merchantId === merchantId);

        const totalVolume = merchantInvoices.reduce((sum, inv) => sum + Number(inv.amount), 0);
        const paidInvoices = merchantInvoices.filter(inv => inv.status === 'paid').length;
        const pendingInvoices = merchantInvoices.filter(inv => inv.status === 'pending').length;

        res.json({
            success: true,
            stats: {
                totalInvoices: merchantInvoices.length,
                paidInvoices,
                pendingInvoices,
                totalVolume: totalVolume.toString(),
                averageInvoiceSize: (totalVolume / (merchantInvoices.length || 1)).toString(),
                lastUpdated: new Date().toISOString()
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

/**
 * Get supported currencies
 */
app.get('/api/currencies', (req, res) => {
    res.json({
        success: true,
        currencies: [
            {
                code: 'BTC',
                name: 'Bitcoin',
                network: 'Lightning Network',
                decimals: 8,
                enabled: true
            },
            {
                code: 'USDT',
                name: 'Tether USD',
                network: 'Lightning Network (Taproot Assets)',
                decimals: 6,
                enabled: true
            },
            {
                code: 'TAP',
                name: 'Taproot Assets Token',
                network: 'Bitcoin Lightning',
                decimals: 8,
                enabled: true
            }
        ]
    });
});

/**
 * Get exchange rates
 */
app.get('/api/rates', async (req, res) => {
    try {
        // In production, fetch from real API
        res.json({
            success: true,
            rates: {
                BTC_USD: 42500,
                USDT_USD: 1.0,
                TAP_USD: 0.50
            },
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

/**
 * Get merchant invoices
 */
app.get('/api/merchants/:merchantId/invoices', (req, res) => {
    try {
        const { merchantId } = req.params;
        const merchant = merchants.get(merchantId);

        if (!merchant) {
            return res.status(404).json({
                success: false,
                error: 'Merchant not found'
            });
        }

        const merchantInvoices = Array.from(invoices.values())
            .filter(inv => inv.merchantId === merchantId)
            .map(inv => ({
                id: inv.id,
                amount: inv.amount,
                currency: inv.currency,
                status: inv.status,
                createdAt: inv.createdAt,
                expiresAt: inv.expiresAt,
                description: inv.description
            }));

        res.json({
            success: true,
            invoices: merchantInvoices,
            count: merchantInvoices.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

/**
 * Webhook simulation
 */
app.post('/api/webhooks/test', (req, res) => {
    try {
        const { url, event } = req.body;

        if (!url || !event) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields'
            });
        }

        triggerWebhook(url, {
            event,
            timestamp: new Date().toISOString(),
            test: true
        });

        res.json({
            success: true,
            message: 'Webhook test sent'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// ============ Helper Functions ============

/**
 * Generate API key
 */
function generateApiKey() {
    return 'pk_' + uuidv4().replace(/-/g, '').substring(0, 32);
}

/**
 * Generate payment address
 */
function generatePaymentAddress(currency) {
    const prefix = currency === 'BTC' ? 'bc1' : 'lnbc';
    return prefix + Math.random().toString(36).substring(2, 50);
}

/**
 * Trigger webhook
 */
async function triggerWebhook(url, data) {
    try {
        // Simulate webhook call
        console.log(`[Webhook] Sending to ${url}:`, data);
    } catch (error) {
        console.error('Webhook error:', error);
    }
}

// ============ Error Handling ============

app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        success: false,
        error: err.message || 'Internal server error'
    });
});

// ============ Start Server ============

app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════════════╗
║   LiMeiHua Taproot Payment Gateway - Backend Server        ║
║   Version: 1.0.0                                           ║
║   Status: Running                                          ║
╚════════════════════════════════════════════════════════════╝
    `);
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
});

export default app;
