import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState("shipping");
  const [openPolicy, setOpenPolicy] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [faqSearch, setFaqSearch] = useState("");

  // Mock data for policies
  const policies = [
    {
      id: 1,
      title: "Chính sách giao hàng",
      summary: "Thông tin về thời gian, phí vận chuyển và khu vực giao hàng",
      content: `Thời gian giao hàng: 1-3 ngày làm việc trong nội thành TP.HCM, 3-7 ngày đối với các tỉnh thành khác.

Phí vận chuyển: miễn phí cho đơn hàng trên 500.000đ, dưới 500.000đ phí ship là 30.000đ.

Khu vực giao hàng: Toàn quốc, áp dụng giao hàng tận nơi thông qua các đơn vị vận chuyển uy tín.

Theo dõi đơn hàng: Bạn có thể theo dõi tình trạng đơn hàng qua mã vận đơn trong mục tài khoản.`,
    },
    {
      id: 2,
      title: "Chính sách đổi trả",
      summary: "Hướng dẫn đổi trả sản phẩm trong vòng 7 ngày",
      content: `Điều kiện đổi trả: Sản phẩm còn nguyên vẹn, chưa qua sử dụng, có hóa đơn mua hàng.

Thời gian đổi trả: Trong vòng 7 ngày kể từ ngày nhận hàng.

Quy trình đổi trả: Gửi yêu cầu đổi trả qua website, nhân viên sẽ liên hệ xác nhận và hướng dẫn cách gửi sản phẩm.

Chi phí đổi trả: BeautyCosmetics sẽ chịu toàn bộ chi phí vận chuyển trong trường hợp đổi trả do lỗi sản phẩm.`,
    },
    {
      id: 3,
      title: "Chính sách bảo mật",
      summary: "Cam kết bảo vệ thông tin cá nhân khách hàng",
      content: `Chúng tôi cam kết bảo vệ thông tin cá nhân của khách hàng tuyệt đối.

Thông tin thu thập: Tên, email, số điện thoại, địa chỉ giao hàng và thông tin thanh toán.

Mục đích sử dụng: Xử lý đơn hàng, gửi thông báo và chăm sóc khách hàng.

Không chia sẻ thông tin: Chúng tôi cam kết không chia sẻ thông tin khách hàng cho bên thứ ba nếu không có sự đồng ý.`,
    },
  ];

  // Mock data for FAQs
  const faqs = {
    shipping: [
      {
        id: 1,
        question: "Thời gian giao hàng mất bao lâu?",
        answer:
          "Thời gian giao hàng từ 1-3 ngày làm việc trong nội thành TP.HCM và 3-7 ngày với các tỉnh thành khác.",
      },
      {
        id: 2,
        question: "Có thể thay đổi địa chỉ giao hàng sau khi đặt hàng không?",
        answer:
          "Bạn có thể thay đổi địa chỉ giao hàng nếu đơn hàng chưa được gửi đi. Vui lòng liên hệ bộ phận CSKH để được hỗ trợ.",
      },
    ],
    payment: [
      {
        id: 3,
        question: "Tôi có thể thanh toán bằng hình thức nào?",
        answer:
          "Chúng tôi hỗ trợ thanh toán qua thẻ ngân hàng, ví điện tử, hoặc thanh toán khi nhận hàng (COD).",
      },
      {
        id: 4,
        question: "Tôi có thể hủy đơn hàng sau khi thanh toán không?",
        answer:
          "Bạn có thể hủy đơn hàng trước khi đơn được gửi đi. Sau khi đơn hàng đã được gửi, vui lòng thực hiện theo chính sách đổi trả.",
      },
    ],
    products: [
      {
        id: 5,
        question: "Sản phẩm có an toàn cho da không?",
        answer:
          "Tất cả sản phẩm của chúng tôi đều được kiểm định và đảm bảo an toàn cho người sử dụng. Bạn có thể xem thành phần chi tiết trên trang sản phẩm.",
      },
      {
        id: 6,
        question: "Sản phẩm có hạn sử dụng bao lâu?",
        answer:
          "Hạn sử dụng trung bình từ 2-3 năm kể từ ngày sản xuất. Vui lòng kiểm tra hạn sử dụng trên bao bì sản phẩm.",
      },
    ],
    account: [
      {
        id: 7,
        question: "Làm thế nào để tạo tài khoản?",
        answer:
          'Bạn có thể tạo tài khoản bằng cách nhấn vào biểu tượng người dùng ở góc phải màn hình, sau đó chọn "Đăng ký" và điền thông tin.',
      },
      {
        id: 8,
        question: "Tôi quên mật khẩu, làm sao để lấy lại?",
        answer:
          'Bạn có thể nhấn vào "Quên mật khẩu" ở trang đăng nhập, nhập email và chúng tôi sẽ gửi hướng dẫn đổi mật khẩu.',
      },
    ],
    warranty: [
      {
        id: 9,
        question: "Chính sách bảo hành sản phẩm thế nào?",
        answer:
          "Chúng tôi bảo hành sản phẩm trong vòng 30 ngày kể từ ngày nhận hàng với các lỗi do nhà sản xuất.",
      },
      {
        id: 10,
        question: "Nếu sản phẩm bị lỗi, tôi cần làm gì?",
        answer:
          "Bạn cần liên hệ với chúng tôi trong vòng 3 ngày kể từ khi nhận hàng để được hỗ trợ đổi trả theo chính sách.",
      },
    ],
  };

  // Filter FAQs based on search
  const filteredFaqs: { [key: string]: { id: number; question: string; answer: string; }[] } = Object.keys(faqs).reduce((acc, category: string) => {
    const categoryKey = category as keyof typeof faqs;
    acc[category] = faqs[categoryKey].filter(
      (faq: { id: number; question: string; answer: string; }) =>
        faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
        faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
    );
    return acc;
  }, {} as { [key: string]: { id: number; question: string; answer: string; }[] });

  // Support form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to your backend
    alert("Cảm ơn bạn, chúng tôi sẽ phản hồi sớm nhất!");
    setFormData({ name: "", email: "", subject: "", message: "" });
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
            <li className="text-gray-900 font-medium">Hỗ trợ khách hàng</li>
          </ol>
        </nav>

        {/* Main Title */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Hỗ trợ khách hàng
          </h1>
          <p className="text-gray-600 mt-2">
            Tìm kiếm thông tin bạn cần hoặc liên hệ với chúng tôi
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="sticky top-0 z-10 bg-white bg-opacity-90 backdrop-blur-sm py-4 mb-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {[
              { id: "shipping", label: "Chính sách giao hàng" },
              { id: "returns", label: "Chính sách đổi trả" },
              { id: "privacy", label: "Chính sách bảo mật" },
              { id: "faq", label: "FAQ – Câu hỏi thường gặp" },
              { id: "contact", label: "Hỗ trợ & Liên hệ" },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-linear-to-r from-pink-400 to-purple-400 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        {activeTab === "shipping" && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Chính sách giao hàng
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {policies.map((policy) => (
                <div
                  key={policy.id}
                  className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 cursor-pointer"
                  onClick={() =>
                    setOpenPolicy(openPolicy === policy.id ? null : policy.id)
                  }
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {policy.title}
                    </h3>
                    {openPolicy === policy.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{policy.summary}</p>

                  {openPolicy === policy.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
                      <p className="text-gray-700 whitespace-pre-line">
                        {policy.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "returns" && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Chính sách đổi trả
            </h2>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Chính sách đổi trả sản phẩm
              </h3>
              <p className="text-gray-700 mb-4">
                BeautyCosmetics cam kết mang đến cho khách hàng những sản phẩm
                chất lượng cao. Trong trường hợp quý khách không hài lòng với
                sản phẩm đã nhận, chúng tôi có chính sách đổi trả linh hoạt:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Đổi trả trong vòng 7 ngày kể từ ngày nhận hàng</li>
                <li>Sản phẩm còn nguyên vẹn, chưa qua sử dụng</li>
                <li>Không áp dụng cho sản phẩm đã mở nắp hoặc đã sử dụng</li>
                <li>
                  Khách hàng chịu phí vận chuyển trong trường hợp đổi trả do
                  thay đổi nhu cầu
                </li>
              </ul>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-800 mb-2">Lưu ý:</h4>
                <p className="text-yellow-700">
                  Sản phẩm bị lỗi do nhà sản xuất, BeautyCosmetics sẽ chịu toàn
                  bộ phí vận chuyển và hoàn tiền hoặc đổi sản phẩm mới cho khách
                  hàng.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "privacy" && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Chính sách bảo mật
            </h2>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Chính sách bảo mật thông tin khách hàng
              </h3>
              <p className="text-gray-700 mb-4">
                BeautyCosmetics cam kết bảo vệ thông tin cá nhân của khách hàng
                tuyệt đối. Chính sách bảo mật này áp dụng cho tất cả thông tin
                được thu thập khi bạn sử dụng trang web của chúng tôi.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    1. Thông tin chúng tôi thu thập
                  </h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>
                      Thông tin nhận dạng cá nhân: tên, số điện thoại, địa chỉ
                      email
                    </li>
                    <li>
                      Thông tin thanh toán: số thẻ, ngày hết hạn (được mã hóa
                      theo tiêu chuẩn bảo mật)
                    </li>
                    <li>
                      Thông tin giao hàng: tên người nhận, địa chỉ giao hàng
                    </li>
                    <li>
                      Thông tin tương tác với trang web: lịch sử mua hàng, sản
                      phẩm xem
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    2. Mục đích sử dụng thông tin
                  </h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Xử lý đơn hàng và giao sản phẩm đến quý khách</li>
                    <li>Liên lạc với quý khách về tình trạng đơn hàng</li>
                    <li>Cung cấp thông tin về sản phẩm, dịch vụ phù hợp</li>
                    <li>Cải thiện trải nghiệm người dùng</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    3. Bảo vệ thông tin
                  </h4>
                  <p className="text-gray-700">
                    Chúng tôi sử dụng các biện pháp bảo mật tiên tiến để bảo vệ
                    thông tin cá nhân của khách hàng khỏi truy cập trái phép,
                    tiết lộ, sử dụng sai mục đích hoặc mất mát.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "faq" && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Câu hỏi thường gặp
            </h2>

            <div className="mb-8">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Tìm kiếm câu hỏi của bạn..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-6">
              {Object.keys(filteredFaqs).map(
                (category) =>
                  filteredFaqs[category].length > 0 && (
                    <div
                      key={category}
                      className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 capitalize">
                        {category}
                      </h3>

                      <div className="space-y-4">
                        {filteredFaqs[category].map((faq) => (
                          <div
                            key={faq.id}
                            className="border-b border-gray-200 pb-4 last:border-b-0"
                            onClick={() =>
                              setOpenFaq(openFaq === faq.id ? null : faq.id)
                            }
                          >
                            <div className="flex justify-between items-center cursor-pointer">
                              <h4 className="font-medium text-gray-800">
                                {faq.question}
                              </h4>
                              {openFaq === faq.id ? (
                                <ChevronUp size={20} />
                              ) : (
                                <ChevronDown size={20} />
                              )}
                            </div>

                            {openFaq === faq.id && (
                              <div className="mt-3 pt-3 text-gray-700 animate-fadeIn">
                                {faq.answer}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Liên hệ hỗ trợ
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">
                  Thông tin liên hệ
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="bg-pink-100 p-3 rounded-lg mr-4">
                      <Phone
                        className="text-pink-600"
                        size={20}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Hotline</h4>
                      <p className="text-gray-700">1900 1234</p>
                      <p className="text-gray-500 text-sm">Hỗ trợ 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-lg mr-4">
                      <Mail
                        className="text-purple-600"
                        size={20}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Email</h4>
                      <p className="text-gray-700">
                        support@beautycosmetics.com
                      </p>
                      <p className="text-gray-500 text-sm">
                        Phản hồi trong 24h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Clock
                        className="text-blue-600"
                        size={20}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">
                        Giờ làm việc
                      </h4>
                      <p className="text-gray-700">Thứ 2 - Chủ nhật</p>
                      <p className="text-gray-500 text-sm">
                        8:00 AM - 10:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-pink-400 to-purple-400 text-white rounded-lg font-medium hover:from-pink-500 hover:to-purple-500 transition-colors">
                      <MessageCircle size={20} />
                      Chat với tư vấn viên
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">
                  Gửi yêu cầu hỗ trợ
                </h3>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Họ tên
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                        placeholder="Nhập họ tên của bạn"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                        placeholder="Nhập địa chỉ email"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Chủ đề
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                        placeholder="Nhập chủ đề yêu cầu"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Nội dung
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                        placeholder="Mô tả chi tiết yêu cầu của bạn"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-linear-to-r from-pink-400 to-purple-400 text-white rounded-lg font-medium hover:from-pink-500 hover:to-purple-500 transition-colors"
                    >
                      Gửi yêu cầu
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportPage;
