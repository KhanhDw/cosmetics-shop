import { create } from 'zustand';
import { User } from '@/types';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  
  login: (user: User) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,

  login: (user) => set({ user, isAuthenticated: true, error: null }),

  logout: () => set({ user: null, isAuthenticated: false }),

  setLoading: (loading) => set({ loading }),

  setError: (error) => set({ error }),
}));