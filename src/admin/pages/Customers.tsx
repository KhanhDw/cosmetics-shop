import React, { useState } from 'react';
import { Search, Filter, User, Mail, Phone, DollarSign, Package, Eye, Edit, Shield, ShieldOff } from 'lucide-react';
import { Customer } from '../types';

const Customers: React.FC = () => {
  const [customers] = useState<Customer[]>([
    {
      id: 1,
      name: "Nguyen Van A",
      email: "nguyenvana@example.com",
      phone: "+84 123 456 789",
      totalOrders: 12,
      totalSpent: 245.75,
      points: 1200,
      status: "active",
      lastOrderDate: "2023-10-15",
      createdAt: "2023-01-15",
      updatedAt: "2023-10-15"
    },
    {
      id: 2,
      name: "Tran Thi B",
      email: "tranthib@example.com",
      phone: "+84 987 654 321",
      totalOrders: 8,
      totalSpent: 189.50,
      points: 800,
      status: "active",
      lastOrderDate: "2023-10-14",
      createdAt: "2023-02-20",
      updatedAt: "2023-10-14"
    },
    {
      id: 3,
      name: "Le Van C",
      email: "levanc@example.com",
      phone: "+84 654 321 987",
      totalOrders: 5,
      totalSpent: 125.25,
      points: 500,
      status: "inactive",
      lastOrderDate: "2023-09-20",
      createdAt: "2023-03-10",
      updatedAt: "2023-09-20"
    },
    {
      id: 4,
      name: "Pham Thi D",
      email: "phamthid@example.com",
      phone: "+84 321 654 987",
      totalOrders: 15,
      totalSpent: 320.00,
      points: 1500,
      status: "active",
      lastOrderDate: "2023-10-12",
      createdAt: "2023-01-30",
      updatedAt: "2023-10-12"
    }
  ]);

  const [filters, setFilters] = useState({
    status: '',
    search: ''
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-primary)]';
      case 'inactive': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-secondary)]';
      case 'banned': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-secondary)]';
      default: return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-secondary)]';
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-[var(--admin-text-primary)]">Customers</h1>
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
                <option value="banned">Banned</option>
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
                placeholder="Search customers..."
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

      {/* Customers Table */}
      <div className="bg-[var(--admin-card-bg)] rounded-xl border border-[var(--admin-border)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[var(--admin-border)]">
            <thead className="bg-[var(--admin-bg-secondary)]">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Customer</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Email</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Phone</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Total Orders</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Total Spent</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Points</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--admin-border)]">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-[var(--admin-bg-secondary)]/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-[var(--admin-bg-secondary)] flex items-center justify-center">
                          <User className="w-5 h-5 text-[var(--admin-text-accent)]" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-[var(--admin-text-primary)]">{customer.name}</div>
                        <div className="text-sm text-[var(--admin-text-secondary)]">Joined {new Date(customer.createdAt).toLocaleDateString()}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-1 text-[var(--admin-text-secondary)]" />
                      {customer.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-1 text-[var(--admin-text-secondary)]" />
                      {customer.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">{customer.totalOrders}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[var(--admin-text-primary)]">${customer.totalSpent.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">{customer.points}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(customer.status)}`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-[var(--admin-text-secondary)] hover:text-[var(--admin-text-accent)] p-1">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-[var(--admin-text-secondary)] hover:text-[var(--admin-text-accent)] p-1">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-[var(--admin-text-secondary)] hover:text-red-500 p-1">
                        {customer.status === 'active' ? <Shield className="w-4 h-4" /> : <ShieldOff className="w-4 h-4" />}
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

export default Customers;