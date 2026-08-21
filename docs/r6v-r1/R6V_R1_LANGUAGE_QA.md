# R6V-R1 LANGUAGE QA

**Phase:** P24-12-WEB-R6V-R1 · 2026-08-21

## Default-visible layer (Level 1) — CEO natural Vietnamese
Research/AI terminology in the default CEO flow **removed**:

| Term | Before (default-visible) | After |
|---|---|---|
| kiểm chứng (×12 default) | "hai làn kiểm chứng" / "kiểm chứng thương mại" / "kiểm chứng sản phẩm" / "câu hỏi kiểm chứng" | "hai hướng ưu tiên thử" / "tìm khách hàng thật" / "chứng minh game đủ hay" / "câu hỏi cần trả lời" |
| validation / commercial proof / paid proof | (from R6V remediation) | natural Vietnamese |
| repeatability | "phép thử khách hàng thứ hai" | kept (natural) |
| thesis / trigger-based / strategic watch / wedge / WHY-VR / SYSTEM-FIRST / SOLO-FIRST / UNKNOWN / evidence ceiling | (from R6V remediation) | removed from default |

**Verification:** `kiểm chứng` count in default-visible layer = **0** (file scan outside `<details>`). Playwright "visible text" reads collapsed `<details>` content (DOM textContent), which is a QA-harness artifact — those terms live in Level-2 detail where precise terminology is acceptable.

## Level 2 / Level 3
Technical/research terminology retained only where genuinely useful (detail layers, evidence appendix).

## Remaining intentional terms
Proper nouns + frozen category labels: SAVRSE, SAVA, Pulse Deflector, Counterbeat, Phase Tether, Music World, B2B/B2G, B2C, VR, LBE.
