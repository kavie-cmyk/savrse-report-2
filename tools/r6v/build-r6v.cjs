// R6V assembler — wraps R6C content in 8 visual chapters with executive masthead/hero,
// injects SVG diagrams + proof callouts, appends R6V CSS, preserves all content.
const fs = require('fs');
const path = require('path');
const { icon } = require('./r6v-icons.js');

const ROOT = path.resolve(__dirname, '..', '..');
const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// ---------- 1. Masthead (executive cover) ----------
const masthead = `
<a class="skip-link" href="#R6C-01">Bỏ qua điều hướng</a>
<header class="r6v-topbar">
  <div class="r6v-topbar-inner">
    <a class="r6v-brand" href="#R6C-01" aria-label="Về đầu trang"><img src="assets/brand/sava-meta-logo.png" alt="SAVA Meta"></a>
    <div class="r6v-title">
      <span class="r6v-kicker">SAVA META · BU SAVRSE</span>
      <span class="r6v-name">SAVRSE — QUYẾT ĐỊNH CHIẾN LƯỢC</span>
      <span class="r6v-sub">Kế hoạch kinh doanh · Bản dành cho Tổng Giám đốc · 2026–2029</span>
    </div>
  </div>
  <nav class="r6v-navbar" aria-label="Điều hướng chính">
    <div class="r6v-navbar-inner" id="r6v-nav">
      <a href="#R6C-01">TỔNG QUAN</a>
      <a href="#R6C-03">NGHIÊN CỨU</a>
      <a href="#R6C-11">VÌ SAO Y TẾ + MUSIC</a>
      <a href="#R6C-12">Y TẾ B2B</a>
      <a href="#R6C-15">GAME ÂM NHẠC</a>
      <a href="#R6C-25">90 NGÀY</a>
      <a href="#R6C-20">TÀI CHÍNH & NGUỒN LỰC</a>
      <a href="#R6C-24">CEO QUYẾT ĐỊNH</a>
      <a href="#B8">BẰNG CHỨNG</a>
    </div>
    <button id="r6v-nav-toggle" type="button" aria-expanded="false" aria-controls="r6v-nav">Mục lục</button>
  </nav>
</header>
<main>
`;

// ---------- 2. Executive cover hero ----------
const hero = `
<section class="r6v-cover" aria-label="Quyết định chiến lược SAVRSE">
  <div class="r6v-cover-inner">
    <div class="r6v-cover-copy">
      <span class="r6v-cover-eyebrow">${icon('decision', 16)} Quyết định chiến lược SAVRSE</span>
      <h1>SAVRSE ĐÃ NGHIÊN CỨU RỘNG.<br><span class="r6v-accent">BÂY GIỜ CẦN TẬP TRUNG.</span></h1>
      <p class="r6v-cover-lead">90 ngày tới không nhằm xây hai sản phẩm hoàn chỉnh. Mục tiêu là trả lời hai câu hỏi quyết định <strong>trước khi bỏ thêm vốn</strong>.</p>
      <p class="r6v-cover-note">Toàn bộ trang này được xây từ Báo cáo nghiên cứu thị trường (RPT-4R2) và Kế hoạch kinh doanh (BP-4M v1.4). CEO đọc trang này là đủ để ra quyết định — không cần mở thêm tài liệu.</p>
      <a class="r6v-cover-cta" href="#R6C-02">Đọc từ câu hỏi gốc ${icon('arrow', 18)}</a>
    </div>
    <div class="r6v-cover-lanes">
      <div class="r6v-lane hc">
        <span class="r6v-lane-tag">${icon('hospital', 14)} Y TẾ B2B</span>
        <p class="r6v-lane-question">"Có tổ chức nào thực sự ký và trả tiền cho một module đào tạo hẹp không?"</p>
      </div>
      <div class="r6v-lane mu">
        <span class="r6v-lane-tag">${icon('music', 14)} GAME ÂM NHẠC B2C</span>
        <p class="r6v-lane-question">"Game có đủ hay, đủ khác biệt và đủ đáng chơi lại không?"</p>
      </div>
      <div class="r6v-cover-facts">
        <div class="r6v-cover-fact"><span class="r6v-fk">H1/2026 · Doanh thu ghi nhận</span><span class="r6v-fv">0 đồng</span></div>
        <div class="r6v-cover-fact warn"><span class="r6v-fk">H1/2026 · Tổng chi phí BU</span><span class="r6v-fv">9,167 tỷ đồng</span></div>
      </div>
      <div class="r6v-cover-rule">PHÊ DUYỆT 90 NGÀY THỬ NHỎ <span class="r6v-not">≠</span> PHÊ DUYỆT ĐẦU TƯ LỚN</div>
    </div>
  </div>
</section>
`;

