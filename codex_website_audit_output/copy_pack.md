# Copy Pack

## Homepage Hero Options

## Option 1: Research-forward

- **Headline:** Building post-quantum cryptography from algebra to implementation.
- **Subheadline:** I’m Eli Naig, a mathematics student and researcher at Tulane focused on algebraic coding theory, NRT metrics, and reproducible PQC systems.

## Option 2: Engineering-forward

- **Headline:** I turn cryptography research into reproducible systems.
- **Subheadline:** From QC/Niederreiter constructions to benchmark pipelines, I build and validate post-quantum workflows in Python, Rust, and C.

## Option 3: Balanced (academic + product)

- **Headline:** Math-first. Security-driven. Built to ship.
- **Subheadline:** I work at the intersection of algebraic coding theory, post-quantum cryptography, and practical engineering for research and real-world systems.

---

## About Section Drafts

## Short About (homepage)

I’m a mathematics student at Tulane University (GPA 3.96) and an undergraduate researcher in algebraic coding theory and post-quantum cryptography. My work focuses on how algebraic structure can improve both cryptographic design and implementation: from metric-aware decoding to quasi-circulant trapdoor constructions. I care about rigor, reproducibility, and clear technical communication.

## Long About (dedicated About page)

I’m Eli Naig, a mathematics student at Tulane and an undergraduate researcher working with Professor Mahir Bilen Can on algebraic coding theory and post-quantum cryptography.

My research sits at the boundary between theory and implementation. I’m especially interested in code-based cryptography, non-Hamming metrics (including NRT), and quasi-circulant / Niederreiter-type constructions. I approach these problems with a structure-first lens: use algebraic and combinatorial invariants to understand what can be computed efficiently, what remains hard, and how to build systems that are both mathematically sound and practically testable.

Alongside research, I build reproducible technical workflows: benchmarking harnesses, conformance vectors, and implementation stacks in Python, Rust, and C. I’ve also worked across full-stack product environments (Next.js + FastAPI + Postgres) where clear architecture and operational rigor matter as much as code.

I’m currently seeking opportunities that deepen this path: research collaborations, advanced technical projects, and graduate-level work in mathematics/cryptography.

---

## Resume-Style Summary (Drop-In)

Mathematics student at Tulane University (GPA 3.96/4.00) specializing in algebraic coding theory and post-quantum cryptography, with hands-on implementation experience in Python, Rust, C/C++, and full-stack web systems. Active undergraduate researcher with manuscripts under review in NRT and quasi-circulant code-based cryptography, plus leadership experience translating research into reproducible benchmark pipelines and deployable technical systems. Seeking research-intensive roles and collaborations at the intersection of mathematics, cryptography, and secure systems engineering.

---

## Project Card Templates

## Template A: Problem/Approach/Outcome

- **Title:** `{Project Name}`
- **One-liner:** `{One sentence describing what this project does}`
- **Problem:** `{What gap/challenge motivated this}`
- **Approach:** `{Method/architecture in 1-2 lines}`
- **Outcome:** `{Measured result, artifact, or impact}`
- **Tech:** `{Language/tool list}`
- **Links:** `Case Study` | `Code` | `Demo/Paper`

## Template B: Research Snapshot

- **Title:** `{Project Name}`
- **Research Question:** `{Main technical question}`
- **Key Insight:** `{Core idea}`
- **Validation:** `{Test/benchmark/evidence}`
- **Status:** `{Prototype / Under review / Active}`
- **Tags:** `{PQC, coding theory, benchmark, etc.}`

## Template C: Product/Systems Snapshot

- **Title:** `{Project Name}`
- **What I built:** `{System scope}`
- **Users/Context:** `{Who this serves}`
- **Architecture:** `{Frontend/backend/infra summary}`
- **Proof:** `{Scale, feature depth, outcomes}`
- **Role:** `{Your role}`

---

## Full Case Study Template

- **Project:** `{Project Name}`
- **Role:** `{Role + timeframe}`
- **Context:** `{Why this mattered}`

### 1. Problem
`{What was missing, broken, or unknown?}`

### 2. Constraints
`{Research constraints, data constraints, performance constraints, timeline}`

### 3. Approach
`{Architecture/method decisions and why}`

### 4. Implementation
`{Key modules, components, and workflows}`

### 5. Validation
`{How you measured correctness/performance}`

### 6. Outcome
`{Results, impact, next steps}`

### 7. What I’d improve next
`{Technical debt, scaling plans, follow-up experiments}`

### 8. Links
- Code: `{url}`
- Paper/Write-up: `{url}`
- Demo: `{url}`

---

## Case Study Example (Filled): Anti-Chain / posetbench

- **Project:** Anti-Chain (`posetbench`)
- **Role:** Research/implementation lead (inferred), 2025–2026
- **Context:** Existing work on poset metrics was mathematically strong but lacked engineering-grade benchmark pipelines against practical LDPC baselines.

### 1. Problem
How can we compare shortest-path/antichain metric decoding ideas against standard LDPC baselines in a reproducible way, across channels and parameter regimes?

### 2. Constraints
- Fair comparison requirements across decoders and channels
- Deterministic/reproducible experiments
- Need for both small exact checks and larger practical benchmarks

### 3. Approach
I built a benchmark suite that combines:
- metric implementations (SP/AN)
- AN-aware decoder variants
- baseline decoders
- sweep tooling for BSC/AWGN and NR/5G-style scenarios

### 4. Implementation
Key implementation elements include:
- complete-bipartite closed-form metric implementations for scalable experiments
- AN-biased candidate selection and AN-OSD variants
- CLI entry points for single-run and sweep experiments
- structured outputs (`metrics.json`, `metrics.csv`, sweep artifacts)

### 5. Validation
Validation used:
- paper-aligned small enumerator reproduction checks
- scripted sanity checks for metric correctness and recovery behavior
- benchmark runs with logged seeds, parameters, and environment assumptions

### 6. Outcome
The project produced a reproducible benchmark framework connecting metric theory to practical evaluation. It generated quantitative artifacts (FER/BER/sweep data) and provided a clear foundation for paper figures and future decoder comparisons.

### 7. What I’d improve next
- Expand standardized hardware-backed runtime comparisons
- Add more baseline decoder integrations for broader comparability
- Automate report generation into a single publication-ready pipeline

### 8. Links
- Code: `QSPARC-Labs/Anti-Chain`
- Paper assets: `QSPARC-Labs/Anti-Chain/latex/`
- Bench scripts: `QSPARC-Labs/Anti-Chain/scripts/`
