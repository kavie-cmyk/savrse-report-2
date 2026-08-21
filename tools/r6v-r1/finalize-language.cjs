// R6V-R1 — CEO language finalization (default-visible layer only)
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Targeted natural-language replacements in the default-visible flow.
// "kiểm chứng" is retained only where it is the clearest business Vietnamese.
const reps = [
  // R6C-11 why H+M
  ['Vì sao hai hướng này, và vì sao chúng được kiểm chứng theo hai cách khác nhau?',
   'Vì sao hai hướng này, và vì sao chúng được triển khai theo hai cách khác nhau?'],
  ['Y TẾ — hướng kinh doanh thị trường đủ mạnh để kiểm chứng thương mại',
   'Y TẾ — thị trường đủ cơ sở để thử, và trước khi xây lớn phải tìm được khách hàng thật'],
  ['ÂM NHẠC — gần nền tảng hiện có, cần kiểm chứng sản phẩm',
   'ÂM NHẠC — gần nền tảng hiện có, nhưng phải chứng minh game đủ hay trước khi sản xuất lớn'],
  ['bằng thử nghiệm có kiểm soát</strong> bằng hai chương trình kiểm chứng nhỏ, khác điểm nghẽn.',
   'bằng thử nghiệm có kiểm soát</strong> ở hai hướng nhỏ, khác điểm nghẽn.'],
  // R6C-17 prototype proof
  ['Mỗi câu hỏi kiểm chứng cần đi kèm:', 'Mỗi câu hỏi cần trả lời cũng đi kèm:'],
  // R6C-22 portfolio
  ['Hai làn kiểm chứng chính, khác nút thắt.', 'Hai hướng chính cần thử trước, khác điểm nghẽn.'],
  // R6C-24 CEO decisions
  ['Chấp nhận Y tế + Âm nhạc là hai làn kiểm chứng chính có giới hạn',
   'Chấp nhận Y tế + Âm nhạc là hai hướng ưu tiên thử ở quy mô nhỏ có kiểm soát'],
  ['Ủy quyền kiểm chứng thương mại/chuyên môn trước khi xây đáng kể',
   'Cho phép tìm khách hàng và đối tác chuyên môn thật trước khi xây đáng kể'],
  ['Đây là quyết định cho phép SAVA kiểm chứng hai hướng kinh doanh bằng hoạt động bán hàng + phát triển sản phẩm có điều kiện dừng rõ.',
   'Đây là quyết định cho phép SAVA thử hai hướng kinh doanh bằng hoạt động bán hàng + phát triển sản phẩm, với điều kiện dừng rõ.'],
  // R6V clock
  ['Hai làn kiểm chứng nhỏ có giới hạn.', 'Hai hướng thử nhỏ có giới hạn.'],
  // R6C-05 / R6C-06 shortlists (kiểm chứng = "kiểm tra được" in these contexts)
  ['phạm vi hẹp và kiểm chứng được hơn.', 'phạm vi hẹp và kiểm tra được dễ hơn.'],
  ['vòng chơi rõ và kiểm chứng nhỏ hơn.', 'vòng chơi rõ và thử nghiệm gọn hơn.'],
];

let count = 0;
for (const [old, neu] of reps) {
  if (html.includes(old)) {
    html = html.replaceAll(old, neu);
    count++;
  }
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log('R6V-R1 language finalization:', count, 'patterns applied');
