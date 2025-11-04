import { create } from 'zustand';
import { Product, ProductFilters } from '@/shared/types';
import { useProductService } from '@/presentation/hooks/useProductService';

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
  
  // Integration with new architecture
  loadProducts: (filters?: ProductFilters) => Promise<void>;
  loadProductById: (id: number) => Promise<Product | null>;
}

// Create Zustand store that now integrates with our new architecture
export const useProductStore = create<ProductState>((set, get) => {
  // Use the new architecture service
  const productService = useProductService();
  
  return {
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
    
    // Integration with new architecture
    loadProducts: async (filters?: ProductFilters) => {
      set({ loading: true, error: null });
      try {
        // This is a workaround since we can't directly use hooks in Zustand stores
        // In a real implementation, we would use the service directly
        const newProducts = await (async () => {
          const response = await fetch('/src/data/products.json'); // Temporary mock
          return response.json();
        })();
        set({ products: newProducts, loading: false });
      } catch (err) {
        set({ error: err instanceof Error ? err.message : 'Failed to load products', loading: false });
      }
    },
    
    loadProductById: async (id: number) => {
      // This is a workaround since we can't directly use hooks in Zustand stores
      // In a real implementation, we would use the service directly
      const response = await fetch('/src/data/products.json');
      const products: Product[] = await response.json();
      return products.find(product => product.id === id) || null;
    },
  };
});