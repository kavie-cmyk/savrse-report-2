// R6V-R2 — finance hero (defect 10), CEO memo (defect 11), 90-day outcome (defect 09)
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// ============ Finance hero: insert big-number 0 vs 9,167 tỷ before the pnl block ============
const financeHero = `<div class="r6v-fin-hero">
  <div class="r6v-fin-nums">
    <div class="r6v-fin-num"><div class="r6v-fin-v">0</div><div class="r6v-fin-l">Doanh thu ghi nhận · H1/2026</div></div>
    <div class="r6v-fin-vs">vs</div>
    <div class="r6v-fin-num"><div class="r6v-fin-v neg">9,167 tỷ</div><div class="r6v-fin-l">Tổng chi phí BU · H1/2026</div></div>
  </div>
  <p style="font-size:13px;color:var(--ink-500);max-width:760px;margin:0 auto;text-align:center">Số liệu lịch sử của toàn BU trong kỳ. Không nhân đôi theo năm, không chia 6 gọi là chi phí tháng, không chia cho 27 người, không tự phân bổ sang hai hướng khi chưa có dữ liệu xác nhận.</p>
</div>`;

const pnlIdx = html.indexOf('<div class="r6v-pnl">');
if (pnlIdx === -1) { console.log('!! pnl not found'); process.exit(1); }
html = html.slice(0, pnlIdx) + financeHero + '\n' + html.slice(pnlIdx);
console.log('finance hero inserted');

// ============ CEO memo: add memo-styled decisions before the existing R6C-24 table ============
// R6C-24 is the CEO decision section. Insert a board-memo overview before its table.
const memo = `<div class="r6v-memo">
  <div class="r6v-memo-dec">
    <div class="r6v-memo-head"><span class="r6v-memo-num">01</span><span class="r6v-memo-name">Tập trung</span></div>
    <div class="r6v-memo-body">
      <div class="r6v-memo-yes"><h6>Phê duyệt</h6><p>Y tế + Âm nhạc là hai hướng ưu tiên thử ở quy mô nhỏ có kiểm soát.</p></div>
      <div class="r6v-memo-no"><h6>Không phê duyệt</h6><p>Hai chương trình sản phẩm quy mô đầy đủ; mở rộng đồng loạt mọi phương án.</p></div>
    </div>
  </div>
  <div class="r6v-memo-dec">
    <div class="r6v-memo-head"><span class="r6v-memo-num">02</span><span class="r6v-memo-name">Y tế</span></div>
    <div class="r6v-memo-body">
      <div class="r6v-memo-yes"><h6>Phê duyệt</h6><p>Cho phép tìm khách hàng và đối tác chuyên môn thật trước khi xây đáng kể.</p></div>
      <div class="r6v-memo-no"><h6>Không phê duyệt</h6><p>Xây nền tảng y tế rộng; giá bán cụ thể; chọn trước thủ thuật khi chưa đánh giá.</p></div>
    </div>
  </div>
  <div class="r6v-memo-dec">
    <div class="r6v-memo-head"><span class="r6v-memo-num">03</span><span class="r6v-memo-name">Pulse</span></div>
    <div class="r6v-memo-body">
      <div class="r6v-memo-yes"><h6>Phê duyệt</h6><p>Cho Pulse Deflector vào chu kỳ prototype nhỏ có giới hạn.</p></div>
      <div class="r6v-memo-no"><h6>Không phê duyệt</h6><p>Phát triển toàn bộ game; danh mục nhạc lớn; ngân sách quảng cáo lớn.</p></div>
    </div>
  </div>
  <div class="r6v-memo-dec">
    <div class="r6v-memo-head"><span class="r6v-memo-num">04</span><span class="r6v-memo-name">Vốn</span></div>
    <div class="r6v-memo-body">
      <div class="r6v-memo-yes"><h6>Phê duyệt</h6><p>Cấp vốn theo từng gói có phạm vi, câu hỏi cần trả lời, điều kiện tiếp/dừng.</p></div>
      <div class="r6v-memo-no"><h6>Không phê duyệt</h6><p>Ngân sách định lượng lớn chưa có quyết định riêng; tuyển dài hạn tự động.</p></div>
    </div>
  </div>
  <div class="r6v-memo-dec">
    <div class="r6v-memo-head"><span class="r6v-memo-num">05</span><span class="r6v-memo-name">Kỷ luật danh mục</span></div>
    <div class="r6v-memo-body">
      <div class="r6v-memo-yes"><h6>Phê duyệt</h6><p>Giữ Music World tạm dừng; duy trì các hướng khác là lựa chọn có điều kiện.</p></div>
      <div class="r6v-memo-no"><h6>Không phê duyệt</h6><p>Khởi động lại Music World; chạy nhiều sáng kiến song song quy mô đầy đủ.</p></div>
    </div>
  </div>
</div>`;

