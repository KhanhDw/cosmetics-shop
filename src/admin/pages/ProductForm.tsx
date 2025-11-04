import React, { useState } from 'react';
import { Package, Upload, X, Plus } from 'lucide-react';
import { Product, ProductVariant } from '../types';

interface ProductFormProps {
  product?: Product;
  onSubmit: (product: Product) => void;
  onCancel: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<Product>({
    id: product?.id || 0,
    name: product?.name || '',
    slug: product?.slug || '',
    description: product?.description || '',
    shortDescription: product?.shortDescription || '',
    price: product?.price || 0,
    originalPrice: product?.originalPrice || 0,
    stock: product?.stock || 0,
    categoryId: product?.categoryId || 0,
    brandId: product?.brandId || 0,
    images: product?.images || [],
    status: product?.status || 'active',
    expirationDate: product?.expirationDate || '',
    variants: product?.variants || [],
    createdAt: product?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });

  const [newVariant, setNewVariant] = useState<ProductVariant>({
    id: 0,
    productId: 0,
    name: '',
    sku: '',
    price: 0,
    stock: 0,
    attributes: {}
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addVariant = () => {
    if (newVariant.name && newVariant.sku) {
      const variantToAdd = {
        ...newVariant,
        id: formData.variants.length + 1,
        productId: formData.id
      };
      
      setFormData(prev => ({
        ...prev,
        variants: [...prev.variants, variantToAdd]
      }));
      
      setNewVariant({
        id: 0,
        productId: 0,
        name: '',
        sku: '',
        price: 0,
        stock: 0,
        attributes: {}
      });
    }
  };

  const removeVariant = (index: number) => {
    setFormData(prev => ({
      ...prev,
      variants: prev.variants.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-[var(--admin-text-primary)] mb-6">
        {product ? 'Edit Product' : 'Add New Product'}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Information */}
        <div className="bg-[var(--card-bg)] dark:bg-[var(--card-bg)] p-6 rounded-xl border border-[var(--border)] dark:border-[var(--border)]">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] dark:text-[var(--text-primary)] mb-4">Product Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                Product Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                Slug
              </label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                Price *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                Original Price
              </label>
              <input
                type="number"
                name="originalPrice"
                value={formData.originalPrice}
                onChange={handleChange}
                min="0"
                step="0.01"
                className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                Category *
              </label>
              <select
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
              >
                <option value="">Select Category</option>
                <option value="1">Skincare</option>
                <option value="2">Makeup</option>
                <option value="3">Haircare</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                Brand *
              </label>
              <select
                name="brandId"
                value={formData.brandId}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
              >
                <option value="">Select Brand</option>
                <option value="1">Brand 1</option>
                <option value="2">Brand 2</option>
                <option value="3">Brand 3</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                Stock Quantity *
              </label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                required
                min="0"
                className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                Expiration Date
              </label>
              <input
                type="date"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                Short Description
              </label>
              <textarea
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                rows={2}
                className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                Status
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="active"
                    checked={formData.status === 'active'}
                    onChange={handleChange}
                    className="text-[var(--text-accent)] focus:ring-[var(--text-accent)]"
                  />
                  <span className="ml-2 text-[var(--text-primary)] dark:text-[var(--text-primary)]">Active</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="inactive"
                    checked={formData.status === 'inactive'}
                    onChange={handleChange}
                    className="text-[var(--text-accent)] focus:ring-[var(--text-accent)]"
                  />
                  <span className="ml-2 text-[var(--text-primary)] dark:text-[var(--text-primary)]">Inactive</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="out_of_stock"
                    checked={formData.status === 'out_of_stock'}
                    onChange={handleChange}
                    className="text-[var(--text-accent)] focus:ring-[var(--text-accent)]"
                  />
                  <span className="ml-2 text-[var(--text-primary)] dark:text-[var(--text-primary)]">Out of Stock</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="bg-[var(--card-bg)] dark:bg-[var(--card-bg)] p-6 rounded-xl border border-[var(--border)] dark:border-[var(--border)]">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] dark:text-[var(--text-primary)] mb-4">Product Images</h2>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                Main Image
              </label>
              <div className="border-2 border-dashed border-[var(--border)] dark:border-[var(--border)] rounded-lg p-6 text-center">
                {imagePreview ? (
                  <div className="relative inline-block">
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="w-32 h-32 object-cover rounded-lg mx-auto"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedImage(null);
                        setImagePreview(null);
                      }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div>
                    <Upload className="w-12 h-12 text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mx-auto mb-2" />
                    <p className="text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-2">Click to upload or drag and drop</p>
                    <p className="text-xs text-[var(--text-secondary)] dark:text-[var(--text-secondary)]">PNG, JPG up to 5MB</p>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="main-image-upload"
                />
                <label 
                  htmlFor="main-image-upload"
                  className="mt-4 inline-block px-4 py-2 bg-[var(--text-accent)] text-white rounded-lg cursor-pointer hover:bg-[var(--text-accent)]/90 transition-colors"
                >
                  Select Image
                </label>
              </div>
            </div>
            
            <div className="flex-1">
              <label className="block text-sm font-medium text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">
                Gallery Images
              </label>
              <div className="border-2 border-dashed border-[var(--border)] dark:border-[var(--border)] rounded-lg p-6 text-center">
                <Upload className="w-12 h-12 text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mx-auto mb-2" />
                <p className="text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-2">Click to upload or drag and drop</p>
                <p className="text-xs text-[var(--text-secondary)] dark:text-[var(--text-secondary)]">PNG, JPG up to 5MB</p>
                <button
                  type="button"
                  className="mt-4 px-4 py-2 bg-[var(--text-accent)] text-white rounded-lg hover:bg-[var(--text-accent)]/90 transition-colors"
                >
                  Add Images
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Variants */}
        <div className="bg-[var(--card-bg)] dark:bg-[var(--card-bg)] p-6 rounded-xl border border-[var(--border)] dark:border-[var(--border)]">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] dark:text-[var(--text-primary)] mb-4">Product Variants</h2>
          
          <div className="space-y-4">
            {formData.variants.map((variant, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-[var(--border)] dark:border-[var(--border)] rounded-lg">
                <div>
                  <p className="font-medium text-[var(--text-primary)] dark:text-[var(--text-primary)]">{variant.name}</p>
                  <p className="text-sm text-[var(--text-secondary)] dark:text-[var(--text-secondary)]">SKU: {variant.sku}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-[var(--text-secondary)] dark:text-[var(--text-secondary)]">
                    ${variant.price} | {variant.stock} in stock
                  </span>
                  <button
                    type="button"
                    onClick={() => removeVariant(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-[var(--border)] dark:border-[var(--border)] rounded-lg">
              <div>
                <label className="block text-sm text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">Variant Name</label>
                <input
                  type="text"
                  value={newVariant.name}
                  onChange={(e) => setNewVariant({...newVariant, name: e.target.value})}
                  className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
                  placeholder="e.g. Color Red"
                />
              </div>
              
              <div>
                <label className="block text-sm text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">SKU</label>
                <input
                  type="text"
                  value={newVariant.sku}
                  onChange={(e) => setNewVariant({...newVariant, sku: e.target.value})}
                  className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
                  placeholder="e.g. SKU-RED-001"
                />
              </div>
              
              <div>
                <label className="block text-sm text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">Price</label>
                <input
                  type="number"
                  value={newVariant.price || ''}
                  onChange={(e) => setNewVariant({...newVariant, price: parseFloat(e.target.value) || 0})}
                  className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                />
              </div>
              
              <div>
                <label className="block text-sm text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mb-1">Stock</label>
                <input
                  type="number"
                  value={newVariant.stock || ''}
                  onChange={(e) => setNewVariant({...newVariant, stock: parseInt(e.target.value) || 0})}
                  className="w-full px-3 py-2 border border-[var(--border)] dark:border-[var(--border)] rounded-lg bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
                  placeholder="0"
                  min="0"
                />
              </div>
            </div>
            
            <button
              type="button"
              onClick={addVariant}
              className="flex items-center px-4 py-2 bg-[var(--text-accent)] text-white rounded-lg hover:bg-[var(--text-accent)]/90 transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Variant
            </button>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 border border-[var(--border)] dark:border-[var(--border)] text-[var(--text-primary)] dark:text-[var(--text-primary)] rounded-lg hover:bg-[var(--bg-secondary)] dark:hover:bg-[var(--bg-secondary)] transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-[var(--text-accent)] text-white rounded-lg hover:bg-[var(--text-accent)]/90 transition-colors"
          >
            {product ? 'Update Product' : 'Create Product'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;