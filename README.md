# Kasunganyanja Parents Primary School Web Platform

A premium, community-centered educational platform designed for a licensed P1–P7 school in Bunyangabu District, Uganda. This project transforms a basic school website into a high-trust institutional hub focusing on transparency, academic excellence, and donor engagement.

## 🚀 The Mission
The goal was to bridge the gap between a community-led institution and high-end digital standards. By prioritizing **Human-Computer Interaction (HCI)** and **UX Design**, the platform facilitates student enrollment and sustainable fundraising through a transparent, accountability-first interface.

## 🛠️ Technical Stack
- **Frontend:** React (Vite) + TypeScript
- **Styling:** Tailwind CSS (Custom Design System)
- **Animations:** Framer Motion (Orchestrated entrance & micro-interactions)
- **Icons:** Lucide React
- **Typography:** Inter & custom tracking for institutional authority

## ✨ Key Features & HCI Decisions

### 1. Transparent Impact System
- **Manual Audit UI:** Specifically designed to manage donor expectations by explicitly labeling data as "Manual Reconciliation". This builds authentic trust in a context where automated financial tracking is not feasible.
- **Impact Calculator:** Uses "Anchor Pricing" psychology to nudge donors toward specific, high-impact contribution tiers (e.g., meals and uniform kits).

### 2. Enrollment Funnel
- **Structured Admissions:** A step-by-step visual process (01 Apply, 02 Document, 03 Assess, 04 Welcome) reduces cognitive load for prospective parents.
- **Visit Scheduler:** Encourages physical community engagement by lowering the barrier to booking campus tours.

### 3. Institutional Identity
- **Academic Proof:** A "Sticky Sidebar" curriculum overview and a detailed "Daily Rhythm" table provide hard evidence of the school's rigorous standards.
- **Safe Sponsorship:** Implements a "Privacy-Safe" sponsorship model using aliases and non-identifiable icons to strictly adhere to Child Safeguarding ethics.

### 4. Advanced UI Architecture
- **Glassmorphism Navigation:** A dynamic `NavBar` that transitions from transparent to a frosted-glass finish on scroll, maintaining legibility while feeling modern.
- **Responsive "Stacked" Layouts:** Solved height-collision issues between complex data tables and feature cards by implementing a mobile-first vertical narrative flow.

## 📂 Project Structure
- `/src/components`: Atomic and molecular UI components (Heros, Sections, Cards).
- `/src/pages`: Layout-heavy page components for Admissions, Impact, and Gallery.
- `/src/types`: Centralized TypeScript definitions for data integrity.
- `/src/lib`: Utility functions for class merging (`cn`) and data formatting.

---

**Developed by Kyayi Joshua Magero** *Empowering education through thoughtful design and technical excellence.*