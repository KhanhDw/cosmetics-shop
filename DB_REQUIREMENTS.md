# Database Requirements for Cosmetics Shop

## Project Overview
This document outlines all the database table requirements for the cosmetics shop web application. The database design is based on the API requirements and frontend functionality of the application.

## Database Schema

### 1. users
Stores user account information for authentication and profile management.

**Columns:**
- id (int, primary key, auto-increment) - Unique identifier for each user
- name (varchar) - User's display name
- email (varchar, unique, not null) - User's email address
- password_hash (varchar, not null) - Hashed password for security
- avatar (varchar, nullable) - URL to user's profile image
- role (enum: 'user', 'admin', default: 'user') - User's role in the system
- email_verified_at (timestamp, nullable) - Time when email was verified
- created_at (timestamp, default: current_timestamp) - Account creation time
- updated_at (timestamp, default: current_timestamp on update) - Last update time
- last_login_at (timestamp, nullable) - Last login time

**Indexes:**
- Primary: id
- Unique: email
- Index: email_verified_at
- Index: created_at

### 2. categories
Stores product categories for organizing products.

**Columns:**
- id (int, primary key, auto-increment) - Unique identifier for each category
- name (varchar, not null) - Category name
- slug (varchar, unique, not null) - URL-friendly version of category name
- description (text, nullable) - Description of the category
- image (varchar, nullable) - Category image URL
- parent_id (int, foreign key to categories.id, nullable) - For hierarchical categories
- is_active (boolean, default: true) - Whether the category is active
- sort_order (int, default: 0) - Order in which to display categories
- created_at (timestamp, default: current_timestamp) - Creation time
- updated_at (timestamp, default: current_timestamp on update) - Last update time

**Indexes:**
- Primary: id
- Unique: slug
- Index: parent_id
- Index: is_active
- Index: sort_order

### 3. brands
Stores brand information for products.

**Columns:**
- id (int, primary key, auto-increment) - Unique identifier for each brand
- name (varchar, not null) - Brand name
- slug (varchar, unique, not null) - URL-friendly version of brand name
- description (text, nullable) - Description of the brand
- logo (varchar, nullable) - Brand logo URL
- website (varchar, nullable) - Brand website URL
- is_active (boolean, default: true) - Whether the brand is active
- created_at (timestamp, default: current_timestamp) - Creation time
- updated_at (timestamp, default: current_timestamp on update) - Last update time

**Indexes:**
- Primary: id
- Unique: slug
- Index: is_active
- Index: created_at

### 4. products
Stores information about cosmetic products.

**Columns:**
- id (int, primary key, auto-increment) - Unique identifier for each product
- name (varchar, not null) - Product name
- slug (varchar, unique, not null) - URL-friendly version of product name
- description (text, nullable) - Detailed product description
- short_description (varchar, nullable) - Short product description
- price (decimal, not null) - Current product price
- original_price (decimal, nullable) - Original price (for discount display)
- sku (varchar, unique, nullable) - Stock Keeping Unit
- stock_quantity (int, default: 0) - Available quantity in stock
- category_id (int, foreign key to categories.id, not null) - Product category
- brand_id (int, foreign key to brands.id, nullable) - Product brand
- rating (decimal, default: 0.0) - Average product rating
- review_count (int, default: 0) - Number of reviews for the product
- shipping_info (varchar, nullable) - Shipping information
- guarantee_info (varchar, nullable) - Guarantee information
- exchange_info (varchar, nullable) - Exchange policy
- is_active (boolean, default: true) - Whether the product is active/sellable
- is_featured (boolean, default: false) - Whether the product is featured
- meta_title (varchar, nullable) - SEO meta title
- meta_description (varchar, nullable) - SEO meta description
- created_at (timestamp, default: current_timestamp) - Product creation time
- updated_at (timestamp, default: current_timestamp on update) - Last update time

**Indexes:**
- Primary: id
- Unique: slug
- Unique: sku (if not null)
- Index: category_id
- Index: brand_id
- Index: price
- Index: is_active
- Index: is_featured
- Index: created_at
- Index: rating

### 5. product_images
Stores product images (one product can have multiple images).

**Columns:**
- id (int, primary key, auto-increment) - Unique identifier for each image
- product_id (int, foreign key to products.id, not null) - Associated product
- image_url (varchar, not null) - URL of the product image
- alt_text (varchar, nullable) - Alt text for accessibility
- sort_order (int, default: 0) - Order in which images should be displayed
- is_primary (boolean, default: false) - Whether this is the primary image
- created_at (timestamp, default: current_timestamp) - Upload time

**Indexes:**
- Primary: id
- Index: product_id
- Index: is_primary
- Index: sort_order
- Foreign key: product_id references products(id)

