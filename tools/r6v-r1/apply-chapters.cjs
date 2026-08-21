// R6V-R1 — apply chapter treatment classes + append CSS
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');

const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const map = {
  'id="ch1"': 'class="r6v-chapter ch-research" id="ch1"',
  'id="ch2"': 'class="r6v-chapter ch-filter" id="ch2"',
  'id="ch3"': 'class="r6v-chapter ch-bridge" id="ch3"',
  'id="ch4"': 'class="r6v-chapter ch-health" id="ch4"',
  'id="ch5"': 'class="r6v-chapter ch-music" id="ch5"',
  'id="ch6"': 'class="r6v-chapter ch-ops" id="ch6"',
  'id="ch7"': 'class="r6v-chapter ch-finance" id="ch7"',
  'id="ch8"': 'class="r6v-chapter ch-decision" id="ch8"'
};

for (const [k, v] of Object.entries(map)) {
  const pat = '<section class="r6v-chapter" ' + k;
  if (html.includes(pat)) {
    html = html.replace(pat, '<section ' + v);
    console.log('styled', k);
  } else {
    console.log('!! pattern not found for', k);
  }
}

fs.writeFileSync(indexPath, html, 'utf8');

// Append CSS
const cssPath = path.join(__dirname, 'r6v-r1-visual.css');
const css = fs.readFileSync(cssPath, 'utf8');
fs.appendFileSync(path.join(ROOT, 'styles.css'), '\n' + css);
console.log('CSS appended');
console.log('index size:', html.length);
