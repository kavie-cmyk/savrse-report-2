// Add citation trigger to the Zero Latency proof card (proof-card variant)
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Find the proof-card occurrence (in r6v-proof block): fact starts with "Zero Latency:"
let searchFrom = html.indexOf('<div class="r6v-proof">');
const marker = 'Zero Latency:';
let idx = -1;
while (true) {
  const found = html.indexOf(marker, searchFrom);
  if (found === -1) break;
  const before = html.slice(Math.max(0, found - 200), found);
  if (before.includes('r6v-proof-fact')) { idx = found; break; }
  searchFrom = found + marker.length;
}
if (idx === -1) { console.log('Zero Latency proof card not found'); process.exit(1); }

const cardStart = html.lastIndexOf('<div class="r6v-proof-card">', idx);
const noshowEnd = html.indexOf('</p>', idx);
const cardEnd = html.indexOf('</div>', noshowEnd + 4);
if (cardStart === -1 || cardEnd === -1) { console.log('card bounds fail', cardStart, cardEnd); process.exit(1); }

const cardContent = html.slice(cardStart, cardEnd);
if (!cardContent.includes('citation-row')) {
  const srcBtn = '<div class="citation-row" style="margin-top:10px"><button type="button" class="citation-trigger" data-source-id="S21">Nguồn S21</button><button type="button" class="citation-trigger" data-source-id="S22">Nguồn S22</button></div>';
  html = html.slice(0, cardEnd) + '\n' + srcBtn + html.slice(cardEnd);
  console.log('Zero Latency proof citation triggers added');
} else {
  console.log('already has citation-row');
}

fs.writeFileSync(indexPath, html, 'utf8');
const triggers = (html.match(/data-source-id="/g) || []).length;
console.log('total data-source-id triggers:', triggers);
