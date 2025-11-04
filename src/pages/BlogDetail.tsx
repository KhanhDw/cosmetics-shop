import React from "react";
import Header from "@/components/ui/layout/Header";
import Footer from "@/components/ui/layout/Footer";
import { Link } from "react-router-dom";
import { getRandomCosmeticImageUrl } from "@/utils/imageService";

const BlogDetail: React.FC = () => {
  // Mock blog post data
  const blogPost = {
    id: 1,
    title: "Top 5 serum dưỡng da mặt không thể thiếu trong routine của bạn",
    excerpt:
      "Serum là bước chăm sóc da không thể thiếu trong chu trình skincare. Dưới đây là top 5 serum dưỡng da hiệu quả bạn nên thử.",
    date: "15/10/2024",
    category: "Skincare",
    author: "Nguyễn Mai",
    image: getRandomCosmeticImageUrl(1200, 600),
    content: `
      <p>Serum là một trong những sản phẩm chăm sóc da hiệu quả nhất hiện nay. Với kết cấu nhẹ, dễ thẩm thấu và chứa nồng độ cao các hoạt chất, serum giúp cải thiện làn da một cách rõ rệt.</p>

      <h2 className="font-playfair text-2xl font-bold text-[var(--text-accent)] mt-8 mb-4">1. Serum Vitamin C</h2>
      <p>Vitamin C là một chất chống oxy hóa mạnh mẽ, giúp làm sáng da, giảm thâm nám và bảo vệ da khỏi tác hại của tia UV. Sử dụng serum vitamin C vào buổi sáng sẽ giúp da bạn rạng rỡ và khỏe mạnh hơn.</p>

      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img
          src={getRandomCosmeticImageUrl(800, 600)}
          alt="Vitamin C serum"
          className="w-full h-64 object-cover"
        />
        <p className="text-[var(--text-secondary)] text-center text-sm mt-2 italic">Serum Vitamin C giúp làm sáng da và bảo vệ da khỏi tác hại của môi trường</p>
      </div>

      <h2 className="font-playfair text-2xl font-bold text-pastel-pink mt-8 mb-4">2. Serum Hyaluronic Acid</h2>
      <p>Hyaluronic Acid có khả năng giữ nước lên đến 1000 lần trọng lượng của nó, giúp da luôn được cấp ẩm đầy đủ. Đây là lựa chọn lý tưởng cho làn da khô hoặc da thiếu nước.</p>

      <div className="bg-pastel-pink/10 border-l-4 border-pastel-pink p-4 my-6">
        <h3 className="font-bold text-gray-800 mb-2">💡 Mẹo làm đẹp:</h3>
        <p className="text-gray-700">Rửa mặt bằng nước ấm giúp da hấp thu dưỡng chất tốt hơn. Tuy nhiên, hãy rửa lại bằng nước lạnh để se khít lỗ chân lông sau khi thoa serum.</p>
      </div>

      <h2 className="font-playfair text-2xl font-bold text-pastel-pink mt-8 mb-4">3. Serum Niacinamide</h2>
      <p>Niacinamide là một dạng của vitamin B3 giúp làm sáng da, thu nhỏ lỗ chân lông và giảm viêm. Đây là lựa chọn tuyệt vời cho những ai có làn da dầu mụn.</p>

      <h2 className="font-playfair text-2xl font-bold text-pastel-pink mt-8 mb-4">4. Serum Retinol</h2>
      <p>Retinol là một dẫn xuất của vitamin A, giúp thúc đẩy quá trình tái tạo da, làm mờ nếp nhăn và cải thiện kết cấu da. Tuy nhiên, nên bắt đầu với nồng độ thấp và chỉ sử dụng vào buổi tối.</p>

      <h2 className="font-playfair text-2xl font-bold text-pastel-pink mt-8 mb-4">5. Serum Peptide</h2>
      <p>Peptide là các chuỗi amino acid giúp kích thích sản sinh collagen, cải thiện độ đàn hồi và săn chắc cho da. Đây là lựa chọn lý tưởng cho da lão hóa.</p>

      <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-6 italic">
        "Một chu trình chăm sóc da hiệu quả không cần quá nhiều bước phức tạp. Điều quan trọng là chọn đúng sản phẩm phù hợp với loại da của bạn"
      </div>
    `,
  };

  // Mock related products
  const relatedProducts = [
    {
      id: 1,
      name: "Serum Vitamin C 20%",
      price: "590,000đ",
      image: getRandomCosmeticImageUrl(600, 600),
    },
    {
      id: 2,
      name: "Serum Hyaluronic Acid",
      price: "450,000đ",
      image: getRandomCosmeticImageUrl(600, 600),
    },
    {
      id: 3,
      name: "Serum Niacinamide 10%",
      price: "390,000đ",
      image: getRandomCosmeticImageUrl(600, 600),
    },
  ];

  // Mock related articles
  const relatedArticles = [
    {
      id: 2,
      title: "Cách chọn serum phù hợp với từng loại da",
      date: "13/10/2024",
      image: getRandomCosmeticImageUrl(600, 600),
    },
    {
      id: 3,
      title: "Tác dụng của Retinol trong chăm sóc da",
      date: "12/10/2024",
      image: getRandomCosmeticImageUrl(600, 600),
    },
    {
      id: 4,
      title: "Chu trình skincare buổi sáng đúng cách",
      date: "10/10/2024",
      image: getRandomCosmeticImageUrl(600, 600),
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      <main className="py-8">
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <span className="bg-[var(--text-accent)] text-white text-sm font-medium py-1 px-3 rounded-full mb-4 inline-block">
                  {blogPost.category}
                </span>
                <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
                  {blogPost.title}
                </h1>
                <div className="flex items-center text-sm opacity-90 text-[var(--text-secondary)]">
                  <span>{blogPost.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPost.author}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-[var(--bg-primary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="prose prose-lg max-w-none text-[var(--text-secondary)] font-inter"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            <div className="mt-12 pt-8 border-t border-[var(--border)]">
              <p className="text-[var(--text-secondary)] italic">
                👉 Khám phá thêm dòng sản phẩm dưỡng ẩm mới của BeautyGlow để có
                làn da khỏe mạnh và rạng rỡ mỗi ngày.
              </p>
            </div>
          </div>
        </section>

        {/* Related Products Section */}
        <section className="py-16 bg-[var(--bg-secondary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl font-bold text-[var(--text-primary)] mb-4">
                Sản phẩm được nhắc đến trong bài viết
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-[var(--card-bg)] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-[var(--text-primary)] mb-2">
                      {product.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-[var(--text-accent)] font-bold">
                        {product.price}
                      </span>
                      <button className="bg-[var(--text-accent)] hover:bg-[var(--text-accent)] text-white text-sm py-2 px-4 rounded-full transition">
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Articles Section */}
        <section className="py-16 bg-[var(--bg-primary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl font-bold text-[var(--text-primary)] mb-4">
                Có thể bạn sẽ thích 💕
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((article) => (
                <div
                  key={article.id}
                  className="group rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-[var(--text-accent)]/30"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-[var(--text-primary)] mb-3 group-hover:text-[var(--text-accent)] transition-colors">
                      <Link to={`/blog/${article.id}`}>{article.title}</Link>
                    </h3>
                    <div className="text-sm text-[var(--text-secondary)]">{article.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Share & Comment Section */}
        <section className="py-16 bg-[var(--bg-secondary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-2xl font-bold text-[var(--text-primary)] mb-6">
                Chia sẻ bài viết
              </h2>
              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-pink-700 transition"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-700 transition"
                >
                  <span className="sr-only">Pinterest</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-[var(--card-bg)] rounded-2xl p-8 shadow-md">
              <h2 className="font-playfair text-2xl font-bold text-[var(--text-primary)] mb-6 text-center">
                Bình luận
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[var(--text-secondary)] mb-1"
                    >
                      Tên
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--text-accent)] focus:border-[var(--text-accent)] bg-[var(--bg-primary)] text-[var(--text-primary)]"
                      placeholder="Nhập tên của bạn"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--text-secondary)] mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--text-accent)] focus:border-[var(--text-accent)] bg-[var(--bg-primary)] text-[var(--text-primary)]"
                      placeholder="Nhập email của bạn"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-[var(--text-secondary)] mb-1"
                  >
                    Nội dung bình luận
                  </label>
                  <textarea
                    id="comment"
                    rows={4}
                    className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--text-accent)] focus:border-[var(--text-accent)] bg-[var(--bg-primary)] text-[var(--text-primary)]"
                    placeholder="Chia sẻ suy nghĩ của bạn..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[var(--text-accent)] hover:bg-[var(--text-accent)] text-white font-medium py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
                  >
                    Gửi bình luận
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
