# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

A marketing landing page for Flowline, a B2B SaaS workflow automation product. Built with TanStack Start (React + Tailwind CSS v4), deployed on Netlify. Single-page design with hero, features, testimonials, CTA, and a Netlify Forms newsletter signup in the footer.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React |
| Forms | Netlify Forms |
| Fonts | Syne (display) + DM Sans (body) via Google Fonts |
| Language | TypeScript 5 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
src/
  routes/
    __root.tsx      # HTML shell, head tags, Google Fonts (Syne + DM Sans), grain overlay
    index.tsx       # Entire landing page — all sections in one file
  styles.css        # Global CSS: Tailwind import, CSS vars, animation/clip-path classes
public/
  forms.html        # Static Netlify Forms skeleton for build-time form detection
  favicon.ico
netlify.toml        # Netlify build config
```

## Key Concepts

### Single-file page

All landing sections live in `src/routes/index.tsx`. Sub-components (`NewsletterForm`, `AppMockup`) are co-located in that file. Extract to `src/components/` only if they're reused elsewhere.

### CSS architecture

Core brand colors live as CSS vars in `:root` inside `styles.css` (`--navy`, `--indigo`, `--cream`, etc.). Tailwind is used for layout/spacing utilities. Clip-path classes (`.clip-angle-bottom`, `.clip-angle-top`, `.clip-angle-both`) create the diagonal section transitions. Animation classes use CSS `@keyframes`.

### Netlify Forms

The newsletter form name is `"newsletter"`. TanStack Start renders client-side, so Netlify can't detect forms at build time. The `public/forms.html` file is a static skeleton that Netlify scans to register the form. The React component POSTs via `fetch` to `/forms.html`. All form fields in the React component must also appear in the static skeleton.

### File-Based Routing (TanStack Router)

- `__root.tsx` — Root shell wrapping all pages
- `index.tsx` — Route for `/`

## Configuration

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite plugins: TanStack Start, Netlify, Tailwind |
| `tsconfig.json` | TypeScript config with `@/*` path alias |
| `netlify.toml` | Build command, output directory |
| `styles.css` | Tailwind import + CSS vars + animation classes |

## Development

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
```

Forms submissions require a live Netlify deploy — they won't fire in local dev.

## Conventions

- Inline styles for brand color references (e.g. `style={{ color: 'var(--indigo)' }}`)
- Tailwind classes for layout, spacing, grid, flex
- TypeScript strict mode; `@/` alias maps to `src/`
