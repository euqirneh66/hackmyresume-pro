# ⚡ HackMyResume Pro

[![Next.js 15](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Live-Demo-emerald?style=for-the-badge&logo=googlechrome)](https://euqirneh66.github.io/hackmyresume-pro/)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Feuqirneh66%2Fhackmyresume-pro)

> A fast, modern, and privacy-first **ATS Resume Builder & Portfolio Generator**. Build pixel-perfect, recruiter-ready resumes in real time with instant multi-format export (PDF, JSON, Markdown).

---


---

## 🌐 Live Interactive Demo

Test the live application directly in your browser:
👉 **[https://euqirneh66.github.io/hackmyresume-pro/](https://euqirneh66.github.io/hackmyresume-pro/)**

## ✨ Key Features

- ⚡ **Next.js 15 App Router & React 19**: Modern architecture with Server Components and instant client hydration.
- 🎯 **100% ATS-Compliant Layouts**: Designed to seamlessly pass through Applicant Tracking Systems (Workday, Greenhouse, Lever).
- 🎨 **4 Built-in Themes**:
  - `Modern Clean`: Emerald & slate accents ideal for tech and startup roles.
  - `Minimalist Tech`: Monospace typography with crisp information density.
  - `Executive Classic`: Traditional serif typography for corporate and leadership positions.
  - `Compact ATS`: Single-column layout maximizing content density and machine readability.
- 📄 **Multi-Format Export**:
  - **Pixel-perfect PDF**: Uses dedicated print stylesheets with zero layout shift.
  - **JSON Resume Standard**: Full import and export compatibility with the open standard.
  - **Markdown & Plain Text**: Clean markdown ready for GitHub profiles and developer portfolios.
- 🛡️ **100% Client-Side Privacy**: Your resume data stays in your browser. No third-party data tracking.
- 🌓 **Modern Dark & Light UI**: Sleek workspace built with Tailwind CSS and Lucide icons.

---

## 🚀 Quick Start in 3 Steps

### 1. Clone the repository
```bash
git clone https://github.com/euqirneh66/hackmyresume-pro.git
cd hackmyresume-pro
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to start building.

---

## 🌐 Deploy to Vercel in 1 Click

Deploy your own instance for free with Vercel:

[![Live Demo](https://img.shields.io/badge/Live-Demo-emerald?style=for-the-badge&logo=googlechrome)](https://euqirneh66.github.io/hackmyresume-pro/)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Feuqirneh66%2Fhackmyresume-pro)

---

## 📁 Project Structure

```
hackmyresume-pro/
├── src/
│   ├── app/
│   │   ├── globals.css      # Print & Tailwind styling
│   │   ├── layout.tsx       # Root layout & SEO metadata
│   │   └── page.tsx         # Interactive resume builder & live A4 canvas
│   └── types/
│       └── resume.ts        # TypeScript schema for JSON Resume standard
├── public/                  # Static assets & icons
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # Strict TypeScript configuration
└── README.md
```

---

## 📄 License

This project is open-source and licensed under the permissive **[MIT License](LICENSE)**.
