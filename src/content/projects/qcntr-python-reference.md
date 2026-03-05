---
title: "QC-NTR Python Reference"
date: 2026-01-25
summary: "A research reference implementation for quasi-circulant Niederreiter-type KEM, focused on correctness, invariants, and DFR experimentation."
role: "Research implementation author"
impact: "Provided a clear validation baseline for QC-NTR construction and future optimized implementations."
tags:
  - Cryptography
  - Python
  - Research
  - Reproducibility
selected: true
---

## Problem

Advanced algebraic cryptosystems can be difficult to validate without a transparent, testable reference implementation.

## Approach

I implemented core QC-NTR components in Python with deterministic parameter handling, explicit invariant checks, KEM flow coverage, and dedicated DFR experiment tooling.

## Outcome

The project provides a faithful research-grade baseline for validating constructions and comparing future optimized implementations.

## What this demonstrates

- Cryptographic protocol implementation rigor
- Reproducibility and testing discipline
- Clear separation of mathematical and engineering concerns
