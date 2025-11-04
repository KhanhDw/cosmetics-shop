import { CartItem } from '@/shared/types';

export interface CartRepository {
  getCartItems(): Promise<CartItem[]>;
  addItem(item: CartItem): Promise<void>;
  updateItemQuantity(id: number, quantity: number): Promise<void>;
  removeItem(id: number): Promise<void>;
  clearCart(): Promise<void>;
  getCartTotal(): Promise<number>;
  getCartItemCount(): Promise<number>;
}