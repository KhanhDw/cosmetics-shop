import React, { createContext, useContext, ReactNode } from 'react';

// This context is being deprecated in favor of the new clean architecture
// Using the new architecture with services and hooks instead
// See presentation layer hooks for new patterns

interface AppState {
  // Placeholder interface - this context will be phased out
}

// Create the context
const AppStateContext = createContext<AppState | undefined>(undefined);

// Provider component
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  // In the new architecture, state management is done through services and hooks
  // rather than a global context
  const state: AppState = {};

  return (
    <AppStateContext.Provider value={state}>
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

// NOTE: The new clean architecture uses services in the application layer
// and hooks in the presentation layer for state management
// - ProductService and useProductService() for product-related operations
// - CartService and useCartService() for cart-related operations
// - Use specific services for other business logic
// 
// This AppContext is kept for backward compatibility but will be phased out