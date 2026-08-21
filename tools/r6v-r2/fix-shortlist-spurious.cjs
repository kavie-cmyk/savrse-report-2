// R6V-R2 — remove spurious parsed shortlist items (the "?" placeholder) from B2B and B2C
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// The spurious item pattern: <div class="r6v-sl2-item final">\n  <h4>?</h4> ... </div>
const spurPattern = /<div class="r6v-sl2-item final">\s*<h4>\?<\/h4>\s*<p class="r6v-sl2-one"><\/p>\s*<span class="r6v-sl2-status">Vào vòng cuối · #1<\/span>\s*<details class="r6v-sl2-detail"><summary>Chi tiết<\/summary>\s*<div class="r6v-sl2-detail-body"><\/div>\s*<\/details>\s*<\/div>/g;
const matches = html.match(spurPattern);
console.log('spurious items found:', matches ? matches.length : 0);
html = html.replace(spurPattern, '');

// Also fix the numbering: the first real final item should be #1, not #2.
// Re-number all "Vào vòng cuối · #N" within each shortlist landscape sequentially.
// Simplest: renumber per section by counting occurrences.
let inB2B = false;
const lines = html.split('\n');
const out = [];
let finalCounter = 0;
for (const line of lines) {
  if (line.includes('id="R6C-05"')) { inB2B = true; finalCounter = 0; }
  if (line.includes('id="R6C-06"')) { inB2B = false; finalCounter = 0; }
  // renumber in both
  if (line.includes('data-section-id="R6C-05"') || line.includes('data-section-id="R6C-06"')) {
    // reset on section boundary
  }
  const m = line.match(/Vào vòng cuối · #(\d+)/);
  if (m) { finalCounter++; line.replace(/Vào vòng cuối · #\d+/, `Vào vòng cuối · #${finalCounter}`); }
  out.push(line.replace(/Vào vòng cuối · #\d+/, (mm) => {
    // renumber via closure: we already incremented; simpler do inline
    return `Vào vòng cuối · #${finalCounter}`;
  }));
}
html = out.join('\n');

fs.writeFileSync(indexPath, html, 'utf8');
console.log('spurious removed. final item count check:');
const b2b = html.slice(html.indexOf('<section id="R6C-05"'), html.indexOf('<section id="R6C-06"'));
const b2c = html.slice(html.indexOf('<section id="R6C-06"'), html.indexOf('<section id="R6C-07"'));
console.log('B2B final items:', (b2b.match(/r6v-sl2-item final/g) || []).length);
console.log('B2B other items:', (b2b.match(/r6v-sl2-item other/g) || []).length);
console.log('B2C final items:', (b2c.match(/r6v-sl2-item final/g) || []).length);
console.log('B2C other items:', (b2c.match(/r6v-sl2-item other/g) || []).length);
