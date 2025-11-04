import React, { useState } from 'react';
import { Search, Filter, User, Mail, Phone, Edit, Trash2, Shield, ShieldOff, Plus } from 'lucide-react';
import { Staff } from '../types';

const StaffManagement: React.FC = () => {
  const [staff] = useState<Staff[]>([
    {
      id: 1,
      name: "Admin User",
      email: "admin@example.com",
      phone: "+84 123 456 789",
      role: "admin",
      permissions: [
        { id: 1, name: "view_products", description: "View products" },
        { id: 2, name: "edit_products", description: "Edit products" },
        { id: 3, name: "delete_products", description: "Delete products" },
        { id: 4, name: "view_orders", description: "View orders" },
        { id: 5, name: "manage_staff", description: "Manage staff" }
      ],
      status: "active",
      lastLogin: "2023-10-15T10:30:00Z",
      createdAt: "2023-01-15",
      updatedAt: "2023-10-15"
    },
    {
      id: 2,
      name: "Manager User",
      email: "manager@example.com",
      phone: "+84 987 654 321",
      role: "manager",
      permissions: [
        { id: 1, name: "view_products", description: "View products" },
        { id: 2, name: "edit_products", description: "Edit products" },
        { id: 4, name: "view_orders", description: "View orders" }
      ],
      status: "active",
      lastLogin: "2023-10-14T14:20:00Z",
      createdAt: "2023-02-20",
      updatedAt: "2023-10-14"
    },
    {
      id: 3,
      name: "Employee User",
      email: "employee@example.com",
      phone: "+84 654 321 987",
      role: "employee",
      permissions: [
        { id: 1, name: "view_products", description: "View products" },
        { id: 4, name: "view_orders", description: "View orders" }
      ],
      status: "inactive",
      lastLogin: "2023-09-20T09:15:00Z",
      createdAt: "2023-03-10",
      updatedAt: "2023-09-20"
    }
  ]);

  const [filters, setFilters] = useState({
    role: '',
    status: '',
    search: ''
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-primary)]';
      case 'manager': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-primary)]';
      case 'employee': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-primary)]';
      default: return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-secondary)]';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-primary)]';
      case 'inactive': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-secondary)]';
      default: return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-secondary)]';
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-[var(--admin-text-primary)]">Staff</h1>
        <button className="flex items-center px-4 py-2 bg-[var(--admin-text-accent)] text-white rounded-lg hover:bg-[var(--admin-text-accent)]/90 transition-colors">
          <Plus className="w-4 h-4 mr-2" />
          Add Staff
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-[var(--admin-card-bg)] p-4 rounded-xl border border-[var(--admin-border)] mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <select
                value={filters.role}
                onChange={(e) => handleFilterChange('role', e.target.value)}
                className="px-4 py-2 pr-8 rounded-full border border-[var(--admin-border)] bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)] appearance-none"
              >
                <option value="">All Roles</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="employee">Employee</option>
              </select>
              <div className="absolute right-3 top-2.5 text-[var(--admin-text-secondary)]">
                <Filter className="w-4 h-4" />
              </div>
            </div>

            <div className="relative">
              <select
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="px-4 py-2 pr-8 rounded-full border border-[var(--admin-border)] bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)] appearance-none"
              >
                <option value="">All Statuses</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
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
                placeholder="Search staff..."
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

      {/* Staff Table */}
      <div className="bg-[var(--admin-card-bg)] rounded-xl border border-[var(--admin-border)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[var(--admin-border)]">
            <thead className="bg-[var(--admin-bg-secondary)]">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Staff</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Email</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Phone</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Role</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Permissions</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--admin-border)]">
              {staff.map((member) => (
                <tr key={member.id} className="hover:bg-[var(--admin-bg-secondary)]/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-[var(--admin-bg-secondary)] flex items-center justify-center">
                          <User className="w-5 h-5 text-[var(--admin-text-accent)]" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-[var(--admin-text-primary)]">{member.name}</div>
                        <div className="text-sm text-[var(--admin-text-secondary)]">
                          Last login: {member.lastLogin ? new Date(member.lastLogin).toLocaleDateString() : 'Never'}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">{member.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">{member.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleColor(member.role)}`}>
                      {member.role.charAt(0).toUpperCase() + member.role.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">
                    {member.permissions.length} permissions
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(member.status)}`}>
                      {member.status}
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
                      <button className="text-[var(--admin-text-secondary)] hover:text-yellow-500 p-1">
                        {member.status === 'active' ? <Shield className="w-4 h-4" /> : <ShieldOff className="w-4 h-4" />}
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

export default StaffManagement;