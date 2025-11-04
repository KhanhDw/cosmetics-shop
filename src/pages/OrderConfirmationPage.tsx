import React from "react";
import { Link } from "react-router-dom";

const OrderConfirmationPage: React.FC = () => {
  // Mock order data
  const orderData = {
    orderId: "#INV20251101",
    orderDate: "01/11/2025",
    status: "Đã thanh toán",
    paymentMethod: "Thanh toán khi nhận hàng (COD)",
    shippingMethod: "Giao nhanh (1–2 ngày)",
    customerInfo: {
      fullName: "Nguyễn Thị Mai",
      phone: "0123 456 789",
      address: "123 Đường ABC, Phường XYZ, Quận 1, TP. HCM",
      email: "nguyenthimai@example.com",
    },
    products: [
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
    ],
    subtotal: 1680000,
    shippingCost: 30000,
    discount: 100000,
    total: 1580000,
  };

  // Handle print function
  const handlePrint = () => {
    window.print();
  };

  // Handle PDF download (would require jsPDF in a real implementation)
  const handleDownloadPDF = () => {
    alert("Chức năng tải PDF đang được phát triển");
  };

  // Handle email receipt
  const handleEmailReceipt = () => {
    alert("Chức năng gửi email đang được phát triển");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link
                to="/"
                className="hover:text-pink-500"
              >
                Trang chủ
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link
                to="/payment"
                className="hover:text-pink-500"
              >
                Thanh toán
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">Xác nhận đơn hàng</li>
          </ol>
        </nav>

        {/* Success Confirmation Area */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <svg
              className="w-12 h-12 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Thanh toán thành công!
          </h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Cảm ơn bạn đã mua hàng tại Beauty Cosmetics. Đơn hàng của bạn đã
            được ghi nhận.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/products"
              className="px-6 py-3 bg-linear-to-r from-pink-400 to-purple-400 text-white rounded-lg font-medium hover:from-pink-500 hover:to-purple-500 transition-colors"
            >
              Tiếp tục mua sắm
            </Link>
            <Link
              to="/account"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Xem đơn hàng
            </Link>
          </div>
        </div>

        {/* Receipt Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100 mb-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Biên lai đơn hàng
            </h2>

            {/* Order Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Thông tin đơn hàng
                </h3>
                <div className="space-y-2">
                  <div className="flex">
                    <span className="text-gray-600 w-32">Mã đơn hàng:</span>
                    <span className="font-medium text-gray-800">
                      {orderData.orderId}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-32">Ngày đặt:</span>
                    <span className="font-medium text-gray-800">
                      {orderData.orderDate}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-32">Trạng thái:</span>
                    <span className="font-medium text-green-600">
                      {orderData.status}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-32">
                      Phương thức thanh toán:
                    </span>
                    <span className="font-medium text-gray-800">
                      {orderData.paymentMethod}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-32">
                      Phương thức vận chuyển:
                    </span>
                    <span className="font-medium text-gray-800">
                      {orderData.shippingMethod}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Thông tin người nhận
                </h3>
                <div className="space-y-2">
                  <div className="flex">
                    <span className="text-gray-600 w-32">Họ tên:</span>
                    <span className="font-medium text-gray-800">
                      {orderData.customerInfo.fullName}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-32">Số điện thoại:</span>
                    <span className="font-medium text-gray-800">
                      {orderData.customerInfo.phone}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-32">Địa chỉ:</span>
                    <span className="font-medium text-gray-800">
                      {orderData.customerInfo.address}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-32">Email:</span>
                    <span className="font-medium text-gray-800">
                      {orderData.customerInfo.email}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product List */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Danh sách sản phẩm
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 text-gray-600 font-medium">
                        Sản phẩm
                      </th>
                      <th className="text-center py-3 text-gray-600 font-medium">
                        Số lượng
                      </th>
                      <th className="text-right py-3 text-gray-600 font-medium">
                        Giá
                      </th>
                      <th className="text-right py-3 text-gray-600 font-medium">
                        Thành tiền
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderData.products.map((product) => (
                      <tr
                        key={product.id}
                        className="border-b border-gray-100"
                      >
                        <td className="py-3">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-200 rounded-md mr-3 flex items-center justify-center">
                              <span className="text-xs text-gray-500">Ảnh</span>
                            </div>
                            <span className="text-gray-800">
                              {product.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 text-center text-gray-800">
                          {product.quantity}
                        </td>
                        <td className="py-3 text-right text-gray-800">
                          {product.price.toLocaleString("vi-VN")}₫
                        </td>
                        <td className="py-3 text-right text-gray-800">
                          {(product.price * product.quantity).toLocaleString(
                            "vi-VN"
                          )}
                          ₫
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-t border-gray-200 pt-4">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tổng tạm tính</span>
                  <span className="text-gray-800">
                    {orderData.subtotal.toLocaleString("vi-VN")}₫
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phí vận chuyển</span>
                  <span className="text-gray-800">
                    {orderData.shippingCost.toLocaleString("vi-VN")}₫
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Giảm giá</span>
                  <span className="text-green-600 font-medium">
                    -{orderData.discount.toLocaleString("vi-VN")}₫
                  </span>
                </div>
              </div>
              <div className="flex justify-between pt-4 border-t border-gray-200">
                <span className="text-lg font-semibold text-gray-800">
                  Tổng cộng
                </span>
                <span className="text-xl font-bold text-pink-600">
                  {orderData.total.toLocaleString("vi-VN")}₫
                </span>
              </div>
            </div>

            {/* Receipt Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap justify-center gap-4">
              <button
                onClick={handlePrint}
                className="px-5 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                In biên lai
              </button>
              <button
                onClick={handleDownloadPDF}
                className="px-5 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Tải biên lai (PDF)
              </button>
              <button
                onClick={handleEmailReceipt}
                className="px-5 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Gửi biên lai qua email
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              Biên lai điện tử hợp lệ, vui lòng lưu giữ để tra cứu khi cần.
            </p>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Có thể bạn quan tâm
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
              >
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Sản phẩm {item}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 mb-1">
                    Tên sản phẩm {item}
                  </h3>
                  <p className="text-pink-600 font-medium">299.000₫</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-block px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Quay lại trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
