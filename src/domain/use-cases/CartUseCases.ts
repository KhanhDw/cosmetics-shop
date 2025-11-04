import { CartItem } from '@/shared/types';
import { CartRepository } from '@/domain/repositories/CartRepository';
import { ProductEntity } from '@/domain/entities/Product';

export interface AddToCartUseCase {
  execute(product: ProductEntity, quantity?: number): Promise<void>;
}

export interface UpdateCartQuantityUseCase {
  execute(productId: number, quantity: number): Promise<void>;
}

export interface RemoveFromCartUseCase {
  execute(productId: number): Promise<void>;
}

export interface GetCartUseCase {
  execute(): Promise<CartItem[]>;
}

export class AddToCartUseCaseImpl implements AddToCartUseCase {
  private cartRepository: CartRepository;

  constructor(cartRepository: CartRepository) {
    this.cartRepository = cartRepository;
  }

  async execute(product: ProductEntity, quantity: number = 1): Promise<void> {
    // Check if product is already in cart
    const cartItems = await this.cartRepository.getCartItems();
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      // Update quantity if item exists
      const existingItem = cartItems[existingItemIndex];
      const newQuantity = Math.min(existingItem.quantity + quantity, 10); // Max quantity of 10
      await this.cartRepository.updateItemQuantity(product.id, newQuantity);
    } else {
      // Add new item to cart
      const cartItem: CartItem = {
        ...product,
        quantity
      };
      await this.cartRepository.addItem(cartItem);
    }
  }
}

export class UpdateCartQuantityUseCaseImpl implements UpdateCartQuantityUseCase {
  private cartRepository: CartRepository;

  constructor(cartRepository: CartRepository) {
    this.cartRepository = cartRepository;
  }

  async execute(productId: number, quantity: number): Promise<void> {
    if (quantity <= 0) {
      await this.cartRepository.removeItem(productId);
    } else {
      await this.cartRepository.updateItemQuantity(productId, Math.min(quantity, 10)); // Max quantity of 10
    }
  }
}

export class RemoveFromCartUseCaseImpl implements RemoveFromCartUseCase {
  private cartRepository: CartRepository;

  constructor(cartRepository: CartRepository) {
    this.cartRepository = cartRepository;
  }

  async execute(productId: number): Promise<void> {
    await this.cartRepository.removeItem(productId);
  }
}

export class GetCartUseCaseImpl implements GetCartUseCase {
  private cartRepository: CartRepository;

  constructor(cartRepository: CartRepository) {
    this.cartRepository = cartRepository;
  }

  async execute(): Promise<CartItem[]> {
    return await this.cartRepository.getCartItems();
  }
}