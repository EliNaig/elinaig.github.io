# Website Plan

## Master Profile Summary

Eli Naig is a mathematics student and undergraduate researcher focused on algebraic coding theory and post-quantum cryptography, with hands-on implementation experience spanning Python, Rust, C, and full-stack systems. He combines proof-driven research with reproducible benchmarking and system-building, and is currently pursuing deeper research collaborations, advanced technical projects, and graduate-level opportunities in math/cryptography.

## Unified Timeline (Education + Major Work)

- **Mar 2023**: Google Data Analytics certification (resume evidence)
- **Dec 2024**: Google AI Essentials + MathWorks ML Onramp (CV evidence)
- **2024–2028**: B.S. Mathematics, Tulane University (GPA ~3.96)
- **Fall 2024 / Spring 2025 / Fall 2025**: Dean’s List
- **Summer 2025**: LSU RTG summer program (Combinatorics/Geometry)
- **Aug 2025–present**: Undergraduate research with Mahir Bilen Can
- **Aug 2025–present**: QSPARC Labs leadership + active PQC project execution
- **2025**: Multiple manuscripts submitted/under review (NRT/QC/PQC themes)
- **2026**: REU/internship/fellowship application cycle + research proposals

## Skills Map (Grounded In Evidence)

### Core research domains
- Algebraic coding theory
- Post-quantum cryptography (Niederreiter, HQC-adjacent, QC constructions)
- Metric/code structure analysis (including NRT)

### Implementation
- **Languages**: Python, Rust, C/C++, MATLAB, TypeScript/JavaScript, SQL, R, Swift
- **Frameworks/Infra**: Astro, Next.js, FastAPI, PostgreSQL/Supabase, Redis, Celery, Docker
- **Research tooling**: LaTeX, reproducible benchmarking harnesses, conformance vectors, test pipelines

### Leadership and execution
- Project/product leadership in QSPARC and student organizations
- Research-to-engineering translation
- Technical communication (proposals, manuscripts, presentations)

---

## Proposed Information Architecture

## Primary nav (target)

1. `Home`
2. `Research`
3. `Projects`
4. `Publications`
5. `Talks`
6. `CV / Resume`
7. `Contact`

## Secondary / optional nav

- `Now` (current focus and active work)
- `Writing` (technical notes and explainers)
- `Teaching` (if you want this public-facing now)

## Page architecture

- `/` Home (positioning + featured proof)
- `/about/` About + longer narrative + values
- `/research/` Themes, open questions, methods, current collaborations
- `/projects/` Filterable list + featured cards
- `/projects/{slug}/` Case-study pages
- `/publications/` Papers/manuscripts with statuses
- `/talks/` Talks/posters/slides links
- `/cv/` Web CV + PDF download
- `/resume/` Resume snapshot (industry-facing)
- `/contact/` Contact + collaboration scope
- Optional: `/now/`, `/writing/`, `/timeline/`

---

## Recommended Homepage Structure

1. **Hero**
- Name + one-line specialty statement
- 2 short CTAs: `View Projects`, `Read CV`

2. **Proof strip (3-4 bullets)**
- GPA / honors
- Manuscripts under review
- Core research domain
- Leadership metric (e.g., SciOly scale)

3. **Featured Projects (3 cards)**
- Anti-Chain
- Spora
- QC-NTR / HQC-NRT project

4. **Research Focus**
- 3 current technical themes
- 1 paragraph on why this work matters

5. **Selected Outputs**
- Publications/talks quick list

6. **About Snapshot**
- 1 short personal paragraph (not full narrative)

7. **Contact CTA**
- Invite collaboration/internship/research outreach with clear email CTA

---

## Proposed New Sections

- `Featured Projects`
- `Research at a Glance`
- `Selected Publications`
- `Timeline`
- `Now` (active focus + what you are exploring)
- `Writing` (technical notes, explainers, reading notes)
- `Resume Summary` (industry-facing, separate from academic CV)

---

## Priority Order With Rationale

## P0 (Immediate)

1. **Navigation + discoverability fix**
- Rationale: Highest UX leverage with minimal engineering effort.

2. **Homepage rewrite around clear positioning + proof**
- Rationale: First-screen clarity determines user retention and conversion.

3. **Populate at least 3 project entries in content collections**
- Rationale: Existing site architecture is ready; content gap is current blocker.

4. **Fix future route mismatch on Work page**
- Rationale: Prevent broken links as soon as content is added.

## P1 (Short-term)

1. **Add project case-study pages and templates**
- Rationale: Improves research/recruiter signal quality immediately.

2. **Add publication statuses and talk links**
- Rationale: Turns “claims” into verifiable outputs.

3. **SEO upgrade package (sitemap/robots/og image/page-level descriptions)**
- Rationale: Improves indexing and social sharing quality.

## P2 (Medium-term)

1. **Timeline and skills evidence page**
- Rationale: Strong for applications and external review.

2. **Writing/notes section**
- Rationale: Demonstrates ongoing thought process and communication quality.

3. **Analytics and search-console instrumentation**
- Rationale: Enables iteration based on actual visitor behavior.

