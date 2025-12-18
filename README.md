# Personal Website (Astro + Tailwind)

This folder contains the rebuilt version of the site using Astro + Tailwind, designed to be fast, typographically clean, and easy to maintain.

The current Jekyll site still lives at the repository root; we’re keeping it intact while the new site is reviewed.

## Quick Start

From `astro/`:

- Install: `npm install`
- Dev server: `npm run dev` (defaults to `http://localhost:4321`)
- Production build: `npm run build`
- Preview build: `npm run preview`

## Where to Edit Things

- Site metadata + links: `src/lib/site.ts`
- Global styles + typography rules: `src/styles/global.css`
- Layout (header/footer/meta): `src/layouts/SiteLayout.astro`
- Pages:
  - Home: `src/pages/index.astro`
  - Research: `src/pages/research/index.astro`
  - Publications: `src/pages/publications/index.astro`
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

See `src/content/README.md` for examples.
