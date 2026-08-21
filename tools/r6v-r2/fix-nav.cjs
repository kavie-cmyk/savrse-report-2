// R6V-R2 — simplify navigation to 8 items pointing to visible chapter openers (defect 12)
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const oldNav = `<div class="r6v-navbar-inner" id="r6v-nav">
      <a href="#top">TỔNG QUAN</a>
      <a href="#R6C-03">NGHIÊN CỨU</a>
      <a href="#R6C-11">VÌ SAO Y TẾ + MUSIC</a>
      <a href="#R6C-12">Y TẾ B2B</a>
      <a href="#R6C-15">GAME ÂM NHẠC</a>
      <a href="#R6C-25">90 NGÀY</a>
      <a href="#R6C-20">TÀI CHÍNH & NGUỒN LỰC</a>
      <a href="#R6C-24">CEO QUYẾT ĐỊNH</a>
      <a href="#B8">BẰNG CHỨNG</a>
    </div>`;

const newNav = `<div class="r6v-navbar-inner" id="r6v-nav">
      <a href="#top">TỔNG QUAN</a>
      <a href="#ch1">NGHIÊN CỨU</a>
      <a href="#ch3">VÌ SAO 2 HƯỚNG</a>
      <a href="#ch4">Y TẾ</a>
      <a href="#ch5">GAME ÂM NHẠC</a>
      <a href="#ch6">90 NGÀY</a>
      <a href="#ch7">TÀI CHÍNH</a>
      <a href="#ch8">CEO QUYẾT ĐỊNH</a>
    </div>`;

if (html.includes(oldNav)) {
  html = html.replace(oldNav, newNav);
  console.log('nav updated to 8 items');
} else {
  console.log('!! old nav not found — checking current');
  const n = html.indexOf('class="r6v-navbar-inner"');
  const ne = html.indexOf('</div>', n);
  console.log(html.slice(n, ne + 6));
  process.exit(1);
}

// Evidence nav access: add a small utility link in the footer area / B8 already reachable via footer link.
fs.writeFileSync(indexPath, html, 'utf8');
console.log('index size:', html.length);
