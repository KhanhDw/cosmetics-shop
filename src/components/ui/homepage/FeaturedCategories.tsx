import React from "react";
import { getRandomCosmeticImageUrl, getResponsiveImageAttributes } from "@/utils/imageService";

const FeaturedCategories: React.FC = () => {
  const categories = [
    {
      name: "Dưỡng Da Mặt",
      description: "Dưỡng ẩm chuyên sâu, phục hồi làn da sáng mịn",
      image:
        "https://picsum.photos/200/300",
    },
    {
      name: "Trang Điểm",
      description: "Bộ sưu tập makeup chất lượng cao, lâu trôi",
      image:
        "https://picsum.photos/200/300",
    },
    {
      name: "Chăm Sóc Tóc",
      description: "Dinh dưỡng tóc chuyên sâu, phục hồi hư tổn",
      image:
        "https://picsum.photos/200/300",
    },
    {
      name: "Nước Hoa",
      description: "Hương thơm tinh tế, lưu hương lâu dài",
      image:
        "https://picsum.photos/200/300",
    },
    {
      name: "Dưỡng Thể",
      description: "Kem dưỡng body mềm mịn, dưỡng ẩm toàn thân",
      image:
        "https://picsum.photos/200/300",
    },
    {
      name: "Dụng Cụ & Phụ Kiện",
      description: "Công cụ makeup chuyên nghiệp, chất lượng cao",
      image:
        "https://picsum.photos/200/300",
    },
  ];

  return (
    <section className="py-16 bg-[var(--bg-secondary)] dark:bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] !text-[var(--text-primary)] mb-4">
            Danh Mục Nổi Bật
          </h2>
          <p className="text-lg text-[var(--text-secondary)] !text-[var(--text-secondary)] max-w-2xl mx-auto">
            Khám phá các danh mục mỹ phẩm được yêu thích nhất của chúng tôi
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-[var(--card-bg)] dark:bg-[var(--card-bg)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  // For responsive images, you can uncomment and use the following:
                  // {...getResponsiveImageAttributes(200, 300, category.name)}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--text-accent)]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-white/80 text-sm">{category.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--text-accent)]/20 to-[var(--text-secondary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
