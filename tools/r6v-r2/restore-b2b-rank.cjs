// R6V-R2 — restore the B2B SAVA-action rank-move into primary view (after the B2C one)
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// The B2C rank-move block ends with '</div>\n</div>' before the R6C-09 details.
// Insert a B2B rank-move right after the B2C rank-move block.
const b2cBlock = `<div class="r6v-rm-col"><h4>Ưu tiên SAVA</h4><div class="r6v-rm-row sava"><span class="r6v-rm-rank">1</span>Âm nhạc — thử trước</div><div class="r6v-rm-row sava"><span class="r6v-rm-rank">2</span>Giải đố — challenger nhỏ</div><div class="r6v-rm-row sava"><span class="r6v-rm-rank">3</span>Thể thao — tìm điểm vào</div></div>
</div>`;

const b2bBlock = `<div class="r6v-rm-col"><h4>Thị trường B2B</h4><div class="r6v-rm-row"><span class="r6v-rm-rank">1</span>Y tế</div><div class="r6v-rm-row"><span class="r6v-rm-rank">2</span>VC</div><div class="r6v-rm-row"><span class="r6v-rm-rank">3</span>Kho</div></div>
  <span class="r6v-rm-arrow">→</span>
  <div class="r6v-rm-col"><h4>Ưu tiên SAVA · B2B</h4><div class="r6v-rm-row sava"><span class="r6v-rm-rank">1</span>Y tế</div><div class="r6v-rm-row sava"><span class="r6v-rm-rank">2</span>Kho — khi có case thật</div><div class="r6v-rm-row sava"><span class="r6v-rm-rank">3</span>VC — theo dõi / qua đối tác</div></div>
</div>`;

// Insert the B2B block after the B2C rank-move block (before the R6C-09 details)
const insertAt = html.indexOf(b2cBlock);
if (insertAt === -1) { console.log('!! B2C rank block not found'); process.exit(1); }
const insertPos = insertAt + b2cBlock.length;
html = html.slice(0, insertPos) + '\n' + b2bBlock + html.slice(insertPos);

fs.writeFileSync(indexPath, html, 'utf8');
console.log('B2B rank-move restored. index size:', html.length);
