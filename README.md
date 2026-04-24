# Personal Website (Astro + Tailwind)

This folder contains the site using Astro + Tailwind, designed to be fast, typographically clean, and easy to maintain.

## Quick Start

From the repository root:

- Install: `npm ci`
- Dev server: `npm run dev` (defaults to `http://localhost:4321`)
- Production build: `npm run build`
- Preview build: `npm run preview`
- Full site checks: `npm run check:site`

## Where to Edit Things

- Site metadata + links: `src/lib/site.ts`
- Global styles + typography rules: `src/styles/global.css`
- Layout (header/footer/meta): `src/layouts/SiteLayout.astro`
- Pages:
  - Home: `src/pages/index.astro`
  - Research: `src/pages/research/index.astro`
  - Publications: `src/pages/publications/index.astro`
  - Writing: `src/pages/writing/index.astro`
  - Now: `src/pages/now/index.astro`
  - Talks: `src/pages/talks/index.astro`
  - Teaching: `src/pages/teaching/index.astro`
  - CV: `src/pages/cv/index.astro`
  - Contact: `src/pages/contact/index.astro`

## Content Collections

Publications/Talks/Teaching/Projects are set up as content collections so you can add entries as Markdown files:

- `src/content/publications/`
- `src/content/talks/`
- `src/content/teaching/`
- `src/content/projects/`
- `src/content/writing/`

See `src/content/README.md` for examples.

## Optional Environment Variables

- `PUBLIC_GOOGLE_SITE_VERIFICATION`: Adds a Google Search Console verification meta tag.
- `PUBLIC_PLAUSIBLE_DOMAIN`: Enables Plausible analytics script when set.
