import React from "react";
import { ArrowRight } from "lucide-react";
import { getHeroImageUrl } from "@/utils/imageService";

const BeautyTips: React.FC = () => {
  const tips = [
    {
      title: "Cách Chọn Serum Phù Hợp Với Loại Da",
      summary:
        "Hướng dẫn chi tiết cách chọn serum dưỡng da phù hợp với từng loại da khác nhau...",
      image: getHeroImageUrl(800, 450),
    },
    {
      title: "Top 5 Thỏi Son Hot Trend 2025",
      summary:
        "Khám phá những màu son đang được yêu thích nhất trong năm 2025...",
      image: getHeroImageUrl(800, 450),
    },
    {
      title: "Bí Quyết Skincare Chuẩn Hàn Quốc",
      summary:
        "Áp dụng routine skincare 10 bước chuẩn Hàn để có làn da hoàn hảo...",
      image: getHeroImageUrl(800, 450),
    },
  ];

  return (
    // Sử dụng var(--bg-primary). Bỏ dark: vì đã là màu nền mặc định.
    <section className="py-16 bg-[var(--bg-primary)]">
      {/* Thay thế cụm max-w-7xl mx-auto... bằng lớp .container đã định nghĩa */}
      <div className="container">
        <div className="text-center mb-12">
          {/* h2 tự động lấy var(--text-primary) và Playfair Display từ CSS hệ thống */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Mẹo Làm Đẹp & Blog
          </h2>
          {/* p tự động lấy var(--text-secondary) từ CSS hệ thống */}
          <p className="text-lg max-w-2xl mx-auto">
            Chia sẻ kiến thức và xu hướng làm đẹp mới nhất
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              // Sử dụng lớp .card để có background/shadow/transition/hover effect
              // .card đã bao gồm background-color: var(--card-bg) và box-shadow
              className="card group rounded-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                {/* h3 tự động lấy var(--text-primary) */}
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                  {tip.title}
                </h3>
                {/* p tự động lấy var(--text-secondary) */}
                <p className="mb-4 line-clamp-3">{tip.summary}</p>

                {/* Tối ưu hóa: Giữ lại cú pháp var() cho màu sắc cụ thể */}
                <button className="flex items-center space-x-2 text-[var(--text-accent)] font-medium hover:text-[var(--text-secondary)] transition-colors duration-300">
                  <span>Đọc Thêm</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* Sử dụng lớp .btn-primary đã được định nghĩa và tùy chỉnh lại */}
          <button className="btn-primary">Xem Tất Cả Bài Viết</button>
        </div>
      </div>
    </section>
  );
};

export default BeautyTips;
