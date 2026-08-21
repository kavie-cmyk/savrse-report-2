// R6V — CEO language remediation. Replaces research/AI jargon in the primary layer
// with natural Vietnamese executive wording. Applied to index.html (primary visible text only —
// technical IDs/evidence layer retained).
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Ordered replacements: [old, new]. Applied to visible primary copy.
const replacements = [
  // Healthcare phrasing
  ['Y tế — kiểm chứng thương mại trước.', 'Y tế — trước khi xây lớn, phải tìm được tổ chức thật, người giữ ngân sách thật và một hợp đồng có trả phí.'],
  ['kiểm chứng thương mại trước', 'tìm khách hàng thật và hợp đồng thật trước khi xây lớn'],
  ['Y tế phải được kiểm chứng THƯƠNG MẠI TRƯỚC', 'Y tế phải tìm được người mua thật trước khi xây lớn'],
  ['Nút thắt là rủi ro thương mại / chuyên môn.', 'Điều chưa biết lớn nhất là người mua, đối tác chuyên môn và con đường thương mại.'],
  ['VALIDATED COMMERCIAL-FIRST', 'tìm khách hàng thật trước'],
  // Music phrasing
  ['Âm nhạc phải được kiểm chứng SẢN PHẨM TRƯỚC', 'Âm nhạc phải chứng minh game đủ hay trước khi sản xuất lớn'],
  ['kiểm chứng sản phẩm trước', 'chứng minh game đủ hay trước khi sản xuất lớn'],
  ['VALIDATED PRODUCT-FIRST', 'chứng minh sản phẩm trước'],
  ['Nút thắt là rủi ro sản phẩm / lối chơi.', 'Điều chưa biết lớn nhất là lối chơi có hay, có khác biệt và có đáng chơi lại không.'],
  // wedge discovery
  ['khám phá điểm vào', 'tìm điểm vào đủ cụ thể'],
  ['wedge discovery', 'tìm điểm vào đủ cụ thể'],
  ['khám phá điểm vào (wedge discovery)', 'tìm điểm vào đủ cụ thể'],
  // trigger-based
  ['có điều kiện / dựa theo tín hiệu', 'chỉ mở khi xuất hiện một bài toán khách hàng thật'],
  ['trigger-based option', 'chỉ mở khi có bài toán khách hàng thật'],
  ['lựa chọn có điều kiện', 'chỉ mở khi xuất hiện một bài toán khách hàng thật'],
  // strategic watch
  ['theo dõi / chiến lược', 'theo dõi, chưa mở đội đầu tư riêng'],
  ['strategic watch', 'theo dõi, chưa mở đội đầu tư riêng'],
  ['lựa chọn chiến lược để theo dõi', 'theo dõi, chưa mở đội đầu tư riêng'],
  // validation
  ['validation priority', 'ưu tiên thử trước'],
  ['ưu tiên kiểm chứng', 'ưu tiên thử trước'],
  ['kiểm chứng có giới hạn', 'thử ở quy mô nhỏ có kiểm soát'],
  ['mua thông tin mới', 'học hỏi bằng thử nghiệm có kiểm soát'],
  // thesis
  ['luận điểm kinh doanh', 'hướng kinh doanh'],
  ['luận điểm sản phẩm', 'hướng sản phẩm'],
  ['luận điểm', 'hướng kinh doanh'],
  // proof
  ['bằng chứng thương mại', 'khách hàng trả tiền thật'],
  ['bằng chứng trả phí', 'khách hàng trả tiền thật'],
  ['paid proof', 'khách hàng trả tiền thật'],
  ['commercial proof', 'khách hàng trả tiền thật'],
  // repeatability
  ['repeatability gate', 'phép thử khách hàng thứ hai'],
  ['khả năng bán lặp lại', 'khả năng bán được cho khách hàng thứ hai'],
  // system-first / solo-first
  ['SYSTEM-FIRST', 'lấy hệ thống làm trung tâm'],
  ['SOLO-FIRST', 'chơi một mình là đủ'],
  // evidence ceiling
  ['evidence ceiling', 'giới hạn đúng ý nghĩa của con số'],
  ['trần diễn giải', 'giới hạn đúng ý nghĩa của con số'],
  // unknown state
  ['UNKNOWN state', 'điều chưa biết'],
  ['trạng thái chưa biết', 'điều chưa biết'],
  // WHY-VR
  ['WHY-VR', 'lý do cần VR'],
  ['lý do dùng VR', 'vì sao phải dùng VR'],
];

let count = 0;
for (const [old, neu] of replacements) {
  if (html.includes(old)) {
    html = html.split(old).join(neu);
    count++;
  }
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log('R6V language remediation applied:', count, 'patterns replaced');
