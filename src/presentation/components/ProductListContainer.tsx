import React from 'react';
import { Product } from '@/shared/types';
import { useProductService } from '../hooks/useProductService';
import ProductCard from '@/components/feature/product/ProductCard';

interface ProductListContainerProps {
  categoryId?: string;
  searchQuery?: string;
}

const ProductListContainer: React.FC<ProductListContainerProps> = ({ 
  categoryId, 
  searchQuery 
}) => {
  const { products, loading, error, fetchProducts } = useProductService();

  React.useEffect(() => {
    const filters = {
      category: categoryId,
      searchQuery
    };
    fetchProducts(filters);
  }, [categoryId, searchQuery]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        <p>Error loading products: {error}</p>
        <button 
          onClick={() => fetchProducts({ category: categoryId, searchQuery })}
          className="mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
        >
          Retry
        </button>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No products found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListContainer;