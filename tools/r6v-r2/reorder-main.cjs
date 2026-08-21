// R6V-R2 — reorder main children so each chapter opener precedes its content (defect 05)
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Find <main> and </main>
const mainStart = html.indexOf('<main>');
const mainEnd = html.indexOf('</main>');
if (mainStart === -1 || mainEnd === -1) { console.log('main not found'); process.exit(1); }
const beforeMain = html.slice(0, mainStart + '<main>'.length);
const afterMain = html.slice(mainEnd);
const mainContent = html.slice(mainStart + '<main>'.length, mainEnd);

// Split main into top-level blocks (section/div/details are top-level children)
// We find each top-level element start by scanning for '<section ', '<div class=', '<details ', '<div id='
const blocks = [];
let pos = 0;
const re = /<(section|div|details)\b[^>]*>/g;
let m;
while ((m = re.exec(mainContent))) {
  const tag = m[1];
  const start = m.index;
  // Find the matching close for this element (top-level: count depth of same tag)
  let depth = 0;
  let i = start;
  const openRe = new RegExp('<' + tag + '\\b', 'g');
  const closeTag = '</' + tag + '>';
  let nextOpen = -1, nextClose = -1;
  // Simpler: find the element's end by scanning for its close tag at depth 0
  while (i < mainContent.length) {
    const o = mainContent.indexOf('<' + tag, i + 1);
    const c = mainContent.indexOf('</' + tag + '>', i + 1);
    if (c === -1) break;
    if (o !== -1 && o < c) { depth++; i = o + 1; }
    else { if (depth === 0) { nextClose = c + ('</' + tag + '>').length; break; } depth--; i = c + 1; }
  }
  if (nextClose === -1) break;
  blocks.push({ start, end: nextClose, raw: mainContent.slice(start, nextClose) });
  re.lastIndex = nextClose;
  i = nextClose;
}

console.log('parsed blocks:', blocks.length);

// Classify each block
function classify(block) {
  const raw = block.raw;
  if (raw.includes('id="ch1"')) return 'ch1';
  if (raw.includes('id="ch2"')) return 'ch2';
  if (raw.includes('id="ch3"')) return 'ch3';
  if (raw.includes('id="ch4"')) return 'ch4';
  if (raw.includes('id="ch5"')) return 'ch5';
  if (raw.includes('id="ch6"')) return 'ch6';
  if (raw.includes('id="ch7"')) return 'ch7';
  if (raw.includes('id="ch8"')) return 'ch8';
  if (raw.includes('id="top"')) return 'cover';
  if (raw.includes('data-detail-section="R6C-02"')) return 'd02';
  if (raw.includes('data-detail-section="R6C-03"')) return 'd03';
  if (raw.includes('data-detail-section="R6C-04"')) return 'd04';
  if (raw.includes('data-detail-section="R6C-08"')) return 'd08';
  if (raw.includes('data-detail-section="R6C-09"')) return 'd09';
  if (raw.includes('data-detail-section="R6C-10"')) return 'd10';
  if (raw.includes('data-detail-section="R6C-12"')) return 'd12';
  if (raw.includes('data-detail-section="R6C-13"')) return 'd13';
  if (raw.includes('data-detail-section="R6C-14"')) return 'd14';
  if (raw.includes('data-detail-section="R6C-16"')) return 'd16';
  if (raw.includes('data-detail-section="R6C-18"')) return 'd18';
  if (raw.includes('data-detail-section="R6C-20"')) return 'd20';
  if (raw.includes('data-detail-section="R6C-21"')) return 'd21';
  if (raw.includes('data-detail-section="R6C-22"')) return 'd22';
  if (raw.includes('data-detail-section="R6C-23"')) return 'd23';
  if (raw.includes('data-detail-section="R6C-25"')) return 'd25';
  if (raw.includes('id="R6C-05"')) return 's05';
  if (raw.includes('id="R6C-06"')) return 's06';
  if (raw.includes('id="R6C-07"')) return 's07';
  if (raw.includes('id="R6C-11"')) return 's11';
  if (raw.includes('id="R6C-15"')) return 's15';
  if (raw.includes('id="R6C-17"')) return 's17';
  if (raw.includes('id="R6C-19"')) return 's19';
  if (raw.includes('id="R6C-24"')) return 's24';
  if (raw.includes('id="B8"')) return 'B8';
  if (raw.includes('class="r6v-wrong-right"')) return 'wrongright';
  if (raw.includes('class="r6v-flow-line"')) return 'flowline';
  if (raw.includes('class="r6v-two-market"')) return 'twomarket';
  if (raw.includes('class="r6v-universe-top"')) return 'universe';
  if (raw.includes('class="r6v-funnel"')) return 'funnel';
  if (raw.includes('class="r6v-funnel-note"')) return 'funnelnote';
  if (raw.includes('class="r6v-proof"')) return 'proof';
  if (raw.includes('class="r6v-rank-move"')) return 'rankmove';
  if (raw.includes('class="r6v-cap-bridge"')) return 'capbridge';
  if (raw.includes('class="r6v-cap-bottom"')) return 'capbottom';
  if (raw.includes('class="r6v-blueprint"')) return 'blueprint';
  if (raw.includes('class="r6v-buyers"')) return 'buyers';
  if (raw.includes('class="r6v-sales"')) return 'sales';
  if (raw.includes('class="r6v-c1c2"')) return 'c1c2';
  if (raw.includes('class="r6v-ladder"')) return 'ladder';
  if (raw.includes('class="r6v-money"')) return 'money';
  if (raw.includes('class="r6v-money-learn"')) return 'moneylearn';
  if (raw.includes('class="r6v-pnl"')) return 'pnl';
  if (raw.includes('class="r6v-capital"')) return 'capital';
  if (raw.includes('class="r6v-portfolio"')) return 'portfolio';
  if (raw.includes('class="r6v-risk"')) return 'risk';
  if (raw.includes('class="r6v-risk-col"')) return 'riskcol';
  if (raw.includes('class="r6v-gantt"')) return 'gantt';
  if (raw.includes('class="r6v-clock"')) return 'clock';
  if (raw.includes('class="r6v-clock-final"')) return 'clockfinal';
  if (raw.includes('class="price-block"')) return 'price';
  if (raw.includes('class="rights-block"')) return 'rights';
  return 'UNKNOWN:' + raw.slice(0, 80);
}

