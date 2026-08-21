# R6V-R2R — Text Integrity QA

Checks that all critical Vietnamese strings in the tail are present, correct, and not corrupted. Performed on the file bytes via Node (PowerShell console display is unreliable for UTF-8).

---

## 1. Tail copy — all present & clean

| String | Present |
|--------|:---:|
| `Xem đầy đủ phạm vi phê duyệt` (CEO full-detail summary) | ✓ |
| `CEO KHÔNG ĐƯỢC ĐỀ NGHỊ PHÊ DUYỆT` | ✓ |
| `Phần dưới đây phục vụ kiểm tra nguồn và truy vết chi tiết. Không cần đọc để hiểu quyết định chính.` | ✓ |
| `Tất cả các mục đều đóng sẵn. Mở mục nào cần kiểm tra thì mở mục đó.` | ✓ |
| `PHẦN RA QUYẾT ĐỊNH KẾT THÚC TẠI ĐÂY` | ✓ |
| `PHỤ LỤC · BẰNG CHỨNG & NGUỒN` | ✓ |
| `Sau 90 ngày, mục tiêu không phải có hai sản phẩm hoàn chỉnh` | ✓ |
| `Hôm nay` / `30 ngày` / `60 ngày` / `90 ngày` / `Quyết định vốn` | ✓ |
| `Cấp 1 · Tóm tắt bằng chứng cho CEO` | ✓ |
| `Cấp 2 · Số liệu & nguồn chính` | ✓ |
| `Cấp 3 · Sổ đăng ký nghiên cứu kỹ thuật` | ✓ |
| footer: `Kế hoạch kinh doanh Savrse · Bản dành cho Tổng Giám đốc. Bằng chứng trước, quyết định sau.` | ✓ |

## 2. CEO memo cards (5 decisions) — text extracted & verified

| # | Decision | PHÊ DUYỆT | KHÔNG PHÊ DUYỆT |
|---|----------|-----------|------------------|
| 01 | Tập trung | Y tế + Âm nhạc hai hướng ưu tiên thử quy mô nhỏ có kiểm soát | Hai chương trình sản phẩm quy mô đầy đủ; mở rộng đồng loạt |
| 02 | Y tế | Cho phép tìm khách hàng + đối tác chuyên môn thật trước khi xây đáng kể | Xây nền tảng y tế rộng; giá bán cụ thể; chọn trước thủ thuật |
| 03 | Pulse | Cho Pulse Deflector vào chu kỳ prototype nhỏ có giới hạn | Phát triển toàn bộ game; danh mục nhạc lớn; ngân sách quảng cáo lớn |
| 04 | Vốn | Cấp vốn theo từng gói có phạm vi, câu hỏi, điều kiện tiếp/dừng | Ngân sách định lượng lớn chưa có quyết định riêng; tuyển dài hạn tự động |
| 05 | Kỷ luật danh mục | Giữ Music World tạm dừng; duy trì các hướng khác là lựa chọn có điều kiện | Khởi động lại Music World; chạy nhiều sáng kiến song song |

## 3. CEO KHÔNG ĐƯỢC ĐỀ NGHỊ PHÊ DUYỆT list (5 items)

1. Nền tảng Y tế quy mô lớn / đội Y tế cố định lớn / giá bán Y tế cụ thể.
2. Phát triển toàn bộ Game âm nhạc / giá phát hành cuối / danh mục nhạc bản quyền lớn / ngân sách quảng cáo lớn.
3. Tuyển dụng dài hạn tự động.
4. Khởi động lại Music World.
5. Chọn trước một thủ thuật y khoa cụ thể khi chưa đánh giá khách hàng/chuyên môn.

Plus caveat: "Phê duyệt kế hoạch KHÔNG phải cam kết hai hướng sẽ thành công..."

## 4. Final quote (clock finale)

> "Sau 90 ngày, mục tiêu không phải có hai sản phẩm hoàn chỉnh. Mục tiêu là có đủ bằng chứng thực tế để biết hướng nào xứng đáng nhận thêm vốn, hướng nào cần thiết kế lại, và hướng nào phải dừng."

## 5. Symbols

- `×` (U+00D7) in `.plain-list li::before` CSS: correct code point verified (`content: "×"`, code `d7`). The `Ã—` seen in a11y snapshots is the snapshot tool's display quirk, not file corruption.
- `·` (U+00B7) middle dots: legitimate design separators used throughout (counted separately from mojibake patterns).
- `—` (U+2014) em-dash: 136 occurrences, all legitimate.

**Result: TEXT INTEGRITY PASS**
