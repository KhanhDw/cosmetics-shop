import React from 'react';
import { Product } from '@/shared/types';
import { ProductEntity } from '@/domain/entities/Product';

interface ProductCardPresentationalProps {
  product: Product;
  onAddToCart: (product: ProductEntity) => void;
  onDetails: (id: number) => void;
  className?: string;
}

const ProductCardPresentational: React.FC<ProductCardPresentationalProps> = ({
  product,
  onAddToCart,
  onDetails,
  className = ''
}) => {
  const productEntity = new ProductEntity(product);

  const handleAddToCart = () => {
    onAddToCart(productEntity);
  };

  const handleShowDetails = () => {
    onDetails(product.id);
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className} group`}>
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover cursor-pointer group-hover:scale-105 transition-transform duration-500"
          onClick={handleShowDetails}
        />
        {productEntity.isOnSale() && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded transform transition-all duration-300 group-hover:scale-110">
            {productEntity.getDiscountPercentage()}% OFF
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 
          className="text-lg font-semibold text-gray-800 mb-1 cursor-pointer hover:text-pink-600 transition-colors duration-200"
          onClick={handleShowDetails}
        >
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {'★'.repeat(Math.floor(product.rating))}
            {'☆'.repeat(5 - Math.floor(product.rating))}
          </div>
          <span className="text-gray-500 text-sm ml-2">({product.reviewCount || 0})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            {productEntity.isOnSale() ? (
              <>
                <span className="text-lg font-bold text-pink-600 transition-transform duration-200 hover:scale-105">
                  {product.price.toLocaleString()}₫
                </span>
                <span className="ml-2 text-sm text-gray-500 line-through transition-transform duration-200 hover:scale-105">
                  {product.originalPrice?.toLocaleString()}₫
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-pink-600 transition-transform duration-200 hover:scale-105">
                {product.price.toLocaleString()}₫
              </span>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 transform"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardPresentational;