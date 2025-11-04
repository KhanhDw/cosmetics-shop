import { CartItem as CartItemInterface, Product } from '@/shared/types';

export class CartItemEntity implements CartItemInterface {
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
  descriptionDetails?: import('@/shared/types').ProductDescriptionDetails;
  quantity: number;

  constructor(data: CartItemInterface) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.price = data.price;
    this.originalPrice = data.originalPrice;
    this.image = data.image;
    this.images = data.images;
    this.category = data.category;
    this.rating = data.rating;
    this.reviewCount = data.reviewCount;
    this.sizes = data.sizes;
    this.colors = data.colors;
    this.brand = data.brand;
    this.shipping = data.shipping;
    this.guarantee = data.guarantee;
    this.exchange = data.exchange;
    this.descriptionDetails = data.descriptionDetails;
    this.quantity = data.quantity;
  }

  /**
   * Calculate total price for this cart item
   */
  getTotalPrice(): number {
    return this.price * this.quantity;
  }

  /**
   * Validate quantity
   */
  isValidQuantity(): boolean {
    return this.quantity > 0 && this.quantity <= 10; // Assuming max quantity is 10
  }
}