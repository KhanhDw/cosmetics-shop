import React, { useState, useMemo, useCallback, startTransition } from "react";
import { useTranslation } from 'react-i18next';
import { Product } from "@/types";
import ProductCard from "./ProductCard";
import FilterSidebar from "./FilterSidebar";
import Pagination from "@/components/ui/common/Pagination";
import PromoBanner from "@/components/ui/common/PromoBanner";

interface ProductListPresentationalProps {
  products: Product[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  selectedCategory: string;
  categories: string[];
  onCategoryChange: (category: string) => void;
}

// Presentational component that focuses on UI and rendering
const ProductListPresentational: React.FC<ProductListPresentationalProps> = ({
  products,
  loading,
  error,
  currentPage,
  onPageChange,
  selectedCategory,
  categories,
  onCategoryChange,
}) => {
  // State for filter sidebar
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);

  // Filter states
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [ratingFilter, setRatingFilter] = useState(0);
  
  // Pagination state
  const [itemsPerPage] = useState<number>(12); // Default items per page

  const { t } = useTranslation();

  // Extract unique brands from products
  const brands = useMemo(() => {
    const brandSet = new Set<string>();
    products.forEach((product) => {
      if (product.brand) {
        brandSet.add(product.brand);
      }
    });
    return Array.from(brandSet);
  }, [products]);

  // Extract all tags/needs from products (using category as tag for now)
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    products.forEach((product) => {
      if (product.category) {
        tagSet.add(product.category);
      }
    });
    return Array.from(tagSet);
  }, [products]);

  // Memoize the filtered products calculation
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand || '');
      const matchesTag = selectedTags.length === 0 || selectedTags.some(tag => 
        (product.category && product.category.includes(tag)) || 
        (product.name && product.name.toLowerCase().includes(tag.toLowerCase()))
      );
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesRating = product.rating >= ratingFilter;
      
      return matchesBrand && matchesTag && matchesPrice && matchesRating;
    });
  }, [products, selectedBrands, selectedTags, priceRange, ratingFilter]);

  // Memoize pagination calculations
  const paginationData = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    
    return { indexOfLastItem, indexOfFirstItem, currentProducts, totalPages };
  }, [filteredProducts, currentPage, itemsPerPage]);

  const handleClearFilters = useCallback(() => {
    startTransition(() => {
      setSelectedBrands([]);
      setSelectedTags([]);
      setPriceRange([0, 1000]);
      setRatingFilter(0);
    });
  }, []);

  const handleApplyFilters = useCallback(() => {
    startTransition(() => {
      setIsFilterSidebarOpen(false);
    });
  }, []);

  const handleBrandChange = useCallback((brand: string) => {
    startTransition(() => {
      if (selectedBrands.includes(brand)) {
        setSelectedBrands(selectedBrands.filter((b) => b !== brand));
      } else {
        setSelectedBrands([...selectedBrands, brand]);
      }
    });
  }, [selectedBrands]);

  const handleTagChange = useCallback((tag: string) => {
    startTransition(() => {
      if (selectedTags.includes(tag)) {
        setSelectedTags(selectedTags.filter((t) => t !== tag));
      } else {
        setSelectedTags([...selectedTags, tag]);
      }
    });
  }, [selectedTags]);

  const handlePriceChange = useCallback((range: [number, number]) => {
    startTransition(() => {
      setPriceRange(range);
    });
  }, []);

  const handleRatingChange = useCallback((rating: number) => {
    startTransition(() => {
      setRatingFilter(rating);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <div className="text-red-500 text-xl mb-4">{t('common.error')}: {error}</div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => window.location.reload()}
        >
          {t('common.try_again')}
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {t('products.title')}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          {t('products.description')}
        </p>
      </div>

      <PromoBanner />

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters sidebar */}
        <div className="w-full md:w-80 flex-shrink-0">
          <FilterSidebar
            isOpen={isFilterSidebarOpen}
            onClose={() => setIsFilterSidebarOpen(false)}
            categories={categories}
            brands={brands}
            selectedCategories={
              selectedCategory === "all" ? [] : [selectedCategory]
            }
            selectedBrands={selectedBrands}
            selectedTags={selectedTags}
            priceRange={priceRange}
            ratingFilter={ratingFilter}
            onCategoryChange={onCategoryChange}
            onBrandChange={handleBrandChange}
            onTagChange={handleTagChange}
            onPriceChange={handlePriceChange}
            onRatingChange={handleRatingChange}
            onClearFilters={handleClearFilters}
            onApplyFilters={handleApplyFilters}
            allTags={allTags}
          />
        </div>

        {/* Product grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 items-stretch">
                {paginationData.currentProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={() => {}}
                    onWishlistToggle={() => {}}
                  />
                ))}
              </div>

              {paginationData.totalPages > 1 && (
                <div className="mt-12 flex justify-center">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={paginationData.totalPages}
                    onPageChange={onPageChange}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {t('products.no_products_found')}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {t('products.try_different_category')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MemoizedProductListPresentational = React.memo(ProductListPresentational);
export default MemoizedProductListPresentational;
