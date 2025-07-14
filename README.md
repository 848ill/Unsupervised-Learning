# 🚀 The Prompt Alchemist

**Rahasia Mengubah Kata-Kata Biasa Menjadi Emas Digital yang Menghasilkan Jutaan Rupiah**

![The Prompt Alchemist](https://img.shields.io/badge/Next.js-15.3.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Vercel-Deploy-black?style=for-the-badge&logo=vercel)

## 📋 Deskripsi

Website landing page modern dan responsif untuk produk digital "The Prompt Alchemist" - panduan komprehensif untuk menguasai seni prompt engineering. Dibangun dengan teknologi terkini untuk memberikan experience yang optimal dan performa tinggi.

## ✨ Fitur Utama

- 🎨 **Modern Dark Theme** - Design elegan dengan accent cyan yang eye-catching
- 📱 **Fully Responsive** - Optimized untuk semua device (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with Next.js 15 dan Turbopack untuk loading super cepat
- 🎯 **Interactive Elements** - Smooth scrolling, hover effects, dan animations
- ⏰ **Real-time Countdown** - Timer countdown untuk urgency dalam pricing
- 🛡️ **SEO Optimized** - Meta tags lengkap untuk search engine optimization
- 🚀 **Vercel Ready** - Konfigurasi deployment yang sudah siap production

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG Icons
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel
- **API**: Next.js API Routes

## 🏗️ Struktur Project

```
prompt-alchemist/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx      # Navigation header
│   │   │   ├── Hero.tsx        # Hero section
│   │   │   ├── Comparison.tsx  # Manual vs Alchemist comparison
│   │   │   ├── Features.tsx    # Product features showcase
│   │   │   ├── Pricing.tsx     # Pricing dengan countdown
│   │   │   └── Footer.tsx      # Footer section
│   │   ├── api/
│   │   │   └── purchase/
│   │   │       └── route.ts    # API endpoint untuk purchase
│   │   ├── globals.css         # Global styling
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Homepage
├── public/                     # Static assets
├── vercel.json                 # Vercel configuration
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd prompt-alchemist
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open browser**
```
http://localhost:3000
```

## 📱 Sections Overview

### 1. Header Navigation
- Logo dengan brand identity
- Navigation menu (Home, Tentang, Isi Kit, Harga)
- CTA button dengan smooth scroll ke pricing

### 2. Hero Section
- Brand statement yang powerful
- Value proposition yang clear
- Main CTA button

### 3. Comparison Section
- Perbandingan "Manual Thinker" vs "Prompt Alchemist"
- Highlight pain points vs solutions
- Visual differentiation dengan color coding

### 4. Features Section
- Product showcase dengan 3D effect
- Detailed features breakdown
- "Isi Brankas Digital" section dengan 4 main features

### 5. Pricing Section
- Limited time offer dengan countdown timer
- Clear pricing structure (Regular vs Discounted)
- Multiple trust signals dan guarantees
- Direct purchase CTA

### 6. Footer
- Brand reinforcement
- Important links
- Copyright information

## 🎨 Design Features

- **Color Scheme**: Dark theme dengan cyan accents (#06b6d4)
- **Typography**: Geist font family untuk readability optimal
- **Animations**: Smooth transitions dan hover effects
- **Glow Effects**: Custom CSS glow effects untuk premium look
- **Gradients**: Strategic use of gradients untuk visual hierarchy

## 📊 Performance Optimizations

- ⚡ Next.js 15 dengan Turbopack untuk fast compilation
- 🖼️ Optimized asset loading
- 📱 Mobile-first responsive design
- 🎯 Code splitting untuk faster page loads
- 🔄 Efficient re-rendering dengan React best practices

## 🚀 Deployment

### Deploy ke Vercel (Recommended)

1. **Push ke GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Connect ke Vercel**
- Login ke [vercel.com](https://vercel.com)
- Import GitHub repository
- Deploy akan otomatis berjalan

3. **Environment Variables** (jika diperlukan)
- Set environment variables di Vercel dashboard
- Untuk production API keys, database URLs, dll.

### Deploy Manual
```bash
npm run build
npm start
```

## 🔧 Configuration

### Vercel Configuration (`vercel.json`)
- Framework detection: Next.js
- API Routes configuration
- Security headers
- Build optimization

### Tailwind Configuration
- Custom color scheme
- Custom utilities untuk glow effects
- Responsive breakpoints
- Typography scaling

## 📈 SEO & Meta Tags

- Comprehensive meta descriptions
- Open Graph tags untuk social sharing
- Structured data markup
- Indonesian language optimization
- Mobile-friendly optimization

## 🛡️ Security Features

- Content Security Policy headers
- XSS Protection
- CSRF protection via Next.js
- Input validation pada API routes

## 📝 API Documentation

### POST `/api/purchase`

Handle purchase requests dari pricing section.

**Request Body:**
```json
{
  "email": "user@example.com",
  "name": "User Name",
  "phone": "+62xxx" // optional
}
```

**Response:**
```json
{
  "message": "Success message",
  "success": true,
  "data": {
    "orderId": "PA-timestamp",
    "timestamp": "ISO date"
  }
}
```

## 🎯 Conversion Optimization

- **Above-the-fold optimization**: Hero section dengan clear value prop
- **Social proof**: Trust signals dan guarantees
- **Urgency**: Countdown timer untuk limited time offer
- **Friction reduction**: Single-page design dengan smooth scroll
- **Mobile optimization**: Touch-friendly buttons dan responsive layout

## 📞 Support

Untuk pertanyaan teknis atau support:
- Email: support@promptalchemist.com
- Documentation: docs.promptalchemist.com

## 📄 License

© 2025 Prompt Alchemist. All rights reserved.

---

**Dibuat dengan ❤️ menggunakan Next.js dan Tailwind CSS**