// ---------- 3. Chapter openers ----------
const chapter1 = `
<section class="r6v-chapter" id="ch1" aria-labelledby="ch1-title">
  <div class="r6v-chapter-inner">
    <span class="r6v-chapter-num"><span class="r6v-cn">1</span> Chương 01</span>
    <h2 id="ch1-title">TẠI SAO SAVRSE PHẢI QUYẾT ĐỊNH LẠI?</h2>
    <p>Savrse không còn là bài toán "có nên làm VR hay không". Câu hỏi thật: ở đâu có vấn đề, người dùng, người trả tiền và lý do thật để dùng 3D/VR?</p>
    <div class="r6v-chapter-nav">
      <a href="#R6C-02">Câu hỏi gốc</a>
      <a href="#R6C-03">Hai thị trường, hai logic chi tiền</a>
      <a href="#R6C-04">Chúng ta đã xem rộng đến đâu</a>
    </div>
  </div>
</section>
`;
const chapter2 = `
<section class="r6v-chapter" id="ch2" aria-labelledby="ch2-title">
  <div class="r6v-chapter-inner">
    <span class="r6v-chapter-num"><span class="r6v-cn">2</span> Chương 02</span>
    <h2 id="ch2-title">THỊ TRƯỜNG ĐÃ ĐƯỢC SÀNG LỌC NHƯ THẾ NÀO?</h2>
    <p>112 hồ sơ cơ hội → hai phễu B2B/B2G và B2C → danh sách rút gọn → 10 cơ hội cuối cùng → bằng chứng quyết định.</p>
    <div class="r6v-chapter-nav">
      <a href="#R6C-04">Phễu tổng</a>
      <a href="#R6C-05">12 hướng B2B/B2G</a>
      <a href="#R6C-06">11 hướng B2C</a>
      <a href="#R6C-07">10 cơ hội cuối</a>
      <a href="#R6C-08">Bằng chứng quan trọng</a>
    </div>
  </div>
</section>
`;
const chapter3 = `
<section class="r6v-chapter" id="ch3" aria-labelledby="ch3-title">
  <div class="r6v-chapter-inner">
    <span class="r6v-chapter-num"><span class="r6v-cn">3</span> Chương 03</span>
    <h2 id="ch3-title">VÌ SAO CUỐI CÙNG LÀ Y TẾ + ÂM NHẠC?</h2>
    <p>Xếp hạng thị trường khác với ưu tiên của SAVA. Hai hướng được chọn vì chúng kiểm tra hai nút thắt khác nhau.</p>
    <div class="r6v-chapter-nav">
      <a href="#R6C-09">Xếp hạng ≠ ưu tiên</a>
      <a href="#R6C-10">SAVA có gì / thiếu gì</a>
      <a href="#R6C-11">Vì sao Y tế + Âm nhạc</a>
    </div>
  </div>
</section>
`;
const chapter4 = `
<section class="r6v-chapter" id="ch4" aria-labelledby="ch4-title">
  <div class="r6v-chapter-inner">
    <span class="r6v-chapter-num"><span class="r6v-cn">4</span> Chương 04</span>
    <h2 id="ch4-title">Y TẾ — TỪ MỘT VẤN ĐỀ ĐÀO TẠO ĐẾN BUSINESS CÓ THỂ BÁN</h2>
    <p>Trước khi xây lớn, phải tìm được tổ chức thật, người giữ ngân sách thật và một hợp đồng có trả phí.</p>
    <div class="r6v-chapter-nav">
      <a href="#R6C-12">Đây là business gì</a>
      <a href="#R6C-13">Khách hàng #1 → #2</a>
      <a href="#R6C-14">90 ngày thương mại</a>
    </div>
  </div>
</section>
`;
const chapter5 = `
<section class="r6v-chapter" id="ch5" aria-labelledby="ch5-title">
  <div class="r6v-chapter-inner">
    <span class="r6v-chapter-num"><span class="r6v-cn">5</span> Chương 05</span>
    <h2 id="ch5-title">GAME ÂM NHẠC — TỪ CONCEPT ĐẾN SẢN PHẨM THƯƠNG MẠI</h2>
    <p>Trước khi sản xuất lớn, phải chứng minh rằng game đủ hay để người chơi tự muốn chơi lại.</p>
    <div class="r6v-chapter-nav">
      <a href="#R6C-15">Sản phẩm đang thử</a>
      <a href="#R6C-16">Prototype → business</a>
      <a href="#R6C-17">Prototype phải chứng minh gì</a>
      <a href="#R6C-18">90 ngày sản phẩm</a>
      <a href="#R6C-19">Music World tách biệt</a>
    </div>
  </div>
</section>
`;
const chapter6 = `
<section class="r6v-chapter" id="ch6" aria-labelledby="ch6-title">
  <div class="r6v-chapter-inner">
    <span class="r6v-chapter-num"><span class="r6v-cn">6</span> Chương 06</span>
    <h2 id="ch6-title">90 NGÀY ĐẦU — CỤ THỂ AI LÀM GÌ?</h2>
    <p>Hai làn chạy song song có giới hạn: Y tế tạo tiến triển thương mại trên tổ chức thật; Âm nhạc tạo bằng chứng sản phẩm.</p>
    <div class="r6v-chapter-nav">
      <a href="#R6C-14">Y tế 90 ngày</a>
      <a href="#R6C-18">Âm nhạc 90 ngày</a>
      <a href="#R6C-25">Đồng hồ quản trị</a>
    </div>
  </div>
</section>
`;
const chapter7 = `
<section class="r6v-chapter" id="ch7" aria-labelledby="ch7-title">
  <div class="r6v-chapter-inner">
    <span class="r6v-chapter-num"><span class="r6v-cn">7</span> Chương 07</span>
    <h2 id="ch7-title">TIỀN / NGUỒN LỰC / RỦI RO / MỐC QUYẾT ĐỊNH</h2>
    <p>Kinh tế hôm nay biết gì, chưa biết gì; vốn cấp theo gói có bằng chứng; danh mục còn lại giữ giá trị lựa chọn.</p>
    <div class="r6v-chapter-nav">
      <a href="#R6C-20">Kinh tế</a>
      <a href="#R6C-21">Vốn & nguồn lực</a>
      <a href="#R6C-22">Các cơ hội khác</a>
      <a href="#R6C-23">Điều gì có thể sai</a>
    </div>
  </div>
</section>
`;
const chapter8 = `
<section class="r6v-chapter" id="ch8" aria-labelledby="ch8-title">
  <div class="r6v-chapter-inner">
    <span class="r6v-chapter-num"><span class="r6v-cn">8</span> Chương 08</span>
    <h2 id="ch8-title">CEO CẦN PHÊ DUYỆT GÌ?</h2>
    <p>Năm quyết định quản trị — không phải mười bốn dòng rời rạc. Mỗi quyết định có điều được duyệt, điều không được phép.</p>
    <div class="r6v-chapter-nav">
      <a href="#R6C-24">5 quyết định CEO</a>
      <a href="#R6C-25">Đồng hồ quản trị</a>
    </div>
  </div>
</section>
`;

// ---------- 4. Wrong vs right question visual (before R6C-02) ----------
const wrongRight = `
<div class="r6v-wrong-right">
  <div class="r6v-wr wrong">
    <span class="r6v-wr-tag">${icon('cross', 16)} Câu hỏi sai</span>
    <h4>"SAVA đang có VR. Vậy bán VR gì?"</h4>
    <p>Bắt đầu từ sản phẩm mình có, không từ nhu cầu khách hàng.</p>
  </div>
  <div class="r6v-wr right">
    <span class="r6v-wr-tag">${icon('check', 16)} Câu hỏi đúng</span>
    <h4>"Ở đâu có vấn đề thật, người dùng thật, người trả tiền thật và lý do thật để dùng VR / realtime 3D?"</h4>
    <p>Bắt đầu từ thị trường, sau đó mới áp mức phù hợp với SAVA.</p>
  </div>
</div>
<div class="r6v-flow-line"><span class="r6v-pill">ĐÁNH GIÁ THỊ TRƯỜNG TRƯỚC</span> ${icon('arrow', 20)} <span class="r6v-pill later">SAVA SAU</span></div>
`;

// ---------- 5. Two-market split (before R6C-03) ----------
const twoMarket = `
<div class="r6v-two-market">
  <div class="r6v-tm b2b">
    <h3>${icon('buyer', 18)} B2B / B2G — doanh nghiệp mua kết quả</h3>
    <div class="r6v-tm-chain">
      <div class="r6v-tm-step">${icon('question', 16)} Vấn đề của khách hàng</div>
      <div class="r6v-tm-arrow">↓</div>
      <div class="r6v-tm-step">${icon('customer', 16)} Người dùng</div>
      <div class="r6v-tm-arrow">↓</div>
      <div class="r6v-tm-step">${icon('budget', 16)} Ai giữ tiền</div>
      <div class="r6v-tm-arrow">↓</div>
      <div class="r6v-tm-step">${icon('target', 16)} Vì sao họ chi</div>
      <div class="r6v-tm-arrow">↓</div>
      <div class="r6v-tm-step">${icon('contract', 16)} Mua / hợp đồng</div>
      <div class="r6v-tm-arrow">↓</div>
      <div class="r6v-tm-step">${icon('training', 16)} Giao / nghiệm thu</div>
      <div class="r6v-tm-arrow">↓</div>
      <div class="r6v-tm-step">${icon('reuse', 16)} Khách hàng #2</div>
    </div>
  </div>
  <div class="r6v-tm b2c">
    <h3>${icon('vr', 18)} B2C — người chơi trả tiền cho hành động</h3>
    <div class="r6v-tm-chain">
      <div class="r6v-tm-step">${icon('hand', 16)} Người chơi làm gì</div>
      <div class="r6v-tm-arrow">↓</div>
      <div class="r6v-tm-step">${icon('vr', 16)} Tại sao phải VR</div>
      <div class="r6v-tm-arrow">↓</div>
      <div class="r6v-tm-step">${icon('money', 16)} Có trả tiền không</div>
      <div class="r6v-tm-arrow">↓</div>
      <div class="r6v-tm-step">${icon('replay', 16)} Có tự chơi lại không</div>
      <div class="r6v-tm-arrow">↓</div>
      <div class="r6v-tm-step">${icon('doc', 16)} Cần bao nhiêu nội dung</div>
      <div class="r6v-tm-arrow">↓</div>
      <div class="r6v-tm-step">${icon('store', 16)} Bán ở đâu</div>
      <div class="r6v-tm-arrow">↓</div>
      <div class="r6v-tm-step">${icon('scale', 16)} Kinh tế</div>
    </div>
  </div>
</div>
<p style="margin-top:18px;font-weight:800;font-size:17px;color:var(--navy-900);text-align:center">HAI THỊ TRƯỜNG. HAI CÁCH KIẾM TIỀN KHÁC NHAU.</p>
`;

