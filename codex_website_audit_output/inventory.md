# Inventory

## Step 1: Resolved Paths

- `WEBSITE_ROOT`: `/Users/elinaig/Developer/EliNaig/PersonalWebsite`
  - Confirmed by markers: `astro.config.mjs`, `package.json`, `src/pages`, `src/content`.
- `QSPARK_ROOT` (closest match to requested `~/Developer/QSpark/QSpark`): `/Users/elinaig/Developer/QSPARC-Labs`
  - No exact `~/Developer/QSpark/QSpark` path found.
  - Closest candidates discovered:
    - `/Users/elinaig/Developer/QSPARC-Labs`
    - `/Users/elinaig/Developer/QSPARC-Labs/Website`
- `EDUCATION_ROOT` (closest match to requested `Nextcloud/Personal File/Educational Career`): `/Users/elinaig/Nextcloud/01_Personal/03_Education_Career`
  - No exact `Nextcloud/Personal File/Educational Career` path found.
  - Closest candidates discovered:
    - `/Users/elinaig/Nextcloud/01_Personal/03_Education_Career`
    - `/Users/elinaig/Nextcloud/02_School`
    - `/Users/elinaig/Nextcloud/99_Archive/Education`

---

## Step 2: Website Audit (Inventory)

### Framework, Routing, Content Sources

- Framework: `Astro 5` + `Tailwind CSS 4`.
- Build mode: static (`npm run build` completed successfully; 12 pages built).
- Content sources:
  - Static Astro pages in `src/pages`.
  - Astro content collections defined in `src/content/config.ts` (`projects`, `publications`, `talks`, `teaching`).
  - Site metadata in `src/lib/site.ts`.
- Current collection content status:
  - Only `getting-started.md` placeholders exist and are `draft: true`.
  - Result: collection pages render with empty-state messaging.

### Page and Route Inventory

- `/` Home
- `/about/`
- `/research/`
- `/projects/`
- `/projects/[slug]/` (dynamic route exists but currently no published entries)
- `/publications/`
- `/talks/`
- `/teaching/`
- `/work/`
- `/contact/`
- `/cv/`
- `/resume/` (meta refresh redirect to `/cv/`)
- `/404`
- Static assets/pages in `public/`:
  - `/ENCV.pdf`
  - `/about.html` (redirect shim)
  - `/google673ad222c01748ba.html`

### Navigation Inventory

- Header nav (`src/components/Header.astro`) includes only:
  - `Eli Naig's Homepage` -> `/`
  - `CV` -> `/cv/`
- Other major pages exist but are only reachable via in-page links/cards.

### Components and Layout Inventory

- Layout:
  - `src/layouts/SiteLayout.astro`
- Global shell components:
  - `src/components/Header.astro`
  - `src/components/ProfileSidebar.astro`
  - `src/components/Footer.astro`
- Styling:
  - `src/styles/global.css`

### SEO / Metadata / Technical Signals

- Present:
  - `<title>`, `<meta name="description">`, canonical tag
  - OG basic tags: `og:title`, `og:description`, `og:type`, `og:url`
  - Twitter basic tags: `twitter:card`, `twitter:title`, `twitter:description`
  - favicon (`/favicon.svg`)
- Missing / weak:
  - No `robots.txt`
  - No generated `sitemap.xml`
  - No `og:image` or `twitter:image`
  - Most pages reuse the same generic description from `site.description`
  - Built output canonical defaults to localhost if `site` env is unset in local builds
- Accessibility basics observed:
  - Skip link exists
  - Image `alt` text present for profile image
  - Semantic headings used on pages
  - CV iframe has `title`
- Potential structural/quality issues:
  - `src/pages/work/index.astro` links to `/publications/{slug}/`, `/talks/{slug}/`, `/teaching/{slug}/` but those dynamic routes do not exist
  - `.DS_Store` files in `src/` and `public/`

### Key File Tree (Current Astro Site)

