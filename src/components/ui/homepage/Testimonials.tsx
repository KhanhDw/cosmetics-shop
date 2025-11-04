import React from "react";
import { Star, Quote } from "lucide-react";
import { getBeautyImageUrl } from "@/utils/imageService";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Lan Anh",
      age: "26 tuổi",
      image: getBeautyImageUrl(150, 150),
      comment:
        "Tôi rất thích kem dưỡng ở đây, chất lượng tuyệt vời và đóng gói cực kỳ tinh tế!",
      rating: 5,
    },
    {
      name: "Minh Tuấn",
      age: "32 tuổi",
      image: getBeautyImageUrl(150, 150),
      comment:
        "Dịch vụ giao hàng nhanh, tư vấn nhiệt tình. Sẽ ủng hộ shop lâu dài!",
      rating: 5,
    },
    {
      name: "Hạnh Linh",
      age: "29 tuổi",
      image: getBeautyImageUrl(150, 150),
      comment:
        "Son lì của shop lên màu rất đẹp, lâu trôi và không khô môi. Thích lắm!",
      rating: 5,
    },
    {
      name: "Quang Vinh",
      age: "35 tuổi",
      image: getBeautyImageUrl(150, 150),
      comment:
        "Sản phẩm chính hãng, giá cả hợp lý. Website dễ sử dụng và thanh toán an toàn.",
      rating: 5,
    },
    {
      name: "Thùy Dương",
      age: "24 tuổi",
      image: getBeautyImageUrl(150, 150),
      comment:
        "Khám phá được nhiều thương hiệu mới nhờ shop. Tư vấn rất chuyên nghiệp!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-[var(--bg-secondary)] dark:bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] !text-[var(--text-primary)] mb-4">
            Đánh Giá Từ Khách Hàng
          </h2>
          <p className="text-lg text-[var(--text-secondary)] !text-[var(--text-secondary)] max-w-2xl mx-auto">
            Những chia sẻ chân thực từ khách hàng đã trải nghiệm sản phẩm của
            chúng tôi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 5).map((testimonial, index) => (
            <div
              key={index}
              className="bg-[var(--card-bg)] dark:bg-[var(--card-bg)] rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-300 dark:border-gray-600 rounded-2xl"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] !text-[var(--text-primary)]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] !text-[var(--text-secondary)]">
                    {testimonial.age}
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "text-[var(--text-accent)] fill-current"
                        : "text-[var(--border)]"
                    }`}
                  />
                ))}
              </div>
              <div className="relative">
                <Quote className="w-6 h-6 text-[var(--text-accent)]/20 absolute -top-2 -left-2" />
                <p className="text-[var(--text-secondary)] !text-[var(--text-secondary)] italic pl-6">
                  {testimonial.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