// ---------- 6. Master funnel (before R6C-04) ----------
const masterFunnel = `
<div class="r6v-universe-top">
  <div class="r6v-univ-112"><span class="r6v-big">112</span><p>hồ sơ cơ hội trong cơ sở dữ liệu toàn chương trình</p></div>
  <div class="r6v-univ-split">
    <div class="r6v-univ-part"><span class="r6v-n">96</span><p>có thể so sánh trực tiếp (xếp hạng được)</p></div>
    <div class="r6v-univ-part"><span class="r6v-n">16</span><p>nhóm bao trùm / không xếp hạng</p></div>
  </div>
  <div class="r6v-univ-split">
    <div class="r6v-univ-part"><span class="r6v-n">65</span><p>B2B/B2G đi qua nhánh đánh giá thực thi</p></div>
    <div class="r6v-univ-part"><span class="r6v-n">32</span><p>B2C đi qua nhánh đánh giá thực thi</p></div>
  </div>
</div>
<div class="r6v-funnel">
  <div class="r6v-funnel-col">
    <h3>${icon('buyer', 16)} B2B / B2G</h3>
    <div class="r6v-funnel-shape">
      <div class="r6v-funnel-bar"><span class="r6v-fn">65</span><span class="r6v-fl">được xem xét</span></div>
      <div class="r6v-funnel-bar r6v-funnel-taper"><span class="r6v-fn">12</span><span class="r6v-fl">đủ bằng chứng để giữ</span></div>
      <div class="r6v-funnel-bar r6v-funnel-taper2"><span class="r6v-fn">5</span><span class="r6v-fl">vào vòng cuối</span></div>
      <div class="r6v-funnel-bar r6v-funnel-taper2 final"><span class="r6v-fn">3</span><span class="r6v-fl">phân tích sâu nhất</span></div>
    </div>
  </div>
  <div class="r6v-funnel-col">
    <h3>${icon('vr', 16)} B2C</h3>
    <div class="r6v-funnel-shape">
      <div class="r6v-funnel-bar"><span class="r6v-fn">32</span><span class="r6v-fl">không gian sản phẩm được xem xét</span></div>
      <div class="r6v-funnel-bar r6v-funnel-taper"><span class="r6v-fn">11</span><span class="r6v-fl">đủ tín hiệu để giữ</span></div>
      <div class="r6v-funnel-bar r6v-funnel-taper2"><span class="r6v-fn">5</span><span class="r6v-fl">vào vòng cuối</span></div>
      <div class="r6v-funnel-bar r6v-funnel-taper2 final"><span class="r6v-fn">3</span><span class="r6v-fl">phân tích sâu nhất</span></div>
    </div>
  </div>
</div>
<div class="r6v-funnel-note"><strong>65 + 32 không phải 112.</strong> 112 là cấu trúc lưu trữ của toàn chương trình; 65 và 32 là số đơn vị đi qua hai nhánh so sánh thực thi. Chúng mô tả phạm vi của hai nhánh lọc, không mô tả toàn bộ vũ trụ cơ hội.</div>
`;

// ---------- 7. Rank movement (before R6C-09) ----------
const rankMove = `
<div class="r6v-rank-move">
  <div class="r6v-rm-col"><h4>Thị trường B2B</h4><div class="r6v-rm-row"><span class="r6v-rm-rank">1</span>Y tế</div><div class="r6v-rm-row"><span class="r6v-rm-rank">2</span>Virtual Commissioning</div><div class="r6v-rm-row"><span class="r6v-rm-rank">3</span>Kho</div></div>
  <span class="r6v-rm-arrow">→</span>
  <div class="r6v-rm-col"><h4>Thị trường B2C</h4><div class="r6v-rm-row"><span class="r6v-rm-rank">1</span>Thể thao</div><div class="r6v-rm-row"><span class="r6v-rm-rank">2</span>Âm nhạc</div><div class="r6v-rm-row"><span class="r6v-rm-rank">3</span>Giải đố</div></div>
  <span class="r6v-rm-arrow">→</span>
  <div class="r6v-rm-col"><h4>Ưu tiên SAVA</h4><div class="r6v-rm-row sava"><span class="r6v-rm-rank">1</span>Âm nhạc — thử trước</div><div class="r6v-rm-row sava"><span class="r6v-rm-rank">2</span>Giải đố — challenger nhỏ</div><div class="r6v-rm-row sava"><span class="r6v-rm-rank">3</span>Thể thao — tìm điểm vào</div></div>
</div>
<div class="r6v-rank-move">
  <div class="r6v-rm-col"><h4>Thị trường B2B</h4><div class="r6v-rm-row"><span class="r6v-rm-rank">1</span>Y tế</div><div class="r6v-rm-row"><span class="r6v-rm-rank">2</span>VC</div><div class="r6v-rm-row"><span class="r6v-rm-rank">3</span>Kho</div></div>
  <span class="r6v-rm-arrow">→</span>
  <div class="r6v-rm-col"><h4>Ưu tiên SAVA · B2B</h4><div class="r6v-rm-row sava"><span class="r6v-rm-rank">1</span>Y tế</div><div class="r6v-rm-row sava"><span class="r6v-rm-rank">2</span>Kho — khi có case thật</div><div class="r6v-rm-row sava"><span class="r6v-rm-rank">3</span>VC — theo dõi / qua đối tác</div></div>
</div>
`;

