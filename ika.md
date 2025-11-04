xóa bỏ button này trong src\pages\AllNotificationsPage.tsx và xóa các cái liên quan đến nút này .
<button className="px-3 py-1 text-sm rounded-full bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]/70">
{t('notifications.details')}
</button>
và sau đó thực hiện nhiệm vụ là thiết kế UI admin dựa theo mô tả tiếp theo:

MỤC TIÊU GIAO DIỆN ADMIN

Giao diện Admin là trung tâm điều hành toàn bộ hệ thống bán mỹ phẩm, nên phải:

Quản lý được sản phẩm, đơn hàng, tồn kho, khuyến mãi, khách hàng, nhân viên

Có thống kê nhanh, biểu đồ, báo cáo trực quan

Có UI CRUD hoàn chỉnh (thêm, sửa, xóa, lọc, tìm kiếm)

Hỗ trợ upload ảnh, import/export dữ liệu, xác nhận hành động

Giao diện hiện đại, sáng gọn, tone trắng/xanh hoặc hồng nhẹ, rõ ràng

🧩 CẤU TRÚC CHUNG CỦA ADMIN UI
1️⃣ Layout tổng thể

Sidebar (menu trái): gồm các module chính

Dashboard
├── Sản phẩm
├── Danh mục & Thương hiệu
├── Đơn hàng
├── Khách hàng
├── Nhân viên
├── Khuyến mãi
├── Báo cáo & Thống kê
├── Cấu hình hệ thống

Topbar (header):

Ô tìm kiếm nhanh

Thông báo (bell icon)

Avatar admin + menu (profile, logout)

Content area: vùng chính hiển thị nội dung từng trang

Modal / Drawer: popup thêm/sửa sản phẩm, xác nhận xóa, xem chi tiết đơn

🛍️ MODULE 1 — QUẢN LÝ SẢN PHẨM (Product Management)
🎯 Mục tiêu:

Quản trị viên và nhân viên có thể:

Xem danh sách sản phẩm

Lọc theo danh mục, thương hiệu, giá, trạng thái tồn kho

Thêm/sửa/xóa sản phẩm

Quản lý hình ảnh, giá, mô tả, biến thể, hạn sử dụng

💻 UI cần có:
A. Product List Page

Thanh filter (Dropdown danh mục, thương hiệu, input tìm kiếm)

Bảng dữ liệu (table) gồm cột:
| Ảnh | Tên sản phẩm | Danh mục | Giá | Tồn kho | Trạng thái | Thao tác |

Các nút:

➕ “Thêm sản phẩm”

✏️ “Sửa”

🗑️ “Xóa”

👁️ “Xem chi tiết”

Pagination

B. Product Form (Add/Edit)

Input: tên, slug, mô tả ngắn, mô tả chi tiết (textarea)

Upload ảnh (main + gallery)

Select danh mục, thương hiệu

Input: giá bán, giá gốc, tồn kho, hạn sử dụng

Field biến thể (VD: màu sắc, dung tích — có thể thêm dòng)

Toggle trạng thái (hiển thị / ẩn)

Nút Lưu / Hủy

C. Product Detail Modal

Hiển thị thông tin chi tiết + ảnh + tồn kho + trạng thái

Dùng cho chức năng “Xem nhanh”

🧴 MODULE 2 — DANH MỤC & THƯƠNG HIỆU
🎯 Mục tiêu:

Quản lý phân loại sản phẩm để hỗ trợ filter trên site khách hàng.

💻 UI:
A. Category List

Bảng: Tên danh mục | Mô tả | Thứ tự hiển thị | Trạng thái | Thao tác

Nút “Thêm danh mục”

B. Brand List

Bảng: Logo | Tên thương hiệu | Quốc gia | Trạng thái | Thao tác

Nút “Thêm thương hiệu”

C. Form thêm/sửa

Input: tên, mô tả, slug

Upload logo

Toggle trạng thái hiển thị

🧾 MODULE 3 — QUẢN LÝ ĐƠN HÀNG (Order Management)
🎯 Mục tiêu:

Theo dõi toàn bộ quá trình đặt hàng → giao hàng → hoàn tất.

💻 UI:
A. Order List

Filter: trạng thái đơn (Mới, Đang xử lý, Giao hàng, Hoàn tất, Hủy)

