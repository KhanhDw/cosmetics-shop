import React from "react";
import { getCosmeticImageUrlByCategory } from "@/utils/imageService";

const Categories: React.FC = () => {
  const categories = [
    {
      name: "Skincare",
      image: getCosmeticImageUrlByCategory("Skincare", 800, 800),
      count: "120+ Products",
    },
    {
      name: "Makeup",
      image: getCosmeticImageUrlByCategory("Makeup", 800, 800),
      count: "200+ Products",
    },
    {
      name: "Fragrance",
      image: getCosmeticImageUrlByCategory("Fragrance", 800, 800),
      count: "80+ Products",
    },
    {
      name: "Hair Care",
      image: getCosmeticImageUrlByCategory("Hair care", 800, 800),
      count: "90+ Products",
    },
  ];

  return (
    // Sử dụng var(--bg-secondary). Đã là nền mặc định cho phần này, không cần dark: lặp lại.
    <section className="py-16 bg-[var(--bg-secondary)]">
      {/* THAY THẾ bằng lớp .container đã định nghĩa */}
      <div className="container">
        <div className="text-center mb-12">
          {/* h2 tự động lấy var(--text-primary) và Playfair Display */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Shop by Category
          </h2>
          {/* p tự động lấy var(--text-secondary) */}
          <p className="text-lg max-w-2xl mx-auto">
            Explore our diverse range of beauty categories to find exactly what
            you're looking for
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              // Thay thế cú pháp lặp lại bằng lớp .card cơ bản
              // Tuy nhiên, vì đây là thẻ danh mục có hiệu ứng đặc biệt (ảnh full, gradient)
              // nên tôi chỉ tối ưu hóa các lớp nền/bóng:
              className="group relative bg-[var(--card-bg)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Overlay 1: Gradient tối dưới ảnh */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Nội dung danh mục: Tối ưu hóa màu chữ, nhưng giữ lại các lớp tùy chỉnh */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                <p className="text-white/80 text-sm">{category.count}</p>
              </div>

              {/* Overlay 2: Hiệu ứng hover gradient màu theme */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--text-accent)]/20 to-[var(--text-secondary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
