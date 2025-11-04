import React from "react";

const Collections: React.FC = () => {
  const brands = [
    { name: "L'Oreal Paris", logo: "https://picsum.photos/200/200" },
    {
      name: "The Ordinary",
      logo: "https://picsum.photos/200/200",
    },
    {
      name: "Innisfree",
      logo: "https://picsum.photos/200/200",
    },
    {
      name: "Laneige",
      logo: "https://picsum.photos/200/200",
    },
    {
      name: "YSL Beauty",
      logo: "https://picsum.photos/200/200",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] dark:from-[var(--bg-primary)] dark:to-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] !text-[var(--text-primary)] mb-4">
            Bộ Sưu Tập & Thương Hiệu
          </h2>
          <p className="text-lg text-[var(--text-secondary)] !text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Chúng tôi tự hào mang đến sản phẩm chính hãng từ các thương hiệu uy
            tín toàn cầu
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="flex items-center justify-center h-24 mb-4 bg-gradient-to-br from-[var(--bg-tertiary)] to-[var(--bg-secondary)] rounded-xl  transition-all duration-300 group-hover:scale-105">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="object-cover p-0 m-0 rounded-lg w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="text-center text-base font-semibold text-[var(--text-primary)] !text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--text-accent)]">
                {brand.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
