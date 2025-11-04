import React, { useState } from 'react';
import { Search, Filter, Percent, Calendar, Tag, Edit, Trash2, Plus, Clock, TrendingUp } from 'lucide-react';
import { Promotion } from '../types';

const Promotions: React.FC = () => {
  const [promotions] = useState<Promotion[]>([
    {
      id: 1,
      name: "Summer Sale",
      code: "SUMMER20",
      description: "20% off on all skincare products",
      type: "percentage",
      value: 20,
      startDate: "2023-06-01",
      endDate: "2023-08-31",
      minOrderAmount: 50,
      usageLimit: 1000,
      usedCount: 456,
      status: "active",
      createdAt: "2023-05-15",
      updatedAt: "2023-06-01"
    },
    {
      id: 2,
      name: "Free Shipping",
      code: "FREESHIP",
      description: "Free shipping on orders over $30",
      type: "free_shipping",
      value: 0,
      startDate: "2023-09-01",
      endDate: "2023-11-30",
      minOrderAmount: 30,
      usageLimit: 500,
      usedCount: 123,
      status: "active",
      createdAt: "2023-08-20",
      updatedAt: "2023-09-01"
    },
    {
      id: 3,
      name: "New Customer Discount",
      code: "WELCOME10",
      description: "10% off for new customers",
      type: "percentage",
      value: 10,
      startDate: "2023-01-01",
      endDate: "2023-12-31",
      minOrderAmount: 20,
      usageLimit: 2000,
      usedCount: 876,
      status: "active",
      createdAt: "2022-12-15",
      updatedAt: "2023-01-01"
    },
    {
      id: 4,
      name: "Expired Promotion",
      code: "EXPIRED",
      description: "This promotion has expired",
      type: "percentage",
      value: 15,
      startDate: "2022-01-01",
      endDate: "2022-12-31",
      minOrderAmount: 25,
      usageLimit: 500,
      usedCount: 498,
      status: "expired",
      createdAt: "2021-12-15",
      updatedAt: "2023-01-01"
    }
  ]);

  const [filters, setFilters] = useState({
    status: '',
    type: '',
    search: ''
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-primary)]';
      case 'inactive': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-secondary)]';
      case 'expired': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-secondary)]';
      default: return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-secondary)]';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'percentage': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-primary)]';
      case 'fixed_amount': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-primary)]';
      case 'free_shipping': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-primary)]';
      default: return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-secondary)]';
    }
  };

  const getUsagePercentage = (used: number, limit: number | undefined) => {
    if (!limit) return 0;
    return Math.min(100, (used / limit) * 100);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-[var(--admin-text-primary)]">Promotions</h1>
        <button className="flex items-center px-4 py-2 bg-[var(--admin-text-accent)] text-white rounded-lg hover:bg-[var(--admin-text-accent)]/90 transition-colors">
          <Plus className="w-4 h-4 mr-2" />
          Add Promotion
        </button>
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
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="expired">Expired</option>
              </select>
              <div className="absolute right-3 top-2.5 text-[var(--admin-text-secondary)]">
                <Filter className="w-4 h-4" />
              </div>
            </div>

            <div className="relative">
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="px-4 py-2 pr-8 rounded-full border border-[var(--admin-border)] bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)] appearance-none"
              >
                <option value="">All Types</option>
                <option value="percentage">Percentage</option>
                <option value="fixed_amount">Fixed Amount</option>
                <option value="free_shipping">Free Shipping</option>
              </select>
              <div className="absolute right-3 top-2.5 text-[var(--admin-text-secondary)]">
                <Filter className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search promotions..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="w-full md:w-64 px-4 py-2 pl-10 rounded-full border border-[var(--admin-border)] bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)]"
              />
              <div className="absolute left-3 top-2.5 text-[var(--admin-text-secondary)]">
                <Search className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Promotions Table */}
      <div className="bg-[var(--admin-card-bg)] rounded-xl border border-[var(--admin-border)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[var(--admin-border)]">
            <thead className="bg-[var(--admin-bg-secondary)]">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Promotion</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Code</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Type</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Value</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Usage</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--admin-border)]">
              {promotions.map((promotion) => (
                <tr key={promotion.id} className="hover:bg-[var(--admin-bg-secondary)]/50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-[var(--admin-text-primary)]">{promotion.name}</div>
                    <div className="text-sm text-[var(--admin-text-secondary)]">{promotion.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--admin-bg-secondary)] text-[var(--admin-text-primary)]">
                      {promotion.code}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getTypeColor(promotion.type)}`}>
                      {promotion.type.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">
                    {promotion.type === 'percentage' ? `${promotion.value}%` : 
                     promotion.type === 'fixed_amount' ? `$${promotion.value}` : 
                     'Free Shipping'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[var(--admin-text-primary)] mb-1">
                      {promotion.usedCount} of {promotion.usageLimit || '∞'} used
                    </div>
                    <div className="w-full bg-[var(--admin-bg-secondary)] rounded-full h-2">
                      <div 
                        className="bg-[var(--admin-text-accent)] h-2 rounded-full" 
                        style={{ width: `${getUsagePercentage(promotion.usedCount, promotion.usageLimit)}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(promotion.status)}`}>
                      {promotion.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-[var(--admin-text-secondary)] hover:text-[var(--admin-text-accent)] p-1">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-[var(--admin-text-secondary)] hover:text-red-500 p-1">
                        <Trash2 className="w-4 h-4" />
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
            Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of{' '}
            <span className="font-medium">4</span> results
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

export default Promotions;