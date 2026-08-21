# R6V-R2R — DOM QA

Verified against local `http://localhost:8779/index.html` at desktop (1440×900) and mobile (390×844) via Playwright.

---

## 1. Tail element presence + visibility

| # | Selector | Desktop present | Mobile present | Notes |
|---|----------|:---:|:---:|-------|
| 1 | `#R6C-24` (CEO decisions) | ✓ | ✓ | now `site-section dark` |
| 2 | `details.r6v-ceo-full-detail` | ✓ | ✓ | closed by default |
| 3 | `.not-approved` | ✓ | ✓ | clean list |
| 4 | `.r6v-final-management` (clock) | ✓ | ✓ | |
| 5 | `.r6v-story-end` | ✓ | ✓ | marker |
| 6 | `.r6v-appendix-separator` | ✓ | ✓ | |
| 7 | `#B8` (`r6v-evidence-appendix`) | ✓ | ✓ | 3 disclosure levels closed |
| 8 | `footer` | ✓ | ✓ | clean text |

## 2. Counts / invariants

- 5 `r6v-memo-dec` / 5 `r6v-memo-yes` / 5 `r6v-memo-no` → 5 executive decisions
- 1 `r6v-ceo-full-detail` (no `open`)
- 3 `disclosure-block` (no `open`)
- 35 `source-template-S01..S35` (drawer templates preserved)
- B8 has class `r6v-evidence-appendix`

## 3. Overflow

| Viewport | document.scrollWidth | window.innerWidth | overflowX |
|----------|---------------------|-------------------|:---:|
| 1440 | 1425 | 1440 | false |
| 390 | 303 | 318 | false |

(834 / 360 spot-checked earlier in R6V-R2: 0 overflow.)

## 4. Tag balance in tail (from `#ch8` → `</footer>`)

- `<section>` / `</section>` balanced
- `<details>` / `</details>` balanced
- `<div>` / `</div>` balanced
- `<table>` / `</table>` balanced

## 5. Interaction checks

| Action | Result |
|--------|--------|
| Open `details.r6v-ceo-full-detail` | table appears; th `#fff`, td `rgba(255,255,255,.92)` on dark — readable; no overflow |
| Open `#B8 .disclosure-block` (Cấp 1) | body visible; p color `rgb(11,21,48)` on light — readable |
| Open Cấp 3 | templates remain inside `<template>` (not printed); drawer source buttons intact |

## 6. Accessibility snapshot (relevant)

- R6C-24 header: `section-index` cyan on dark, h2 white, `management-question` white .88
- "Xem đầy đủ phạm vi phê duyệt" as `<summary>` — keyboard accessible
- Appendix disclosures use native `<summary>` — keyboard accessible
- footer link "Nguồn & bằng chứng" → `#B8`

**Result: PASS**
