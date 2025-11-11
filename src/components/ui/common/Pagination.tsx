import React, { useMemo, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onLoadMore?: () => void;
  showLoadMore?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  onLoadMore,
  showLoadMore = false,
}) => {
  // Generate page numbers to display
  const pageNumbers = useMemo(() => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }, [currentPage, totalPages]);

  if (showLoadMore && onLoadMore) {
    return (
      <div className="text-center py-8">
        <button
          onClick={onLoadMore}
          className="px-6 py-3 bg-gradient-to-r from-[color:var(--text-accent)] to-[color:var(--text-secondary)] text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
        >
          Tải Thêm Sản Phẩm
        </button>
      </div>
    );
  }

  const handlePrevious = useCallback(() => {
    onPageChange(currentPage - 1);
  }, [onPageChange, currentPage]);

  const handleNext = useCallback(() => {
    onPageChange(currentPage + 1);
  }, [onPageChange, currentPage]);

  const handlePageClick = useCallback((page: number) => {
    onPageChange(page);
  }, [onPageChange]);

  if (showLoadMore && onLoadMore) {
    const handleLoadMore = useCallback(() => {
      onLoadMore();
    }, [onLoadMore]);

    return (
      <div className="text-center py-8">
        <button
          onClick={handleLoadMore}
          className="px-6 py-3 bg-gradient-to-r from-[color:var(--text-accent)] to-[color:var(--text-secondary)] text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
        >
          Tải Thêm Sản Phẩm
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center space-x-2 py-8">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="p-2 rounded-lg border border-[color:var(--border)] hover:bg-[color:var(--bg-secondary)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Trang trước"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`px-4 py-2 rounded-lg border transition-colors ${
            page === currentPage
              ? "bg-gradient-to-r from-[color:var(--text-accent)] to-[color:var(--text-secondary)] text-white border-transparent"
              : "border-[color:var(--border)] hover:bg-[color:var(--bg-secondary)]"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg border border-[color:var(--border)] hover:bg-[color:var(--bg-secondary)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Trang sau"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

const MemoizedPagination = React.memo(Pagination);
export default MemoizedPagination;
