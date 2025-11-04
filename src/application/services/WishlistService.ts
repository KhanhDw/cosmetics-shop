import { Product } from '@/shared/types';

export interface WishlistService {
  getWishlistItems(): Promise<Product[]>;
  addItemToWishlist(productId: number): Promise<void>;
  removeItemFromWishlist(productId: number): Promise<void>;
  isInWishlist(productId: number): Promise<boolean>;
  clearWishlist(): Promise<void>;
  getWishlistItemCount(): Promise<number>;
}

export class WishlistServiceImpl implements WishlistService {
  private wishlistKey = 'wishlist';

  async getWishlistItems(): Promise<Product[]> {
    try {
      const wishlistStr = localStorage.getItem(this.wishlistKey);
      const wishlistIds: number[] = wishlistStr ? JSON.parse(wishlistStr) : [];
      
      // In a real implementation, we would fetch the actual product data
      // from the backend or cache for the given IDs
      // For now, returning an empty array
      return [];
    } catch (error) {
      console.error('Error getting wishlist items:', error);
      return [];
    }
  }

  async addItemToWishlist(productId: number): Promise<void> {
    try {
      const wishlistStr = localStorage.getItem(this.wishlistKey);
      const wishlistIds: number[] = wishlistStr ? JSON.parse(wishlistStr) : [];
      
      if (!wishlistIds.includes(productId)) {
        wishlistIds.push(productId);
        localStorage.setItem(this.wishlistKey, JSON.stringify(wishlistIds));
      }
    } catch (error) {
      console.error(`Error adding item ${productId} to wishlist:`, error);
      throw error;
    }
  }

  async removeItemFromWishlist(productId: number): Promise<void> {
    try {
      const wishlistStr = localStorage.getItem(this.wishlistKey);
      const wishlistIds: number[] = wishlistStr ? JSON.parse(wishlistStr) : [];
      
      const updatedWishlist = wishlistIds.filter(id => id !== productId);
      localStorage.setItem(this.wishlistKey, JSON.stringify(updatedWishlist));
    } catch (error) {
      console.error(`Error removing item ${productId} from wishlist:`, error);
      throw error;
    }
  }

  async isInWishlist(productId: number): Promise<boolean> {
    try {
      const wishlistStr = localStorage.getItem(this.wishlistKey);
      const wishlistIds: number[] = wishlistStr ? JSON.parse(wishlistStr) : [];
      return wishlistIds.includes(productId);
    } catch (error) {
      console.error(`Error checking if item ${productId} is in wishlist:`, error);
      return false;
    }
  }

  async clearWishlist(): Promise<void> {
    try {
      localStorage.removeItem(this.wishlistKey);
    } catch (error) {
      console.error('Error clearing wishlist:', error);
      throw error;
    }
  }

  async getWishlistItemCount(): Promise<number> {
    try {
      const wishlistStr = localStorage.getItem(this.wishlistKey);
      const wishlistIds: number[] = wishlistStr ? JSON.parse(wishlistStr) : [];
      return wishlistIds.length;
    } catch (error) {
      console.error('Error getting wishlist count:', error);
      return 0;
    }
  }
}