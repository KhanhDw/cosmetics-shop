import React, { useState } from 'react';
import { Plus, Package, Tag, Edit, Trash2 } from 'lucide-react';
import { Category, Brand } from '../types';

const CategoriesBrands: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'categories' | 'brands'>('categories');
  
  // Mock categories data
  const [categories] = useState<Category[]>([
    {
      id: 1,
      name: "Skincare",
      slug: "skincare",
      description: "Skin care products",
      order: 1,
      status: 'active',
      createdAt: "2023-01-15",
      updatedAt: "2023-10-10"
    },
    {
      id: 2,
      name: "Makeup",
      slug: "makeup",
      description: "Cosmetics and makeup products",
      order: 2,
      status: 'active',
      createdAt: "2023-02-20",
      updatedAt: "2023-09-15"
    },
    {
      id: 3,
      name: "Haircare",
      slug: "haircare",
      description: "Hair care products",
      order: 3,
      status: 'inactive',
      createdAt: "2023-03-10",
      updatedAt: "2023-10-05"
    }
  ]);

  // Mock brands data
  const [brands] = useState<Brand[]>([
    {
      id: 1,
      name: "Vitamin Beauty",
      slug: "vitamin-beauty",
      description: "Natural vitamin-based cosmetics",
      country: "USA",
      status: 'active',
      createdAt: "2023-01-15",
      updatedAt: "2023-10-10"
    },
    {
      id: 2,
      name: "HydraCare",
      slug: "hydracare",
      description: "Hydrating skincare solutions",
      country: "South Korea",
      status: 'active',
      createdAt: "2023-02-20",
      updatedAt: "2023-09-15"
    },
    {
      id: 3,
      name: "EcoGlow",
      slug: "ecoglow",
      description: "Eco-friendly beauty products",
      country: "France",
      status: 'active',
      createdAt: "2023-03-10",
      updatedAt: "2023-10-05"
    }
  ]);

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
        <h1 className="text-2xl font-bold text-[var(--admin-text-primary)]">
          {activeTab === 'categories' ? 'Categories' : 'Brands'}
        </h1>
        <button className="flex items-center px-4 py-2 bg-[var(--admin-text-accent)] text-white rounded-lg hover:bg-[var(--admin-text-accent)]/90 transition-colors">
          <Plus className="w-4 h-4 mr-2" />
          Add {activeTab === 'categories' ? 'Category' : 'Brand'}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[var(--admin-border)] mb-6">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'categories'
              ? 'border-b-2 border-[var(--admin-text-accent)] text-[var(--admin-text-accent)]'
              : 'text-[var(--admin-text-secondary)]'
          }`}
          onClick={() => setActiveTab('categories')}
        >
          <div className="flex items-center">
            <Package className="w-4 h-4 mr-2" />
            Categories
          </div>
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'brands'
              ? 'border-b-2 border-[var(--text-accent)] text-[var(--text-accent)]'
              : 'text-[var(--text-secondary)] dark:text-[var(--text-secondary)]'
          }`}
          onClick={() => setActiveTab('brands')}
        >
          <div className="flex items-center">
            <Tag className="w-4 h-4 mr-2" />
            Brands
          </div>
        </button>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'categories' ? (
        <div className="bg-[var(--admin-card-bg)] rounded-xl border border-[var(--admin-border)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[var(--admin-border)]">
              <thead className="bg-[var(--admin-bg-secondary)]">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Slug</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Description</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Order</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--admin-border)]">
                {categories.map((category) => (
                  <tr key={category.id} className="hover:bg-[var(--admin-bg-secondary)]/50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-[var(--admin-text-primary)]">{category.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">{category.slug}</td>
                    <td className="px-6 py-4 text-sm text-[var(--admin-text-primary)]">{category.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">{category.order}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(category.status)}`}>
                        {category.status}
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
      ) : (
        <div className="bg-[var(--admin-card-bg)] rounded-xl border border-[var(--admin-border)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[var(--admin-border)]">
              <thead className="bg-[var(--admin-bg-secondary)]">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Logo</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Brand Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Slug</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Country</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--admin-border)]">
                {brands.map((brand) => (
                  <tr key={brand.id} className="hover:bg-[var(--admin-bg-secondary)]/50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-[var(--admin-bg-secondary)] flex items-center justify-center">
                          <span className="text-[var(--admin-text-accent)] font-bold">{brand.name.charAt(0)}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-[var(--admin-text-primary)]">{brand.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">{brand.slug}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">{brand.country}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(brand.status)}`}>
                        {brand.status}
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
      )}
    </div>
  );
};

export default CategoriesBrands;