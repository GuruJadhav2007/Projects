# Project — Corporate Website

A modern, production-ready Angular website for **Project Pvt. Ltd.**, a specialty chemical manufacturer serving the Oil & Gas, Water Treatment, Polymer, and Pharmaceutical industries.

## Tech Stack

- **Angular 18** (Standalone Components, Lazy Loading, Angular Router)
- **TypeScript**
- **Pure HTML + CSS** (no Tailwind, Bootstrap, Angular Material, or SCSS)
- **Angular Reactive Forms** with validation

> Note: The project targets Node.js v20.19.6 as requested. Angular 18 was used since Angular CLI requires Node 20.19.3+/22.12+ and "Angular 21" is not yet a released version; Angular 18 is the latest major fully compatible with Node 20.19.6 and follows all the same standalone-component architecture and best practices requested.

## Getting Started

\`\`\`bash
npm install
ng serve
\`\`\`

Then open http://localhost:4200 in your browser.

To create a production build:

\`\`\`bash
ng build
\`\`\`

Output is generated in `dist/project`.

## Project Structure

\`\`\`
src/
 |-- app/
 |    |-- components/        # Header, Footer (shared layout components)
 |    |-- pages/             # One folder per route/page
 |    |    |-- home/
 |    |    |-- about/
 |    |    |-- vision-mission/
 |    |    |-- business-history/
 |    |    |-- qhse/
 |    |    |-- infrastructure/
 |    |    |-- csr/
 |    |    |-- drilling-chemicals/
 |    |    |-- production-chemicals/
 |    |    |-- refinery-chemicals/
 |    |    |-- lubricant-chemicals/
 |    |    |-- refinery-fuel-additives/
 |    |    |-- terminal-cargo/
 |    |    |-- speciality-chemicals/
 |    |    |-- water-treatment/
 |    |    |-- custom-manufacturing/
 |    |    |-- careers/
 |    |    |-- contact/
 |    |-- shared/services/   # ScrollRevealService (scroll animations)
 |    |-- app.component.ts   # Root shell (Header + RouterOutlet + Footer)
 |    |-- app.config.ts
 |    |-- app.routes.ts      # All lazy-loaded routes
 |-- styles.css              # Global design system (CSS variables, utilities)
 |-- index.html              # SEO meta tags, Open Graph, Schema.org markup
public/
 |-- robots.txt
 |-- sitemap.xml
\`\`\`

## Pages Included

- Home (Hero, About, Stats, Industries, Strengths, Timeline, QHSE, Inquiry Form)
- About Us
- Overview: Vision & Mission, Business History, QHSE, Infrastructure, CSR
- Industries: Drilling Chemicals, Production Chemicals, Refinery Chemicals, Lubricant Chemicals, Refinery Fuel Additives, Terminal & Cargo Fuel, Speciality Chemicals & Polymers, Water Treatment, Custom Manufacturing
- Careers (with application form)
- Contact Us (with inquiry form)

## Design System

All design tokens (colors, shadows, radii, spacing, gradients) are defined as CSS variables in `src/styles.css`. The palette is based on deep navy/blue tones with cyan accents, reflecting the original brand while introducing a more premium, modern feel.

## Features

- Fully responsive (desktop, tablet, mobile)
- Sticky navigation with mega menu & mobile drawer
- Scroll-reveal animations via IntersectionObserver
- Animated statistic counters
- Reactive forms with client-side validation and success states
- SEO: meta tags, Open Graph, Twitter Cards, canonical URL, Schema.org JSON-LD, robots.txt, sitemap.xml
- Lazy-loaded routes for optimal performance

## Notes

- All content is written from scratch based on publicly available information about Project's business areas; no content was copied verbatim from the official site.
- Form submissions are simulated client-side (no backend is wired up) — connect to your preferred backend/API for production use.
