// Common types shared across the application
export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  rating: number;
  reviewCount?: number;
  sizes?: string[];
  colors?: string[];
  brand?: string;
  shipping?: string;
  guarantee?: string;
  exchange?: string;
  descriptionDetails?: ProductDescriptionDetails;
}

export interface ProductDescriptionDetails {
  product: string;
  usage: string;
  ingredients: string;
  storage: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface WishlistItem extends Product {}

export interface Review {
  id: number;
  user: string;
  date: string;
  rating: number;
  content: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin';
}

export type Theme = 'light' | 'dark';

export interface SearchResult {
  products: Product[];
  blogs: BlogPost[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
  readTime: string;
}

export interface Order {
  id: number;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
  shippingAddress: Address;
}

export interface Address {
  id: number;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault?: boolean;
}

export interface ProductFilters {
  category?: string;
  brand?: string[];
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  inStock?: boolean;
  searchQuery?: string;
}