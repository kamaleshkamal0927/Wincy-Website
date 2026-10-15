# Wincy Software Solutions — Enterprise Modernization Platform

> Production-ready website for **Wincy Software Solutions**, an AI-powered legacy system modernization engineering firm based in Chennai, India.

---

## Technical Architecture & Stack

- **Framework**: Next.js 15 (App Router) + React 19 + TypeScript (Strict mode)
- **Styling**: Tailwind CSS with custom design tokens (Mint, Lime, Obsidian Black, Grade Matrix)
- **Animations**: Framer Motion with Apple-style springs and `prefers-reduced-motion` fallbacks
- **Smooth Scrolling**: Lenis inertial scrolling with touch and accessibility checks
- **Icons**: Lucide React
- **Forms**: Formspree integration with honeypot spam protection, loading/success/error states, and email mailto fallback
- **Single Source of Truth**: `src/content/site.ts` holds all company copy, contact facts, metadata, and service descriptions
- **SEO & Metadata**: Next.js Metadata API, dynamic `sitemap.ts`, `robots.ts`, dynamic `opengraph-image.tsx`, and JSON-LD schemas (`Organization`, `FAQPage`, `Service`, `Article`)

---

## Quick Start (Run Locally)

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env.local

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Build & Quality Gates

```bash
# Type check and build for production
npm run build

# Start production server
npm start

# Run ESLint quality gate
npm run lint
```

---

## Deploy to Vercel

1. Push this repository to GitHub or GitLab.
2. In [Vercel](https://vercel.com), click **Add New Project** and import the repository.
3. Next.js 15 settings are auto-detected.
4. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL`: Your live domain (e.g., `https://www.wincysoftwaresolutions.com`)
   - `NEXT_PUBLIC_FORMSPREE_ID`: Your Formspree form ID
5. Click **Deploy**.

---

## Key Design & Implementation Decisions

1. **Brand Identity & Logo**:
   - The logo incorporates a chess piece (King/Queen crown) emblem with purple/pink gradient accents and a red serif "WINCY" wordmark with small pink "SOFTWARE SOLUTIONS" subtitle (`public/images/logo-dark.svg` and `logo-light.svg`).
   - Orange is strictly excluded from all palettes.
2. **Strict Social Media Visibility**:
   - Social icons are completely hidden when their URL is blank in `src/content/site.ts`.
3. **Form Submissions**:
   - Uses Formspree with invisible honeypot field (`_gotcha`), automatic status morphing, and direct mailto fallback to `wincysoftwaresolutions@gmail.com`.
4. **Code-Built Interactive Mockups**:
   - Rather than static raster screenshots, the Hero assessment window, Fanned windows, and Laptop Dashboard are built as lightweight, themeable React components with real-time counters and SVG charts.
5. **Analytics**:
   - A marked placeholder `<head>` slot is reserved in `src/app/layout.tsx` for Google Tag Manager, Plausible, or PostHog.

---

## Responsive QA Checklist

| Breakpoint | Target Devices | Verification Focus |
|---|---|---|
| **320px – 375px** | iPhone SE, Fold devices | No horizontal scroll, hamburger menu expands smoothly, form inputs at least 16px font (prevents iOS auto-zoom). |
| **414px – 768px** | Large smartphones, mini tablets | Hero mockup scales without clipping, CTA band stacks gracefully, accordion tabs expand smoothly. |
| **768px – 1024px** | Tablets & small laptops | 2-column card layouts, smooth navigation drawer transition, table containers allow horizontal scroll if required. |
| **1024px – 1440px** | Desktops & MacBooks | Top announcement bar, full desktop navigation with dropdowns, fanned windows spring hover physics active. |
| **1920px+** | Ultra-wide displays | Container constrained to `1280px` max-width with generous, balanced whitespace and centered layout. |

---

## Client Review & Action Items

See [`docs/TODO-CLIENT.md`](docs/TODO-CLIENT.md) for items requiring final confirmation (verified client count, testimonials 2 & 3, custom domain).