// Insert memo before the R6C-24 section content (after its header)
const r24 = html.indexOf('<section id="R6C-24"');
const r24HeaderEnd = html.indexOf('</header>', r24);
if (r24 === -1 || r24HeaderEnd === -1) { console.log('!! R6C-24 not found'); process.exit(1); }
html = html.slice(0, r24HeaderEnd + '</header>'.length) + '\n' + memo + html.slice(r24HeaderEnd + '</header>'.length);
console.log('CEO memo inserted');

// ============ 90-day outcome: insert outcome rows before the gantt ============
const outcome = `<div class="r6v-90-outcome">
  <div class="r6v-90-row">
    <span class="r6v-90d">30</span>
    <div><h5>Kế hoạch sẵn sàng chạy</h5><p>Y tế: gói bán + danh sách tổ chức + tiêu chí đối tác + bộ hồ sơ. Âm nhạc: bản thử thô + đo dữ liệu + nhạc an toàn quyền.</p></div>
    <div><h5>CEO biết</h5><p class="r6v-90learn">"Chúng ta biết sẽ bán cái gì và tiếp cận ai."</p></div>
    <div><h5>Mở ra</h5><p>Bắt đầu tiếp cận tổ chức thật / lượt thử có kiểm soát.</p></div>
  </div>
  <div class="r6v-90-row">
    <span class="r6v-90d">60</span>
    <div><h5>Bằng chứng thật</h5><p>Y tế: gặp khách thật, map người mua/ngân sách/mua sắm. Âm nhạc: nhiều lượt thử, chơi lại tự nguyện, so sánh VR.</p></div>
    <div><h5>CEO biết</h5><p class="r6v-90learn">"Có account thực sự đáng theo không? Cơ chế có đủ hay không?"</p></div>
    <div><h5>Mở ra</h5><p>Soạn đề xuất có trả phí / quyết định giữ hay chỉnh prototype.</p></div>
  </div>
  <div class="r6v-90-row">
    <span class="r6v-90d">90</span>
    <div><h5>Quyết định vốn</h5><p>Y tế: cơ hội mạnh nhất tới cam kết trả phí hoặc rào cản chính xác. Âm nhạc: đạt → vertical slice; không đạt → dừng/cất.</p></div>
    <div><h5>CEO quyết</h5><p class="r6v-90learn">Tiếp tục · Thiết kế lại / thu hẹp · Dừng.</p></div>
    <div><h5>Mở ra</h5><p>Gói nguồn lực tiếp theo — chỉ khi bằng chứng tăng.</p></div>
  </div>
</div>`;

const ganttIdx = html.indexOf('class="r6v-gantt"');
const ganttSection = html.lastIndexOf('<div class="r6v-gantt"', ganttIdx);
if (ganttIdx === -1) { console.log('!! gantt not found'); process.exit(1); }
html = html.slice(0, ganttSection) + outcome + '\n' + html.slice(ganttSection);
console.log('90-day outcome inserted');

fs.writeFileSync(indexPath, html, 'utf8');
console.log('R6V-R2 content additions complete. index size:', html.length);