// ---------- 8. Capability bridge (before R6C-10) ----------
const capBridge = `
<div class="r6v-cap-bridge">
  <div class="r6v-cap-col has">
    <h4>SAVA có nền tảng</h4>
    <ul>
      <li>${icon('vr', 14)} Realtime 3D / Unity / VR</li>
      <li>${icon('resource', 14)} Backend / dữ liệu</li>
      <li>${icon('hand', 14)} Phát triển game</li>
      <li>${icon('doc', 14)} Công cụ tạo nội dung</li>
      <li>${icon('reuse', 14)} Multiplayer / đa khu vực</li>
      <li>${icon('music', 14)} Công cụ gần âm nhạc</li>
    </ul>
  </div>
  <span class="r6v-bridge-arrow">${icon('arrow', 26)}</span>
  <div class="r6v-cap-col gap">
    <h4>Nhưng chưa được phép suy ra</h4>
    <ul>
      <li>${icon('cross', 14)} Chuyên môn lâm sàng</li>
      <li>${icon('cross', 14)} PLC / OT công nghiệp</li>
      <li>${icon('cross', 14)} Vật lý thể thao</li>
      <li>${icon('cross', 14)} Chất lượng lối chơi âm nhạc</li>
      <li>${icon('cross', 14)} Tiếp cận người mua</li>
      <li>${icon('cross', 14)} Năng lực trống / quyền tái sử dụng IP</li>
      <li>${icon('cross', 14)} Doanh thu lặp lại</li>
    </ul>
  </div>
</div>
<div class="r6v-cap-bottom">
  <div class="r6v-cap-hard"><span class="r6v-hn">27</span> người / vai trò <span class="r6v-neq">≠</span> 27 FTE rảnh</div>
  <div class="r6v-cap-hard"><span class="r6v-hn">&gt;80</span> nhân sự công ty <span class="r6v-neq">≠</span> nguồn lực Savrse có thể phân bổ</div>
</div>
`;

// ---------- 9. Proof callouts (before R6C-08) ----------
const proofs = `
<div class="r6v-proof">
  <div class="r6v-proof-card"><span class="r6v-proof-tag">Mua sắm / hợp đồng chính thức</span><p class="r6v-proof-fact">2 hồ sơ mua sắm công VR phẫu thuật (SAM.gov, 01/2025)</p><p class="r6v-proof-show"><strong>Cho thấy:</strong> có tổ chức đưa thiết bị/ phần mềm đào tạo VR phẫu thuật vào quy trình mua sắm chính thức.</p><p class="r6v-proof-noshow"><strong>Chưa chứng minh:</strong> quy mô thị trường, giá trị hợp đồng đã thanh toán, số giấy phép, mức sử dụng hay tỷ lệ gia hạn.</p></div>
  <div class="r6v-proof-card"><span class="r6v-proof-tag">Case do nhà cung cấp công bố</span><p class="r6v-proof-fact">"Tới 50%" giảm thời gian lắp đặt / đưa vào vận hành (Emulate3D)</p><p class="r6v-proof-show"><strong>Cho thấy:</strong> trường hợp sử dụng có thể tạo giá trị đủ lớn để lặp lại trong một bối cảnh thực tế.</p><p class="r6v-proof-noshow"><strong>Chưa chứng minh:</strong> ROI chuẩn độc lập; 3 dự án không phải "tỷ lệ tái mua".</p></div>
  <div class="r6v-proof-card"><span class="r6v-proof-tag">Hợp đồng chính thức</span><p class="r6v-proof-fact">EUR 3.485.539,20 — ORF–Vizrt 2026–2028</p><p class="r6v-proof-show"><strong>Cho thấy:</strong> một đài truyền hình có thể ký thỏa thuận nhiều năm cho hệ sinh thái phần mềm/hỗ trợ.</p><p class="r6v-proof-noshow"><strong>Chưa chứng minh:</strong> ACV phần mềm thuần, doanh thu SAVA có thể đạt, hay quy mô thị trường.</p></div>
  <div class="r6v-proof-card"><span class="r6v-proof-tag">Giá niêm yết chính thức</span><p class="r6v-proof-fact">GOLF+ ~USD 29,99 · Racket Club USD 24,99 · Synth Riders USD 7,99 / 5 bài</p><p class="r6v-proof-show"><strong>Cho thấy:</strong> kiến trúc sản phẩm trả phí và nội dung trả phí tồn tại trong Thể thao, Âm nhạc, Giải đố.</p><p class="r6v-proof-noshow"><strong>Chưa chứng minh:</strong> số bản bán, doanh thu, giữ chân, mức sẵn sàng trả tiền cho sản phẩm SAVA.</p></div>
  <div class="r6v-proof-card"><span class="r6v-proof-tag">Bằng chứng học thuật</span><p class="r6v-proof-fact">41 RCT meta-analysis — học ngoại ngữ có hỗ trợ VR</p><p class="r6v-proof-show"><strong>Cho thấy:</strong> có bằng chứng hiệu quả học tập trong các bối cảnh được nghiên cứu.</p><p class="r6v-proof-noshow"><strong>Chưa chứng minh:</strong> hiệu quả phổ quát, giữ người dùng trả phí, hay VR luôn tốt hơn ứng dụng di động/AI.</p></div>
  <div class="r6v-proof-card"><span class="r6v-proof-tag">Số liệu doanh nghiệp công bố</span><p class="r6v-proof-fact">Zero Latency: &gt;120 địa điểm · &gt;5 triệu lượt chơi</p><p class="r6v-proof-show"><strong>Cho thấy:</strong> mô hình nhà cung cấp/địa điểm và quy mô vận hành tồn tại.</p><p class="r6v-proof-noshow"><strong>Chưa chứng minh:</strong> mỗi địa điểm có lãi, thời gian hoàn vốn hay tỷ lệ khách quay lại.</p></div>
  <div class="r6v-proof-card"><span class="r6v-proof-tag">Case phản biện / bên thứ ba</span><p class="r6v-proof-fact">Frisco (Zero Latency) đóng cửa sau ~5 tháng</p><p class="r6v-proof-show"><strong>Cho thấy:</strong> vùng khách hàng, vị trí, tiền thuê, mức sử dụng và cạnh tranh địa phương có thể làm kinh tế địa điểm xấu đi.</p><p class="r6v-proof-noshow"><strong>Chưa chứng minh:</strong> tỷ lệ thất bại toàn ngành.</p></div>
  <div class="r6v-proof-card"><span class="r6v-proof-tag">Case phản biện / bên thứ ba</span><p class="r6v-proof-fact">Rec Room: quy mô lớn rồi đóng dịch vụ 30/03/2026</p><p class="r6v-proof-show"><strong>Cho thấy:</strong> quy mô người dùng có thể cùng tồn tại với kinh tế không bền vững.</p><p class="r6v-proof-noshow"><strong>Chưa chứng minh:</strong> mọi sản phẩm xã hội/UGC đều thất bại.</p></div>
</div>
`;

