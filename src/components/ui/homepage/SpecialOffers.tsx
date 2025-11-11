import React from "react";
import { Gift, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const SpecialOffers: React.FC = () => {
  const { t } = useTranslation();
  const offers = [
    {
      title: t("homepage.special_offers.offer1.title"),
      subtitle: t("homepage.special_offers.offer1.subtitle"),
      description: t("homepage.special_offers.offer1.description"),
      buttonText: t("homepage.special_offers.offer1.button_text"),
    },
    {
      title: t("homepage.special_offers.offer2.title"),
      subtitle: t("homepage.special_offers.offer2.subtitle"),
      description: t("homepage.special_offers.offer2.description"),
      buttonText: t("homepage.special_offers.offer2.button_text"),
    },
  ];

  return (
    <section className="py-16 bg-[color:var(--bg-secondary)] dark:bg-[color:var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--text-primary)] !text-[color:var(--text-primary)] mb-4">
            {t("homepage.special_offers.title")}
          </h2>
          <p className="text-lg text-[color:var(--text-secondary)] !text-[color:var(--text-secondary)] max-w-2xl mx-auto">
            {t("homepage.special_offers.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-r from-[color:var(--text-accent)] to-[color:var(--text-secondary)] rounded-2xl p-8 text-white overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-4">
                  <Gift className="w-6 h-6" />
                  <span className="text-sm font-medium uppercase tracking-wide">
                    {t("homepage.special_offers.special_deal")}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {offer.title}
                </h3>
                <h4 className="text-lg md:text-xl font-semibold mb-4">
                  {offer.subtitle}
                </h4>
                <p className="text-white/90 mb-6">{offer.description}</p>
                <button className="bg-[color:var(--bg-primary)] text-[color:var(--text-primary)] px-6 py-3 rounded-full font-medium hover:bg-[color:var(--bg-secondary)] transition-colors duration-300">
                  {offer.buttonText}
                </button>
              </div>
              <div className="absolute top-4 right-4 opacity-20">
                <Sparkles className="w-16 h-16" />
              </div>
              <div className="absolute bottom-4 left-4 opacity-10">
                <Gift className="w-12 h-12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
