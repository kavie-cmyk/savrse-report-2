# R6V-R2R — Bounded Tail Readability Remediation — Defect Register

**Project:** Savrse CEO website (P24-12-WEB-R6V-R2R)
**Repo:** `kavie-cmyk/savrse-report-2` (main)
**Baseline:** `766bc5a` (R6V-R2) — backup tag `archive/pre-r6v-r2r-20260821`
**Scope:** CHAPTER 08 (CEO CẦN PHÊ DUYỆT GÌ?) → END OF PAGE only. No rebuild, no rerank, no new research.

---

## Trigger

User feedback: *"nguyên đoạn từ CEO cần phê duyệt gì xuống cuối là không đọc được luôn"* — the segment from CEO approvals to the end of page is unreadable.

---

## Defects Found & Closed

| # | Defect | Severity | Root cause | Fix |
|---|--------|----------|-----------|-----|
| A | Dense 8-column CEO approval table rendered open by default, flooding the page | High | `.ceo-table` was a plain visible block after the 5-decision memo | Wrapped `.ceo-table-wrap` in `<details class="r6v-detail r6v-ceo-full-detail">` with summary "Xem đầy đủ phạm vi phê duyệt", **default CLOSED** |
| B | UTF-8 mojibake across B8 evidence appendix (320 locations, 42 patterns) | Critical | Corruption introduced during R6C phase; R5 `a430aa1` has clean B8 | Replaced corrupted B8 `<section>` with authoritative clean R5 B8 (35 templates S01–S35 preserved); also repaired corrupted page `<footer>` from clean R5 |
| C | No clean management ending before heavy appendix; appendix Level-1 was open by default | High | Clock existed inside R6C-25 details but no dedicated final scene; appendix Level 1 had `open` | Added final management clock scene (Hôm nay → 30 → 60 → 90 → Quyết định vốn, two lanes), "Sau 90 ngày..." final quote, **—PHẦN RA QUYẾT ĐỊNH KẾT THÚC TẠI ĐÂY.—** marker, **PHỤ LỤC · BẰNG CHỨNG & NGUỒN** separator; set all 3 appendix disclosure levels **default CLOSED** |
| D | CEO decision section white-on-light unreadable (root cause of the report) | Critical | `#R6C-24` was `site-section mist` (light bg) but its `.r6v-memo-*` content uses white text (designed for dark) | Changed `#R6C-24` to `site-section dark` (gradient dark bg), making all 5 decisions + full-approval + not-approved readable |
| E | Appendix quiet copy + visual treatment absent | Medium | No `r6v-evidence-appendix` styling | Added class `r6v-evidence-appendix` to B8, quiet copy "Phần dưới đây phục vụ kiểm tra nguồn và truy vết chi tiết. Không cần đọc để hiểu quyết định chính." + "Tất cả các mục đều đóng sẵn. Mở mục nào cần kiểm tra thì mở mục đó." + light-theme quiet disclosure styling |

---

## Default CEO view (after fix)

Only **5 executive decisions** visible, each with PHÊ DUYỆT / KHÔNG PHÊ DUYỆT:
1. Tập trung
2. Y tế
3. Pulse
4. Vốn
5. Kỷ luật danh mục

Then **CEO KHÔNG ĐƯỢC ĐỀ NGHỊ PHÊ DUYỆT** (clean list), then **—PHẦN RA QUYẾT ĐỊNH KẾT THÚC TẠI ĐÂY.—**, then quiet appendix.

Full approval matrix moved into `<details class="r6v-ceo-full-detail">` (closed).

---

## Files changed

- `index.html` — R6C-24 dark class; CEO full-detail wrapper; clock finale; story-end marker; appendix separator; clean B8 + footer; appendix note + class
- `styles.css` — R6V-R2R CSS layer (`.r6v-ceo-full-detail`, `.r6v-final-management`, `.r6v-story-end`, `.r6v-appendix-separator`, `.r6v-evidence-appendix` light treatment, responsive)

## Verification

- UTF-8 integrity: **PASS** (0 mojibake patterns)
- Tail structure: **28/28 checks PASS**
- Contrast/readability: CEO memo white-on-dark PASS; appendix dark-on-light PASS
- Overflow: 0 at 1440 / 834 / 390 / 360
- Interactions: full-approval + appendix disclosures open correctly, no overflow

**Status:** TAIL READABILITY REMEDIATION COMPLETE / UTF-8 INTEGRITY PASS / READY FOR USER REVIEW
