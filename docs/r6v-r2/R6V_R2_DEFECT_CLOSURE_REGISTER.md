# R6V-R2 DEFECT CLOSURE REGISTER

**Phase:** P24-12-WEB-R6V-R2 · 2026-08-21

| # | Defect | Pre-R2 state | R2 action | Files changed | Screenshot evidence | Result |
|---|---|---|---|---|---|---|
| 01 | B2B shortlist card wall | 12 text-heavy items default-visible | Rebuilt as two-tier landscape: 5 final prominent + 7 secondary, one-line each, detail behind expand | index.html, styles.css (r6v-sl2-*) | 04-shortlist-b2b-1440.png | CLOSED |
| 02 | B2C shortlist card wall | 11 text-heavy items | Same landscape treatment | index.html, styles.css | 05-shortlist-b2c-1440.png | CLOSED |
| 03 | Final-10 default density | 9-column table default-visible | Added executive ranked view (10 rows); full table moved behind `<details>` | index.html, styles.css (r6v-f10-*) | 06-final10-1440.png | CLOSED |
| 04 | Evidence card wall | 8 similar proof cards | Rebuilt as editorial types: big-number ORF, price strip, evidence/counter duo, warning | index.html, styles.css (r6v-ev-*) | 07-evidence-1440.png | CLOSED |
| 05 | Chapter-order rhythm | Content before chapter openers | Reordered main children: every chapter opener precedes its content | index.html (reorder-main) | sequence audit | CLOSED |
| 06 | Chapter template repetition | 8 similar openers | Varied treatments (ch-research/filter/bridge/health/music/ops/finance/decision) | styles.css | chapter screenshots | CLOSED |
| 07 | Healthcare art direction | structured webpage feel | Image-led chapter hero + bright clinical palette | index.html, styles.css (r6v-health-open) | 09-healthcare-open-1440.png | CLOSED |
| 08 | Music concept hierarchy | concept art competing with boxes | Music scene treatment (large image, loop, question) | styles.css (r6v-music-scene) | 12-14 pulse/counterbeat/phase | CLOSED |
| 09 | 90-day decision hierarchy | Gantt only | Added 30/60/90 outcome-led rows (what exists / what we learn / decision opens) | index.html (r6v-90-outcome) | 16-integrated-90day | CLOSED |
| 10 | Finance UI-like | boxes | Typography-first hero (0 vs 9,167 tỷ) + 4-part known/unknown structure | index.html (r6v-fin-*) | 17-finance-1440.png | CLOSED |
| 11 | CEO decisions web-section feel | table section | Board-memo format: 5 decisions with PHÊ DUYỆT / KHÔNG PHÊ DUYỆT | index.html (r6v-memo) | 20-ceo-decisions | CLOSED |
| 12 | Navigation | 9 items, some broken targets | Simplified to 8 Vietnamese items pointing to visible chapter openers | index.html (fix-nav) | nav audit | CLOSED |
| 13 | Citation DOM nesting | 6/8 nested citation-rows | Rebuilt evidence block flat; 0 nested rows | index.html (rebuild-evidence) | DOM QA | CLOSED |
| 14 | Box-heavy visuals | many equal boxes | Reduced chrome: fewer borders/shadows/pills, more whitespace | styles.css (UI chrome reduction) | screenshots | CLOSED |
