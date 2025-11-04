// Utility functions for fetching free cosmetic-related images
// Using placeholder images from free services like Pexels, Unsplash, etc.

// Function to get a random cosmetic product image URL
export const getRandomCosmeticImageUrl = (width: number = 400, height: number = 400): string => {
  // Using Picsum Photos API
  return `https://picsum.photos/${width}/${height}`;
};

// Function to get specific cosmetic product image based on category
export const getCosmeticImageUrlByCategory = (category: string, width: number = 400, height: number = 400): string => {
  // Using Picsum Photos API with a seed based on category for consistency
  const seed = Math.abs(category.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0));
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
};

// Function to get a set of cosmetic product images
export const getCosmeticImageSet = (count: number = 5): string[] => {
  const imageUrls: string[] = [];
  for (let i = 0; i < count; i++) {
    imageUrls.push(getRandomCosmeticImageUrl());
  }
  return imageUrls;
};

// Function to get beauty/model images for testimonials, etc.
export const getBeautyImageUrl = (width: number = 150, height: number = 150): string => {
  // Using Picsum Photos API
  return `https://picsum.photos/${width}/${height}`;
};

// Function to get hero/main banner images
export const getHeroImageUrl = (width: number = 800, height: number = 600): string => {
  // Using Picsum Photos API
  return `https://picsum.photos/${width}/${height}`;
};