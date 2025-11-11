import React from "react";
import { Shield, Truck, Headphones, RefreshCw } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: Shield,
      title: t("homepage.about.features.genuine"),
      description: t("homepage.about.features.genuine_desc"),
    },
    {
      icon: Truck,
      title: t("homepage.about.features.delivery"),
      description: t("homepage.about.features.delivery_desc"),
    },
    {
      icon: Headphones,
      title: t("homepage.about.features.advisory"),
      description: t("homepage.about.features.advisory_desc"),
    },
    {
      icon: RefreshCw,
      title: t("homepage.about.features.return"),
      description: t("homepage.about.features.return_desc"),
    },
  ];

  return (
    // Sử dụng var(--bg-secondary) cho nền (chỉ cần dark: hoặc không nếu đã kế thừa)
    // Tối ưu: Bỏ dark: vì đã là var(--bg-secondary) ở cả hai theme trong CSS
    <section className="py-16 bg-[var(--bg-secondary)]">
      <div className="container">
        <div className="text-center mb-12">
          {/* h2 will automatically take font 'Playfair Display' and color var(--text-primary) from CSS system */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {t("homepage.about.title")}
          </h2>
          {/* p will automatically take color var(--text-secondary) from CSS system */}
          <p className="text-lg max-w-2xl mx-auto">
            {t("homepage.about.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              // Sử dụng lớp .card đã định nghĩa: background-color: var(--card-bg) và box-shadow
              // Nếu muốn thêm hiệu ứng hover, sử dụng các lớp Tailwind
              className="card text-center p-6 transition-all duration-300"
            >
              {/* Tùy chỉnh gradient cho icon: Lấy màu từ biến và kết hợp với Tailwind gradient */}
              <div className="bg-linear-to-r from-[var(--text-accent)] to-[var(--text-secondary)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              {/* h3 sẽ tự động lấy màu var(--text-primary) từ CSS hệ thống */}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              {/* p sẽ tự động lấy màu var(--text-secondary) từ CSS hệ thống */}
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
