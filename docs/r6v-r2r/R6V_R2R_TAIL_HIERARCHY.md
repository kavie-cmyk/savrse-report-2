# R6V-R2R — Tail Decision Hierarchy

**Scope:** CHAPTER 08 (CEO CẦN PHÊ DUYỆT GÌ?) → END OF PAGE. This documents the intended read-order / hierarchy for the CEO-facing tail, per the R2R prompt.

---

## Intended CEO read path (top → bottom)

```
CHAPTER 08 opener  (ch8: "CEO CẦN PHÊ DUYỆT GÌ?" — 5 decisions, not 14 lines)
  │
  ▼
R6C-24 — GÓI QUYẾT ĐỊNH CEO
  ├─ 5 executive decisions (memo cards)            ← DEFAULT VISIBLE
  │     01 Tập trung · 02 Y tế · 03 Pulse · 04 Vốn · 05 Kỷ luật danh mục
  │     each: PHÊ DUYỆT / KHÔNG PHÊ DUYỆT
  │
  ├─ details.r6v-ceo-full-detail  (CLOSED by default)   ← optional deep-dive
  │     "Xem đầy đủ phạm vi phê duyệt"
  │     └─ .ceo-table (8-column approval matrix)
  │
  ├─ CEO KHÔNG ĐƯỢC ĐỀ NGHỊ PHÊ DUYỆT              ← visible clean list
  │     (5 items + caveat)
  │
  └─ conclusion: "CEO đang phê duyệt quyền học hỏi có điều kiện"
  │
  ▼
KẾT · Đồng hồ quản trị  (r6v-final-management)
  ├─ 90 NGÀY TỚI: AI LÀM GÌ, CẦN BẰNG CHỨNG GÌ, QUYẾT ĐỊNH GÌ
  ├─ clock: Hôm nay → 30 ngày → 60 ngày → 90 ngày → Quyết định vốn
  │     (two lanes: Y TẾ / GAME ÂM NHẠC via text inside steps)
  ├─ final quote: "Sau 90 ngày, mục tiêu không phải có hai sản phẩm hoàn chỉnh..."
  │
  ▼
—PHẦN RA QUYẾT ĐỊNH KẾT THÚC TẠI ĐÂY.—  (story-end marker)

— PHỤ LỤC · BẰNG CHỨNG & NGUỒN —  (quiet separator)

  ▼
B8 — NGUỒN VÀ BẰNG CHỨNG  (r6v-evidence-appendix, quiet, LIGHT section)
  ├─ intro: "Ba lớp: tóm tắt cho CEO → số liệu & nguồn chính → sổ đăng ký nghiên cứu kỹ thuật."
  ├─ quiet note: "Phần dưới đây phục vụ kiểm tra nguồn và truy vết chi tiết. Không cần đọc để hiểu quyết định chính."
  ├─ note-sub: "Tất cả các mục đều đóng sẵn. Mở mục nào cần kiểm tra thì mở mục đó."
  ├─ <details> Cấp 1 · Tóm tắt bằng chứng cho CEO   (CLOSED)
  ├─ <details> Cấp 2 · Số liệu & nguồn chính          (CLOSED)
  ├─ <details> Cấp 3 · Sổ đăng ký nghiên cứu kỹ thuật (CLOSED)
  │     └─ 35 templates S01–S35 (drawer source templates, NOT printed as page text)
  │
  ▼
footer — "Kế hoạch kinh doanh Savrse · Bản dành cho Tổng Giám đốc. Bằng chứng trước, quyết định sau."
```

## Rationale

- **CEO reads to the story-end marker** ("PHẦN RA QUYẾT ĐỊNH KẾT THÚC TẠI ĐÂY") — that is the complete decision surface.
- **Appendix is physically present** but visually quiet + fully collapsed, so it reads as reference material, not as part of the argument.
- **The management clock is the true ending** of the narrative (what happens next / when we re-decide), not a dead-end into a heavy appendix.

## Order invariants verified

`R6C-24 memo < ceo-full-detail < not-approved < final-management clock < story-end < appendix-separator < B8 < footer`

(checked by `tools/r6v-r2r/verify-tail-full.cjs`)
