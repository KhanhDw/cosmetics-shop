# Backend API Requirements for Cosmetics Shop

## Project Overview
This document outlines all the backend API requirements for the cosmetics shop web application. The frontend application has been built with a comprehensive feature set that will require corresponding backend APIs to function properly.

## Current Implemented APIs

### 1. Authentication APIs
- **Login**: `POST /auth/login` - User authentication
- **Register**: `POST /auth/register` - User registration
- **Logout**: `POST /auth/logout` - User logout
- **Get Me**: `GET /auth/me` - Get current user info

### 2. Product APIs
- **Get All Products**: `GET /products` - Get all products with optional filtering
- **Get Product by ID**: `GET /products/:id` - Get specific product
- **Get Products by Category**: `GET /products/category/:category` - Get products in a category
- **Search Products**: `GET /products/search` - Search products by query
- **Get Products by Filters**: `GET /products` with query params - Filter products by various criteria
- **Get Product Reviews**: `GET /products/:id/reviews` - Get reviews for a specific product

### 3. Cart APIs
- **Get Cart Items**: `GET /cart` - Get user's cart items
- **Add Item to Cart**: `POST /cart` - Add an item to cart
- **Update Item Quantity**: `PUT /cart/:id` - Update quantity of an item in cart
- **Remove Item from Cart**: `DELETE /cart/:id` - Remove item from cart
- **Clear Cart**: `DELETE /cart` - Clear entire cart

### 4. Order APIs
- **Get All Orders**: `GET /orders` - Get user's orders
- **Get Order by ID**: `GET /orders/:id` - Get specific order details
- **Create Order**: `POST /orders` - Create a new order
- **Update Order**: `PUT /orders/:id` - Update order details
- **Delete Order**: `DELETE /orders/:id` - Cancel order

## Required APIs (Currently Using Mock Data)

### 5. Wishlist APIs
- **Get Wishlist Items**: `GET /wishlist` - Get user's wishlist items
- **Add to Wishlist**: `POST /wishlist` - Add item to wishlist
- **Remove from Wishlist**: `DELETE /wishlist/:id` - Remove item from wishlist
- **Clear Wishlist**: `DELETE /wishlist` - Clear entire wishlist
- **Check Wishlist Status**: `GET /wishlist/:id` - Check if item is in wishlist

### 6. Category APIs
- **Get All Categories**: `GET /categories` - Get all product categories
- **Get Category by ID**: `GET /categories/:id` - Get specific category details
- **Get Products by Category**: `GET /categories/:id/products` - Get products in a category

### 7. Blog/Content APIs
- **Get All Blog Posts**: `GET /blogs` - Get all blog posts
- **Get Blog Post by ID**: `GET /blogs/:id` - Get specific blog post
- **Search Blog Posts**: `GET /blogs/search` - Search blog posts
- **Get Blog Posts by Category**: `GET /blogs/category/:category` - Get blog posts by category

### 8. Review APIs
- **Get Product Reviews**: `GET /reviews/product/:productId` - Get reviews for a product
- **Get User Reviews**: `GET /reviews/user/:userId` - Get reviews by user
- **Create Review**: `POST /reviews` - Submit a new review
- **Update Review**: `PUT /reviews/:id` - Update a review
- **Delete Review**: `DELETE /reviews/:id` - Delete a review

### 9. Brand APIs
- **Get All Brands**: `GET /brands` - Get all brands
- **Get Brand by ID**: `GET /brands/:id` - Get specific brand details
- **Get Products by Brand**: `GET /brands/:id/products` - Get products by brand

### 10. User Management APIs
- **Get User Profile**: `GET /users/:id` - Get user profile details
- **Update User Profile**: `PUT /users/:id` - Update user profile
- **Get User Orders**: `GET /users/:id/orders` - Get user's orders
- **Get User Wishlist**: `GET /users/:id/wishlist` - Get user's wishlist

### 11. Promotion/Discount APIs
- **Get All Promotions**: `GET /promotions` - Get available promotions
- **Get Promotion by ID**: `GET /promotions/:id` - Get specific promotion
- **Apply Promotion Code**: `POST /promotions/apply` - Apply a promotion code

### 12. Notification APIs
- **Get User Notifications**: `GET /notifications` - Get user's notifications
- **Mark Notification as Read**: `PUT /notifications/:id/read` - Mark notification as read
- **Delete Notification**: `DELETE /notifications/:id` - Delete a notification

### 13. Address APIs
- **Get User Addresses**: `GET /addresses` - Get user's saved addresses
- **Get Address by ID**: `GET /addresses/:id` - Get specific address
- **Create Address**: `POST /addresses` - Create new address
- **Update Address**: `PUT /addresses/:id` - Update address
- **Delete Address**: `DELETE /addresses/:id` - Delete address
- **Set Default Address**: `PUT /addresses/:id/default` - Set default address

### 14. Search APIs
- **Global Search**: `GET /search` - Search across products and blogs
- **Autocomplete Search**: `GET /search/autocomplete` - Provide search suggestions

## Additional Considerations

### Data Models
The backend should implement data models for:
- Product (id, name, description, price, originalPrice, image, images, category, rating, reviewCount, sizes, colors, brand, shipping, guarantee, exchange, descriptionDetails)
- User (id, name, email, avatar, role)
- CartItem (extends Product with quantity)
- Order (id, items, total, status, date, shippingAddress)
- Review (id, user, date, rating, content)
- Category (id, name, image, description)
- BlogPost (id, title, excerpt, content, author, date, image, category, tags, readTime)
- Address (id, firstName, lastName, street, city, state, zipCode, country, isDefault)
- Promotion (id, name, description, code, type, value, applicableCategories, startDate, endDate, usageLimit, usedCount, status)

### Authentication & Authorization
- JWT-based authentication
- Role-based access control (user/admin)
- Protected routes for authenticated functionality
- Secure password handling with hashing

### Pagination
- Most GET endpoints should support pagination parameters (page, limit)
- Default page size: 12 items
- Maximum page size: 100 items

### Error Handling
- Standardized error response format
- Appropriate HTTP status codes
- Validation error responses

### Validation
- Input validation for all endpoints
- Proper error messages for invalid data

## Summary
The frontend application is feature-complete and requires 50 backend APIs to support all functionality. These APIs have been categorized by function and specific endpoints have been defined for each. The backend should be developed to match these API specifications to ensure seamless integration with the existing frontend codebase.