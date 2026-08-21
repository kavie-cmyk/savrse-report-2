// R6V-R2 — Healthcare chapter hero (defect 07): image-led editorial opening
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const oldCh4 = `<section class="r6v-chapter ch-health" id="ch4" aria-labelledby="ch4-title">
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
</section>`;

const newCh4 = `<section class="r6v-chapter ch-health" id="ch4" aria-labelledby="ch4-title">
  <div class="r6v-chapter-inner r6v-health-open">
    <div class="r6v-health-copy">
      <span class="r6v-chapter-num"><span class="r6v-cn">4</span> Chương 04 · Y tế</span>
      <h2 id="ch4-title">TRƯỚC KHI XÂY LỚN, PHẢI TÌM ĐƯỢC NGƯỜI MUA.</h2>
      <p>SAVA không bắt đầu bằng một nền tảng y tế lớn. SAVA bắt đầu bằng một module mô phỏng cho một quy trình / kỹ năng hẹp, đồng phát triển với khách hàng và đối tác chuyên môn.</p>
      <div class="r6v-chapter-nav">
        <a href="#R6C-12">Business này là gì</a>
        <a href="#R6C-13">Khách hàng #1 → #2</a>
        <a href="#R6C-14">90 ngày thương mại</a>
      </div>
    </div>
    <div class="r6v-health-media">
      <img src="assets/images/P24-12_WEB_EXT_WEB11_Healthcare_Illustration_01_web.webp" alt="Hình minh họa: môi trường đào tạo y khoa có hỗ trợ mô phỏng" loading="lazy">
      <span class="r6v-health-caption">Hình minh họa — không phải khách hàng hay triển khai thực tế của SAVA</span>
    </div>
  </div>
</section>`;

if (html.includes(oldCh4)) {
  html = html.replace(oldCh4, newCh4);
  console.log('ch4 healthcare hero upgraded');
} else {
  console.log('!! ch4 not found');
  process.exit(1);
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log('index size:', html.length);
