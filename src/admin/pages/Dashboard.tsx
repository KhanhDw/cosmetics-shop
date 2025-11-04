import React from 'react';
import { 
  Package, 
  ShoppingCart, 
  DollarSign, 
  User, 
  TrendingUp, 
  Calendar,
  BarChart3,
  Users
} from 'lucide-react';

const Dashboard: React.FC = () => {
  // Mock data for dashboard statistics
  const stats = [
    {
      title: "Total Revenue",
      value: "$42,567",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-[var(--admin-text-accent)]",
      bgColor: "bg-[var(--admin-bg-secondary)]"
    },
    {
      title: "Total Orders",
      value: "1,248",
      change: "+8.2%",
      icon: ShoppingCart,
      color: "text-[var(--admin-text-accent)]",
      bgColor: "bg-[var(--admin-bg-secondary)]"
    },
    {
      title: "Total Products",
      value: "156",
      change: "+3.1%",
      icon: Package,
      color: "text-[var(--admin-text-accent)]",
      bgColor: "bg-[var(--admin-bg-secondary)]"
    },
    {
      title: "Total Customers",
      value: "2,890",
      change: "+5.7%",
      icon: Users,
      color: "text-[var(--admin-text-accent)]",
      bgColor: "bg-[var(--admin-bg-secondary)]"
    }
  ];

  // Mock data for recent orders
  const recentOrders = [
    { id: "#1001", customer: "Nguyen Van A", date: "2023-10-15", amount: "$125.00", status: "Completed" },
    { id: "#1002", customer: "Tran Thi B", date: "2023-10-14", amount: "$89.50", status: "Shipped" },
    { id: "#1003", customer: "Le Van C", date: "2023-10-14", amount: "$210.75", status: "Processing" },
    { id: "#1004", customer: "Pham Thi D", date: "2023-10-13", amount: "$56.25", status: "Pending" },
    { id: "#1005", customer: "Hoang Van E", date: "2023-10-12", amount: "$189.99", status: "Delivered" }
  ];

  // Mock data for top products
  const topProducts = [
    { name: "Vitamin C Serum", sold: 124, revenue: "$3,720" },
    { name: "Hydrating Moisturizer", sold: 98, revenue: "$2,450" },
    { name: "Retinol Night Cream", sold: 87, revenue: "$2,610" },
    { name: "Sunscreen SPF 50", sold: 76, revenue: "$1,520" },
    { name: "Face Mask", sold: 65, revenue: "$975" }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-[var(--admin-text-primary)] mb-6">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-[var(--admin-card-bg)] p-6 rounded-xl border border-[var(--admin-border)]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[var(--admin-text-secondary)] text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-[var(--admin-text-primary)] mt-1">{stat.value}</p>
                <p className={`text-sm mt-1 ${stat.color}`}>{stat.change} from last month</p>
              </div>
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Sales Chart Placeholder */}
        <div className="bg-[var(--admin-card-bg)] p-6 rounded-xl border border-[var(--admin-border)]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[var(--admin-text-primary)]">Sales Overview</h2>
            <BarChart3 className="w-5 h-5 text-[var(--admin-text-secondary)]" />
          </div>
          <div className="h-64 flex items-center justify-center bg-[var(--admin-bg-secondary)]/30 rounded-lg">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-[var(--admin-text-secondary)] mx-auto mb-2" />
              <p className="text-[var(--admin-text-secondary)]">Sales Chart</p>
              <p className="text-sm text-[var(--admin-text-secondary)]">(Chart component would be integrated here)</p>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-[var(--admin-card-bg)] p-6 rounded-xl border border-[var(--admin-border)]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[var(--admin-text-primary)]">Recent Orders</h2>
            <ShoppingCart className="w-5 h-5 text-[var(--admin-text-secondary)]" />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[var(--admin-border)]">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Order</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Customer</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Amount</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--admin-border)]">
                {recentOrders.map((order, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[var(--admin-text-primary)]">{order.id}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">{order.customer}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-[var(--admin-text-secondary)]">{order.date}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-[var(--admin-text-primary)] font-medium">{order.amount}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        order.status === 'Completed' || order.status === 'Delivered' 
                          ? 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-primary)]' 
                          : order.status === 'Shipped' 
                            ? 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-primary)]' 
                            : order.status === 'Processing' 
                              ? 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-primary)]' 
                              : 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-secondary)]'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-[var(--admin-card-bg)] p-6 rounded-xl border border-[var(--admin-border)] mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-[var(--admin-text-primary)]">Top Selling Products</h2>
          <Package className="w-5 h-5 text-[var(--admin-text-secondary)]" />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[var(--admin-border)]">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Product</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Units Sold</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--admin-border)]">
              {topProducts.map((product, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[var(--admin-text-primary)]">{product.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">{product.sold}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-[var(--admin-text-primary)] font-medium">{product.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;