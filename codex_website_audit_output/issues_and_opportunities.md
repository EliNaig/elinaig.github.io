# Issues And Opportunities

## Highest-Priority Issues

1. **Information architecture is hidden**
- Only two header nav items are visible (`Home`, `CV`) while the site has 10+ substantive pages.
- Result: discoverability is low; users may never see Research/Projects/Publications/Work content.

2. **Homepage positioning is personal, not outcome-oriented**
- Current hero starts with “About me” and a long narrative + hobbies.
- Result: recruiters/advisors/collaborators do not quickly learn your specialty, proof of impact, or how to engage.

3. **Core credibility content exists in files but not on-site**
- CV/resume/education docs show GPA, manuscripts, leadership, awards, and major project outcomes.
- Site does not foreground these signals in scannable sections.

4. **Projects pipeline is wired but empty in production content**
- Content collections exist, but published entries are missing.
- Result: `/projects`, `/publications`, `/talks`, `/teaching` appear underpopulated, undercutting credibility.

5. **Future link integrity risk in `Work` page**
- `work/index.astro` links to `/publications/{slug}/`, `/talks/{slug}/`, `/teaching/{slug}/` routes that do not currently exist.
- Today this is hidden because collections are empty; once populated, these links will break.

## UX / IA Gaps

- No explicit audience paths (e.g., “For research collaborators”, “For internships”, “For grad programs”).
- No “Featured work” funnel on homepage to route users quickly.
- No dedicated case-study pattern for projects.
- `CV` is strong but discoverability is not optimized from every page.
- Mobile UX risk: CV iframe is heavy and not ideal as primary document experience on phones.

## Copy Gaps

- Value proposition is not concise at top-of-page.
- Strong achievements are buried (publications under review, GPA, leadership scale, major research themes).
- Tone consistency varies between formal research language and informal hobby sections.
- Calls-to-action are weak (“Links” list is passive; no collaboration/contact prompt tied to purpose).

## SEO / Accessibility / Performance Notes

### SEO

- Good baseline meta tags are present, but many pages reuse one generic description.
- Missing `robots.txt` and `sitemap.xml`.
- Missing `og:image` / `twitter:image` (social previews will be weak).
- No structured data (`Person`, `ScholarlyArticle`, `CreativeWork`).
- Local build canonical defaults to localhost if site env is not set.

### Accessibility

- Positives: skip link, alt text on profile image, semantic headings, titled iframe.
- Gaps: IA discoverability impacts keyboard/screen-reader navigation flow because primary nav is sparse.
- Opportunity: add explicit section landmarks and page-level summary intros for faster assistive scanning.

### Performance

- Overall architecture is lightweight/static (good).
- Embedded full-PDF iframe can be costly on slower/mobile devices.
- Opportunity: prioritize concise text-first summaries and link to downloadable PDF instead of iframe-first UX.

## Opportunities

1. **Reframe around a sharp positioning statement**
- “Mathematics + post-quantum cryptography + reproducible systems.”
- Back this with 2-3 proof points immediately above the fold.

2. **Convert existing file evidence into website trust signals**
- Publications/manuscripts section with status badges.
- Education snapshot (GPA, honors, key coursework).
- Leadership impact bullets (Science Olympiad scale, QSPARC leadership).

3. **Productize projects into case studies**
- Start with `Anti-Chain`, `spora`, and one QC-NTR project.
- Use consistent Problem → Approach → Outcome + proof metrics.

4. **Separate audience journeys in nav and homepage**
- “Research”, “Projects”, “CV/Resume”, “Writing/Talks”, “Contact”.
- Add “Featured Projects” and “Now” section for current focus.

5. **Leverage education materials selectively**
- Pull concise excerpts from strongest statements/proposals.
- Avoid exposing private/redundant draft application artifacts.

## Quick Wins (1-3 days)

- Expand header nav to include top pages.
- Replace homepage hero with clear one-sentence specialization + 3 proof bullets.
- Add 3 featured project cards with concrete outcomes.
- Add page-specific meta descriptions and social preview image.
- Add `robots.txt` + sitemap generation.
- Add “Current Work” and “Contact for collaboration” CTAs.

## Bigger Lifts (1-3 weeks)

- Build full case-study pages and content workflow for projects/publications/talks.
- Create unified timeline page (education + research + product milestones).
- Introduce structured data + richer technical writing section.
- Add lightweight analytics + search console + performance monitoring.
- Redesign homepage information architecture around audience intent and conversion.

