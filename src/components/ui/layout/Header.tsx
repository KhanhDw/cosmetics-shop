import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeToggleButton from "@/components/feature/ThemeToggle";
import LanguageSelector from "@/components/ui/LanguageSelector";
import NotificationDropdown from "@/components/ui/NotificationDropdown";
import { Heart, User, ShoppingCart, Menu } from "lucide-react";

interface Notification {
  id: number;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: "promotion" | "review" | "order" | "other";
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  // Notification state
  const [notifications, setNotifications] = React.useState<Notification[]>([
    {
      id: 1,
      title: t("notifications.promotions"),
      message: "Bạn có ưu đãi đặc biệt trong ngày hôm nay!",
      timestamp: "2023-10-15 10:30",
      read: false,
      type: "promotion",
    },
    {
      id: 2,
      title: t("notifications.product_reviews"),
      message: "Sản phẩm bạn đánh giá đã nhận được phản hồi mới",
      timestamp: "2023-10-14 15:45",
      read: false,
      type: "review",
    },
    {
      id: 3,
      title: t("notifications.orders"),
      message: t("notifications.order_status_update", { orderNumber: 1001 }),
      timestamp: "2023-10-13 09:20",
      read: true,
      type: "order",
    },
  ]);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Notification handlers
  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true }))
    );
  };

  return (
    <header
      className={`px-4 py-3 transition-colors duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
          : "bg-white dark:bg-gray-900"
      } sticky top-0 z-50`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-cosmetic-pink-500 to-cosmetic-purple-500 bg-clip-text text-transparent"
          >
            {t("common.shop_name")}
          </Link>
        </div>

        {/* Desktop Navigation - Full */}
        <nav className="hidden lg:flex space-x-6">
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
                className={`font-medium transition-colors duration-200 text-gray-600 dark:text-gray-300 text-sm ${
                  isActive
                    ? "text-cosmetic-pink-500 border-b-2 border-cosmetic-pink-500"
                    : "hover:text-cosmetic-pink-500 dark:hover:text-cosmetic-pink-400"
                }`}
              >
                {t(item.labelKey)}
              </Link>
            );
          })}
        </nav>

        {/* Navigation and Icons - Responsive */}
        <div className="flex items-center justify-between md:justify-end ">
          {/* Collapsed Navigation Toggle for Mobile and Medium Screens */}
          <div className="lg:hidden mr-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-md text-gray-600 dark:text-gray-300 hover:text-cosmetic-pink-500 dark:hover:text-cosmetic-pink-400 touch-target"
              aria-label="Toggle navigation"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center space-x-1 ml-0 md:ml-2">
            {/* Desktop Icons */}
            <div className="flex space-x-1">
              <NotificationDropdown
                notifications={notifications}
                onMarkAsRead={markAsRead}
                onMarkAllAsRead={markAllAsRead}
              />
              <Link
                to="/wishlist"
                className={`p-3 rounded-full ${
                  location.pathname === "/wishlist"
                    ? "bg-cosmetic-pink-100 text-cosmetic-pink-500 dark:bg-cosmetic-pink-900/30 dark:text-cosmetic-pink-400"
                    : "text-gray-600 hover:text-cosmetic-pink-500 hover:bg-cosmetic-pink-50 dark:text-gray-300 dark:hover:text-cosmetic-pink-400 dark:hover:bg-gray-800"
                } transition-all duration-300 touch-target`}
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
              </Link>
              <Link
                to="/account"
                className={`p-3 rounded-full ${
                  location.pathname === "/account"
                    ? "bg-cosmetic-pink-100 text-cosmetic-pink-500 dark:bg-cosmetic-pink-900/30 dark:text-cosmetic-pink-400"
                    : "text-gray-600 hover:text-cosmetic-pink-500 hover:bg-cosmetic-pink-50 dark:text-gray-300 dark:hover:text-cosmetic-pink-400 dark:hover:bg-gray-800"
                } transition-all duration-300 touch-target`}
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </Link>
              <Link
                to="/cart"
                className={`p-3 rounded-full relative ${
                  location.pathname === "/cart"
                    ? "bg-cosmetic-pink-100 text-cosmetic-pink-500 dark:bg-cosmetic-pink-900/30 dark:text-cosmetic-pink-400"
                    : "text-gray-600 hover:text-cosmetic-pink-500 hover:bg-cosmetic-pink-50 dark:text-gray-300 dark:hover:text-cosmetic-pink-400 dark:hover:bg-gray-800"
                } transition-all duration-300 touch-target`}
                aria-label="Cart"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-cosmetic-pink-500 text-white dark:text-white text-xs rounded-full h-5 w-5 flex items-center justify-center bg-red-500 ">
                  3
                </span>
              </Link>
            </div>

            {/* Theme and Language Selectors - More Compact */}
            <div className="hidden md:flex items-center space-x-1">
              <ThemeToggleButton />
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="py-4 mt-2 border-t border-gray-200 dark:border-gray-700 md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg z-20">
          <div className="flex flex-col space-y-3 px-4">
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
                  className={`py-3 font-medium transition-colors duration-200 text-gray-600 touch-target ${
                    isActive
                      ? "text-cosmetic-pink-500 border-b border-cosmetic-pink-500"
                      : "text-gray-600 hover:text-cosmetic-pink-500 dark:text-gray-300 dark:hover:text-cosmetic-pink-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}
            <div className="grid grid-cols-4 gap-2 pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col items-center">
                <NotificationDropdown
                  notifications={notifications}
                  onMarkAsRead={markAsRead}
                  onMarkAllAsRead={markAllAsRead}
                />
                <span className="text-xs mt-1 truncate max-w-[60px] text-gray-600 dark:text-gray-400">
                  {t("notifications.title")}
                </span>
              </div>
              <Link
                to="/wishlist"
                className={`flex flex-col items-center justify-center rounded-xl p-2 ${
                  location.pathname === "/wishlist"
                    ? "bg-cosmetic-pink-100 text-cosmetic-pink-500 dark:bg-cosmetic-pink-900/30 dark:text-cosmetic-pink-400"
                    : "text-gray-600 hover:text-cosmetic-pink-500 hover:bg-cosmetic-pink-50 dark:text-gray-300 dark:hover:text-cosmetic-pink-400 dark:hover:bg-gray-800"
                } transition-all duration-300`}
              >
                <Heart className="w-5 h-5" />
                <span className="text-xs mt-1 truncate max-w-[60px] text-gray-600 dark:text-gray-400">
                  {t("common.wishlist")}
                </span>
              </Link>
              <Link
                to="/account"
                className={`flex flex-col items-center justify-center rounded-xl p-2 ${
                  location.pathname === "/account"
                    ? "bg-cosmetic-pink-100 text-cosmetic-pink-500 dark:bg-cosmetic-pink-900/30 dark:text-cosmetic-pink-400"
                    : "text-gray-600 hover:text-cosmetic-pink-500 hover:bg-cosmetic-pink-50 dark:text-gray-300 dark:hover:text-cosmetic-pink-400 dark:hover:bg-gray-800"
                } transition-all duration-300`}
              >
                <User className="w-5 h-5" />
                <span className="text-xs mt-1 truncate max-w-[60px] text-gray-600 dark:text-gray-400">
                  {t("common.account")}
                </span>
              </Link>
              <Link
                to="/cart"
                className={`flex flex-col items-center justify-center rounded-xl p-2 ${
                  location.pathname === "/cart"
                    ? "bg-cosmetic-pink-100 text-cosmetic-pink-500 dark:bg-cosmetic-pink-900/30 dark:text-cosmetic-pink-400"
                    : "text-gray-600 hover:text-cosmetic-pink-500 hover:bg-cosmetic-pink-50 dark:text-gray-300 dark:hover:text-cosmetic-pink-400 dark:hover:bg-gray-800"
                } transition-all duration-300 relative`}
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-cosmetic-pink-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
                <span className="text-xs mt-1 truncate max-w-[60px] text-gray-600 dark:text-gray-400">
                  {t("common.cart")}
                </span>
              </Link>
            </div>
          </div>
        </nav>
      )}

      {/* Medium Screen Navigation */}
      {isMenuOpen && (
        <nav className="py-4 mt-2 border-t border-gray-200 dark:border-gray-700 hidden md:flex lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg z-20">
          <div className="flex flex-col space-y-3 px-4 w-full">
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
                  className={`py-3 font-medium transition-colors duration-200 text-gray-600 touch-target ${
                    isActive
                      ? "text-cosmetic-pink-500 border-b border-cosmetic-pink-500"
                      : "text-gray-600 hover:text-cosmetic-pink-500 dark:text-gray-300 dark:hover:text-cosmetic-pink-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}
            <div className="grid grid-cols-4 gap-2 pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col items-center">
                <NotificationDropdown
                  notifications={notifications}
                  onMarkAsRead={markAsRead}
                  onMarkAllAsRead={markAllAsRead}
                />
                <span className="text-xs mt-1 truncate max-w-[60px] text-gray-600 dark:text-gray-400">
                  {t("notifications.title")}
                </span>
              </div>
              <Link
                to="/wishlist"
                className={`flex flex-col items-center justify-center rounded-xl p-2 ${
                  location.pathname === "/wishlist"
                    ? "bg-cosmetic-pink-100 text-cosmetic-pink-500 dark:bg-cosmetic-pink-900/30 dark:text-cosmetic-pink-400"
                    : "text-gray-600 hover:text-cosmetic-pink-500 hover:bg-cosmetic-pink-50 dark:text-gray-300 dark:hover:text-cosmetic-pink-400 dark:hover:bg-gray-800"
                } transition-all duration-300`}
              >
                <Heart className="w-5 h-5" />
                <span className="text-xs mt-1 truncate max-w-[60px] text-gray-600 dark:text-gray-400">
                  {t("common.wishlist")}
                </span>
              </Link>
              <Link
                to="/account"
                className={`flex flex-col items-center justify-center rounded-xl p-2 ${
                  location.pathname === "/account"
                    ? "bg-cosmetic-pink-100 text-cosmetic-pink-500 dark:bg-cosmetic-pink-900/30 dark:text-cosmetic-pink-400"
                    : "text-gray-600 hover:text-cosmetic-pink-500 hover:bg-cosmetic-pink-50 dark:text-gray-300 dark:hover:text-cosmetic-pink-400 dark:hover:bg-gray-800"
                } transition-all duration-300`}
              >
                <User className="w-5 h-5" />
                <span className="text-xs mt-1 truncate max-w-[60px] text-gray-600 dark:text-gray-400">
                  {t("common.account")}
                </span>
              </Link>
              <Link
                to="/cart"
                className={`flex flex-col items-center justify-center rounded-xl p-2 ${
                  location.pathname === "/cart"
                    ? "bg-cosmetic-pink-100 text-cosmetic-pink-500 dark:bg-cosmetic-pink-900/30 dark:text-cosmetic-pink-400"
                    : "text-gray-600 hover:text-cosmetic-pink-500 hover:bg-cosmetic-pink-50 dark:text-gray-300 dark:hover:text-cosmetic-pink-400 dark:hover:bg-gray-800"
                } transition-all duration-300 relative`}
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-cosmetic-pink-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
                <span className="text-xs mt-1 truncate max-w-[60px] text-gray-600 dark:text-gray-400">
                  {t("common.cart")}
                </span>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
