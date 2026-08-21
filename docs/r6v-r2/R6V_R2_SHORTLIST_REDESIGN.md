# R6V-R2 SHORTLIST REDESIGN

**Phase:** P24-12-WEB-R6V-R2 · 2026-08-21

## B2B shortlist (12)
- **Default view:** two-tier landscape.
  - **Final 5** (large, prominent): Healthcare · Virtual Commissioning · Warehouse · Broadcast · Construction.
  - **Other 7** (secondary): each with one-line dominant structural reason + status "Dừng trước vòng cuối".
- Each item: name + one-line why-survived + status; full detail behind `<details>`.
- All 12 preserved, no content loss.

## B2C shortlist (11)
- **Default view:** two-tier landscape.
  - **Final 5** (prominent): Sports · Music · Puzzle · Language · LBE.
  - **Other 6** (secondary): one-line structural stop reason.
- Each: name + what-player-does (short) + why-survived + status; full detail behind expand.

## Design language
- No 23 equally-styled rounded cards.
- Final/non-final status is the only supported qualitative tier (no numeric scores).
- Horizontal bands + semantic grid, not card wall.

## Detail preservation
Full R6C content (customer objective, why survived, final disposition, full reason) preserved inside each item's `<details>`.
