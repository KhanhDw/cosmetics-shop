import React from 'react';
import { Product } from '@/shared/types';
import { useCartService } from '../hooks/useCartService';
import { ProductEntity } from '@/domain/entities/Product';
import ProductCardPresentational from './ProductCardPresentational';

interface ProductCardContainerProps {
  product: Product;
  className?: string;
}

const ProductCardContainer: React.FC<ProductCardContainerProps> = ({
  product,
  className = ''
}) => {
  const { addToCart, loading } = useCartService();

  const handleAddToCart = (productEntity: ProductEntity) => {
    if (loading) return; // Prevent multiple clicks during loading
    addToCart(productEntity, 1);
  };

  const handleShowDetails = (id: number) => {
    // Navigate to product detail page
    window.location.href = `/product/${id}`;
  };

  return (
    <ProductCardPresentational
      product={product}
      onAddToCart={handleAddToCart}
      onDetails={handleShowDetails}
      className={className}
    />
  );
};

export default ProductCardContainer;