Bảng: Mã đơn | Khách hàng | Tổng tiền | Ngày tạo | Trạng thái | Thao tác

Nút: “Xem chi tiết”, “Cập nhật trạng thái”, “In hóa đơn”

B. Order Detail Modal/Page

Thông tin khách hàng: tên, sđt, địa chỉ

Danh sách sản phẩm trong đơn (tên, giá, số lượng)

Tổng tiền, phí ship, phương thức thanh toán

Dropdown thay đổi trạng thái đơn

Nút “Cập nhật”, “In hóa đơn PDF”

💰 MODULE 4 — THANH TOÁN & DOANH THU
💻 UI:

Dashboard mini:

Tổng doanh thu theo ngày/tháng

Biểu đồ doanh thu (Recharts LineChart / BarChart)

Tổng đơn hàng, đơn hủy, tỷ lệ COD / online

Lọc theo ngày, xuất Excel

🧍 MODULE 5 — KHÁCH HÀNG (Customers)
💻 UI:
A. Customer List

Tên | Email | Điện thoại | Tổng đơn hàng | Điểm tích lũy | Trạng thái | Thao tác

Filter theo hoạt động (active / inactive)

B. Customer Detail

Lịch sử mua hàng

Tổng chi tiêu

Đơn gần nhất

Nút “Khóa / Mở tài khoản”

Gửi email khuyến mãi

👩‍💼 MODULE 6 — NHÂN VIÊN (Staff)
💻 UI:

Bảng: Avatar | Tên | Vai trò | Email | Quyền | Trạng thái | Thao tác

Nút “Thêm nhân viên”

Form thêm/sửa: tên, email, quyền hạn, trạng thái

Checkbox phân quyền chi tiết (xem / sửa / xóa)

🎁 MODULE 7 — KHUYẾN MÃI (Promotions)
💻 UI:

Bảng: Tên chương trình | Mã giảm giá | Ngày bắt đầu/kết thúc | Giảm (%) | Trạng thái

Form: nhập tên, mã, điều kiện áp dụng, thời gian, giảm %, chọn sản phẩm áp dụng

Toggle bật/tắt chương trình

📊 MODULE 8 — BÁO CÁO & THỐNG KÊ
💻 UI:

Dashboard biểu đồ:

Doanh thu theo tháng

Sản phẩm bán chạy

Top khách hàng

Biểu đồ tỷ lệ đơn hàng theo trạng thái

Bộ lọc thời gian, export PDF/Excel

⚙️ MODULE 9 — CẤU HÌNH HỆ THỐNG
💻 UI:

Tab 1: Thông tin cửa hàng (tên, địa chỉ, logo)

Tab 2: Phí vận chuyển (theo khu vực)

Tab 3: Cổng thanh toán (VNPay, Momo)

Tab 4: Email, SMS, thông báo

Nút “Lưu cấu hình”

🔔 MODULE 10 — THÔNG BÁO & HOẠT ĐỘNG
💻 UI:

Bảng log hành động (ai làm gì, lúc nào)

Thông báo đơn mới, bình luận mới

Popup notification / toast

🧱 Tổng kết giao diện cần code:
Loại component Ví dụ
Table Danh sách sản phẩm, đơn hàng, khách hàng
Form Thêm/sửa sản phẩm, nhân viên, khuyến mãi
Modal / Drawer Xác nhận xóa, xem chi tiết
Dashboard Cards Tổng quan doanh thu, sản phẩm
Charts Doanh thu, tỷ lệ đơn, top sản phẩm
Filter/Search Trên bảng danh sách
Pagination Cho bảng dữ liệu lớn
Upload Ảnh sản phẩm, logo thương hiệu
Tabs Thông tin chi tiết / cấu hình
Toast/Alert Thông báo thành công / lỗi
🎨 Thiết kế UI đề xuất

Tone sáng, nhã nhặn: trắng – hồng pastel – xám nhạt

Font: Inter / Nunito / Playfair

Bo góc lớn: rounded-xl, bóng nhẹ shadow-md

Khoảng cách rộng, UI thoáng

Dễ đọc, dễ thao tác (ưu tiên form và table rõ ràng)

Các nút hành động nhất quán:

“Thêm” → màu hồng (bg-pink-500 hover:bg-pink-600)

“Xóa” → đỏ

“Sửa” → xanh lam
