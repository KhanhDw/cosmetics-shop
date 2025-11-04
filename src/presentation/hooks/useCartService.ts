import { useState, useEffect } from 'react';
import { CartItem } from '@/shared/types';
import { CartApiService } from '@/infrastructure/api/CartApiService';
import { CartServiceImpl } from '@/application/services/CartService';
import { ProductEntity } from '@/domain/entities/Product';

// Initialize services
const cartRepository = new CartApiService();
const cartService = new CartServiceImpl(cartRepository);

export const useCartService = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState<number>(0);
  const [itemCount, setItemCount] = useState<number>(0);

  // Load cart items on mount
  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    setLoading(true);
    try {
      const items = await cartService.getCartItems();
      setCartItems(items);
      
      const newTotal = await cartService.getTotal();
      setTotal(newTotal);
      
      const newItemCount = await cartService.getItemCount();
      setItemCount(newItemCount);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load cart');
      console.error('Error loading cart:', err);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (product: ProductEntity, quantity?: number) => {
    setLoading(true);
    try {
      await cartService.addToCart(product, quantity);
      await loadCart(); // Refresh cart after adding item
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add item to cart');
      console.error('Error adding to cart:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (productId: number, quantity: number) => {
    setLoading(true);
    try {
      await cartService.updateQuantity(productId, quantity);
      await loadCart(); // Refresh cart after updating quantity
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update quantity');
      console.error('Error updating quantity:', err);
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (productId: number) => {
    setLoading(true);
    try {
      await cartService.removeFromCart(productId);
      await loadCart(); // Refresh cart after removing item
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to remove item from cart');
      console.error('Error removing from cart:', err);
    } finally {
      setLoading(false);
    }
  };

  const clearCart = async () => {
    setLoading(true);
    try {
      await cartService.clearCart();
      await loadCart(); // Refresh cart after clearing
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to clear cart');
      console.error('Error clearing cart:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    cartItems,
    loading,
    error,
    total,
    itemCount,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    loadCart,
  };
};