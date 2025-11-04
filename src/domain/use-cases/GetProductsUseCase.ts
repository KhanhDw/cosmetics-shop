import { Product, ProductFilters } from '@/shared/types';
import { ProductRepository } from '@/domain/repositories/ProductRepository';

export interface GetProductsUseCase {
  execute(filters?: ProductFilters): Promise<Product[]>;
}

export class GetProductsUseCaseImpl implements GetProductsUseCase {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async execute(filters?: ProductFilters): Promise<Product[]> {
    // Apply any business logic here before calling the repository
    return await this.productRepository.getProductsByFilters(filters || {});
  }
}