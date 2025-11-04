import React from "react";
import { Link, useParams } from "react-router-dom";

const OrderDetailPage: React.FC = () => {
  // Mock order data
  const { orderId } = useParams();
  const orderData = {
    orderId: orderId || "#INV20251101",
    orderDate: "01/11/2025",
    status: "Đang giao hàng", // Options: Đang xử lý, Đang giao hàng, Đã giao thành công, Đã hủy
    paymentStatus: "Đã thanh toán",
    paymentMethod: "Thanh toán khi nhận hàng (COD)",
    shippingMethod: "Giao nhanh (1–2 ngày)",
    shippingTracking: "VC123456789",
    estimatedDelivery: "03–05/11/2025",
    cancellationReason: "",
    customerInfo: {
      fullName: "Nguyễn Thị Mai",
      phone: "0123 456 789",
      address: "123 Đường ABC, Phường XYZ, Quận 1, TP. HCM",
      email: "nguyenthimai@example.com",
      notes: "Giao trong giờ hành chính",
    },
    products: [
      {
        id: 1,
        name: "Serum Vitamin C 20%",
        sku: "SR-001",
        price: 450000,
        quantity: 1,
        image: "https://images.pexels.com/photos/4344415/pexels-photo-4344415.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
        subtotal: 450000,
      },
      {
        id: 2,
        name: "Kem dưỡng ẩm chống lão hóa",
        sku: "KD-002",
        price: 650000,
        quantity: 1,
        image: "https://images.pexels.com/photos/4041858/pexels-photo-4041858.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
        subtotal: 650000,
      },
      {
        id: 3,
        name: "Sữa rửa mặt dịu nhẹ",
        sku: "SRM-003",
        price: 280000,
        quantity: 2,
        image: "https://images.pexels.com/photos/4344425/pexels-photo-4344425.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
        subtotal: 560000,
      },
    ],
    subtotal: 1660000,
    shippingCost: 30000,
    discount: 100000,
    total: 1590000,
    invoiceId: "INV-2025-1101-001",
    invoiceDate: "01/11/2025",
  };

  // Function to render progress bar based on status
  const renderProgressBar = () => {
    const steps = ["Đặt hàng", "Xác nhận", "Đang giao", "Hoàn tất"];
    let currentStep = 0;

    switch (orderData.status) {
      case "Đang xử lý":
        currentStep = 1;
        break;
      case "Đang giao hàng":
        currentStep = 2;
        break;
      case "Đã giao thành công":
        currentStep = 3;
        break;
      case "Đã hủy":
        currentStep = -1; // Special case for cancelled
        break;
      default:
        currentStep = 0;
    }

    return (
      <div className="flex items-center justify-between relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 -z-10"></div>
        <div
          className={`absolute top-1/2 left-0 h-1 bg-linear-to-r from-pink-400 to-purple-400 -translate-y-1/2 -z-10 ${
            currentStep === -1
              ? "w-0"
              : currentStep === 0
              ? "w-0"
              : currentStep === 1
              ? "w-1/3"
              : currentStep === 2
              ? "w-2/3"
              : "w-full"
          }`}
        ></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center relative z-10"
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep >= index && orderData.status !== "Đã hủy"
                  ? "bg-linear-to-r from-pink-400 to-purple-400 text-white"
                  : "bg-gray-200 text-gray-500"
              } ${
                orderData.status === "Đã hủy" && index === 0
                  ? "bg-red-500 text-white"
                  : ""
              }`}
            >
              {orderData.status === "Đã giao thành công" && index === 3 ? (
                <span>✅</span>
              ) : orderData.status === "Đã hủy" && index === 0 ? (
                <span>❌</span>
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span className="text-xs mt-2 text-center">{step}</span>
          </div>
        ))}
      </div>
    );
  };

  // Handle print function
  const handlePrint = () => {
    window.print();
  };

  // Handle PDF download (would require jsPDF in a real implementation)
  const handleDownloadPDF = () => {
    alert("Chức năng tải PDF đang được phát triển");
  };

  // Handle contact support
  const handleContactSupport = () => {
    window.location.href = "/contact";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
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
                to="/account"
                className="hover:text-pink-500"
              >
                Tài khoản
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link
                to="/account/orders"
                className="hover:text-pink-500"
              >
                Đơn hàng của tôi
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">{orderData.orderId}</li>
          </ol>
        </nav>

        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Chi tiết đơn hàng
          </h1>
          <p className="text-gray-600">
            Xem thông tin và trạng thái giao hàng của đơn hàng này.
          </p>
        </div>

        {/* Order Status Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Trạng thái đơn hàng
              </h2>
              <div
                className={`text-lg font-semibold ${
                  orderData.status === "Đang xử lý"
                    ? "text-yellow-600"
                    : orderData.status === "Đang giao hàng"
                    ? "text-blue-600"
                    : orderData.status === "Đã giao thành công"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {orderData.status}
              </div>
              {orderData.status === "Đã hủy" &&
                orderData.cancellationReason && (
                  <p className="text-red-600 mt-2">
                    Lý do hủy: {orderData.cancellationReason}
                  </p>
                )}
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-sm text-gray-600">
                Mã đơn hàng:{" "}
                <span className="font-medium">{orderData.orderId}</span>
              </div>
              <div className="text-sm text-gray-600">
                Ngày đặt:{" "}
                <span className="font-medium">{orderData.orderDate}</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="pt-6">{renderProgressBar()}</div>
        </div>

        {/* Order Information Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Thông tin đơn hàng
            </h2>

            <div className="space-y-4">
              <div className="flex">
                <span className="text-gray-600 w-40">Mã đơn hàng:</span>
                <span className="font-medium text-gray-800">
                  {orderData.orderId}
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-40">Ngày đặt:</span>
                <span className="font-medium text-gray-800">
                  {orderData.orderDate}
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-40">
                  Phương thức thanh toán:
                </span>
                <span className="font-medium text-gray-800">
                  {orderData.paymentMethod}
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-40">
                  Trạng thái thanh toán:
                </span>
                <span
                  className={`font-medium ${
                    orderData.paymentStatus === "Đã thanh toán"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {orderData.paymentStatus}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Thông tin giao hàng
            </h2>

            <div className="space-y-4">
              <div className="flex">
                <span className="text-gray-600 w-40">
                  Phương thức giao hàng:
                </span>
                <span className="font-medium text-gray-800">
                  {orderData.shippingMethod}
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-40">Mã vận đơn:</span>
                <span className="font-medium text-gray-800">
                  {orderData.shippingTracking}
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-40">Dự kiến giao:</span>
                <span className="font-medium text-gray-800">
                  {orderData.estimatedDelivery}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Customer & Shipping Info Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Thông tin người nhận
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-3">
                <span className="text-gray-600 block">Họ tên</span>
                <span className="font-medium text-gray-800">
                  {orderData.customerInfo.fullName}
                </span>
              </div>
              <div className="mb-3">
                <span className="text-gray-600 block">Số điện thoại</span>
                <span className="font-medium text-gray-800">
                  {orderData.customerInfo.phone}
                </span>
              </div>
              <div className="mb-3">
                <span className="text-gray-600 block">Email</span>
                <span className="font-medium text-gray-800">
                  {orderData.customerInfo.email}
                </span>
              </div>
            </div>
            <div>
              <div className="mb-3">
                <span className="text-gray-600 block">Địa chỉ giao hàng</span>
                <span className="font-medium text-gray-800">
                  {orderData.customerInfo.address}
                </span>
              </div>
              <div>
                <span className="text-gray-600 block">Ghi chú đơn hàng</span>
                <span className="font-medium text-gray-800">
                  {orderData.customerInfo.notes}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Product List Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Sản phẩm trong đơn hàng
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-gray-600 font-medium">
                    Sản phẩm
                  </th>
                  <th className="text-center py-3 text-gray-600 font-medium">
                    Mã sản phẩm
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
                    <td className="py-4">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-md mr-4 flex items-center justify-center overflow-hidden">
                          {product.image ? (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-xs text-gray-500">Ảnh</span>
                          )}
                        </div>
                        <span className="text-gray-800">{product.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-center text-gray-800">
                      {product.sku}
                    </td>
                    <td className="py-4 text-center text-gray-800">
                      {product.quantity}
                    </td>
                    <td className="py-4 text-right text-gray-800">
                      {product.price.toLocaleString("vi-VN")}₫
                    </td>
                    <td className="py-4 text-right text-gray-800 font-medium">
                      {product.subtotal.toLocaleString("vi-VN")}₫
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Order Summary */}
          <div className="border-t border-gray-200 pt-6 mt-6">
            <div className="space-y-3 mb-4 max-w-xs ml-auto">
              <div className="flex justify-between">
                <span className="text-gray-600">Tạm tính</span>
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
            <div className="flex justify-between pt-4 border-t border-gray-200 max-w-xs ml-auto">
              <span className="text-lg font-semibold text-gray-800">
                Tổng cộng
              </span>
              <span className="text-xl font-bold text-pink-600">
                {orderData.total.toLocaleString("vi-VN")}₫
              </span>
            </div>
          </div>
        </div>

        {/* Invoice & Actions Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Biên lai & Thao tác
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <span className="text-gray-600">Mã biên lai</span>
              <p className="font-medium text-gray-800">{orderData.invoiceId}</p>
            </div>
            <div>
              <span className="text-gray-600">Ngày tạo biên lai</span>
              <p className="font-medium text-gray-800">
                {orderData.invoiceDate}
              </p>
            </div>
            <div>
              <span className="text-gray-600">Trạng thái thanh toán</span>
              <p
                className={`font-medium ${
                  orderData.paymentStatus === "Đã thanh toán"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {orderData.paymentStatus}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleDownloadPDF}
              className="px-5 py-2.5 bg-linear-to-r from-pink-400 to-purple-400 text-white rounded-lg font-medium hover:from-pink-500 hover:to-purple-500 transition-colors"
            >
              Tải biên lai (PDF)
            </button>
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              In đơn hàng
            </button>
            <button
              onClick={handleContactSupport}
              className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Liên hệ hỗ trợ
            </button>
          </div>
        </div>

        {/* Suggested Products Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Gợi ý cho bạn
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

        {/* Return Button */}
        <div className="text-center mb-8">
          <Link
            to="/account/orders"
            className="inline-block px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Quay lại danh sách đơn hàng
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;