```text
/Users/elinaig/Developer/EliNaig/PersonalWebsite
├── astro.config.mjs
├── package.json
├── public
│   ├── ENCV.pdf
│   ├── about.html
│   ├── favicon.svg
│   ├── google673ad222c01748ba.html
│   └── images
│       ├── EliSG.png
│       └── profile.png
├── src
│   ├── components
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── ProfileSidebar.astro
│   ├── content
│   │   ├── config.ts
│   │   ├── projects/getting-started.md
│   │   ├── publications/getting-started.md
│   │   ├── talks/getting-started.md
│   │   └── teaching/getting-started.md
│   ├── layouts
│   │   └── SiteLayout.astro
│   ├── lib
│   │   └── site.ts
│   ├── pages
│   │   ├── index.astro
│   │   ├── about/index.astro
│   │   ├── contact/index.astro
│   │   ├── cv/index.astro
│   │   ├── projects/index.astro
│   │   ├── projects/[slug].astro
│   │   ├── publications/index.astro
│   │   ├── research/index.astro
│   │   ├── resume.astro
│   │   ├── talks/index.astro
│   │   ├── teaching/index.astro
│   │   ├── work/index.astro
│   │   └── 404.astro
│   └── styles/global.css
└── .github/workflows/deploy.yml
```

### Existing Copy Extract (Current Site)

- Homepage hero heading: `About me`
- Homepage opener: personal narrative with Feynman quote and hobby-heavy sections
- About page core line: `I’m a mathematics student at Tulane University and an undergraduate researcher...`
- Projects page intro: `Technical write-ups and code-based work. Use tags to quickly filter.`
- Contact page key CTA: `The fastest way to reach me is by email.`

---

## Step 3: QSpark Project Inventory

### Root-Level Project Inventory (`/Users/elinaig/Developer/QSPARC-Labs`)

Active top-level directories audited:

1. `Anti-Chain`
2. `McEliece`
3. `NRT`
4. `Spotkd`
5. `Website`
6. `graph-design-spotkd`
7. `hdrs-codes`
8. `hqc-nrt`
9. `hrs-codes`
10. `mceliece-pqc-stack`
11. `nr-codec-demo`
12. `nrt-hqc`
13. `pitch-decks`
14. `pqc-app`
15. `pqc-platform`
16. `pqkem-on-spotkd`
17. `qc-circulant-matrix-explorer`
18. `qsparc-crm-app`
19. `quasi-circulant-ntr`
20. `quasi-circulant-ntr-py`
21. `spora`
22. `spotkd-py`
23. `steiner_graph`

### Per-Project Audit (Problem → Approach → Outcome)

Note: `Role` is inferred as lead author/maintainer unless explicitly stated in docs.

