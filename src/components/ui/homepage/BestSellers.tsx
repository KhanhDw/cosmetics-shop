import React from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard: React.FC<Product> = ({
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  description,
  isNew,
  isSale,
}) => {
  // Format price to display as currency (giữ nguyên)
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  }).format(price);

  const formattedOriginalPrice = originalPrice
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      }).format(originalPrice)
    : null;

  return (
    // THAY THẾ bằng lớp .product-card và .card đã được định nghĩa.
    // .product-card đã có border, .card đã có background, shadow, và transition.
    <div className="group card product-card overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {/* Badges: Sử dụng các biến màu đã định nghĩa */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {isNew && (
            <span className="bg-[var(--text-accent)] text-white text-xs px-2 py-1 rounded-full font-medium">
              Mới
            </span>
          )}
          {isSale && (
            <span className="bg-[var(--text-secondary)] text-white text-xs px-2 py-1 rounded-full font-medium">
              Giảm Giá
            </span>
          )}
        </div>

        {/* Wishlist Button: Tối ưu hóa màu nền */}
        <button className="absolute top-3 right-3 p-2 bg-[var(--card-bg-alt)] rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[var(--bg-tertiary)]">
          <Heart className="w-4 h-4 text-[var(--text-secondary)]" />
        </button>

        {/* Quick Add Button: Tối ưu hóa màu nền */}
        <button className="absolute bottom-3 right-3 p-2 bg-[var(--text-accent)] text-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[var(--text-secondary)]">
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4">
        {/* Name: Tối ưu hóa. h3 đã tự động lấy var(--text-primary) */}
        <h3 className="font-medium mb-2 line-clamp-2">{name}</h3>
        {/* Description: Tối ưu hóa. p đã tự động lấy var(--text-secondary) */}
        <p className="text-sm mb-3 line-clamp-2">{description}</p>

        {/* Rating: Tối ưu hóa màu sắc cho Star */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? // Sử dụng var() cho màu sắc cụ thể
                      "text-[var(--text-accent)] fill-[var(--text-accent)]"
                    : "text-[var(--border)]"
                }`}
              />
            ))}
          </div>
          {/* Reviews: Tối ưu hóa. Span đã tự động kế thừa màu text-secondary nếu được đặt trong thẻ p, nhưng giữ var() để đảm bảo tính nhất quán. */}
          <span className="text-sm text-[var(--text-secondary)] ml-2">
            ({reviews})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center space-x-2">
            {/* Price: Tối ưu hóa */}
            <span className="text-lg font-bold text-[var(--text-accent)]">
              {formattedPrice}
            </span>
            {formattedOriginalPrice && (
              // Original Price: Tối ưu hóa
              <span className="text-sm text-[var(--text-secondary)] line-through">
                {formattedOriginalPrice}
              </span>
            )}
          </div>
          {/* Button: Thay thế bằng lớp tiện ích .btn-primary đã được định nghĩa. */}
          {/* Tùy chỉnh kích thước bằng Tailwind (px-4 py-2 text-sm) */}
          <button className="btn-primary px-4 py-2 text-sm">
            Thêm Vào Giỏ
          </button>
        </div>
      </div>
    </div>
  );
};

// ====================================================================

const BestSellers: React.FC = () => {
  const products: Product[] = [
    // (Dữ liệu sản phẩm giữ nguyên)
    {
      id: "1",
      name: "Serum Dưỡng Ẩm Cao Cấp",
      price: 890000,
      originalPrice: 1190000,
      image: "https://picsum.photos/200/300",
      rating: 4.8,
      reviews: 124,
      description: "Serum dưỡng ẩm chuyên sâu với hyaluronic acid và vitamin C",
      isNew: true,
      isSale: true,
    },
    {
      id: "2",
      name: "Bộ Son Thỏi Matte 6 Màu",
      price: 450000,
      image: "https://picsum.photos/200/300",
      rating: 4.6,
      reviews: 89,
      description:
        "Son lì matte lâu trôi, màu sắc tự nhiên, phù hợp mọi làn da",
      isNew: true,
    },
    {
      id: "3",
      name: "Bộ Cọ Trang Điểm Chuyên Nghiệp",
      price: 799000,
      originalPrice: 999000,
      image: "https://picsum.photos/200/300",
      rating: 4.9,
      reviews: 156,
      description: "Bộ 12 cây cọ makeup cao cấp, lông tổng hợp mềm mại",
      isSale: true,
    },
    {
      id: "4",
      name: "Kem Dưỡng Trắng Da Vitamin C",
      price: 650000,
      image: "https://picsum.photos/200/300",
      rating: 4.7,
      reviews: 203,
      description:
        "Kem dưỡng sáng da với vitamin C tinh khiết, giảm nám tàn nhang",
    },
    {
      id: "5",
      name: "Phấn Mắt 12 Màu Hoàng Hôn",
      price: 550000,
      image: "https://picsum.photos/200/300",
      rating: 4.5,
      reviews: 78,
      description: "Bảng phấn mắt nude tones, dễ phối hợp cho mọi phong cách",
      isNew: true,
    },
    {
      id: "6",
      name: "Kem Dưỡng Đêm Chống Lão Hóa",
      price: 950000,
      originalPrice: 1200000,
      image: "https://picsum.photos/200/300",
      rating: 4.8,
      reviews: 167,
      description:
        "Kem dưỡng đêm với retinol và peptide, giảm nếp nhăn hiệu quả",
      isSale: true,
    },
  ];

  return (
    // Tối ưu hóa: Bỏ dark: vì bg-[var(--bg-primary)] đã là màu nền mặc định.
    <section className="py-16 bg-[var(--bg-primary)]">
      {/* THAY THẾ bằng lớp .container đã định nghĩa */}
      <div className="container">
        <div className="text-center mb-12">
          {/* Tiêu đề/Đoạn văn đã được tối ưu trong các bước trước */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Sản Phẩm Bán Chạy Nhất
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Khám phá những sản phẩm hot nhất, được khách hàng yêu thích
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          {/* THAY THẾ bằng lớp tiện ích .btn-primary đã được định nghĩa */}
          <button className="btn-primary">
            Khám Phá Sản Phẩm Yêu Thích Của Bạn
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
