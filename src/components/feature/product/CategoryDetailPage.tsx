import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Search } from "lucide-react";
import Header from "@/components/ui/layout/Header";
import Footer from "@/components/ui/layout/Footer";
import { useDebounce } from '@/hooks/useDebounce';

const CategoryDetailPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CategoryDetail />
      </main>
      <Footer />
    </div>
  );
};
export default CategoryDetailPage;

// Mock data
const categories = [
  {
    id: 1,
    name: "Chăm sóc da",
    description:
      "Khám phá các sản phẩm chăm sóc da chất lượng cao phù hợp với mọi loại da",
    image:
      "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Trang điểm",
    description:
      "Các sản phẩm trang điểm đa dạng từ tự nhiên đến đậm chất cá tính",
    image:
      "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Dưỡng ẩm",
    description:
      "Giữ làn da luôn mềm mại và tươi tắn với các sản phẩm dưỡng ẩm hiệu quả",
    image:
      "https://picsum.photos/200/300",
  },
];

const products = [
  // Products for category 1 - Chăm sóc da
  {
    id: 1,
    name: "Sữa rửa mặt dịu nhẹ",
    price: 299000,
    originalPrice: 329000,
    rating: 4.5,
    reviewCount: 128,
    image:
      "https://picsum.photos/200/300",
    category: 1,
    brand: "SkinCare Plus",
    skinType: "Da nhạy cảm",
    discount: 10,
  },
  {
    id: 2,
    name: "Toner cân bằng da",
    price: 350000,
    originalPrice: 390000,
    rating: 4.7,
    reviewCount: 89,
    image:
      "https://picsum.photos/200/300",
    category: 1,
    brand: "Pure Skin",
    skinType: "Da hỗn hợp",
    discount: 12,
  },
  {
    id: 3,
    name: "Serum vitamin C",
    price: 650000,
    originalPrice: 720000,
    rating: 4.8,
    reviewCount: 210,
    image:
      "https://picsum.photos/200/300",
    category: 1,
    brand: "Vitamin Glow",
    skinType: "Da thường",
    discount: 15,
  },
  {
    id: 4,
    name: "Kem dưỡng ẩm ban đêm",
    price: 420000,
    originalPrice: 480000,
    rating: 4.6,
    reviewCount: 156,
    image:
      "https://picsum.photos/200/300",
    category: 1,
    brand: "Nocturnal Care",
    skinType: "Da khô",
    discount: 13,
  },
  {
    id: 5,
    name: "Mặt nạ ngủ dưỡng da",
    price: 380000,
    originalPrice: 420000,
    rating: 4.4,
    reviewCount: 95,
    image:
      "https://picsum.photos/200/300",
    category: 1,
    brand: "Sleep Beauty",
    skinType: "Da thường",
    discount: 10,
  },
  {
    id: 6,
    name: "Tẩy tế bào chết",
    price: 280000,
    originalPrice: 320000,
    rating: 4.3,
    reviewCount: 78,
    image:
      "https://picsum.photos/200/300",
    category: 1,
    brand: "Exfoliate Pro",
    skinType: "Da dầu",
    discount: 12,
  },
  {
    id: 7,
    name: "Kem chống nắng SPF 50+",
    price: 399000,
    originalPrice: 450000,
    rating: 4.9,
    reviewCount: 187,
    image:
      "https://picsum.photos/200/300",
    category: 1,
    brand: "Sun Shield",
    skinType: "Da nhạy cảm",
    discount: 11,
  },
  {
    id: 8,
    name: "Tinh chất Retinol",
    price: 720000,
    originalPrice: 800000,
    rating: 4.7,
    reviewCount: 64,
    image:
      "https://picsum.photos/200/300",
    category: 1,
    brand: "Retinol Boost",
    skinType: "Da lão hóa",
    discount: 10,
  },
  {
    id: 9,
    name: "Kem mắt giảm thâm",
    price: 450000,
    originalPrice: 490000,
    rating: 4.5,
    reviewCount: 120,
    image:
      "https://picsum.photos/200/300",
    category: 1,
    brand: "Eye Revive",
    skinType: "Da thường",
    discount: 8,
  },
  {
    id: 10,
    name: "Sữa rửa mặt tạo bọt",
    price: 320000,
    originalPrice: 360000,
    rating: 4.2,
    reviewCount: 87,
    image:
      "https://picsum.photos/200/300",
    category: 1,
    brand: "Foam Clean",
    skinType: "Da dầu",
    discount: 11,
  },
  {
    id: 11,
    name: "Tinh chất Hyaluronic",
    price: 580000,
    originalPrice: 650000,
    rating: 4.8,
    reviewCount: 145,
    image:
      "https://picsum.photos/200/300",
    category: 1,
    brand: "Hydra Boost",
    skinType: "Da khô",
    discount: 11,
  },
  {
    id: 12,
    name: "Mặt nạ đất sét",
    price: 350000,
    originalPrice: 390000,
    rating: 4.3,
    reviewCount: 67,
    image:
      "https://picsum.photos/200/300",
    category: 1,
    brand: "Clay Magic",
    skinType: "Da dầu",
    discount: 10,
  },

  // Products for category 2 - Trang điểm
  {
    id: 13,
    name: "Phấn nền lì",
    price: 450000,
    originalPrice: 500000,
    rating: 4.6,
    reviewCount: 210,
    image:
      "https://picsum.photos/200/300",
    category: 2,
    brand: "Matte Finish",
    skinType: "Da dầu",
    discount: 10,
  },
  {
    id: 14,
    name: "Son kem lì",
    price: 320000,
    originalPrice: 360000,
    rating: 4.7,
    reviewCount: 189,
    image:
      "https://picsum.photos/200/300",
    category: 2,
    brand: "Lip Art",
    skinType: "Tất cả loại da",
    discount: 11,
  },
  {
    id: 15,
    name: "Kẻ mắt nước",
    price: 280000,
    originalPrice: 320000,
    rating: 4.4,
    reviewCount: 145,
    image:
      "https://picsum.photos/200/300",
    category: 2,
    brand: "Liquid Eye",
    skinType: "Tất cả loại da",
    discount: 12,
  },
  {
    id: 16,
    name: "Mascara không trôi",
    price: 350000,
    originalPrice: 400000,
    rating: 4.8,
    reviewCount: 167,
    image:
      "https://picsum.photos/200/300",
    category: 2,
    brand: "Waterproof Lash",
    skinType: "Da nhạy cảm",
    discount: 13,
  },
  {
    id: 17,
    name: "Phấn má hồng",
    price: 420000,
    originalPrice: 470000,
    rating: 4.5,
    reviewCount: 123,
    image:
      "https://picsum.photos/200/300",
    category: 2,
    brand: "Blush Glow",
    skinType: "Tất cả loại da",
    discount: 11,
  },
  {
    id: 18,
    name: "Bảng mắt 9 ô",
    price: 580000,
    originalPrice: 650000,
    rating: 4.9,
    reviewCount: 201,
    image:
      "https://picsum.photos/200/300",
    category: 2,
    brand: "Palette Pro",
    skinType: "Tất cả loại da",
    discount: 11,
  },

  // Products for category 3 - Dưỡng ẩm
  {
    id: 19,
    name: "Kem dưỡng ẩm ban ngày",
    price: 480000,
    originalPrice: 530000,
    rating: 4.7,
    reviewCount: 178,
    image:
      "https://picsum.photos/200/300",
    category: 3,
    brand: "Moisture Day",
    skinType: "Da khô",
    discount: 9,
  },
  {
    id: 20,
    name: "Tinh chất dưỡng ẩm",
    price: 750000,
    originalPrice: 820000,
    rating: 4.8,
    reviewCount: 156,
    image:
      "https://picsum.photos/200/300",
    category: 3,
    brand: "Hydra Essence",
    skinType: "Da hỗn hợp",
    discount: 9,
  },
  {
    id: 21,
    name: "Gel dưỡng ẩm",
    price: 420000,
    originalPrice: 470000,
    rating: 4.4,
    reviewCount: 134,
    image:
      "https://picsum.photos/200/300",
    category: 3,
    brand: "Gel Moist",
    skinType: "Da dầu",
    discount: 11,
  },
  {
    id: 22,
    name: "Kem dưỡng ẩm chống lão hóa",
    price: 850000,
    originalPrice: 920000,
    rating: 4.9,
    reviewCount: 192,
    image:
      "https://picsum.photos/200/300",
    category: 3,
    brand: "Anti-Age Moist",
    skinType: "Da lão hóa",
    discount: 8,
  },
  {
    id: 23,
    name: "Mặt nạ cấp ẩm",
    price: 290000,
    originalPrice: 320000,
    rating: 4.6,
    reviewCount: 115,
    image:
      "https://picsum.photos/200/300",
    category: 3,
    brand: "Hydra Mask",
    skinType: "Tất cả loại da",
    discount: 9,
  },
  {
    id: 24,
    name: "Xịt khoáng dưỡng ẩm",
    price: 320000,
    originalPrice: 360000,
    rating: 4.3,
    reviewCount: 98,
    image:
      "https://picsum.photos/200/300",
    category: 3,
    brand: "Mist Hydration",
    skinType: "Da nhạy cảm",
    discount: 11,
  },
];

