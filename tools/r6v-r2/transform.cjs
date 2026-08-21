// R6V-R2 — transform shortlists (landscape), final-10 (executive view), and add chapter polish
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// ============ 1. B2B shortlist landscape ============
// Parse R6C-05's shortlist items and rebuild as landscape.
function rebuildShortlist(html, sectionId, opts) {
  const openTag = '<section id="' + sectionId + '"';
  const start = html.indexOf(openTag);
  const nextSectionMatch = html.indexOf('<section id="', start + 10);
  if (start === -1 || nextSectionMatch === -1) { console.log('!! ' + sectionId + ' bounds fail'); return html; }
  const section = html.slice(start, nextSectionMatch);
  // Extract shortlist items
  const itemRe = /<div class="shortlist-item\s+([^"]+)" data-shortlist-status="([^"]+)">([\s\S]*?)<\/div>\s*<\/div>/g;
  // Simpler: find each item block
  const items = [];
  let pos = section.indexOf('<div class="shortlist-item');
  while (pos !== -1) {
    const itemStart = pos;
    // find matching end: item ends at '</div>\n        </div>' — we find the next 'shortlist-item' or section end
    const nextItem = section.indexOf('shortlist-item', itemStart + 10);
    const segEnd = nextItem === -1 ? section.length : nextItem;
    const rawItem = section.slice(itemStart, segEnd);
    // extract status
    const statusMatch = rawItem.match(/data-shortlist-status="([^"]+)"/);
    const status = statusMatch ? statusMatch[1] : 'final';
    // extract name (h4)
    const nameMatch = rawItem.match(/<h4>(.*?)<\/h4>/s);
    const name = nameMatch ? nameMatch[1].replace(/<[^>]+>/g, '').trim() : '?';
    // extract lane
    const laneMatch = rawItem.match(/<span class="sl-lane">(.*?)<\/span>/);
    const lane = laneMatch ? laneMatch[1] : '';
    // extract the three meta paragraphs
    const metas = [];
    const metaRe = /<p class="shortlist-meta">([\s\S]*?)<\/p>/g;
    let mm;
    while ((mm = metaRe.exec(rawItem))) metas.push(mm[1].replace(/<[^>]+>/g, '').trim());
    items.push({ status, name, lane, metas, raw: rawItem });
    pos = nextItem === -1 ? -1 : nextItem;
  }

  console.log(sectionId + ' items parsed:', items.length, '(', items.filter(i => i.status === 'final').length, 'final,', items.filter(i => i.status === 'stopped').length, 'stopped )');

  // Build landscape: final 5 prominent + others secondary
  const finals = items.filter(i => i.status === 'final');
  const others = items.filter(i => i.status === 'stopped');

  const finalItems = finals.map((it, idx) => {
    const oneLine = it.metas[1] || it.metas[0] || '';
    return `<div class="r6v-sl2-item final">
  <h4>${it.name}</h4>
  <p class="r6v-sl2-one">${oneLine}</p>
  <span class="r6v-sl2-status">Vào vòng cuối · #${idx + 1}</span>
  <details class="r6v-sl2-detail"><summary>Chi tiết</summary>
    <div class="r6v-sl2-detail-body">${it.metas.map(m => `<p><strong>${m.split(':')[0]}:</strong>${m.slice(m.indexOf(':') + 1)}</p>`).join('')}</div>
  </details>
</div>`;
  }).join('\n  ');

  const otherItems = others.map((it) => {
    const reason = it.metas[2] || it.metas[1] || it.metas[0] || '';
    return `<div class="r6v-sl2-item other">
  <h4>${it.name}</h4>
  <p class="r6v-sl2-reason">${reason}</p>
  <span class="r6v-sl2-status">Dừng trước vòng cuối</span>
  <details class="r6v-sl2-detail"><summary>Chi tiết</summary>
    <div class="r6v-sl2-detail-body">${it.metas.map(m => `<p><strong>${m.split(':')[0]}:</strong>${m.slice(m.indexOf(':') + 1)}</p>`).join('')}</div>
  </details>
</div>`;
  }).join('\n  ');

  const landscape = `<div class="r6v-shortlist-landscape">
  <div class="r6v-sl2-final">
    <div class="r6v-sl2-label">${opts.finalLabel}</div>
    <div class="r6v-sl2-grid">${finalItems}</div>
  </div>
  <div class="r6v-sl2-other">
    <div class="r6v-sl2-label">${opts.otherLabel}</div>
    <div class="r6v-sl2-grid">${otherItems}</div>
  </div>
</div>`;

  // Replace the shortlist-explorer content inside the section with the landscape
  // Find the section header, keep it; replace from '<div class="shortlist-explorer">' to its close
  const explorerStart = section.indexOf('<div class="shortlist-explorer">');
  const explorerEnd = section.indexOf('</div>', section.indexOf('</div>', explorerStart + 30) + 30);
  // Find a reliable end: search for the last closing of the explorer by finding '<div class="conclusion-block"' after explorer
  const conclusionStart = section.indexOf('<div class="conclusion-block"', explorerStart);
  const endBoundary = conclusionStart !== -1 ? conclusionStart : section.length;
  const headerEnd = section.indexOf('</header>', 0);
  const header = section.slice(0, headerEnd + '</header>'.length);
  const conclusion = conclusionStart !== -1 ? section.slice(conclusionStart) : '';

  const rebuiltSection = section.slice(0, section.indexOf('</header>') + '</header>'.length)
    + '\n' + landscape + '\n' + conclusion;

  html = html.slice(0, start) + rebuiltSection + html.slice(nextSectionMatch);
  return html;
}

