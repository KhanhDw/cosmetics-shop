import React, { useState } from 'react';
import { Search, Filter, Printer, Eye, Edit, Package, ShoppingCart, CheckCircle, Truck, DollarSign, Calendar, CreditCard, Banknote, Wallet, Phone } from 'lucide-react';
import { Order } from '../types';

const Orders: React.FC = () => {
  const [orders] = useState<Order[]>([
    {
      id: 1,
      orderNumber: "#1001",
      customerId: 1,
      customer: {
        id: 1,
        name: "Nguyen Van A",
        email: "nguyenvana@example.com",
        role: "customer",
        createdAt: "2023-01-15",
        status: "active"
      },
      items: [
        {
          id: 1,
          orderId: 1,
          productId: 1,
          productName: "Vitamin C Serum",
          productImage: "/api/placeholder/50/50",
          price: 29.99,
          quantity: 2,
          total: 59.98
        }
      ],
      totalAmount: 69.98,
      discountAmount: 10.00,
      shippingFee: 10.00,
      taxAmount: 5.00,
      finalAmount: 59.98,
      status: "delivered",
      paymentStatus: "paid",
      paymentMethod: "card",
      shippingAddress: {
        id: 1,
        fullName: "Nguyen Van A",
        phone: "+84 123 456 789",
        email: "nguyenvana@example.com",
        addressLine1: "123 Main St",
        city: "Ho Chi Minh City",
        state: "Ho Chi Minh",
        zipCode: "700000",
        country: "Vietnam"
      },
      billingAddress: {
        id: 1,
        fullName: "Nguyen Van A",
        phone: "+84 123 456 789",
        email: "nguyenvana@example.com",
        addressLine1: "123 Main St",
        city: "Ho Chi Minh City",
        state: "Ho Chi Minh",
        zipCode: "700000",
        country: "Vietnam"
      },
      notes: "Please deliver after 6 PM",
      createdAt: "2023-10-15T10:30:00Z",
      updatedAt: "2023-10-18T15:45:00Z"
    },
    {
      id: 2,
      orderNumber: "#1002",
      customerId: 2,
      customer: {
        id: 2,
        name: "Tran Thi B",
        email: "tranthib@example.com",
        role: "customer",
        createdAt: "2023-02-20",
        status: "active"
      },
      items: [
        {
          id: 2,
          orderId: 2,
          productId: 2,
          productName: "Hydrating Moisturizer",
          productImage: "/api/placeholder/50/50",
          price: 19.99,
          quantity: 1,
          total: 19.99
        },
        {
          id: 3,
          orderId: 2,
          productId: 3,
          productName: "Retinol Night Cream",
          productImage: "/api/placeholder/50/50",
          price: 34.99,
          quantity: 1,
          total: 34.99
        }
      ],
      totalAmount: 64.98,
      discountAmount: 5.00,
      shippingFee: 10.00,
      taxAmount: 4.50,
      finalAmount: 59.98,
      status: "shipped",
      paymentStatus: "paid",
      paymentMethod: "cod",
      shippingAddress: {
        id: 2,
        fullName: "Tran Thi B",
        phone: "+84 987 654 321",
        email: "tranthib@example.com",
        addressLine1: "456 Business Rd",
        city: "Hanoi",
        state: "Hanoi",
        zipCode: "100000",
        country: "Vietnam"
      },
      billingAddress: {
        id: 2,
        fullName: "Tran Thi B",
        phone: "+84 987 654 321",
        email: "tranthib@example.com",
        addressLine1: "456 Business Rd",
        city: "Hanoi",
        state: "Hanoi",
        zipCode: "100000",
        country: "Vietnam"
      },
      notes: "Fragile items, handle with care",
      createdAt: "2023-10-14T14:20:00Z",
      updatedAt: "2023-10-16T09:30:00Z"
    },
    {
      id: 3,
      orderNumber: "#1003",
      customerId: 3,
      customer: {
        id: 3,
        name: "Le Van C",
        email: "levanc@example.com",
        role: "customer",
        createdAt: "2023-03-10",
        status: "active"
      },
      items: [
        {
          id: 4,
          orderId: 3,
          productId: 1,
          productName: "Vitamin C Serum",
          productImage: "/api/placeholder/50/50",
          price: 29.99,
          quantity: 1,
          total: 29.99
        }
      ],
      totalAmount: 39.99,
      discountAmount: 0,
      shippingFee: 10.00,
      taxAmount: 2.50,
      finalAmount: 39.99,
      status: "processing",
      paymentStatus: "paid",
      paymentMethod: "vnpay",
      shippingAddress: {
        id: 3,
        fullName: "Le Van C",
        phone: "+84 654 321 987",
        email: "levanc@example.com",
        addressLine1: "789 Residential Blvd",
        city: "Da Nang",
        state: "Da Nang",
        zipCode: "550000",
        country: "Vietnam"
      },
      billingAddress: {
        id: 3,
        fullName: "Le Van C",
        phone: "+84 654 321 987",
        email: "levanc@example.com",
        addressLine1: "789 Residential Blvd",
        city: "Da Nang",
        state: "Da Nang",
        zipCode: "550000",
        country: "Vietnam"
      },
      notes: "",
      createdAt: "2023-10-13T09:15:00Z",
      updatedAt: "2023-10-14T11:20:00Z"
    }
  ]);

  const [filters, setFilters] = useState({
    status: '',
    date: ''
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-secondary)]';
      case 'confirmed': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-primary)]';
      case 'processing': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-primary)]';
      case 'shipped': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-primary)]';
      case 'delivered': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-primary)]';
      case 'cancelled': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-secondary)]';
      case 'refunded': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-secondary)]';
      default: return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-secondary)]';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-primary)]';
      case 'pending': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-secondary)]';
      case 'failed': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-secondary)]';
      case 'refunded': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-secondary)]';
      default: return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-secondary)]';
    }
  };

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case 'cod': return <DollarSign className="w-4 h-4" />;
      case 'card': return <CreditCard className="w-4 h-4" />;
      case 'bank_transfer': return <Banknote className="w-4 h-4" />;
      case 'vnpay': return <Wallet className="w-4 h-4" />;
      case 'momo': return <Phone className="w-4 h-4" />;
      default: return <DollarSign className="w-4 h-4" />;
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-[var(--admin-text-primary)]">Orders</h1>
      </div>

      {/* Filters and Search */}
      <div className="bg-[var(--admin-card-bg)] p-4 rounded-xl border border-[var(--admin-border)] mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <select
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="px-4 py-2 pr-8 rounded-full border border-[var(--admin-border)] bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)] appearance-none"
              >
                <option value="">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <div className="absolute right-3 top-2.5 text-[var(--admin-text-secondary)]">
                <Filter className="w-4 h-4" />
              </div>
            </div>

            <div className="relative">
              <input
                type="date"
                value={filters.date}
                onChange={(e) => handleFilterChange('date', e.target.value)}
                className="px-4 py-2 pl-10 rounded-full border border-[var(--admin-border)] bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)] appearance-none"
              />
              <div className="absolute left-3 top-2.5 text-[var(--admin-text-secondary)]">
                <Calendar className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search orders..."
                className="w-full md:w-64 px-4 py-2 pl-10 rounded-full border border-[var(--admin-border)] bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)]"
              />
              <div className="absolute left-3 top-2.5 text-[var(--admin-text-secondary)]">
                <Search className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-[var(--admin-card-bg)] rounded-xl border border-[var(--admin-border)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[var(--admin-border)]">
            <thead className="bg-[var(--admin-bg-secondary)]">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Order</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Customer</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Items</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Amount</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Payment</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--admin-border)]">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-[var(--admin-bg-secondary)]/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-[var(--admin-text-primary)]">{order.orderNumber}</div>
                    <div className="text-sm text-[var(--admin-text-secondary)]">
                      {order.paymentMethod === 'cod' ? 'COD' : 
                       order.paymentMethod === 'card' ? 'Card' : 
                       order.paymentMethod === 'bank_transfer' ? 'Bank Transfer' : 
                       order.paymentMethod === 'vnpay' ? 'VNPay' : 'MoMo'}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-[var(--admin-text-primary)]">{order.customer.name}</div>
                    <div className="text-sm text-[var(--admin-text-secondary)]">{order.customer.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">
                    {order.items.length} item{order.items.length > 1 ? 's' : ''}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[var(--admin-text-primary)]">
                    ${order.finalAmount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                      {order.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPaymentStatusColor(order.paymentStatus)}`}>
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-[var(--admin-text-secondary)] hover:text-[var(--admin-text-accent)] p-1">
                        <Printer className="w-4 h-4" />
                      </button>
                      <button className="text-[var(--admin-text-secondary)] hover:text-[var(--admin-text-accent)] p-1">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-[var(--admin-bg-secondary)] px-4 py-3 flex items-center justify-between border-t border-[var(--admin-border)]">
          <div className="text-sm text-[var(--admin-text-secondary)]">
            Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of{' '}
            <span className="font-medium">3</span> results
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 rounded-md border border-[var(--admin-border)] text-[var(--admin-text-primary)] hover:bg-[var(--admin-bg-primary)]">
              Previous
            </button>
            <button className="px-3 py-1 rounded-md bg-[var(--admin-text-accent)] text-white">
              1
            </button>
            <button className="px-3 py-1 rounded-md border border-[var(--admin-border)] text-[var(--admin-text-primary)] hover:bg-[var(--admin-bg-primary)]">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;