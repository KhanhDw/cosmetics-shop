import React from "react";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getBeautyImageUrl } from "@/utils/imageService";

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const testimonials = [
    {
      name: t("homepage.testimonials.customer1.name"),
      age: t("homepage.testimonials.customer1.age"),
      image: getBeautyImageUrl(150, 150),
      comment: t("homepage.testimonials.customer1.comment"),
      rating: 5,
    },
    {
      name: t("homepage.testimonials.customer2.name"),
      age: t("homepage.testimonials.customer2.age"),
      image: getBeautyImageUrl(150, 150),
      comment: t("homepage.testimonials.customer2.comment"),
      rating: 5,
    },
    {
      name: t("homepage.testimonials.customer3.name"),
      age: t("homepage.testimonials.customer3.age"),
      image: getBeautyImageUrl(150, 150),
      comment: t("homepage.testimonials.customer3.comment"),
      rating: 5,
    },
    {
      name: t("homepage.testimonials.customer4.name"),
      age: t("homepage.testimonials.customer4.age"),
      image: getBeautyImageUrl(150, 150),
      comment: t("homepage.testimonials.customer4.comment"),
      rating: 5,
    },
    {
      name: t("homepage.testimonials.customer5.name"),
      age: t("homepage.testimonials.customer5.age"),
      image: getBeautyImageUrl(150, 150),
      comment: t("homepage.testimonials.customer5.comment"),
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-[var(--bg-secondary)] dark:bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] !text-[var(--text-primary)] mb-4">
            {t("homepage.testimonials.title")}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] !text-[var(--text-secondary)] max-w-2xl mx-auto">
            {t("homepage.testimonials.subtitle")}
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
