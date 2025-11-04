import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { AuthState, authReducer, initialAuthState } from './authReducer';
import { CartState, cartReducer, initialCartState } from './cartReducer';
import { ProductState, productReducer, initialProductState } from './productReducer';

// Define the combined state type
interface AppState {
  auth: AuthState;
  cart: CartState;
  products: ProductState;
}

// Define the combined actions type
type AppAction = 
  | { type: 'SET_AUTH_STATE'; payload: Partial<AuthState> }
  | { type: 'SET_CART_STATE'; payload: Partial<CartState> }
  | { type: 'SET_PRODUCT_STATE'; payload: Partial<ProductState> };

// Define the initial state
const initialState: AppState = {
  auth: initialAuthState,
  cart: initialCartState,
  products: initialProductState,
};

// Create the context
const AppStateContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | undefined>(undefined);

// Combined reducer
const appReducer = (state: AppState, action: AppAction): AppState => {
  return {
    auth: authReducer(state.auth, {
      type: action.type,
      payload: action.payload,
      ...(action.type.startsWith('AUTH_') && { type: action.type, payload: action.payload })
    } as any),
    cart: cartReducer(state.cart, {
      type: action.type,
      payload: action.payload,
      ...(action.type.startsWith('CART_') && { type: action.type, payload: action.payload })
    } as any),
    products: productReducer(state.products, {
      type: action.type,
      payload: action.payload,
      ...(action.type.startsWith('PRODUCT_') && { type: action.type, payload: action.payload })
    } as any),
  };
};

// Provider component
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

// Custom hook to use the app state
export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppProvider');
  }
  return context;
};

// NOTE: Zustand stores are now available as optimized alternatives to this context:
// - useProductStore() for product-related state
// - useCartStore() for cart-related state  
// - useAuthStore() for authentication state
// 
// New components should consider using Zustand stores for better performance and easier state management