// Category Detail Page Component
const CategoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Default to first category
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Products per page
  const [sortBy, setSortBy] = useState("newest"); // Default sort
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSkinTypes, setSelectedSkinTypes] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300); // 300ms debounce
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const categoryId = parseInt(id || "1");
    const category = categories.find((cat) => cat.id === categoryId);
    if (category) {
      setSelectedCategory(category);
    }
  }, [id]);

  // Filter products based on criteria
  const filteredProducts = products
    .filter((product) => product.category === selectedCategory.id)
    .filter((product) => {
      if (debouncedSearchTerm) {
        return product.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
      }
      return true;
    })
    .filter((product) => {
      if (selectedBrands.length > 0) {
        return selectedBrands.includes(product.brand);
      }
      return true;
    })
    .filter((product) => {
      if (selectedSkinTypes.length > 0) {
        return selectedSkinTypes.includes(product.skinType);
      }
      return true;
    })
    .filter((product) => {
      return product.price >= priceRange[0] && product.price <= priceRange[1];
    });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.name.localeCompare(b.name);
      default: // newest
        return b.id - a.id;
    }
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  // Handle brand selection
  const handleBrandToggle = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  // Handle skin type selection
  const handleSkinTypeToggle = (skinType: string) => {
    if (selectedSkinTypes.includes(skinType)) {
      setSelectedSkinTypes(selectedSkinTypes.filter((st) => st !== skinType));
    } else {
      setSelectedSkinTypes([...selectedSkinTypes, skinType]);
    }
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  // Separate component for product filters
  const ProductFilters = () => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      {/* Search Input */}
      <div className="mb-6">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Search Products
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            placeholder="Search products..."
          />
        </div>
      </div>

      {/* Sort By */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Sort By
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="block w-full py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
        >
          <option value="newest">Newest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
          <option value="name">Name A-Z</option>
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Price Range
        </label>
        <div className="space-y-2">
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="0"
              max="1000000"
              step="10000"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
              className="w-full"
            />
            <input
              type="range"
              min="0"
              max="1000000"
              step="10000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>{formatCurrency(priceRange[0])}</span>
            <span>{formatCurrency(priceRange[1])}</span>
          </div>
        </div>
      </div>

      {/* Brands Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Brands
        </label>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {Array.from(new Set(products
            .filter(p => p.category === selectedCategory.id)
            .map(p => p.brand)
            .filter(brand => brand)
          )).map((brand) => (
            <div key={brand} className="flex items-center">
              <input
                type="checkbox"
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandToggle(brand)}
                className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
              />
              <label htmlFor={`brand-${brand}`} className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Skin Types Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Skin Types
        </label>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {Array.from(new Set(products
            .filter(p => p.category === selectedCategory.id)
            .map(p => p.skinType)
            .filter(skinType => skinType)
          )).map((skinType) => (
            <div key={skinType} className="flex items-center">
              <input
                type="checkbox"
                id={`skinType-${skinType}`}
                checked={selectedSkinTypes.includes(skinType)}
                onChange={() => handleSkinTypeToggle(skinType)}
                className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
              />
              <label htmlFor={`skinType-${skinType}`} className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {skinType}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)]">
      {/* Breadcrumb */}
      <div className="container px-4 py-4 mx-auto">
        <nav className="text-sm text-secondary !text-secondary">
          <ol className="flex space-x-2">
            <li>
              <a
                href="#"
                className="hover:text-[var(--text-accent)]"
              >
                Trang chủ
              </a>
            </li>
            <li>/</li>
            <li>
              <a
                href="#"
                className="hover:text-[var(--text-accent)]"
              >
                Danh mục
              </a>
            </li>
            <li>/</li>
            <li className="text-primary text-primary">
              {selectedCategory.name}
            </li>
          </ol>
        </nav>
      </div>

      {/* Category Banner */}
      <div
        className="relative flex items-center justify-center bg-center bg-cover h-80"
        style={{ backgroundImage: `url(${selectedCategory.image})` }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/40 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-4xl p-8 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-wide md:text-5xl text-primary">
            {selectedCategory.name}
          </h1>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed md:text-xl text-secondary">
            {selectedCategory.description}
          </p>
          <div className="flex items-center justify-center mt-6 space-x-4">
            <div className="w-16 h-1 bg-accent rounded-full"></div>
            <div className="h-0.5 w-8 bg-secondary rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar Filters (Desktop) - Hidden on mobile */}
          <div className="hidden lg:w-1/4 lg:block">
            <div className="sticky top-24">
              <ProductFilters />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Filter Bar */}
            <div className="sticky z-40 p-5 mb-6 bg-[var(--card-bg)] dark:bg-[var(--card-bg)] border border-[var(--border)] shadow-sm rounded-xl top-20">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="text-secondary !text-secondary">
                  <span className="font-medium text-[var(--text-accent)] !text-[var(--text-accent)]">
                    {sortedProducts.length}
                  </span>{" "}
                  sản phẩm
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder="Tìm kiếm sản phẩm..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-2.5 pl-10 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)] focus:border-[var(--text-accent)] bg-[var(--card-bg)] dark:bg-[var(--card-bg)] text-primary shadow-sm"
                    />
                    <svg
                      className="absolute w-5 h-5 text-secondary !text-secondary left-3 top-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2.5 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)] focus:border-[var(--text-accent)] bg-[var(--card-bg)] dark:bg-[var(--card-bg)] text-primary shadow-sm"
                  >
                    <option value="newest">Mới nhất</option>
                    <option value="price-low">Giá: Thấp đến cao</option>
                    <option value="price-high">Giá: Cao đến thấp</option>
                    <option value="rating">Đánh giá</option>
                    <option value="name">Tên A-Z</option>
                  </select>

                  <button
                    className="flex items-center justify-center px-4 py-2.5 text-[var(--text-accent)] !text-[var(--text-accent)] bg-linear-to-r from-[var(--bg-tertiary)] to-[var(--bg-secondary)] rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 lg:hidden"
                    onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                      />
                    </svg>
                    Lọc
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Filters (Hidden on Desktop) */}
            {mobileFiltersOpen && (
              <div className="p-6 mb-6 bg-[var(--card-bg)] dark:bg-[var(--card-bg)] shadow-sm lg:hidden rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-primary !text-primary">
                    Lọc theo
                  </h3>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="text-secondary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <ProductFilters />
              </div>
            )}

            {/* Product Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="overflow-hidden transition-all duration-300 bg-[var(--card-bg)] dark:bg-[var(--card-bg)] shadow-sm rounded-xl hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/10 to-transparent hover:opacity-100"></div>
                    {product.discount > 0 && (
                      <div className="absolute px-3 py-1 text-sm font-bold text-white shadow-md bg-linear-to-r from-[var(--text-accent)] to-[var(--text-secondary)] rounded-br-xl rounded-tl-xl top-3 left-3">
                        -{product.discount}%
                      </div>
                    )}
                    <div className="absolute flex flex-col space-y-2 top-3 right-3">
                      <button className="p-2 transition-all duration-300 transform bg-[var(--card-bg)] rounded-full shadow-md hover:bg-[var(--bg-tertiary)] hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-secondary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                      <button className="p-2 transition-all duration-300 transform bg-[var(--card-bg)] rounded-full shadow-md hover:bg-[var(--bg-tertiary)] hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-secondary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="mb-2 font-medium text-primary !text-primary transition-colors duration-300 line-clamp-2 hover:text-[var(--text-accent)]">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? "text-[var(--text-accent)] fill-[var(--text-accent)]"
                                : "text-[var(--border)]"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-1 text-sm text-secondary !text-secondary">
                        ({product.reviewCount})
                      </span>
                    </div>

                    <div className="flex flex-col justify-between gap-3">
                      <div>
                        <span className="text-lg font-bold text-[var(--text-accent)] !text-[var(--text-accent)]">
                          {formatCurrency(product.price)}
                        </span>
                        {product.originalPrice > product.price && (
                          <div>
                            <span className="ml-2 text-sm text-secondary !text-secondary line-through">
                              {formatCurrency(product.originalPrice)}
                            </span>
                            <span className="ml-2 text-xs font-semibold text-[var(--text-accent)] !text-[var(--text-accent)]">
                              -
                              {Math.round(
                                (1 - product.price / product.originalPrice) *
                                  100
                              )}
                              %
                            </span>
                          </div>
                        )}
                      </div>
                      <button className="flex items-center px-4 py-2 text-sm font-medium text-white transition-all duration-300 transform rounded-lg shadow-sm bg-linear-to-r from-[var(--text-accent)] to-[var(--text-secondary)] hover:from-[var(--text-secondary)] hover:to-[var(--text-accent)] hover:scale-105 hover:shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-1">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className={`p-2.5 rounded-full ${
                      currentPage === 1
                        ? "text-secondary cursor-not-allowed"
                        : "text-secondary bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-accent)] transition-colors duration-300"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-full text-sm font-medium transition-all duration-300 ${
                          currentPage === page
                            ? "bg-linear-to-r from-[var(--text-accent)] to-[var(--text-secondary)] text-white shadow-md"
                            : "text-secondary bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-accent)]"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className={`p-2.5 rounded-full ${
                      currentPage === totalPages
                        ? "text-secondary cursor-not-allowed"
                        : "text-secondary bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-accent)] transition-colors duration-300"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </nav>
              </div>
            )}

            {/* Related Products Section */}
            <div className="mt-16">
              <h2 className="mb-6 text-2xl font-bold text-primary !text-primary">
                Gợi ý sản phẩm nổi bật
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {products.slice(0, 4).map((product) => (
                  <div
                    key={product.id}
                    className="overflow-hidden transition-all duration-300 bg-[var(--card-bg)] dark:bg-[var(--card-bg)] shadow-sm rounded-xl hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/10 to-transparent hover:opacity-100"></div>
                      {product.discount > 0 && (
                        <div className="absolute px-2 py-1 text-xs font-bold text-white rounded-tl-lg rounded-br-lg shadow-md bg-linear-to-r from-[var(--text-accent)] to-[var(--text-secondary)] top-2 left-2">
                          -{product.discount}%
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="mb-2 font-medium text-primary !text-primary transition-colors duration-300 hover:text-[var(--text-accent)]">
                        {product.name}
                      </h3>
                      <div className="flex items-center mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating)
                                  ? "text-[var(--text-accent)] fill-[var(--text-accent)]"
                                  : "text-[var(--border)]"
                              }`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-1 text-sm text-secondary !text-secondary">
                          (
                          {product.reviewCount ||
                            Math.floor(product.rating * 10)}
                          )
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold text-[var(--text-accent)] !text-[var(--text-accent)]">
                            {formatCurrency(product.price)}
                          </span>
                          {product.originalPrice > product.price && (
                            <div>
                              <span className="ml-2 text-sm text-secondary !text-secondary line-through">
                                {formatCurrency(product.originalPrice)}
                              </span>
                              <span className="ml-2 text-xs font-semibold text-[var(--text-accent)] !text-[var(--text-accent)]">
                                -
                                {Math.round(
                                  (1 - product.price / product.originalPrice) *
                                    100
                                )}
                                %
                              </span>
                            </div>
                          )}
                        </div>
                        <button className="flex items-center justify-center p-2 text-white transition-all duration-300 transform rounded-full shadow-sm bg-linear-to-r from-[var(--text-accent)] to-[var(--text-secondary)] hover:from-[var(--text-secondary)] hover:to-[var(--text-accent)] hover:scale-110 hover:shadow-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
