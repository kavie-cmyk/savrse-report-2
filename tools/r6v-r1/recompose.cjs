// R6V-R1 — Executive Editorial Recomposition
// Removes duplicate presentation layers, demotes legacy R6C sections that
// duplicate R6V visuals into Level-2 <details>, preserves ALL business content.
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// ---------- 1. REMOVE the legacy R6C-01 double hero ----------
// The R6V cover already carries: Healthcare/Music lanes, H1 financial baseline,
// approval-vs-investment rule. R6C-01 repeated all of it. Remove ONLY the section
// (from its own <section> to its matching </section>), preserving what follows.
function findSectionEnd(html, startIndex) {
  // startIndex points at '<section ...'. Find the matching close by counting depth.
  let depth = 0;
  let i = startIndex;
  while (i < html.length) {
    const open = html.indexOf('<section', i);
    const close = html.indexOf('</section>', i);
    if (close === -1) return -1;
    if (open !== -1 && open < close) { depth++; i = open + 8; }
    else { depth--; if (depth === 0) return close + '</section>'.length; i = close + 10; }
  }
  return -1;
}

const r6c01Start = html.indexOf('<section id="R6C-01"');
if (r6c01Start !== -1) {
  const r6c01End = findSectionEnd(html, r6c01Start);
  if (r6c01End !== -1) {
    html = html.slice(0, r6c01Start) + html.slice(r6c01End);
    console.log('R6C-01 legacy hero removed (', r6c01End - r6c01Start, 'chars)');
  } else {
    console.log('!! could not find R6C-01 end');
  }
}

// ---------- 2. Wrap legacy sections that duplicate R6V visuals in Level-2 <details> ----------
// Map: section id -> expandable summary label. Content preserved 100% inside details.
const demoteMap = [
  ['R6C-02', 'Xem chi tiết: vì sao SAVA phải được đánh giá lại'],
  ['R6C-03', 'Xem chi tiết: hai thị trường, hai logic chi tiền'],
  ['R6C-04', 'Xem chi tiết: chúng ta đã xem rộng đến mức nào'],
  ['R6C-08', 'Xem chi tiết: các bằng chứng làm thay đổi cách nhìn'],
  ['R6C-09', 'Xem chi tiết: xếp hạng thị trường ≠ ưu tiên của SAVA'],
  ['R6C-10', 'Xem chi tiết: SAVA có gì, thiếu gì, chưa được phép suy ra gì'],
  ['R6C-12', 'Xem chi tiết: Y tế — business này là gì'],
  ['R6C-13', 'Xem chi tiết: Y tế — khách hàng #1 → khách hàng #2'],
  ['R6C-14', 'Xem chi tiết: Y tế — 90 ngày kiểm chứng thương mại'],
  ['R6C-16', 'Xem chi tiết: Âm nhạc — từ prototype đến game business'],
  ['R6C-18', 'Xem chi tiết: Âm nhạc — 90 ngày sản phẩm'],
  ['R6C-20', 'Xem chi tiết: kinh tế — hôm nay biết gì, chưa biết gì'],
  ['R6C-21', 'Xem chi tiết: vốn & nguồn lực — cấp theo từng gói'],
  ['R6C-22', 'Xem chi tiết: các cơ hội khác sẽ ra sao'],
  ['R6C-23', 'Xem chi tiết: điều gì có thể làm cho chiến lược này sai'],
  ['R6C-25', 'Xem chi tiết: đồng hồ quản trị 90 ngày'],
];

function wrapSection(html, id, label) {
  const openTag = '<section id="' + id + '"';
  const start = html.indexOf(openTag);
  if (start === -1) { console.log('  !! ' + id + ' not found'); return html; }
  // Find the closing </section> that matches (next one after start)
  const closeMatch = html.indexOf('</section>', start);
  if (closeMatch === -1) { console.log('  !! ' + id + ' no close'); return html; }
  const sectionContent = html.slice(start, closeMatch + '</section>'.length);
  // The section header (first header) becomes the summary title; rest stays inside.
  const details = '<details class="r6v-detail" data-detail-section="' + id + '">\n'
    + '<summary><span class="r6v-detail-label">' + label + '</span><span class="r6v-detail-arrow">+</span></summary>\n'
    + '<div class="r6v-detail-body">\n' + sectionContent + '\n</div>\n</details>';
  html = html.slice(0, start) + details + html.slice(closeMatch + '</section>'.length);
  console.log('  demoted ' + id);
  return html;
}

for (const [id, label] of demoteMap) {
  html = wrapSection(html, id, label);
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log('R6V-R1 recomposition phase 1 complete. size:', html.length);
