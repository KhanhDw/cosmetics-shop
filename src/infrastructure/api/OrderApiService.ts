import { BaseApiService } from './BaseApiService';
import { API_ENDPOINTS } from '@/shared/constants';
import { Order } from '@/shared/types';

export class OrderApiService extends BaseApiService {
  async getAllOrders(): Promise<Order[]> {
    return this.get<Order[]>(API_ENDPOINTS.ORDERS.ALL);
  }

  async getOrderById(id: number): Promise<Order> {
    return this.get<Order>(API_ENDPOINTS.ORDERS.BY_ID(id));
  }

  async createOrder(orderData: Omit<Order, 'id' | 'status' | 'date'>): Promise<Order> {
    // In a real implementation, the backend would set id, status, and date
    return this.post<Order>(API_ENDPOINTS.ORDERS.ALL, orderData);
  }

  async updateOrder(id: number, orderData: Partial<Order>): Promise<Order> {
    return this.put<Order>(API_ENDPOINTS.ORDERS.BY_ID(id), orderData);
  }

  async deleteOrder(id: number): Promise<void> {
    await this.delete(API_ENDPOINTS.ORDERS.BY_ID(id));
  }
}