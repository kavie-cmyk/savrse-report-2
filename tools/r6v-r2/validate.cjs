// Fast tag-balance + dup-ID check via Node
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

const tags = ['section','div','table','tbody','thead','tr','td','th','ul','li','details','summary','template','aside','header','nav','main','footer','button','a','span','h1','h2','h3','h4','h5','p','svg'];
let bad = 0;
for (const tag of tags) {
  const open = (html.match(new RegExp('<' + tag + '\\b[^>]*>', 'g')) || []).length;
  const close = (html.match(new RegExp('</' + tag + '>', 'g')) || []).length;
  if (open !== close) { console.log(`UNBALANCED ${tag}: open ${open} close ${close}`); bad++; }
}
if (!bad) console.log('ALL TAGS BALANCED');

// dup IDs
const ids = [...html.matchAll(/(?<!data-) id="([^"]+)"/g)].map(m => m[1]);
const seen = new Set(); const dups = new Set();
for (const id of ids) { seen.has(id) ? dups.add(id) : seen.add(id); }
console.log('duplicate IDs:', dups.size ? [...dups].join(', ') : 'NONE');

// nav hrefs resolve
const hrefs = [...html.matchAll(/href="#([^"]+)"/g)].map(m => m[1]).filter((v,i,a)=>a.indexOf(v)===i);
const missing = hrefs.filter(h => !seen.has(h));
console.log('missing nav targets:', missing.length ? missing.join(', ') : 'NONE');
console.log('index size:', html.length);
