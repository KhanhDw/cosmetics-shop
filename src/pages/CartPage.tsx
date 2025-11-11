import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { getRandomCosmeticImageUrl } from "@/utils/imageService";
import "../styles/cart-animations.css";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  selected: boolean;
}

const CartPage: React.FC = () => {
  // State for cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [couponCode, setCouponCode] = useState("");
  const [note, setNote] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string;
    discount: number;
  } | null>(null);
  const [couponError, setCouponError] = useState("");

  const { t } = useTranslation();

  // Sample cart data - in a real app this would come from context or API
  useEffect(() => {
    const sampleCartItems: CartItem[] = [
      {
        id: "1",
        name: "Serum Vitamin C chống lão hóa",
        price: 450000,
        quantity: 1,
        image: getRandomCosmeticImageUrl(100, 100),
        selected: true,
      },
      {
        id: "2",
        name: "Kem dưỡng ẩm sáng da ban đêm",
        price: 650000,
        quantity: 2,
        image: getRandomCosmeticImageUrl(100, 100),
        selected: true,
      },
      {
        id: "3",
        name: "Sữa rửa mặt tạo bọt dịu nhẹ",
        price: 320000,
        quantity: 1,
        image: getRandomCosmeticImageUrl(100, 100),
        selected: false,
      },
      {
        id: "4",
        name: "Mặt nạ ngủ collagen rạng rỡ",
        price: 780000,
        quantity: 1,
        image: getRandomCosmeticImageUrl(100, 100),
        selected: true,
      },
      {
        id: "5",
        name: "Tẩy tế bào chết hóa học AHA/BHA",
        price: 420000,
        quantity: 1,
        image: getRandomCosmeticImageUrl(100, 100),
        selected: false,
      },
    ];
    setCartItems(sampleCartItems);
  }, []);

  // Toggle dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDarkMode = savedTheme ? savedTheme === "dark" : prefersDark;

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => {
    if (item.selected) {
      return sum + item.price * item.quantity;
    }
    return sum;
  }, 0);

  const discount = appliedCoupon ? appliedCoupon.discount : 0;
  const shipping = subtotal >= 500000 ? 0 : 30000; // Free shipping for orders over 500,000 VND
  const total = subtotal - discount + shipping;

  // Filter cart items based on search term
  const filteredItems = cartItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Handle quantity change
  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Handle item selection
  const handleSelectItem = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  // Handle select all
  const handleSelectAll = () => {
    const allSelected = filteredItems.every((item) => item.selected);
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        filteredItems.some((fi) => fi.id === item.id)
          ? { ...item, selected: !allSelected }
          : item
      )
    );
  };

  // Handle delete selected
  const handleDeleteSelected = () => {
    setCartItems((prevItems) => prevItems.filter((item) => !item.selected));
    setCurrentPage(1); // Reset to first page after deletion
  };

  // Handle refresh
  const handleRefresh = () => {
    // In a real app, this would reload the cart from the server
    // For now, we'll just reset to the default state
    const sampleCartItems: CartItem[] = [
      {
        id: "1",
        name: "Serum Vitamin C chống lão hóa",
        price: 450000,
        quantity: 1,
        image: getRandomCosmeticImageUrl(100, 100),
        selected: true,
      },
      {
        id: "2",
        name: "Kem dưỡng ẩm sáng da ban đêm",
        price: 650000,
        quantity: 2,
        image: getRandomCosmeticImageUrl(100, 100),
        selected: true,
      },
      {
        id: "3",
        name: "Sữa rửa mặt tạo bọt dịu nhẹ",
        price: 320000,
        quantity: 1,
        image: getRandomCosmeticImageUrl(100, 100),
        selected: false,
      },
      {
        id: "4",
        name: "Mặt nạ ngủ collagen rạng rỡ",
        price: 780000,
        quantity: 1,
        image: getRandomCosmeticImageUrl(100, 100),
        selected: true,
      },
      {
        id: "5",
        name: "Tẩy tế bào chết hóa học AHA/BHA",
        price: 420000,
        quantity: 1,
        image: getRandomCosmeticImageUrl(100, 100),
        selected: false,
      },
    ];
    setCartItems(sampleCartItems);
    setSearchTerm("");
    setCurrentPage(1);
    setCouponCode("");
    setNote("");
    setAppliedCoupon(null);
  };

  // Handle apply coupon
  const handleApplyCoupon = () => {
    // In a real app, this would validate the coupon with an API
    if (couponCode.toLowerCase() === "freeship") {
      setAppliedCoupon({ code: couponCode, discount: 0 }); // This coupon provides free shipping
      setCouponError("");
    } else if (couponCode.toLowerCase() === "welcome10") {
      const discountAmount = subtotal * 0.1; // 10% discount
      setAppliedCoupon({ code: couponCode, discount: discountAmount });
      setCouponError("");
    } else {
      setCouponError(t('cart.coupon_invalid'));
    }
  };

  // Handle remove coupon
  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    setCouponError("");
  };

  // Handle delete item
  const handleDeleteItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-cosmetic-pink-50 to-cosmetic-purple-50 dark:from-gray-900 dark:to-gray-800 md:p-8">
      <div className="mx-auto max-w-7xl animate-fade-in-up">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              {t('cart.title')}
            </h1>
          </div>
          <nav className="mt-2 text-gray-600 dark:text-gray-300">
            <Link
              to="/"
              className="transition-colors hover:text-cosmetic-pink-500 dark:hover:text-cosmetic-pink-400"
            >
              {t('navbar.home')}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-500 dark:text-gray-400">{t('cart.title')}</span>
          </nav>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {t('cart.items_count', { count: cartItems.length })}
          </p>
        </div>

        {/* Cart Content */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left Column - Cart Items */}
          <div className="lg:w-7/12">
            {/* Toolbar */}
            <div className="p-4 mb-6 bg-white shadow-sm dark:bg-gray-800 rounded-2xl">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={
                      filteredItems.length > 0 &&
                      filteredItems.every((item) => item.selected)
                    }
                    onChange={handleSelectAll}
                    className="w-5 h-5 text-cosmetic-pink-500 rounded focus:ring-cosmetic-pink-400 dark:focus:ring-cosmetic-pink-600"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    {t('cart.select_all')}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={t('cart.search_placeholder')}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-full md:w-64 focus:outline-none focus:ring-2 focus:ring-cosmetic-pink-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    <svg
                      className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>

                  <button
                    onClick={handleRefresh}
                    className="flex items-center px-4 py-2 text-gray-700 transition-colors hover:text-cosmetic-pink-500 dark:text-gray-300 dark:hover:text-cosmetic-pink-400"
                  >
                    <svg
                      className="w-5 h-5 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    {t('cart.refresh')}
                  </button>

                  {cartItems.some((item) => item.selected) && (
                    <button
                      onClick={handleDeleteSelected}
                      className="flex items-center px-4 py-2 text-red-600 transition-colors hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                    >
                      <svg
                        className="w-5 h-5 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      {t('cart.delete_selected')}
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Cart Items List */}
            {cartItems.length === 0 ? (
              // Empty Cart State
              <div className="flex flex-col items-center justify-center p-12 text-center bg-white shadow-sm dark:bg-gray-800 rounded-2xl animate-fadeIn">
                <div className="mb-6">
                  <svg
                    className="w-24 h-24 mx-auto text-gray-400 dark:text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
                  {t('cart.empty_title')}
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  {t('cart.empty_subtitle')}
                </p>
                <Link
                  to="/products"
                  className="bg-gradient-to-r from-cosmetic-pink-500 to-cosmetic-purple-500 hover:from-cosmetic-pink-600 hover:to-cosmetic-purple-600 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  {t('cart.explore_products')}
                </Link>
              </div>
            ) : (
              // Cart Items
              <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 rounded-2xl animate-fadeIn">
                {currentItems.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 border-b border-gray-200 dark:border-gray-700 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 ${
                      item.selected
                        ? "bg-cosmetic-pink-50 dark:bg-gray-700/30"
                        : ""
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={item.selected}
                        onChange={() => handleSelectItem(item.id)}
                        className="w-5 h-5 text-cosmetic-pink-500 rounded focus:ring-cosmetic-pink-400 dark:focus:ring-cosmetic-pink-600"
                      />
                      <div className="flex-shrink-0 ml-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="object-contain w-16 h-16 shadow-sm rounded-xl"
                        />
                      </div>
                      <div className="flex-grow ml-4">
                        <h3 className="font-medium text-gray-800 dark:text-white">
                          {item.name}
                        </h3>
                        <div className="flex flex-wrap items-center justify-between mt-2">
                          <div className="font-semibold text-cosmetic-pink-500 dark:text-cosmetic-pink-400">
                            {item.price.toLocaleString("vi-VN")}₫
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center mt-2 sm:mt-0">
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                              className="flex items-center justify-center w-10 h-10 text-gray-600 transition-colors bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 touch-target"
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>
                            <span className="w-10 mx-2 text-center text-gray-700 dark:text-gray-300">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                              className="flex items-center justify-center w-10 h-10 text-gray-600 transition-colors bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 touch-target"
                            >
                              +
                            </button>
                          </div>

                          <div className="ml-4 font-semibold text-gray-800 dark:text-white">
                            {(item.price * item.quantity).toLocaleString(
                              "vi-VN"
                            )}
                            ₫
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteItem(item.id)}
                        className="p-3 ml-4 text-gray-500 transition-colors hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 touch-target"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center p-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                      className={`px-4 py-2 rounded-l-lg ${
                        currentPage === 1
                          ? "bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-500 cursor-not-allowed"
                          : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                      }`}
                    >
                      {t('cart.prev')}
                    </button>
                    <div className="flex items-center mx-2">
                      {Array.from(
                        { length: totalPages },
                        (_, index) => index + 1
                      ).map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-3 py-2 ${
                            currentPage === page
                              ? "bg-cosmetic-pink-500 text-white"
                              : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 rounded-r-lg ${
                        currentPage === totalPages
                          ? "bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-500 cursor-not-allowed"
                          : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                      }`}
                    >
                      {t('cart.next')}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:w-5/12">
            {/* Coupon and Note Section */}
            <div className="p-6 mb-6 bg-white shadow-sm dark:bg-gray-800 rounded-2xl">
              <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
                {t('cart.coupon_and_note')}
              </h2>

              {/* Coupon Code */}
              <div className="mb-4">
                <div className="flex">
                  <input
                    type="text"
                    placeholder={t('cart.coupon_placeholder')}
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    disabled={!!appliedCoupon}
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cosmetic-pink-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {!appliedCoupon ? (
                    <button
                      onClick={handleApplyCoupon}
                      className="px-4 py-2 text-white transition-colors bg-cosmetic-pink-500 rounded-r-lg hover:bg-cosmetic-pink-600"
                    >
                      {t('cart.apply')}
                    </button>
                  ) : (
                    <button
                      onClick={handleRemoveCoupon}
                      className="px-4 py-2 text-white transition-colors bg-gray-500 rounded-r-lg hover:bg-gray-600"
                    >
                      {t('cart.remove')}
                    </button>
                  )}
                </div>
                {couponError && (
                  <p className="mt-2 text-sm text-red-500 dark:text-red-400">
                    {couponError}
                  </p>
                )}
                {appliedCoupon && (
                  <p className="mt-2 text-sm text-green-500 dark:text-green-400">
                    {t('cart.coupon_applied', {code: appliedCoupon.code, discount: appliedCoupon.discount.toLocaleString("vi-VN")})}
                  </p>
                )}
              </div>

              {/* Note */}
              <div>
                <label
                  htmlFor="note"
                  className="block mb-2 text-gray-700 dark:text-gray-300"
                >
                  {t('cart.note_label')}
                </label>
                <textarea
                  id="note"
                  rows={3}
                  placeholder={t('cart.note_placeholder')}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cosmetic-pink-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>

            {/* Order Summary */}
            <div className="p-6 bg-white shadow-sm dark:bg-gray-800 rounded-2xl">
              <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
                {t('cart.order_summary')}
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    {t('cart.subtotal')}
                  </span>
                  <span className="text-gray-800 dark:text-white">
                    {subtotal.toLocaleString("vi-VN")}₫
                  </span>
                </div>

                {appliedCoupon && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      {t('cart.discount')}
                    </span>
                    <span className="text-green-500 dark:text-green-400">
                      -{appliedCoupon.discount.toLocaleString("vi-VN")}₫
                    </span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    {t('cart.shipping_cost')}
                  </span>
                  <span
                    className={
                      shipping === 0
                        ? "text-green-500 dark:text-green-400"
                        : "text-gray-800 dark:text-white"
                    }
                  >
                    {shipping === 0
                      ? t('cart.free_shipping')
                      : `${shipping.toLocaleString("vi-VN")}₫`}
                  </span>
                </div>

                <div className="pt-3 mt-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      {t('cart.total')}
                    </span>
                    <span className="text-xl font-bold text-cosmetic-pink-500 dark:text-cosmetic-pink-400">
                      {total.toLocaleString("vi-VN")}₫
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm italic text-gray-600 dark:text-gray-400">
                {shipping === 0
                  ? t('cart.free_shipping_note')
                  : t('cart.shipping_threshold_note', { amount: (500000 - subtotal > 0 ? (500000 - subtotal) : 0).toLocaleString("vi-VN") })}
              </p>

              <Link
                to="/checkout"
                className="block w-full px-4 py-3 mt-6 font-medium text-center text-white transition-all duration-300 rounded-full shadow-md bg-gradient-to-r from-cosmetic-pink-500 to-cosmetic-purple-500 hover:from-cosmetic-pink-600 hover:to-cosmetic-purple-600 hover:shadow-lg"
              >
                {t('cart.proceed_to_checkout')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;