// ---------- 10. Healthcare visuals (before R6C-12/13/14) ----------
const hcBlueprint = `
<div class="r6v-blueprint">
  <h3 style="font-size:18px;font-weight:800;margin-bottom:18px;color:var(--navy-900)">${icon('hospital', 18)} GÓI ĐẦU TIÊN SAVA THỰC SỰ ĐỊNH BÁN LÀ GÌ?</h3>
  <div class="r6v-blueprint-chain">
    <div class="r6v-bp-step">${icon('training', 20)}<p>MỘT thủ thuật / kỹ năng hẹp</p></div>
    <div class="r6v-bp-arrow">+</div>
    <div class="r6v-bp-step">${icon('target', 20)}<p>Mục tiêu đào tạo rõ</p></div>
    <div class="r6v-bp-arrow">+</div>
    <div class="r6v-bp-step">${icon('vr', 20)}<p>Tương tác VR</p></div>
    <div class="r6v-bp-arrow">+</div>
    <div class="r6v-bp-step">${icon('partner', 20)}<p>Đối tác chuyên môn</p></div>
    <div class="r6v-bp-arrow">+</div>
    <div class="r6v-bp-step">${icon('check', 20)}<p>Tiêu chí nghiệm thu</p></div>
    <div class="r6v-bp-arrow">+</div>
    <div class="r6v-bp-step">${icon('training', 20)}<p>Triển khai + hỗ trợ</p></div>
  </div>
  <div class="r6v-bp-equation">
    <span class="r6v-bp-eq-item">Vấn đề đào tạo có hậu quả</span>
    <span class="r6v-bp-plus">+</span>
    <span class="r6v-bp-eq-item">Người mua tổ chức nhận diện được</span>
    <span class="r6v-bp-plus">+</span>
    <span class="r6v-bp-eq-item">Tín hiệu mua sắm</span>
    <span class="r6v-bp-plus">+</span>
    <span class="r6v-bp-eq-item">Phần lõi dùng lại được</span>
    <span class="r6v-bp-plus">=</span>
    <span class="r6v-bp-eq-item final">GÓI MÔ PHỎNG ĐÀO TẠO CÓ TRẢ PHÍ</span>
  </div>
</div>
`;

const hcBuyers = `
<div class="r6v-buyers">
  <div class="r6v-buyer-center"><span class="r6v-bc">${icon('contract', 18)} MỘT HỢP ĐỒNG ĐƯỢC KÝ</span></div>
  <div class="r6v-buyer-grid">
    <div class="r6v-buyer">${icon('customer', 18)}<h5>Người học / người dùng</h5><p>Dùng sản phẩm</p></div>
    <div class="r6v-buyer">${icon('target', 18)}<h5>Champion nội bộ</h5><p>Thúc đẩy dự án</p></div>
    <div class="r6v-buyer">${icon('doc', 18)}<h5>Phê duyệt chuyên môn</h5><p>Xác nhận nội dung</p></div>
    <div class="r6v-buyer">${icon('budget', 18)}<h5>Người giữ ngân sách</h5><p>Quyết định chi tiền</p></div>
    <div class="r6v-buyer">${icon('contract', 18)}<h5>Procurement</h5><p>Quy trình mua</p></div>
    <div class="r6v-buyer">${icon('eye', 18)}<h5>IT / Bảo mật / Quyền riêng tư</h5><p>Chặn / cho phép</p></div>
    <div class="r6v-buyer">${icon('doc', 18)}<h5>Pháp lý</h5><p>Hợp đồng</p></div>
    <div class="r6v-buyer">${icon('decision', 18)}<h5>Người ký</h5><p>Cam kết cuối</p></div>
  </div>
  <p class="r6v-buyer-msg">NGƯỜI THÍCH SẢN PHẨM KHÔNG NHẤT THIẾT LÀ NGƯỜI TRẢ TIỀN.</p>
</div>
`;

const hcSales = `
<div class="r6v-sales">
  <div class="r6v-sale"><span class="r6v-sn">1</span><h4>Chọn đúng tổ chức</h4><p>Có lý do rõ, phân loại đường tiếp cận.</p></div>
  <div class="r6v-sale"><span class="r6v-sn">2</span><h4>Hiểu vấn đề + người mua</h4><p>Người thúc đẩy, quyết định, ngân sách, mua sắm.</p></div>
  <div class="r6v-sale"><span class="r6v-sn">3</span><h4>Khóa procedure + đối tác + phạm vi</h4><p>Đủ hẹp để xây và nghiệm thu.</p></div>
  <div class="r6v-sale"><span class="r6v-sn">4</span><h4>Gửi đề xuất có trả phí</h4><p>SOW, tiêu chí nghiệm thu, quyền IP.</p></div>
  <div class="r6v-sale"><span class="r6v-sn">5</span><h4>Hợp đồng → triển khai → nghiệm thu → thanh toán</h4><p>Mốc bàn giao + nghiệm thu kích hoạt thanh toán.</p></div>
  <div class="r6v-sale final"><span class="r6v-sn">6</span><h4>Khách hàng #2 / chuẩn hóa</h4><p>Đo phần dùng lại, giảm phần làm lại.</p></div>
</div>
`;

const hcC1c2 = `
<div class="r6v-c1c2">
  <div class="r6v-c1c2-col c1">
    <h4>KHÁCH HÀNG #1</h4>
    <div class="r6v-c1c2-split">
      <div class="r6v-c1c2-item specific"><strong>Riêng theo khách</strong>Thủ thuật · chương trình đào tạo · tài sản 3D · quy tắc chấm · tích hợp LMS · quy trình phê duyệt</div>
      <div class="r6v-c1c2-item reusable"><strong>Lõi dùng lại</strong>Runtime VR · quy trình người dùng/quản trị · khung đánh giá · công cụ kịch bản · pipeline nội dung · báo cáo</div>
    </div>
  </div>
  <span class="r6v-bridge-arrow" style="font-size:28px;font-weight:800;color:var(--cyan-400);text-align:center">${icon('arrow', 26)}</span>
  <div class="r6v-c1c2-col c2">
    <h4>KHÁCH HÀNG #2</h4>
    <p class="r6v-c1c2-q">"Khách hàng thứ hai có mua được mà không phải làm lại gần như từ đầu không?"</p>
    <p style="font-size:13.5px;color:var(--ink-500);margin-top:10px">Đây là phép thử thật của sản phẩm hóa. Không bịa tỷ lệ tái sử dụng — phải đo sau dự án thật.</p>
  </div>
</div>
`;

const hcLadder = `
<div class="r6v-ladder">
  <div class="r6v-ladder-step"><span class="r6v-ln">1</span><div><h4>Dự án có trả phí</h4><p>Kiểm chứng cam kết thương mại thật.</p></div></div>
  <span class="r6v-ladder-arrow">↓</span>
  <div class="r6v-ladder-step"><span class="r6v-ln">2</span><div><h4>Module bán lần hai</h4><p>Khách #2 mua cấu trúc lõi gần giống; mức dùng chung tăng, phần làm lại giảm.</p></div></div>
  <span class="r6v-ladder-arrow">↓</span>
  <div class="r6v-ladder-step"><span class="r6v-ln">3</span><div><h4>Giải pháp chuẩn hóa</h4><p>Triển khai dự báo được; tỷ lệ tái sử dụng đo được; kinh tế tốt hơn.</p></div></div>
  <span class="r6v-ladder-arrow">↓</span>
  <div class="r6v-ladder-step top"><span class="r6v-ln">4</span><div><h4>Mới xem xét mở rộng</h4><p>Chỉ khi tùy chỉnh không tăng tuyến tính theo doanh thu.</p></div></div>
</div>
`;

