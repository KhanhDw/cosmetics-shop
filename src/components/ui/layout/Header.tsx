import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeToggleButton from "@/components/feature/ThemeToggle";
import LanguageSelector from "@/components/ui/LanguageSelector";
import { Heart, User, ShoppingCart, Menu } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`px-4 py-3 transition-colors duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
          : "bg-secondary dark:bg-secondary"
      } sticky top-0 z-50`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-2xl font-bold text-accent text-accent!"
          >
            {t("common.shop_name")}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-8 md:flex">
          {[
            { path: "/", labelKey: "navbar.home" },
            { path: "/products", labelKey: "navbar.products" },
            { path: "/categories", labelKey: "navbar.categories" },
            { path: "/promotions", labelKey: "navbar.promotions" },
            { path: "/blogs", labelKey: "navbar.blogs" },
            { path: "/about", labelKey: "navbar.about" },
            { path: "/contact", labelKey: "navbar.contact" },
          ].map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 text-secondary! ${
                  isActive
                    ? "text-accent border-b-2 border-accent"
                    : "hover:text-accent dark:text-secondary dark:hover:text-accent"
                }`}
              >
                {t(item.labelKey)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Desktop Icons */}
          <div className="hidden space-x-5 md:flex">
            <Link
              to="/wishlist"
              className={`p-2 rounded-full ${
                location.pathname === "/wishlist"
                  ? "bg-[var(--text-accent)]/10 text-accent"
                  : "text-secondary hover:text-accent hover:bg-[var(--bg-secondary)]/50 dark:text-secondary dark:hover:text-accent"
              } transition-all duration-300`}
              aria-label="Wishlist"
            >
              <Heart className="w-6 h-6" />
            </Link>
            <Link
              to="/account"
              className={`p-2 rounded-full ${
                location.pathname === "/account"
                  ? "bg-[var(--text-accent)]/10 text-accent"
                  : "text-secondary hover:text-accent hover:bg-[var(--bg-secondary)]/50 dark:text-secondary dark:hover:text-accent"
              } transition-all duration-300`}
              aria-label="Account"
            >
              <User className="w-6 h-6" />
            </Link>
            <Link
              to="/cart"
              className={`p-2 rounded-full ${
                location.pathname === "/cart"
                  ? "bg-[var(--text-accent)]/10 text-accent"
                  : "text-secondary hover:text-accent hover:bg-[var(--bg-secondary)]/50 dark:text-secondary dark:hover:text-accent"
              } transition-all duration-300`}
              aria-label="Cart"
            >
              <ShoppingCart className="w-6 h-6" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 rounded-md md:hidden text-secondary dark:text-secondary text-secondary!"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* feature */}
          <ThemeToggleButton />
          <LanguageSelector />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="py-4 mt-2 border-t border-[var(--border)] dark:border-[var(--border)] md:hidden">
          <div className="flex flex-col space-y-3">
            {[
              { path: "/", labelKey: "navbar.home" },
              { path: "/products", labelKey: "navbar.products" },
              { path: "/categories", labelKey: "navbar.categories" },
              { path: "/blogs", labelKey: "navbar.blogs" },
              { path: "/promotions", labelKey: "navbar.promotions" },
              { path: "/about", labelKey: "navbar.about" },
              { path: "/contact", labelKey: "navbar.contact" },
            ].map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-2 font-medium transition-colors duration-200 text-secondary! ${
                    isActive
                      ? "text-accent border-b border-accent"
                      : "text-secondary hover:text-accent dark:text-secondary dark:hover:text-accent"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}
            <div className="flex justify-around pt-2 mt-2 border-t border-[var(--border)] dark:border-[var(--border)]">
              <Link
                to="/wishlist"
                className={`flex items-center justify-center rounded-full px-3 py-2 ${
                  location.pathname === "/wishlist"
                    ? "bg-[var(--text-accent)]/10 text-accent"
                    : "text-secondary hover:text-accent hover:bg-[var(--bg-secondary)]/50 dark:text-secondary dark:hover:text-accent"
                } transition-all duration-300`}
              >
                <Heart className="w-5 h-5 mr-1" />
                <span>{t("common.wishlist")}</span>
              </Link>
              <Link
                to="/account"
                className={`flex items-center justify-center rounded-full px-3 py-2 ${
                  location.pathname === "/account"
                    ? "bg-[var(--text-accent)]/10 text-accent"
                    : "text-secondary hover:text-accent hover:bg-[var(--bg-secondary)]/50 dark:text-secondary dark:hover:text-accent"
                } transition-all duration-300`}
              >
                <User className="w-5 h-5 mr-1" />
                <span>{t("common.account")}</span>
              </Link>
              <Link
                to="/cart"
                className={`flex items-center justify-center rounded-full px-3 py-2 ${
                  location.pathname === "/cart"
                    ? "bg-[var(--text-accent)]/10 text-accent"
                    : "text-secondary hover:text-accent hover:bg-[var(--bg-secondary)]/50 dark:text-secondary dark:hover:text-accent"
                } transition-all duration-300`}
              >
                <ShoppingCart className="w-5 h-5 mr-1" />
                <span>{t("common.cart")}</span>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
