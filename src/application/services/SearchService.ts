import { Product } from '@/shared/types';
import { ProductRepository } from '@/domain/repositories/ProductRepository';

export interface SearchService {
  searchProducts(query: string): Promise<Product[]>;
  searchProductsByFilters(query: string, categories?: string[], brands?: string[]): Promise<Product[]>;
}

export class SearchServiceImpl implements SearchService {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async searchProducts(query: string): Promise<Product[]> {
    if (!query || query.trim().length === 0) {
      return [];
    }
    
    return await this.productRepository.searchProducts(query.trim());
  }

  async searchProductsByFilters(
    query: string, 
    categories?: string[], 
    brands?: string[]
  ): Promise<Product[]> {
    // Start with a base search
    let products = await this.searchProducts(query);
    
    // Filter by categories if specified
    if (categories && categories.length > 0) {
      products = products.filter(product => 
        categories.includes(product.category)
      );
    }
    
    // Filter by brands if specified
    if (brands && brands.length > 0) {
      products = products.filter(product => 
        product.brand && brands.includes(product.brand)
      );
    }
    
    return products;
  }
}