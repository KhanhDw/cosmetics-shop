import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, Percent, Copy, Star } from "lucide-react";

const PromotionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-soft-pink to-white dark:from-gray-800 dark:to-gray-900">
      <main>
        <Promotions />
      </main>
    </div>
  );
};
export default PromotionsPage;

const Promotions = () => {
  const [copiedVoucher, setCopiedVoucher] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  // Mock data for promotions
  const activePromotions = [
    {
      id: 1,
      title: "Combo Dưỡng Da Giảm 30%",
      description: "Combo chăm sóc da hoàn hảo với kem dưỡng, serum và mặt nạ",
      image: "https://picsum.photos/200/300",
      startDate: "2025-11-01",
      endDate: "2025-11-15",
      discount: "30%",
      badge: "Mới",
    },
    {
      id: 2,
      title: "Mua 2 Tặng 1 Mỹ Phẩm",
      description:
        "Chương trình mua 2 sản phẩm bất kỳ tặng 1 sản phẩm cùng loại",
      image: "https://picsum.photos/200/300",
      startDate: "2025-11-01",
      endDate: "2025-11-20",
      discount: "30%",
      badge: "Hot",
    },
    {
      id: 3,
      title: "Dưỡng Trắng Giảm 50%",
      description: "Sản phẩm dưỡng trắng da cao cấp giảm 50% trong tháng này",
      image: "https://picsum.photos/200/300",
      startDate: "2025-11-01",
      endDate: "2025-11-10",
      discount: "50%",
      badge: "Sắp kết thúc",
    },
  ];

  const upcomingPromotions = [
    {
      id: 1,
      title: "Black Friday Sale",
      description: "Giảm giá sốc Black Friday cho toàn bộ sản phẩm",
      image: "https://picsum.photos/200/300",
      startDate: "2025-11-25",
      endDate: "2025-11-29",
      discount: "Lên đến 70%",
    },
    {
      id: 2,
      title: "Tặng Quà Sinh Nhật",
      description: "Ưu đãi đặc biệt cho khách hàng trong ngày sinh nhật",
      image: "https://picsum.photos/200/300",
      startDate: "2025-12-01",
      endDate: "2025-12-15",
      discount: "Tặng quà",
    },
  ];

  const pastPromotions = [
    {
      id: 1,
      title: "Tặng Quà Sinh Nhật",
      description: "Ưu đãi cho khách hàng trong ngày sinh nhật",
      startDate: "2025-10-01",
      endDate: "2025-10-31",
      discount: "Tặng quà",
    },
    {
      id: 2,
      title: "Combo Chống Lão Hóa",
      description: "Combo chăm sóc da chống lão hóa",
      startDate: "2025-09-15",
      endDate: "2025-09-30",
      discount: "25%",
    },
  ];

  const vouchers = [
    {
      id: 1,
      code: "BEAUTY10",
      discount: "10%",
      description: "Giảm 10% cho đơn hàng từ 500.000đ",
      expiration: "2025-11-30",
    },
    {
      id: 2,
      code: "SKINCARE20",
      discount: "20%",
      description: "Giảm 20% cho sản phẩm dưỡng da",
      expiration: "2025-11-20",
    },
    {
      id: 3,
      code: "FREESHIP",
      discount: "Miễn phí",
      description: "Miễn phí vận chuyển cho đơn hàng từ 300.000đ",
      expiration: "2025-11-15",
    },
  ];

  const promotionalProducts = [
    {
      id: 1,
      name: "Serum Vitamin C 20%",
      price: 450000,
      originalPrice: 650000,
      image: "https://picsum.photos/200/300",
      discount: "30%",
    },
    {
      id: 2,
      name: "Kem dưỡng ẩm chống lão hóa",
      price: 550000,
      originalPrice: 750000,
      image: "https://picsum.photos/200/300",
      discount: "25%",
    },
    {
      id: 3,
      name: "Sữa rửa mặt dịu nhẹ",
      price: 180000,
      originalPrice: 250000,
      image: "https://picsum.photos/200/300",
      discount: "28%",
    },
    {
      id: 4,
      name: "Son Thỏi Matte 6 Màu",
      price: 280000,
      originalPrice: 350000,
      image: "https://picsum.photos/200/300",
      discount: "20%",
    },
  ];

  const handleCopyVoucher = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedVoucher(code);
    setTimeout(() => setCopiedVoucher(null), 2000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Cảm ơn bạn đã đăng ký nhận ưu đãi! Email: ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-soft-pink to-white dark:from-gray-800 dark:to-gray-900">
      {/* Breadcrumb */}
      <div className="max-w-6xl px-4 py-6 mx-auto">
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <Link
                to="/"
                className="hover:text-accent dark:text-accent dark:hover:text-accent/90"
              >
                Trang chủ
              </Link>
            </li>
            <li className="text-gray-400 dark:text-gray-500">/</li>
            <li className="font-medium text-gray-900 dark:text-gray-200">
              Khuyến mãi & Ưu đãi
            </li>
          </ol>
        </nav>

        {/* Hero Banner */}
        <div className="relative p-8 mb-12 overflow-hidden rounded-3xl bg-gradient-to-r from-accent/10 via-secondary/10 to-accent/10 dark:from-accent/20 dark:via-gray-700 dark:to-accent/20 md:p-12">
          <div className="absolute inset-0 opacity-50 bg-gradient-to-r from-accent/10 to-secondary/10 dark:from-accent/5 dark:to-gray-700/50"></div>
          <div className="relative z-10 flex flex-col items-center md:flex-row">
            <div className="mb-8 md:w-1/2 md:mb-0">
              <h1 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
                Ưu đãi tháng này – Giảm đến 50% cho sản phẩm chăm sóc da!
              </h1>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Cơ hội sở hữu các sản phẩm chăm sóc da cao cấp với mức giá tốt
                nhất trong tháng. Đừng bỏ lỡ những chương trình khuyến mãi hấp
                dẫn từ BeautyCosmetics.
              </p>
              <button className="px-6 py-3 font-medium  transition-all rounded-full shadow-lg bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 hover:scale-105">
                Mua ngay
              </button>
            </div>
            <div className="flex justify-center md:w-1/2">
              <div className="relative">
                <div className="flex items-center justify-center w-64 h-64 rounded-full md:w-80 md:h-80 bg-gradient-to-br from-accent/20 to-secondary/20 dark:from-gray-700 dark:to-gray-600">
                  <div className="flex items-center justify-center w-56 h-56 bg-white dark:bg-gray-600 rounded-full md:w-72 md:h-72">
                    <img
                      src="https://picsum.photos/200/300"
                      alt="Serum"
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-accent to-secondary rounded-full -top-4 -right-4 animate-pulse">
                  50% OFF
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Active Promotions */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Ưu đãi đang diễn ra
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {activePromotions.map((promo) => (
                <div
                  key={promo.id}
                  className="p-6 transition-shadow duration-300 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-sm rounded-2xl hover:shadow-md"
                >
                  <div className="relative mb-4">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="object-cover w-full h-48 rounded-xl"
                    />
                    <div className="absolute px-3 py-1 text-xs font-bold text-white rounded-full top-4 left-4 bg-gradient-to-r from-accent to-accent/90">
                      {promo.badge}
                    </div>
                    <div className="absolute px-3 py-1 text-sm font-bold text-gray-900 bg-gradient-to-r from-secondary/80 to-secondary/60 dark:from-gray-500 dark:to-gray-600 rounded-full top-4 right-4">
                      -{promo.discount}
                    </div>
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
                    {promo.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                    {promo.description}
                  </p>

                  <div className="flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2 text-accent dark:text-accent" />
                    <span>
                      Từ {new Date(promo.startDate).toLocaleDateString("vi-VN")}{" "}
                      - {new Date(promo.endDate).toLocaleDateString("vi-VN")}
                    </span>
                  </div>

                  <button className="w-full py-2 font-medium text-white transition-colors rounded-lg bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 hover:scale-105">
                    Xem chi tiết
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Upcoming Promotions */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Sắp diễn ra
              </h2>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {upcomingPromotions.map((promo) => (
                  <div
                    key={promo.id}
                    className="flex p-6 bg-white dark:bg-gray-700 border h-60 border-gray-200 dark:border-gray-600 shadow-sm rounded-2xl"
                  >
                    <div className="w-1/3 mr-4">
                      <img
                        src={promo.image}
                        alt={promo.title}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>

                    <div className="w-2/3">
                      <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
                        {promo.title}
                      </h3>
                      <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
                        {promo.description}
                      </p>

                      <div className="flex items-center mb-3 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2 text-accent dark:text-accent" />
                        <span>
                          Bắt đầu{" "}
                          {new Date(promo.startDate).toLocaleDateString(
                            "vi-VN"
                          )}
                        </span>
                      </div>

                      <button className="text-sm px-3 py-1.5 border border-accent dark:border-gray-500 rounded-full text-accent dark:text-accent hover:bg-accent/10 dark:hover:bg-gray-600/50 transition-colors">
                        Nhắc tôi khi bắt đầu
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Past Promotions */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Đã kết thúc
              </h2>
            </div>

            <div className="p-6 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-sm rounded-2xl">
              <div className="space-y-4">
                {pastPromotions.map((promo) => (
                  <div
                    key={promo.id}
                    className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-600 last:border-b-0"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {promo.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {promo.description}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(promo.startDate).toLocaleDateString("vi-VN")} -{" "}
                      {new Date(promo.endDate).toLocaleDateString("vi-VN")}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Voucher Zone */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Mã giảm giá
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {vouchers.map((voucher) => (
                <div
                  key={voucher.id}
                  className="relative p-6 overflow-hidden bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-sm rounded-2xl"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 rounded-full bg-gradient-to-r from-accent/10 to-secondary/10 dark:from-accent/5 dark:to-gray-600/30"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-2xl font-bold text-accent dark:text-accent">
                        {voucher.discount}
                      </div>
                      <Percent className="w-6 h-6 text-secondary dark:text-gray-300" />
                    </div>

                    <div className="mb-3">
                      <div className="font-medium text-gray-800 dark:text-white truncate">
                        {voucher.code}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {voucher.description}
                      </p>
                    </div>

                    <div className="flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-2 text-accent dark:text-accent" />
                      <span>
                        Hạn dùng:{" "}
                        {new Date(voucher.expiration).toLocaleDateString(
                          "vi-VN"
                        )}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopyVoucher(voucher.code)}
                      className="flex items-center justify-center w-full py-2 text-accent dark:text-accent transition-colors border border-accent dark:border-accent/50 rounded-lg hover:bg-accent/10 dark:hover:bg-accent/10"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      {copiedVoucher === voucher.code
                        ? "Đã sao chép!"
                        : "Sao chép mã"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Promotional Products */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Sản phẩm khuyến mãi
              </h2>
              <div className="flex space-x-2">
                <select className="px-3 py-2 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent">
                  <option>Tất cả sản phẩm</option>
                  <option>Dưỡng da</option>
                  <option>Trang điểm</option>
                  <option>Chăm sóc tóc</option>
                </select>
                <select className="px-3 py-2 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent">
                  <option>Tất cả mức giảm</option>
                  <option>Trên 20%</option>
                  <option>Trên 30%</option>
                  <option>Trên 40%</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {promotionalProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-sm rounded-2xl"
                >
                  <div className="relative mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-contain w-full h-40"
                    />
                    <div className="absolute px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-accent to-accent/90 rounded top-2 left-2">
                      -{product.discount}
                    </div>
                  </div>

                  <h3 className="mb-1 text-sm font-medium text-gray-800 dark:text-white truncate">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline">
                      <span className="font-bold text-accent dark:text-accent">
                        {product.price.toLocaleString("vi-VN")}₫
                      </span>
                      <span className="ml-2 text-sm text-gray-500 line-through dark:text-gray-400">
                        {product.originalPrice.toLocaleString("vi-VN")}₫
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">
                        4.8
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Subscribe Section */}
          <section className="p-8 text-center bg-gradient-to-r from-soft-pink to-light-pink dark:from-gray-700 dark:to-gray-800 rounded-2xl">
            <h2 className="mb-3 text-2xl font-bold text-gray-800 dark:text-white">
              Đăng ký nhận ưu đãi
            </h2>
            <p className="max-w-2xl mx-auto mb-6 text-gray-600 dark:text-gray-300">
              Đừng bỏ lỡ bất kỳ chương trình nào từ chúng tôi 💌 <br />
              Nhận thông báo ưu đãi sớm và những mã giảm giá độc quyền
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email của bạn"
                required
                className="flex-grow px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-gray-900 dark:text-white"
              />
              <button
                type="submit"
                className="px-6 py-3 font-medium text-white transition-colors rounded-r-lg bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 hover:scale-105"
              >
                Đăng ký ngay
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};
