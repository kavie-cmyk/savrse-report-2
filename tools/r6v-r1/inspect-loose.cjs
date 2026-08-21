// R6V-R1 — inspect + clean loose markup
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Count empty <p></p> and <div></div>
const emptyP = (html.match(/<p>\s*<\/p>/g) || []).length;
const emptyDiv = (html.match(/<div>\s*<\/div>/g) || []).length;
console.log('empty <p>:', emptyP, '| empty <div>:', emptyDiv);

// 2. Show context around price-block
const pb = html.indexOf('class="price-block"');
if (pb > -1) {
  console.log('--- price-block context ---');
  console.log(html.slice(Math.max(0, pb - 250), pb + 250));
}

// 3. Show context around a loose empty P (find one)
const idx = html.indexOf('<p>\n\n</p>');
if (idx > -1) {
  console.log('--- empty P context ---');
  console.log(html.slice(Math.max(0, idx - 150), idx + 150));
} else {
  const idx2 = html.search(/<p>\s*<\/p>/);
  if (idx2 > -1) console.log('--- empty P (other) context ---\n', html.slice(Math.max(0, idx2 - 150), idx2 + 150));
}
