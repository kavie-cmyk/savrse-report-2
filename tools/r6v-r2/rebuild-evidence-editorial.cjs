// R6V-R2 — rebuild evidence into editorial types (defect 04)
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Locate the r6v-proof block (rebuild the whole thing)
const proofStart = html.indexOf('<div class="r6v-proof">');
// Find its end: the block is followed by <details> (R6C-08) — find the next details/section
const nextBoundary = html.indexOf('<details', proofStart);
const proofEnd = nextBoundary === -1 ? html.indexOf('</section>', proofStart) : nextBoundary;
if (proofStart === -1 || proofEnd === -1 || proofEnd < proofStart) { console.log('proof bounds fail'); process.exit(1); }

const citeBtn = (s) => `<button type="button" class="citation-trigger" data-source-id="${s}">Nguồn ${s}</button>`;

const evidenceBlock = `<div class="r6v-evidence-editorial">

  <!-- A. Healthcare procurement — institutional module -->
  <div class="r6v-ev-side">
    <span class="r6v-ev-tag">Mua sắm / hợp đồng chính thức</span>
    <h5>Y tế: 2 hồ sơ mua sắm công VR phẫu thuật</h5>
    <p>Hai tổ chức đã đưa loại thiết bị/phần mềm đào tạo VR phẫu thuật vào quy trình mua sắm chính thức (SAM.gov, 01/2025).</p>
    <p class="r6v-ev-show"><strong>Cho thấy:</strong> đường mua sắm tổ chức cho mô phỏng phẫu thuật VR tồn tại.</p>
    <p class="r6v-ev-noshow"><strong>Chưa chứng minh:</strong> quy mô thị trường, giá trị hợp đồng đã thanh toán, số giấy phép, tỷ lệ gia hạn.</p>
    <div class="r6v-ev-cite">${citeBtn('S01')}${citeBtn('S02')}</div>
  </div>

  <!-- B. Broadcast commercial scale — big-number callout -->
  <div class="r6v-ev-big">
    <span class="r6v-ev-num">EUR 3.485.539,20</span>
    <div class="r6v-ev-body">
      <span class="r6v-ev-tag">Hợp đồng chính thức · ORF–Vizrt 2026–2028</span>
      <p>Một đài truyền hình ký thỏa thuận nhiều năm cho hệ sinh thái phần mềm/hỗ trợ.</p>
      <p class="r6v-ev-noshow" style="color:rgba(255,255,255,0.65)"><strong style="color:var(--cyan-300)">Chưa chứng minh:</strong> ACV phần mềm thuần, doanh thu SAVA có thể đạt, hay quy mô thị trường.</p>
      <div class="r6v-ev-cite">${citeBtn('S09')}</div>
    </div>
  </div>

  <!-- C. Virtual Commissioning vendor case — annotation -->
  <div class="r6v-ev-side">
    <span class="r6v-ev-tag">Case do nhà cung cấp công bố</span>
    <h5>Virtual Commissioning: "tới 50%" giảm thời gian lắp đặt / đưa vào vận hành</h5>
    <p>Case ECM Technologies dùng Emulate3D (Rockwell Automation).</p>
    <p class="r6v-ev-show"><strong>Cho thấy:</strong> use case có thể tạo giá trị đủ lớn để lặp lại.</p>
    <p class="r6v-ev-noshow"><strong>Chưa chứng minh:</strong> ROI chuẩn độc lập; 3 dự án không phải "tỷ lệ tái mua".</p>
    <div class="r6v-ev-cite">${citeBtn('S05')}</div>
  </div>

  <!-- D. Paid B2C product architecture — price strip -->
  <div class="r6v-ev-price-strip">
    <span class="r6v-ev-tag">Giá niêm yết chính thức — kiến trúc sản phẩm trả phí tồn tại</span>
    <span class="r6v-ev-price">GOLF+ ~USD 29,99</span>
    <span class="r6v-ev-price">Racket Club USD 24,99</span>
    <span class="r6v-ev-price">Synth Riders USD 7,99 / 5 bài</span>
    <span class="r6v-ev-price">Cubism USD 9,99</span>
    <span class="r6v-ev-price">Puzzling Places ~USD 19,99</span>
    <p style="width:100%;font-size:12.5px;color:var(--ink-500);margin-top:6px"><strong style="color:var(--warn)">Chưa chứng minh:</strong> số bản bán, doanh thu, giữ chân, mức sẵn sàng trả tiền cho sản phẩm SAVA.</p>
    <div class="r6v-ev-cite">${citeBtn('S13')}${citeBtn('S14')}${citeBtn('S15')}${citeBtn('S16')}${citeBtn('S18')}${citeBtn('S19')}</div>
  </div>

  <!-- E. Language academic evidence — side-note -->
  <div class="r6v-ev-side">
    <span class="r6v-ev-tag">Bằng chứng học thuật</span>
    <h5>41 RCT meta-analysis — học ngoại ngữ có hỗ trợ VR</h5>
    <p class="r6v-ev-show"><strong>Cho thấy:</strong> có bằng chứng hiệu quả học tập trong các bối cảnh được nghiên cứu.</p>
    <p class="r6v-ev-noshow"><strong>Chưa chứng minh:</strong> hiệu quả phổ quát, giữ người dùng trả phí, hay VR luôn tốt hơn ứng dụng di động/AI.</p>
    <div class="r6v-ev-cite">${citeBtn('S24')}</div>
  </div>

  <!-- F. LBE evidence vs counter-evidence — side-by-side -->
  <div class="r6v-ev-duo">
    <div class="r6v-ev-side">
      <span class="r6v-ev-tag">Số liệu doanh nghiệp công bố</span>
      <h5>Zero Latency: &gt;120 địa điểm · &gt;5 triệu lượt chơi</h5>
      <p class="r6v-ev-show"><strong>Cho thấy:</strong> mô hình nhà cung cấp/địa điểm và quy mô vận hành tồn tại.</p>
      <p class="r6v-ev-noshow"><strong>Chưa chứng minh:</strong> mỗi địa điểm có lãi, hoàn vốn, tỷ lệ quay lại.</p>
      <div class="r6v-ev-cite">${citeBtn('S21')}${citeBtn('S22')}</div>
    </div>
    <div class="r6v-ev-side">
      <span class="r6v-ev-tag">Case phản biện / bên thứ ba</span>
      <h5>Frisco đóng cửa sau ~5 tháng</h5>
      <p class="r6v-ev-show"><strong>Cho thấy:</strong> vị trí, tiền thuê, mức sử dụng, cạnh tranh địa phương có thể làm kinh tế địa điểm xấu đi.</p>
      <p class="r6v-ev-noshow"><strong>Chưa chứng minh:</strong> tỷ lệ thất bại toàn ngành.</p>
      <div class="r6v-ev-cite">${citeBtn('S26')}</div>
    </div>
  </div>

  <!-- G. Social/UGC counter-evidence — warning insight -->
  <div class="r6v-ev-warn">
    <h5>Rec Room: quy mô lớn rồi đóng dịch vụ 30/03/2026</h5>
    <p>Quy mô người dùng có thể cùng tồn tại với kinh tế không bền vững. Đây là cảnh báo cho mọi hướng xã hội/UGC — quy mô không thay thế kiểm chứng tính kinh tế.</p>
    <p style="font-size:12.5px;color:var(--ink-500);margin-top:4px"><strong style="color:var(--danger)">Chưa chứng minh:</strong> mọi sản phẩm xã hội/UGC đều thất bại.</p>
    <div class="r6v-ev-cite">${citeBtn('S30')}</div>
  </div>

</div>`;

html = html.slice(0, proofStart) + evidenceBlock + html.slice(proofEnd);
fs.writeFileSync(indexPath, html, 'utf8');
console.log('evidence editorial block rebuilt. index size:', html.length);