const classified = blocks.map(b => ({ ...b, cls: classify(b) }));
console.log('block classes:', classified.map(b => b.cls).join(' | '));

// Define desired order
const desiredOrder = [
  'cover',
  'ch1', 'wrongright', 'flowline', 'd02',
  'ch2', 'twomarket', 'd03', 'universe', 'funnel', 'funnelnote', 'd04',
  's05', 's06', 's07',
  'proof', 'd08',
  'ch3', 'rankmove', 'd09', 'capbridge', 'capbottom', 'd10', 's11',
  'ch4', 'blueprint', 'd12', 'c1c2', 'ladder', 'buyers', 'd13', 'sales', 'money', 'moneylearn', 'd14',
  'ch5', 'blueprint', 's15', 'blueprint', 'd16', 's17', 'price', 'rights', 'd18', 's19',
  'ch6', 'gantt', 'clock', 'clockfinal', 'd25',
  'ch7', 'pnl', 'd20', 'capital', 'd21', 'portfolio', 'd22', 'risk', 'riskcol', 'd23',
  'ch8', 's24',
  'B8'
];

// Map each desired class to blocks (preserving order of duplicates)
const byClass = {};
for (const b of classified) {
  if (!byClass[b.cls]) byClass[b.cls] = [];
  byClass[b.cls].push(b);
}

// Build new content
const newContent = [];
for (const cls of desiredOrder) {
  const list = byClass[cls];
  if (!list || !list.length) { console.log('!! no block for', cls); continue; }
  const b = list.shift();
  newContent.push(b.raw);
}
// Append any remaining blocks not in desired order
for (const b of classified) {
  if (desiredOrder.includes(b.cls) === false && !newContent.includes(b.raw)) newContent.push(b.raw);
}

const rebuilt = beforeMain + newContent.join('\n') + '\n' + afterMain;
fs.writeFileSync(indexPath, rebuilt, 'utf8');
console.log('rebuilt main. size:', rebuilt.length);
