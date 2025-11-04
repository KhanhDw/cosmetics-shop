import { Order, Address, CartItem } from '@/shared/types';
import { OrderEntity } from '@/domain/entities\Order';
import { CartService } from './CartService';

export interface OrderService {
  createOrder(cartItems: CartItem[], shippingAddress: Address): Promise<Order>;
  getOrderById(id: number): Promise<Order | null>;
  getOrdersByUserId(userId: number): Promise<Order[]>;
  updateOrderStatus(orderId: number, status: Order['status']): Promise<Order>;
  cancelOrder(orderId: number): Promise<Order>;
}

export class OrderServiceImpl implements OrderService {
  private cartService: CartService;

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  async createOrder(cartItems: CartItem[], shippingAddress: Address): Promise<Order> {
    // Calculate total
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Create order object
    const order: Order = {
      id: Date.now(), // In a real app, this would come from the backend
      items: cartItems,
      total,
      status: 'pending',
      date: new Date().toISOString(),
      shippingAddress
    };

    // In a real implementation, we would save this to the backend
    // and clear the cart after successful order creation
    await this.cartService.clearCart();
    
    return order;
  }

  async getOrderById(id: number): Promise<Order | null> {
    // In a real implementation, this would fetch from the backend
    // For now, returning a mock order
    return null;
  }

  async getOrdersByUserId(userId: number): Promise<Order[]> {
    // In a real implementation, this would fetch from the backend
    // For now, returning an empty array
    return [];
  }

  async updateOrderStatus(orderId: number, status: Order['status']): Promise<Order> {
    // In a real implementation, this would update the backend
    // For now, returning a mock updated order
    return {
      id: orderId,
      items: [],
      total: 0,
      status,
      date: new Date().toISOString(),
      shippingAddress: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zipCode: '12345',
        country: 'USA'
      }
    };
  }

  async cancelOrder(orderId: number): Promise<Order> {
    // Check if order can be cancelled
    const order = await this.getOrderById(orderId);
    if (!order) {
      throw new Error(`Order with id ${orderId} not found`);
    }

    const orderEntity = new OrderEntity(order);
    if (!orderEntity.canBeCancelled()) {
      throw new Error(`Order with id ${orderId} cannot be cancelled as it's already ${order.status}`);
    }

    return await this.updateOrderStatus(orderId, 'cancelled');
  }
}