const hcMoney = `
<div class="r6v-money">
  <div class="r6v-money-col">
    <h4>${icon('money', 18)} TIỀN VÀO</h4>
    <div class="r6v-mt">
      <span class="r6v-money-chip in">Đồng phát triển có trả phí</span><span class="r6v-money-arrow">+</span>
      <span class="r6v-money-chip in">Triển khai / cấu hình</span><span class="r6v-money-arrow">+</span>
      <span class="r6v-money-chip in">Mốc bàn giao theo hợp đồng</span>
    </div>
    <p style="font-size:12.5px;color:var(--ink-500);margin-top:10px">Phí module / quyền sử dụng / hỗ trợ: chỉ sau khi lặp lại được chứng minh — chưa phải doanh thu cam kết.</p>
  </div>
  <div class="r6v-money-col">
    <h4>${icon('resource', 18)} TIỀN RA</h4>
    <div class="r6v-mt">
      <span class="r6v-money-chip out">Bán hàng</span><span class="r6v-money-chip out">Thiết kế giải pháp</span><span class="r6v-money-chip out">Kỹ thuật</span><span class="r6v-money-chip out">Đối tác</span><span class="r6v-money-chip out">3D / nội dung</span><span class="r6v-money-chip out">Triển khai</span><span class="r6v-money-chip out">Hỗ trợ</span>
    </div>
    <p style="font-size:12.5px;color:var(--ink-500);margin-top:10px">Chi phí dùng chung chỉ phân bổ theo chính sách có căn cứ — không chia tùy ý.</p>
  </div>
</div>
<div class="r6v-money-learn"><strong>Cần học từ dữ liệu thật:</strong> đóng góp sau chi phí trực tiếp · tỷ lệ tái sử dụng · thời gian hoàn vốn · chu kỳ bán · thời điểm thu–chi tiền. Không dự báo giả.</div>
`;

// ---------- 11. Music visuals (before R6C-15/16/17/18) ----------
const musicLoop = `
<div class="r6v-blueprint" style="margin-top:18px">
  <h3 style="font-size:18px;font-weight:800;margin-bottom:18px;color:var(--navy-900)">${icon('hand', 18)} VÒNG CHƠI CỦA NGƯỜI CHƠI</h3>
  <div class="r6v-blueprint-chain">
    <div class="r6v-bp-step">${icon('eye', 20)}<p>Xung lao tới</p></div>
    <div class="r6v-bp-arrow">→</div>
    <div class="r6v-bp-step">${icon('hand', 20)}<p>Đỡ</p></div>
    <div class="r6v-bp-arrow">→</div>
    <div class="r6v-bp-step">${icon('target', 20)}<p>Bẻ hướng</p></div>
    <div class="r6v-bp-arrow">→</div>
    <div class="r6v-bp-step">${icon('decision', 20)}<p>Chọn mục tiêu</p></div>
    <div class="r6v-bp-arrow">→</div>
    <div class="r6v-bp-step">${icon('replay', 20)}<p>Né / đổi vị trí</p></div>
    <div class="r6v-bp-arrow">→</div>
    <div class="r6v-bp-step">${icon('scale', 20)}<p>Nối chuỗi ↺</p></div>
  </div>
</div>
`;

const musicRoadmap = `
<div class="r6v-blueprint" style="margin-top:18px">
  <h3 style="font-size:18px;font-weight:800;margin-bottom:18px;color:var(--navy-900)">${icon('timeline', 18)} TỪ Ý TƯỞNG ĐẾN SẢN PHẨM THƯƠNG MẠI</h3>
  <div class="r6v-blueprint-chain">
    <div class="r6v-bp-step"><p>Ý tưởng</p></div>
    <div class="r6v-bp-arrow">→</div>
    <div class="r6v-bp-step"><p>Tương tác cốt lõi</p></div>
    <div class="r6v-bp-arrow">→</div>
    <div class="r6v-bp-step"><p>Bản chơi thử</p></div>
    <div class="r6v-bp-arrow">→</div>
    <div class="r6v-bp-step"><p>Bản mẫu gần chất lượng thật</p></div>
    <div class="r6v-bp-arrow">→</div>
    <div class="r6v-bp-step"><p>Bản thương mại</p></div>
    <div class="r6v-bp-arrow">→</div>
    <div class="r6v-bp-step"><p>Cửa hàng</p></div>
    <div class="r6v-bp-arrow">→</div>
    <div class="r6v-bp-step"><p>Thử bán</p></div>
    <div class="r6v-bp-arrow">→</div>
    <div class="r6v-bp-step"><p>Phát hành</p></div>
    <div class="r6v-bp-arrow">→</div>
    <div class="r6v-bp-step"><p>Vận hành</p></div>
  </div>
  <p style="font-size:13.5px;color:var(--ink-500);margin-top:14px">Mỗi giai đoạn chỉ mở khi câu hỏi của giai đoạn trước đã được trả lời đủ tốt: "Cơ chế có vui không? · Người chơi có quay lại không? · Nội dung có làm nổi không? · Có ai trả tiền không? · Kinh tế có đứng được không?"</p>
</div>
`;

const musicPrice = `
<div class="price-block" style="margin-top:18px">
  <h4>${icon('money', 16)} DẢI GIÁ THỬ NGHIỆM</h4>
  <div class="price-points"><span>USD 19,99</span><span>USD 24,99</span><span>USD 29,99</span></div>
  <p class="price-note">MỨC DÙNG ĐỂ THỬ — KHÔNG PHẢI GIÁ ĐÃ CHỐT.</p>
  <p style="margin-top:10px">So sánh tham chiếu: Puzzling Places ~USD 19,99 · Racket Club USD 24,99 · GOLF+ ~USD 29,99 — chứng minh kiến trúc trả phí tồn tại, KHÔNG suy ra nhu cầu của sản phẩm SAVA.</p>
</div>
`;

const musicRights = `
<div class="rights-block" style="margin-top:18px">
  <h4>${icon('music', 16)} NỘI DUNG / QUYỀN ÂM NHẠC</h4>
  <p>Chơi lại nên đến chủ yếu từ <strong>hệ thống + kỹ năng + làm chủ</strong>, không từ việc liên tục có bài hát mới.</p>
  <p style="margin-top:10px">Nếu người chơi chỉ quay lại khi có danh mục mới → business trở thành gánh nặng nội dung. Giai đoạn đầu: dùng nhạc an toàn quyền. Không mua danh mục lớn trước khi chứng minh được lối chơi.</p>
</div>
`;

// ---------- 12. Finance / capital / portfolio / risk / decision visuals ----------
const pnlContrast = `
<div class="r6v-pnl">
  <div class="r6v-pnl-col fake">
    <h4>GIẢ LẬP ĐẸP</h4>
    <ul>
      <li>${icon('cross', 14)} CAC giả</li>
      <li>${icon('cross', 14)} Tỷ lệ chuyển đổi giả</li>
      <li>${icon('cross', 14)} Nhân sự giả</li>
      <li>${icon('cross', 14)} Sẵn sàng trả tiền giả</li>
    </ul>
    <p class="r6v-pnl-result">→ Bảng tính đẹp → Quyết định sai</p>
  </div>
  <div class="r6v-pnl-col real">
    <h4>CÁCH SAVA LÀM</h4>
    <ul>
      <li>${icon('check', 14)} Người mua thật</li>
      <li>${icon('check', 14)} Đề xuất thật</li>
      <li>${icon('check', 14)} Bản thử thật</li>
      <li>${icon('check', 14)} Giao dịch thật</li>
      <li>${icon('check', 14)} Chi phí thật</li>
    </ul>
    <p class="r6v-pnl-result">→ Mô hình thật → Quyết định vốn tốt hơn</p>
  </div>
</div>
<p style="margin-top:18px;font-weight:800;font-size:17px;color:var(--navy-900);text-align:center">KHÔNG CÓ P&L GIẢ KHÔNG CÓ NGHĨA LÀ KHÔNG QUẢN TRỊ TÀI CHÍNH.</p>
`;

