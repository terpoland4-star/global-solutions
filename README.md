# Flowline — Landing Page

A marketing landing page for **Flowline**, a B2B SaaS workflow automation product. Built with TanStack Start (React + Tailwind CSS v4), deployed on Netlify.

## Key sections

- **Hero** — Oversized headline, ambient glow blobs, an interactive app dashboard mockup, and social proof
- **Feature highlights** — Asymmetric grid (1 large + 2 stacked cards) showcasing Smart Automation, Collaboration, and Analytics
- **Testimonials** — Three customer cards with avatar, quote, name, and company
- **CTA** — Full-width conversion section with free trial prompt
- **Footer** — Newsletter signup (via Netlify Forms), link columns, social links

## Tech stack

| Tool | Purpose |
|------|---------|
| TanStack Start | React SSR framework |
| Tailwind CSS v4 | Utility-first styling |
| Lucide React | Icons |
| Netlify Forms | Newsletter signup (serverless form handling) |
| Google Fonts (Syne + DM Sans) | Typography |

## Run locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:3000`. Note: Netlify Forms submissions require a live Netlify deploy to process — they won't fire in local dev.

## Deploy

Push to your connected Netlify site. The build command is `npm run build`.
