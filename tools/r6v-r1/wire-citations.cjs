// R6V-R1 — wire citation drawer by adding data-source-id triggers to evidence proof cards
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Evidence proof cards: add a "Nguồn Sxx" trigger with data-source-id.
// Proof card → source IDs (from RPT-4R2 source registry).
const proofCards = [
  { fact: '2 hồ sơ mua sắm công VR phẫu thuật (SAM.gov, 01/2025)', srcs: ['S01', 'S02'] },
  { fact: '"Tới 50%" giảm thời gian lắp đặt / đưa vào vận hành (Emulate3D)', srcs: ['S05'] },
  { fact: 'EUR 3.485.539,20 — ORF–Vizrt 2026–2028', srcs: ['S09'] },
  { fact: 'GOLF+ ~USD 29,99 · Racket Club USD 24,99 · Synth Riders USD 7,99 / 5 bài', srcs: ['S13', 'S14', 'S15', 'S16'] },
  { fact: '41 RCT meta-analysis — học ngoại ngữ có hỗ trợ VR', srcs: ['S24'] },
  { fact: 'Zero Latency: >120 địa điểm · >5 triệu lượt chơi', srcs: ['S21', 'S22'] },
  { fact: 'Frisco (Zero Latency) đóng cửa sau ~5 tháng', srcs: ['S26'] },
  { fact: 'Rec Room: quy mô lớn rồi đóng dịch vụ 30/03/2026', srcs: ['S30'] },
];

let added = 0;
for (const card of proofCards) {
  const fact = card.fact.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Find the proof-card div containing this fact
  const re = new RegExp('(<div class="r6v-proof-card"[\\s\\S]*?' + fact + '[\\s\\S]*?)(</div>\\s*</div>)');
  const m = html.match(re);
  if (m) {
    const srcBtn = card.srcs.map(s => `<button type="button" class="citation-trigger" data-source-id="${s}">Nguồn ${s}</button>`).join('');
    const insert = m[1] + `<div class="citation-row" style="margin-top:10px">${srcBtn}</div>` + m[2];
    html = html.replace(m[0], insert);
    added++;
  } else {
    console.log('!! no match for fact:', fact.slice(0, 50));
  }
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log('citation triggers added:', added);
