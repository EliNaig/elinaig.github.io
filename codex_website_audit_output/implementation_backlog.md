# Implementation Backlog

## Scope

- Framework: Astro 5 + Tailwind 4
- Goal: Convert current personal site from static profile page into a high-signal research + projects portfolio with clear IA, SEO completeness, and reusable content workflows.

## Ticket Backlog

| ID | Task | Effort | Notes |
|---|---|---|---|
| WB-001 | Expand header nav to include `Research`, `Projects`, `Publications`, `Talks`, `Contact` | S | Immediate discoverability fix |
| WB-002 | Rewrite homepage hero + first fold using selected copy option | S | Use copy from `copy_pack.md` |
| WB-003 | Add proof strip on homepage (GPA, papers under review, leadership metric) | S | Pull from CV/resume evidence |
| WB-004 | Add `Featured Projects` homepage section with 3 cards | M | Start with Anti-Chain, Spora, QC-NTR project |
| WB-005 | Populate `src/content/projects/` with 3 real project entries | M | Create `*.md` frontmatter + body for each |
| WB-006 | Create case-study template partial/component for project pages | M | Standardize Problem/Approach/Outcome format |
| WB-007 | Fix `work/index.astro` links to non-existent slug routes (`publications/talks/teaching`) | S | Either add detail routes or link list pages only |
| WB-008 | Add page-specific meta descriptions (not global fallback only) | S | Improve SERP/snippet quality |
| WB-009 | Add OG/Twitter image metadata (`og:image`, `twitter:image`) | S | Use branded preview image |
| WB-010 | Add `robots.txt` and generate `sitemap.xml` | S | Astro-native solution available |
| WB-011 | Add structured data (`Person`) in layout or homepage | M | JSON-LD block with verified links |
| WB-012 | Add structured data for publications/projects (where available) | M | `ScholarlyArticle` / `CreativeWork` objects |
| WB-013 | Build publication list from content collection with status badges | M | Use existing `status` schema |
| WB-014 | Build talks list with links to slides/video fields | M | Use existing `talks` schema |
| WB-015 | Build teaching page only if real entries exist; otherwise hide from primary nav | S | Avoid empty-content pages |
| WB-016 | Create `/now/` page for current focus + active reading/research | S | Optional but high freshness signal |
| WB-017 | Create `/timeline/` page (education + projects + outputs) | M | Reuse synthesis timeline |
| WB-018 | Add concise About page rewrite (short + long blocks) | S | Keep personal narrative but secondarily |
| WB-019 | Add “Contact for collaboration” CTA section on homepage and contact page | S | Improve conversion path |
| WB-020 | Improve CV experience on mobile (summary + download before iframe) | S | Reduce heavy-first rendering |
| WB-021 | Remove `.DS_Store` artifacts and block in `.gitignore` | S | Repo hygiene |
| WB-022 | Add quality checks for internal links and metadata in CI | M | Catch regressions early |
| WB-023 | Add analytics/search-console verification strategy | M | Optional but useful for iteration |
| WB-024 | Add writing/notes section (`/writing/`) with 2 starter posts | M | Shows thinking and communication |
| WB-025 | Content governance: define monthly cadence for project/publication updates | S | Keeps site alive after redesign |

---

## Suggested Execution Order

### Phase 1 (1-3 days)

- WB-001, WB-002, WB-003, WB-007, WB-008, WB-009, WB-010, WB-019, WB-021

### Phase 2 (3-7 days)

- WB-004, WB-005, WB-006, WB-013, WB-014, WB-018, WB-020

### Phase 3 (1-2 weeks)

- WB-011, WB-012, WB-016, WB-017, WB-022, WB-023, WB-024, WB-025

---

## Astro-Specific Implementation Notes

1. Use `@astrojs/sitemap`
- Add integration in `astro.config.mjs` to generate `sitemap.xml` automatically.

2. Keep content in collections
- Continue storing projects/publications/talks in `src/content/*` markdown.
- This preserves static generation and makes updates low-friction.

3. Add typed frontmatter extensions
- Extend `src/content/config.ts` carefully (e.g., `impact`, `role`, `featured`, `year`).
- Keep optional fields for incremental migration.

4. Prefer reusable section components
- Extract homepage modules into composable components (Hero, ProofStrip, FeaturedProjects, CTA).

5. Metadata centralization
- Keep defaults in `SiteLayout.astro` but provide explicit per-page overrides.
- Add OG image defaults from `site` metadata and override per page where needed.

6. Build-time validation
- Add a lightweight script in CI to verify:
  - collection entries compile
  - required frontmatter fields exist for featured content
  - internal route references are valid

