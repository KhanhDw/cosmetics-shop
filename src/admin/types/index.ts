// Admin UI type definitions

// User types
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'staff' | 'customer';
  avatar?: string;
  createdAt: string;
  status: 'active' | 'inactive' | 'banned';
}

// Product types
export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  stock: number;
  categoryId: number;
  brandId: number;
  images: string[];
  status: 'active' | 'inactive' | 'out_of_stock';
  expirationDate?: string;
  variants?: ProductVariant[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductVariant {
  id: number;
  productId: number;
  name: string;
  sku: string;
  price: number;
  stock: number;
  attributes: Record<string, string>;
}

// Category types
export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  parentId?: number;
  image?: string;
  order: number;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

// Brand types
export interface Brand {
  id: number;
  name: string;
  slug: string;
  description?: string;
  logo?: string;
  country?: string;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

// Order types
export interface Order {
  id: number;
  orderNumber: string;
  customerId: number;
  customer: User;
  items: OrderItem[];
  totalAmount: number;
  discountAmount?: number;
  shippingFee?: number;
  taxAmount?: number;
  finalAmount: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  paymentMethod: 'cod' | 'card' | 'bank_transfer' | 'vnpay' | 'momo';
  shippingAddress: Address;
  billingAddress: Address;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: number;
  orderId: number;
  productId: number;
  productName: string;
  productImage: string;
  price: number;
  quantity: number;
  total: number;
}

export interface Address {
  id: number;
  fullName: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

// Customer types
export interface Customer {
  id: number;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  totalOrders: number;
  totalSpent: number;
  points: number;
  status: 'active' | 'inactive' | 'banned';
  lastOrderDate?: string;
  createdAt: string;
  updatedAt: string;
}

// Staff types
export interface Staff {
  id: number;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  role: 'admin' | 'manager' | 'employee';
  permissions: Permission[];
  status: 'active' | 'inactive';
  lastLogin?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Permission {
  id: number;
  name: string;
  description: string;
}

// Promotion types
export interface Promotion {
  id: number;
  name: string;
  code: string;
  description?: string;
  type: 'percentage' | 'fixed_amount' | 'free_shipping';
  value: number;
  startDate: string;
  endDate: string;
  minOrderAmount?: number;
  usageLimit?: number;
  usedCount: number;
  applicableProducts?: number[]; // Product IDs
  applicableCategories?: number[]; // Category IDs
  status: 'active' | 'inactive' | 'expired';
  createdAt: string;
  updatedAt: string;
}

// Report types
export interface SalesReport {
  period: string; // daily, weekly, monthly
  startDate: string;
  endDate: string;
  totalRevenue: number;
  totalOrders: number;
  totalCustomers: number;
  averageOrderValue: number;
  topProducts: TopProduct[];
}

export interface TopProduct {
  productId: number;
  productName: string;
  totalSold: number;
  revenue: number;
}

// Notification types
export interface Notification {
  id: number;
  title: string;
  message: string;
  type: 'order' | 'promotion' | 'system' | 'review';
  priority: 'low' | 'medium' | 'high';
  read: boolean;
  userId?: number;
  createdAt: string;
}

// System Configuration types
export interface SystemConfig {
  storeName: string;
  storeAddress: string;
  storeLogo?: string;
  shippingSettings: ShippingSettings;
  paymentSettings: PaymentSettings;
  emailSettings: EmailSettings;
  smsSettings: SMSSettings;
}

export interface ShippingSettings {
  freeShippingThreshold: number;
  defaultShippingFee: number;
  shippingZones: ShippingZone[];
}

export interface ShippingZone {
  id: number;
  name: string;
  countries: string[];
  shippingFee: number;
  estimatedDeliveryDays: number;
}

export interface PaymentSettings {
  enabledGateways: ('cod' | 'card' | 'bank_transfer' | 'vnpay' | 'momo')[];
  vnpay?: VnPaySettings;
  momo?: MomoSettings;
}

export interface VnPaySettings {
  enabled: boolean;
  tmnCode: string;
  hashSecret: string;
  returnUrl: string;
  paymentUrl: string;
}

export interface MomoSettings {
  enabled: boolean;
  partnerCode: string;
  accessKey: string;
  secretKey: string;
  returnUrl: string;
  paymentUrl: string;
}

export interface EmailSettings {
  smtpHost: string;
  smtpPort: number;
  smtpUsername: string;
  smtpPassword: string;
  fromEmail: string;
  fromName: string;
}

export interface SMSSettings {
  provider: string;
  apiKey: string;
  senderId: string;
}