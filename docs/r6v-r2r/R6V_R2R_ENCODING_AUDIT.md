# R6V-R2R — UTF-8 Encoding Audit

**Scope:** Whole `index.html` (230,941 chars after remediation). Powershell console display garbles Vietnamese; all byte checks done via Node `fs.readFileSync(path,'utf8')` / `git show <sha>:index.html` with `encoding:'buffer'`.

---

## 1. Corruption scope (before fix)

- **320 corruption locations, 42 mojibake patterns**, 100% confined to the B8 evidence appendix `<section id="B8">` (35 source templates S01–S35 + 3 disclosure headers + body text) and the page `<footer>`.
- Corruption type: **UTF-8 double-encoding** (`đồng` → `Ä‘á»“ng`, `Chứng minh` → `Chá»©ng minh`, `Mở nguồn gốc` → `Má»Ÿ nguá»“n gá»‘c`, `·` → `â€¢`/`Â·`, `—` → `â€“`, `→` → `â†`, etc.).
- Replacement char U+FFFD count: **0** — rules out a lossy single-repair path; the corruption is mojibake from a byte-decoding mismatch.

## 2. Root cause / introduction point

| Commit | Mojibake hits | Note |
|--------|---------------|------|
| `a430aa1` (R5 build) | **0** | Clean B8, 35 templates |
| `31d1eac` (R6C baseline) | 83+ | Corruption present |
| `766bc5a` (R6V-R2) | 320 | All in B8 + footer |

→ Corruption introduced during the **R6C** phase, survived through R6V-R2. It escaped detection because prior R2 screenshots stopped at the CEO decision view and never captured the tail/appendix (noted in R6V-R2 prompt §28).

## 3. Repair strategy

Per remediation constraint §8 ("Do NOT use lossy heuristic replacement when an authoritative clean version exists"), we did **NOT** attempt latin1→utf8 round-trip (verified LOSSY: `đ` and some diacritics → U+FFFD).

**Authoritative clean source:** R5 build `a430aa1` B8 section (clean Vietnamese, 35 templates, verified `mojibake:false`).

**Applied:**
1. Replaced corrupted B8 `<section id="B8" ...>...</section>` with the clean R5 B8 (41,423 chars), removing the `open` attribute so all 3 disclosure levels default CLOSED.
2. Replaced corrupted `<footer>` with clean R5 footer ("Kế hoạch kinh doanh Savrse · Bản dành cho Tổng Giám đốc. Bằng chứng trước, quyết định sau.").

## 4. Verification after fix

- Full-pattern scan (`tools/r6v-r2r/scan-final.cjs`): **REAL MOJIBAKE: CLEAN ✓** (0 real hits across 40+ patterns; `·` U+00B7 counted separately as a legitimate design separator).
- Key clean markers present:
  - `Kế hoạch kinh doanh Savrse` (footer) ✓
  - `Không cần đọc để hiểu quyết định chính` ✓
  - `PHẦN RA QUYẾT ĐỊNH KẾT THÚC TẠI ĐÂY` ✓
  - `PHỤ LỤC · BẰNG CHỨNG & NGUỒN` ✓
  - `Sau 90 ngày, mục tiêu không phải có hai sản phẩm hoàn chỉnh` ✓
  - `Cấp 1/2/3` disclosure summaries ✓
- 35 source templates S01–S35 present and clean (drawer still works).

## 5. Audit tools (this phase)

- `tools/r6v-r2r/scan-mojibake.cjs` — full 42-pattern scan
- `tools/r6v-r2r/verify-repair.cjs`, `test-repair.cjs` — proved latin1 round-trip is LOSSY (not viable)
- `tools/r6v-r2r/scope.cjs`, `inspect-b8.cjs`, `locate-remaining.cjs` — pinpointed scope to B8 + footer
- `tools/r6v-r2r/check-history.cjs` — R5 clean (0) vs R6C/R6V corrupted
- `tools/r6v-r2r/extract-clean-b8.cjs` — saved clean B8 to `%TEMP%\savrse-r6c\B8-CLEAN-R5.html`
- `tools/r6v-r2r/replace-b8.cjs`, `fix-footer.cjs` — applied the repair
- `tools/r6v-r2r/scan-final.cjs`, `verify-tail-full.cjs`, `check-times.cjs`, `check-css-times.cjs` — post-repair verification

**Status:** UTF-8 INTEGRITY PASS
