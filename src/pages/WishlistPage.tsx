import React, { useState, useEffect, useMemo } from "react";
import { Heart, ShoppingBag, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { getRandomCosmeticImageUrl } from "@/utils/imageService";
import { useDebounce } from "@/hooks/useDebounce";

const WishlistPagePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <main>
        <WishlistPage />
      </main>
    </div>
  );
};

const WishlistPage: React.FC = () => {
  // Mock wishlist data
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300); // 300ms debounce
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Show 8 items per page

  // Simulate loading data
  useEffect(() => {
    // In a real app, this would be an API call
    setTimeout(() => {
      setWishlist([
        {
          id: 1,
          name: "Kem dưỡng ẩm cao cấp với Hyaluronic Acid",
          price: 590000,
          image: getRandomCosmeticImageUrl(400, 400),
          category: "Dưỡng da",
          rating: 4.8,
        },
        {
          id: 2,
          name: "Serum Vitamin C chống lão hóa",
          price: 790000,
          originalPrice: 890000,
          image: getRandomCosmeticImageUrl(400, 400),
          category: "Serum",
          rating: 4.9,
        },
        {
          id: 3,
          name: "Sữa rửa mặt dịu nhẹ cho da nhạy cảm",
          price: 390000,
          image: getRandomCosmeticImageUrl(400, 400),
          category: "Làm sạch",
          rating: 4.7,
        },
        {
          id: 4,
          name: "Mặt nạ ngủ collagen dưỡng da ban đêm",
          price: 650000,
          image: getRandomCosmeticImageUrl(400, 400),
          category: "Mặt nạ",
          rating: 4.6,
        },
        {
          id: 5,
          name: "Toner hoa cúc làm dịu da",
          price: 420000,
          image: getRandomCosmeticImageUrl(400, 400),
          category: "Toner",
          rating: 4.5,
        },
        {
          id: 6,
          name: "Dầu tẩy trang làm sạch sâu",
          price: 480000,
          image: getRandomCosmeticImageUrl(400, 400),
          category: "Làm sạch",
          rating: 4.7,
        },
        {
          id: 7,
          name: "Kem chống nắng SPF 50+ vật lý",
          price: 520000,
          image: getRandomCosmeticImageUrl(400, 400),
          category: "Chống nắng",
          rating: 4.8,
        },
        {
          id: 8,
          name: "Tẩy tế bào chết dạng gel",
          price: 450000,
          image: getRandomCosmeticImageUrl(400, 400),
          category: "Làm sạch",
          rating: 4.6,
        },
        {
          id: 9,
          name: "Tinh chất Retinol chống lão hóa",
          price: 890000,
          originalPrice: 990000,
          image: getRandomCosmeticImageUrl(400, 400),
          category: "Serum",
          rating: 4.9,
        },
        {
          id: 10,
          name: "Sữa dưỡng thể hương hoa nhài",
          price: 380000,
          image: getRandomCosmeticImageUrl(400, 400),
          category: "Dưỡng thể",
          rating: 4.5,
        },
        {
          id: 11,
          name: "Mặt nạ đất sét than hoạt tính",
          price: 320000,
          image: getRandomCosmeticImageUrl(400, 400),
          category: "Mặt nạ",
          rating: 4.4,
        },
        {
          id: 12,
          name: "Dầu dưỡng da ban đêm",
          price: 680000,
          image: getRandomCosmeticImageUrl(400, 400),
          category: "Dưỡng da",
          rating: 4.7,
        },
      ]);
      setIsLoading(false);
    }, 500);
  }, []);

  // Filter products based on search query
  const filteredWishlist = useMemo(() => {
    if (!debouncedSearchQuery) return wishlist;
    return wishlist.filter(
      (item) =>
        item.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );
  }, [wishlist, debouncedSearchQuery]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredWishlist.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedWishlist = filteredWishlist.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Reset to first page when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const toggleItemSelection = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedItems.length === paginatedWishlist.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(paginatedWishlist.map((item) => item.id));
    }
  };

  const removeItem = (id: number) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
    setSelectedItems(selectedItems.filter((item) => item !== id));
  };

  const removeAllSelected = () => {
    setWishlist(wishlist.filter((item) => !selectedItems.includes(item.id)));
    setSelectedItems([]);
  };

  const addToCart = (id: number) => {
    // In a real app, this would add the item to the cart
    // Remove from wishlist after adding to cart
    setWishlist(wishlist.filter((item) => item.id !== id));
    setSelectedItems(selectedItems.filter((item) => item !== id));
  };

  const addToCartSelected = () => {
    setWishlist(wishlist.filter((item) => !selectedItems.includes(item.id)));
    setSelectedItems([]);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen py-12 bg-[var(--bg-primary)]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="w-1/3 h-8 mb-6 bg-[var(--text-secondary)]/20 rounded"></div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="p-4 bg-[var(--card-bg)] shadow-lg rounded-2xl animate-fadeIn"
                >
                  <div className="h-48 mb-4 bg-[var(--text-secondary)]/20 rounded-xl"></div>
                  <div className="w-3/4 h-4 mb-2 bg-[var(--text-secondary)]/20 rounded"></div>
                  <div className="w-1/2 h-4 mb-4 bg-[var(--text-secondary)]/20 rounded"></div>
                  <div className="h-10 bg-[var(--text-secondary)]/20 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-[var(--bg-primary)]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <nav className="flex items-center text-sm text-[var(--text-secondary)]">
            <Link
              to="/"
              className="transition-colors hover:text-[var(--text-accent)]"
            >
              Trang chủ
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--text-primary)]">
              Danh sách yêu thích
            </span>
          </nav>
          <div className="flex flex-col gap-4 mt-4 md:flex-row md:items-center md:justify-between">
            <h1 className="text-3xl font-bold text-[var(--text-primary)] animate-fadeIn">
              Danh sách yêu thích 💖
            </h1>
            {wishlist.length > 0 && (
              <span className="text-lg text-[var(--text-secondary)]">
                {wishlist.length} sản phẩm
              </span>
            )}
          </div>

          {/* Search Bar */}
          <div className="relative mt-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-[var(--text-secondary)]" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm sản phẩm trong danh sách yêu thích..."
              className="w-full py-3 pl-10 pr-4 text-lg border border-[var(--border)] rounded-xl focus:ring-2 focus:ring-[var(--text-accent)] focus:border-[var(--text-accent)] bg-[var(--card-bg)] text-[var(--text-primary)]"
            />
          </div>
        </div>

        {/* Action Bar when items are selected */}
        {selectedItems.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 z-10 px-4 py-3 bg-[var(--card-bg)] border-t border-[var(--border)] shadow-lg animate-slideUp">
            <div className="flex items-center justify-between mx-auto max-w-7xl">
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleSelectAll}
                  className="text-sm text-[var(--text-accent)] transition-colors hover:text-[var(--text-accent)]/80"
                >
                  {selectedItems.length === paginatedWishlist.length
                    ? "Bỏ chọn tất cả"
                    : "Chọn tất cả"}
                </button>
                <span className="text-[var(--text-secondary)]">
                  {selectedItems.length} mục được chọn
                </span>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={removeAllSelected}
                  className="px-4 py-2 text-[var(--text-primary)] transition-colors duration-200 bg-[var(--card-bg)]/50 rounded-lg hover:bg-[var(--card-bg)]/70"
                >
                  Xóa
                </button>
                <button
                  onClick={addToCartSelected}
                  className="flex items-center px-4 py-2 text-white transition-colors duration-200 transform bg-[var(--text-accent)] rounded-lg hover:bg-[var(--text-accent)] hover:scale-105"
                >
                  <ShoppingBag className="w-4 h-4 mr-1" />
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        {wishlist.length === 0 ? (
          // Empty state
          <div className="flex flex-col items-center justify-center py-20 text-center animate-fadeIn">
            <div className="mb-6 animate-bounce">
              <div className="flex items-center justify-center w-48 h-48 mx-auto bg-[var(--text-accent)]/10 rounded-full">
                <Heart className="w-24 h-24 text-[var(--text-accent)]/30" />
              </div>
            </div>
            <h2 className="mb-2 text-2xl font-bold text-[var(--text-primary)]">
              Bạn chưa có sản phẩm yêu thích nào 💔
            </h2>
            <p className="max-w-md mb-6 text-[var(--text-secondary)]">
              Danh sách yêu thích của bạn đang trống. Hãy khám phá những sản
              phẩm tuyệt vời của chúng tôi!
            </p>
            <Link
              to="/products"
              className="flex items-center px-6 py-3 text-white transition-colors duration-200 transform bg-[var(--text-accent)] rounded-lg hover:bg-[var(--text-accent)] hover:scale-105"
            >
              Khám phá sản phẩm ngay
            </Link>
          </div>
        ) : filteredWishlist.length === 0 ? (
          // No search results
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-6">
              <div className="flex items-center justify-center w-48 h-48 mx-auto bg-[var(--text-accent)]/10 rounded-full">
                <Search className="w-16 h-16 text-[var(--text-accent)]/30" />
              </div>
            </div>
            <h2 className="mb-2 text-2xl font-bold text-[var(--text-primary)]">
              Không tìm thấy sản phẩm
            </h2>
            <p className="max-w-md mb-6 text-[var(--text-secondary)]">
              Không có sản phẩm nào phù hợp với tìm kiếm của bạn "{searchQuery}
              ". Hãy thử từ khóa khác.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="px-6 py-3 text-white transition-colors duration-200 transform bg-[var(--text-accent)] rounded-lg hover:bg-[var(--text-accent)]"
            >
              Xóa tìm kiếm
            </button>
          </div>
        ) : (
          <>
            {/* Product grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {paginatedWishlist.map((product) => (
                <div
                  key={product.id}
                  className={`bg-[var(--card-bg)] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl animate-fadeIn ${
                    selectedItems.includes(product.id)
                      ? "ring-2 ring-[var(--text-accent)]"
                      : ""
                  }`}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-64 transition-transform duration-300 rounded-t-2xl hover:scale-105"
                    />
                    <button
                      onClick={() => removeItem(product.id)}
                      className="absolute flex items-center justify-center w-10 h-10 text-[var(--text-accent)] transition-all duration-200 transform bg-[var(--card-bg)] rounded-full shadow-md top-3 right-3 hover:bg-[var(--card-bg)]/50 hover:scale-110"
                      aria-label="Remove from wishlist"
                    >
                      <Heart className="w-5 h-5 fill-current animate-pulse" />
                    </button>
                    <button
                      onClick={() => toggleItemSelection(product.id)}
                      className={`absolute top-3 left-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                        selectedItems.includes(product.id)
                          ? "bg-[var(--text-accent)] text-white"
                          : "bg-[var(--card-bg)] text-[var(--text-primary)]"
                      }`}
                      aria-label={
                        selectedItems.includes(product.id)
                          ? "Bỏ chọn"
                          : "Chọn sản phẩm"
                      }
                    >
                      {selectedItems.includes(product.id) ? (
                        <span className="text-lg">✓</span>
                      ) : (
                        <span className="text-lg">+</span>
                      )}
                    </button>
                  </div>

                  <div className="p-4">
                    <h3 
                      className="mb-1 font-medium text-[var(--text-primary)] line-clamp-2 max-h-[3.5rem] overflow-hidden"
                      title={product.name}
                    >
                      <span className="inline-block max-w-full break-words">
                        {product.name}
                      </span>
                    </h3>
                    <p className="mb-2 text-sm text-[var(--text-secondary)]">
                      {product.category}
                    </p>

                    <div className="flex items-center mb-3">
                      <span className="text-lg font-bold text-[var(--text-accent)]">
                        {product.price.toLocaleString("vi-VN")}₫
                      </span>
                      {product.originalPrice && (
                        <span className="ml-2 text-sm text-[var(--text-secondary)] line-through">
                          {product.originalPrice.toLocaleString("vi-VN")}₫
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => addToCart(product.id)}
                        className="flex-1 py-2 bg-[var(--bg-secondary)]/30 text-[var(--text-accent)] rounded-lg hover:bg-[var(--bg-secondary)]/50 transition-colors duration-200 flex items-center justify-center transform hover:scale-[1.02]"
                      >
                        <ShoppingBag className="w-4 h-4 mr-1" />
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center mt-10 space-x-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === 1
                      ? "bg-[var(--card-bg)]/50 text-[var(--text-secondary)]/50 cursor-not-allowed"
                      : "bg-[var(--card-bg)]/50 text-[var(--text-primary)] hover:bg-[var(--card-bg)]/70"
                  }`}
                >
                  Trước
                </button>

                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNum = index + 1;

                  // Show first page, last page, current page, and 2 pages around current page
                  if (
                    pageNum === 1 ||
                    pageNum === totalPages ||
                    (pageNum >= currentPage - 2 && pageNum <= currentPage + 2)
                  ) {
                    return (
                      <button
                        key={pageNum}
                        onClick={() => {
                          setCurrentPage(pageNum);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className={`w-10 h-10 rounded-full ${
                          currentPage === pageNum
                            ? "bg-[var(--text-accent)] text-white"
                            : "bg-[var(--card-bg)]/50 text-[var(--text-primary)] hover:bg-[var(--card-bg)]/70"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  }

                  // Show ellipsis if there's a gap in numbers
                  if (
                    (pageNum === currentPage - 3 && currentPage > 4) ||
                    (pageNum === currentPage + 3 &&
                      currentPage < totalPages - 3)
                  ) {
                    return (
                      <span
                        key={`ellipsis-${pageNum}`}
                        className="px-2"
                      >
                        ...
                      </span>
                    );
                  }

                  return null; // Don't render pages not in the range
                })}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === totalPages
                      ? "bg-[var(--card-bg)]/50 text-[var(--text-secondary)]/50 cursor-not-allowed"
                      : "bg-[var(--card-bg)]/50 text-[var(--text-primary)] hover:bg-[var(--card-bg)]/70"
                  }`}
                >
                  Sau
                </button>
              </div>
            )}

            {/* Results info */}
            <div className="mt-4 text-center text-[var(--text-secondary)]">
              Hiển thị {startIndex + 1}-
              {Math.min(startIndex + itemsPerPage, filteredWishlist.length)}
              trong số {filteredWishlist.length} sản phẩm
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WishlistPagePage;
