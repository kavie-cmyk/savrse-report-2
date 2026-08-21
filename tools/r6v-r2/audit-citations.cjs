// R6V-R2 — audit and fix citation-row nesting (defect 13)
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Find all citation-row divs and their nesting depth via a simple parser
// Strategy: for each citation-row, check if it's inside another citation-row by
// looking at the raw HTML structure. We'll rewrite all proof cards to have a
// clean, flat structure: <div class="r6v-proof-card"> ... <div class="citation-row">...</div> </div>

// Count before
const before = (html.match(/<div class="citation-row"/g) || []).length;
console.log('citation-row before:', before);

// Normalize: ensure every citation-row is a direct child of its proof-card.
// Simplest robust fix: rebuild the evidence proof block entirely.
// First find the r6v-proof block boundaries.
const proofStart = html.indexOf('<div class="r6v-proof">');
const proofEnd = html.indexOf('</div>', html.indexOf('<div class="r6v-proof">'));

// Actually a cleaner approach: regex-replace any nested citation-row patterns.
// Pattern 1: card close then citation-row then card close → the citation-row is
// already a sibling if it's after the card's last inner </p>. Let's just verify
// by counting whether any citation-row contains another citation-row in source.

let nestedCount = 0;
const rowIndices = [];
let search = 0;
while (true) {
  const i = html.indexOf('<div class="citation-row"', search);
  if (i === -1) break;
  rowIndices.push(i);
  search = i + 1;
}
for (let i = 0; i < rowIndices.length; i++) {
  const start = rowIndices[i];
  // find matching close (this div contains only buttons; find the next </div>)
  const close = html.indexOf('</div>', start);
  const inner = html.slice(start, close);
  if (inner.includes('citation-row')) nestedCount++;
}
console.log('source-nested citation-rows:', nestedCount);
console.log('total citation-row divs:', rowIndices.length);