| Project | Elevator pitch | Problem → Approach → Outcome | Tech stack | Role | Proof (metrics/demo/results) | Website highlight angle |
|---|---|---|---|---|---|---|
| Anti-Chain | Reproducible poset-metric benchmarking suite vs LDPC baselines. | Need practical benchmarking for SP/AN metrics beyond paper theory -> implemented AN/SP metrics, AN-aware decoders, sweep tooling, NR/5G pipeline -> reproducible FER/BER outputs and paper-aligned experiments. | Python, NumPy, NetworkX, optional pyldpc, TensorFlow/Sionna, LaTeX | Research engineer/author (inferred) | Enumerator reproduction, `results/<exp_id>/metrics.json|csv`, NR/5G bench scripts | Flagship research-to-engineering case study |
| NRT | Paper-aligned Niederreiter-NRT implementation with pluggable code architecture. | Needed architecture-faithful reference implementation -> inner/outer code plugins, FO KEM wrappers, conformance vectors, benchmarking suite -> protocol-level reproducibility and stress-tested harness. | Python, optional native backend, unittest | Research engineer/author (inferred) | `benchmark_suite.py`, conformance vectors, extensive test files | "Rigorous protocol implementation" narrative |
| hqc-nrt | HQC-adjacent PQClean prototype with optional NRT auxiliary layer. | Evaluate NRT-enhanced ideas without rewriting HQC -> compile-time hooks for sampler/mask/DFR + experiment scripts -> generated DFR/stats/latency plots and paper tables. | C, Python, shell scripts, PQClean-style layout | Research engineer/author (inferred) | `paper_tables/*.csv`, `paper_plots/*.png`, `run_all_experiments.sh` | "From prototype to reproducible evidence" |
| nrt-hqc | Toy research prototype adapting HQC-style flow to NRT metric. | Needed clear, modifiable reference for NRT-aware HQC flow -> row-wise QC arithmetic and small decoder implementation -> pedagogical end-to-end prototype. | Python | Research prototype author (inferred) | `python -m nrt_hqc.demo`, modular source files | Educational/pedagogical project card |
| quasi-circulant-ntr-py | Python reference implementation of QC-NTR KEM for correctness and experimentation. | Need faithful mathematical reference before optimization -> full algebra/invariant/FO flow + DFR tooling -> validated determinism/invariants and size reporting for QC-NTR-128/192/256. | Python, pytest | Research engineer/author (inferred) | `scripts/measure_sizes.py`, `run_dfr.py`, tests | "Research reference with reproducible proofs" |
| quasi-circulant-ntr | Rust reference implementation of QC-NTR KEM. | Need performant systems-language path for QC-NTR -> Rust crate with CPA/CCA flow and fixed-weight sampler -> compact reference baseline for further optimization. | Rust | Research engineer (inferred) | crate/tests present; concise README | Systems implementation counterpart to Python reference |
| qc-circulant-matrix-explorer | Interactive notebook companion to QC-NTR manuscript. | Hard-to-parse algebraic constructions -> glass-box notebooks and matrix walkthroughs -> transparent, inspectable derivations and reproducible tests. | Python, notebooks, pytest, Sage | Research educator/author (inferred) | `notebooks/*.ipynb`, tests, bundled paper PDF | "Explainability for complex cryptography" |
| mceliece-pqc-stack | Rust workspace scaffold for McEliece-oriented PQC stack. | Need modular stack separating crypto/protocol/client/server tooling -> workspace crates + KAT tool + CI skeleton -> foundation for production-hardening path. | Rust (workspace), CI workflows | Platform architect (inferred) | `crates/*`, `tools/kat-gen`, CI workflows | Infrastructure/system design depth |
| pqkem-on-spotkd | C embedded scaffold combining SPoTKD protocol logic with PQ KEM wrappers. | Bridge entropy/timer system with PQ KEM in constrained context -> C modules, vectors, bench targets, liboqs integration hooks -> testable embedded scaffold with reproducible vectors. | C, liboqs integration, Makefile | Embedded crypto engineer (inferred) | `make test`, `make vectors`, `make bench` | Embedded + cryptography integration |
| spotkd-py | Reproducibility scaffold for SPoTKD measurement campaign. | Needed reproducible measurement workflow -> artifact layout + entropy tooling + scripts -> structured results/tables/figures pipeline. | Python, SP800-90B tooling | Research tooling author (inferred) | `artifacts/` outputs, `run_measurements.py` | Experiment operations / reproducibility |
| Spotkd (legacy collection) | Mixed MATLAB/Python SPoTKD prototypes including WiFi demo and McEliece variants. | Early-stage transport + protocol experimentation -> MATLAB demos + Python WiFi stack + security design docs -> broad concept validation assets. | MATLAB, Python, AES-GCM/HKDF modules | Prototype author (inferred) | `SPOTKD_WIFI_DEMO` + `SECURITY.md` + demo scripts | Historical evolution and breadth |
| nr-codec-demo | MATLAB harness comparing NR LDPC baseline against new ECC. | Need apples-to-apples codec comparison -> link-level sweeps with standardized metrics -> BLER/SNR and runtime-throughput outputs. | MATLAB (5G Toolbox optional) | Simulation engineer (inferred) | BLER/FER/BER/runtime metrics in README and results folder | Quantitative benchmarking storyline |
| spora | Multi-university campus engagement platform (mobile + web + backend). | Fragmented student engagement tools -> integrated iOS + web + admin + backend platform -> full product surface with rich feature set and scalability target. | Swift/SwiftUI, FastAPI, Next.js, TS, Postgres, Redis, Celery, Supabase | Product/engineering lead (inferred) | Extensive screenshots, architecture docs, claimed 100k concurrent-user design target | Strong product-engineering case study |
| qsparc-crm-app | Internal QSPARC admin platform with Next.js + FastAPI + Supabase. | Need internal operations/admin tooling -> containerized full-stack app with auth/integrations -> working local/Docker paths and desktop-app build flow. | Next.js, TypeScript, FastAPI, PostgreSQL/Supabase, Docker | Full-stack lead (inferred) | Setup docs, health endpoints, desktop bundle script | Applied full-stack execution |
| pqc-platform | Architecture-first PQC integration platform repo. | Need clear layer separation between crypto, policy, and app -> dedicated folders and service boundaries -> maintainable platform scaffold for secure integration. | Rust/Python services + infra docs | System architect (inferred) | documented service endpoints and layered architecture | "Security boundaries by design" |
| pqc-app | Monorepo app/API workspace for PQC app experimentation. | Need integrated web + API workflow -> workspace structure with Prisma-backed API and app web shell -> operational dev/lint/test scripts but sparse narrative docs. | Node.js, TypeScript, Prisma | Full-stack engineer (inferred) | workspace scripts, API setup docs | Mention as active internal platform repo |
| Website (QSPARC-Labs) | Next.js marketing/site repo scaffold. | Needed branded web presence -> Next.js app with animation/UI deps -> starter for product-facing web work. | Next.js 15, React 19, TS, Tailwind | Web engineer (inferred) | dependency set + app/components structure | Secondary web project mention |
| hdrs-codes | Framework repo for HDRS code work (early framework stage). | Need tooling for HDRS code exploration -> source + notebooks -> base framework established, decoder not yet implemented. | Python, notebooks | Research tooling (inferred) | README status note | "Early-stage exploratory framework" |
| hrs-codes | Similar HDRS framework repo variant. | Same class of problem as `hdrs-codes` -> lightweight source + notebooks -> prototype state. | Python, notebooks | Research tooling (inferred) | README status note | Combine/merge narrative with HDRS work |
| steiner_graph | Educational Steiner Tree generator/visualizer with matrix exports. | Need teachable graph-theory artifact -> random/X3C generation + visualization + matrix bundles -> reusable education/demo outputs. | Python, NetworkX, SciPy, Matplotlib | Author/instructor (inferred) | PNG + CSV/MAT outputs | Good “teaching + visualization” project |
| McEliece (collection) | Umbrella folder for McEliece/Niederreiter papers/proposals and subprojects. | Centralize literature and proposal artifacts -> multiple subfolders and PDFs -> useful evidence archive but no unified README. | Mixed (docs + TeX + PDFs) | Research organizer (inferred) | `niederreiter101425.pdf`, `nvidia-antichain-proposal.pdf`, other PDFs | Use selectively as evidence source, not as standalone project |
| pitch-decks | Business/technical deck and conference research workspace. | Needed investor/conference narrative assets -> markdown/PDF deck materials -> supports commercialization messaging. | Markdown, PDF, LaTeX artifacts | Founder/operator (inferred) | `Viasat.pdf`, conference docs, pitch assets | Use for “commercialization + communication” section |
| graph-design-spotkd | Minimal script-level experimental folder. | Quick graph-design experiment -> single Python script -> currently too sparse for public showcase. | Python | Experiment author (inferred) | `test.py` only | Keep internal; not portfolio-ready |

