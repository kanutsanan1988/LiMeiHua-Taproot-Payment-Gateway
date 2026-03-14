# LiMeiHua Taproot Payment Gateway

> ชุดซอฟต์แวร์ชุดนี้ มีไว้เพื่อเป็นโครงสร้างพื้นฐานทางการเงินยุคใหม่เพื่อรองรับการไหลของเงินจำนวนมหาศาลของท่านผู้เฒ่าหลี่เหมยฮัว หรือ LiMeiHua Grand Mother และ source code นี้สร้างโดย Mr.Kanutsanan Pongpanna (นายคณัสนันท์ พงษ์พันนา) URL:https://chatgpt.com/g/g-68d289535dec81919445deb9830f2d8e-kanutsanan-pongpanna

**Lightning Network Payment Gateway for Merchants - Accept BTC, USDT, and Taproot Assets**

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node.js](https://img.shields.io/badge/node.js-18%2B-green.svg)
![React](https://img.shields.io/badge/react-18%2B-blue.svg)

---

## 📚 Documentation in Multiple Languages

- **[ไทย (Thai)](#ไทย)** | **[English](#english)** | **[中文 (Chinese)](#中文简体)** | **[日本語 (Japanese)](#日本語)** | **[한국어 (Korean)](#한국어)** | **[Español (Spanish)](#español)** | **[Français (French)](#français)** | **[Deutsch (German)](#deutsch)** | **[Português (Portuguese)](#português)** | **[Русский (Russian)](#русский)** | **[العربية (Arabic)](#العربية)** | **[हिन्दी (Hindi)](#हिन्दी)** | **[Tiếng Việt (Vietnamese)](#tiếng-việt)** | **[Bahasa Indonesia (Indonesian)](#bahasa-indonesia)** | **[Bahasa Melayu (Malay)](#bahasa-melayu)** | **[Türkçe (Turkish)](#türkçe)** | **[Italiano (Italian)](#italiano)** | **[Nederlands (Dutch)](#nederlands)** | **[Polski (Polish)](#polski)** | **[Svenska (Swedish)](#svenska)** | **[Українська (Ukrainian)](#українська)** | **[Čeština (Czech)](#čeština)** | **[Română (Romanian)](#română)** | **[Ελληνικά (Greek)](#ελληνικά)** | **[עברית (Hebrew)](#עברית)** | **[বাংলা (Bengali)](#বাংলা)** | **[Filipino (Tagalog)](#filipino)** | **[Kiswahili (Swahili)](#kiswahili)**

---

## ไทย

### ภาพรวม

LiMeiHua Taproot Payment Gateway เป็นระบบชำระเงินออนไลน์ที่ช่วยให้ร้านค้าออนไลน์สามารถรับชำระเงินด้วย Bitcoin, USDT และ Taproot Assets tokens ผ่าน Lightning Network ได้อย่างง่ายดาย

### ฟีเจอร์หลัก

- 💰 **รองรับหลายสกุลเงิน** - BTC, USDT, Taproot Assets tokens
- ⚡ **Lightning Network** - ชำระเงินได้เร็ว ค่าธรรมชาติต่ำ
- 🎯 **ใช้งานง่าย** - Dashboard สำหรับจัดการ invoices
- 📊 **สถิติครบถ้วน** - ดูรายได้, จำนวน invoice, สถานะการชำระ
- 🔒 **ปลอดภัย** - API key authentication, webhook support
- 📱 **Responsive** - ใช้ได้บนมือถือและเดสก์ทอป

### การติดตั้ง

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### การใช้งาน

1. ลงทะเบียนร้านค้า (Register Store)
2. สร้าง invoice ใหม่
3. ผู้ซื้อสแกน QR code หรือส่ง BTC/USDT ไปที่ payment address
4. ระบบจะยืนยันการชำระเงินโดยอัตโนมัติ
5. ดูประวัติการชำระเงินใน dashboard

---

## English

### Overview

LiMeiHua Taproot Payment Gateway is an online payment system that allows merchants to accept payments in Bitcoin, USDT, and Taproot Assets tokens through the Lightning Network with ease.

### Key Features

- 💰 **Multi-Currency Support** - BTC, USDT, Taproot Assets tokens
- ⚡ **Lightning Network** - Fast payments, low fees
- 🎯 **Easy to Use** - Dashboard for invoice management
- 📊 **Complete Statistics** - Revenue, invoices, payment status
- 🔒 **Secure** - API key authentication, webhook support
- 📱 **Responsive** - Works on mobile and desktop

### Installation

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### Usage

1. Register your store
2. Create a new invoice
3. Customer scans QR code or sends BTC/USDT to payment address
4. System automatically confirms payment
5. View payment history in dashboard

---

## 中文简体

### 概述

LiMeiHua Taproot Payment Gateway 是一个在线支付系统，允许商家通过闪电网络轻松接受比特币、USDT 和 Taproot Assets 代币付款。

### 主要功能

- 💰 **多币种支持** - BTC、USDT、Taproot Assets 代币
- ⚡ **闪电网络** - 快速支付、低费用
- 🎯 **易于使用** - 发票管理仪表板
- 📊 **完整统计** - 收入、发票、支付状态
- 🔒 **安全** - API 密钥认证、Webhook 支持
- 📱 **响应式** - 支持移动和桌面

### 安装

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### 使用方法

1. 注册您的商店
2. 创建新发票
3. 客户扫描二维码或向支付地址发送 BTC/USDT
4. 系统自动确认付款
5. 在仪表板中查看付款历史

---

## 日本語

### 概要

LiMeiHua Taproot Payment Gateway は、マーチャントがライトニングネットワークを通じてビットコイン、USDT、Taproot Assets トークンでの支払いを簡単に受け入れることができるオンライン決済システムです。

### 主な機能

- 💰 **マルチ通貨対応** - BTC、USDT、Taproot Assets トークン
- ⚡ **ライトニングネットワーク** - 高速決済、低手数料
- 🎯 **使いやすい** - インボイス管理ダッシュボード
- 📊 **完全な統計** - 収益、インボイス、支払いステータス
- 🔒 **安全** - API キー認証、Webhook サポート
- 📱 **レスポンシブ** - モバイルとデスクトップで動作

### インストール

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### 使用方法

1. ストアを登録
2. 新しいインボイスを作成
3. 顧客が QR コードをスキャンまたは支払いアドレスに BTC/USDT を送信
4. システムが支払いを自動確認
5. ダッシュボードで支払い履歴を表示

---

## 한국어

### 개요

LiMeiHua Taproot Payment Gateway는 상인이 라이트닝 네트워크를 통해 비트코인, USDT 및 Taproot Assets 토큰으로 결제를 쉽게 받을 수 있는 온라인 결제 시스템입니다.

### 주요 기능

- 💰 **다중 통화 지원** - BTC, USDT, Taproot Assets 토큰
- ⚡ **라이트닝 네트워크** - 빠른 결제, 낮은 수수료
- 🎯 **사용하기 쉬움** - 송장 관리 대시보드
- 📊 **완전한 통계** - 수익, 송장, 결제 상태
- 🔒 **안전** - API 키 인증, Webhook 지원
- 📱 **반응형** - 모바일 및 데스크톱에서 작동

### 설치

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### 사용 방법

1. 스토어 등록
2. 새 송장 작성
3. 고객이 QR 코드를 스캔하거나 결제 주소로 BTC/USDT 전송
4. 시스템이 자동으로 결제 확인
5. 대시보드에서 결제 내역 보기

---

## Español

### Descripción General

LiMeiHua Taproot Payment Gateway es un sistema de pago en línea que permite a los comerciantes aceptar pagos en Bitcoin, USDT y tokens de Taproot Assets a través de la Red Lightning con facilidad.

### Características Principales

- 💰 **Soporte Multimoneda** - BTC, USDT, tokens de Taproot Assets
- ⚡ **Red Lightning** - Pagos rápidos, tarifas bajas
- 🎯 **Fácil de Usar** - Panel de control de gestión de facturas
- 📊 **Estadísticas Completas** - Ingresos, facturas, estado de pago
- 🔒 **Seguro** - Autenticación de clave API, soporte de Webhook
- 📱 **Responsivo** - Funciona en dispositivos móviles y de escritorio

### Instalación

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### Uso

1. Registre su tienda
2. Crear nueva factura
3. El cliente escanea el código QR o envía BTC/USDT a la dirección de pago
4. El sistema confirma automáticamente el pago
5. Ver historial de pagos en el panel de control

---

## Français

### Aperçu

LiMeiHua Taproot Payment Gateway est un système de paiement en ligne qui permet aux marchands d'accepter facilement les paiements en Bitcoin, USDT et tokens Taproot Assets via le réseau Lightning.

### Caractéristiques Principales

- 💰 **Support Multidevises** - BTC, USDT, tokens Taproot Assets
- ⚡ **Réseau Lightning** - Paiements rapides, frais bas
- 🎯 **Facile à Utiliser** - Tableau de bord de gestion des factures
- 📊 **Statistiques Complètes** - Revenus, factures, état des paiements
- 🔒 **Sécurisé** - Authentification par clé API, support Webhook
- 📱 **Réactif** - Fonctionne sur mobile et bureau

### Installation

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### Utilisation

1. Enregistrez votre magasin
2. Créer une nouvelle facture
3. Le client scanne le code QR ou envoie BTC/USDT à l'adresse de paiement
4. Le système confirme automatiquement le paiement
5. Afficher l'historique des paiements dans le tableau de bord

---

## Deutsch

### Überblick

LiMeiHua Taproot Payment Gateway ist ein Online-Zahlungssystem, das Händlern ermöglicht, Zahlungen in Bitcoin, USDT und Taproot Assets-Token über das Lightning Network einfach zu akzeptieren.

### Hauptmerkmale

- 💰 **Multi-Währungs-Unterstützung** - BTC, USDT, Taproot Assets-Token
- ⚡ **Lightning Network** - Schnelle Zahlungen, niedrige Gebühren
- 🎯 **Benutzerfreundlich** - Rechnungsverwaltungs-Dashboard
- 📊 **Vollständige Statistiken** - Einnahmen, Rechnungen, Zahlungsstatus
- 🔒 **Sicher** - API-Schlüssel-Authentifizierung, Webhook-Unterstützung
- 📱 **Responsiv** - Funktioniert auf Mobilgeräten und Desktops

### Installation

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### Verwendung

1. Registrieren Sie Ihren Shop
2. Neue Rechnung erstellen
3. Kunde scannt QR-Code oder sendet BTC/USDT an Zahlungsadresse
4. System bestätigt Zahlung automatisch
5. Zahlungsverlauf im Dashboard anzeigen

---

## Português

### Visão Geral

LiMeiHua Taproot Payment Gateway é um sistema de pagamento online que permite aos comerciantes aceitar pagamentos em Bitcoin, USDT e tokens Taproot Assets através da Rede Lightning com facilidade.

### Recursos Principais

- 💰 **Suporte Multimoeda** - BTC, USDT, tokens Taproot Assets
- ⚡ **Rede Lightning** - Pagamentos rápidos, taxas baixas
- 🎯 **Fácil de Usar** - Painel de controle de gerenciamento de faturas
- 📊 **Estatísticas Completas** - Receita, faturas, status de pagamento
- 🔒 **Seguro** - Autenticação de chave API, suporte Webhook
- 📱 **Responsivo** - Funciona em dispositivos móveis e desktop

### Instalação

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### Uso

1. Registre sua loja
2. Criar nova fatura
3. Cliente escaneia código QR ou envia BTC/USDT para endereço de pagamento
4. Sistema confirma automaticamente o pagamento
5. Ver histórico de pagamentos no painel de controle

---

## Русский

### Обзор

LiMeiHua Taproot Payment Gateway - это система онлайн-платежей, которая позволяет торговцам легко принимать платежи в Bitcoin, USDT и токенах Taproot Assets через сеть Lightning.

### Основные возможности

- 💰 **Поддержка нескольких валют** - BTC, USDT, токены Taproot Assets
- ⚡ **Сеть Lightning** - Быстрые платежи, низкие комиссии
- 🎯 **Простота использования** - Панель управления счетами
- 📊 **Полная статистика** - Доход, счета, статус платежа
- 🔒 **Безопасность** - Аутентификация по ключу API, поддержка Webhook
- 📱 **Адаптивный дизайн** - Работает на мобильных устройствах и ПК

### Установка

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### Использование

1. Зарегистрируйте свой магазин
2. Создать новый счет
3. Клиент сканирует QR-код или отправляет BTC/USDT на адрес платежа
4. Система автоматически подтверждает платеж
5. Просмотр истории платежей на панели управления

---

## العربية

### نظرة عامة

LiMeiHua Taproot Payment Gateway هو نظام دفع عبر الإنترنت يسمح للتجار بقبول المدفوعات بسهولة بعملات البيتكوين و USDT وتوكنات Taproot Assets عبر شبكة Lightning.

### الميزات الرئيسية

- 💰 **دعم العملات المتعددة** - BTC و USDT وتوكنات Taproot Assets
- ⚡ **شبكة Lightning** - دفع سريع وأسعار منخفضة
- 🎯 **سهل الاستخدام** - لوحة تحكم إدارة الفواتير
- 📊 **إحصائيات شاملة** - الإيرادات والفواتير وحالة الدفع
- 🔒 **آمن** - مصادقة مفتاح API ودعم Webhook
- 📱 **سريع الاستجابة** - يعمل على الأجهزة المحمولة وأجهزة سطح المكتب

### التثبيت

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### الاستخدام

1. تسجيل متجرك
2. إنشاء فاتورة جديدة
3. يقوم العميل بمسح رمز الاستجابة السريعة أو إرسال BTC/USDT إلى عنوان الدفع
4. يؤكد النظام الدفع تلقائياً
5. عرض سجل الدفع في لوحة التحكم

---

## हिन्दी

### अवलोकन

LiMeiHua Taproot Payment Gateway एक ऑनलाइन भुगतान प्रणाली है जो व्यापारियों को लाइटनिंग नेटवर्क के माध्यम से बिटकॉइन, USDT और Taproot Assets टोकन में भुगतान आसानी से स्वीकार करने की अनुमति देता है।

### मुख्य विशेषताएं

- 💰 **बहु-मुद्रा समर्थन** - BTC, USDT, Taproot Assets टोकन
- ⚡ **लाइटनिंग नेटवर्क** - तेजी से भुगतान, कम शुल्क
- 🎯 **उपयोग में आसान** - चालान प्रबंधन डैशबोर्ड
- 📊 **संपूर्ण आंकड़े** - राजस्व, चालान, भुगतान स्थिति
- 🔒 **सुरक्षित** - API कुंजी प्रमाणीकरण, Webhook समर्थन
- 📱 **प्रतिक्रियाशील** - मोबाइल और डेस्कटॉप पर काम करता है

### इंस्टॉलेशन

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### उपयोग

1. अपनी दुकान पंजीकृत करें
2. नया चालान बनाएं
3. ग्राहक QR कोड स्कैन करता है या भुगतान पते पर BTC/USDT भेजता है
4. सिस्टम स्वचालित रूप से भुगतान की पुष्टि करता है
5. डैशबोर्ड में भुगतान इतिहास देखें

---

## Tiếng Việt

### Tổng Quan

LiMeiHua Taproot Payment Gateway là một hệ thống thanh toán trực tuyến cho phép các thương nhân dễ dàng chấp nhận thanh toán bằng Bitcoin, USDT và mã thông báo Taproot Assets thông qua Mạng Lightning.

### Các Tính Năng Chính

- 💰 **Hỗ Trợ Đa Tiền Tệ** - BTC, USDT, mã thông báo Taproot Assets
- ⚡ **Mạng Lightning** - Thanh toán nhanh, phí thấp
- 🎯 **Dễ Sử Dụng** - Bảng điều khiển quản lý hóa đơn
- 📊 **Thống Kê Đầy Đủ** - Doanh thu, hóa đơn, trạng thái thanh toán
- 🔒 **An Toàn** - Xác thực khóa API, hỗ trợ Webhook
- 📱 **Đáp Ứng** - Hoạt động trên thiết bị di động và máy tính để bàn

### Cài Đặt

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### Cách Sử Dụng

1. Đăng ký cửa hàng của bạn
2. Tạo hóa đơn mới
3. Khách hàng quét mã QR hoặc gửi BTC/USDT đến địa chỉ thanh toán
4. Hệ thống tự động xác nhận thanh toán
5. Xem lịch sử thanh toán trong bảng điều khiển

---

## Bahasa Indonesia

### Ikhtisar

LiMeiHua Taproot Payment Gateway adalah sistem pembayaran online yang memungkinkan pedagang menerima pembayaran dalam Bitcoin, USDT, dan token Taproot Assets melalui Jaringan Lightning dengan mudah.

### Fitur Utama

- 💰 **Dukungan Multi-Mata Uang** - BTC, USDT, token Taproot Assets
- ⚡ **Jaringan Lightning** - Pembayaran cepat, biaya rendah
- 🎯 **Mudah Digunakan** - Dasbor manajemen faktur
- 📊 **Statistik Lengkap** - Pendapatan, faktur, status pembayaran
- 🔒 **Aman** - Autentikasi kunci API, dukungan Webhook
- 📱 **Responsif** - Bekerja di perangkat seluler dan desktop

### Instalasi

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### Penggunaan

1. Daftarkan toko Anda
2. Buat faktur baru
3. Pelanggan memindai kode QR atau mengirim BTC/USDT ke alamat pembayaran
4. Sistem secara otomatis mengonfirmasi pembayaran
5. Lihat riwayat pembayaran di dasbor

---

## Bahasa Melayu

### Gambaran Keseluruhan

LiMeiHua Taproot Payment Gateway adalah sistem pembayaran dalam talian yang membolehkan peniaga menerima pembayaran dalam Bitcoin, USDT, dan token Taproot Assets melalui Rangkaian Lightning dengan mudah.

### Ciri-Ciri Utama

- 💰 **Sokongan Pelbagai Mata Wang** - BTC, USDT, token Taproot Assets
- ⚡ **Rangkaian Lightning** - Pembayaran cepat, yuran rendah
- 🎯 **Mudah Digunakan** - Papan pemuka pengurusan invois
- 📊 **Statistik Lengkap** - Pendapatan, invois, status pembayaran
- 🔒 **Selamat** - Pengesahan kunci API, sokongan Webhook
- 📱 **Responsif** - Berfungsi di peranti mudah alih dan desktop

### Pemasangan

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### Penggunaan

1. Daftarkan kedai Anda
2. Buat invois baru
3. Pelanggan mengimbas kod QR atau menghantar BTC/USDT ke alamat pembayaran
4. Sistem secara automatik mengesahkan pembayaran
5. Lihat sejarah pembayaran dalam papan pemuka

---

## Türkçe

### Genel Bakış

LiMeiHua Taproot Payment Gateway, tüccarların Bitcoin, USDT ve Taproot Assets jetonlarında Lightning Network aracılığıyla kolayca ödeme kabul etmesine olanak sağlayan bir çevrimiçi ödeme sistemidir.

### Temel Özellikler

- 💰 **Çok Para Birimi Desteği** - BTC, USDT, Taproot Assets jetonları
- ⚡ **Lightning Network** - Hızlı ödemeler, düşük ücretler
- 🎯 **Kullanımı Kolay** - Fatura yönetimi panosu
- 📊 **Tam İstatistikler** - Gelir, faturalar, ödeme durumu
- 🔒 **Güvenli** - API anahtarı kimlik doğrulaması, Webhook desteği
- 📱 **Duyarlı** - Mobil ve masaüstü cihazlarda çalışır

### Kurulum

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### Kullanım

1. Mağazanızı kaydedin
2. Yeni fatura oluşturun
3. Müşteri QR kodunu tarar veya ödeme adresine BTC/USDT gönderir
4. Sistem otomatik olarak ödemeyi onaylar
5. Panoda ödeme geçmişini görüntüleyin

---

## Italiano

### Panoramica

LiMeiHua Taproot Payment Gateway è un sistema di pagamento online che consente ai commercianti di accettare facilmente pagamenti in Bitcoin, USDT e token Taproot Assets tramite la Rete Lightning.

### Caratteristiche Principali

- 💰 **Supporto Multi-Valuta** - BTC, USDT, token Taproot Assets
- ⚡ **Rete Lightning** - Pagamenti veloci, commissioni basse
- 🎯 **Facile da Usare** - Pannello di controllo per la gestione delle fatture
- 📊 **Statistiche Complete** - Ricavi, fatture, stato dei pagamenti
- 🔒 **Sicuro** - Autenticazione della chiave API, supporto Webhook
- 📱 **Reattivo** - Funziona su dispositivi mobili e desktop

### Installazione

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### Utilizzo

1. Registra il tuo negozio
2. Crea una nuova fattura
3. Il cliente scansiona il codice QR o invia BTC/USDT all'indirizzo di pagamento
4. Il sistema conferma automaticamente il pagamento
5. Visualizza la cronologia dei pagamenti nel pannello di controllo

---

## Nederlands

### Overzicht

LiMeiHua Taproot Payment Gateway is een online betalingssysteem waarmee handelaren eenvoudig betalingen in Bitcoin, USDT en Taproot Assets-tokens via het Lightning Network kunnen accepteren.

### Hoofdfuncties

- 💰 **Ondersteuning voor Meerdere Valuta's** - BTC, USDT, Taproot Assets-tokens
- ⚡ **Lightning Network** - Snelle betalingen, lage kosten
- 🎯 **Gemakkelijk te Gebruiken** - Factuurbeheerdashboard
- 📊 **Volledige Statistieken** - Inkomsten, facturen, betalingsstatus
- 🔒 **Veilig** - API-sleutelauthenticatie, Webhook-ondersteuning
- 📱 **Responsief** - Werkt op mobiele apparaten en desktops

### Installatie

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### Gebruik

1. Registreer uw winkel
2. Maak een nieuwe factuur
3. Klant scant QR-code of stuurt BTC/USDT naar betalingsadres
4. Systeem bevestigt betaling automatisch
5. Bekijk betalingsgeschiedenis in dashboard

---

## Polski

### Przegląd

LiMeiHua Taproot Payment Gateway to system płatności online, który umożliwia handlowcom łatwe akceptowanie płatności w Bitcoin, USDT i tokenach Taproot Assets za pośrednictwem sieci Lightning.

### Główne Cechy

- 💰 **Obsługa Wielu Walut** - BTC, USDT, tokeny Taproot Assets
- ⚡ **Sieć Lightning** - Szybkie płatności, niskie opłaty
- 🎯 **Łatwe w Użyciu** - Pulpit nawigacyjny zarządzania fakturami
- 📊 **Pełne Statystyki** - Przychody, faktury, status płatności
- 🔒 **Bezpieczne** - Uwierzytelnianie klucza API, obsługa Webhook
- 📱 **Responsywne** - Działa na urządzeniach mobilnych i komputerach stacjonarnych

### Instalacja

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### Użycie

1. Zarejestruj swój sklep
2. Utwórz nową fakturę
3. Klient skanuje kod QR lub wysyła BTC/USDT na adres płatności
4. System automatycznie potwierdza płatność
5. Wyświetl historię płatności na pulpicie nawigacyjnym

---

## Svenska

### Översikt

LiMeiHua Taproot Payment Gateway är ett onlinebetalningssystem som gör det möjligt för handlare att enkelt acceptera betalningar i Bitcoin, USDT och Taproot Assets-tokens via Lightning Network.

### Huvudfunktioner

- 💰 **Stöd för Flera Valutor** - BTC, USDT, Taproot Assets-tokens
- ⚡ **Lightning Network** - Snabba betalningar, låga avgifter
- 🎯 **Lätt att Använda** - Instrumentpanel för fakturahantering
- 📊 **Fullständig Statistik** - Intäkter, fakturor, betalningsstatus
- 🔒 **Säker** - API-nyckelautentisering, Webhook-stöd
- 📱 **Responsiv** - Fungerar på mobila enheter och stationära datorer

### Installation

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### Användning

1. Registrera din butik
2. Skapa en ny faktura
3. Kunden skannar QR-kod eller skickar BTC/USDT till betalningsadress
4. Systemet bekräftar betalningen automatiskt
5. Visa betalningshistorik i instrumentpanelen

---

## Українська

### Огляд

LiMeiHua Taproot Payment Gateway - це система онлайн-платежів, яка дозволяє торговцям легко приймати платежі в Bitcoin, USDT та токенах Taproot Assets через мережу Lightning.

### Основні Функції

- 💰 **Підтримка Кількох Валют** - BTC, USDT, токени Taproot Assets
- ⚡ **Мережа Lightning** - Швидкі платежі, низькі комісії
- 🎯 **Простота Використання** - Панель управління рахунками
- 📊 **Повна Статистика** - Дохід, рахунки, статус платежу
- 🔒 **Безпека** - Автентифікація ключа API, підтримка Webhook
- 📱 **Адаптивний Дизайн** - Працює на мобільних пристроях і ПК

### Установка

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### Використання

1. Зареєструйте свій магазин
2. Створіть новий рахунок
3. Клієнт сканує QR-код або відправляє BTC/USDT на адресу платежу
4. Система автоматично підтверджує платіж
5. Переглядайте історію платежів на панелі управління

---

## Čeština

### Přehled

LiMeiHua Taproot Payment Gateway je systém online plateb, který umožňuje obchodníkům snadno přijímat platby v Bitcoin, USDT a tokenech Taproot Assets prostřednictvím sítě Lightning.

### Hlavní Funkce

- 💰 **Podpora Více Měn** - BTC, USDT, tokeny Taproot Assets
- ⚡ **Síť Lightning** - Rychlé platby, nízké poplatky
- 🎯 **Snadné Použití** - Ovládací panel pro správu faktur
- 📊 **Úplná Statistika** - Příjmy, faktury, stav platby
- 🔒 **Bezpečnost** - Ověřování klíče API, podpora Webhook
- 📱 **Responzivní** - Funguje na mobilních zařízeních a stolních počítačích

### Instalace

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### Použití

1. Zaregistrujte svůj obchod
2. Vytvořte novou fakturu
3. Zákazník naskenuje QR kód nebo pošle BTC/USDT na adresu platby
4. Systém automaticky potvrdí platbu
5. Zobrazte historii plateb na ovládacím panelu

---

## Română

### Prezentare Generală

LiMeiHua Taproot Payment Gateway este un sistem de plată online care permite comercianților să accepte cu ușurință plăți în Bitcoin, USDT și tokenuri Taproot Assets prin rețeaua Lightning.

### Caracteristici Principale

- 💰 **Suport Multivalută** - BTC, USDT, tokenuri Taproot Assets
- ⚡ **Rețeaua Lightning** - Plăți rapide, taxe mici
- 🎯 **Ușor de Utilizat** - Tabloul de bord de gestionare a facturilor
- 📊 **Statistici Complete** - Venituri, facturi, stare plată
- 🔒 **Sigur** - Autentificare cheie API, suport Webhook
- 📱 **Responsiv** - Funcționează pe dispozitive mobile și desktop

### Instalare

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### Utilizare

1. Înregistrați-vă magazinul
2. Creați o nouă factură
3. Clientul scanează codul QR sau trimite BTC/USDT la adresa de plată
4. Sistemul confirmă automat plata
5. Vizualizați istoricul plăților în tabloul de bord

---

## Ελληνικά

### Επισκόπηση

LiMeiHua Taproot Payment Gateway είναι ένα σύστημα ηλεκτρονικής πληρωμής που επιτρέπει στους έμπορους να δέχονται εύκολα πληρωμές σε Bitcoin, USDT και tokenα Taproot Assets μέσω του δικτύου Lightning.

### Κύρια Χαρακτηριστικά

- 💰 **Υποστήριξη Πολλαπλών Νομισμάτων** - BTC, USDT, tokenα Taproot Assets
- ⚡ **Δίκτυο Lightning** - Γρήγορες πληρωμές, χαμηλές χρεώσεις
- 🎯 **Εύκολη Χρήση** - Πίνακας ελέγχου διαχείρισης τιμολογίων
- 📊 **Πλήρη Στατιστικά** - Έσοδα, τιμολόγια, κατάσταση πληρωμής
- 🔒 **Ασφάλεια** - Ταυτοποίηση κλειδιού API, υποστήριξη Webhook
- 📱 **Ανταποκρινόμενο** - Λειτουργεί σε κινητές συσκευές και επιτραπέζιους υπολογιστές

### Εγκατάσταση

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### Χρήση

1. Εγγραφή του καταστήματός σας
2. Δημιουργία νέου τιμολογίου
3. Ο πελάτης σαρώνει τον κωδικό QR ή στέλνει BTC/USDT στη διεύθυνση πληρωμής
4. Το σύστημα επιβεβαιώνει αυτόματα την πληρωμή
5. Προβολή ιστορικού πληρωμών στον πίνακα ελέγχου

---

## עברית

### סקירה כללית

LiMeiHua Taproot Payment Gateway היא מערכת תשלום מקוונת המאפשרת לסוחרים לקבל בקלות תשלומים בביטקוין, USDT וטוקנים של Taproot Assets דרך רשת Lightning.

### תכונות עיקריות

- 💰 **תמיכה בעלויות מרובות** - BTC, USDT, טוקנים של Taproot Assets
- ⚡ **רשת Lightning** - תשלומים מהירים, עמלות נמוכות
- 🎯 **קל לשימוש** - לוח בקרה לניהול חשבוניות
- 📊 **סטטיסטיקה מלאה** - הכנסות, חשבוניות, מצב תשלום
- 🔒 **בטוח** - אימות מפתח API, תמיכה ב-Webhook
- 📱 **רספונסיבי** - פועל בהתקנים ניידים ובמחשבים שולחניים

### התקנה

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### שימוש

1. רישום החנות שלך
2. יצירת חשבונית חדשה
3. הלקוח סורק קוד QR או שולח BTC/USDT לכתובת התשלום
4. המערכת מאשרת את התשלום באופן אוטומטי
5. צפייה בהיסטוריית התשלומים בלוח הבקרה

---

## বাংলা

### সংক্ষিপ্ত বিবরণ

LiMeiHua Taproot Payment Gateway একটি অনলাইন পেমেন্ট সিস্টেম যা ব্যবসায়ীদের লাইটনিং নেটওয়ার্কের মাধ্যমে বিটকয়েন, USDT এবং Taproot Assets টোকেনে সহজেই অর্থ প্রদান গ্রহণ করতে দেয়।

### প্রধান বৈশিষ্ট্য

- 💰 **বহু-মুদ্রা সমর্থন** - BTC, USDT, Taproot Assets টোকেন
- ⚡ **লাইটনিং নেটওয়ার্ক** - দ্রুত পেমেন্ট, কম ফি
- 🎯 **ব্যবহার করা সহজ** - চালান ব্যবস্থাপনা ড্যাশবোর্ড
- 📊 **সম্পূর্ণ পরিসংখ্যান** - রাজস্ব, চালান, পেমেন্ট স্থিতি
- 🔒 **নিরাপদ** - API কী প্রমাণীকরণ, Webhook সমর্থন
- 📱 **প্রতিক্রিয়াশীল** - মোবাইল এবং ডেস্কটপ ডিভাইসে কাজ করে

### ইনস্টলেশন

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### ব্যবহার

1. আপনার দোকান নিবন্ধন করুন
2. নতুন চালান তৈরি করুন
3. গ্রাহক QR কোড স্ক্যান করে বা পেমেন্ট ঠিকানায় BTC/USDT পাঠায়
4. সিস্টেম স্বয়ংক্রিয়ভাবে পেমেন্ট নিশ্চিত করে
5. ড্যাশবোর্ডে পেমেন্ট ইতিহাস দেখুন

---

## Filipino

### Pangkalahatang Paglalarawan

LiMeiHua Taproot Payment Gateway ay isang online payment system na nagbibigay-daan sa mga negosyante na madaling tumanggap ng pagbabayad sa Bitcoin, USDT, at Taproot Assets tokens sa pamamagitan ng Lightning Network.

### Pangunahing Mga Tampok

- 💰 **Suporta sa Maraming Pera** - BTC, USDT, Taproot Assets tokens
- ⚡ **Lightning Network** - Mabilis na pagbabayad, mababang bayad
- 🎯 **Madaling Gamitin** - Dashboard para sa pamamahala ng invoice
- 📊 **Kumpletong Istatistika** - Kita, invoice, status ng pagbabayad
- 🔒 **Ligtas** - API key authentication, Webhook support
- 📱 **Responsive** - Gumagana sa mobile at desktop devices

### Pag-install

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### Paggamit

1. Magparehistro ng iyong tindahan
2. Lumikha ng bagong invoice
3. Ang customer ay nag-scan ng QR code o nagpadala ng BTC/USDT sa payment address
4. Ang sistema ay awtomatikong nagpapatunay ng pagbabayad
5. Tingnan ang payment history sa dashboard

---

## Kiswahili

### Muhtasari

LiMeiHua Taproot Payment Gateway ni mfumo wa malipo mtandaoni unaoweza kuruhusu wauzaji kupokea malipo katika Bitcoin, USDT, na tokens za Taproot Assets kupitia Mtandao wa Lightning kwa urahisi.

### Sifa Kuu

- 💰 **Msaada wa Sarafu Nyingi** - BTC, USDT, tokens za Taproot Assets
- ⚡ **Mtandao wa Lightning** - Malipo ya haraka, ada chini
- 🎯 **Rahisi Kutumia** - Dashibodi ya usimamizi wa ankara
- 📊 **Takwimu Kamili** - Mapato, ankara, hali ya malipo
- 🔒 **Salama** - Uthibitisho wa ufunguo wa API, msaada wa Webhook
- 📱 **Inayojibu** - Inafanya kazi kwenye simu na kompyuta za mezani

### Uongozaji

```bash
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway
npm install
cp .env.example .env
npm run dev
```

### Matumizi

1. Jisajili duka lako
2. Tengeneza ankara mpya
3. Mteja husoma nambari ya QR au kutuma BTC/USDT kwenye anwani ya malipo
4. Mfumo unakubali malipo kiotomatiki
5. Angalia historia ya malipo kwenye dashibodi

---

## 📁 Project Structure

```
limeihua-taproot-payment-gateway/
├── backend/
│   ├── server.js                  # Express server with API routes
│   ├── scripts/
│   │   └── seed-db.js            # Database seeding script
│   └── tests/
│       └── api.test.js           # API tests
├── frontend/
│   ├── src/
│   │   ├── App.jsx               # Main React component
│   │   └── App.css               # Cyberpunk styles
│   ├── public/
│   │   └── index.html            # HTML template
│   └── package.json              # Frontend dependencies
├── .env.example                   # Environment variables template
├── package.json                   # Backend dependencies
├── README.md                      # This file
└── LICENSE                        # MIT License
```

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway.git
cd limeihua-taproot-payment-gateway

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run dev

# Run tests
npm test
```

---

## 📝 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| POST | `/api/merchants/register` | Register merchant |
| POST | `/api/invoices/create` | Create invoice |
| GET | `/api/invoices/:invoiceId` | Get invoice details |
| POST | `/api/payments/record` | Record payment |
| GET | `/api/merchants/:merchantId/stats` | Get merchant stats |
| GET | `/api/merchants/:merchantId/invoices` | Get merchant invoices |
| GET | `/api/currencies` | Get supported currencies |
| GET | `/api/rates` | Get exchange rates |

---

## 📝 License

MIT License - See [LICENSE](LICENSE) file for details

---

## 👨‍💻 Author

**Mr. Kanutsanan Pongpanna** (นายคณัสนันท์ พงษ์พันนา)

Dedicated to **LiMeiHua Grand Mother** (ท่านผู้เฒ่าหลี่เหมยฮัว)

---

**Repository:** [GitHub](https://github.com/kanutsanan1988/LiMeiHua-Taproot-Payment-Gateway)

**Version:** 1.0.0

**Last Updated:** 2026-03-14
