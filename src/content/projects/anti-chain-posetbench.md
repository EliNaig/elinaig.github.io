---
title: "Anti-Chain (posetbench)"
date: 2026-02-01
summary: "A reproducible benchmarking suite for antichain/shortest-path poset metrics against LDPC baselines, including NR/5G-aligned experiments."
role: "Research and implementation lead"
impact: "Established a deterministic benchmark workflow linking theory-heavy metric work to practical decoder evaluation."
tags:
  - Post-Quantum Cryptography
  - Coding Theory
  - Benchmarking
  - Python
selected: true
---

## Problem

Most work on poset-based metrics is mathematically rich but hard to compare against practical LDPC decoders in a reproducible way.

## Approach

I built an experiment pipeline that combines AN/SP metric implementations, AN-aware decoder variants, baseline decoders, and sweep tooling across channel settings.

## Outcome

The project produces deterministic, replayable experiment artifacts (`metrics.json`, CSV summaries, and sweep outputs) and supports paper-aligned checks and figure generation.

## What this demonstrates

- Research-to-engineering translation
- Reproducible benchmarking methodology
- Applied coding-theory systems work in Python
