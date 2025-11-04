/about - hiển thị thông tin phiên bản │
│ /agents - Quản lý các tác nhân phụ để phân quyền tác vụ chuyên biệt. │
│ manage - Quản lý các tác nhân phụ hiện có (xem, chỉnh sửa, xóa). │
│ create - Tạo một tác nhân phụ mới với thiết lập được hướng dẫn. │
│ /approval-mode - Xem hoặc thay đổi chế độ phê duyệt cho việc sử dụng công cụ │
│ plan - Chế độ lập kế hoạch - Chỉ phân tích, không sửa đổi tệp hoặc thực thi lệnh │
│ default - Chế độ mặc định - Yêu cầu phê duyệt cho các chỉnh sửa tệp hoặc lệnh shell │
│ auto-edit - Chế độ tự động chỉnh sửa - Tự động phê duyệt các chỉnh sửa tệp │
│ yolo - Chế độ YOLO - Tự động phê duyệt tất cả các công cụ │
│ /auth - Thay đổi phương thức xác thực │
│ /bug - Gửi báo cáo lỗi │
│ /chat - Quản lý lịch sử trò chuyện. │
│ list - Liệt kê các điểm kiểm tra cuộc trò chuyện đã lưu │
│ save - Lưu cuộc trò chuyện hiện tại dưới dạng điểm kiểm tra. Cách sử dụng: /chat save <tag> │
│ resume - Tiếp tục cuộc trò chuyện từ điểm kiểm tra. Cách sử dụng: /chat resume <tag> │
│ delete - Xóa điểm kiểm tra cuộc trò chuyện. Cách sử dụng: /chat delete <tag> │
│ share - Chia sẻ cuộc trò chuyện hiện tại sang tệp markdown hoặc json. Cách sử dụng: │
│ /chat share <file> │
│ /clear - Xóa màn hình và lịch sử cuộc trò chuyện │
│ /compress - Nén ngữ cảnh bằng cách thay thế bằng tóm tắt. │
│ /copy - Sao chép kết quả hoặc đoạn mã cuối cùng vào bảng tạm │
│ /docs - mở toàn bộ tài liệu Qwen Code trong trình duyệt của bạn │
│ /directory - Quản lý thư mục không gian làm việc │
│ add - Thêm thư mục vào không gian làm việc. Sử dụng dấu phẩy để phân tách nhiều đường dẫn │
│ show - Hiển thị tất cả thư mục trong không gian làm việc │
│ /editor - Thiết lập tùy chọn trình soạn thảo bên ngoài │
│ /extensions - Quản lý tiện ích mở rộng │
│ list - Liệt kê các tiện ích mở rộng đang hoạt động │
│ update - Cập nhật tiện ích mở rộng. Cách sử dụng: update <extension-names>|--all │
│ /help - để được trợ giúp về Qwen Code │
│ /ide - quản lý tích hợp IDE │
│ enable - bật tích hợp IDE │
│ status - kiểm tra trạng thái tích hợp IDE │
│ install - cài đặt IDE Companion cần thiết cho VS Code │
│ /init - Phân tích dự án và tạo tệp QWEN.md được tùy chỉnh. │
│ /mcp - liệt kê các máy chủ và công cụ MCP đã được cấu hình hoặc xác thực bằng OAuth │
│ servers │
│ list - Liệt kê các máy chủ và công cụ MCP đã được cấu hình │
│ auth - Xác thực bằng máy chủ MCP đã được OAuth │
│ refresh - Khởi động lại máy chủ MCP. │
│ /memory - Các lệnh tương tác với bộ nhớ. │
│ show - Hiển thị nội dung bộ nhớ hiện tại. │
│ add - Thêm nội dung vào bộ nhớ. Sử dụng --global cho bộ nhớ toàn cục hoặc --project │
│ cho bộ nhớ dự án. │
│ refresh - Làm mới bộ nhớ từ nguồn. │
│ /model - Đổi mô hình cho phiên này │
│ /quit - Thoát khỏi dòng lệnh │
│ /quit-confirm - Hiển thị hộp thoại xác nhận thoát │
│ /stats - kiểm tra số liệu thống kê phiên. Cách sử dụng: /stats [model|tools] │
│ model - Hiển thị số liệu thống kê sử dụng cụ thể của mô hình. │
│ tools - Hiển thị số liệu thống kê sử dụng cụ thể của công cụ. │
│ /summary - Tạo tóm tắt dự án và lưu vào .qwen/PROJECT_SUMMARY.md │
│ /theme - thay đổi giao diện │
│ /tools - liệt kê các công cụ Qwen Code khả dụng. Cách sử dụng: /tools [desc] │
│ /settings - Xem và chỉnh sửa cài đặt Qwen Code │
│ /vim - bật/tắt chế độ vim │
│ /setup-github - Thiết lập GitHub Actions │
│ /terminal-setup - Cấu hình khóa terminal
