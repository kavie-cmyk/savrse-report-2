// R6C sections batch 4: R6C-20 (economics), R6C-21 (capital gates), R6C-22 (other opportunities), R6C-23 (counter-thesis), R6C-24 (CEO decision package), R6C-25 (management clock)

const R6C20 = `<section id="R6C-20" class="site-section mist" data-section-id="R6C-20">
  <div class="shell">
    <header class="section-header">
      <span class="section-index">19 · KINH TẾ</span>
      <h2>KINH TẾ: HÔM NAY BIẾT GÌ, CHƯA BIẾT GÌ?</h2>
      <p class="management-question"><strong>CÂU HỎI:</strong> Vì sao không có một báo cáo lãi/lỗ dự báo 12–36 tháng đầy đủ?</p>
    </header>
    <div class="econ-grid">
      <div class="why-hc">
        <h3>Y TẾ — CẦN DỮ LIỆU QUAN SÁT</h3>
        <p class="mini-detail">Cần đo từ hoạt động thương mại thật của SAVA:</p>
        <ul class="plain-list">
          <li>Giá bán thực tế của gói kiểm chứng + giá trị triển khai</li>
          <li>Chi phí/công sức đối tác chuyên môn</li>
          <li>Công sức kỹ thuật, tùy chỉnh, triển khai, hỗ trợ</li>
          <li>Công sức bán hàng, chu kỳ bán/mua sắm</li>
          <li>Thời điểm thu–chi tiền, thời điểm nghiệm thu</li>
          <li>Tỷ lệ tái sử dụng, gia hạn, giao dịch lặp lại</li>
          <li>Phần đóng góp sau chi phí trực tiếp</li>
        </ul>
        <p class="mini-detail"><strong>Dữ liệu này mở ra:</strong> đóng góp khách hàng → lặp lại → hoàn vốn → kinh tế lần bán thứ hai → quyết định mở rộng.</p>
      </div>
      <div class="why-music">
        <h3>ÂM NHẠC — CẦN DỮ LIỆU QUAN SÁT</h3>
        <p class="mini-detail">Cần đo từ sản phẩm và cửa hàng:</p>
        <ul class="plain-list">
          <li>Giá sản phẩm thực tế, giá thực nhận</li>
          <li>Khấu trừ cửa hàng, hoàn tiền, chênh lệch khu vực</li>
          <li>Chi phí quyền âm nhạc và nội dung</li>
          <li>Công sức phát triển, QA, hỗ trợ</li>
          <li>Chi phí tiếp thị / thu hút người mua</li>
          <li>Số giao dịch, giữ chân, chơi lại, DLC nếu có</li>
          <li>Phần đóng góp sau chi phí trực tiếp</li>
        </ul>
        <p class="mini-detail"><strong>Dữ liệu này mở ra:</strong> doanh thu thuần → đóng góp → kinh tế thu hút → kinh tế nội dung → khả năng sống của danh mục → quyết định mở rộng.</p>
      </div>
    </div>
    <div class="econ-calc">
      <h3>MÔ HÌNH KINH TẾ HỌC TẬP — KHÔNG PHẢI P&L SUY ĐOÁN</h3>
      <p>Chúng ta KHÔNG trốn tránh tài chính. Chúng ta <strong>từ chối thay bằng chứng thương mại còn thiếu bằng sự chính xác bịa đặt.</strong></p>
      <ul class="plain-list">
        <li>Nguyên tắc: không điền số giả vào biến chưa có dữ liệu; không coi biến thiếu thông tin là 0; không thay bằng trung bình ngành để bảng tính đẹp.</li>
        <li>Khi dữ liệu xuất hiện (CRM, đề xuất, hợp đồng, cửa hàng, kế toán), biến mới được dùng đúng phạm vi nguồn hỗ trợ.</li>
        <li>Số giả định định lượng mới trong kế hoạch = <strong>0</strong>.</li>
        <li>Ba kịch bản định tính (bất lợi / cơ sở / thuận lợi) — không gán tỷ lệ giả.</li>
      </ul>
    </div>
    <div class="conclusion-block">
      <p><strong>KẾT LUẬN:</strong> Kinh tế hiện tại là mô hình học tập: biết doanh thu đến từ đâu, chi phí phát sinh ở đâu, biến nào đo trước, khi nào chỉ số bắt đầu tính được, điều kiện nào phải đạt trước khi mở nguồn lực.</p>
      <p><strong>VẬY THÌ SAO?</strong> Chính vì chưa có dữ liệu đủ, vốn phải được cấp theo từng gói có bằng chứng.</p>
    </div>
    <p class="transition">Điều này dẫn đến câu hỏi tiếp theo: <em>vốn và nguồn lực được kiểm soát thế nào?</em></p>
  </div>
</section>`;

