import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product, Review } from "@/types";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock product data (in a real app, this would come from an API based on the id)
  const product: Product = {
    id: id ? parseInt(id) : 1,
    name: "Kem dưỡng trắng da ban đêm - White Night Cream",
    description:
      "Kem dưỡng trắng da ban đêm cao cấp, giúp làm sáng và phục hồi da trong khi bạn ngủ.",
    price: 1290000,
    originalPrice: 1590000,
    image: "https://picsum.photos/200/300", // Adding the missing image property
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    category: "Dưỡng da",
    sizes: ["30ml", "50ml"],
    colors: [],
    brand: "Premium Beauty",
    shipping: "Giao hàng toàn quốc",
    guarantee: "Chính hãng 100%",
    exchange: "Đổi trả trong 7 ngày",
    descriptionDetails: {
      product:
        "Kem dưỡng trắng da ban đêm White Night Cream là sản phẩm cao cấp được chiết xuất từ các thành phần thiên nhiên như tinh chất ngọc trai, vitamin C và axit hyaluronic, giúp làm sáng da, mờ thâm nám và dưỡng ẩm sâu trong khi bạn ngủ. Với công nghệ Micro-Luminance độc quyền, sản phẩm giúp làn da trở nên mịn như lụa, tươi mới mỗi sáng thức dậy.",
      usage:
        "Sau bước làm sạch da, lấy một lượng kem vừa đủ thoa đều lên mặt và cổ. Massage nhẹ nhàng cho đến khi kem thẩm thấu hoàn toàn. Sử dụng vào mỗi buổi tối trước khi đi ngủ để đạt hiệu quả tốt nhất.",
      ingredients:
        "Tinh chất ngọc trai: giúp làm sáng da, giảm thâm nám\nVitamin C: chống oxy hóa, làm đều màu da\nAxit hyaluronic: dưỡng ẩm sâu, giữ ẩm cho da\nNiacinamide: làm mờ vết thâm, cải thiện kết cấu da\nChiết xuất trà xanh: chống viêm, bảo vệ da khỏi tác hại môi trường",
      storage:
        "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đậy kín nắp sau khi sử dụng. Hạn sử dụng 24 tháng kể từ ngày sản xuất.",
    },
  };

  // Mock related products
  const relatedProducts: Product[] = [
    {
      id: 2,
      name: "Serum Vitamin C sáng da",
      price: 990000,
      rating: 4.7,
      image: "https://picsum.photos/200/300",
      category: "Serum",
    },
    {
      id: 3,
      name: "Toner hoa hồng cân bằng da",
      price: 590000,
      rating: 4.5,
      image: "https://picsum.photos/200/300",
      category: "Toner",
    },
    {
      id: 4,
      name: "Mặt nạ ngủ phục hồi da",
      price: 890000,
      rating: 4.9,
      image: "https://picsum.photos/200/300",
      category: "Mặt nạ",
    },
    {
      id: 5,
      name: "Sữa rửa mặt dịu nhẹ",
      price: 450000,
      rating: 4.6,
      image: "https://picsum.photos/200/300",
      category: "Sữa rửa mặt",
    },
  ];

  // Mock reviews
  const reviews: Review[] = [
    {
      id: 1,
      user: "Nguyễn Thị Mai",
      date: "2023-10-15",
      rating: 5,
      content:
        "Sản phẩm tuyệt vời! Da mình sáng và mịn hơn rõ rệt sau 2 tuần sử dụng.",
    },
    {
      id: 2,
      user: "Trần Thị Hoa",
      date: "2023-10-10",
      rating: 4,
      content:
        "Kem thấm nhanh, không gây bết dính. Dùng được 1 tháng rồi, thấy da đều màu hơn.",
    },
    {
      id: 3,
      user: "Lê Thị Hương",
      date: "2023-10-05",
      rating: 5,
      content:
        "Rất hài lòng với chất lượng sản phẩm. Đã giới thiệu cho nhiều bạn bè.",
    },
  ];

  // State for quantity
  const [quantity, setQuantity] = useState(1);
  // State for selected image
  const [selectedImage, setSelectedImage] = useState(0);
  // State for active tab
  const [activeTab, setActiveTab] = useState("description");

  // Functions for quantity control
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

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

  return (
    <div className="min-h-screen bg-[color:var(--bg-primary)] text-[color:var(--text-primary)]">
      {/* Breadcrumb */}
      <div className="bg-[color:var(--card-bg)] py-4 px-6 border-b border-[color:var(--border)]">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm font-light">
            <ol className="flex items-center space-x-2">
              <li>
                <a
                  href="/"
                  className="text-[color:var(--text-accent)] hover:underline"
                >
                  Trang chủ
                </a>
              </li>
              <li className="text-[color:var(--text-secondary)]">/</li>
              <li>
                <a
                  href="/category"
                  className="text-[color:var(--text-accent)] hover:underline"
                >
                  Dưỡng da
                </a>
              </li>
              <li className="text-[color:var(--text-secondary)]">/</li>
              <li className="text-[color:var(--text-secondary)]">Kem dưỡng trắng da ban đêm</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Product Showcase Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 fade-in-element opacity-0 transition-opacity duration-500">
          {/* Product Images */}
          <div>
            <div className="bg-[color:var(--card-bg)] p-6 rounded-xl shadow-sm">
              <img
                src={product.images?.[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-auto object-contain rounded-lg"
                width="400"
                height="400"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-3 mt-4 overflow-x-auto pb-2" aria-label="Image thumbnails">
              {product.images?.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                    selectedImage === index
                      ? "border-pink-400 ring-2 ring-pink-100"
                      : "border-gray-200"
                  } transition-all duration-200`}
                  aria-label={`View image ${index + 1}`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-auto object-cover"
                    width="80"
                    height="80"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-[color:var(--card-bg)] p-8 rounded-xl shadow-sm">
              <h1 className="text-3xl font-bold text-[color:var(--text-primary)] mb-3">
                {product.name}
              </h1>
              <p className="text-[color:var(--text-secondary)] mb-6 text-lg font-light">
                {product.description}
              </p>

              <div className="mb-6">
                <div className="text-3xl font-bold text-[color:var(--text-accent)] mb-2">
                  <span className="sr-only">Current price: </span>
                  {product.price.toLocaleString("vi-VN")}₫
                </div>
                {product.originalPrice && (
                  <div className="text-[color:var(--text-secondary)] line-through text-lg">
                    <span className="sr-only">Original price: </span>
                    {product.originalPrice.toLocaleString("vi-VN")}₫
                  </div>
                )}
              </div>

              <div className="flex items-center mb-8">
                <div className="flex" role="rating" aria-label={`Rating: ${product.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${
                        i < Math.floor(product.rating)
                          ? "text-[color:var(--text-accent)]"
                          : "text-[color:var(--border)]"
                      }`}
                      aria-hidden="true"
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="ml-3 text-[color:var(--text-secondary)] text-lg">
                  <span className="sr-only">Rated </span>({product.reviewCount} đánh giá)
                </span>
              </div>

              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-[color:var(--text-primary)] mb-3">
                    Dung tích
                  </h3>
                  <div className="flex space-x-3">
                    {product.sizes.map((size, index) => (
                      <button
                        key={index}
                        className="px-5 py-3 border-2 border-[color:var(--border)] rounded-lg hover:border-[color:var(--text-accent)] hover:text-[color:var(--text-accent)] transition-colors duration-200 font-medium"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-medium text-[color:var(--text-primary)] mb-3">
                  Số lượng
                </h3>
                <div className="flex items-center max-w-xs">
                  <button
                    onClick={decreaseQuantity}
                    className="w-12 h-12 flex items-center justify-center border-2 border-[color:var(--border)] rounded-l-lg text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-secondary)] transition-colors duration-200"
                  >
                    <span className="text-xl">-</span>
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="w-16 h-12 text-center border-y-2 border-[color:var(--border)] text-[color:var(--text-primary)]"
                  />
                  <button
                    onClick={increaseQuantity}
                    className="w-12 h-12 flex items-center justify-center border-2 border-[color:var(--border)] rounded-r-lg text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-secondary)] transition-colors duration-200"
                  >
                    <span className="text-xl">+</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mb-8">
                <button className="bg-gradient-to-r from-[color:var(--text-accent)] to-[color:var(--text-secondary)] text-white py-4 px-6 rounded-xl font-semibold hover:from-[color:var(--text-secondary)] hover:to-[color:var(--text-accent)] transition-all duration-300 shadow-md hover:shadow-lg">
                  Thêm vào giỏ hàng
                </button>
                <button className="bg-gradient-to-r from-[color:var(--text-primary)] to-black text-white py-4 px-6 rounded-xl font-semibold hover:from-[color:var(--text-secondary)] hover:to-black transition-all duration-300 shadow-md hover:shadow-lg">
                  Mua ngay
                </button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-[color:var(--text-secondary)]">
                <div className="flex items-center">
                  <span className="mr-3 text-lg">🚚</span> {product.shipping}
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-lg">🛡️</span> {product.guarantee}
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-lg">💖</span> {product.exchange}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description Tabs */}
        <div className="bg-[color:var(--card-bg)] rounded-xl shadow-sm mb-16 overflow-hidden fade-in-element opacity-0 transition-opacity duration-500 delay-100">
          <div className="border-b border-[color:var(--border)]">
            <nav className="flex overflow-x-auto">
              {["description", "usage", "ingredients", "storage"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-5 px-6 font-medium text-base whitespace-nowrap ${
                    activeTab === tab
                      ? "border-b-2 border-[color:var(--text-accent)] text-[color:var(--text-accent)]"
                      : "text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
                  }`}
                >
                  {tab === "description" && "Mô tả sản phẩm"}
                  {tab === "usage" && "Hướng dẫn sử dụng"}
                  {tab === "ingredients" && "Thành phần"}
                  {tab === "storage" && "Bảo quản & HSD"}
                </button>
              ))}
            </nav>
          </div>
          <div className="p-8">
            {activeTab === "description" && (
              <div>
                <p className="text-[color:var(--text-secondary)] text-lg mb-4 leading-relaxed">
                  {product.descriptionDetails?.product}
                </p>
                <p className="text-[color:var(--text-secondary)] text-lg leading-relaxed">
                  Với công nghệ Micro-Luminance độc quyền, sản phẩm giúp làn da
                  trở nên <em className="text-[color:var(--text-accent)]">mịn như lụa</em>,{" "}
                  <em className="text-[color:var(--text-accent)]">tươi mới</em> mỗi sáng thức dậy.
                </p>
              </div>
            )}
            {activeTab === "usage" && (
              <div>
                <p className="text-[color:var(--text-secondary)] text-lg leading-relaxed">
                  {product.descriptionDetails?.usage}
                </p>
              </div>
            )}
            {activeTab === "ingredients" && (
              <div>
                <ul className="list-disc pl-6 space-y-2 text-[color:var(--text-secondary)]">
                  {product.descriptionDetails?.ingredients
                    .split("\n")
                    .map((ingredient, i) => (
                      <li
                        key={i}
                        className="text-lg"
                      >
                        {ingredient}
                      </li>
                    ))}
                </ul>
              </div>
            )}
            {activeTab === "storage" && (
              <div>
                <p className="text-[color:var(--text-secondary)] text-lg leading-relaxed">
                  {product.descriptionDetails?.storage}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="bg-[color:var(--card-bg)] rounded-xl shadow-sm mb-16 overflow-hidden fade-in-element opacity-0 transition-opacity duration-500 delay-200">
          <div className="p-8 border-b border-[color:var(--border)]">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">
                Đánh giá & Nhận xét khách hàng
              </h2>
              <div className="flex items-center">
                <span className="text-3xl font-bold text-[color:var(--text-accent)] mr-3">
                  {product.rating}
                </span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${
                        i < Math.floor(product.rating)
                          ? "text-[color:var(--text-accent)]"
                          : "text-[color:var(--border)]"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="ml-3 text-[color:var(--text-secondary)] text-lg">
                  ({product.reviewCount})
                </span>
              </div>
            </div>
          </div>
          <div className="p-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="mb-8 pb-8 border-b border-[color:var(--border)] last:border-0 last:mb-0 last:pb-0"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-[color:var(--bg-secondary)] to-[color:var(--bg-tertiary)] border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center">
                      <span className="text-[color:var(--text-secondary)] font-bold">
                        {review.user.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="ml-5 flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-[color:var(--text-primary)] text-lg">
                          {review.user}
                        </h4>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-lg ${
                                i < review.rating
                                  ? "text-[color:var(--text-accent)]"
                                  : "text-[color:var(--border)]"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="text-[color:var(--text-secondary)] text-sm">
                        {review.date}
                      </span>
                    </div>
                    <p className="mt-3 text-[color:var(--text-secondary)] text-lg">
                      {review.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-8 text-center">
              <button className="bg-gradient-to-r from-[color:var(--text-accent)] to-[color:var(--text-secondary)] text-white py-3 px-8 rounded-xl font-semibold hover:from-[color:var(--text-secondary)] hover:to-[color:var(--text-accent)] transition-all duration-300 shadow-md">
                Viết đánh giá của bạn
              </button>
            </div>
          </div>
        </div>

        {/* Related Products Carousel */}
        <div className="mb-16 fade-in-element opacity-0 transition-opacity duration-500 delay-300">
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)] mb-8">
            Sản phẩm liên quan
          </h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex space-x-6 pb-4"
                style={{
                  overflowX: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                  padding: "10px 0",
                }}
              >
                {relatedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex-shrink-0 w-64 bg-[color:var(--card-bg)] rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
                  >
                    <div className="h-48 bg-gradient-to-br from-[color:var(--bg-secondary)] to-[color:var(--bg-tertiary)] border-b-2 border-dashed flex items-center justify-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-medium text-[color:var(--text-primary)] mb-2 text-sm leading-tight">
                        {product.name}
                      </h3>
                      <div className="flex items-center mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-sm ${
                                i < Math.floor(product.rating)
                                  ? "text-[color:var(--text-accent)]"
                                  : "text-[color:var(--border)]"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="ml-2 text-[color:var(--text-secondary)] text-xs">
                          ({product.rating})
                        </span>
                      </div>
                      <div className="text-[color:var(--text-accent)] font-semibold text-sm mb-4">
                        {product.price.toLocaleString("vi-VN")}₫
                      </div>
                      <button className="w-full bg-gradient-to-r from-[color:var(--bg-secondary)] to-[color:var(--bg-tertiary)] text-[color:var(--text-primary)] py-2.5 rounded-lg font-medium hover:from-[color:var(--bg-tertiary)] hover:to-[color:var(--bg-secondary)] transition-colors duration-300 text-sm">
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mini Banner */}
        <div className="bg-gradient-to-r from-[color:var(--bg-secondary)] via-[color:var(--bg-primary)] to-[color:var(--bg-tertiary)] rounded-2xl p-10 mb-16 text-center border border-[color:var(--border)] shadow-sm fade-in-element opacity-0 transition-opacity duration-500 delay-400">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[color:var(--text-primary)] mb-3">
              🌸 Bộ dưỡng da toàn diện – giảm 15% khi mua combo
            </h3>
            <p className="text-[color:var(--text-secondary)] mb-6 text-lg">
              Trải nghiệm làn da{" "}
              <span className="text-[color:var(--text-accent)] font-medium">mịn màng</span>,{" "}
              <span className="text-[color:var(--text-accent)] font-medium">rạng rỡ</span> chỉ có
              trong combo chăm sóc da cao cấp
            </p>
            <button className="bg-gradient-to-r from-[color:var(--text-accent)] to-[color:var(--text-secondary)] text-white py-4 px-10 rounded-xl font-semibold hover:from-[color:var(--text-secondary)] hover:to-[color:var(--text-accent)] transition-all duration-300 shadow-lg hover:shadow-xl">
              Khám phá ngay
            </button>
          </div>
        </div>

        {/* Q&A Section (Optional) */}
        <div className="bg-[color:var(--card-bg)] rounded-xl shadow-sm mb-16 overflow-hidden fade-in-element opacity-0 transition-opacity duration-500 delay-500">
          <div className="p-8 border-b border-[color:var(--border)]">
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">Hỏi đáp nhanh</h2>
          </div>
          <div className="p-8">
            <div className="mb-8 pb-8 border-b border-[color:var(--border)]">
              <h3 className="font-semibold text-[color:var(--text-primary)] text-lg mb-3">
                Sản phẩm này có phù hợp với da nhạy cảm không?
              </h3>
              <p className="text-[color:var(--text-secondary)] text-lg">
                Sản phẩm đã được kiểm nghiệm da liễu và phù hợp với cả da nhạy
                cảm. Tuy nhiên, bạn nên thử trước lượng nhỏ trên cổ tay để đảm
                bảo không có phản ứng phụ.
              </p>
            </div>
            <div className="mb-8 pb-8 border-b border-[color:var(--border)]">
              <h3 className="font-semibold text-[color:var(--text-primary)] text-lg mb-3">
                Có thể dùng sản phẩm này cùng với retinol không?
              </h3>
              <p className="text-[color:var(--text-secondary)] text-lg">
                Bạn nên tham khảo ý kiến chuyên gia da liễu trước khi kết hợp
                các sản phẩm hoạt tính cao như retinol. Thông thường nên dùng
                các sản phẩm này cách nhau ít nhất 30 phút.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[color:var(--text-primary)] text-lg mb-4">
                Đặt câu hỏi của bạn
              </h3>
              <form>
                <textarea
                  className="w-full h-32 p-5 border-2 border-[color:var(--border)] rounded-xl mb-4 focus:border-[color:var(--text-accent)] focus:ring-1 focus:ring-[color:var(--text-accent)] focus:outline-none bg-[color:var(--card-bg)] text-[color:var(--text-primary)]"
                  placeholder="Viết câu hỏi của bạn về sản phẩm..."
                ></textarea>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[color:var(--text-accent)] to-[color:var(--text-secondary)] text-white py-3 px-8 rounded-xl font-semibold hover:from-[color:var(--text-secondary)] hover:to-[color:var(--text-accent)] transition-all duration-300 shadow-md"
                >
                  Gửi câu hỏi
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer/Policy Section */}
      <footer className="bg-gradient-to-b from-[color:var(--bg-primary)] to-[color:var(--bg-secondary)] border-t border-[color:var(--border)]">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h3 className="font-bold text-[color:var(--text-primary)] text-lg mb-5">
                Giao hàng
              </h3>
              <ul className="space-y-3 text-[color:var(--text-secondary)]">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">🚚</span>
                  <span>Giao hàng toàn quốc</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">📦</span>
                  <span>Đơn hàng trên 500k miễn phí</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">⏰</span>
                  <span>Giao nhanh trong 2h</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[color:var(--text-primary)] text-lg mb-5">Đổi trả</h3>
              <ul className="space-y-3 text-[color:var(--text-secondary)]">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">🔄</span>
                  <span>Đổi trả trong 7 ngày</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">💰</span>
                  <span>Hoàn tiền nếu hàng giả</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">👕</span>
                  <span>Đổi size/màu miễn phí</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[color:var(--text-primary)] text-lg mb-5">Bảo hành</h3>
              <ul className="space-y-3 text-[color:var(--text-secondary)]">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">🛡️</span>
                  <span>Bảo hành chính hãng</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">🛠️</span>
                  <span>Hỗ trợ kỹ thuật</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">✅</span>
                  <span>Cam kết chất lượng</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[color:var(--text-primary)] text-lg mb-5">Liên hệ</h3>
              <ul className="space-y-3 text-[color:var(--text-secondary)]">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">📞</span>
                  <span>Hotline: 1900 1234</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">✉️</span>
                  <span>Email: support@example.com</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">咨询服务</span>
                  <span>Tư vấn miễn phí 24/7</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center space-x-10 border-t border-[color:var(--border)] pt-10 text-[color:var(--text-secondary)]">
            <div className="flex items-center">
              <span className="mr-3 text-xl">🛡️</span> Chính hãng
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-xl">💔</span> Hoàn tiền
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-xl">咨询服务</span> Tư vấn miễn phí
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetailPage;
