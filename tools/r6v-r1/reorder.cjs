// R6V-R1 — reorder ch6 (90 days) to sit after ch5 (Music) and before ch7 (Finance)
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Locate ch6 block: from ch6 opener to just before B8
const ch6Start = html.indexOf('class="r6v-chapter ch-ops" id="ch6"');
// find the <section ...> start tag beginning
const ch6Section = html.lastIndexOf('<section', ch6Start);
const b8Start = html.indexOf('<section id="B8"');
if (ch6Section === -1 || b8Start === -1 || b8Start < ch6Section) {
  console.log('!! boundaries not found', ch6Section, b8Start);
  process.exit(1);
}
const ch6Block = html.slice(ch6Section, b8Start);
console.log('ch6 block length:', ch6Block.length);

// Remove ch6 block from its current position
html = html.slice(0, ch6Section) + html.slice(b8Start);

// Insert ch6 block before ch7 (Finance) opener
const ch7Start = html.indexOf('class="r6v-chapter ch-finance" id="ch7"');
const ch7Section = html.lastIndexOf('<section', ch7Start);
if (ch7Section === -1) { console.log('!! ch7 not found'); process.exit(1); }
html = html.slice(0, ch7Section) + ch6Block + '\n' + html.slice(ch7Section);

fs.writeFileSync(indexPath, html, 'utf8');
console.log('ch6 reordered before ch7. index size:', html.length);
