## Deploying the Astro Site to GitHub Pages

This repo currently contains both:
- the legacy Jekyll site at the repository root
- the new Astro site under `astro/`

When you’re ready to switch, the cleanest approach is to deploy `astro/dist` to GitHub Pages via GitHub Actions.

### Recommended setup

1. In GitHub, go to **Settings → Pages**
2. Set **Build and deployment** to **GitHub Actions**
3. Add a workflow at `.github/workflows/deploy.yml` that:
   - checks out the repo
   - installs Node
   - runs `npm ci` in `astro/`
   - runs `npm run build` in `astro/`
   - deploys `astro/dist`

If your repo is `username.github.io`, you typically do not need a `base` setting.
If you deploy to a project subpath (e.g. `username.github.io/my-site/`), you’ll need to set `base` in `astro.config.mjs`.

### Local verification

From `astro/`:
- `npm run build`
- `npm run preview`