// ============ 2. Final-10: executive view + wrap full table ============
function rebuildFinal10(html) {
  const openTag = '<section id="R6C-07"';
  const start = html.indexOf(openTag);
  const nextSectionMatch = html.indexOf('<section id="', start + 10);
  if (start === -1 || nextSectionMatch === -1) { console.log('!! R6C-07 bounds fail'); return html; }
  const section = html.slice(start, nextSectionMatch);

  // Keep the header + any intro, then replace the cc-table-wrap default visibility:
  // Add an executive ranked view BEFORE the table, and wrap the table in <details>.
  const tableStart = section.indexOf('<div class="cc-table-wrap">');
  const headerEnd = section.indexOf('</header>');
  const header = section.slice(0, headerEnd + '</header>'.length);

  // Executive ranked view (compact)
  const execView = `<div class="r6v-final10">
  <div class="r6v-f10-section">
    <h4>B2B · 5 cơ hội cuối</h4>
    <div class="r6v-f10-row"><span class="r6v-f10-rank">1</span><div class="r6v-f10-name">Y tế — mô phỏng đào tạo thủ thuật / kỹ năng lâm sàng</div><div class="r6v-f10-cell"><strong>Ai trả tiền</strong>Trường y, trung tâm y khoa học thuật, bộ phận đào tạo/mô phỏng bệnh viện</div><div class="r6v-f10-cell"><strong>Lặp lại bằng</strong>Mô-đun/phần lõi dùng lại giữa các khách hàng</div><div class="r6v-f10-cell r6v-f10-risk"><strong>Rủi ro chính</strong>Dễ thành dự án nội dung riêng; SAVA thiếu thẩm quyền lâm sàng</div></div>
    <div class="r6v-f10-row"><span class="r6v-f10-rank">2</span><div class="r6v-f10-name">Virtual Commissioning — kiểm thử điều khiển trên mô hình số</div><div class="r6v-f10-cell"><strong>Ai trả tiền</strong>Nhà máy, OEM, đơn vị tích hợp hệ thống</div><div class="r6v-f10-cell"><strong>Lặp lại bằng</strong>Quy trình kiểm thử chặt, dự án lặp lại</div><div class="r6v-f10-cell r6v-f10-risk"><strong>Rủi ro chính</strong>Khoảng cách PLC/OT, hệ sinh thái nhà cung cấp giữ giá trị</div></div>
    <div class="r6v-f10-row"><span class="r6v-f10-rank">3</span><div class="r6v-f10-name">Kho — mô phỏng bố trí / luồng / công suất</div><div class="r6v-f10-cell"><strong>Ai trả tiền</strong>3PL, nhà bán lẻ, nhà sản xuất</div><div class="r6v-f10-cell"><strong>Lặp lại bằng</strong>Mô hình mẫu/dữ liệu dùng lại</div><div class="r6v-f10-cell r6v-f10-risk"><strong>Rủi ro chính</strong>Dữ liệu/hiệu chỉnh nặng, dễ thành tư vấn một lần</div></div>
    <div class="r6v-f10-row"><span class="r6v-f10-rank">4</span><div class="r6v-f10-name">Broadcast — đồ họa realtime 3D truyền hình</div><div class="r6v-f10-cell"><strong>Ai trả tiền</strong>Đài truyền hình, truyền thông thể thao</div><div class="r6v-f10-cell"><strong>Lặp lại bằng</strong>Giấy phép/hỗ trợ nhiều năm</div><div class="r6v-f10-cell r6v-f10-risk"><strong>Rủi ro chính</strong>Chi phí chuyển đổi, lợi thế nhà cung cấp hiện hữu</div></div>
    <div class="r6v-f10-row"><span class="r6v-f10-rank">5</span><div class="r6v-f10-name">Construction — theo dõi công trường bằng hình ảnh/3D</div><div class="r6v-f10-cell"><strong>Ai trả tiền</strong>Nhà thầu, chủ đầu tư</div><div class="r6v-f10-cell"><strong>Lặp lại bằng</strong>Chu kỳ thu dữ liệu tự nhiên</div><div class="r6v-f10-cell r6v-f10-risk"><strong>Rủi ro chính</strong>Thanh toán/gia hạn độc lập yếu; dễ bị gộp vào nền tảng AEC</div></div>
  </div>
  <div class="r6v-f10-section">
    <h4>B2C · 5 cơ hội cuối</h4>
    <div class="r6v-f10-row"><span class="r6v-f10-rank">1</span><div class="r6v-f10-name">Thể thao — VR dựa trên kỹ năng thể thao</div><div class="r6v-f10-cell"><strong>Ai trả tiền</strong>Người tiêu dùng VR</div><div class="r6v-f10-cell"><strong>Chơi lại bằng</strong>Kỹ năng, điểm, thử thách</div><div class="r6v-f10-cell r6v-f10-risk"><strong>Rủi ro chính</strong>Chất lượng tương tác/vật lý; chưa chọn môn</div></div>
    <div class="r6v-f10-row"><span class="r6v-f10-rank">2</span><div class="r6v-f10-name">Âm nhạc — VR hành động theo nhạc</div><div class="r6v-f10-cell"><strong>Ai trả tiền</strong>Người tiêu dùng VR</div><div class="r6v-f10-cell"><strong>Chơi lại bằng</strong>Thời điểm, điểm, làm chủ, biến thể</div><div class="r6v-f10-cell r6v-f10-risk"><strong>Rủi ro chính</strong>Quyền nhạc, tạo nội dung, bị coi là bản sao</div></div>
    <div class="r6v-f10-row"><span class="r6v-f10-rank">3</span><div class="r6v-f10-name">Giải đố — không gian/hệ thống</div><div class="r6v-f10-cell"><strong>Ai trả tiền</strong>Người tiêu dùng VR</div><div class="r6v-f10-cell"><strong>Chơi lại bằng</strong>Nhiều lời giải, tối ưu, ràng buộc</div><div class="r6v-f10-cell r6v-f10-risk"><strong>Rủi ro chính</strong>Chơi một lần là xong; màn hình phẳng thay thế</div></div>
    <div class="r6v-f10-row"><span class="r6v-f10-rank">4</span><div class="r6v-f10-name">Ngoại ngữ — học trong tình huống nhập vai</div><div class="r6v-f10-cell"><strong>Ai trả tiền</strong>Người tiêu dùng</div><div class="r6v-f10-cell"><strong>Chơi lại bằng</strong>Luyện tập, tiến bộ, tình huống</div><div class="r6v-f10-cell r6v-f10-risk"><strong>Rủi ro chính</strong>Ứng dụng di động/AI/gia sư thay thế mạnh</div></div>
    <div class="r6v-f10-row"><span class="r6v-f10-rank">5</span><div class="r6v-f10-name">LBE — VR địa điểm vật lý, di chuyển tự do</div><div class="r6v-f10-cell"><strong>Ai trả tiền</strong>Người mua vé; nhà vận hành địa điểm</div><div class="r6v-f10-cell"><strong>Chơi lại bằng</strong>Trải nghiệm xã hội, nội dung/địa điểm mới</div><div class="r6v-f10-cell r6v-f10-risk"><strong>Rủi ro chính</strong>Vốn đầu tư, mặt bằng, kinh tế từng điểm</div></div>
  </div>
</div>`;

  // Wrap the full 9-column table in a details disclosure
  // Find the table wrapper end: the cc-table-wrap div closes after the table
  const tableClose = section.indexOf('</div>', section.indexOf('</tbody>', tableStart));
  // Add closing details after table
  const tableOpenDetails = `<details class="r6v-detail" data-detail-section="final10-table"><summary><span class="r6v-detail-label">Xem phân tích đầy đủ 10 cơ hội</span><span class="r6v-detail-arrow">+</span></summary><div class="r6v-detail-body">`;
  const tableCloseDetails = `</div></details>`;

  const beforeTable = section.slice(0, tableStart);
  const tableDiv = section.slice(tableStart, tableClose + '</div>'.length);
  const afterTable = section.slice(tableClose + '</div>'.length);

  const rebuiltSection = header + '\n' + execView + '\n' + tableOpenDetails + tableDiv + tableCloseDetails + afterTable;
  html = html.slice(0, start) + rebuiltSection + html.slice(nextSectionMatch);
  return html;
}

// Apply
html = rebuildShortlist(html, 'R6C-05', { finalLabel: '5 hướng vào vòng cuối', otherLabel: '7 hướng dừng trước vòng cuối' });
html = rebuildShortlist(html, 'R6C-06', { finalLabel: '5 hướng vào vòng cuối', otherLabel: '6 hướng dừng trước vòng cuối' });
html = rebuildFinal10(html);

// Append R2 CSS
const css = fs.readFileSync(path.join(__dirname, 'r6v-r2-visual.css'), 'utf8');
fs.appendFileSync(path.join(ROOT, 'styles.css'), '\n' + css);

fs.writeFileSync(indexPath, html, 'utf8');
console.log('R6V-R2 transforms applied. index size:', html.length);
