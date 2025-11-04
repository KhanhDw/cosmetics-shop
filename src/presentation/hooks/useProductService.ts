import { useState, useEffect } from 'react';
import { Product, ProductFilters } from '@/shared/types';
import { ProductApiService } from '@/infrastructure/api/ProductApiService';
import { ProductServiceImpl } from '@/application/services/ProductService';

// Initialize services
const productRepository = new ProductApiService();
const productService = new ProductServiceImpl(productRepository);

export const useProductService = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async (filters?: ProductFilters) => {
    setLoading(true);
    setError(null);
    
    try {
      const fetchedProducts = await productService.getProducts(filters);
      setProducts(fetchedProducts);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductById = async (id: number): Promise<Product | null> => {
    try {
      return await productService.getProductById(id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch product');
      console.error(`Error fetching product with id ${id}:`, err);
      return null;
    }
  };

  return {
    products,
    loading,
    error,
    fetchProducts,
    fetchProductById,
  };
};