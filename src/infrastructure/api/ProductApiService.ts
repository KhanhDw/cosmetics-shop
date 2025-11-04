import axios from 'axios';
import { BaseApiService } from './BaseApiService';
import { API_ENDPOINTS } from '@/shared/constants';
import { Product, ProductFilters } from '@/shared/types';
import { ProductRepository } from '@/domain/repositories/ProductRepository';

export class ProductApiService extends BaseApiService implements ProductRepository {
  async getAllProducts(): Promise<Product[]> {
    return this.get<Product[]>(API_ENDPOINTS.PRODUCTS.ALL);
  }

  async getProductById(id: number): Promise<Product | null> {
    try {
      return await this.get<Product>(API_ENDPOINTS.PRODUCTS.BY_ID(id));
    } catch (error) {
      // If the error is a 404, return null
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        return null;
      }
      throw error;
    }
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return this.get<Product[]>(API_ENDPOINTS.PRODUCTS.BY_CATEGORY(category));
  }

  async searchProducts(query: string): Promise<Product[]> {
    return this.get<Product[]>(`${API_ENDPOINTS.PRODUCTS.SEARCH}?q=${query}`);
  }

  async getProductsByFilters(filters: ProductFilters): Promise<Product[]> {
    // Build query parameters from filters
    const params = new URLSearchParams();
    
    if (filters.category) params.append('category', filters.category);
    if (filters.brand && filters.brand.length > 0) params.append('brand', filters.brand.join(','));
    if (filters.minPrice !== undefined) params.append('minPrice', filters.minPrice.toString());
    if (filters.maxPrice !== undefined) params.append('maxPrice', filters.maxPrice.toString());
    if (filters.rating !== undefined) params.append('rating', filters.rating.toString());
    if (filters.inStock !== undefined) params.append('inStock', filters.inStock.toString());
    if (filters.searchQuery) params.append('search', filters.searchQuery);

    const queryString = params.toString();
    const url = queryString ? `${API_ENDPOINTS.PRODUCTS.ALL}?${queryString}` : API_ENDPOINTS.PRODUCTS.ALL;
    
    return this.get<Product[]>(url);
  }
}