import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="pt-16 pb-8 bg-tertiary dark:bg-tertiary text-primary text-primary!">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="mb-8 lg:mb-0">
            <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-cosmetic-pink-500 to-cosmetic-purple-500 bg-clip-text text-transparent">
              {t('common.shop_name')}
            </h3>
            <p className="mb-4 text-secondary text-secondary!">
              {t('footer.description', { defaultValue: 'Premium beauty products crafted with love and care for your daily skincare routine.' })}
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 text-accent hover:text-primary dark:text-accent dark:hover:text-primary transition-colors duration-300 rounded-full bg-[var(--card-bg)] dark:bg-[var(--card-bg)] shadow-sm hover:shadow-md !text-accent"
                  aria-label="Social media link"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="mb-8 lg:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-[color:var(--text-accent)] !text-[color:var(--text-accent)]">
              {t('footer.my_account')}
            </h4>
            <ul className="space-y-3">
              {[
                { path: "/", labelKey: "navbar.home" },
                { path: "/products", labelKey: "navbar.products" },
                { path: "/categories", labelKey: "navbar.categories" },
                { path: "/blogs", labelKey: "navbar.blogs" },
                { path: "/promotions", labelKey: "navbar.promotions" },
                { path: "/about", labelKey: "navbar.about" },
                { path: "/contact", labelKey: "navbar.contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="block text-[color:var(--text-secondary)] hover:text-[color:var(--text-accent)] dark:text-[color:var(--text-secondary)] dark:hover:text-[color:var(--text-accent)] transition-colors duration-200 !text-[color:var(--text-secondary)]"
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8 lg:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-[color:var(--text-accent)] !text-[color:var(--text-accent)]">
              {t('footer.customer_service')}
            </h4>
            <ul className="space-y-3">
              {[
                "common.contact_us",
                "common.faq",
                "common.shipping_info",
                "common.returns_exchanges",
                "common.track_order",
                "common.privacy_policy",
                "common.terms_conditions"
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="block text-[color:var(--text-secondary)] hover:text-[color:var(--text-accent)] dark:text-[color:var(--text-secondary)] dark:hover:text-[color:var(--text-accent)] transition-colors duration-200 !text-[color:var(--text-secondary)]"
                  >
                    {t(item)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[color:var(--text-accent)] !text-[color:var(--text-accent)]">
              {t('common.contact')}
            </h4>
            <ul className="space-y-3 text-secondary text-secondary! mb-6">
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-4 h-4 mt-1 mr-2 text-[color:var(--text-accent)]" />
                <span>123 Beauty Street, New York, NY 10001</span>
              </li>
              <li className="flex items-start">
                <FaPhone className="w-4 h-4 mt-1 mr-2 text-[color:var(--text-accent)]" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="w-4 h-4 mt-1 mr-2 text-[color:var(--text-accent)]" />
                <span>contact@cosmetics.com</span>
              </li>
              <li className="flex items-start">
                <FaClock className="w-4 h-4 mt-1 mr-2 text-[color:var(--text-accent)]" />
                <span>Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-[var(--border)] dark:border-[var(--border)]">
              <h5 className="font-semibold mb-3 text-[color:var(--text-accent)] text-accent!">
                {t('footer.newsletter')}
              </h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder={t('footer.newsletter_placeholder')}
                  className="flex-1 px-4 py-2 rounded-l-lg border border-r-0 border-[var(--border)] dark:border-[var(--border)] dark:bg-[var(--card-bg)] dark:text-primary focus:outline-none focus:ring-2 focus:ring-accent !border-[var(--border)]"
                />
                <button className="px-4 py-2 text-white bg-linear-to-r from-cosmetic-pink-500 to-cosmetic-purple-500 rounded-r-lg hover:from-cosmetic-pink-600 hover:to-cosmetic-purple-600 transition-all">
                  {t('footer.subscribe')}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border)] dark:border-[var(--border)] mt-12 pt-8 text-center">
          <p className="text-secondary text-secondary!">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-4 text-sm text-secondary text-secondary!">
            <span>{t('common.secure_payment')}</span>
            <span className="hidden md:block">•</span>
            <span>{t('common.free_shipping')}</span>
            <span className="hidden md:block">•</span>
            <span>{t('common.easy_returns')}</span>
            <span className="hidden md:block">•</span>
            <span>{t('common.24_7_support')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
