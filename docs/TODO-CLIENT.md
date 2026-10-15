# Wincy Software Solutions — Client Action Items & Configuration Checklist

This document catalogs every item requiring verification, custom assets, or final copy confirmation from Wincy Software Solutions management.

---

## 1. Company Statistics & Client Metrics (Flagged in Brief)
- [ ] **Enterprise Clients Count Discrepancy**:
  - The Stats section currently specifies **2+ Enterprise Clients**, while the About section badge displays **"40+ Enterprise clients modernized worldwide"**.
  - *Action*: Confirm the verified production client count to be reflected consistently across the site.
- [ ] **Applications Assessed Metric**:
  - Currently set to **1+ Applications Assessed**. Confirm if a higher verified number (e.g., 25+, 100k+ LOC) should replace this placeholder.
- [ ] **Modernization Projects Metric**:
  - Currently set to **1+ Modernization Projects**. Confirm the verified number of delivered engagements.

---

## 2. Testimonials (Quotes 2 & 3)
- [ ] **Testimonial 1 (Verified)**:
  - *"The modernization assessment gave our team a clear roadmap that significantly reduced project risk from day one."* — Thomas, Enterprise Architect (5 Stars)
- [ ] **Testimonial 2 (Placeholder)**:
  - Current placeholder: K. Ramanathan, VP of Engineering, Logistics Corporation.
  - *Action*: Supply verified client quote, name, title, and organization.
- [ ] **Testimonial 3 (Placeholder)**:
  - Current placeholder: Sarah M., Chief Technology Officer, Healthcare Platforms.
  - *Action*: Supply verified client quote, name, title, and organization.

---

## 3. Services Truncated Copy Confirmation
The following service descriptions had truncated sections in the original source and were completed with sensible enterprise engineering specifications. Please review and approve:
- [ ] **Application Reengineering**:
  - *Live Copy*: *"Refactor monolithic applications into scalable, maintainable, and testable modern cloud architectures."*
- [ ] **API & Microservices Modernization**:
  - *Live Copy*: *"Transform legacy integrations into secure, scalable, reusable APIs and event-driven microservices."*
- [ ] **Automated Documentation**:
  - *Live Copy*: *"Generate up-to-date technical documentation, architecture diagrams, API references, and knowledge bases automatically."*

---

## 4. Official Social Media Profile URLs
In accordance with design decisions, social icons are strictly hidden until a valid URL is provided.
When ready, update the `socials` array in `src/content/site.ts`:
- [ ] **LinkedIn URL**: (e.g., `https://linkedin.com/company/wincy-software-solutions`)
- [ ] **Twitter / X URL**: (e.g., `https://x.com/wincysoftware`)
- [ ] **Facebook URL**: (e.g., `https://facebook.com/wincysoftwaresolutions`)
- [ ] **Instagram URL**: (e.g., `https://instagram.com/wincysoftware`)
- [ ] **YouTube URL**: (e.g., `https://youtube.com/@wincysoftware`)

---

## 5. Logo & Brand Assets
- [ ] **Replace Logo Placeholders**:
  - Current SVG placeholders are implemented at `public/images/logo-light.svg` and `public/images/logo-dark.svg` featuring a chess piece emblem (purple/pink) with red serif "WINCY" and pink "SOFTWARE SOLUTIONS".
  - *Action*: Once the final vector files or transparent PNGs are ready, drop them directly into `public/images/` keeping the same filenames.

---

## 6. Formspree Project ID for Contact & Free Assessment Forms
- [ ] **Connect Production Formspree**:
  - Sign in to [Formspree](https://formspree.io) and create a form endpoint.
  - Paste your Formspree Form ID into `.env.local` as `NEXT_PUBLIC_FORMSPREE_ID=your_id`.
  - Submissions from the Contact form, Free Assessment tool, and Demo Booker will instantly deliver to `wincysoftwaresolutions@gmail.com`.

---

## 7. Production Domain & Vercel Deployment
- [ ] **DNS & Site URL**:
  - Current placeholder is `https://www.wincysoftwaresolutions.com`.
  - Set `NEXT_PUBLIC_SITE_URL` in your Vercel project environment variables to match your final production domain.
- [ ] **Analytics (Optional)**:
  - A marked placeholder is ready in `src/app/layout.tsx` `<head>` for Google Tag Manager, Plausible, or PostHog tracking scripts.
