// R6V-R2 — rebuild evidence proof block with flat citation rows (defect 04 + 13)
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Locate the r6v-proof block: from '<div class="r6v-proof">' to its matching close.
const proofStart = html.indexOf('<div class="r6v-proof">');
// The block is a direct child of main; find the closing </div> that matches.
// We'll find it by locating the next section/detail boundary after it.
const afterProof = html.indexOf('</section>', proofStart);
let proofEnd = html.indexOf('</div>', proofStart);
// Better: the proof block ends right before the next <details> or <section>.
const nextDetail = html.indexOf('<details', proofStart);
const nextSection = html.indexOf('<section', proofStart + 10);
let endCandidates = [afterProof, nextDetail, nextSection].filter(x => x > proofStart);
// Find the FIRST occurrence of the closing pattern that balances — but since each
// proof-card is self-contained, the block closes right after the last card's </div>.
// We'll search for the last proof-card close.
const lastCard = html.lastIndexOf('</div>', proofStart + 6000);
proofEnd = lastCard + '</div>'.length;
// But ensure we don't cut into next content
if (nextSection !== -1 && proofEnd > nextSection) proofEnd = nextSection;

const block = html.slice(proofStart, proofEnd);
console.log('existing proof block length:', block.length);

// Build a clean flat evidence block: 8 evidence items, each = proof-card + sibling citation-row.
const evidenceItems = [
  {
    tag: 'Mua sắm / hợp đồng chính thức',
    fact: '2 hồ sơ mua sắm công VR phẫu thuật (SAM.gov, 01/2025)',
    show: 'Có tổ chức đưa thiết bị/ phần mềm đào tạo VR phẫu thuật vào quy trình mua sắm chính thức.',
    noshow: 'Quy mô thị trường, giá trị hợp đồng đã thanh toán, số giấy phép, mức sử dụng hay tỷ lệ gia hạn.',
    srcs: ['S01', 'S02']
  },
  {
    tag: 'Case do nhà cung cấp công bố',
    fact: '"Tới 50%" giảm thời gian lắp đặt / đưa vào vận hành (Emulate3D)',
    show: 'Trường hợp sử dụng có thể tạo giá trị đủ lớn để lặp lại trong một bối cảnh thực tế.',
    noshow: 'ROI chuẩn độc lập; 3 dự án không phải "tỷ lệ tái mua".',
    srcs: ['S05']
  },
  {
    tag: 'Hợp đồng chính thức',
    fact: 'EUR 3.485.539,20 — ORF–Vizrt 2026–2028',
    show: 'Một đài truyền hình có thể ký thỏa thuận nhiều năm cho hệ sinh thái phần mềm/hỗ trợ.',
    noshow: 'ACV phần mềm thuần, doanh thu SAVA có thể đạt, hay quy mô thị trường.',
    srcs: ['S09']
  },
  {
    tag: 'Giá niêm yết chính thức',
    fact: 'GOLF+ ~USD 29,99 · Racket Club USD 24,99 · Synth Riders USD 7,99 / 5 bài',
    show: 'Kiến trúc sản phẩm trả phí và nội dung trả phí tồn tại trong Thể thao, Âm nhạc, Giải đố.',
    noshow: 'Số bản bán, doanh thu, giữ chân, mức sẵn sàng trả tiền cho sản phẩm SAVA.',
    srcs: ['S13', 'S14', 'S15', 'S16']
  },
  {
    tag: 'Bằng chứng học thuật',
    fact: '41 RCT meta-analysis — học ngoại ngữ có hỗ trợ VR',
    show: 'Có bằng chứng hiệu quả học tập trong các bối cảnh được nghiên cứu.',
    noshow: 'Hiệu quả phổ quát, giữ người dùng trả phí, hay VR luôn tốt hơn ứng dụng di động/AI.',
    srcs: ['S24']
  },
  {
    tag: 'Số liệu doanh nghiệp công bố',
    fact: 'Zero Latency: &gt;120 địa điểm · &gt;5 triệu lượt chơi',
    show: 'Mô hình nhà cung cấp/địa điểm và quy mô vận hành tồn tại.',
    noshow: 'Mỗi địa điểm có lãi, thời gian hoàn vốn hay tỷ lệ khách quay lại.',
    srcs: ['S21', 'S22']
  },
  {
    tag: 'Case phản biện / bên thứ ba',
    fact: 'Frisco (Zero Latency) đóng cửa sau ~5 tháng',
    show: 'Vùng khách hàng, vị trí, tiền thuê, mức sử dụng và cạnh tranh địa phương có thể làm kinh tế địa điểm xấu đi.',
    noshow: 'Tỷ lệ thất bại toàn ngành.',
    srcs: ['S26']
  },
  {
    tag: 'Case phản biện / bên thứ ba',
    fact: 'Rec Room: quy mô lớn rồi đóng dịch vụ 30/03/2026',
    show: 'Quy mô người dùng có thể cùng tồn tại với kinh tế không bền vững.',
    noshow: 'Mọi sản phẩm xã hội/UGC đều thất bại.',
    srcs: ['S30']
  }
];

function buildCard(item) {
  const buttons = item.srcs.map(s => `<button type="button" class="citation-trigger" data-source-id="${s}">Nguồn ${s}</button>`).join('');
  return `<div class="r6v-proof-card">
  <span class="r6v-proof-tag">${item.tag}</span>
  <p class="r6v-proof-fact">${item.fact}</p>
  <p class="r6v-proof-show"><strong>Cho thấy:</strong> ${item.show}</p>
  <p class="r6v-proof-noshow"><strong>Chưa chứng minh:</strong> ${item.noshow}</p>
  <div class="citation-row"><span class="citation-label">Nguồn:</span>${buttons}</div>
</div>`;
}

const newBlock = `<div class="r6v-proof">\n  ${evidenceItems.map(buildCard).join('\n  ')}\n</div>`;
html = html.slice(0, proofStart) + newBlock + html.slice(proofEnd);

fs.writeFileSync(indexPath, html, 'utf8');
console.log('evidence block rebuilt. new length:', newBlock.length);