### 6. product_variants
Stores product variants for different sizes, colors, etc.

**Columns:**
- id (int, primary key, auto-increment) - Unique identifier for each variant
- product_id (int, foreign key to products.id, not null) - Associated product
- name (varchar, not null) - Variant name (e.g., "Size: Large", "Color: Red")
- sku (varchar, unique, nullable) - SKU for this specific variant
- price (decimal, nullable) - Price for this variant (nullable to use product price if null)
- stock_quantity (int, default: 0) - Available quantity for this variant
- created_at (timestamp, default: current_timestamp) - Creation time
- updated_at (timestamp, default: current_timestamp on update) - Last update time

**Indexes:**
- Primary: id
- Unique: sku (if not null)
- Index: product_id
- Foreign key: product_id references products(id)

### 7. reviews
Stores product reviews and ratings.

**Columns:**
- id (int, primary key, auto-increment) - Unique identifier for each review
- product_id (int, foreign key to products.id, not null) - Reviewed product
- user_id (int, foreign key to users.id, not null) - Reviewing user
- rating (int, check between 1-5, not null) - Rating score (1-5)
- title (varchar, nullable) - Review title
- content (text, nullable) - Review content
- is_verified_purchase (boolean, default: false) - Whether user purchased the product
- is_approved (boolean, default: false) - Whether review is approved for display
- helpful_count (int, default: 0) - Number of times marked as helpful
- created_at (timestamp, default: current_timestamp) - Review time
- updated_at (timestamp, default: current_timestamp on update) - Last update time

**Indexes:**
- Primary: id
- Index: product_id
- Index: user_id
- Index: rating
- Index: is_approved
- Index: created_at
- Foreign key: product_id references products(id)
- Foreign key: user_id references users(id)

### 8. carts
Stores shopping cart information.

**Columns:**
- id (int, primary key, auto-increment) - Unique identifier for each cart
- user_id (int, foreign key to users.id, unique, not null) - Associated user
- created_at (timestamp, default: current_timestamp) - Cart creation time
- updated_at (timestamp, default: current_timestamp on update) - Last update time

**Indexes:**
- Primary: id
- Unique: user_id
- Foreign key: user_id references users(id)

### 9. cart_items
Stores individual items within shopping carts.

**Columns:**
- id (int, primary key, auto-increment) - Unique identifier for each cart item
- cart_id (int, foreign key to carts.id, not null) - Associated cart
- product_id (int, foreign key to products.id, not null) - Product in the cart
- quantity (int, default: 1, check > 0) - Quantity of the product
- price_at_time (decimal, not null) - Price when added to cart (for price consistency)
- created_at (timestamp, default: current_timestamp) - Time added to cart
- updated_at (timestamp, default: current_timestamp on update) - Last update time

**Indexes:**
- Primary: id
- Index: cart_id
- Index: product_id
- Foreign key: cart_id references carts(id)
- Foreign key: product_id references products(id)

### 10. addresses
Stores user addresses for shipping and billing.

**Columns:**
- id (int, primary key, auto-increment) - Unique identifier for each address
- user_id (int, foreign key to users.id, not null) - Owner of the address
- first_name (varchar, not null) - First name
- last_name (varchar, not null) - Last name
- street (varchar, not null) - Street address
- city (varchar, not null) - City name
- state (varchar, not null) - State/Province
- zip_code (varchar, not null) - ZIP/Postal code
- country (varchar, not null) - Country name
- phone (varchar, nullable) - Phone number
- is_default (boolean, default: false) - Whether this is the default address
- created_at (timestamp, default: current_timestamp) - Creation time
- updated_at (timestamp, default: current_timestamp on update) - Last update time

**Indexes:**
- Primary: id
- Index: user_id
- Index: is_default
- Foreign key: user_id references users(id)

### 11. orders
Stores order information.