const R6C21 = `<section id="R6C-21" class="site-section light" data-section-id="R6C-21">
  <div class="shell">
    <header class="section-header">
      <span class="section-index">20 · CỔNG VỐN & NGUỒN LỰC</span>
      <h2>VỐN & NGUỒN LỰC: CẤP THEO TỪNG GÓI CÓ BẰNG CHỨNG</h2>
      <p class="management-question"><strong>CÂU HỎI:</strong> Vì sao không xin CEO phê duyệt một kế hoạch lớn dựa trên giả định chưa kiểm chứng?</p>
    </header>
    <div class="capital-block">
      <h3>NGUYÊN TẮC CẤP VỐN THEO TỪNG GÓI</h3>
      <div class="cap-flow"><span>PHÊ DUYỆT HỌC HỎI</span><span class="cf-arrow">→</span><span>TẠO BẰNG CHỨNG</span><span class="cf-arrow">→</span><span>RÀ SOÁT</span><span class="cf-arrow">→</span><span>MỞ GÓI TIẾP THEO</span><span class="cf-arrow">→</span><span>HOẶC DỪNG</span></div>
      <p class="mini-detail">Mỗi gói phải ghi: việc được phép làm; hướng kinh doanh; người chịu trách nhiệm; loại nguồn lực; số tiền nếu đã phê duyệt; thời gian; câu hỏi cần trả lời; cách đo; điều kiện tiếp tục; điều kiện dừng; khoản chi lớn hơn chưa nằm trong gói.</p>
      <p class="mini-detail">Một gói kiểm chứng được phê duyệt <strong>không tự động gia hạn</strong> và <strong>không tự động thành đầu tư dài hạn.</strong></p>
    </div>
    <div class="cap-note">
      <h4>NGƯỠNG QUẢN TRỊ (từ BP-4M v1.4)</h4>
      <ul class="plain-list">
        <li><strong>Y tế:</strong> xem xét bằng chứng trả phí đầu tiên trong tối đa 6 tháng; khả năng lặp lại + hoàn vốn trong tối đa 12 tháng khi tính được; chỉ mở rộng khi có đường đóng góp dương + năng lực triển khai hợp lý.</li>
        <li><strong>Âm nhạc:</strong> xem xét bằng chứng trả phí đầu tiên trong tối đa 12 tháng nếu sản phẩm tới thị trường; doanh thu lặp lại + hoàn vốn trong tối đa 24 tháng; con đường bền vững trong tối đa 36 tháng.</li>
        <li>Đây là công cụ quản trị, không phải dự báo doanh thu.</li>
      </ul>
    </div>
    <div class="cap-note">
      <h4>NĂNG LỰC — ĐỪNG SUY RA NHẦM</h4>
      <ul class="plain-list">
        <li><strong>27 vai trò ≠ năng lực trống.</strong></li>
        <li><strong>>80 nhân sự công ty ≠ nguồn lực phân bổ cho Savrse.</strong></li>
        <li>Trước khi mở rộng vật chất cần: chủ sở hữu, FTE, chi phí, thời điểm, phụ thuộc, chi phí cơ hội.</li>
        <li>Hai hướng chỉ chạy song song giới hạn vì chúng kiểm tra hai nút thắt khác nhau — không phải vì có đủ đội.</li>
      </ul>
    </div>
    <div class="conclusion-block">
      <p><strong>KẾT LUẬN:</strong> Nguồn lực được quản lý theo gói công việc thay vì lấy quy mô đội hiện có làm điểm xuất phát.</p>
      <p><strong>VẬY THÌ SAO?</strong> Khi hai hướng chính được ưu tiên, các cơ hội còn lại được xử lý ra sao để không phân mảnh nguồn lực?</p>
    </div>
    <p class="transition">Điều này dẫn đến câu hỏi tiếp theo: <em>các cơ hội khác sẽ ra sao?</em></p>
  </div>
</section>`;