const capitalStair = `
<div class="r6v-capital">
  <div class="r6v-capital-step">${icon('money', 18)}<div><h4>Gói nhỏ</h4><p>Có phạm vi, người chịu trách nhiệm, câu hỏi cần trả lời.</p></div></div>
  <span class="r6v-capital-arrow">↓</span>
  <div class="r6v-capital-step">${icon('eye', 18)}<div><h4>Bằng chứng</h4><p>Tạo dữ liệu thật từ khách hàng / bản thử.</p></div></div>
  <span class="r6v-capital-arrow">↓</span>
  <div class="r6v-capital-step">${icon('decision', 18)}<div><h4>Rà soát</h4><p>Ban điều hành xem luận điểm mạnh lên hay yếu đi.</p></div></div>
  <span class="r6v-capital-arrow">↓</span>
  <div class="r6v-capital-step">${icon('scale', 18)}<div><h4>Gói tiếp theo</h4><p>Chỉ mở khi bằng chứng tăng. Không tự động gia hạn.</p></div></div>
  <span class="r6v-capital-arrow">↓</span>
  <div class="r6v-capital-step">${icon('money', 18)}<div><h4>Mới tăng cam kết</h4><p>Chỉ khi con đường đóng góp dương + năng lực triển khai hợp lý.</p></div></div>
</div>
`;

const portfolioMap = `
<div class="r6v-portfolio">
  <div class="r6v-port priority"><span class="r6v-pz">Làm ngay để học</span><h4>Y tế · Âm nhạc</h4><p>Hai làn kiểm chứng chính, khác nút thắt.</p></div>
  <div class="r6v-port conditional"><span class="r6v-pz">Mở khi có case thật</span><h4>Kho</h4><p>Bài toán kho thật + dữ liệu đại diện + người mua.</p></div>
  <div class="r6v-port challenger"><span class="r6v-pz">Giữ challenger</span><h4>Giải đố</h4><p>Chỉ mở khi giá trị VR + chơi lại sau khi giải vượt kiểm thử.</p></div>
  <div class="r6v-port"><span class="r6v-pz">Tìm điểm vào</span><h4>Thể thao</h4><p>Chưa chọn môn/điểm vào đủ cụ thể.</p></div>
  <div class="r6v-port hold"><span class="r6v-pz">Theo dõi / qua đối tác</span><h4>VC · Broadcast · Construction · Ngoại ngữ · LBE</h4><p>Giữ giá trị lựa chọn; mở lại theo điều kiện riêng.</p></div>
  <div class="r6v-port pause"><span class="r6v-pz">Tạm dừng</span><h4>Music World</h4><p>Chỉ tài sản tham chiếu; không khởi động lại tự động.</p></div>
</div>
`;

const riskMap = `
<div class="r6v-risk">
  <div class="r6v-risk-col">
    <h4>${icon('hospital', 16)} Y TẾ CÓ THỂ THẤT BẠI VÌ</h4>
    <div class="r6v-risk-item">${icon('risk', 14)}<div><strong>Không có người giữ ngân sách thật</strong><p class="r6v-act">Hành động: chỉnh chân dung khách hàng, không xây rộng hơn để "tạo nhu cầu".</p></div></div>
    <div class="r6v-risk-item">${icon('risk', 14)}<div><strong>Phụ thuộc chuyên môn</strong><p class="r6v-act">Hành động: thu hẹp use case hoặc mô hình phụ thuộc đối tác rõ hơn.</p></div></div>
    <div class="r6v-risk-item">${icon('risk', 14)}<div><strong>Bẫy dự án tùy chỉnh</strong><p class="r6v-act">Hành động: định giá phần tùy chỉnh đúng, thu hẹp module.</p></div></div>
    <div class="r6v-risk-item">${icon('risk', 14)}<div><strong>Mua sắm / bảo mật / dữ liệu chậm</strong><p class="r6v-act">Hành động: map yêu cầu sớm trước đề xuất.</p></div></div>
    <div class="r6v-risk-item">${icon('risk', 14)}<div><strong>Kinh tế kém / khách #2 không tái sử dụng</strong><p class="r6v-act">Hành động: giảm tùy chỉnh, điều chỉnh giá, đổi mô hình đối tác hoặc dừng.</p></div></div>
  </div>
  <div class="r6v-risk-col">
    <h4>${icon('music', 16)} ÂM NHẠC CÓ THỂ THẤT BẠI VÌ</h4>
    <div class="r6v-risk-item">${icon('risk', 14)}<div><strong>Hành động cốt lõi yếu / bị coi là bản sao</strong><p class="r6v-act">Hành động: một vòng thiết kế lại tập trung; nếu vẫn vậy thì cất/dừng.</p></div></div>
    <div class="r6v-risk-item">${icon('risk', 14)}<div><strong>Theo dõi / thời điểm thiếu tin cậy</strong><p class="r6v-act">Hành động: ưu tiên đo và sửa kỹ thuật trước khi tăng nội dung.</p></div></div>
    <div class="r6v-risk-item">${icon('risk', 14)}<div><strong>Chơi lại phụ thuộc bài hát mới</strong><p class="r6v-act">Hành động: xem lại luận điểm hệ thống và hiệu quả nội dung.</p></div></div>
    <div class="r6v-risk-item">${icon('risk', 14)}<div><strong>Quy trình nội dung thành dây chuyền thủ công</strong><p class="r6v-act">Hành động: đo công sức; không mở rộng khi chưa có bài toán kinh tế mới.</p></div></div>
    <div class="r6v-risk-item">${icon('risk', 14)}<div><strong>WTP / phân phối / quyền nhạc không đứng vững</strong><p class="r6v-act">Hành động: thử định vị, giá, tuyến phát hành; không tăng chi thương mại.</p></div></div>
  </div>
</div>
`;

const sharedRisk = `
<div class="r6v-risk-col" style="grid-column:1/-1;background:var(--navy-900);color:#fff;border-color:var(--navy-900)">
  <h4 style="color:var(--cyan-300)">${icon('resource', 16)} DANH MỤC CÓ THỂ THẤT BẠI VÌ</h4>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px">
    <div style="background:rgba(255,255,255,0.08);border-radius:12px;padding:14px"><strong>Năng lực không đủ</strong><p style="font-size:12.5px;opacity:.85">27 ≠ FTE; &gt;80 ≠ phân bổ.</p></div>
    <div style="background:rgba(255,255,255,0.08);border-radius:12px;padding:14px"><strong>Quá nhiều thử nghiệm song song</strong><p style="font-size:12.5px;opacity:.85">Phân mảnh nguồn lực.</p></div>
    <div style="background:rgba(255,255,255,0.08);border-radius:12px;padding:14px"><strong>Không có quyết định dừng cứng</strong><p style="font-size:12.5px;opacity:.85">Kéo dài luận điểm khi bằng chứng không tăng.</p></div>
    <div style="background:rgba(255,255,255,0.08);border-radius:12px;padding:14px"><strong>Thiên kiến sunk cost</strong><p style="font-size:12.5px;opacity:.85">Giữ vì đã tiêu tiền.</p></div>
  </div>
</div>
`;

