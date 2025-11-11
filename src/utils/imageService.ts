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

// Function to generate responsive image attributes for different screen sizes
export const getResponsiveImageAttributes = (
  baseWidth: number, 
  baseHeight: number, 
  altText: string
): { 
  src: string; 
  srcSet: string; 
  sizes: string; 
  alt: string 
} => {
  // Calculate dimensions for different breakpoints
  const mobileWidth = Math.round(baseWidth * 0.75);
  const mobileHeight = Math.round(baseHeight * 0.75);
  
  const tabletWidth = Math.round(baseWidth * 1.25);
  const tabletHeight = Math.round(baseHeight * 1.25);
  
  const desktopWidth = baseWidth;
  const desktopHeight = baseHeight;
  
  const largeDesktopWidth = Math.round(baseWidth * 1.5);
  const largeDesktopHeight = Math.round(baseHeight * 1.5);
  
  // Generate srcSet with different image sizes
  const srcSet = [
    `${getRandomCosmeticImageUrl(mobileWidth, mobileHeight)} ${mobileWidth}w`,
    `${getRandomCosmeticImageUrl(tabletWidth, tabletHeight)} ${tabletWidth}w`,
    `${getRandomCosmeticImageUrl(desktopWidth, desktopHeight)} ${desktopWidth}w`,
    `${getRandomCosmeticImageUrl(largeDesktopWidth, largeDesktopHeight)} ${largeDesktopWidth}w`
  ].join(', ');
  
  // Define sizes for different breakpoints
  const sizes = `(max-width: 640px) ${mobileWidth}px, (max-width: 768px) ${tabletWidth}px, (max-width: 1024px) ${desktopWidth}px, ${largeDesktopWidth}px`;
  
  return {
    src: getRandomCosmeticImageUrl(desktopWidth, desktopHeight),
    srcSet,
    sizes,
    alt: altText
  };
};

// Function to get optimized image URL with quality parameters
export const getOptimizedImageUrl = (
  width: number, 
  height: number, 
  quality: number = 80
): string => {
  // Using Picsum Photos API with quality parameter (if supported)
  return `https://picsum.photos/${width}/${height}?quality=${quality}`;
};