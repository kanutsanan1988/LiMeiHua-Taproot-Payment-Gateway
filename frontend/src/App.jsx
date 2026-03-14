/**
 * LiMeiHua Taproot Payment Gateway - Frontend Dashboard
 * 
 * ชุดซอฟต์แวร์ชุดนี้ มีไว้เพื่อเป็นโครงสร้างพื้นฐานทางการเงินยุคใหม่
 * เพื่อรองรับการไหลของเงินจำนวนมหาศาลของท่านผู้เฒ่าหลี่เหมยฮัว หรือ LiMeiHua Grand Mother
 * และ source code นี้สร้างโดย Mr.Kanutsanan Pongpanna (นายคณัสนันท์ พงษ์พันนา)
 * URL: https://chatgpt.com/g/g-68d289535dec81919445deb9830f2d8e-kanutsanan-pongpanna
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

/**
 * Main Payment Gateway Dashboard Component
 */
function App() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [merchantId, setMerchantId] = useState(localStorage.getItem('merchantId') || '');
    const [apiKey, setApiKey] = useState(localStorage.getItem('apiKey') || '');
    const [isLoggedIn, setIsLoggedIn] = useState(!!merchantId);
    const [stats, setStats] = useState(null);
    const [invoices, setInvoices] = useState([]);
    const [currencies, setCurrencies] = useState([]);
    const [rates, setRates] = useState(null);
    const [loading, setLoading] = useState(false);

    // Form states
    const [registerForm, setRegisterForm] = useState({ name: '', email: '', webhookUrl: '' });
    const [invoiceForm, setInvoiceForm] = useState({ amount: '', currency: 'BTC', description: '' });

    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

    // ============ Effects ============

    useEffect(() => {
        if (isLoggedIn) {
            loadDashboard();
        }
    }, [isLoggedIn]);

    // ============ API Calls ============

    const loadDashboard = async () => {
        try {
            setLoading(true);
            const [statsRes, invoicesRes, currenciesRes, ratesRes] = await Promise.all([
                axios.get(`${API_URL}/api/merchants/${merchantId}/stats`),
                axios.get(`${API_URL}/api/merchants/${merchantId}/invoices`),
                axios.get(`${API_URL}/api/currencies`),
                axios.get(`${API_URL}/api/rates`)
            ]);

            setStats(statsRes.data.stats);
            setInvoices(invoicesRes.data.invoices);
            setCurrencies(currenciesRes.data.currencies);
            setRates(ratesRes.data.rates);
        } catch (error) {
            console.error('Error loading dashboard:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post(`${API_URL}/api/merchants/register`, registerForm);

            if (response.data.success) {
                const { id, apiKey } = response.data.merchant;
                setMerchantId(id);
                setApiKey(apiKey);
                localStorage.setItem('merchantId', id);
                localStorage.setItem('apiKey', apiKey);
                setIsLoggedIn(true);
                alert(`✓ Merchant registered!\nAPI Key: ${apiKey}\n\nKeep this safe!`);
                setRegisterForm({ name: '', email: '', webhookUrl: '' });
            }
        } catch (error) {
            alert('Error: ' + error.response?.data?.error || error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateInvoice = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post(`${API_URL}/api/invoices/create`, {
                merchantId,
                amount: invoiceForm.amount,
                currency: invoiceForm.currency,
                description: invoiceForm.description
            });

            if (response.data.success) {
                alert(`✓ Invoice created!\nInvoice ID: ${response.data.invoice.id}`);
                setInvoiceForm({ amount: '', currency: 'BTC', description: '' });
                loadDashboard();
            }
        } catch (error) {
            alert('Error: ' + error.response?.data?.error || error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        setMerchantId('');
        setApiKey('');
        localStorage.removeItem('merchantId');
        localStorage.removeItem('apiKey');
        setIsLoggedIn(false);
    };

    // ============ Render ============

    if (!isLoggedIn) {
        return (
            <div className="app">
                <header className="header">
                    <h1>⚡ LiMeiHua Taproot Payment Gateway</h1>
                    <p>Lightning Network Payment Processing</p>
                </header>

                <div className="container">
                    <div className="auth-card">
                        <h2>Register Your Store</h2>
                        <form onSubmit={handleRegister}>
                            <div className="form-group">
                                <label>Store Name</label>
                                <input
                                    type="text"
                                    placeholder="My Online Store"
                                    value={registerForm.name}
                                    onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    placeholder="store@example.com"
                                    value={registerForm.email}
                                    onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Webhook URL (Optional)</label>
                                <input
                                    type="url"
                                    placeholder="https://your-store.com/webhook"
                                    value={registerForm.webhookUrl}
                                    onChange={(e) => setRegisterForm({ ...registerForm, webhookUrl: e.target.value })}
                                />
                            </div>

                            <button type="submit" className="submit-btn" disabled={loading}>
                                {loading ? 'Registering...' : 'Register Store'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="app">
            <header className="header">
                <div className="header-content">
                    <h1>⚡ LiMeiHua Taproot Payment Gateway</h1>
                    <p>Merchant Dashboard</p>
                </div>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </header>

            <div className="container">
                {/* Tabs */}
                <div className="tabs">
                    <button
                        className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`}
                        onClick={() => setActiveTab('dashboard')}
                    >
                        Dashboard
                    </button>
                    <button
                        className={`tab ${activeTab === 'invoices' ? 'active' : ''}`}
                        onClick={() => setActiveTab('invoices')}
                    >
                        Invoices
                    </button>
                    <button
                        className={`tab ${activeTab === 'create' ? 'active' : ''}`}
                        onClick={() => setActiveTab('create')}
                    >
                        Create Invoice
                    </button>
                    <button
                        className={`tab ${activeTab === 'settings' ? 'active' : ''}`}
                        onClick={() => setActiveTab('settings')}
                    >
                        Settings
                    </button>
                </div>

                {/* Dashboard Tab */}
                {activeTab === 'dashboard' && (
                    <div className="tab-content">
                        {stats ? (
                            <div className="stats-grid">
                                <div className="stat-box">
                                    <div className="stat-value">{stats.totalInvoices}</div>
                                    <div className="stat-label">Total Invoices</div>
                                </div>
                                <div className="stat-box">
                                    <div className="stat-value">{stats.paidInvoices}</div>
                                    <div className="stat-label">Paid Invoices</div>
                                </div>
                                <div className="stat-box">
                                    <div className="stat-value">{stats.pendingInvoices}</div>
                                    <div className="stat-label">Pending Invoices</div>
                                </div>
                                <div className="stat-box">
                                    <div className="stat-value">{parseFloat(stats.totalVolume).toFixed(2)}</div>
                                    <div className="stat-label">Total Volume</div>
                                </div>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                )}

                {/* Invoices Tab */}
                {activeTab === 'invoices' && (
                    <div className="tab-content">
                        <div className="invoices-card">
                            <h2>Recent Invoices</h2>
                            {invoices.length === 0 ? (
                                <p className="empty-state">No invoices yet</p>
                            ) : (
                                <div className="invoices-list">
                                    {invoices.map((invoice) => (
                                        <div key={invoice.id} className="invoice-item">
                                            <div className="invoice-header">
                                                <span className="invoice-id">{invoice.id.substring(0, 8)}...</span>
                                                <span className={`invoice-status ${invoice.status}`}>{invoice.status}</span>
                                            </div>
                                            <div className="invoice-details">
                                                <p><strong>Amount:</strong> {invoice.amount} {invoice.currency}</p>
                                                <p><strong>Description:</strong> {invoice.description || 'N/A'}</p>
                                                <p><strong>Created:</strong> {new Date(invoice.createdAt).toLocaleString()}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Create Invoice Tab */}
                {activeTab === 'create' && (
                    <div className="tab-content">
                        <div className="create-card">
                            <h2>Create New Invoice</h2>
                            <form onSubmit={handleCreateInvoice}>
                                <div className="form-group">
                                    <label>Amount</label>
                                    <input
                                        type="number"
                                        placeholder="Enter amount"
                                        value={invoiceForm.amount}
                                        onChange={(e) => setInvoiceForm({ ...invoiceForm, amount: e.target.value })}
                                        step="0.00000001"
                                        min="0"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Currency</label>
                                    <select
                                        value={invoiceForm.currency}
                                        onChange={(e) => setInvoiceForm({ ...invoiceForm, currency: e.target.value })}
                                    >
                                        {currencies.map(curr => (
                                            <option key={curr.code} value={curr.code}>
                                                {curr.code} - {curr.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Description (Optional)</label>
                                    <input
                                        type="text"
                                        placeholder="Invoice description"
                                        value={invoiceForm.description}
                                        onChange={(e) => setInvoiceForm({ ...invoiceForm, description: e.target.value })}
                                    />
                                </div>

                                <button type="submit" className="submit-btn" disabled={loading}>
                                    {loading ? 'Creating...' : 'Create Invoice'}
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {/* Settings Tab */}
                {activeTab === 'settings' && (
                    <div className="tab-content">
                        <div className="settings-card">
                            <h2>API Settings</h2>
                            <div className="setting-item">
                                <label>Merchant ID</label>
                                <input type="text" value={merchantId} readOnly />
                            </div>
                            <div className="setting-item">
                                <label>API Key</label>
                                <input type="password" value={apiKey} readOnly />
                            </div>
                            <p className="info-text">Keep your API key safe. Never share it with anyone!</p>

                            <h2 style={{ marginTop: '2rem' }}>Exchange Rates</h2>
                            {rates ? (
                                <div className="rates-grid">
                                    {Object.entries(rates).map(([pair, rate]) => (
                                        <div key={pair} className="rate-box">
                                            <div className="rate-pair">{pair}</div>
                                            <div className="rate-value">${rate}</div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>Loading rates...</p>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <footer className="footer">
                <p>LiMeiHua Taproot Payment Gateway v1.0.0 | Created by Mr. Kanutsanan Pongpanna</p>
            </footer>
        </div>
    );
}

export default App;
