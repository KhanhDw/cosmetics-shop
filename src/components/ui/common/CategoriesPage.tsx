import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CategoriesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [featuredSlide, setFeaturedSlide] = useState(0);

  // Animation effect for fade-in
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-element");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("opacity-100");
        el.classList.remove("opacity-0");
      }, index * 100); // Stagger the animations
    });
  }, []);

  // Mock data (Giữ nguyên)
  const categories = [
    {
      id: 1,
      name: "Chăm sóc da",
      count: 142,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Trang điểm",
      count: 89,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      name: "Dưỡng thể",
      count: 67,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "Son môi",
      count: 112,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      name: "Nước hoa",
      count: 78,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 6,
      name: "Chăm sóc tóc",
      count: 56,
      image: "https://picsum.photos/200/300",
    },
  ];
  const featuredProducts = [
    {
      id: 1,
      name: "Serum Vitamin C sáng da",
      price: 890000,
      rating: 4.8,
      image: "https://picsum.photos/200/300",
      discount: 15,
    },
    {
      id: 2,
      name: "Kem nền chống nắng SPF50",
      price: 1290000,
      rating: 4.7,
      image: "https://picsum.photos/200/300",
      discount: 10,
    },
    {
      id: 3,
      name: "Son dưỡng tint màu",
      price: 490000,
      rating: 4.9,
      image: "https://picsum.photos/200/300",
      discount: 0,
    },
    {
      id: 4,
      name: "Mặt nạ ngủ phục hồi",
      price: 790000,
      rating: 4.6,
      image: "https://picsum.photos/200/300",
      discount: 20,
    },
  ];
  const allProducts = [
    {
      id: 1,
      name: "Kem dưỡng ẩm da dầu",
      price: 690000,
      originalPrice: 890000,
      rating: 4.5,
      image: "https://picsum.photos/200/300",
      discount: 25,
    },
    {
      id: 2,
      name: "Sữa rửa mặt dịu nhẹ",
      price: 450000,
      originalPrice: null,
      rating: 4.3,
      image: "https://picsum.photos/200/300",
      discount: 0,
    },
    {
      id: 3,
      name: "Toner hoa hồng cân bằng",
      price: 590000,
      originalPrice: 720000,
      rating: 4.7,
      image: "https://picsum.photos/200/300",
      discount: 18,
    },
    {
      id: 4,
      name: "Serum chống lão hóa",
      price: 1490000,
      originalPrice: null,
      rating: 4.9,
      image: "https://picsum.photos/200/300",
      discount: 0,
    },
    {
      id: 5,
      name: "Kem che khuyết điểm",
      price: 650000,
      originalPrice: 750000,
      rating: 4.6,
      image: "https://picsum.photos/200/300",
      discount: 13,
    },
    {
      id: 6,
      name: "Mascara dài mi",
      price: 590000,
      originalPrice: null,
      rating: 4.4,
      image: "https://picsum.photos/200/300",
      discount: 0,
    },
    {
      id: 7,
      name: "Kem chống nắng vật lý",
      price: 720000,
      originalPrice: 850000,
      rating: 4.8,
      image: "https://picsum.photos/200/300",
      discount: 15,
    },
    {
      id: 8,
      name: "Tẩy trang dầu",
      price: 580000,
      originalPrice: null,
      rating: 4.5,
      image: "https://picsum.photos/200/300",
      discount: 0,
    },
  ];
  const brands = [
    "L'Oréal",
    "Innisfree",
    "The Ordinary",
    "Sulwhasoo",
    "Shiseido",
    "Dior",
    "Chanel",
    "Estée Lauder",
  ];
  const skinTypes = [
    "Da dầu",
    "Da khô",
    "Da hỗn hợp",
    "Da nhạy cảm",
    "Da thường",
  ];
  const statusOptions = ["Khuyến mãi", "Hàng mới", "Bán chạy"];

  // Filter states
  type FilterState = {
    productType: string[];
    brand: string[];
    skinType: string[];
    priceRange: [number, number];
    rating: number;
    status: string[];
  };
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({
    productType: [],
    brand: [],
    skinType: [],
    priceRange: [0, 3000000],
    rating: 0,
    status: [],
  });

  // Function to handle filter changes (Giữ nguyên)
  const handleFilterChange = (
    category: keyof Omit<FilterState, "rating" | "priceRange">,
    value: string
  ) => {
    setSelectedFilters((prev) => {
      const currentValues = [...prev[category]] as string[];
      if (currentValues.includes(value)) {
        return {
          ...prev,
          [category]: currentValues.filter((item) => item !== value),
        };
      } else {
        return {
          ...prev,
          [category]: [...currentValues, value],
        };
      }
    });
  };

  // Function to handle rating changes (Giữ nguyên)
  const handleRatingChange = (rating: number) => {
    setSelectedFilters((prev) => ({
      ...prev,
      rating: rating,
    }));
  };

  // Function to handle price range changes (Giữ nguyên)
  const handlePriceRangeChange = (min: number, max: number) => {
    setSelectedFilters((prev) => ({
      ...prev,
      priceRange: [min, max],
    }));
  };

  // Helper component for star rating
  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-sm ${
            i < Math.floor(rating)
              ? "text-[var(--text-accent)]"
              : "text-[var(--border)]"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {" "}
      {/* Đã loại bỏ dark:bg lặp lại */}
      {/* Header/Banner Section */}
      <div className="relative py-16 mb-12 bg-gradient-to-r from-[var(--bg-secondary)] to-[var(--bg-tertiary)] rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80')] bg-cover opacity-10"></div>
        <div className="container text-center relative z-10 py-6">
          <h1 className="mb-4 text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
            Khám phá các dòng sản phẩm chăm sóc sắc đẹp nổi bật
          </h1>
          <p className="max-w-3xl mx-auto mb-6 text-base text-[var(--text-secondary)]">
            100% chính hãng • Được chuyên gia khuyên dùng • Miễn phí vận chuyển
          </p>
          <button className="px-8 py-3 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-[var(--text-accent)] to-[var(--text-secondary)] rounded-2xl hover:shadow-xl hover:scale-105 transform active:scale-95">
            Khám phá ngay
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="container transition-opacity duration-500 opacity-0 fade-in-element">
        {" "}
        {/* Sử dụng lớp .container tiêu chuẩn */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar - Filters */}
          <div className="lg:w-1/4">
            <div className="sticky p-6 top-20 bg-[var(--card-bg)] border border-[var(--border)] shadow-sm top-4 rounded-2xl">
              {" "}
              {/* Đã loại bỏ dark:bg lặp lại */}
              <h2 className="mb-6 text-xl font-bold text-[var(--text-primary)]">
                Bộ lọc
              </h2>{" "}
              {/* Đã loại bỏ !text lặp lại */}
              {/* Product Type Filter */}
              <div className="mb-6">
                <h3 className="mb-3 font-semibold text-[var(--text-secondary)]">
                  Loại sản phẩm
                </h3>{" "}
                {/* Đã loại bỏ !text lặp lại */}
                <div className="space-y-2">
                  {[
                    "Kem dưỡng",
                    "Serum",
                    "Sữa rửa mặt",
                    "Son môi",
                    "Mascara",
                    "Toner",
                    "Kem nền",
                    "Mặt nạ",
                  ].map((type) => (
                    <div
                      key={type}
                      className="flex items-center"
                    >
                      <input
                        type="checkbox"
                        id={type}
                        checked={selectedFilters.productType.includes(type)}
                        onChange={() => handleFilterChange("productType", type)}
                        className="w-5 h-5 accent-[var(--text-accent)] rounded focus:ring-[var(--text-accent)]"
                      />
                      <label
                        htmlFor={type}
                        className="ml-2 text-[var(--text-secondary)]"
                      >
                        {type}
                      </label>{" "}
                      {/* Đã loại bỏ !text lặp lại */}
                    </div>
                  ))}
                </div>
              </div>
              {/* Brand Filter (Tương tự, tối ưu hóa class) */}
              <div className="mb-6">
                <h3 className="mb-3 font-semibold text-[var(--text-secondary)]">
                  Thương hiệu
                </h3>
                <div className="pr-2 space-y-2 overflow-y-auto max-h-40">
                  {brands.map((brand) => (
                    <div
                      key={brand}
                      className="flex items-center"
                    >
                      <input
                        type="checkbox"
                        id={brand}
                        checked={selectedFilters.brand.includes(brand)}
                        onChange={() => handleFilterChange("brand", brand)}
                        className="w-5 h-5 accent-[var(--text-accent)] rounded focus:ring-[var(--text-accent)]"
                      />
                      <label
                        htmlFor={brand}
                        className="ml-2 text-[var(--text-secondary)]"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              {/* Skin Type Filter (Tương tự, tối ưu hóa class) */}
              <div className="mb-6">
                <h3 className="mb-3 font-semibold text-[var(--text-secondary)]">
                  Loại da
                </h3>
                <div className="space-y-2">
                  {skinTypes.map((skinType) => (
                    <div
                      key={skinType}
                      className="flex items-center"
                    >
                      <input
                        type="checkbox"
                        id={skinType}
                        checked={selectedFilters.skinType.includes(skinType)}
                        onChange={() =>
                          handleFilterChange("skinType", skinType)
                        }
                        className="w-5 h-5 accent-[var(--text-accent)] rounded focus:ring-[var(--text-accent)]"
                      />
                      <label
                        htmlFor={skinType}
                        className="ml-2 text-[var(--text-secondary)]"
                      >
                        {skinType}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              {/* Price Range Filter (Tương tự, tối ưu hóa class) */}
              <div className="mb-6">
                <h3 className="mb-3 font-semibold text-[var(--text-secondary)]">
                  Khoảng giá
                </h3>
                <div className="px-1">
                  <input
                    type="range"
                    min="0"
                    max="5000000"
                    step="100000"
                    value={selectedFilters.priceRange[1]}
                    onChange={(e) =>
                      handlePriceRangeChange(0, parseInt(e.target.value))
                    }
                    className="w-full h-2 bg-[var(--bg-secondary)] rounded-lg appearance-none cursor-pointer accent-[var(--text-accent)]"
                  />
                  <div className="flex justify-between mt-1 text-sm text-[var(--text-secondary)]">
                    <span>0₫</span>
                    <span>
                      {selectedFilters.priceRange[1].toLocaleString("vi-VN")}₫
                    </span>
                  </div>
                </div>
              </div>
              {/* Rating Filter (Tương tự, tối ưu hóa class) */}
              <div className="mb-6">
                <h3 className="mb-3 font-semibold text-[var(--text-secondary)]">
                  Đánh giá sao
                </h3>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="rating4"
                    name="rating"
                    checked={selectedFilters.rating === 4}
                    onChange={() => handleRatingChange(4)}
                    className="w-5 h-5 accent-[var(--text-accent)]"
                  />
                  <label
                    htmlFor="rating4"
                    className="ml-2 text-[var(--text-secondary)]"
                  >
                    4★ trở lên
                  </label>
                </div>
                <div className="flex items-center mt-2">
                  <input
                    type="radio"
                    id="rating5"
                    name="rating"
                    checked={selectedFilters.rating === 5}
                    onChange={() => handleRatingChange(5)}
                    className="w-5 h-5 accent-[var(--text-accent)]"
                  />
                  <label
                    htmlFor="rating5"
                    className="ml-2 text-[var(--text-secondary)]"
                  >
                    5★
                  </label>
                </div>
              </div>
              {/* Status Filter (Tương tự, tối ưu hóa class) */}
              <div>
                <h3 className="mb-3 font-semibold text-[var(--text-secondary)]">
                  Tình trạng
                </h3>
                <div className="space-y-2">
                  {statusOptions.map((status) => (
                    <div
                      key={status}
                      className="flex items-center"
                    >
                      <input
                        type="checkbox"
                        id={status}
                        checked={selectedFilters.status.includes(status)}
                        onChange={() => handleFilterChange("status", status)}
                        className="w-5 h-5 accent-[var(--text-accent)] rounded focus:ring-[var(--text-accent)]"
                      />
                      <label
                        htmlFor={status}
                        className="ml-2 text-[var(--text-secondary)]"
                      >
                        {status}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Right Side */}
          <div className="lg:w-3/4">
            {/* Category Grid */}
            <div className="mb-10 transition-opacity duration-500 delay-100 opacity-0 fade-in-element">
              <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)] text-center">
                Danh mục sản phẩm
              </h2>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {Array.from({
                      length: Math.ceil(categories.length / 3),
                    }).map((_, slideIndex) => (
                      <div
                        key={slideIndex}
                        className="min-w-full flex gap-6 p-4"
                      >
                        {categories
                          .slice(slideIndex * 3, (slideIndex + 1) * 3)
                          .map((category) => (
                            <div
                              key={category.id}
                              className="w-1/3 px-2"
                            >
                              <Link
                                to={`/category/${category.id}`}
                                className="block overflow-hidden transition-all duration-500 transform bg-[var(--card-bg)] shadow-md rounded-2xl group hover:shadow-xl hover:-translate-y-2 border border-[var(--border)] h-full"
                              >
                                <div className="flex items-center justify-center h-48 bg-gradient-to-br from-[var(--bg-tertiary)] to-[var(--bg-secondary)] relative overflow-hidden">
                                  <div className="w-24 h-24 bg-gradient-to-br from-[var(--text-accent)] to-[var(--text-secondary)] rounded-full opacity-20 absolute"></div>
                                  <div className="w-16 h-16 bg-[var(--bg-secondary)] border-2 border-dashed rounded-xl relative z-10" />
                                </div>
                                <div className="p-5">
                                  <h3 className="mb-3 text-base font-bold text-[var(--text-primary)] text-center line-clamp-2 h-12 flex items-center justify-center">
                                    {category.name}
                                  </h3>
                                  <div className="flex items-center justify-between">
                                    <p className="text-xs text-[var(--text-secondary)] bg-[var(--bg-tertiary)] px-2.5 py-1 rounded-full">
                                      {category.count} sản phẩm
                                    </p>
                                    <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-[var(--text-accent)] to-[var(--text-secondary)] rounded-full">
                                      Khám phá
                                    </span>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Carousel controls */}
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => Math.max(prev - 1, 0))
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[var(--text-primary)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setCurrentSlide((prev) =>
                      Math.min(prev + 1, Math.ceil(categories.length / 3) - 1)
                    )
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label="Next slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[var(--text-primary)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Carousel indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                  {Array.from({ length: Math.ceil(categories.length / 3) }).map(
                    (_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentSlide === index
                            ? "bg-[var(--text-accent)] w-6"
                            : "bg-[var(--bg-tertiary)] hover:bg-[var(--text-secondary)]"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Featured Products */}
            <div className="mb-10 transition-opacity duration-500 delay-200 opacity-0 fade-in-element">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <h2 className="text-xl font-bold text-[var(--text-primary)]">
                  Sản phẩm được yêu thích nhất
                </h2>
                <button className="px-5 py-2.5 font-medium text-white bg-gradient-to-r from-[var(--text-accent)] to-[var(--text-secondary)] rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm">
                  Xem tất cả
                </button>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${featuredSlide * 100}%)`,
                    }}
                  >
                    {Array.from({
                      length: Math.ceil(featuredProducts.length / 3),
                    }).map((_, slideIndex) => (
                      <div
                        key={slideIndex}
                        className="min-w-full flex gap-6 p-4"
                      >
                        {featuredProducts
                          .slice(slideIndex * 3, (slideIndex + 1) * 3)
                          .map((product) => (
                            <div
                              key={product.id}
                              className="w-1/3 px-2"
                            >
                              <div className="overflow-hidden transition-all duration-500 transform bg-[var(--card-bg)] shadow-md rounded-2xl group hover:shadow-xl hover:-translate-y-2 border border-[var(--border)] h-full">
                                <div className="relative">
                                  <img
                                    src={product.image}
                                    alt={product.name}
                                    className="object-contain w-full h-64 p-4 bg-gradient-to-b from-[var(--bg-tertiary)] to-[var(--bg-secondary)]"
                                  />
                                  {product.discount > 0 && (
                                    <div className="absolute px-2.5 py-1 text-xs font-bold text-white bg-rose-500 rounded-full top-3 left-3 uppercase tracking-wide shadow-md">
                                      -{product.discount}%
                                    </div>
                                  )}
                                  <button className="absolute p-2.5 transition-all duration-300 transform rounded-full shadow-lg opacity-0 bg-[var(--text-accent)] bottom-3 right-3 text-white group-hover:opacity-100 group-hover:scale-110">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-4 h-4"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4v16m8-8H4"
                                      />
                                    </svg>
                                  </button>
                                </div>
                                <div className="p-4">
                                  <h3 className="mb-3 text-base font-bold text-[var(--text-primary)] line-clamp-2 ">
                                    {product.name}
                                  </h3>
                                  <div className="flex items-center justify-between mb-3">
                                    <StarRating rating={product.rating} />
                                    <span className="text-xs text-[var(--text-secondary)]">
                                      ({product.rating})
                                    </span>
                                  </div>
                                  <div className="flex flex-col">
                                    <div className="flex items-center justify-between mb-3">
                                      <span className="text-lg font-bold text-[var(--text-accent)]">
                                        {product.price.toLocaleString("vi-VN")}₫
                                      </span>
                                      {product.discount > 0 && (
                                        <span className="text-xs text-[var(--text-secondary)] line-through">
                                          {(
                                            (product.price * 100) /
                                            (100 - product.discount)
                                          ).toLocaleString("vi-VN")}
                                          ₫
                                        </span>
                                      )}
                                    </div>
                                    <button className="w-full py-2.5 font-medium text-white bg-gradient-to-r from-[var(--text-accent)] to-[var(--text-secondary)] rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02] text-sm">
                                      Thêm vào giỏ
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Carousel controls */}
                <button
                  onClick={() =>
                    setFeaturedSlide((prev) => Math.max(prev - 1, 0))
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[var(--text-primary)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setFeaturedSlide((prev) =>
                      Math.min(
                        prev + 1,
                        Math.ceil(featuredProducts.length / 3) - 1
                      )
                    )
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label="Next slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[var(--text-primary)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Carousel indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                  {Array.from({
                    length: Math.ceil(featuredProducts.length / 3),
                  }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setFeaturedSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        featuredSlide === index
                          ? "bg-[var(--text-accent)] w-6"
                          : "bg-[var(--bg-tertiary)] hover:bg-[var(--text-secondary)]"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Sort & Pagination */}
            <div className="flex flex-col items-center justify-between gap-3 mb-8 md:flex-row text-sm">
              <div>
                <p className="text-[var(--text-secondary)]">
                  Hiển thị <span className="font-semibold">24</span> trên{" "}
                  <span className="font-semibold">128</span> sản phẩm
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <label
                    htmlFor="sort"
                    className="mr-2 text-[var(--text-secondary)]"
                  >
                    Sắp xếp:
                  </label>
                  <select
                    id="sort"
                    className="px-2.5 py-1.5 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)] focus:border-[var(--text-accent)] bg-[var(--card-bg)] text-[var(--text-primary)] text-sm"
                  >
                    {" "}
                    {/* Đã loại bỏ dark:bg và !text lặp lại */}
                    <option>Mặc định</option>
                    <option>Giá tăng dần</option>
                    <option>Giá giảm dần</option>
                    <option>Bán chạy nhất</option>
                    <option>Đánh giá cao nhất</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="show"
                    className="mr-2 text-[var(--text-secondary)]"
                  >
                    Hiển thị:
                  </label>
                  <select
                    id="show"
                    className="px-2.5 py-1.5 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)] focus:border-[var(--text-accent)] bg-[var(--card-bg)] text-[var(--text-primary)] text-sm"
                  >
                    {" "}
                    {/* Đã loại bỏ dark:bg và !text lặp lại */}
                    <option>12</option>
                    <option>24</option>
                    <option>36</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product List Grid */}
            <div className="grid grid-cols-1 gap-6 mb-16 transition-opacity duration-500 delay-300 opacity-0 sm:grid-cols-2 lg:grid-cols-3 fade-in-element">
              {allProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col justify-between h-full overflow-hidden transition-all duration-500 transform bg-[var(--card-bg)] shadow-md rounded-2xl group hover:shadow-xl hover:-translate-y-2 border border-[var(--border)]"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-contain w-full h-64 p-4 bg-gradient-to-b from-[var(--bg-tertiary)] to-[var(--bg-secondary)]"
                    />
                    {product.discount > 0 && (
                      <div className="absolute px-2.5 py-1 text-xs font-bold text-white bg-rose-500 rounded-full top-3 left-3 uppercase tracking-wide shadow-md">
                        -{product.discount}%
                      </div>
                    )}
                    <button className="absolute p-2.5 transition-all duration-300 transform rounded-full shadow-lg opacity-0 bg-[var(--text-accent)] bottom-3 right-3 text-white group-hover:opacity-100 group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* PHẦN DƯỚI */}
                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <h3 className="mb-3 text-base font-bold text-[var(--text-primary)] line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="flex flex-col justify-between flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <StarRating rating={product.rating} />
                        <span className="text-xs text-[var(--text-secondary)]">
                          ({product.rating})
                        </span>
                      </div>

                      <div className="flex flex-col mt-auto">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-lg font-bold text-[var(--text-accent)]">
                            {product.price.toLocaleString("vi-VN")}₫
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-[var(--text-secondary)] line-through">
                              {product.originalPrice.toLocaleString("vi-VN")}₫
                            </span>
                          )}
                        </div>

                        <button className="w-full py-2.5 font-medium text-white bg-gradient-to-r from-[var(--text-accent)] to-[var(--text-secondary)] rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02] text-sm">
                          Thêm vào giỏ
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mb-12">
              <div className="flex space-x-1.5">
                {/* Tối ưu hóa class cho button phân trang */}
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`flex items-center justify-center w-10 h-10 font-bold text-base rounded-lg transition-all duration-300
                            ${
                              page === 1
                                ? "bg-[var(--text-accent)] text-white shadow-lg"
                                : "text-[var(--text-primary)] bg-[var(--card-bg)] border border-[var(--border)] hover:bg-[var(--text-accent)] hover:text-white hover:shadow-md"
                            }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="flex items-center justify-center w-10 h-10 font-bold text-base text-[var(--text-primary)] bg-[var(--card-bg)] border border-[var(--border)] rounded-lg hover:bg-[var(--text-accent)] hover:text-white hover:shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Promo Section */}
            <div className="p-8 mb-12 text-center transition-opacity duration-500 border border-[var(--border)] shadow-lg opacity-0 bg-gradient-to-r from-[var(--bg-tertiary)] via-[var(--bg-primary)] to-[var(--bg-secondary)] rounded-3xl fade-in-element delay-400 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80')] bg-cover opacity-5"></div>
              <div className="relative z-10">
                <h3 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
                  🌸 Bộ dưỡng da toàn diện – giảm 30% cho mùa đông
                </h3>
                <p className="mb-6 text-base text-[var(--text-secondary)] max-w-xl mx-auto">
                  Trải nghiệm làn da mịn màng, rạng rỡ chỉ có trong combo chăm
                  sóc da cao cấp
                </p>
                <button className="px-8 py-3 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-[var(--text-accent)] to-[var(--text-secondary)] rounded-2xl hover:shadow-xl hover:scale-105 transform active:scale-95">
                  Khám phá ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
