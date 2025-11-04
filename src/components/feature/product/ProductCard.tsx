import React, { useCallback } from "react";
import { useTranslation } from 'react-i18next';
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
  const badges = category ? [category] : [];

  return (
    <div className="h-full flex flex-col justify-between group bg-[var(--card-bg)] dark:bg-[var(--card-bg)] rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-[var(--border)] dark:border-[var(--border)]">
      <div className="relative overflow-hidden h-1/2 group-hover:scale-105 transition-transform duration-500">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {badges &&
            badges.length > 0 &&
            badges.map((badge, index) => (
              <span
                key={index}
                className={`text-white text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-wide shadow-md ${
                  badge === "Best Seller"
                    ? "bg-[var(--text-accent)]"
                    : badge === "New"
                    ? "bg-emerald-500"
                    : "bg-rose-500"
                }`}
              >
                {badge}
              </span>
            ))}
        </div>
        <button
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 p-2.5 bg-white dark:bg-gray-800 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[var(--text-accent)] hover:text-white"
          aria-label="Add to wishlist"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-[var(--text-accent)] dark:text-[var(--text-accent)]"
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
          className="absolute bottom-3 right-3 p-2.5 bg-white dark:bg-gray-800 text-[var(--text-primary)] rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[var(--text-accent)] hover:text-white"
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
          <div className="absolute bottom-3 left-3 bg-rose-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
            -{discount}%
          </div>
        )}
      </div>

      <div className="p-5 flex justify-between flex-col h-1/2 ">
        <div className="">
          <p className="text-sm text-[var(--text-accent)] !text-[var(--text-accent)] mb-1 font-semibold uppercase tracking-wide">
            {brand}
          </p>
          <h3 className="font-bold text-[var(--text-primary)] !text-[var(--text-primary)] mb-3 line-clamp-2 text-lg">
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
                  className={`w-4 h-4 ${
                    i < Math.floor(rating)
                      ? "text-[var(--text-accent)] fill-[var(--text-accent)]"
                      : "text-[var(--border)]"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm text-[var(--text-secondary)] !text-[var(--text-secondary)] ml-2">
                ({reviewCount || 0})
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[var(--text-accent)] !text-[var(--text-accent)]">
                {formattedPrice}
              </span>
              {formattedOriginalPrice && (
                <span className="text-xs text-[var(--text-secondary)] !text-[var(--text-secondary)] line-through">
                  {formattedOriginalPrice}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full mt-4 py-3 bg-[var(--bg-secondary)] dark:bg-gray-800 text-[var(--text-primary)] rounded-lg font-semibold hover:bg-[var(--text-accent)] hover:text-white transition-all duration-300 border border-[var(--border)] dark:border-[var(--border)] hover:border-transparent"
          >
            {t('common.add_to_cart')}
          </button>
        </div>
      </div>
    </div>
  );
};

const MemoizedProductCard = React.memo(ProductCard);

export default MemoizedProductCard;
