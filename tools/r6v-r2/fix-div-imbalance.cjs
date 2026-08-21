// R6V-R2 — fix the extra closing </div> after the B2B rank-move block
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// The B2B rank-move block ends with the VC row then "</div>\n</div>".
// It should end with just one </div> (closing the rank-move wrapper).
// Pattern: ...VC — theo dõi / qua đối tác</div></div>\n</div>\n</div>
const marker = 'VC — theo dõi / qua đối tác</div></div>';
const idx = html.indexOf(marker);
if (idx === -1) { console.log('marker not found'); process.exit(1); }
// Look at what follows: expect '</div>\n</div>' — remove ONE of them (the extra)
let after = html.slice(idx + marker.length);
console.log('after marker:', JSON.stringify(after.slice(0, 40)));
// The structure should be: ...</div></div>\n</div>\n<details...
// We want: ...</div></div>\n</div>\n<details (one less </div>)
// Count consecutive closing divs after marker
let m = after.match(/^(\s*<\/div>\s*)+/);
if (m) {
  const closingBlock = m[0];
  const closeCount = (closingBlock.match(/<\/div>/g) || []).length;
  console.log('consecutive closing divs:', closeCount);
  if (closeCount >= 2) {
    // Remove the last </div> of the run (keep closeCount-1)
    const trimmed = closingBlock.replace(/<\/div>\s*$/, '');
    html = html.slice(0, idx + marker.length) + trimmed + after.slice(closingBlock.length);
    console.log('removed one extra </div>');
  }
}

fs.writeFileSync(indexPath, html, 'utf8');
// verify
const h2 = fs.readFileSync(indexPath, 'utf8');
let depth = 0, m2;
const re = /<div\b[^>]*>|<\/div>/g;
while ((m2 = re.exec(h2))) { m2[0].startsWith('<div') ? depth++ : depth--; }
console.log('final div depth:', depth);
