import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cosmetics brand colors
        'cosmetic-pink': {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        'cosmetic-purple': {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        'cosmetic-rose': {
          50: '#fdf1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        'cosmetic-beige': {
          50: '#fdf8f6',
          100: '#fdefe6',
          200: '#feebd0',
          300: '#fcd9bd',
          400: '#f7c3a1',
          500: '#f0a97d',
          600: '#e0835e',
          700: '#c25e3f',
          800: '#a3462d',
          900: '#883620',
        },
        'pastel-pink': '#ffbfbe',
        'soft-pink': '#f8c8dc',
        'light-pink': '#e8ccd7',
        'beige': '#f5e9e2',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'cosmetic': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'cosmetic-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-up-delay-100': 'fadeInUp 0.6s 100ms ease-out forwards',
        'fade-in-up-delay-200': 'fadeInUp 0.6s 200ms ease-out forwards',
        'fade-in-up-delay-300': 'fadeInUp 0.6s 300ms ease-out forwards',
        'fade-in-up-delay-400': 'fadeInUp 0.6s 400ms ease-out forwards',
        'fade-in-up-delay-500': 'fadeInUp 0.6s 500ms ease-out forwards',
        'fade-in-up-delay-600': 'fadeInUp 0.6s 600ms ease-out forwards',
        'fade-in-up-delay-700': 'fadeInUp 0.6s 700ms ease-out forwards',
        'fade-in-up-delay-800': 'fadeInUp 0.6s 800ms ease-out forwards',
        'fade-in-up-delay-900': 'fadeInUp 0.6s 900ms ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class', // Enable dark mode using the 'dark' class
} satisfies Config;