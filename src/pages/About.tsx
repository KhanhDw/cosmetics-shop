import React from "react";
import {
  Star,
  Sparkles,
  ChevronRight,
  Mail,
} from "lucide-react";
import { 
  FaLeaf, 
  FaHeart, 
  FaRecycle, 
  FaAward,
  FaCheckCircle,
  FaFeather,
  FaSeedling,
  FaFlagUsa
} from 'react-icons/fa';
import { getRandomCosmeticImageUrl } from "@/utils/imageService";

const About: React.FC = () => {
  // Sample data for the sections
  const values = [
    {
      icon: <FaLeaf className="w-10 h-10 text-[var(--text-accent)]" />,
      title: "Tự nhiên & an toàn",
      description:
        "Chúng tôi cam kết sử dụng nguyên liệu tự nhiên, an toàn cho làn da, không chứa hóa chất độc hại.",
    },
    {
      icon: <FaHeart className="w-10 h-10 text-[var(--text-accent)]" />,
      title: "Tôn vinh phụ nữ",
      description:
        "Mỗi sản phẩm được tạo ra để giúp phụ nữ cảm thấy tự tin và rạng rỡ theo cách riêng của họ.",
    },
    {
      icon: <FaRecycle className="w-10 h-10 text-[var(--text-accent)]" />,
      title: "Phát triển bền vững",
      description:
        "Chúng tôi hướng đến những giải pháp thân thiện với môi trường và đạo đức trong sản xuất.",
    },
    {
      icon: <FaAward className="w-10 h-10 text-[var(--text-accent)]" />,
      title: "Chất lượng quốc tế",
      description:
        "Đạt tiêu chuẩn quốc tế với quy trình kiểm định nghiêm ngặt và chất lượng kiểm soát cao.",
    },
  ];

  const teamMembers = [
    {
      name: "Nguyễn Thị Hương",
      position: "Chuyên gia Da liễu",
      description: "10 năm kinh nghiệm trong ngành mỹ phẩm",
      image: getRandomCosmeticImageUrl(150, 150),
    },
    {
      name: "Trần Mỹ Linh",
      position: "Trưởng phòng Nghiên cứu",
      description: "Chuyên gia hóa mỹ phẩm, từng công tác tại Pháp",
      image: getRandomCosmeticImageUrl(150, 150),
    },
    {
      name: "Phạm Thu Trang",
      position: "Giám đốc Sáng tạo",
      description: "Kỹ sư công nghệ mỹ phẩm cao cấp",
      image: getRandomCosmeticImageUrl(150, 150),
    },
    {
      name: "Lê Minh Anh",
      position: "Giám đốc Sản phẩm",
      description: "Chuyên gia phát triển sản phẩm từ thiên nhiên",
      image: getRandomCosmeticImageUrl(150, 150),
    },
  ];

  const testimonials = [
    {
      name: "Lan Anh",
      age: "26 tuổi",
      comment:
        "Tôi rất thích kem dưỡng ở đây, chất lượng tuyệt vời và đóng gói cực kỳ tinh tế!",
      rating: 5,
      image: getRandomCosmeticImageUrl(150, 150),
    },
    {
      name: "Minh Tuấn",
      age: "32 tuổi",
      comment:
        "Dịch vụ giao hàng nhanh, tư vấn nhiệt tình. Sẽ ủng hộ shop lâu dài!",
      rating: 5,
      image: getRandomCosmeticImageUrl(150, 150),
    },
    {
      name: "Hạnh Linh",
      age: "29 tuổi",
      comment:
        "Son lì của shop lên màu rất đẹp, lâu trôi và không khô môi. Thích lắm!",
      rating: 5,
      image: getRandomCosmeticImageUrl(150, 150),
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="font-poppins">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 rounded-2xl m-4 bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold font-playfair text-[var(--text-primary)]">
                Tôn vinh vẻ đẹp tự nhiên của bạn.
              </h1>
              <p className="text-lg text-[var(--text-secondary)]">
                Chúng tôi tin rằng vẻ đẹp thực sự đến từ sự tự tin và tình yêu
                bản thân. Mỗi sản phẩm của chúng tôi được tạo ra để giúp bạn
                khám phá và thể hiện vẻ đẹp nội tại.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-pastel-pink text-white px-6 py-3 rounded-2xl font-medium flex items-center justify-center hover:bg-pink-600 transition-colors">
                  Khám phá sản phẩm <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button className="px-6 py-3 rounded-2xl font-medium border border-pastel-pink text-pastel-pink dark:border-rose-400 dark:text-rose-400">
                  Câu chuyện của chúng tôi
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-md border border-[var(--text-accent)] dark:border-[var(--text-accent)]">
                  <img
                    src={getRandomCosmeticImageUrl(600, 600)}
                    alt="Beautiful woman with natural glowing skin"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[var(--text-accent)] text-white p-4 rounded-2xl shadow-lg dark:bg-[var(--text-accent)]">
                  <Sparkles className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[var(--text-primary)]">
                Câu chuyện của chúng tôi
              </h2>
              <div className="w-24 h-1 bg-[var(--text-accent)] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={getRandomCosmeticImageUrl(600, 600)}
                  alt="Brand founder"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[var(--card-bg)] shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-[var(--text-accent)]">
                    Năm thành lập
                  </h3>
                  <p className="text-lg text-[var(--text-secondary)]">
                    Bắt đầu từ năm 2015, chúng tôi đã phát triển một thương hiệu
                    mỹ phẩm cao cấp với tinh thần lấy chất lượng và sự an toàn
                    làm nền tảng.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[var(--card-bg)] shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-[var(--text-accent)]">
                    Tầm nhìn & sứ mệnh
                  </h3>
                  <p className="text-lg text-[var(--text-secondary)]">
                    Sứ mệnh của chúng tôi là mang đến cho phụ nữ những sản phẩm
                    làm đẹp tự nhiên, an toàn và hiệu quả, giúp họ tự tin thể
                    hiện vẻ đẹp riêng biệt của mình.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[var(--card-bg)] shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-[var(--text-accent)]">
                    Câu chuyện sáng lập
                  </h3>
                  <p className="text-lg text-[var(--text-secondary)]">
                    Chúng tôi bắt đầu với khát vọng giúp phụ nữ tự tin hơn mỗi
                    ngày, khám phá vẻ đẹp thật của chính mình thông qua các sản
                    phẩm chất lượng cao được tạo nên từ tình yêu và sự tinh tế.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[var(--text-primary)]">
                Giá trị cốt lõi
              </h2>
              <p className="text-lg mt-4 max-w-2xl mx-auto text-[var(--text-secondary)]">
                Những nguyên tắc nền tảng định hướng mọi hoạt động của chúng tôi
              </p>
              <div className="w-24 h-1 bg-[var(--text-accent)] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl text-center shadow-lg transition-transform duration-300 hover:scale-105 bg-white dark:bg-neutral-800"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-pastel-pink">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality & Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light-pink dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 dark:text-gray-100">
                Quy trình & cam kết chất lượng
              </h2>
              <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Mỗi sản phẩm trải qua quy trình kiểm định nghiêm ngặt để đảm bảo
                chất lượng cao nhất
              </p>
              <div className="w-24 h-1 bg-pastel-pink mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  step: 1,
                  title: "Chọn nguyên liệu",
                  desc: "Chỉ sử dụng nguyên liệu tự nhiên, có nguồn gốc rõ ràng",
                },
                {
                  step: 2,
                  title: "Kiểm định chất lượng",
                  desc: "Thử nghiệm an toàn và hiệu quả trên da",
                },
                {
                  step: 3,
                  title: "Đóng gói cẩn thận",
                  desc: "Bao bì thân thiện môi trường, bảo quản tốt",
                },
                {
                  step: 4,
                  title: "Phân phối an toàn",
                  desc: "Vận chuyển đảm bảo chất lượng sản phẩm",
                },
              ].map((process, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl text-center bg-white dark:bg-neutral-800 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-pastel-pink text-white dark:bg-rose-900 dark:text-rose-300">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {process.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {process.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="flex flex-wrap justify-center items-center gap-8">
                {[
                  { name: "FDA Approved", icon: <FaFlagUsa className="w-8 h-8 text-[var(--text-accent)]" /> },
                  { name: "ISO Certified", icon: <FaCheckCircle className="w-8 h-8 text-[var(--text-accent)]" /> },
                  { name: "Cruelty Free", icon: <FaFeather className="w-8 h-8 text-[var(--text-accent)]" /> },
                  { name: "Vegan", icon: <FaSeedling className="w-8 h-8 text-[var(--text-accent)]" /> },
                ].map((cert, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 rounded-2xl bg-white dark:bg-neutral-800 shadow-sm"
                  >
                    <div className="mb-2">{cert.icon}</div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {cert.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 dark:text-gray-100">
                Thành tựu & Đối tác
              </h2>
              <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Những thành quả và sự công nhận mà chúng tôi đã đạt được
              </p>
              <div className="w-24 h-1 bg-pastel-pink mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="p-8 rounded-2xl text-center bg-white dark:bg-neutral-800 shadow-sm">
                <div className="text-4xl font-bold text-pastel-pink mb-2">
                  10+
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Năm kinh nghiệm
                </p>
              </div>
              <div className="p-8 rounded-2xl text-center bg-white dark:bg-neutral-800 shadow-sm">
                <div className="text-4xl font-bold text-pastel-pink mb-2">
                  50K+
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Khách hàng hài lòng
                </p>
              </div>
              <div className="p-8 rounded-2xl text-center bg-white dark:bg-neutral-800 shadow-sm">
                <div className="text-4xl font-bold text-pastel-pink mb-2">
                  20
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Quốc gia phân phối
                </p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
                Đối tác & Tạp chí đã xuất hiện
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {[
                  "Elle",
                  "Vogue",
                  "Harper’s Bazaar",
                  "Cosmopolitan",
                  "Marie Claire",
                ].map((pub, index) => (
                  <div
                    key={index}
                    className="text-xl font-semibold py-4 px-6 rounded-2xl bg-white dark:bg-neutral-800 shadow-sm"
                  >
                    {pub}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-soft-pink dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 dark:text-gray-100">
                Đội ngũ chuyên gia
              </h2>
              <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Những chuyên gia hàng đầu trong ngành mỹ phẩm đang đồng hành
                cùng chúng tôi
              </p>
              <div className="w-24 h-1 bg-pastel-pink mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden shadow-lg text-center transition-transform duration-300 hover:scale-105 bg-white dark:bg-neutral-800"
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">
                      {member.name}
                    </h3>
                    <p className="text-pastel-pink font-medium mb-2">
                      {member.position}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 dark:text-gray-100">
                Khách hàng & Cộng đồng
              </h2>
              <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Những đánh giá chân thực từ khách hàng đã trải nghiệm sản phẩm
                của chúng tôi
              </p>
              <div className="w-24 h-1 bg-pastel-pink mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white dark:bg-neutral-800 shadow-sm"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.age}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="italic text-gray-600 dark:text-gray-300">
                    "{testimonial.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-beige to-pastel-pink/30 dark:from-rose-950 dark:to-purple-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-playfair italic max-w-3xl mx-auto text-gray-800 dark:text-gray-100">
                "Vẻ đẹp thực sự đến từ sự tự tin và tình yêu bản thân."
              </div>
              <div className="mt-12 rounded-2xl overflow-hidden shadow-xl max-w-2xl mx-auto">
                <img
                  src={getRandomCosmeticImageUrl(600, 600)}
                  alt="Philosophy concept"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-soft-pink dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 dark:text-gray-100">
                Trải nghiệm vẻ đẹp tự nhiên cùng chúng tôi.
              </h2>
              <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Hãy là người đầu tiên biết về các sản phẩm mới và ưu đãi đặc
                biệt
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
              <button className="bg-pastel-pink text-white px-8 py-4 rounded-2xl font-medium flex items-center justify-center hover:bg-pink-600 transition-colors">
                Khám phá sản phẩm <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-transparent text-pastel-pink px-8 py-4 rounded-2xl font-medium border-2 border-pastel-pink flex items-center justify-center hover:bg-pastel-pink hover:text-white transition-colors dark:border-rose-400 dark:text-rose-400 dark:hover:bg-rose-800">
                Đăng ký nhận ưu đãi <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>

            <div className="max-w-md mx-auto mb-12">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Nhập email của bạn..."
                  className="flex-1 px-4 py-3 rounded-l-2xl border bg-white border-gray-300 focus:outline-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-gray-100"
                />
                <button className="bg-pastel-pink text-white px-6 py-3 rounded-r-2xl font-medium">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="text-center">
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Theo dõi chúng tôi trên mạng xã hội
              </p>
              <div className="flex justify-center space-x-6">
                {["Facebook", "Instagram", "TikTok"].map((platform, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-lg px-4 py-2 rounded-full text-pastel-pink hover:bg-pastel-pink/20 transition-colors dark:text-rose-400 dark:hover:bg-neutral-800"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
