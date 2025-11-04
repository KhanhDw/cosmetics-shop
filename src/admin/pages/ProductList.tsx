import React, { useState } from 'react';
import { Plus, Search, Package, Filter, Edit, Trash2, Eye } from 'lucide-react';
import { Product } from '../types';

const ProductList: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Vitamin C Serum",
      slug: "vitamin-c-serum",
      description: "Brightening serum with 20% vitamin C",
      shortDescription: "Powerful antioxidant serum",
      price: 29.99,
      originalPrice: 39.99,
      stock: 45,
      categoryId: 1,
      brandId: 1,
      images: ["/api/placeholder/100/100"],
      status: 'active',
      expirationDate: "2025-12-31",
      createdAt: "2023-01-15",
      updatedAt: "2023-10-10",
      variants: []
    },
    {
      id: 2,
      name: "Hydrating Moisturizer",
      slug: "hydrating-moisturizer",
      description: "Deep hydration for all skin types",
      shortDescription: "24-hour hydration",
      price: 19.99,
      originalPrice: 24.99,
      stock: 23,
      categoryId: 2,
      brandId: 2,
      images: ["/api/placeholder/100/100"],
      status: 'active',
      expirationDate: "2025-10-31",
      createdAt: "2023-02-20",
      updatedAt: "2023-09-15",
      variants: []
    },
    {
      id: 3,
      name: "Retinol Night Cream",
      slug: "retinol-night-cream",
      description: "Anti-aging cream with 0.5% retinol",
      shortDescription: "Reduce fine lines and wrinkles",
      price: 34.99,
      originalPrice: 44.99,
      stock: 0,
      categoryId: 1,
      brandId: 1,
      images: ["/api/placeholder/100/100"],
      status: 'out_of_stock',
      expirationDate: "2025-08-31",
      createdAt: "2023-03-10",
      updatedAt: "2023-10-05",
      variants: []
    }
  ]);

  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    search: ''
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-primary)]';
      case 'inactive': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-secondary)]';
      case 'out_of_stock': return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-secondary)]';
      default: return 'bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-secondary)]';
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-[var(--admin-text-primary)]">Products</h1>
        <button className="flex items-center px-4 py-2 bg-[var(--admin-text-accent)] text-white rounded-lg hover:bg-[var(--admin-text-accent)]/90 transition-colors">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-[var(--admin-card-bg)] p-4 rounded-xl border border-[var(--admin-border)] mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="px-4 py-2 pr-8 rounded-full border border-[var(--admin-border)] bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)] appearance-none"
              >
                <option value="">All Categories</option>
                <option value="skincare">Skincare</option>
                <option value="makeup">Makeup</option>
                <option value="haircare">Haircare</option>
              </select>
              <div className="absolute right-3 top-2.5 text-[var(--admin-text-secondary)]">
                <Filter className="w-4 h-4" />
              </div>
            </div>

            <div className="relative">
              <select
                value={filters.brand}
                onChange={(e) => handleFilterChange('brand', e.target.value)}
                className="px-4 py-2 pr-8 rounded-full border border-[var(--admin-border)] bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)] appearance-none"
              >
                <option value="">All Brands</option>
                <option value="brand1">Brand 1</option>
                <option value="brand2">Brand 2</option>
                <option value="brand3">Brand 3</option>
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
                placeholder="Search products..."
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

      {/* Products Table */}
      <div className="bg-[var(--admin-card-bg)] rounded-xl border border-[var(--admin-border)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[var(--admin-border)]">
            <thead className="bg-[var(--admin-bg-secondary)]">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Product</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Category</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Price</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Stock</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-[var(--admin-text-secondary)] uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--admin-border)]">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-[var(--admin-bg-secondary)]/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-md object-cover" src={product.images[0]} alt={product.name} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-[var(--admin-text-primary)]">{product.name}</div>
                        <div className="text-sm text-[var(--admin-text-secondary)]">{product.slug}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">Skincare</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--admin-text-primary)]">
                    {product.stock > 0 ? product.stock : <span className="text-[var(--admin-text-secondary)]">Out of Stock</span>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(product.status)}`}>
                      {product.status.replace('_', ' ')}
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
    </div>
  );
};

export default ProductList;