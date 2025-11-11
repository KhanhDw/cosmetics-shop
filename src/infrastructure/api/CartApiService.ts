import { BaseApiService } from './BaseApiService';
import { API_ENDPOINTS } from '@/shared/constants';
import { CartItem } from '@/shared/types';
import { CartRepository } from '@/domain/repositories/CartRepository';

export class CartApiService extends BaseApiService implements CartRepository {
  async getCartItems(): Promise<CartItem[]> {
    try {
      return await this.get<CartItem[]>(API_ENDPOINTS.CART.ALL);
    } catch (error) {
      // Return empty array if cart doesn't exist or user is not authenticated
      return [];
    }
  }

  async addItem(item: CartItem): Promise<void> {
    await this.post(API_ENDPOINTS.CART.ALL, item);
  }

  async updateItemQuantity(id: number, quantity: number): Promise<void> {
    await this.put(API_ENDPOINTS.CART.ITEM(id), { quantity });
  }

  async removeItem(id: number): Promise<void> {
    await this.delete(API_ENDPOINTS.CART.ITEM(id));
  }

  async clearCart(): Promise<void> {
    await this.delete(API_ENDPOINTS.CART.ALL);
  }

  async getCartTotal(): Promise<number> {
    const items = await this.getCartItems();
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  async getCartItemCount(): Promise<number> {
    const items = await this.getCartItems();
    return items.reduce((count, item) => count + item.quantity, 0);
  }
}