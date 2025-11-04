import { User } from '@/types';

// Define the auth state interface
export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

// Define the initial auth state
export const initialAuthState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// Define auth actions type
type AuthAction =
  | { type: 'AUTH_LOGIN_START' }
  | { type: 'AUTH_LOGIN_SUCCESS'; payload: { user: User; token: string } }
  | { type: 'AUTH_LOGIN_FAILURE'; payload: string }
  | { type: 'AUTH_LOGOUT' }
  | { type: 'AUTH_CHECK_STATUS_START' }
  | { type: 'AUTH_CHECK_STATUS_SUCCESS'; payload: { user: User; token: string } }
  | { type: 'AUTH_CHECK_STATUS_FAILURE' }
  | { type: 'CLEAR_AUTH_ERROR' };

// Auth reducer
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'AUTH_LOGIN_START':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'AUTH_LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
      };
    case 'AUTH_LOGIN_FAILURE':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
    case 'AUTH_LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
      };
    case 'AUTH_CHECK_STATUS_START':
      return {
        ...state,
        loading: true,
      };
    case 'AUTH_CHECK_STATUS_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
      };
    case 'AUTH_CHECK_STATUS_FAILURE':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    case 'CLEAR_AUTH_ERROR':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};