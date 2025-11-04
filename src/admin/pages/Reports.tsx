import React, { useState } from 'react';
import { BarChart3, TrendingUp, DollarSign, Package, Users, ShoppingCart, Calendar, Filter } from 'lucide-react';
import { SalesReport, TopProduct } from '../types';

const Reports: React.FC = () => {
  const [dateRange, setDateRange] = useState({
    start: '2023-10-01',
    end: '2023-10-31'
  });

  // Mock data for sales report
  const salesReport: SalesReport = {
    period: 'monthly',
    startDate: '2023-10-01',
    endDate: '2023-10-31',
    totalRevenue: 42567,
    totalOrders: 1248,
    totalCustomers: 2890,
    averageOrderValue: 34.11,
    topProducts: [
      { productId: 1, productName: "Vitamin C Serum", totalSold: 124, revenue: 3720 },
      { productId: 2, productName: "Hydrating Moisturizer", totalSold: 98, revenue: 2450 },
      { productId: 3, productName: "Retinol Night Cream", totalSold: 87, revenue: 2610 },
      { productId: 4, productName: "Sunscreen SPF 50", totalSold: 76, revenue: 1520 },
      { productId: 5, productName: "Face Mask", totalSold: 65, revenue: 975 }
    ]
  };

  // Mock data for monthly sales
  const monthlySales = [
    { month: 'Jan', revenue: 35000, orders: 980 },
    { month: 'Feb', revenue: 42000, orders: 1020 },
    { month: 'Mar', revenue: 38000, orders: 950 },
    { month: 'Apr', revenue: 45000, orders: 1100 },
    { month: 'May', revenue: 52000, orders: 1250 },
    { month: 'Jun', revenue: 48000, orders: 1180 },
    { month: 'Jul', revenue: 55000, orders: 1300 },
    { month: 'Aug', revenue: 50000, orders: 1220 },
    { month: 'Sep', revenue: 53000, orders: 1280 },
    { month: 'Oct', revenue: 42567, orders: 1248 }
  ];

  const handleDateChange = (field: 'start' | 'end', value: string) => {
    setDateRange(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-[var(--admin-text-primary)]">Reports & Statistics</h1>
        
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 text-[var(--admin-text-secondary)] mr-2" />
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) => handleDateChange('start', e.target.value)}
              className="px-3 py-2 border border-[var(--admin-border)] rounded-lg bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)]"
            />
          </div>
          <span className="text-[var(--admin-text-secondary)]">to</span>
          <div className="flex items-center">
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) => handleDateChange('end', e.target.value)}
              className="px-3 py-2 border border-[var(--admin-border)] rounded-lg bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)]"
            />
          </div>
          <button className="px-4 py-2 bg-[var(--admin-text-accent)] text-white rounded-lg hover:bg-[var(--admin-text-accent)]/90 transition-colors">
            Apply
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-[var(--admin-card-bg)] p-6 rounded-xl border border-[var(--admin-border)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[var(--admin-text-secondary)] text-sm">Total Revenue</p>
              <p className="text-2xl font-bold text-[var(--admin-text-primary)] mt-1">${salesReport.totalRevenue.toLocaleString()}</p>
              <p className="text-green-500 text-sm mt-1">+12.5% from last month</p>
            </div>
            <div className="bg-[var(--admin-bg-secondary)] p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-[var(--admin-text-accent)]" />
            </div>
          </div>
        </div>

        <div className="bg-[var(--admin-card-bg)] p-6 rounded-xl border border-[var(--admin-border)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[var(--admin-text-secondary)] text-sm">Total Orders</p>
              <p className="text-2xl font-bold text-[var(--admin-text-primary)] mt-1">{salesReport.totalOrders}</p>
              <p className="text-green-500 text-sm mt-1">+8.2% from last month</p>
            </div>
            <div className="bg-[var(--admin-bg-secondary)] p-3 rounded-lg">
              <ShoppingCart className="w-6 h-6 text-[var(--admin-text-accent)]" />
            </div>
          </div>
        </div>

        <div className="bg-[var(--admin-card-bg)] p-6 rounded-xl border border-[var(--admin-border)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[var(--admin-text-secondary)] text-sm">Total Customers</p>
              <p className="text-2xl font-bold text-[var(--admin-text-primary)] mt-1">{salesReport.totalCustomers}</p>
              <p className="text-green-500 text-sm mt-1">+5.7% from last month</p>
            </div>
            <div className="bg-[var(--admin-bg-secondary)] p-3 rounded-lg">
              <Users className="w-6 h-6 text-[var(--admin-text-accent)]" />
            </div>
          </div>
        </div>

        <div className="bg-[var(--admin-card-bg)] p-6 rounded-xl border border-[var(--admin-border)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[var(--admin-text-secondary)] text-sm">Avg. Order Value</p>
              <p className="text-2xl font-bold text-[var(--admin-text-primary)] mt-1">${salesReport.averageOrderValue.toFixed(2)}</p>
              <p className="text-green-500 text-sm mt-1">+3.1% from last month</p>
            </div>
            <div className="bg-[var(--admin-bg-secondary)] p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-[var(--admin-text-accent)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue Chart */}
        <div className="bg-[var(--admin-card-bg)] p-6 rounded-xl border border-[var(--admin-border)]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[var(--admin-text-primary)]">Revenue Overview</h2>
            <BarChart3 className="w-5 h-5 text-[var(--admin-text-secondary)]" />
          </div>
          <div className="h-80 flex items-center justify-center bg-[var(--admin-bg-secondary)]/30 rounded-lg">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-[var(--admin-text-secondary)] mx-auto mb-2" />
              <p className="text-[var(--admin-text-secondary)]">Revenue Chart</p>
              <p className="text-sm text-[var(--admin-text-secondary)]">(Chart component would be integrated here)</p>
            </div>
          </div>
        </div>

        {/* Orders Chart */}
        <div className="bg-[var(--admin-card-bg)] p-6 rounded-xl border border-[var(--admin-border)]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[var(--admin-text-primary)]">Orders Overview</h2>
            <ShoppingCart className="w-5 h-5 text-[var(--admin-text-secondary)]" />
          </div>
          <div className="h-80 flex items-center justify-center bg-[var(--admin-bg-secondary)]/30 rounded-lg">
            <div className="text-center">
              <ShoppingCart className="w-12 h-12 text-[var(--admin-text-secondary)] mx-auto mb-2" />
              <p className="text-[var(--admin-text-secondary)]">Orders Chart</p>
              <p className="text-sm text-[var(--admin-text-secondary)]">(Chart component would be integrated here)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Products Table */}
      <div className="bg-[var(--admin-card-bg)] p-6 rounded-xl border border-[var(--admin-border)] mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-[var(--admin-text-primary)]">Top Selling Products</h2>
          <Package className="w-5 h-5 text-[var(--admin-text-secondary)]" />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[var(--admin-border)]">
            <thead>
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Product</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Units Sold</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--admin-border)]">
              {salesReport.topProducts.map((product, index) => (
                <tr key={index} className="hover:bg-[var(--admin-bg-secondary)]/50">
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-[var(--admin-text-primary)]">{product.productName}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">{product.totalSold}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-[var(--admin-text-primary)] font-medium">${product.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-[var(--admin-card-bg)] p-6 rounded-xl border border-[var(--admin-border)]">
        <h2 className="text-lg font-semibold text-[var(--admin-text-primary)] mb-4">Export Reports</h2>
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center px-4 py-2 bg-[var(--admin-text-accent)] text-white rounded-lg hover:bg-[var(--admin-text-accent)]/90 transition-colors">
            <BarChart3 className="w-4 h-4 mr-2" />
            Export to PDF
          </button>
          <button className="flex items-center px-4 py-2 bg-[var(--admin-text-accent)] text-white rounded-lg hover:bg-[var(--admin-text-accent)]/90 transition-colors">
            <Package className="w-4 h-4 mr-2" />
            Export to Excel
          </button>
          <button className="flex items-center px-4 py-2 bg-[var(--admin-text-accent)] text-white rounded-lg hover:bg-[var(--admin-text-accent)]/90 transition-colors">
            <Users className="w-4 h-4 mr-2" />
            Export to CSV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;