const gantt90 = `
<div class="r6v-gantt">
  <table>
    <thead><tr><th>Làn</th><th>Bây giờ</th><th>0–30 ngày</th><th>31–60 ngày</th><th>61–90 ngày</th></tr></thead>
    <tbody>
      <tr><td class="r6v-lane">Y TẾ</td><td><div class="r6v-bar hc">Khởi động hệ thống bán hàng tối thiểu</div></td><td><div class="r6v-bar hc">Khóa gói · danh sách tổ chức · đối tác · bộ hồ sơ</div></td><td><div class="r6v-bar hc">Gặp khách thật · map người mua/ngân sách/mua sắm · đề xuất khi đủ điều kiện</div></td><td><div class="r6v-bar hc">Tập trung cơ hội mạnh nhất · tiến tới cam kết trả phí hoặc xác định rào cản</div></td></tr>
      <tr><td class="r6v-lane">ÂM NHẠC</td><td><div class="r6v-bar mu">Khởi động bản thử Pulse</div></td><td><div class="r6v-bar mu">Khóa 3 ý tưởng · bản thử thô · đo dữ liệu/nhạc an toàn</div></td><td><div class="r6v-bar mu">Nhiều lượt thử có kiểm soát · chỉnh đỡ/bẻ hướng · chơi lại tự nguyện · so sánh VR</div></td><td><div class="r6v-bar mu">Tổng hợp bằng chứng · đạt → vertical slice; không đạt → dừng/cất</div></td></tr>
      <tr><td class="r6v-lane">DÙNG CHUNG</td><td><div class="r6v-bar sh">Xác nhận năng lực thực tế</div></td><td><div class="r6v-bar sh">Mẫu gói nguồn lực · nhịp họp tuần · danh sách dữ liệu thiếu</div></td><td><div class="r6v-bar sh">Tài chính thay biến chưa biết bằng số thật · xử lý xung đột nguồn lực</div></td><td><div class="r6v-bar sh">Quyết định ngày 90: tiếp tục / thiết kế lại / thu hẹp / dừng</div></td></tr>
    </tbody>
  </table>
  <p style="margin-top:16px;font-weight:800;text-align:center">NGÀY 90: TIẾP TỤC · THIẾT KẾ LẠI / THU HẸP · DỪNG</p>
</div>
`;

const clockFinal = `
<div class="r6v-clock">
  <div class="r6v-clock-step"><span class="r6v-ct">Hôm nay</span><h4>Phê duyệt học hỏi</h4><p>Hai làn kiểm chứng nhỏ có giới hạn.</p></div>
  <div class="r6v-clock-step"><span class="r6v-ct">30 ngày</span><h4>Hệ thống chạy</h4><p>Y tế: gói + CRM + tổ chức. Âm nhạc: bản thử thô + đo dữ liệu.</p></div>
  <div class="r6v-clock-step"><span class="r6v-ct">60 ngày</span><h4>Tiến triển thật</h4><p>Y tế: gặp khách, map người mua. Âm nhạc: lượt thử có kiểm soát.</p></div>
  <div class="r6v-clock-step"><span class="r6v-ct">90 ngày</span><h4>Bằng chứng</h4><p>Y tế: cam kết trả phí / rào cản. Âm nhạc: đạt → vertical slice / dừng.</p></div>
  <div class="r6v-clock-step"><span class="r6v-ct">Quyết định vốn</span><h4>Gói tiếp theo</h4><p>Chỉ mở khi bằng chứng tăng.</p></div>
</div>
<div class="r6v-clock-final">"Sau 90 ngày, mục tiêu không phải có hai sản phẩm hoàn chỉnh. Mục tiêu là có đủ bằng chứng thật để biết hướng nào xứng đáng nhận thêm vốn, hướng nào phải thiết kế lại và hướng nào phải dừng."</div>
`;

// ---------- 13. Assemble ----------
// Replace masthead block (skip-link through <main>)
html = html.replace(/<a class="skip-link"[\s\S]*?<main>\s*\n/, masthead + hero + '\n');

// Insert wrong-right before R6C-02
html = html.replace(/(<section id="R6C-02")/, wrongRight + '\n\n$1');
// Insert two-market before R6C-03
html = html.replace(/(<section id="R6C-03")/, twoMarket + '\n\n$1');
// Insert master funnel before R6C-04
html = html.replace(/(<section id="R6C-04")/, masterFunnel + '\n\n$1');
// Insert proofs before R6C-08
html = html.replace(/(<section id="R6C-08")/, proofs + '\n\n$1');
// Insert rank movement before R6C-09
html = html.replace(/(<section id="R6C-09")/, rankMove + '\n\n$1');
// Insert cap bridge before R6C-10
html = html.replace(/(<section id="R6C-10")/, capBridge + '\n\n$1');
// Insert chapter openers before their first section
html = html.replace(/(<section id="R6C-02")/, chapter1 + '\n\n$1');
html = html.replace(/(<section id="R6C-04")/, chapter2 + '\n\n$1');
html = html.replace(/(<section id="R6C-09")/, chapter3 + '\n\n$1');
html = html.replace(/(<section id="R6C-12")/, chapter4 + '\n\n$1');
html = html.replace(/(<section id="R6C-15")/, chapter5 + '\n\n$1');
html = html.replace(/(<section id="R6C-25")/, chapter6 + '\n\n$1');
html = html.replace(/(<section id="R6C-20")/, chapter7 + '\n\n$1');
html = html.replace(/(<section id="R6C-24")/, chapter8 + '\n\n$1');
// Healthcare visuals
html = html.replace(/(<section id="R6C-12")/, hcBlueprint + '\n\n$1');
html = html.replace(/(<section id="R6C-13")/, hcC1c2 + '\n\n' + hcLadder + '\n\n$1');
html = html.replace(/(<section id="R6C-14")/, hcSales + '\n\n' + hcMoney + '\n\n$1');
// Healthcare buyer committee inside R6C-12 after offer block
html = html.replace(/(<section id="R6C-13")/, hcBuyers + '\n\n$1');
// Music visuals
html = html.replace(/(<section id="R6C-15")/, musicLoop + '\n\n$1');
html = html.replace(/(<section id="R6C-16")/, musicRoadmap + '\n\n$1');
html = html.replace(/(<section id="R6C-18")/, musicPrice + '\n\n' + musicRights + '\n\n$1');
// Finance / capital / portfolio / risk / decision
html = html.replace(/(<section id="R6C-20")/, pnlContrast + '\n\n$1');
html = html.replace(/(<section id="R6C-21")/, capitalStair + '\n\n$1');
html = html.replace(/(<section id="R6C-22")/, portfolioMap + '\n\n$1');
html = html.replace(/(<section id="R6C-23")/, riskMap + '\n\n' + sharedRisk + '\n\n$1');
html = html.replace(/(<section id="R6C-25")/, gantt90 + '\n\n' + clockFinal + '\n\n$1');

// Append R6V CSS to styles.css
const css = fs.readFileSync(path.join(__dirname, 'r6v-visual.css'), 'utf8');
fs.appendFileSync(path.join(ROOT, 'styles.css'), '\n' + css);

fs.writeFileSync(indexPath, html, 'utf8');
console.log('R6V assembled. index.html:', html.length, 'bytes');
