// Find the div imbalance location
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

// Walk through and track div depth, report where it goes negative
let depth = 0;
let minDepth = 0;
let minPos = 0;
let i = 0;
const re = /<div\b[^>]*>|<\/div>/g;
let m;
let pos = 0;
while ((m = re.exec(html))) {
  const token = m[0];
  if (token.startsWith('<div')) { depth++; }
  else { depth--; if (depth < minDepth) { minDepth = depth; minPos = m.index; } }
}
console.log('final div depth:', depth, '(should be 0)');
console.log('min depth reached:', minDepth, 'at pos', minPos);
if (minPos > 0) {
  // show context around the first imbalance
  const ctx = html.slice(Math.max(0, minPos - 600), minPos + 200);
  console.log('--- context around imbalance ---');
  console.log(ctx);
}
