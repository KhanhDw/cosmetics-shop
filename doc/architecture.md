1. Lớp Miền (src/domain)

- Tạo các thực thể miền (Product, CartItem, User, Order) với logic nghiệp vụ
- Định nghĩa các giao diện kho lưu trữ trừu tượng hóa các thao tác dữ liệu
- Triển khai các trường hợp sử dụng chứa các quy tắc nghiệp vụ thuần túy

2. Lớp Ứng dụng (src/application)

- Tạo các dịch vụ triển khai logic nghiệp vụ (ProductService, CartService, SearchService, v.v.)
- Phát triển các trình xác thực để xác thực đầu vào (ProductValidator)
- Triển khai các DTO và quy tắc nghiệp vụ dành riêng cho ứng dụng

3. Lớp Cơ sở Hạ tầng (src/infrastructure)

- Xây dựng các dịch vụ API mở rộng dịch vụ cơ sở chung (ProductApiService, CartApiService, AuthApiService)
- Tạo một dịch vụ API cơ sở toàn diện với các trình chặn và xử lý lỗi
- Triển khai container tiêm phụ thuộc

4. Lớp Trình bày (src/presentation)

- Tạo các thành phần container kết nối logic nghiệp vụ với Giao diện người dùng (UI)
- Phát triển các hook cho quản lý trạng thái (useProductService, useCartService)
- Xây dựng các thành phần trình bày chỉ tập trung vào các vấn đề về UI

5. Lớp chia sẻ (src/shared)

- Các hằng số, kiểu, thành phần UI và tiện ích tập trung
- Tạo các thành phần UI có thể tái sử dụng (Button, LoadingSpinner, ErrorBoundary)
- Phát triển các tiện ích xử lý lỗi và xác thực toàn diện
