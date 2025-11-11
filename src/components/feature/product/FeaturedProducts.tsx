import React from "react";
import ProductCard from "@/components/feature/product/ProductCard";
import { Product } from "@/types";
import { getRandomCosmeticImageUrl } from "@/utils/imageService";

const FeaturedProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Luxury Hydrating Face Serum",
      brand: "Glow Cosmetics",
      price: 89.99,
      originalPrice: 119.99,
      image: getRandomCosmeticImageUrl(800, 800),
      category: "Best Seller",
      rating: 4.8,
      reviewCount: 124,
    },
    {
      id: 2,
      name: "Matte Liquid Lipstick Set",
      brand: "Lip Luxe",
      price: 45.0,
      image: getRandomCosmeticImageUrl(800, 800),
      category: "New",
      rating: 4.6,
      reviewCount: 89,
    },
    {
      id: 3,
      name: "Professional Makeup Brush Set",
      brand: "Brush Masters",
      price: 79.99,
      originalPrice: 99.99,
      image: getRandomCosmeticImageUrl(800, 800),
      category: "Best Seller",
      rating: 4.9,
      reviewCount: 215,
    },
    {
      id: 4,
      name: "Vitamin C Brightening Cream",
      brand: "Skin Radiance",
      price: 65.0,
      image: getRandomCosmeticImageUrl(800, 800),
      category: "Moisturizer",
      rating: 4.7,
      reviewCount: 156,
    },
    {
      id: 5,
      name: "Eyeshadow Palette - Sunset Collection",
      brand: "Eye Glam",
      price: 55.0,
      image: getRandomCosmeticImageUrl(800, 800),
      category: "Makeup",
      rating: 4.5,
      reviewCount: 98,
    },
    {
      id: 6,
      name: "Anti-Aging Night Moisturizer",
      brand: "Youth Revive",
      price: 95.0,
      originalPrice: 120.0,
      image: getRandomCosmeticImageUrl(800, 800),
      category: "Best Seller",
      rating: 4.8,
      reviewCount: 187,
    },
  ];

  const handleAddToCart = (id: number) => {
    // Here you would typically dispatch an action to add the item to cart
    console.log(`Added product ${id} to cart`);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-cosmetic-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our handpicked selection of premium beauty products that
            our customers love most
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => handleAddToCart(product.id)}
              onWishlistToggle={() => {}}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cosmetic-pink-500 to-cosmetic-purple-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 hover:from-cosmetic-pink-600 hover:to-cosmetic-purple-600 shadow-md">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
