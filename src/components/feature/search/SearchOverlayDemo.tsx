import React, { useState } from 'react';
import SearchOverlay from '@/components/feature/search/SearchOverlay';

const SearchOverlayDemo: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Demo Search Overlay</h1>
      
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-600 mb-6">
          Click the search button below to open the search overlay.
        </p>
        
        <div className="flex justify-center">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors duration-300"
          >
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Mở tìm kiếm
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </div>
  );
};

export default SearchOverlayDemo;