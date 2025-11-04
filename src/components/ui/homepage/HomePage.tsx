
import { Link } from "react-router-dom";

// Mock data
const categories = [
  {
    id: 1,
    name: "Chăm sóc da",
    description:
      "Khám phá các sản phẩm chăm sóc da chất lượng cao phù hợp với mọi loại da",
    image:
      "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Trang điểm",
    description:
      "Các sản phẩm trang điểm đa dạng từ tự nhiên đến đậm chất cá tính",
    image:
      "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Dưỡng ẩm",
    description:
      "Giữ làn da luôn mềm mại và tươi tắn với các sản phẩm dưỡng ẩm hiệu quả",
    image:
      "https://picsum.photos/200/300",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)]">
      {/* Header */}
      <header className="bg-[var(--card-bg)] dark:bg-[var(--card-bg)] shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-[var(--text-accent)] !text-[var(--text-accent)]">BeautyShop</h1>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-[color:var(--text-secondary)] !text-[color:var(--text-secondary)] hover:text-[color:var(--text-accent)] !hover:text-[color:var(--text-accent)]"
              >
                Trang chủ
              </a>
              <a
                href="#"
                className="text-[color:var(--text-secondary)] !text-[color:var(--text-secondary)] hover:text-[color:var(--text-accent)] !hover:text-[color:var(--text-accent)] font-semibold"
              >
                Danh mục
              </a>
              <a
                href="#"
                className="text-[color:var(--text-secondary)] !text-[color:var(--text-secondary)] hover:text-[color:var(--text-accent)] !hover:text-[color:var(--text-accent)]"
              >
                Khuyến mãi
              </a>
              <a
                href="#"
                className="text-[color:var(--text-secondary)] !text-[color:var(--text-secondary)] hover:text-[color:var(--text-accent)] !hover:text-[color:var(--text-accent)]"
              >
                Liên hệ
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="border border-[var(--border)] rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)] !focus:ring-[var(--text-accent)] bg-[var(--card-bg)] text-[var(--text-primary)]"
              />
              <button className="absolute right-3 top-2 text-[var(--text-secondary)] !text-[var(--text-secondary)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-[color:var(--text-secondary)] !text-[color:var(--text-secondary)] hover:text-[color:var(--text-accent)] !hover:text-[color:var(--text-accent)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button className="p-2 text-[color:var(--text-secondary)] !text-[color:var(--text-secondary)] hover:text-[color:var(--text-accent)] !hover:text-[color:var(--text-accent)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span className="absolute top-1 right-1 bg-[color:var(--text-accent)] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="p-2 text-[color:var(--text-secondary)] !text-[color:var(--text-secondary)] hover:text-[color:var(--text-accent)] !hover:text-[color:var(--text-accent)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-[color:var(--text-accent)]/30 to-[color:var(--text-secondary)]/30 h-96 flex items-center justify-center">
        <div className="text-center z-10 text-white p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Làn da rạng rỡ bắt đầu từ đây
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Khám phá bộ sưu tập mỹ phẩm chất lượng cao, phù hợp với mọi loại da
          </p>
          <button className="bg-[color:var(--bg-primary)] text-[color:var(--text-accent)] !text-[color:var(--text-accent)] font-bold py-3 px-8 rounded-full hover:bg-[color:var(--bg-secondary)] transition-colors duration-300">
            Khám phá ngay
          </button>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-[color:var(--text-primary)] !text-[color:var(--text-primary)] mb-12">
          Danh mục sản phẩm
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              to={`/category/${category.id}`}
              key={category.id}
              className="group block bg-[color:var(--card-bg)] dark:bg-[color:var(--card-bg)] rounded-2xl shadow-sm overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative h-64">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                  <p className="text-[color:var(--text-accent)]/30 mt-1">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="bg-[color:var(--bg-primary)] dark:bg-[color:var(--bg-primary)] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[color:var(--text-primary)] !text-[color:var(--text-primary)] mb-8">
            Sản phẩm nổi bật
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Featured products would go here */}
            <div className="bg-[color:var(--bg-secondary)] dark:bg-[color:var(--bg-secondary)] rounded-xl p-4 text-center">
              <div className="bg-[color:var(--bg-tertiary)] border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
              <h3 className="font-medium text-[color:var(--text-primary)] !text-[color:var(--text-primary)] mt-3">Sản phẩm 1</h3>
              <p className="text-[color:var(--text-accent)] !text-[color:var(--text-accent)] font-bold mt-1">350,000₫</p>
            </div>
            <div className="bg-[color:var(--bg-secondary)] dark:bg-[color:var(--bg-secondary)] rounded-xl p-4 text-center">
              <div className="bg-[color:var(--bg-tertiary)] border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
              <h3 className="font-medium text-[color:var(--text-primary)] !text-[color:var(--text-primary)] mt-3">Sản phẩm 2</h3>
              <p className="text-[color:var(--text-accent)] !text-[color:var(--text-accent)] font-bold mt-1">299,000₫</p>
            </div>
            <div className="bg-[color:var(--bg-secondary)] dark:bg-[color:var(--bg-secondary)] rounded-xl p-4 text-center">
              <div className="bg-[color:var(--bg-tertiary)] border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
              <h3 className="font-medium text-[color:var(--text-primary)] !text-[color:var(--text-primary)] mt-3">Sản phẩm 3</h3>
              <p className="text-[color:var(--text-accent)] !text-[color:var(--text-accent)] font-bold mt-1">450,000₫</p>
            </div>
            <div className="bg-[color:var(--bg-secondary)] dark:bg-[color:var(--bg-secondary)] rounded-xl p-4 text-center">
              <div className="bg-[color:var(--bg-tertiary)] border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
              <h3 className="font-medium text-[color:var(--text-primary)] !text-[color:var(--text-primary)] mt-3">Sản phẩm 4</h3>
              <p className="text-[color:var(--text-accent)] !text-[color:var(--text-accent)] font-bold mt-1">399,000₫</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[color:var(--bg-tertiary)] dark:bg-[color:var(--bg-tertiary)] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BeautyShop</h3>
              <p className="text-[color:var(--text-secondary)] !text-[color:var(--text-secondary)]">
                Nơi bạn tìm thấy vẻ đẹp tự nhiên của mình
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Liên kết</h4>
              <ul className="space-y-2 text-[color:var(--text-secondary)] !text-[color:var(--text-secondary)]">
                <li>
                  <a
                    href="#"
                    className="hover:text-[color:var(--text-accent)] !hover:text-[color:var(--text-accent)]"
                  >
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[color:var(--text-accent)] !hover:text-[color:var(--text-accent)]"
                  >
                    Sản phẩm
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[color:var(--text-accent)] !hover:text-[color:var(--text-accent)]"
                  >
                    Khuyến mãi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[color:var(--text-accent)] !hover:text-[color:var(--text-accent)]"
                  >
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Danh mục</h4>
              <ul className="space-y-2 text-[color:var(--text-secondary)] !text-[color:var(--text-secondary)]">
                <li>
                  <a
                    href="#"
                    className="hover:text-[color:var(--text-accent)] !hover:text-[color:var(--text-accent)]"
                  >
                    Chăm sóc da
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[color:var(--text-accent)] !hover:text-[color:var(--text-accent)]"
                  >
                    Trang điểm
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[color:var(--text-accent)] !hover:text-[color:var(--text-accent)]"
                  >
                    Dưỡng ẩm
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[color:var(--text-accent)] !hover:text-[color:var(--text-accent)]"
                  >
                    Tẩy tế bào chết
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Liên hệ</h4>
              <ul className="space-y-2 text-[color:var(--text-secondary)] !text-[color:var(--text-secondary)]">
                <li>123 Đường ABC, TP.HCM</li>
                <li>0123 456 789</li>
                <li>info@beautyshop.vn</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[color:var(--border)] mt-8 pt-8 text-center text-[color:var(--text-secondary)] !text-[color:var(--text-secondary)]">
            <p>© 2023 BeautyShop. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
