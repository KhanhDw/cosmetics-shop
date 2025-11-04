import { Product } from '@/types';

// Define the product state interface
export interface ProductState {
  items: Product[];
  featured: Product[];
  categories: string[];
  loading: boolean;
  error: string | null;
  selectedProduct: Product | null;
}

// Define the initial product state
export const initialProductState: ProductState = {
  items: [],
  featured: [],
  categories: [],
  loading: false,
  error: null,
  selectedProduct: null,
};

// Define product actions type
type ProductAction =
  | { type: 'PRODUCTS_FETCH_START' }
  | { type: 'PRODUCTS_FETCH_SUCCESS'; payload: Product[] }
  | { type: 'PRODUCTS_FETCH_FAILURE'; payload: string }
  | { type: 'PRODUCT_SET_FEATURED'; payload: Product[] }
  | { type: 'PRODUCT_SET_CATEGORIES'; payload: string[] }
  | { type: 'PRODUCT_SELECT'; payload: Product | null }
  | { type: 'PRODUCT_UPDATE'; payload: Product }
  | { type: 'PRODUCT_SET_LOADING'; payload: boolean }
  | { type: 'PRODUCT_SET_ERROR'; payload: string | null };

// Product reducer
export const productReducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case 'PRODUCTS_FETCH_START':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'PRODUCTS_FETCH_SUCCESS':
      return {
        ...state,
        items: action.payload,
        categories: [...new Set(action.payload.map(p => p.category))], // Extract unique categories
        loading: false,
      };
    case 'PRODUCTS_FETCH_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'PRODUCT_SET_FEATURED':
      return {
        ...state,
        featured: action.payload,
      };
    case 'PRODUCT_SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };
    case 'PRODUCT_SELECT':
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case 'PRODUCT_UPDATE':
      return {
        ...state,
        items: state.items.map(product => 
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case 'PRODUCT_SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'PRODUCT_SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};