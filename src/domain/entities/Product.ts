import { Product as ProductInterface } from '@/shared/types';

export class ProductEntity implements ProductInterface {
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

  constructor(data: ProductInterface) {
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
  }

  /**
   * Calculate discount percentage
   */
  getDiscountPercentage(): number {
    if (!this.originalPrice || this.originalPrice <= this.price) {
      return 0;
    }
    return Math.round(((this.originalPrice - this.price) / this.originalPrice) * 100);
  }

  /**
   * Check if product is on sale
   */
  isOnSale(): boolean {
    return !!this.originalPrice && this.originalPrice > this.price;
  }

  /**
   * Check if product is in stock
   */
  isInStock(): boolean {
    // Assuming products are in stock by default
    // This could be enhanced with inventory data
    return true;
  }
}