import { Product, ProductFilters } from '@/shared/types';

export interface ProductRepository {
  getAllProducts(filters?: ProductFilters): Promise<Product[]>;
  getProductById(id: number): Promise<Product | null>;
  getProductsByCategory(category: string): Promise<Product[]>;
  searchProducts(query: string): Promise<Product[]>;
  getProductsByFilters(filters: ProductFilters): Promise<Product[]>;
}