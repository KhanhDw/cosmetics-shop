import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onWishlistToggle?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onWishlistToggle,
}) => {
  // Handle case where product is undefined
  if (!product) {
    return null; // or render a placeholder
  }

  const { t } = useTranslation();

  const {
    name,
    brand = "Brand",
    price,
    originalPrice,
    rating = 0,
    image,
    category,
    reviewCount,
  } = product;

  // Calculate discount percentage if compare price exists
  const discount =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

  // Format price to display as currency
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  const formattedOriginalPrice = originalPrice
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(originalPrice)
    : null;

  const handleAddToCart = useCallback(() => {
    onAddToCart?.(product);
  }, [onAddToCart, product]);

  const handleWishlistToggle = useCallback(() => {
    onWishlistToggle?.(product);
  }, [onWishlistToggle, product]);

  // Extract badge information from product properties (e.g., category)
  // Translate category to appropriate i18n key
  const getBadgeTranslation = (cat: string) => {
    switch(cat.toLowerCase()) {
      case 'best seller':
      case 'best seller':
        return t('common.best_seller');
      case 'new':
        return t('common.new');
      default:
        return cat; // Return original if no translation found
    }
  };
  const badges = category ? [category] : [];

  return (
    <div className="h-full flex flex-col justify-between group bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
      <div className="relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          // For responsive images, you can uncomment and use the following:
          // {...getResponsiveImageAttributes(400, 400, name)}
        />
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {badges &&
            badges.length > 0 &&
            badges.map((badge, index) => (
              <span
                key={index}
                className={`text-white text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-wide shadow-md transform transition-all duration-300 ${
                  badge === "Best Seller" || badge === t('common.best_seller')
                    ? "bg-gradient-to-r from-cosmetic-pink-500 to-cosmetic-purple-500"
                    : badge === "New" || badge === t('common.new')
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500"
                    : "bg-gradient-to-r from-rose-500 to-pink-500"
                }`}
              >
                {getBadgeTranslation(badge)}
              </span>
            ))}
        </div>
        <button
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-cosmetic-pink-500 hover:text-white touch-target transform hover:scale-110"
          aria-label="Add to wishlist"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-cosmetic-pink-500 dark:text-cosmetic-pink-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-cosmetic-pink-500 dark:text-cosmetic-pink-400 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-cosmetic-pink-500 hover:text-white touch-target transform hover:scale-110"
          aria-label="Add to cart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>

        {/* Discount tag */}
        {originalPrice && discount > 0 && (
          <div className="absolute bottom-3 left-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md transform transition-all duration-300 hover:scale-110">
            -{discount}%
          </div>
        )}
      </div>

      <div className="p-5 flex justify-between flex-col h-1/2">
        <div className="animate-fade-in-up">
          <p className="text-sm text-cosmetic-pink-500 dark:text-cosmetic-pink-400 mb-1 font-semibold uppercase tracking-wide">
            {brand}
          </p>
          <h3 className="font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 text-lg">
            {name}
          </h3>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 transition-transform duration-200 hover:scale-125 ${
                    i < Math.floor(rating)
                      ? "text-cosmetic-pink-500 fill-cosmetic-pink-500"
                      : "text-gray-300 dark:text-gray-500"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                ({reviewCount || 0})
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-cosmetic-pink-500 dark:text-cosmetic-pink-400 transition-transform duration-200 hover:scale-105">
                {formattedPrice}
              </span>
              {formattedOriginalPrice && (
                <span className="text-xs text-gray-400 dark:text-gray-500 line-through transition-transform duration-200 hover:scale-105">
                  {formattedOriginalPrice}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full mt-4 py-3 bg-gradient-to-r from-cosmetic-pink-500 to-cosmetic-purple-500 text-white rounded-lg font-semibold hover:from-cosmetic-pink-600 hover:to-cosmetic-purple-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 transform"
          >
            {t("common.add_to_cart")}
          </button>
        </div>
      </div>
    </div>
  );
};

const MemoizedProductCard = React.memo(ProductCard);

export default MemoizedProductCard;
