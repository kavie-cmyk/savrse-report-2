# R6V-R2R — Visual QA

Screenshots captured to `qa/r6v-r2r/screenshots/`. Viewport: desktop 1440×900, mobile 390×844.

---

## Desktop (1440×900)

| # | File | Captures | Readability |
|---|------|----------|-------------|
| 01 | `desktop-01-ceo-heading.png` | `#R6C-24 .section-header` | h2 white on dark gradient; index cyan |
| 02 | `desktop-02-ceo-five-decisions.png` | `#R6C-24 .r6v-memo` | 5 memo cards; green/red tints; white text readable |
| 03 | `desktop-03-ceo-full-detail-closed.png` | `details.r6v-ceo-full-detail` | collapsed summary "Xem đầy đủ phạm vi phê duyệt" |
| 04 | `desktop-04-ceo-not-approved.png` | `.not-approved` | clean list; cyan h3 on dark |
| 05 | `desktop-05-ceo-conclusion.png` | `.conclusion-block` | white on dark |
| 06 | `desktop-06-final-clock.png` | `.r6v-final-management` | 5-step clock on dark |
| 07 | `desktop-07-story-end.png` | `.r6v-story-end` | marker |
| 08 | `desktop-08-appendix-separator.png` | `.r6v-appendix-separator` | quiet separator |
| 09 | `desktop-09-appendix-header.png` | `#B8 .section-header` | light section; dark text readable |
| 10 | `desktop-10-appendix-disclosures.png` | `#B8 .disclosure-block` | 3 collapsed levels |
| 11 | `desktop-11-page-footer.png` | `footer` | clean footer |

## Mobile (390×844)

| # | File | Captures |
|---|------|----------|
| 12 | `mobile-12-ceo-five-decisions.png` | memo cards stacked |
| 13 | `mobile-13-ceo-full-detail-closed.png` | collapsed full-approval |
| 14 | `mobile-14-ceo-not-approved.png` | list |
| 15 | `mobile-15-final-clock.png` | clock (single column) |
| 16 | `mobile-16-story-end.png` | marker |
| 17 | `mobile-17-appendix-header.png` | appendix header |
| 18 | `mobile-18-footer.png` | footer |

## Computed-style contrast spot-checks (desktop)

| Element | fg | bg | Readable |
|---------|----|----|:---:|
| R6C-24 h2 | `#fff` | dark gradient (10,26,63→) | ✓ |
| R6C-24 .section-index | `#6fd8f2` | dark | ✓ |
| memo-yes p | `rgba(255,255,255,.92)` | `rgba(30,158,106,.15)` over dark | ✓ |
| memo-no p | `rgba(255,255,255,.92)` | `rgba(192,57,43,.13)` over dark | ✓ |
| not-approved h3 | `#6fd8f2` | dark | ✓ |
| ceo-full-detail summary | `#fff` | dark | ✓ |
| appendix note | `ink-900` @ .72 | light `#eef3fb` | ✓ |
| appendix disclosure summary | `ink-900`-ish | white card | ✓ |
| footer p | `rgba(255,255,255,.8)` | `#0a1a3f` | ✓ (contrast 17.04) |

## Notes

- The full-approval matrix (8-col `.ceo-table`) is **closed by default** — desktop/mobile 03/13 show only the summary. Opening it (via `<summary>` click) renders white text on dark, no overflow.
- The appendix is visually quiet: reduced-disclosure cards on the light section; body text dark.

**Result: VISUAL QA PASS (artifacts in `qa/r6v-r2r/screenshots/`)**
