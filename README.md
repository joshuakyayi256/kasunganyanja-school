# Kasunganyanja Parents Primary School — Website

A fast, accessible, mobile-first React site for a Ugandan primary school.
Focus areas: **easy donations (1–2 clicks), impact transparency, quick admissions, and community trust.**

## ✨ Features

* **Uniform sky theme** with navy/gold accents, rounded cards, tasteful motion
* **Persistent Donate CTA** (header on desktop, sticky bottom bar on mobile)
* **Flutterwave inline checkout** (MoMo UG, cards, bank transfer)
* **Donation Progress** (goal vs. raised) + **Impact Calculator**
* **Sponsor a Child** (mock UI ready; plug server-side subscriptions later)
* **Admissions** (apply online + schedule a visit)
* **Academics** (curriculum, daily schedule 8–5 pm, clubs/sports)
* **About & Impact** (mission/vision band, timeline, KPIs, reports)
* **News & Events, Gallery, Contact** (map + quick form)
* **Performance & a11y minded** (lazy images, semantic structure, high contrast)

## 🧰 Tech Stack

* **React + TypeScript + Vite**
* **Tailwind CSS** (utility-first styling)
* **Lucide Icons**
* **Vercel** (hosting)
* **Flutterwave** (payments)
* Optional form libs: React Hook Form + Zod (not required to run)

## 🚀 Quick Start

```bash
# 0) Clone
git clone https://github.com/<you>/kasunganyanja-school.git
cd kasunganyanja-school

# 1) Install
npm i

# 2) Dev
npm run dev
# open http://localhost:5173

# 3) Build
npm run build
npm run preview
```
> **Note:** The current project uses **inline Flutterwave checkout** client-side. For **production-grade receipts & verification**, add a small server (e.g., `/api/flw/webhook`) to validate events with `FLW_WEBHOOK_SECRET` and mark donations as paid.

Also ensure this script is present in `index.html`:

```html
<script src="https://checkout.flutterwave.com/v3.js"></script>
```

## 🖼️ Images & Assets

All images live under `public/images` and are served at `/images/...`.

```
public/
  images/
    hero/        # home.jpg, about.jpg, academics.jpg, donate.jpg
    facilities/  # block-a.jpg, library.jpg, playground.jpg
    gallery/     # 2025-*.jpg|webp
```

* Reference in code: `<img src="/images/hero/home.jpg" />` or pass to components (e.g., `PageHero bgImage="/images/hero/home.jpg"`).
* Production is case-sensitive — keep filenames lowercase with hyphens.
* Prefer WebP for speed. Target ≤ 300 KB for hero images.

## 🧭 Project Structure (high-level)

```
src/
  components/          # UI building blocks (NavBar, PageHero, cards, forms, etc.)
  pages/               # Route pages (Home, About, Academics, Admissions, Donate, Impact, News, Gallery, Contact)
  data/                # school.ts (content), images.ts (optional manifest)
  lib/                 # cn (class merge), hooks (e.g., useLockBodyScroll)
  index.css            # Tailwind base + global styles (sky background)
```

## 🧪 Scripts

```bash
npm run dev       # local dev
npm run build     # typecheck + production build (tsc -b && vite build)
npm run preview   # serve dist locally
```

## 🌐 Deployment (Vercel)

* Connect repo → set **Production Branch = `main`**.
* Add env vars in Project Settings.
* Push to `main` → Vercel auto-builds and deploys.

## 🔄 Git Workflow

**Feature branches** keep `main` clean. Example flow for the “UI polish sky theme”:

```bash
# 1) Make sure you're on main and up to date
git checkout main
git pull origin main

# 2) Create local branch from remote (if exists) or from main
git checkout -b feat/ui-polish-sky-theme origin/feat/ui-polish-sky-theme || git checkout -b feat/ui-polish-sky-theme

# ... commit changes ...

# 3) Merge into main (PR recommended) — or CLI:
git checkout main
git merge --no-ff feat/ui-polish-sky-theme -m "Merge: UI polish sky theme"
git push origin main

# 4) Cleanup
git branch -d feat/ui-polish-sky-theme
```

**Recommended:** Open a Pull Request on GitHub → **Squash & merge** for a clean history.

## 📋 Content to Collect from Client (to fully enable donations & pages)

* **Org & Legal:** official name, registration/NGO number, address, contact, Privacy/Terms, photo consent policy.
* **Branding:** logo (SVG/PNG), favicon, color references.
* **Media:** 10–20 approved photos (with alt text).
* **Donations:** Flutterwave public/secret/encryption keys (LIVE), webhook secret, redirect URL, supported methods (MoMo UG, card, bank), default currency (UGX), suggested tiers, allocation categories, receipt sender.
* **Admissions:** fees guide (PDF), scholarship criteria, required docs, visit hours.
* **Impact:** report PDFs (budgets/audits), KPIs to display.
* **News & Events:** 2–3 posts + 1–2 upcoming events to seed.
* **Contacts:** WhatsApp, general inbox, staff emails for admin access (if any).

## 🛡️ Accessibility & Performance

* High contrast, keyboard nav, alt text on images.
* Lazy-load non-hero images.
* Optimize heroes (WebP 1920px, ≤ 300 KB).
* Mobile-first; test on slow 3G (Lighthouse → LCP target < 3s).

## 🧱 Roadmap (nice-to-haves)

* Server webhook for verified receipts + email confirmations
* “Sponsor a Child” recurring subscriptions (Flutterwave billing)
* CMS hooks (News/Events via Notion/Headless CMS)
* i18n (English/Swahili)
* Analytics (GA4) & cookie banner

## 🐞 Troubleshooting

* **White screen / blank:** check the browser console → fix the first error (often a missing export/import path).
* **Vercel TypeScript error:** filenames are case-sensitive; ensure `src/pages/Admissions.tsx` (not `admissions.tsx`).
* **Tailwind not loading:** ensure `index.css` is imported in `main.tsx`, `postcss.config.cjs` has `tailwindcss` & `autoprefixer`.
* **Flutterwave modal not opening:** confirm the `<script src="https://checkout.flutterwave.com/v3.js"></script>` in `index.html` and a valid `VITE_FLW_PUBLIC_KEY`.

## 📞 Contact

Kasunganyanja Parents Primary School
Phone: **+256 757 158 407**
Email: **[baniinah@gmail.com](mailto:baniinah@gmail.com)**

---

**License:** Internal school project (all rights reserved unless otherwise stated).
If you need a standard license, add `MIT` or similar and a `LICENSE` file.