const R6C22 = `<section id="R6C-22" class="site-section mist" data-section-id="R6C-22">
  <div class="shell">
    <header class="section-header">
      <span class="section-index">21 · DANH MỤC CÒN LẠI</span>
      <h2>NHỮNG CƠ HỘI KHÁC SẼ RA SAO?</h2>
      <p class="management-question"><strong>CÂU HỎI:</strong> "Không chọn" ≠ "thị trường tồi". Mỗi cơ hội còn lại giữ một vai trò trong danh mục, với điều kiện mở lại rõ ràng.</p>
    </header>
    <div class="port-grid">
      <div class="po"><span class="po-status">KHO</span><h4>Lựa chọn có điều kiện</h4><p class="po-why"><strong>Vì sao không bây giờ:</strong> không duy trì nguồn lực thường trực; dữ liệu/hiệu chỉnh nặng.</p><p class="po-reopen"><strong>Mở lại khi:</strong> có bài toán kho thật + dữ liệu đại diện + người mua chịu trách nhiệm.</p></div>
      <div class="po"><span class="po-status">VC</span><h4>Lựa chọn chiến lược để theo dõi</h4><p class="po-why"><strong>Vì sao không bây giờ:</strong> khoảng cách PLC/OT + hệ sinh thái nhà cung cấp hiện hữu lớn.</p><p class="po-reopen"><strong>Mở lại khi:</strong> có đối tác tích hợp/OEM/điều khiển + trường hợp sử dụng + phần giá trị SAVA sở hữu.</p></div>
      <div class="po"><span class="po-status">THỂ THAO</span><h4>Khám phá điểm vào (wedge discovery)</h4><p class="po-why"><strong>Vì sao không bây giờ:</strong> SAVA chưa chọn môn/điểm vào, chưa chứng minh chất lượng tương tác/vật lý.</p><p class="po-reopen"><strong>Mở lại khi:</strong> tìm được hành động/điểm vào khác biệt + tương tác đáng tin + chơi lại rõ.</p></div>
      <div class="po"><span class="po-status">GIẢI ĐỐ</span><h4>Hướng thách thức nhỏ</h4><p class="po-why"><strong>Vì sao không bây giờ:</strong> giá trị VR so với phẳng + chơi lại sau khi giải chưa chắc; không được làm trễ Y tế/Âm nhạc.</p><p class="po-reopen"><strong>Mở lại khi:</strong> giá trị VR riêng + chơi lại sau khi giải vượt kiểm thử.</p></div>
      <div class="po"><span class="po-status">BROADCAST</span><h4>Dự phòng</h4><p class="po-why"><strong>Vì sao không bây giờ:</strong> độ tin cậy/chi phí chuyển đổi/lợi thế nhà cung cấp hiện hữu cao.</p><p class="po-reopen"><strong>Mở lại khi:</strong> có điểm vào cho doanh nghiệp mới + đánh giá độ tin cậy/quy trình/khả năng tiếp cận.</p></div>
      <div class="po"><span class="po-status">CONSTRUCTION</span><h4>Dự phòng</h4><p class="po-why"><strong>Vì sao không bây giờ:</strong> bằng chứng thanh toán/gia hạn độc lập yếu; giá trị dễ bị gộp vào nền tảng AEC.</p><p class="po-reopen"><strong>Mở lại khi:</strong> có thanh toán lặp lại độc lập + khả năng tiếp cận + kết quả rõ.</p></div>
      <div class="po"><span class="po-status">NGOẠI NGỮ</span><h4>Dự phòng</h4><p class="po-why"><strong>Vì sao không bây giờ:</strong> ứng dụng di động/AI/gia sư thay thế mạnh; giữ người dùng trả phí chưa rõ.</p><p class="po-reopen"><strong>Mở lại khi:</strong> giữ người dùng trả phí + giá trị tăng thêm từ không gian + lợi thế SAVA.</p></div>
      <div class="po"><span class="po-status">LBE</span><h4>Theo dõi / đối tác</h4><p class="po-why"><strong>Vì sao không bây giờ:</strong> vốn đầu tư, mặt bằng, nhân sự, kinh tế từng điểm.</p><p class="po-reopen"><strong>Mở lại khi:</strong> có đường đi ít tài sản + kinh tế địa điểm độc lập.</p></div>
    </div>
    <div class="conclusion-block">
      <p><strong>KẾT LUẬN:</strong> Giữ giá trị lựa chọn (option value) mà không phân mảnh thực thi. Một phương án không được giữ chỉ vì đã tiêu tiền.</p>
      <p><strong>VẬY THÌ SAO?</strong> Cuối cùng, điều gì có thể khiến chiến lược này SAI?</p>
    </div>
    <p class="transition">Điều này dẫn đến câu hỏi tiếp theo: <em>điều gì có thể làm cho chiến lược này sai?</em></p>
  </div>
</section>`;

