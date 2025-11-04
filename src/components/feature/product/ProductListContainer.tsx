import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Product } from '@/types';
import ProductListPresentational from './ProductListPresentational';

// Mock data for products
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Hydrating Face Cream",
    description: "Deep moisturizing face cream for all skin types",
    price: 29.99,
    originalPrice: 39.99,
    image: "/images/face-cream.jpg",
    category: "skincare",
    rating: 4.5,
    reviewCount: 120,
    brand: "GlowUp",
    sizes: ["1.7 oz", "3.4 oz"],
    colors: ["cream", "gel"],
    shipping: "Free shipping",
    guarantee: "30-day guarantee",
    exchange: "Free returns",
    descriptionDetails: {
      product: "A rich, hydrating face cream that provides 24-hour moisture.",
      usage: "Apply to clean skin morning and night.",
      ingredients: "Hyaluronic acid, vitamin E, aloe vera",
      storage: "Store in a cool, dry place"
    }
  },
  {
    id: 2,
    name: "Vitamin C Serum",
    description: "Brightening vitamin C serum for radiant skin",
    price: 45.00,
    image: "/images/serum.jpg",
    category: "skincare",
    rating: 4.7,
    reviewCount: 85,
    brand: "VitaGlow",
    sizes: ["1 oz"],
    colors: ["translucent"],
    shipping: "Free shipping",
    guarantee: "30-day guarantee",
    exchange: "Free returns",
    descriptionDetails: {
      product: "A potent serum with 20% vitamin C to brighten and even skin tone.",
      usage: "Apply 2-3 drops to clean skin every other day.",
      ingredients: "L-ascorbic acid, ferulic acid, vitamin E",
      storage: "Store in refrigerator"
    }
  },
  {
    id: 3,
    name: "Matte Lipstick",
    description: "Long-lasting matte lipstick with rich pigment",
    price: 18.99,
    originalPrice: 24.99,
    image: "/images/lipstick.jpg",
    category: "makeup",
    rating: 4.3,
    reviewCount: 320,
    brand: "LipLock",
    colors: ["Red", "Pink", "Nude", "Berry"],
    sizes: ["0.12 oz"],
    shipping: "Free shipping on orders over $35",
    guarantee: "Satisfaction guarantee",
    exchange: "Free exchanges",
    descriptionDetails: {
      product: "Highly pigmented matte lipstick that stays put for 12 hours.",
      usage: "Apply directly from tube or with a lip brush.",
      ingredients: "Castor oil, shea butter, pigments",
      storage: "Store at room temperature"
    }
  },
  {
    id: 4,
    name: "Eyeshadow Palette",
    description: "12-shade eyeshadow palette for versatile looks",
    price: 32.50,
    image: "/images/eyeshadow.jpg",
    category: "makeup",
    rating: 4.6,
    reviewCount: 180,
    brand: "EyeCandy",
    colors: ["warm tones", "cool tones", "neutrals"],
    sizes: ["1.2 oz"],
    shipping: "Free shipping",
    guarantee: "30-day guarantee",
    exchange: "Free returns",
    descriptionDetails: {
      product: "A versatile palette with matte and shimmer shades.",
      usage: "Apply with eyeshadow brush for desired look.",
      ingredients: "Mica, talc, zinc stearate",
      storage: "Keep in dry place, avoid moisture"
    }
  },
  {
    id: 5,
    name: "Fragrance Mist",
    description: "Lightweight body mist with long-lasting scent",
    price: 24.99,
    originalPrice: 29.99,
    image: "/images/fragrance.jpg",
    category: "fragrance",
    rating: 4.4,
    reviewCount: 95,
    brand: "ScentSation",
    sizes: ["6.7 oz", "3.3 oz"],
    colors: ["clear"],
    shipping: "Free shipping on orders over $30",
    guarantee: "Satisfaction guarantee",
    exchange: "Free exchanges",
    descriptionDetails: {
      product: "A light, refreshing mist that provides all-day fragrance.",
      usage: "Spray on pulse points and hair.",
      ingredients: "Alcohol denat, water, fragrance",
      storage: "Keep away from direct sunlight"
    }
  },
  {
    id: 6,
    name: "Shampoo & Conditioner Set",
    description: "Sulfate-free hair care set for healthy hair",
    price: 26.99,
    image: "/images/hair-care.jpg",
    category: "hair care",
    rating: 4.2,
    reviewCount: 150,
    brand: "HairHeaven",
    sizes: ["8 oz each"],
    colors: ["clear"],
    shipping: "Free shipping",
    guarantee: "30-day guarantee",
    exchange: "Free returns",
    descriptionDetails: {
      product: "Gentle cleansing and conditioning for all hair types.",
      usage: "Apply shampoo to wet hair, lather, rinse. Follow with conditioner.",
      ingredients: "Aloe vera, argan oil, keratin",
      storage: "Keep in dry place, avoid direct sunlight"
    }
  },
  {
    id: 7,
    name: "Face Mask Set",
    description: "5-piece face mask collection for all skin types",
    price: 39.99,
    originalPrice: 49.99,
    image: "/images/face-mask.jpg",
    category: "skincare",
    rating: 4.8,
    reviewCount: 210,
    brand: "MaskMe",
    sizes: ["5 masks"],
    colors: ["clay", "sheet", "gel"],
    shipping: "Free shipping",
    guarantee: "30-day guarantee",
    exchange: "Free returns",
    descriptionDetails: {
      product: "A collection of masks to address different skin concerns.",
      usage: "Apply to clean skin and leave for 10-15 minutes. Rinse off.",
      ingredients: "Clay, aloe vera, charcoal, fruit extracts",
      storage: "Store in a cool, dry place"
    }
  },
  {
    id: 8,
    name: "Foundation",
    description: "Full coverage foundation with SPF 30",
    price: 34.99,
    image: "/images/foundation.jpg",
    category: "makeup",
    rating: 4.5,
    reviewCount: 275,
    brand: "CoverAll",
    colors: ["fair", "light", "medium", "tan", "deep"],
    sizes: ["1 oz"],
    shipping: "Free shipping",
    guarantee: "Satisfaction guarantee",
    exchange: "Free returns",
    descriptionDetails: {
      product: "Full coverage foundation that provides sun protection.",
      usage: "Apply with sponge, brush, or fingers for even coverage.",
      ingredients: "Titanium dioxide, iron oxides, silica",
      storage: "Store at room temperature"
    }
  }
];

// Container component that handles mock data and state management
const ProductListContainer: React.FC = () => {
  const [products] = useState<Product[]>(mockProducts);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(12); // Default items per page
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Filter products by category
  const filteredProducts = useMemo(() => 
    selectedCategory === 'all' 
      ? products 
      : products.filter(product => product.category === selectedCategory),
    [products, selectedCategory]
  );

  // Pagination calculations
  const paginationData = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    
    return {
      indexOfLastItem,
      indexOfFirstItem,
      currentProducts,
      totalPages
    };
  }, [filteredProducts, currentPage, itemsPerPage]);

  // Get unique categories for filter
  const categories = useMemo(() => 
    ['all', ...new Set(products.map(p => p.category))],
    [products]
  );

  // Handlers
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    // Scroll to top of products section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  }, []);

  // Simulate loading for demonstration purposes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Simulate a brief loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <ProductListPresentational
      products={paginationData.currentProducts}
      loading={loading}
      error={null}
      currentPage={currentPage}
      totalPages={paginationData.totalPages}
      onPageChange={handlePageChange}
      selectedCategory={selectedCategory}
      categories={categories}
      onCategoryChange={handleCategoryChange}
    />
  );
};

export default ProductListContainer;