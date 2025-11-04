import { Product, ProductFilters } from '@/shared/types';
import { GetProductsUseCaseImpl, GetProductsUseCase } from '@/domain/use-cases/GetProductsUseCase';
import { ProductRepository } from '@/domain/repositories/ProductRepository';

export interface ProductService {
  getProducts(filters?: ProductFilters): Promise<Product[]>;
  getProductById(id: number): Promise<Product | null>;
}

export class ProductServiceImpl implements ProductService {
  private getProductsUseCase: GetProductsUseCase;

  constructor(productRepository: ProductRepository) {
    this.getProductsUseCase = new GetProductsUseCaseImpl(productRepository);
  }

  async getProducts(filters?: ProductFilters): Promise<Product[]> {
    return await this.getProductsUseCase.execute(filters);
  }

  async getProductById(id: number): Promise<Product | null> {
    // This would use a different use case, but for now we'll get all products and filter
    const allProducts = await this.getProducts();
    return allProducts.find(product => product.id === id) || null;
  }
}