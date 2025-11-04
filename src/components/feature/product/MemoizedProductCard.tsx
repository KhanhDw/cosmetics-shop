import React, { memo } from 'react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onWishlistToggle?: (product: Product) => void;
}

// Memoized ProductCard component to prevent unnecessary re-renders
const ProductCard: React.FC<ProductCardProps> = memo(({ 
  product, 
  onAddToCart,
  onWishlistToggle 
}) => {
  const {
    name,
    price,
    originalPrice,
    image,
    rating,
    reviewCount,
    brand
  } = product;

  const handleAddToCart = () => {
    onAddToCart?.(product);
  };

  const handleWishlistToggle = () => {
    onWishlistToggle?.(product);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-contain p-4"
          loading="lazy"
        />
        
        {originalPrice && originalPrice > price && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            Save {Math.round(100 - (price / originalPrice) * 100)}%
          </span>
        )}
        
        <button 
          onClick={handleWishlistToggle}
          className="absolute top-2 left-2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-200 dark:hover:bg-gray-600"
          aria-label="Add to wishlist"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-gray-600 dark:text-gray-300" 
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
      </div>
      
      <div className="p-4">
        {brand && (
          <span className="text-xs text-gray-500 dark:text-gray-400 uppercase">
            {brand}
          </span>
        )}
        
        <h3 className="font-semibold text-gray-900 dark:text-white mt-1 line-clamp-2 h-12">
          {name}
        </h3>
        
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
              ({reviewCount})
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-3">
          <div>
            {originalPrice && originalPrice > price ? (
              <div className="flex items-baseline">
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  ${price.toFixed(2)}
                </span>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                ${price.toFixed(2)}
              </span>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;