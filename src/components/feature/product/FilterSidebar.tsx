import React from "react";
import { X, SlidersHorizontal } from "lucide-react";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  categories: string[];
  brands: string[];
  selectedCategories: string[];
  selectedBrands: string[];
  selectedTags: string[];
  priceRange: [number, number];
  ratingFilter: number;
  onCategoryChange: (category: string) => void;
  onBrandChange: (brand: string) => void;
  onTagChange: (tag: string) => void;
  onPriceChange: (range: [number, number]) => void;
  onRatingChange: (rating: number) => void;
  onClearFilters: () => void;
  onApplyFilters: () => void;
  allTags: string[];
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen,
  onClose,
  categories,
  brands,
  selectedCategories,
  selectedBrands,
  selectedTags,
  priceRange,
  ratingFilter,
  onCategoryChange,
  onBrandChange,
  onTagChange,
  onPriceChange,
  onRatingChange,
  onClearFilters,
  onApplyFilters,
  allTags,
}) => {
  const sidebarContent = (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold text-[var(--text-primary)] !text-[var(--text-primary)] mb-3">Danh Mục</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => onCategoryChange(category)}
                className="rounded border-[color:var(--border)] accent-[color:var(--text-accent)] focus:ring-[color:var(--text-accent)]"
              />
              <span className="ml-2 text-sm text-[var(--text-secondary)] !text-[var(--text-secondary)]">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div>
        <h3 className="font-semibold text-[var(--text-primary)] !text-[var(--text-primary)] mb-3">Thương Hiệu</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center"
            >
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => onBrandChange(brand)}
                className="rounded border-[color:var(--border)] accent-[color:var(--text-accent)] focus:ring-[color:var(--text-accent)]"
              />
              <span className="ml-2 text-sm text-[color:var(--text-secondary)] !text-[color:var(--text-secondary)]">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-[color:var(--text-primary)] !text-[color:var(--text-primary)] mb-3">Khoảng Giá</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="Từ"
              value={priceRange[0]}
              onChange={(e) =>
                onPriceChange([Number(e.target.value), priceRange[1]])
              }
              className="w-full px-3 py-2 border border-[var(--border)] rounded-md text-sm focus:ring-[var(--text-accent)] focus:border-[var(--text-accent)] bg-[var(--card-bg)] text-[var(--text-primary)]"
            />
            <span className="text-[var(--text-secondary)] !text-[var(--text-secondary)]">-</span>
            <input
              type="number"
              placeholder="Đến"
              value={priceRange[1]}
              onChange={(e) =>
                onPriceChange([priceRange[0], Number(e.target.value)])
              }
              className="w-full px-3 py-2 border border-[var(--border)] rounded-md text-sm focus:ring-[var(--text-accent)] focus:border-[var(--text-accent)] bg-[var(--card-bg)] text-[var(--text-primary)]"
            />
          </div>
        </div>
      </div>

      {/* Tags/Needs */}
      <div>
        <h3 className="font-semibold text-[var(--text-primary)] !text-[var(--text-primary)] mb-3">Nhu Cầu</h3>
        <div className="space-y-2">
          {allTags.map((tag) => (
            <label
              key={tag}
              className="flex items-center"
            >
              <input
                type="checkbox"
                checked={selectedTags.includes(tag)}
                onChange={() => onTagChange(tag)}
                className="rounded border-[color:var(--border)] accent-[color:var(--text-accent)] focus:ring-[color:var(--text-accent)]"
              />
              <span className="ml-2 text-sm text-[var(--text-secondary)] !text-[var(--text-secondary)] capitalize">
                {tag.replace("-", " ")}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-semibold text-[var(--text-primary)] !text-[var(--text-primary)] mb-3">Đánh Giá</h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <label
              key={rating}
              className="flex items-center"
            >
              <input
                type="radio"
                name="rating"
                checked={ratingFilter === rating}
                onChange={() => onRatingChange(rating)}
                className="border-[var(--border)] accent-[var(--text-accent)] focus:ring-[var(--text-accent)]"
              />
              <span className="ml-2 text-sm text-[var(--text-secondary)] !text-[var(--text-secondary)]">{rating}+ sao</span>
            </label>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2 pt-4 border-t border-[var(--border)]">
        <button
          onClick={onClearFilters}
          className="flex-1 px-4 py-2 text-sm font-medium text-[var(--text-secondary)] !text-[var(--text-secondary)] bg-[var(--bg-secondary)] rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"
        >
          Xóa Bộ Lọc
        </button>
        <button
          onClick={onApplyFilters}
          className="flex-1 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[var(--text-accent)] to-[var(--text-secondary)] rounded-lg hover:shadow-md transition-all"
        >
          Áp Dụng
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 bg-[var(--bg-secondary)] dark:bg-[var(--bg-secondary)] rounded-lg p-6 sticky top-4 h-fit">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-[var(--text-primary)] !text-[var(--text-primary)] flex items-center">
            <SlidersHorizontal className="w-5 h-5 mr-2" />
            Bộ Lọc
          </h2>
        </div>
        {sidebarContent}
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={onClose}
          ></div>
          <div className="absolute right-0 top-0 h-full w-80 bg-[var(--card-bg)] dark:bg-[var(--card-bg)] shadow-xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[var(--text-primary)] !text-[var(--text-primary)]">Bộ Lọc</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-[var(--bg-secondary)] rounded-full transition-colors text-[var(--text-primary)]"
                aria-label="Đóng bộ lọc"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};

export default FilterSidebar;
