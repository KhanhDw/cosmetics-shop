import { create } from 'zustand';
import { Product } from '@/types';

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  searchQuery: string;
  selectedCategory: string;
  selectedBrands: string[];
  priceRange: [number, number];
  ratingFilter: number;
  loading: boolean;
  error: string | null;
  
  setProducts: (products: Product[]) => void;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  setSelectedBrands: (brands: string[]) => void;
  setPriceRange: (range: [number, number]) => void;
  setRatingFilter: (rating: number) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  filterProducts: () => void;
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  filteredProducts: [],
  searchQuery: '',
  selectedCategory: 'all',
  selectedBrands: [],
  priceRange: [0, 10000],
  ratingFilter: 0,
  loading: false,
  error: null,

  setProducts: (products) => set({ products }),
  
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  
  setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
  
  setSelectedBrands: (selectedBrands) => set({ selectedBrands }),
  
  setPriceRange: (priceRange) => set({ priceRange }),
  
  setRatingFilter: (ratingFilter) => set({ ratingFilter }),
  
  setLoading: (loading) => set({ loading }),
  
  setError: (error) => set({ error }),
  
  filterProducts: () => {
    const { products, searchQuery, selectedCategory, selectedBrands, priceRange, ratingFilter } = get();
    
    const filtered = products.filter(product => {
      // Search filter
      const matchesSearch = !searchQuery || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.brand && product.brand.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // Category filter
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      
      // Brand filter
      const matchesBrand = selectedBrands.length === 0 || 
        (product.brand && selectedBrands.includes(product.brand));
      
      // Price filter
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      // Rating filter
      const matchesRating = (product.rating || 0) >= ratingFilter;
      
      return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesRating;
    });
    
    set({ filteredProducts: filtered });
  },
}));