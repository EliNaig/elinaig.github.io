# Content Governance

## Update cadence

- Weekly: update `Now` page with current focus.
- Monthly: add at least one project, writing note, publication status update, or talk update.
- Quarterly: review homepage proof points, featured projects, and timeline milestones.

## Publishing rules

1. Only publish claims with evidence in project repos, manuscripts, or validated documents.
2. For each featured project, maintain:
   - one-sentence summary
   - problem/approach/outcome
   - at least one proof artifact (code, benchmark output, or manuscript reference)
3. Keep status fields current for publications (`preprint`, `in-prep`, `published`).
4. Avoid duplicate or draft content in public collections.

## Quality gate before merge

- `npm run build`
- `npm run check:content`
- `npm run check:links`

