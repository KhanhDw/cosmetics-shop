import { create } from 'zustand';
import { CartItem } from '@/types';

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
  loading: boolean;
  error: string | null;
  
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  calculateTotals: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  total: 0,
  itemCount: 0,
  loading: false,
  error: null,

  addItem: (item) => set((state) => {
    const existingItem = state.items.find(i => i.id === item.id);
    if (existingItem) {
      const updatedItems = state.items.map(i =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
      const newTotal = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const newItemCount = updatedItems.reduce((count, item) => count + item.quantity, 0);
      return { items: updatedItems, total: newTotal, itemCount: newItemCount };
    } else {
      const updatedItems = [...state.items, { ...item, quantity: 1 }];
      const newTotal = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const newItemCount = updatedItems.reduce((count, item) => count + item.quantity, 0);
      return { items: updatedItems, total: newTotal, itemCount: newItemCount };
    }
  }),

  removeItem: (id) => set((state) => {
    const updatedItems = state.items.filter(item => item.id !== id);
    const newTotal = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const newItemCount = updatedItems.reduce((count, item) => count + item.quantity, 0);
    return { items: updatedItems, total: newTotal, itemCount: newItemCount };
  }),

  updateQuantity: (id, quantity) => set((state) => {
    if (quantity <= 0) {
      const items = state.items.filter(item => item.id !== id);
      const newTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const newItemCount = items.reduce((count, item) => count + item.quantity, 0);
      return { items, total: newTotal, itemCount: newItemCount };
    }

    const updatedItems = state.items.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    const newTotal = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const newItemCount = updatedItems.reduce((count, item) => count + item.quantity, 0);
    return { items: updatedItems, total: newTotal, itemCount: newItemCount };
  }),

  clearCart: () => set({ items: [], total: 0, itemCount: 0 }),

  setLoading: (loading) => set({ loading }),

  setError: (error) => set({ error }),

  calculateTotals: () => {
    const { items } = get();
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = items.reduce((count, item) => count + item.quantity, 0);
    set({ total, itemCount });
  },
}));