import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentPage = () => {
  const navigate = useNavigate();

  // State for form data
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    district: "",
    ward: "",
  });

  // State for shipping method
  const [shippingMethod, setShippingMethod] = useState("standard");

  // State for payment method
  const [paymentMethod, setPaymentMethod] = useState("cod");

  // Sample cart items
  const [cartItems] = useState([
    {
      id: 1,
      name: "Serum Vitamin C 20%",
      price: 450000,
      quantity: 1,
      image: "",
    },
    {
      id: 2,
      name: "Kem dưỡng ẩm chống lão hóa",
      price: 650000,
      quantity: 1,
      image: "",
    },
    {
      id: 3,
      name: "Sữa rửa mặt dịu nhẹ",
      price: 280000,
      quantity: 2,
      image: "",
    },
  ]);

  // State for discount
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCost =
    shippingMethod === "express" ? 30000 : shippingMethod === "store" ? 0 : 0;
  const discountAmount = appliedDiscount;
  const total = subtotal + shippingCost - discountAmount;

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle discount application
  const handleApplyDiscount = () => {
    if (discountCode.toLowerCase() === "save10") {
      setAppliedDiscount(subtotal * 0.1); // 10% discount
      toast.success("Mã giảm giá đã được áp dụng!");
    } else {
      toast.error("Mã giảm giá không hợp lệ");
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate payment processing - in a real app, this would involve actual payment processing
    // For demo purposes, we'll randomly decide success or failure
    const paymentSuccess = Math.random() > 0.3; // 70% success rate for demo

    if (paymentSuccess) {
      toast.success("Đơn hàng của bạn đã được xử lý thành công!");
      setTimeout(() => {
        navigate("/order-success");
      }, 1000); // Delay navigation to show toast
    } else {
      toast.error("Thanh toán thất bại. Vui lòng thử lại.");
      setTimeout(() => {
        navigate("/order-failure");
      }, 1000); // Delay navigation to show toast
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] py-8">
      {/* Success and Failure modals have been removed since navigation happens directly after form submission */}

      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-[var(--text-secondary)]">
            <li>
              <Link
                to="/"
                className="hover:text-[var(--text-accent)]"
              >
                Trang chủ
              </Link>
            </li>
            <li className="text-[var(--text-secondary)]">/</li>
            <li>
              <Link
                to="/cart"
                className="hover:text-[var(--text-accent)]"
              >
                Giỏ hàng
              </Link>
            </li>
            <li className="text-[var(--text-secondary)]">/</li>
            <li className="text-[var(--text-primary)] font-medium">Thanh toán</li>
          </ol>
        </nav>

        {/* Page Title */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[var(--text-primary)]">
            Thanh toán đơn hàng
          </h1>
          <p className="text-[var(--text-secondary)] mt-2">
            Vui lòng kiểm tra thông tin trước khi xác nhận thanh toán
          </p>
        </div>

        {/* Main Content */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Shipping & Payment Info */}
            <div className="space-y-6">
              {/* Shipping Information */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Thông tin người nhận hàng
                </h2>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Họ và tên
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={shippingInfo.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                        placeholder="Nguyễn Văn A"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={shippingInfo.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                        placeholder="0123 456 789"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={shippingInfo.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                      placeholder="email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tỉnh/Thành phố
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                      placeholder="Hà Nội"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Quận/Huyện
                      </label>
                      <input
                        type="text"
                        name="district"
                        value={shippingInfo.district}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                        placeholder="Quận Ba Đình"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phường/Xã
                      </label>
                      <input
                        type="text"
                        name="ward"
                        value={shippingInfo.ward}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                        placeholder="Phường Cống Vị"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Địa chỉ cụ thể
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={shippingInfo.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                      placeholder="Số nhà, tên đường..."
                      required
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="differentAddress"
                      className="h-4 w-4 text-pink-500 border-gray-300 rounded focus:ring-pink-400"
                    />
                    <label
                      htmlFor="differentAddress"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Giao đến địa chỉ khác?
                    </label>
                  </div>
                </div>
              </div>

              {/* Shipping Method */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Phương thức vận chuyển
                </h2>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="standard"
                      name="shipping"
                      value="standard"
                      checked={shippingMethod === "standard"}
                      onChange={() => setShippingMethod("standard")}
                      className="h-4 w-4 text-pink-500 border-gray-300 focus:ring-pink-400"
                    />
                    <label
                      htmlFor="standard"
                      className="ml-3 flex-1"
                    >
                      <div className="flex justify-between">
                        <span className="text-gray-700">
                          Giao hàng tiêu chuẩn
                        </span>
                        <span className="text-gray-500">3–5 ngày</span>
                      </div>
                      <div className="text-sm text-gray-500">Miễn phí</div>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="express"
                      name="shipping"
                      value="express"
                      checked={shippingMethod === "express"}
                      onChange={() => setShippingMethod("express")}
                      className="h-4 w-4 text-pink-500 border-gray-300 focus:ring-pink-400"
                    />
                    <label
                      htmlFor="express"
                      className="ml-3 flex-1"
                    >
                      <div className="flex justify-between">
                        <span className="text-gray-700">Giao nhanh</span>
                        <span className="text-gray-500">1–2 ngày</span>
                      </div>
                      <div className="text-sm text-gray-500">+30.000đ</div>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="store"
                      name="shipping"
                      value="store"
                      checked={shippingMethod === "store"}
                      onChange={() => setShippingMethod("store")}
                      className="h-4 w-4 text-pink-500 border-gray-300 focus:ring-pink-400"
                    />
                    <label
                      htmlFor="store"
                      className="ml-3 flex-1"
                    >
                      <div className="flex justify-between">
                        <span className="text-gray-700">Nhận tại cửa hàng</span>
                        <span className="text-gray-500">-</span>
                      </div>
                      <div className="text-sm text-gray-500">Miễn phí</div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Phương thức thanh toán
                </h2>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cod"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="h-4 w-4 text-pink-500 border-gray-300 focus:ring-pink-400"
                    />
                    <label
                      htmlFor="cod"
                      className="ml-3 flex-1"
                    >
                      <span className="text-gray-700">
                        Thanh toán khi nhận hàng (COD)
                      </span>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="card"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="h-4 w-4 text-pink-500 border-gray-300 focus:ring-pink-400"
                    />
                    <label
                      htmlFor="card"
                      className="ml-3 flex-1"
                    >
                      <span className="text-gray-700">
                        Thanh toán qua thẻ (Visa/MasterCard)
                      </span>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="wallet"
                      name="payment"
                      value="wallet"
                      checked={paymentMethod === "wallet"}
                      onChange={() => setPaymentMethod("wallet")}
                      className="h-4 w-4 text-pink-500 border-gray-300 focus:ring-pink-400"
                    />
                    <label
                      htmlFor="wallet"
                      className="ml-3 flex-1"
                    >
                      <span className="text-gray-700">
                        Ví điện tử (Momo, ZaloPay, VNPay)
                      </span>
                    </label>
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-500">
                  Chúng tôi đảm bảo bảo mật thông tin thanh toán của bạn.
                </p>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div>
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-4 border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Đơn hàng của bạn
                </h2>

                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center mr-4">
                        <span className="text-xs text-gray-500">Ảnh</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Số lượng: {item.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-800">
                          {(item.price * item.quantity).toLocaleString("vi-VN")}
                          ₫
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tạm tính</span>
                    <span className="text-gray-800 font-medium">
                      {subtotal.toLocaleString("vi-VN")}₫
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Phí vận chuyển</span>
                    <span className="text-gray-800 font-medium">
                      {shippingCost.toLocaleString("vi-VN")}₫
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Mã giảm giá</span>
                    <span className="text-green-600 font-medium">
                      -{discountAmount.toLocaleString("vi-VN")}₫
                    </span>
                  </div>
                </div>

                {/* Discount Code */}
                <div className="flex mb-6">
                  <input
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="Mã giảm giá"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                  />
                  <button
                    type="button"
                    onClick={handleApplyDiscount}
                    className="bg-pink-100 text-pink-700 px-4 py-2 rounded-r-lg font-medium hover:bg-pink-200 transition-colors"
                  >
                    Áp dụng
                  </button>
                </div>

                {/* Total */}
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">
                      Tổng cộng
                    </span>
                    <span className="text-xl font-bold text-pink-600">
                      {total.toLocaleString("vi-VN")}₫
                    </span>
                  </div>
                </div>

                {/* Terms and Submit */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 text-center">
                    Bằng việc đặt hàng, bạn đồng ý với Chính sách mua hàng của
                    chúng tôi.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-pink-400 to-purple-400 text-white py-3 px-4 rounded-lg font-semibold shadow-md hover:from-pink-500 hover:to-purple-500 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400"
                >
                  Xác nhận thanh toán
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PaymentPage;
