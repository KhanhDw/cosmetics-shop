import React, { useState, useEffect, useMemo } from "react";
import { SlidersHorizontal, Grid } from "lucide-react";
import ProductCard from "@/components/feature/product/ProductCard";
import FilterSidebar from "@/components/feature/product/FilterSidebar";
import Pagination from "@/components/ui/common/Pagination";
import PromoBanner from "@/components/ui/common/PromoBanner";
import productsData from "@/data/products.json";
import { toast } from "react-toastify";

interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  comparePrice: number | null;
  rating: number;
  image: string;
  badges: string[];
  tags: string[];
}

const ITEMS_PER_PAGE = 9;

const ProductListingPage: React.FC = () => {
  const [products] = useState<Product[]>(productsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("default");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000000]);
  const [ratingFilter, setRatingFilter] = useState(0);

  // Get unique values for filters
  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    [products]
  );
  const brands = useMemo(
    () => [...new Set(products.map((p) => p.brand))],
    [products]
  );
  const allTags = useMemo(
    () => [...new Set(products.flatMap((p) => p.tags))],
    [products]
  );

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const matchesBrand =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchesTag =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => product.tags.includes(tag));
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesRating =
        ratingFilter === 0 || product.rating >= ratingFilter;

      return (
        matchesCategory &&
        matchesBrand &&
        matchesTag &&
        matchesPrice &&
        matchesRating
      );
    });

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        // Assuming newer products have higher IDs
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return filtered;
  }, [
    products,
    selectedCategories,
    selectedBrands,
    selectedTags,
    priceRange,
    ratingFilter,
    sortBy,
  ]);

  // Pagination
  const totalPages = Math.ceil(
    filteredAndSortedProducts.length / ITEMS_PER_PAGE
  );
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedCategories,
    selectedBrands,
    selectedTags,
    priceRange,
    ratingFilter,
    sortBy,
  ]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleTagChange = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedTags([]);
    setPriceRange([0, 2000000]);
    setRatingFilter(0);
  };

  const handleApplyFilters = () => {
    setIsSidebarOpen(false);
  };

  const handleAddToCart = (id: string) => {
    toast.success(`Đã thêm sản phẩm ${id} vào giỏ hàng!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <FilterSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          categories={categories}
          brands={brands}
          selectedCategories={selectedCategories}
          selectedBrands={selectedBrands}
          selectedTags={selectedTags}
          priceRange={priceRange}
          ratingFilter={ratingFilter}
          onCategoryChange={handleCategoryChange}
          onBrandChange={handleBrandChange}
          onTagChange={handleTagChange}
          onPriceChange={setPriceRange}
          onRatingChange={setRatingFilter}
          onClearFilters={handleClearFilters}
          onApplyFilters={handleApplyFilters}
          allTags={allTags}
        />

        {/* Main Content */}
        <div className="flex-1">
          {/* Promo Banner - shown after first row on desktop */}
          <div className="hidden lg:block mb-8">
            <PromoBanner />
          </div>

          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-[color:var(--bg-secondary)] rounded-lg hover:bg-[color:var(--bg-tertiary)] transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Bộ Lọc</span>
              </button>
              <div className="text-sm text-[color:var(--text-secondary)] !text-[color:var(--text-secondary)]">
                Hiển thị {paginatedProducts.length} trong{" "}
                {filteredAndSortedProducts.length} sản phẩm
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-[color:var(--border)] rounded-lg bg-[color:var(--card-bg)] text-[color:var(--text-primary)] focus:ring-[color:var(--text-accent)] focus:border-[color:var(--text-accent)]"
              >
                <option value="default">Mặc định</option>
                <option value="newest">Mới nhất</option>
                <option value="price-low">Giá: thấp → cao</option>
                <option value="price-high">Giá: cao → thấp</option>
                <option value="rating">Đánh giá cao nhất</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          {paginatedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {paginatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={() => handleAddToCart(product.id.toString())}
                    onWishlistToggle={() => {}}
                  />
                ))}
              </div>

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          ) : (
            <div className="text-center py-16">
              <div className="mb-6">
                <div className="w-24 h-24 bg-[color:var(--bg-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Grid className="w-12 h-12 text-[color:var(--text-secondary)] !text-[color:var(--text-secondary)]" />
                </div>
                <h3 className="text-xl font-semibold text-[color:var(--text-primary)] !text-[color:var(--text-primary)] mb-2">
                  Không tìm thấy sản phẩm phù hợp
                </h3>
                <p className="text-[color:var(--text-secondary)] !text-[color:var(--text-secondary)] mb-6">
                  Thử xóa một vài bộ lọc hoặc xem các sản phẩm nổi bật bên dưới.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="px-6 py-3 bg-gradient-to-r from-[color:var(--text-accent)] to-[color:var(--text-secondary)] text-white rounded-full font-medium hover:shadow-md transition-all"
                >
                  Xóa Bộ Lọc
                </button>
              </div>

              {/* Featured Products when no results */}
              <div className="mt-12">
                <h4 className="text-lg font-semibold text-[color:var(--text-primary)] !text-[color:var(--text-primary)] mb-6">
                  Sản Phẩm Nổi Bật
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.slice(0, 3).map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={() => handleAddToCart(product.id.toString())}
                      onWishlistToggle={() => {}}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
