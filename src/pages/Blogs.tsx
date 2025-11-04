import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getRandomCosmeticImageUrl } from "@/utils/imageService";

const Blogs: React.FC = () => {
  // Mock data for blog posts
  const featuredPost = {
    id: 1,
    title: "Top 5 serum dưỡng da mặt không thể thiếu trong routine của bạn",
    excerpt:
      "Serum là bước chăm sóc da không thể thiếu trong chu trình skincare. Dưới đây là top 5 serum dưỡng da hiệu quả bạn nên thử.",
    date: "15/10/2024",
    category: "Skincare",
    image: getRandomCosmeticImageUrl(800, 600),
    author: "Nguyễn Mai",
  };

  const featuredPosts = [
    {
      id: 2,
      title: "Cách chọn kem nền phù hợp với từng loại da",
      excerpt:
        "Tìm hiểu cách chọn kem nền phù hợp với từng loại da để có lớp nền hoàn hảo và bền màu suốt ngày dài.",
      date: "13/10/2024",
      category: "Makeup",
      image: getRandomCosmeticImageUrl(800, 600),
    },
    {
      id: 3,
      title: "Bí quyết chăm sóc da khô vào mùa đông",
      excerpt:
        "Dưỡng ẩm cho da khô vào mùa đông không chỉ là thoa kem. Cùng khám phá các bước chăm sóc da đúng cách.",
      date: "10/10/2024",
      category: "Skincare",
      image: getRandomCosmeticImageUrl(800, 600),
    },
  ];

  // Expanded blog posts array to demonstrate pagination
  const allBlogPosts = [
    {
      id: 4,
      title: "Làm đẹp với nguyên liệu tự nhiên tại nhà",
      excerpt:
        "Bạn có biết nhiều nguyên liệu quen thuộc trong căn bếp có thể giúp bạn chăm sóc da hiệu quả? Cùng khám phá!",
      date: "8/10/2024",
      category: "Natural Beauty",
      image: getRandomCosmeticImageUrl(800, 600),
      author: "Lê Quỳnh",
    },
    {
      id: 5,
      title: "Trend trang điểm mắt khói 2024",
      excerpt:
        "Xu hướng trang điểm mắt khói 2024 mang nhiều điểm mới mẻ và độc đáo, phù hợp với cả đi làm và đi chơi.",
      date: "5/10/2024",
      category: "Makeup",
      image: getRandomCosmeticImageUrl(800, 600),
      author: "Trần Anh",
    },
    {
      id: 6,
      title: "Các bước skincare buổi sáng hiệu quả",
      excerpt:
        "Chu trình skincare buổi sáng đúng cách giúp bảo vệ da trước tác động từ môi trường và chuẩn bị cho lớp nền hoàn hảo.",
      date: "2/10/2024",
      category: "Skincare",
      image: getRandomCosmeticImageUrl(800, 600),
      author: "Phạm Linh",
    },
    {
      id: 7,
      title: "Chọn son môi phù hợp cho từng tone da",
      excerpt:
        "Son môi là phụ kiện không thể thiếu. Tuy nhiên, chọn màu son phù hợp với tone da là yếu tố quyết định vẻ đẹp tổng thể.",
      date: "30/9/2024",
      category: "Makeup",
      image: getRandomCosmeticImageUrl(800, 600),
      author: "Hoàng Yến",
    },
    {
      id: 8,
      title: "Cách nhận biết và chăm sóc da hỗn hợp",
      excerpt:
        "Da hỗn hợp là loại da khá phổ biến, với vùng chữ T bóng dầu và vùng má khô. Cùng tìm hiểu cách chăm sóc hiệu quả.",
      date: "27/9/2024",
      category: "Skincare",
      image: getRandomCosmeticImageUrl(800, 600),
      author: "Đỗ Trang",
    },
    {
      id: 9,
      title: "Tẩy trang đúng cách cho da nhạy cảm",
      excerpt:
        "Da nhạy cảm cần được chăm sóc nhẹ nhàng, đặc biệt là bước tẩy trang. Cùng tìm hiểu các sản phẩm và phương pháp phù hợp.",
      date: "25/9/2024",
      category: "Skincare",
      image: getRandomCosmeticImageUrl(800, 600),
      author: "Vũ Nhung",
    },
    {
      id: 10,
      title: "5 bước skincare cơ bản không thể thiếu",
      excerpt:
        "Chu trình skincare cơ bản sẽ giúp bạn có làn da khỏe mạnh và rạng rỡ. Hãy bắt đầu với 5 bước đơn giản này.",
      date: "22/9/2024",
      category: "Skincare",
      image: getRandomCosmeticImageUrl(800, 600),
      author: "Minh Thư",
    },
    {
      id: 11,
      title: "Cách tạo kiểu tóc đẹp cho ngày đi làm",
      excerpt:
        "Tóc gọn gàng, đẹp mắt sẽ giúp bạn tự tin hơn trong ngày làm việc. Cùng học vài kiểu tóc đơn giản nhưng hiệu quả.",
      date: "20/9/2024",
      category: "Haircare",
      image: getRandomCosmeticImageUrl(800, 600),
      author: "Phương Thảo",
    },
    {
      id: 12,
      title: "Các loại mặt nạ tự nhiên cho từng loại da",
      excerpt:
        "Tự làm mặt nạ tại nhà từ nguyên liệu tự nhiên là cách chăm sóc da tiết kiệm mà hiệu quả. Tìm hiểu công thức phù hợp với bạn.",
      date: "18/9/2024",
      category: "Natural Beauty",
      image: getRandomCosmeticImageUrl(800, 600),
      author: "Hồng Nhung",
    },
    {
      id: 13,
      title: "Trang điểm mắt tự nhiên cho ngày thường",
      excerpt:
        "Trang điểm mắt tự nhiên giúp đôi mắt trở nên long lanh mà không quá đậm. Hướng dẫn từng bước đơn giản cho người mới bắt đầu.",
      date: "15/9/2024",
      category: "Makeup",
      image: getRandomCosmeticImageUrl(800, 600),
      author: "Thanh Hằng",
    },
    {
      id: 14,
      title: "Chăm sóc móng tay tại nhà hiệu quả",
      excerpt:
        "Móng tay đẹp là điểm nhấn hoàn hảo cho bàn tay. Cùng tìm hiểu cách chăm sóc móng tại nhà để luôn tự tin.",
      date: "12/9/2024",
      category: "Nail Care",
      image: getRandomCosmeticImageUrl(800, 600),
      author: "Diễm Quỳnh",
    },
    {
      id: 15,
      title: "Các loại kem chống nắng phù hợp với từng loại da",
      excerpt:
        "Kem chống nắng là bước không thể thiếu trong chu trình skincare. Hãy chọn sản phẩm phù hợp với loại da của bạn.",
      date: "10/9/2024",
      category: "Skincare",
      image: getRandomCosmeticImageUrl(800, 600),
      author: "Ngọc Trâm",
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Show 6 posts per page

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allBlogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(allBlogPosts.length / postsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-soft-pink to-white dark:from-gray-800 dark:to-gray-900">
      <main className="py-8">
        {/* Hero Section */}
        <section
          className="py-16 bg-gradient-to-r from-soft-pink to-light-pink dark:from-gray-800 dark:to-gray-700 bg-cover bg-center"
          style={{
            backgroundImage: `url('${getRandomCosmeticImageUrl(1200, 600)}')`,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16 bg-black/20 dark:bg-black/40 rounded-3xl">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
                Bí quyết làm đẹp cùng BeautyGlow
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Cập nhật xu hướng, mẹo chăm sóc da và phong cách sống
              </p>
              <button className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-white font-medium py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                Khám phá bài viết
              </button>
            </div>
          </div>
        </section>

        {/* Featured Post Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Featured Post */}
              <div className="lg:col-span-2 group relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <span className="bg-gradient-to-r from-accent to-accent/90 text-white text-sm font-medium py-1 px-3 rounded-full mb-3 inline-block">
                    {featuredPost.category}
                  </span>
                  <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-3">
                    {featuredPost.title}
                  </h2>
                  <div className="flex items-center text-sm opacity-80 mb-4">
                    <span>{featuredPost.date}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredPost.author}</span>
                  </div>
                  <p className="mb-4">{featuredPost.excerpt}</p>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-white font-medium hover:underline"
                  >
                    Đọc tiếp →
                  </Link>
                </div>
              </div>

              {/* Two Side Featured Posts */}
              <div className="space-y-8">
                {featuredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="group bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-accent to-accent/90 text-white text-xs font-medium py-1 px-2 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-playfair font-semibold text-lg mb-2 line-clamp-2 group-hover:text-accent dark:group-hover:text-accent transition-colors">
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-gray-800 dark:text-white"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-3">
                        <span>{post.date}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-3">
                        {post.excerpt}
                      </p>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-accent dark:text-accent text-sm font-medium hover:underline"
                      >
                        Đọc tiếp →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section className="py-16 bg-gradient-to-b from-soft-pink to-white dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Tất cả bài viết
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Khám phá các bài viết mới nhất từ BeautyGlow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-accent to-accent/90 text-white text-xs font-medium py-1 px-2 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair font-semibold text-lg mb-3 line-clamp-2 group-hover:text-accent dark:group-hover:text-accent transition-colors">
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-gray-800 dark:text-white"
                        >
                          {post.title}
                        </Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-4">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-accent dark:text-accent font-medium hover:underline"
                    >
                      Đọc thêm →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-12 space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-full ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400"
                    : "bg-gradient-to-r from-accent to-accent/90 text-white hover:from-accent/90 hover:to-accent/80"
                }`}
              >
                Trước
              </button>

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;
                const isActive = page === currentPage;

                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-full ${
                      isActive
                        ? "bg-gradient-to-r from-accent to-accent/90 text-white"
                        : "bg-white dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-full ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400"
                    : "bg-gradient-to-r from-accent to-accent/90 text-white hover:from-accent/90 hover:to-accent/80"
                }`}
              >
                Sau
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-soft-pink to-light-pink dark:from-gray-800 dark:to-gray-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Đăng ký để nhận bí quyết làm đẹp mỗi tuần ✨
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Cập nhật xu hướng làm đẹp mới nhất, mẹo chăm sóc da và khuyến mãi
              độc quyền từ BeautyGlow
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-grow px-5 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-white font-medium py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                Đăng ký ngay
              </button>
            </div>

            <div className="mt-10 flex justify-center">
              <img
                src={getRandomCosmeticImageUrl(600, 600)}
                alt="Newsletter illustration"
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blogs;
