import { CartItem } from '@/types';

// Define the cart state interface
export interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
  loading: boolean;
  error: string | null;
}

// Define the initial cart state
export const initialCartState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
  loading: false,
  error: null,
};

// Define cart actions type
type CartAction =
  | { type: 'CART_ADD_ITEM'; payload: CartItem }
  | { type: 'CART_REMOVE_ITEM'; payload: number } // payload is productId
  | { type: 'CART_UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CART_CLEAR' }
  | { type: 'CART_SET_LOADING'; payload: boolean }
  | { type: 'CART_SET_ERROR'; payload: string | null };

// Cart reducer
export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      // Check if item already exists in cart
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      
      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        
        return {
          ...state,
          items: updatedItems,
          total: state.total + action.payload.price,
          itemCount: state.itemCount + 1,
        };
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        return {
          ...state,
          items: [...state.items, newItem],
          total: state.total + action.payload.price,
          itemCount: state.itemCount + 1,
        };
      }

    case 'CART_REMOVE_ITEM':
      const itemToRemove = state.items.find(item => item.id === action.payload);
      if (!itemToRemove) return state;

      const updatedItems = state.items.filter(item => item.id !== action.payload);
      const quantityToRemove = state.items.find(item => item.id === action.payload)?.quantity || 0;
      
      return {
        ...state,
        items: updatedItems,
        total: state.total - (itemToRemove.price * quantityToRemove),
        itemCount: state.itemCount - quantityToRemove,
      };

    case 'CART_UPDATE_QUANTITY':
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex === -1) return state;

      const item = state.items[itemIndex];
      const quantityDiff = action.payload.quantity - item.quantity;
      const newQuantity = Math.max(0, action.payload.quantity); // Ensure quantity doesn't go below 0

      if (newQuantity === 0) {
        // If new quantity is 0, remove the item
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id),
          total: state.total - item.price * item.quantity,
          itemCount: state.itemCount - item.quantity,
        };
      }

      const updatedItem = { ...item, quantity: newQuantity };
      const updatedItemsArray = [...state.items];
      updatedItemsArray[itemIndex] = updatedItem;

      return {
        ...state,
        items: updatedItemsArray,
        total: state.total + (item.price * quantityDiff),
        itemCount: state.itemCount + quantityDiff,
      };

    case 'CART_CLEAR':
      return {
        ...initialCartState,
        items: [],
      };

    case 'CART_SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    case 'CART_SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};