# R6V-R1 DESIGN SYSTEM

**Phase:** P24-12-WEB-R6V-R1 · 2026-08-21

## Active CEO design system (Level 1)
- **Masthead:** `.r6v-topbar` / `.r6v-brand` (logo ~300px desktop) / `.r6v-title` / `.r6v-navbar` (dark, 9 items) / `#r6v-nav-toggle` (mobile).
- **Cover:** `.r6v-cover` — single hero. Headline, lead, two-lane (Y TẾ / ÂM NHẠC), H1 financial baseline, approval-vs-investment rule.
- **Chapters:** `.r6v-chapter` + 8 varied treatments:
  - `ch-research` (white/light analytical) · `ch-filter` (white→lavender) · `ch-bridge` (deep navy) · `ch-health` (bright clinical) · `ch-music` (dark cinematic) · `ch-ops` (mist blue) · `ch-finance` (white typographic) · `ch-decision` (deep navy closing memo).
- **Visual modules:** `.r6v-wrong-right`, `.r6v-two-market`, `.r6v-funnel`, `.r6v-proof`, `.r6v-rank-move`, `.r6v-cap-bridge`, `.r6v-blueprint`, `.r6v-buyers`, `.r6v-sales`, `.r6v-c1c2`, `.r6v-ladder`, `.r6v-money`, `.r6v-pnl`, `.r6v-capital`, `.r6v-portfolio`, `.r6v-risk`, `.r6v-gantt`, `.r6v-clock`, `.r6v-clock-final`.
- **Icons:** `.r6v-icon` (23 local SVG, no CDN/emoji).
- **Level-2 detail:** `.r6v-detail` (expandable, `.r6v-detail-body` resets legacy `.site-section` to transparent).

## Legacy detail system (Level 2, kept for expanded content)
- `.site-section`, `.shell`, `.section-header`, `.conclusion-block`, `.transition`, `.plain-list`, `.offer-4`, `.plan90`, `.ceo-table`, `.cc-table`, `.commercial-path`, `.price-block`, `.rights-block`, `.capital-block`, `.port-grid`, `.risk-grid`, etc. — retained only for content inside `<details class="r6v-detail">`.

## Technical appendix system (Level 3)
- `.research-layer`, `.disclosure-block`, `.source-list`, `.source-card`, `.citation-drawer`, `.drawer-backdrop`, `.metric-grid` — evidence/source registry + citation drawer.

## Card reduction
- 16 legacy section blocks that duplicated R6V visuals moved behind Level-2 disclosures → estimated **~40–50% reduction** in default-visible boxed content.
- Legacy hero removed (1 hero only).

## Typography changes
- Hero headline `clamp(40px,5.6vw,66px)` with tighter letter-spacing.
- Chapter h2 `clamp(32px,4.6vw,52px)`.
- Reduced all-caps walls; `.section-index` lightened; more sentence case.
- Detail-body h2 reduced to 24px inside disclosures.

## Logo actual rendered treatment
- `.r6v-brand img` width 300px desktop / 210px tablet / 170px mobile; measured 300×60.5px visible artwork. Generous breathing room; SAVRSE title right; minimal competing text.
