import { ProductApiService } from '@/infrastructure/api/ProductApiService';
import { CartApiService } from '@/infrastructure/api/CartApiService';
import { ProductServiceImpl } from '@/application/services/ProductService';
import { CartServiceImpl } from '@/application/services/CartService';

// Dependency Injection Container
class Container {
  private static instance: Container;
  private services = new Map<string, any>();

  private constructor() {
    // Register services
    this.registerServices();
  }

  public static getInstance(): Container {
    if (!Container.instance) {
      Container.instance = new Container();
    }
    return Container.instance;
  }

  private registerServices() {
    // Infrastructure layer
    this.services.set('ProductRepository', new ProductApiService());
    this.services.set('CartRepository', new CartApiService());

    // Application layer
    this.services.set('ProductService', new ProductServiceImpl(this.get('ProductRepository')));
    this.services.set('CartService', new CartServiceImpl(this.get('CartRepository')));
  }

  public get<T>(key: string): T {
    const service = this.services.get(key);
    if (!service) {
      throw new Error(`Service ${key} not found in container`);
    }
    return service as T;
  }
}

export const container = Container.getInstance();

// Convenience functions for accessing services
export const getProductService = () => container.get<ProductServiceImpl>('ProductService');
export const getCartService = () => container.get<CartServiceImpl>('CartService');