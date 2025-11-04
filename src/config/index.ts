// Environment configuration
export const env = {
  API_BASE_URL:
    import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api",
  NODE_ENV: import.meta.env.NODE_ENV,
  APP_NAME: import.meta.env.VITE_APP_NAME || "Cosop",
};

// Application configuration
export const config = {
  pagination: {
    defaultPageSize: 12,
    maxPageSize: 100,
  },
  cart: {
    maxQuantity: 10,
    freeShippingThreshold: 50,
  },
  theme: {
    defaultTheme: "light", // 'light' or 'dark'
  },
};