---

## Step 4: Education Materials Inventory

### Folder Summary

- Base folder: `/Users/elinaig/Nextcloud/01_Personal/03_Education_Career`
- Documents discovered (pdf/doc/docx/md/etc): `128`
- Non-archive/current documents: `104`
- Deduplicated by content hash for canonical review: `69`
- Duplicate groups found: `21` (many are draft/revision copies or mirrored submission packets)

### Education Documents (Canonical, Deduplicated)

| Document | Type | Date (detected) | What it demonstrates | Key highlight | Should appear on website? |
|---|---|---|---|---|---|
| `Applications/A-4 Undergraduate Student - Los Alamos/Naig_Eli_CoverLetter.pdf` | Cover letter | 2026 | Program/company-specific motivation and fit | A-4: Advanced Research in Cyber Systems | Partial (selected excerpts only) |
| `Applications/A-4 Undergraduate Student - Los Alamos/cover-leter/pdfs/Draft_1_Naig_Eli_CoverLetter_LANL_IRC141495.pdf` | Cover letter | 2026 | Program/company-specific motivation and fit | A-4: Advanced Research in Cyber Systems | Partial (selected excerpts only) |
| `Applications/A-4 Undergraduate Student - Los Alamos/cover-leter/pdfs/Draft_2_Naig_Eli_CoverLetter_LANL_IRC141495.pdf` | Cover letter | 2026 | Program/company-specific motivation and fit | A-4: Advanced Research in Cyber Systems | Partial (selected excerpts only) |
| `Applications/GoldWater/Eli Naig Resume.pdf` | Scholarship application | 2028 | Competitive scholarship positioning | 314-313-7140 / enaig@tulane.edu / https://www.linkedin.com/in/eli-naig | Partial (selected excerpts only) |
| `Applications/GoldWater/Eli_Naig_Curriculum_Vitae.pdf` | Scholarship application | 2024 | Competitive scholarship positioning | Eli C. Naig Email: enaig@tulane.edu | Partial (selected excerpts only) |
| `Applications/GoldWater/First_part_of_Goldwater.pdf` | Scholarship application | n/a | Competitive scholarship positioning | Goldwater Scholarship Application Statements | Partial (selected excerpts only) |
| `Applications/GoldWater/For the first twelve years of my education.docx` | Scholarship application | n/a | Competitive scholarship positioning | For the first twelve years of my education, I sat in special education classrooms, wrestling with words that refused to make sense | Partial (selected excerpts only) |
| `Applications/GoldWater/Gold water application.docx` | Scholarship application | n/a | Competitive scholarship positioning | In one or two sentences, describe your career goals and professional aspirations (see example below). This statement will be used  | Partial (selected excerpts only) |
| `Applications/GoldWater/Goldwater Appliaction - Eli Naig.docx` | Scholarship application | n/a | Competitive scholarship positioning | In one or two sentences, describe your career goals and professional aspirations (see example below). This statement will be used  | Partial (selected excerpts only) |
| `Applications/GoldWater/Goldwater Drafts.docx` | Scholarship application | n/a | Competitive scholarship positioning | From the moment I realized that mathematics was not about memorization but about discovery, I knew that academia was where I belon | Partial (selected excerpts only) |
| `Applications/GoldWater/Goldwater_Research_Essay___Eli_Naig.pdf` | Research statement/proposal | n/a | Research direction, technical depth, and program fit | Research Essay Eli Naig, Tulane University | Yes (core evidence) |
| `Applications/GoldWater/Personal Statement - Eli Naig.pdf` | Statement | n/a | Personal and academic narrative | Mathematics is not just a subject to me—it’s the lens through which I see patterns in | Partial (selected excerpts only) |
| `Applications/GoldWater/Personal Statement..docx` | Statement | n/a | Personal and academic narrative | Eli Naig Personal Statement. | Partial (selected excerpts only) |
| `Applications/GoldWater/Personal Statement.docx` | Statement | n/a | Personal and academic narrative | Mathematics is not just a subject to me—, it's the lens through which I see patterns in apple blossoms, the logic behind climbing  | Partial (selected excerpts only) |
| `Applications/GoldWater/Personal_Statement___Eli_Naig.pdf` | Statement | n/a | Personal and academic narrative | Mathematics is not just a subject to me, it’s the lens through which I see patterns, the | Partial (selected excerpts only) |
| `Applications/GoldWater/Project 1 - Eli Naig.pdf` | Scholarship application | 2024 | Competitive scholarship positioning | my trust in it. As soon as I’m done at Tulane, it will push me out into an open body of water. | Partial (selected excerpts only) |
| `Applications/GoldWater/The Barry Goldwater Scholarship and Excellence in Education Foundation - Application Review.pdf` | Scholarship application | n/a | Competitive scholarship positioning | The Barry Goldwater Scholarship and Excellence in Education Foundation - Application Review 11/13/25, 9:44 PM | Partial (selected excerpts only) |
| `Applications/LANL_CAI_UGS_Application/Eli_Naig_CV.pdf` | Application material | 2028 | REU/internship/application responses | Eli C. Naig Email: enaig@tulane.edu | Partial (selected excerpts only) |
| `Applications/LANL_CAI_UGS_Application/Naig_Eli_CAI_UGS_CoverLetter.pdf` | Cover letter | 2026 | Program/company-specific motivation and fit | Student position (IRC141403). I am currently pursuing a Bachelor of Science in Mathematics at | Partial (selected excerpts only) |
| `Applications/LANL_CAI_UGS_Application/Naig_Eli_CAI_UGS_CoverLetter/pdfs/Naig_Eli_CAI_UGS_CoverLetter.pdf` | Cover letter | 2026 | Program/company-specific motivation and fit | Student position (IRC141403). I am currently pursuing a Bachelor of Science in Mathematics at | Partial (selected excerpts only) |
| `Applications/Mastercard/cover-letter/cover-letter.pdf` | Cover letter | 2026 | Program/company-specific motivation and fit | I am currently pursuing a Bachelor of Science in Mathematics at Tulane University, where my academic | Partial (selected excerpts only) |
| `Applications/Mastercard/cover-letter/pdfs/cover-letter_2026-01-07.pdf` | Cover letter | 2026 | Program/company-specific motivation and fit | I am currently pursuing a Bachelor of Science in Mathematics at Tulane University, where my | Partial (selected excerpts only) |
| `Applications/Mastercard/cover-letter/pdfs/cover-letter_2026_01_10.pdf` | Cover letter | 2026 | Program/company-specific motivation and fit | I am currently pursuing a Bachelor of Science in Mathematics at Tulane University, where my | Partial (selected excerpts only) |
| `Applications/Mastercard/short-answer/short-answer.pdf` | Application material | 2026 | REU/internship/application responses | Suporting information for mastercard | Partial (selected excerpts only) |
| `Applications/NTC’s Summer Research Program/Eli_Naig_Transcript_2026-01-04.pdf` | Transcript | n/a | Academic record/GPA | OFFICIAL TRANSCRIPTS ARE PRINTED ON GREEN SAFETY PAPER, WITH THE UNIVERSITY SEAL (RAISED SEAL NOT REQUIRED) AND BEAR THE | Yes (core evidence) |
| `Applications/NTC’s Summer Research Program/application_details.md` | Application material | n/a | REU/internship/application responses | I have been deeply engaged in research in algebraic coding theory and post-quantum cryptography and am motivated to continue pursu | Partial (selected excerpts only) |
| `Applications/NTC’s Summer Research Program/research-proposal/research-proposal.pdf` | Research statement/proposal | n/a | Research direction, technical depth, and program fit | Department of Mathematics, Tulane University | Yes (core evidence) |
| `Applications/REUs/2026 Appalachian Mathematics and Physics Site Application/app.pdf` | Application material | n/a | REU/internship/application responses | Have you participated in an REU before or do you have other research experience? | Partial (selected excerpts only) |
| `Applications/REUs/Document4.docx` | Application material | n/a | REU/internship/application responses | I attended Cyrus Young’s talk on coding theory at Tulane, I knew this REU was the perfect opportunity to deepen my mathematical jo | Partial (selected excerpts only) |
| `Applications/REUs/Haverford/Naig_Cover_Letter.pdf` | Cover letter | 2026 | Program/company-specific motivation and fit | B.S. Mathematics, Sophomore | Partial (selected excerpts only) |
| `Applications/REUs/Kent_state_summer_2026_reu/questions.pdf` | Application material | n/a | REU/internship/application responses | Please describe your interest in mathematics, relevant background, prior research | Partial (selected excerpts only) |
| `Applications/REUs/MIT-SGI/Naig_Cover_Letter.pdf` | Cover letter | 2028 | Program/company-specific motivation and fit | B.S. Mathematics, Sophomore (Expected Graduation 2028) | Partial (selected excerpts only) |
| `Applications/REUs/MIT-SGI/cover-letter.pdf` | Cover letter | 2028 | Program/company-specific motivation and fit | B.S. Mathematics, Sophomore (Expected Graduation 2028) | Partial (selected excerpts only) |
| `Applications/REUs/OSU-TOSUIM-2026/Citizenship_statment/Naig_Eli_US_Citizenship_Statement.pdf` | Statement | 2026 | Personal and academic narrative | Statement of U.S. Citizenship | Partial (selected excerpts only) |
| `Applications/REUs/OSU-TOSUIM-2026/Naig_Cover_Letter.pdf` | Cover letter | 2026 | Program/company-specific motivation and fit | Department of Mathematics | Partial (selected excerpts only) |
| `Applications/REUs/U-Chicago/research-statement/Naig_Research_Statement.pdf` | Research statement/proposal | n/a | Research direction, technical depth, and program fit | Recently, I have been working with Dr. Mahir Bilen Can on projects in coding theory, a setting | Yes (core evidence) |
| `Applications/REUs/U-Chicago/research-statement/pdfs/research-statement-draft-01.pdf` | Research statement/proposal | n/a | Research direction, technical depth, and program fit | I am interested in pure mathematics, particularly in understanding how algebraic structure can | Yes (core evidence) |
| `Applications/REUs/UIC-Logic-REU-2026/Naig_Cover_Letter.pdf` | Cover letter | 2028 | Program/company-specific motivation and fit | B.S. Mathematics, Sophomore (Expected Graduation 2028) | Partial (selected excerpts only) |
| `Applications/REUs/UMD Duluth 2026 Combinatorics and Probability REU/Naig_Statement.pdf` | Statement | n/a | Personal and academic narrative | enaig@tulane.edu • elinaig.github.io | Partial (selected excerpts only) |
| `Applications/REUs/UMN-REUCA/Naig_Statement.pdf` | Statement | n/a | Personal and academic narrative | enaig@tulane.edu • elinaig.github.io | Partial (selected excerpts only) |
| `Applications/REUs/UMN-REUCA/list of math courses/math-classes.pdf` | Application material | 2024 | REU/internship/application responses | • MATH-3660 - Mathematics of Integration III | Partial (selected excerpts only) |
| `Applications/REUs/Univeristy_of_Washington_REU_2026/questions.pdf` | Application material | n/a | REU/internship/application responses | UW Bothell Mathematics REU Application | Partial (selected excerpts only) |
| `Applications/REUs/michigan_state_reu_summer_2026/questions.pdf` | Application material | 2026 | REU/internship/application responses | I am drawn to SURIEM’s emphasis on exploratory, team-based research in discrete and applied | Partial (selected excerpts only) |
| `Applications/Stellar-Tulane-Academic-Recognition-(STAR)/Naig_STAR_Essay/Naig_STAR_Essay.pdf` | Application material | 2026 | REU/internship/application responses | Tulane ID: 511006587 | Partial (selected excerpts only) |
| `Applications/Transfer_Applications/Harvard/personal-statement/personal-statement.pdf` | Statement | n/a | Personal and academic narrative | elicoe05@icloud.com / enaig@tulane.edu (314) 313–7140 | Partial (selected excerpts only) |
| `Applications/WashU/Washu Application.docx` | Application material | n/a | REU/internship/application responses | As someone who wears glasses, I like to use the analogy that every time I learn something new in math, I start to see the world mo | Partial (selected excerpts only) |
| `Applications/WashU/Why WashU.docx` | Application material | n/a | REU/internship/application responses | WashU reflects a scholarly dedication that aligns with my own ambitions as a mathematics student and lifelong learner. As I began  | Partial (selected excerpts only) |
| `Applications/X Ai Pure Math Expert/cover-letter.pdf` | Cover letter | 2026 | Program/company-specific motivation and fit | because it combines two strengths developed through research and teaching: producing rigorous | Partial (selected excerpts only) |
| `Applications/calder-ai/cover-letter.pdf` | Cover letter | 2028 | Program/company-specific motivation and fit | B.S. in Mathematics (Expected 2028) | Partial (selected excerpts only) |
| `Applications/calder-ai/pdfs/cover-letter.pdf` | Cover letter | 2026 | Program/company-specific motivation and fit | Please consider my application for a Summer 2026 internship at Calder AI. I am a Tulane University | Partial (selected excerpts only) |
| `CV/main.pdf` | CV | 2028 | Research + academic profile | Eli C. Naig Email: enaig@tulane.edu | Yes (core evidence) |
| `CV/pdfs/cv-2026-01-03.pdf` | CV | 2026-01-03 | Research + academic profile | Eli C. Naig Email: enaig@tulane.edu | Yes (core evidence) |
| `CV/pdfs/cv-2026-01-11.pdf` | CV | 2026-01-11 | Research + academic profile | Eli C. Naig Email: enaig@tulane.edu | Yes (core evidence) |
| `CV/pdfs/cv-2026-01-12.pdf` | CV | 2026-01-12 | Research + academic profile | Eli C. Naig Email: enaig@tulane.edu | Yes (core evidence) |
| `CV/pdfs/cv-2026-01-13.pdf` | CV | 2026-01-13 | Research + academic profile | Eli C. Naig Email: enaig@tulane.edu | Yes (core evidence) |
| `Letters of Recomendation/EliNaig.pdf` | Recommendation | 2026 | External evaluation/endorsement | Department of Mathematics | Partial (selected excerpts only) |
| `Letters of Recomendation/Mahir/Naig_Weiss_Undergraduate_Teaching_Nomination/Naig_Weiss_Undergraduate_Teaching_Nomination.pdf` | Recommendation | 2026 | External evaluation/endorsement | Subject: Nomination for the Suzanne & Stephen Weiss Award for Excellence in Under- | Partial (selected excerpts only) |
| `Letters of Recomendation/Mahir/Naig_Weiss_Undergraduate_Teaching_Nomination/pdfs/Naig_Weiss_Undergraduate_Teaching_Nomination.pdf` | Recommendation | 2026 | External evaluation/endorsement | Subject: Nomination for the Suzanne & Stephen Weiss Award for Excellence in Under- | Partial (selected excerpts only) |
| `Letters of Recomendation/Mahir/naufils-nomination-for-mahir/naufil-nomination-for-mahir.pdf` | Recommendation | 2025 | External evaluation/endorsement | Subject: Nomination for GSSA Exceptional Faculty Mentor Award 2025 | Partial (selected excerpts only) |
| `Letters of Recomendation/Preston/preston-lor.pdf` | Recommendation | 2025 | External evaluation/endorsement | at Tulane University. We first met during our freshman year, living on the same residence hall | Partial (selected excerpts only) |
| `Personal Statement/REU/pdfs/personal-statement.pdf` | Statement | n/a | Personal and academic narrative | elicoe05@icloud.com / enaig@tulane.edu (314) 313–7140 | Partial (selected excerpts only) |
| `Personal Statement/REU/personal-statement.pdf` | Statement | n/a | Personal and academic narrative | elicoe05@icloud.com / enaig@tulane.edu (314) 313–7140 | Partial (selected excerpts only) |
| `Resume/academic-resume.pdf` | Resume | 2024 | Professional/industry-facing profile | elinaig.github.io • enaig@tulane.edu • linkedin.com/in/eli-naig | Yes (core evidence) |
| `Resume/old-academic-resume/academic-resume.pdf` | Resume | 2024 | Professional/industry-facing profile | elinaig.github.io • enaig@tulane.edu • linkedin.com/in/eli-naig | Yes (core evidence) |
| `Resume/pdfs/Eli_Naig_Resume.pdf` | Resume | 2024 | Professional/industry-facing profile | elinaig.github.io • enaig@tulane.edu • linkedin.com/in/eli-naig | Yes (core evidence) |
| `Transcripts/2025-09-03---unofficial_transcript.pdf` | Transcript | 2025-09-03 | Academic record/GPA | OFFICIAL TRANSCRIPTS ARE PRINTED ON GREEN SAFETY PAPER, WITH THE UNIVERSITY SEAL (RAISED SEAL NOT REQUIRED) AND BEAR THE | Yes (core evidence) |
| `Transcripts/2025-09-04_transcript.pdf` | Transcript | 2025 | Academic record/GPA | OFFICIAL TRANSCRIPTS ARE PRINTED ON GREEN SAFETY PAPER, WITH THE UNIVERSITY SEAL (RAISED SEAL NOT REQUIRED) AND BEAR THE | Yes (core evidence) |
| `gradschool-list/gradschool-list.pdf` | Planning | 2025 | Graduate school targeting | PhD Mathematics Grad School List | No (private planning doc) |
| `nvidia-antichain-proposal.pdf` | Grant proposal | n/a | Research funding proposal | Name: Mahir Bilen Can Title/Role: Professor of Mathematics University Name (full name, | Yes (core evidence) |

---

## Step 5: Key Extracted Facts (Synthesis Inputs)

### High-Confidence Facts (From CV/Resume/Transcript/Project Docs)

- Name: Eli C. Naig
- Affiliation: Tulane University (B.S. Mathematics, expected 2028)
- GPA evidence:
  - CV/Resume: `3.96 / 4.00`
  - Transcript extraction includes cumulative GPA around `3.958`
- Active research area: algebraic coding theory + post-quantum cryptography
- Current research mentorship: Mahir Bilen Can
- Multiple manuscripts listed as under review/submitted (2025)
- Leadership/operations highlights:
  - QSPARC Labs (Co-Founder/CEO in CV)
  - Tulane Science Olympiad logistics leadership (450+ students, 13 teams, 60+ rooms)
  - Founder, Tulane Math Circle
- Awards/honors in CV:
  - Tulane Honors Scholar (2024–2028)
  - Dean’s List (Fall 2024, Spring 2025, Fall 2025)

### Publications / Manuscripts Mentioned in Resume/CV

1. Can, Chakrabartty, Naig — "Post-quantum key establishment on a self-powered timekeeping device" (submitted, 2025)
2. Can, Naig — "Lower bounds for minimum NRT distance from generator and parity-check matrices" (under review, Journal of Cryptology, 2025)
3. Can, Naig — "Quasi-circulant trapdoor construction for Niederreiter-type key encapsulation" (under review, Designs, Codes and Cryptography, 2025)

### Evidence-Backed Skill Signals

- Mathematics and theory:
  - Algebraic coding theory, NRT metrics, combinatorics, algebraic geometry, analysis
- Programming languages (combined evidence):
  - Python, Rust, C/C++, MATLAB, TypeScript/JavaScript, SQL, R, Swift
- Engineering stack evidence:
  - Next.js, Astro, FastAPI, PostgreSQL/Supabase, Redis, Celery, Docker, LaTeX, Git
- Research operations:
  - Reproducible benchmarking, DFR/FER/BER pipelines, manuscript companion tooling, conformance vectors

### Suggested “Best Project” Candidates for Portfolio Emphasis

1. `Anti-Chain` (strongest technical depth + benchmarking rigor + direct crypto relevance)
2. `spora` (strongest full-stack product breadth + visual demo assets)
3. `hqc-nrt` or `quasi-circulant-ntr-py` (strong cryptography implementation rigor)

