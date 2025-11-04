// API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    ME: "/auth/me",
  },
  PRODUCTS: {
    ALL: "/products",
    BY_ID: (id: number) => `/products/${id}`,
    BY_CATEGORY: (category: string) => `/products/category/${category}`,
    SEARCH: "/products/search",
    REVIEWS: (productId: number) => `/products/${productId}/reviews`,
  },
  CART: {
    ALL: "/cart",
    ITEM: (productId: number) => `/cart/${productId}`,
  },
  ORDERS: {
    ALL: "/orders",
    BY_ID: (id: number) => `/orders/${id}`,
  },
};

// Application routes
export const APP_ROUTES = {
  HOME: "/",
  PRODUCTS: "/products",
  PRODUCT_DETAIL: (id: string | number) => `/product/${id}`,
  CATEGORIES: "/categories",
  CATEGORY_DETAIL: (id: string | number) => `/category/${id}`,
  CART: "/cart",
  CHECKOUT: "/checkout",
  PAYMENT: "/payment",
  ORDER_SUCCESS: "/order-success",
  ORDER_FAILURE: "/order-failure",
  ABOUT: "/about",
  CONTACT: "/contact",
  BLOGS: "/blogs",
  BLOG_DETAIL: (id: string | number) => `/blog/${id}`,
  LOGIN: "/login",
  REGISTER: "/register",
  ACCOUNT: "/account",
  WISHLIST: "/wishlist",
  SUPPORT: "/support",
  PROMOTIONS: "/promotions",
  NOT_FOUND: "/404",
};

// Storage keys
export const STORAGE_KEYS = {
  CART: "cart",
  WISHLIST: "wishlist",
  AUTH_TOKEN: "authToken",
  USER: "user",
  THEME: "theme",
};

// Configuration values
export const CONFIG = {
  APP_NAME: "Cosop",
  CURRENCY: "USD",
  CURRENCY_SYMBOL: "$",
  DEFAULT_PAGE_SIZE: 12,
  MAX_CART_QUANTITY: 10,
  FREE_SHIPPING_THRESHOLD: 50,
};
