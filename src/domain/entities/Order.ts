import { Order as OrderInterface, CartItem, Address } from '@/shared/types';

export class OrderEntity implements OrderInterface {
  id: number;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
  shippingAddress: Address;

  constructor(data: OrderInterface) {
    this.id = data.id;
    this.items = data.items;
    this.total = data.total;
    this.status = data.status;
    this.date = data.date;
    this.shippingAddress = data.shippingAddress;
  }

  /**
   * Calculate order total
   */
  calculateTotal(): number {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  /**
   * Check if order can be cancelled
   */
  canBeCancelled(): boolean {
    return this.status === 'pending' || this.status === 'processing';
  }

  /**
   * Check if order is completed
   */
  isCompleted(): boolean {
    return this.status === 'delivered';
  }

  /**
   * Get order status label
   */
  getStatusLabel(): string {
    const statusLabels: Record<string, string> = {
      'pending': 'Pending',
      'processing': 'Processing',
      'shipped': 'Shipped',
      'delivered': 'Delivered',
      'cancelled': 'Cancelled'
    };
    
    return statusLabels[this.status] || this.status;
  }

  /**
   * Get estimated delivery date (placeholder)
   */
  getEstimatedDeliveryDate(): string {
    // In a real implementation, this would calculate based on shipping method and location
    const deliveryDate = new Date(this.date);
    deliveryDate.setDate(deliveryDate.getDate() + 7); // 7 days from order date
    return deliveryDate.toISOString().split('T')[0];
  }
}