const R6C23 = `<section id="R6C-23" class="site-section light" data-section-id="R6C-23">
  <div class="shell">
    <header class="section-header">
      <span class="section-index">22 · PHẢN LUẬN</span>
      <h2>ĐIỀU GÌ CÓ THỂ LÀM CHO CHIẾN LƯỢC NÀY SAI?</h2>
      <p class="management-question"><strong>CÂU HỎI:</strong> Đây là phần quản trị rủi ro trung thực — không phải kịch tính. Nếu luận điểm sai, sai ở đâu?</p>
    </header>
    <div class="risk-grid">
      <div class="risk-col">
        <h4>Y TẾ CÓ THỂ THẤT BẠI VÌ</h4>
        <ul class="plain-list">
          <li>Không có người giữ ngân sách thật.</li>
          <li>Cam kết thương mại yếu (quan tâm bằng lời, thử nghiệm miễn phí kéo dài).</li>
          <li>Đối tác chuyên môn giữ toàn bộ người mua/giá trị/IP → SAVA chỉ làm thuê.</li>
          <li>Tùy chỉnh lấn át; mỗi cơ sở xây lại gần như toàn bộ.</li>
          <li>Mua sắm/an toàn thông tin/dữ liệu chặn hợp đồng.</li>
          <li>Khách #2 không tái sử dụng đủ.</li>
          <li>Kinh tế không hấp dẫn (đóng góp/hoàn vốn không đạt).</li>
        </ul>
      </div>
      <div class="risk-col">
        <h4>ÂM NHẠC CÓ THỂ THẤT BẠI VÌ</h4>
        <ul class="plain-list">
          <li>Hành động cốt lõi không hấp dẫn hoặc bị coi là bản sao.</li>
          <li>Theo dõi/thời điểm thiếu tin cậy → không xây được cảm giác làm chủ.</li>
          <li>Người chơi thấy sản phẩm là biến thể Beat Saber/Synth Riders.</li>
          <li>Chơi lại đòi bài hát mới liên tục.</li>
          <li>Chi phí tạo nội dung quá cao.</li>
          <li>WTP yếu; phân phối yếu; kinh tế quyền nhạc không hấp dẫn.</li>
        </ul>
      </div>
      <div class="risk-col wide">
        <h4>DANH MỤC CÓ THỂ THẤT BẠI VÌ</h4>
        <ul class="plain-list">
          <li>Năng lực thực tế không đủ (27 ≠ FTE; >80 ≠ phân bổ).</li>
          <li>Quá nhiều thử nghiệm song song.</li>
          <li>Không có quyết định dừng cứng.</li>
          <li>Thiên kiến sunk cost (đã tiêu nên phải tiếp tục).</li>
          <li>Giả định tái sử dụng Music World sai.</li>
        </ul>
      </div>
    </div>
    <div class="conclusion-block">
      <p><strong>KẾT LUẬN:</strong> Mọi luận điểm đều có điều kiện dừng rõ. Quyền dừng phải được dùng khi bằng chứng không tăng.</p>
      <p><strong>VẬY THÌ SAO?</strong> Điều này đưa chúng ta đến gói quyết định CEO thực sự.</p>
    </div>
    <p class="transition">Điều này dẫn đến câu hỏi tiếp theo: <em>CEO được đề nghị phê duyệt chính xác điều gì?</em></p>
  </div>
</section>`;

