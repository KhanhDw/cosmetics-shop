import { useProductStore } from './productStore';
import { useCartStore } from './cartStore';
import { useAuthStore } from './authStore';

// Instead of creating a single massive store, we'll use the individual stores
// and provide them through a provider pattern if needed, or access them directly

// Export individual store hooks as a combined store
export const useAppStore = () => ({
  products: useProductStore(),
  cart: useCartStore(),
  auth: useAuthStore(),
});