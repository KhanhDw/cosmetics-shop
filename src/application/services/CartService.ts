import { CartItem } from '@/shared/types';
import { 
  AddToCartUseCaseImpl, 
  UpdateCartQuantityUseCaseImpl, 
  RemoveFromCartUseCaseImpl, 
  GetCartUseCaseImpl,
  AddToCartUseCase,
  UpdateCartQuantityUseCase,
  RemoveFromCartUseCase,
  GetCartUseCase
} from '@/domain/use-cases/CartUseCases';
import { CartRepository } from '@/domain/repositories/CartRepository';
import { ProductEntity } from '@/domain/entities/Product';

export interface CartService {
  getCartItems(): Promise<CartItem[]>;
  addToCart(product: ProductEntity, quantity?: number): Promise<void>;
  updateQuantity(productId: number, quantity: number): Promise<void>;
  removeFromCart(productId: number): Promise<void>;
  clearCart(): Promise<void>;
  getTotal(): Promise<number>;
  getItemCount(): Promise<number>;
}

export class CartServiceImpl implements CartService {
  private addToCartUseCase: AddToCartUseCase;
  private updateQuantityUseCase: UpdateCartQuantityUseCase;
  private removeFromCartUseCase: RemoveFromCartUseCase;
  private getCartUseCase: GetCartUseCase;

  constructor(cartRepository: CartRepository) {
    this.addToCartUseCase = new AddToCartUseCaseImpl(cartRepository);
    this.updateQuantityUseCase = new UpdateCartQuantityUseCaseImpl(cartRepository);
    this.removeFromCartUseCase = new RemoveFromCartUseCaseImpl(cartRepository);
    this.getCartUseCase = new GetCartUseCaseImpl(cartRepository);
  }

  async getCartItems(): Promise<CartItem[]> {
    return await this.getCartUseCase.execute();
  }

  async addToCart(product: ProductEntity, quantity?: number): Promise<void> {
    await this.addToCartUseCase.execute(product, quantity);
  }

  async updateQuantity(productId: number, quantity: number): Promise<void> {
    await this.updateQuantityUseCase.execute(productId, quantity);
  }

  async removeFromCart(productId: number): Promise<void> {
    await this.removeFromCartUseCase.execute(productId);
  }

  async clearCart(): Promise<void> {
    // For now we'll just remove all items individually
    const items = await this.getCartItems();
    for (const item of items) {
      await this.removeFromCart(item.id);
    }
  }

  async getTotal(): Promise<number> {
    const items = await this.getCartItems();
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  async getItemCount(): Promise<number> {
    const items = await this.getCartItems();
    return items.reduce((count, item) => count + item.quantity, 0);
  }
}