const R6C24 = `<section id="R6C-24" class="site-section mist" data-section-id="R6C-24">
  <div class="shell">
    <header class="section-header">
      <span class="section-index">23 · GÓI QUYẾT ĐỊNH CEO</span>
      <h2>CEO CẦN PHÊ DUYỆT GÌ?</h2>
      <p class="management-question"><strong>CÂU HỎI:</strong> Thay vì 14 dòng phê duyệt rời rạc, các quyết định được gộp thành 5 quyết định quản trị. Với mỗi quyết định: CEO ĐANG PHÊ DUYỆT GÌ · VÌ SAO BÂY GIỜ · ĐIỀU GÌ XẢY RA TIẾP · AI SỞ HỮU · ĐẦU RA NÀO QUAY LẠI · KHI NÀO XEM LẠI · ĐIỀU NÀY KHÔNG ỦY QUYỀN GÌ.</p>
    </header>
    <div class="ceo-table-wrap">
      <table class="ceo-table">
        <thead><tr><th>Quyết định</th><th>CEO đang phê duyệt</th><th>Vì sao bây giờ</th><th>Điều gì xảy ra tiếp</th><th>Ai sở hữu</th><th>Đầu ra quay lại</th><th>Khi nào xem lại</th><th>KHÔNG ủy quyền</th></tr></thead>
        <tbody>
          <tr><td><strong>1 · Hướng</strong></td><td>Chấp nhận Y tế + Âm nhạc là hai làn kiểm chứng chính có giới hạn</td><td>Nghiên cứu + BP đã chốt; cần chuyển từ phát triển rộng sang hai hướng có logic rõ</td><td>Khởi động kế hoạch 90 ngày tích hợp</td><td>CEO/Ban lãnh đạo + BU/Phụ trách kinh doanh</td><td>Bằng chứng để quyết định gói tiếp theo</td><td>30/60/90 ngày</td><td>Mở rộng đồng loạt mọi phương án khác</td></tr>
          <tr><td><strong>2 · Y tế</strong></td><td>Ủy quyền kiểm chứng thương mại/chuyên môn trước khi xây đáng kể</td><td>Nút thắt là thương mại/chuyên môn, không phải khả năng dựng 3D</td><td>Vận hành bán hàng theo tổ chức + mạng lưới đối tác chuyên môn</td><td>BU/Kinh doanh/Phát triển đối tác</td><td>Tiến tới bằng chứng trả phí đầu tiên</td><td>Hàng tháng; bắt buộc mốc 6 tháng</td><td>Xây nền tảng Y tế rộng</td></tr>
          <tr><td><strong>3 · Âm nhạc</strong></td><td>Cho Pulse Deflector vào chu kỳ prototype có giới hạn tiếp theo</td><td>Nút thắt là sản phẩm/lối chơi; cần bằng chứng trước khi đầu tư sâu</td><td>Xây bản thử có giới hạn + chạy lượt thử có kiểm soát</td><td>Sản phẩm/Thiết kế game/Kỹ thuật</td><td>Cơ chế có thú vị/đáng tin/khác biệt/đáng chơi lại không</td><td>Mốc 90 ngày + từng giai đoạn</td><td>Phát triển toàn bộ game</td></tr>
          <tr><td><strong>4 · Quản trị vốn</strong></td><td>Dùng cơ chế mở nguồn lực theo bằng chứng thay vì phê duyệt chương trình đầy đủ trước</td><td>Chưa có dữ liệu đủ cho kế hoạch lớn; không điền số giả</td><td>Mọi khoản tăng dùng mẫu gói: phạm vi–thời gian–câu hỏi–cách đo–tiếp/dừng</td><td>Tài chính + BU</td><td>Quyết định cấp/không cấp gói tiếp theo có căn cứ</td><td>Mỗi lần xin mở nguồn lực</td><td>Bất kỳ ngân sách định lượng nào chưa có quyết định riêng</td></tr>
          <tr><td><strong>5 · Music World / kỷ luật danh mục</strong></td><td>Giữ Music World độc lập tạm dừng; duy trì các cơ hội khác là lựa chọn có điều kiện, không phải sáng kiến song song</td><td>Tránh sunk cost; bảo vệ giá trị lựa chọn không phân mảnh thực thi</td><td>Chỉ rà soát tài sản tái sử dụng khi có căn cứ; không mở đội thường trực</td><td>BU/Sản phẩm</td><td>Không phát sinh nguồn lực thường trực cho Music World; điều kiện mở lại rõ</td><td>Chỉ khi có bằng chứng mới + quyết định riêng</td><td>Khởi động lại Music World; tuyển dài hạn; danh mục nhạc lớn; quảng cáo lớn</td></tr>
        </tbody>
      </table>
    </div>
    <div class="not-approved">
      <h3>CEO KHÔNG ĐƯỢC ĐỀ NGHỊ PHÊ DUYỆT</h3>
      <ul class="plain-list">
        <li>Nền tảng Y tế quy mô lớn / đội Y tế cố định lớn / giá bán Y tế cụ thể.</li>
        <li>Phát triển toàn bộ Game âm nhạc / giá phát hành cuối / danh mục nhạc bản quyền lớn / ngân sách quảng cáo lớn.</li>
        <li>Tuyển dụng dài hạn tự động.</li>
        <li>Khởi động lại Music World.</li>
        <li>Chọn trước một thủ thuật y khoa cụ thể khi chưa đánh giá khách hàng/chuyên môn.</li>
      </ul>
      <p class="caveat">Phê duyệt kế hoạch KHÔNG phải cam kết hai hướng sẽ thành công. Đây là quyết định cho phép SAVA kiểm chứng hai luận điểm kinh doanh bằng hoạt động bán hàng + phát triển sản phẩm có điều kiện dừng rõ.</p>
    </div>
    <div class="conclusion-block">
      <p><strong>KẾT LUẬN:</strong> CEO đang phê duyệt "quyền học hỏi" có điều kiện — không phải quy mô đầu tư đầy đủ.</p>
      <p><strong>VẬY THÌ SAO?</strong> Cuối cùng: chiếc đồng hồ quản trị phía trước.</p>
    </div>
    <p class="transition">Điều này dẫn đến câu hỏi tiếp theo: <em>nhịp quản trị 90 ngày tới ra sao?</em></p>
  </div>
</section>`;

