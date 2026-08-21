// R6V-R2 — fix B2B rank-move wrapper (wrap in proper r6v-rank-move div)
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// The malformed block: '<div class="r6v-rm-col"><h4>Thị trường B2B</h4>...VC — theo dõi / qua đối tác</div></div>'
// It needs to be wrapped: <div class="r6v-rank-move"> ... </div>
const b2bStart = html.indexOf('<div class="r6v-rm-col"><h4>Thị trường B2B</h4><div class="r6v-rm-row"><span class="r6v-rm-rank">1</span>Y tế</div><div class="r6v-rm-row"><span class="r6v-rm-rank">2</span>VC</div>');
const b2bEnd = html.indexOf('VC — theo dõi / qua đối tác</div></div>', b2bStart);
if (b2bStart === -1 || b2bEnd === -1) { console.log('B2B block not found'); process.exit(1); }
const inner = html.slice(b2bStart, b2bEnd + 'VC — theo dõi / qua đối tác</div></div>'.length);
const wrapped = '<div class="r6v-rank-move">\n  ' + inner + '\n</div>';
html = html.slice(0, b2bStart) + wrapped + html.slice(b2bEnd + 'VC — theo dõi / qua đối tác</div></div>'.length);

fs.writeFileSync(indexPath, html, 'utf8');
console.log('B2B rank-move wrapped. rank-move count:', (html.match(/class="r6v-rank-move"/g) || []).length);
