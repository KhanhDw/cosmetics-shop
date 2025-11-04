import React, { useState, useEffect, useRef } from 'react';
import { useDebounce } from '@/hooks/useDebounce';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface Blog {
  id: number;
  title: string;
  date: string;
  excerpt: string;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 300); // 300ms debounce
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Mock data for products and blogs
  const mockProducts: Product[] = [
    { id: 1, name: 'Kem dưỡng ẩm cao cấp', price: 590000, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80', category: 'Dưỡng da' },
    { id: 2, name: 'Serum Vitamin C', price: 450000, image: 'https://images.unsplash.com/photo-1600857062241-98c0a9ed8f6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80', category: 'Serum' },
    { id: 3, name: 'Sữa rửa mặt dịu nhẹ', price: 290000, image: 'https://images.unsplash.com/photo-1585001496472-4505d0e252d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80', category: 'Làm sạch' },
    { id: 4, name: 'Mặt nạ ngủ collagen', price: 390000, image: 'https://images.unsplash.com/photo-1600857062376-170252397089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80', category: 'Mặt nạ' },
    { id: 5, name: 'Toner hoa cúc', price: 320000, image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80', category: 'Toner' },
  ];

  const mockBlogs: Blog[] = [
    { id: 1, title: 'Cách dưỡng da hiệu quả cho mùa đông', date: '15/10/2023', excerpt: 'Mùa đông khiến da dễ bị khô ráp. Đây là cách chăm sóc da phù hợp...' },
    { id: 2, title: 'Top 5 sản phẩm chống nắng tốt nhất năm 2023', date: '10/09/2023', excerpt: 'Chống nắng là bước không thể thiếu trong quy trình skincare. Đây là những sản phẩm được chuyên gia đánh giá cao...' },
    { id: 3, title: 'Làm đẹp với nguyên liệu tự nhiên', date: '05/08/2023', excerpt: 'Bạn có biết nhiều nguyên liệu trong nhà bếp có thể dùng để làm đẹp?...' },
  ];

  // Filter products based on debounced search query
  const filteredProducts = mockProducts.filter(product => 
    product.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  // Filter blogs based on debounced search query
  const filteredBlogs = mockBlogs.filter(blog => 
    blog.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  // Focus input when overlay opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle keyboard events (ESC key to close)
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  // Prevent body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col max-h-[700px] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input section */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm sản phẩm, bài viết..."
              className="w-full pl-10 pr-12 py-3 text-lg rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-pink-300 focus:border-pink-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            />
            <button
              onClick={onClose}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search results section */}
        <div className="flex-1 overflow-y-auto p-6">
          {searchQuery ? (
            <div className="space-y-8">
              {/* Products section */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Sản phẩm nổi bật</h3>
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredProducts.slice(0, 5).map(product => (
                      <div 
                        key={product.id} 
                        className="flex items-center p-3 rounded-lg hover:bg-pink-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer transform hover:scale-[1.02]"
                      >
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="ml-4">
                          <h4 className="font-medium text-gray-800 dark:text-white">{product.name}</h4>
                          <p className="text-pink-500 font-semibold">{product.price.toLocaleString('vi-VN')}₫</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">Không tìm thấy sản phẩm phù hợp</p>
                )}
              </div>

              {/* Blogs section */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Bài viết mới</h3>
                {filteredBlogs.length > 0 ? (
                  <div className="space-y-3">
                    {filteredBlogs.slice(0, 3).map(blog => (
                      <div 
                        key={blog.id} 
                        className="p-3 rounded-lg hover:bg-pink-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                      >
                        <h4 className="font-medium text-gray-800 dark:text-white">{blog.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{blog.date}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">Không tìm thấy bài viết phù hợp</p>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Popular products section */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Sản phẩm nổi bật</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {mockProducts.slice(0, 5).map(product => (
                    <div 
                      key={product.id} 
                      className="flex items-center p-3 rounded-lg hover:bg-pink-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer transform hover:scale-[1.02]"
                    >
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="ml-4">
                        <h4 className="font-medium text-gray-800 dark:text-white">{product.name}</h4>
                        <p className="text-pink-500 font-semibold">{product.price.toLocaleString('vi-VN')}₫</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Latest blogs section */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Bài viết mới</h3>
                <div className="space-y-3">
                  {mockBlogs.slice(0, 3).map(blog => (
                    <div 
                      key={blog.id} 
                      className="p-3 rounded-lg hover:bg-pink-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                    >
                      <h4 className="font-medium text-gray-800 dark:text-white">{blog.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{blog.date}</p>
                    </div>
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

export default SearchOverlay;