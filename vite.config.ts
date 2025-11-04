import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Determine the base path based on environment
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  base: isGitHubPages ? "/cosmetics-shop/" : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false, // Set to false to reduce bundle size for GitHub Pages
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-i18n': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          'vendor-icons': ['lucide-react', 'react-icons'],
          'vendor-utils': ['zustand'], // if using zustand
          // Split admin-specific code
          'admin-components': () => 'admin-components',
          // Split feature-specific code
          'product-features': () => 'product-features',
          'auth-features': () => 'auth-features',
        }
      }
    }
  }
});