**Columns:**
- id (int, primary key, auto-increment) - Unique identifier for each order
- user_id (int, foreign key to users.id, not null) - User who placed the order
- order_number (varchar, unique, not null) - Unique order number
- status (enum: 'pending', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded', default: 'pending') - Order status
- subtotal (decimal, not null) - Subtotal before taxes and shipping
- tax_amount (decimal, default: 0.00) - Tax amount
- shipping_cost (decimal, default: 0.00) - Shipping cost
- discount_amount (decimal, default: 0.00) - Discount amount
- total (decimal, not null) - Total order amount
- currency (varchar, default: 'USD') - Currency code
- shipping_address_id (int, foreign key to addresses.id) - Shipping address
- billing_address_id (int, foreign key to addresses.id) - Billing address
- payment_method (varchar, nullable) - Payment method used
- payment_status (enum: 'pending', 'paid', 'failed', 'refunded', default: 'pending') - Payment status
- notes (text, nullable) - Additional notes
- created_at (timestamp, default: current_timestamp) - Order creation time
- updated_at (timestamp, default: current_timestamp on update) - Last update time
- shipped_at (timestamp, nullable) - Time when shipped
- delivered_at (timestamp, nullable) - Time when delivered

**Indexes:**
- Primary: id
- Unique: order_number
- Index: user_id
- Index: status
- Index: payment_status
- Index: created_at
- Foreign key: user_id references users(id)
- Foreign key: shipping_address_id references addresses(id)
- Foreign key: billing_address_id references addresses(id)

### 12. order_items
Stores individual items within orders.

**Columns:**
- id (int, primary key, auto-increment) - Unique identifier for each order item
- order_id (int, foreign key to orders.id, not null) - Associated order
- product_id (int, foreign key to products.id, not null) - Product in the order
- product_name (varchar, not null) - Product name at time of order (snapshot)
- product_price (decimal, not null) - Price at time of order (snapshot)
- quantity (int, not null) - Quantity ordered
- total (decimal, not null) - Total for this item (price * quantity)
- created_at (timestamp, default: current_timestamp) - Creation time

**Indexes:**
- Primary: id
- Index: order_id
- Index: product_id
- Foreign key: order_id references orders(id)
- Foreign key: product_id references products(id)

### 13. wishlist
Stores items that users have saved to their wishlist.

**Columns:**
- id (int, primary key, auto-increment) - Unique identifier for each wishlist item
- user_id (int, foreign key to users.id, not null) - User who owns the wishlist item
- product_id (int, foreign key to products.id, not null) - Product in the wishlist
- created_at (timestamp, default: current_timestamp) - Time added to wishlist

**Indexes:**
- Primary: id
- Unique: (user_id, product_id) - Prevent duplicate entries
- Index: user_id
- Index: product_id
- Foreign key: user_id references users(id)
- Foreign key: product_id references products(id)

### 14. blog_categories
Stores categories for blog posts.

**Columns:**
- id (int, primary key, auto-increment) - Unique identifier for each blog category
- name (varchar, not null) - Category name
- slug (varchar, unique, not null) - URL-friendly version of category name
- description (text, nullable) - Description of the category
- created_at (timestamp, default: current_timestamp) - Creation time
- updated_at (timestamp, default: current_timestamp on update) - Last update time

**Indexes:**
- Primary: id
- Unique: slug
- Index: created_at

### 15. blogs
Stores blog posts for the cosmetics shop.

**Columns:**
- id (int, primary key, auto-increment) - Unique identifier for each blog post
- title (varchar, not null) - Blog post title
- slug (varchar, unique, not null) - URL-friendly version of title
- excerpt (text, nullable) - Short description of the post
- content (text, not null) - Full blog post content
- author (varchar, not null) - Author of the blog post
- image (varchar, nullable) - Featured image URL
- category_id (int, foreign key to blog_categories.id, not null) - Blog category
- read_time (int, nullable) - Estimated reading time in minutes
- is_published (boolean, default: false) - Whether the post is published
- published_at (timestamp, nullable) - Time when published
- meta_title (varchar, nullable) - SEO meta title
- meta_description (varchar, nullable) - SEO meta description
- created_at (timestamp, default: current_timestamp) - Creation time
- updated_at (timestamp, default: current_timestamp on update) - Last update time

**Indexes:**
- Primary: id
- Unique: slug
- Index: category_id
- Index: is_published
- Index: created_at
- Index: published_at
- Foreign key: category_id references blog_categories(id)

### 16. promotions
Stores promotional codes and discounts.

**Columns:**
- id (int, primary key, auto-increment) - Unique identifier for each promotion
- name (varchar, not null) - Promotion name
- description (text, nullable) - Description of the promotion
- code (varchar, unique, not null) - Promotion/discount code
- type (enum: 'percentage', 'fixed_amount', 'buy_x_get_y', not null) - Type of promotion
- value (decimal, nullable) - Discount value (e.g., percentage or fixed amount)
- buy_quantity (int, nullable) - Required quantity to buy for buy_x_get_y
- get_quantity (int, nullable) - Quantity to get for free in buy_x_get_y
- min_order_amount (decimal, default: 0.00) - Minimum order amount to apply
- usage_limit (int, nullable) - Total usage limit for the promotion
- used_count (int, default: 0) - Number of times the promotion has been used
- per_user_limit (int, nullable) - Limit on how many times a user can use
- starts_at (timestamp, not null) - Start date/time of promotion
- expires_at (timestamp, not null) - End date/time of promotion
- is_active (boolean, default: false) - Whether the promotion is currently active
- created_at (timestamp, default: current_timestamp) - Creation time
- updated_at (timestamp, default: current_timestamp on update) - Last update time

**Indexes:**
- Primary: id
- Unique: code
- Index: starts_at
- Index: expires_at
- Index: is_active
- Index: created_at

### 17. promotion_products
Junction table for many-to-many relationship between promotions and products.

**Columns:**
- id (int, primary key, auto-increment) - Unique identifier
- promotion_id (int, foreign key to promotions.id, not null) - Associated promotion
- product_id (int, foreign key to products.id, not null) - Associated product
- created_at (timestamp, default: current_timestamp) - Creation time

**Indexes:**
- Primary: id
- Unique: (promotion_id, product_id)
- Index: promotion_id
- Index: product_id
- Foreign key: promotion_id references promotions(id)
- Foreign key: product_id references products(id)

### 18. promotion_categories
Junction table for many-to-many relationship between promotions and categories.

**Columns:**
- id (int, primary key, auto-increment) - Unique identifier
- promotion_id (int, foreign key to promotions.id, not null) - Associated promotion
- category_id (int, foreign key to categories.id, not null) - Associated category
- created_at (timestamp, default: current_timestamp) - Creation time

**Indexes:**
- Primary: id
- Unique: (promotion_id, category_id)
- Index: promotion_id
- Index: category_id
- Foreign key: promotion_id references promotions(id)
- Foreign key: category_id references categories(id)

### 19. notifications
Stores user notifications.

**Columns:**
- id (int, primary key, auto-increment) - Unique identifier for each notification
- user_id (int, foreign key to users.id, not null) - Recipient of the notification
- title (varchar, not null) - Notification title
- message (text, not null) - Notification message
- type (enum: 'order', 'promotion', 'review', 'system', 'other', default: 'system') - Type of notification
- data (json, nullable) - Additional data related to the notification
- is_read (boolean, default: false) - Whether the notification has been read
- read_at (timestamp, nullable) - Time when the notification was read
- created_at (timestamp, default: current_timestamp) - Time when notification was created

**Indexes:**
- Primary: id
- Index: user_id
- Index: type
- Index: is_read
- Index: created_at
- Foreign key: user_id references users(id)

### 20. product_description_details
Stores detailed product information.

**Columns:**
- id (int, primary key, auto-increment) - Unique identifier
- product_id (int, foreign key to products.id, unique, not null) - Associated product
- product_info (text, nullable) - Detailed product information
- usage_info (text, nullable) - Usage instructions
- ingredients (text, nullable) - Product ingredients
- storage_info (text, nullable) - Storage information
- created_at (timestamp, default: current_timestamp) - Creation time
- updated_at (timestamp, default: current_timestamp on update) - Last update time

**Indexes:**
- Primary: id
- Unique: product_id
- Foreign key: product_id references products(id)

## Relationships Summary

- users ↔ orders (One-to-Many)
- users ↔ addresses (One-to-Many)
- users ↔ reviews (One-to-Many)
- users ↔ wishlist (One-to-Many)
- users ↔ carts (One-to-One)
- users ↔ notifications (One-to-Many)
- products ↔ categories (Many-to-One)
- products ↔ brands (Many-to-One)
- products ↔ reviews (One-to-Many)
- products ↔ product_images (One-to-Many)
- products ↔ product_variants (One-to-Many)
- products ↔ wishlist (Many-to-Many through wishlist table)
- products ↔ cart_items (Many-to-Many through cart_items table)
- products ↔ order_items (Many-to-Many through order_items table)
- carts ↔ cart_items (One-to-Many)
- orders ↔ order_items (One-to-Many)
- orders ↔ addresses (Many-to-One for shipping/billing)
- blogs ↔ blog_categories (Many-to-One)
- promotions ↔ products (Many-to-Many through promotion_products)
- promotions ↔ categories (Many-to-Many through promotion_categories)

## Additional Considerations

### Data Types
- Use appropriate data types for each column to ensure efficient storage and queries
- Use decimal type for monetary values to ensure precision
- Use JSON type for flexible data storage when needed

### Indexes
- Proper indexes are specified to optimize query performance
- Foreign key columns are indexed for efficient join operations
- Frequently queried columns are indexed

### Constraints
- Foreign key constraints ensure referential integrity
- Unique constraints prevent duplicate entries where needed
- Check constraints ensure data validity (e.g., rating between 1-5)

### Audit Fields
- created_at and updated_at fields are included in most tables for audit purposes
- These fields help track when records were created and last modified