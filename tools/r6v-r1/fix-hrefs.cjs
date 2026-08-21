// R6V-R1 — fix R6C-01 href references to #top (the cover)
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

html = html.replace(
  '<section class="r6v-cover" aria-label="Quyết định chiến lược SAVRSE">',
  '<section id="top" class="r6v-cover" aria-label="Quyết định chiến lược SAVRSE">'
);
html = html.replace('<a class="skip-link" href="#R6C-01">', '<a class="skip-link" href="#top">');
html = html.replace('<a class="r6v-brand" href="#R6C-01"', '<a class="r6v-brand" href="#top"');
html = html.replace('<a href="#R6C-01">TỔNG QUAN</a>', '<a href="#top">TỔNG QUAN</a>');

fs.writeFileSync(indexPath, html, 'utf8');

// verify
const h2 = fs.readFileSync(indexPath, 'utf8');
const hrefR6C01 = (h2.match(/href="#R6C-01"/g) || []).length;
const topId = h2.includes('id="top"');
const hrefs = [...h2.matchAll(/href="#([^"]+)"/g)].map(m => m[1]).filter((v,i,a)=>a.indexOf(v)===i);
const ids = [...h2.matchAll(/(?<!data-) id="([^"]+)"/g)].map(m => m[1]).filter((v,i,a)=>a.indexOf(v)===i);
const missing = hrefs.filter(h => !ids.includes(h));
console.log('href #R6C-01 remaining:', hrefR6C01);
console.log('id=top present:', topId);
console.log('missing targets:', missing.length ? missing.join(', ') : 'NONE');
console.log('index size:', h2.length);
