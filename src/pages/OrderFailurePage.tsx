import React from "react";
import { Link } from "react-router-dom";

const OrderFailurePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
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
            <li className="text-gray-900 font-medium">Lỗi thanh toán</li>
          </ol>
        </nav>

        {/* Failure Message Area */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Thanh toán thất bại
          </h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Rất tiếc, đã có lỗi xảy ra trong quá trình thanh toán. Vui lòng thử
            lại hoặc liên hệ với chúng tôi để được hỗ trợ.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 text-left">
            <h3 className="font-semibold text-yellow-800 mb-2">
              Các lý do phổ biến:
            </h3>
            <ul className="list-disc pl-5 text-yellow-700 space-y-1">
              <li>Thẻ hết hạn hoặc không đủ tiền</li>
              <li>Thông tin thanh toán không chính xác</li>
              <li>Mã bảo mật (CVV) không đúng</li>
              <li>Hệ thống thanh toán đang tạm thời gặp sự cố</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/payment"
              className="px-6 py-3 bg-linear-to-r from-pink-400 to-purple-400 text-white rounded-lg font-medium hover:from-pink-500 hover:to-purple-500 transition-colors"
            >
              Thử thanh toán lại
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Liên hệ hỗ trợ
            </Link>
          </div>
        </div>

        {/* Support Options */}
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Cần hỗ trợ thêm?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Gọi điện</h3>
              <p className="text-gray-600">1900 1234</p>
              <p className="text-sm text-gray-500">Hỗ trợ 24/7</p>
            </div>

            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">support@beautycosmetics.com</p>
              <p className="text-sm text-gray-500">Phản hồi trong 24h</p>
            </div>

            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Chat trực tuyến
              </h3>
              <p className="text-gray-600">Trò chuyện ngay</p>
              <p className="text-sm text-gray-500">Online 8AM - 10PM</p>
            </div>
          </div>
        </div>

        {/* Continue Navigation */}
        <div className="mt-12 text-center">
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

export default OrderFailurePage;