const R6C25 = `<section id="R6C-25" class="site-section dark" data-section-id="R6C-25">
  <div class="shell">
    <header class="section-header">
      <span class="section-index">24 · ĐỒNG HỒ QUẢN TRỊ</span>
      <h2>90 NGÀY TỚI: AI LÀM GÌ, CẦN BẰNG CHỨNG GÌ, QUYẾT ĐỊNH GÌ</h2>
      <p class="management-question"><strong>CÂU HỎI:</strong> Nhịp quản trị: bây giờ → 30 ngày → 60 ngày → 90 ngày → kỳ rà soát đầu tư tiếp theo. Mỗi làn: ai sở hữu, bằng chứng cần, đầu ra, quyết định quản trị tiếp theo.</p>
    </header>
    <div class="swimlane">
      <div class="rt-head"><span class="rt-lane">LÀN</span><span>BÂY GIỜ</span><span>30 NGÀY</span><span>60 NGÀY</span><span>90 NGÀY</span></div>
      <div class="rt-row"><span class="rt-lane">Y TẾ</span><div><strong>Bắt đầu:</strong> khóa gói, CRM, danh sách tổ chức, đối tác, bộ hồ sơ bán</div><div><strong>Bằng chứng:</strong> gói rõ, danh sách có lý do, tiếp cận bắt đầu</div><div><strong>Bằng chứng:</strong> người thúc đẩy/quyết định/ngân sách rõ, rào cản mua sắm</div><div><strong>Bằng chứng:</strong> cơ hội mạnh nhất tới cam kết trả phí gần nhất; quyết định tiếp/dừng</div></div>
      <div class="rt-row"><span class="rt-lane">ÂM NHẠC</span><div><strong>Bắt đầu:</strong> khóa 3 ý tưởng, bản thử thô Pulse, đo dữ liệu/nhạc an toàn</div><div><strong>Bằng chứng:</strong> người xem hiểu cơ chế; bản thử thô chạy</div><div><strong>Bằng chứng:</strong> nhiều lượt thử có kiểm soát; chơi lại tự nguyện; so sánh VR</div><div><strong>Bằng chứng:</strong> đạt → vertical slice; không đạt → dừng/cất; quyết định gói tiếp</div></div>
    </div>
    <div class="management-clock">
      <p class="clock-final"><strong>Sau 90 ngày, mục tiêu không phải có hai sản phẩm hoàn chỉnh. Mục tiêu là có đủ bằng chứng mới để biết hướng nào xứng đáng nhận thêm vốn, hướng nào cần thu hẹp và hướng nào phải dừng.</strong></p>
      <p class="caveat">Kỳ rà soát đầu tư tiếp theo: sau bằng chứng 90 ngày + rà soát hàng tháng; các mốc 6/12/24/36 tháng theo ngưỡng quản trị.</p>
    </div>
    <p class="transition">Trang tiếp theo: <em>bằng chứng và nguồn gốc chi tiết.</em></p>
  </div>
</section>`;

module.exports = { R6C20, R6C21, R6C22, R6C23, R6C24, R6C25 };
