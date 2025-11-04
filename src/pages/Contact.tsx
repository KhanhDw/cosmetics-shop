import React, { useState } from "react";
import { toast } from "react-toastify";
import { FloatingChatButton } from "@/components/ui/common/FloatingChatButton";
import { getRandomCosmeticImageUrl } from "@/utils/imageService";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Tên không được để trống";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email không được để trống";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Nội dung không được để trống";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // In a real app, you would send the data to your backend here
      toast.success(
        "Cảm ơn bạn đã gửi liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất."
      );
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-soft-pink to-cosmetic-white dark:from-gray-900 dark:to-gray-800">
      <main className="py-8">
        {/* Contact Info Section */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-12 text-center animate-fade-in">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl text-accent dark:text-accent">
                Liên hệ với chúng tôi
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                Cửa hàng mỹ phẩm BeautyGlow - Nơi sắc đẹp được tôn vinh
              </p>
            </div>

            <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
              <div className="space-y-6 animate-fade-in-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-full bg-accent/10 dark:bg-accent/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-accent dark:text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Địa chỉ
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Nguyễn Trãi, Q.1, TP.HCM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-full bg-accent/10 dark:bg-accent/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-accent dark:text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Điện thoại
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">0901 234 567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-full bg-accent/10 dark:bg-accent/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-accent dark:text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Email
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">support@beautyglow.vn</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-full bg-accent/10 dark:bg-accent/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-accent dark:text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Thời gian làm việc
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      8:30 – 21:00 (Thứ 2 – Chủ nhật)
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Theo dõi chúng tôi:
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="transition-colors text-accent hover:text-accent/80 dark:text-accent dark:hover:text-accent/80"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="w-6 h-6"
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
                      className="transition-colors text-accent hover:text-accent/80 dark:text-accent dark:hover:text-accent/80"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        className="w-6 h-6"
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
                      className="transition-colors text-accent hover:text-accent/80 dark:text-accent dark:hover:text-accent/80"
                    >
                      <span className="sr-only">TikTok</span>
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex justify-center delay-100 animate-fade-in-up">
                <div className="w-full max-w-md p-6 shadow-lg bg-gradient-to-br from-soft-pink to-light-pink dark:from-gray-700 dark:to-gray-600 rounded-xl">
                  <img
                    src={getRandomCosmeticImageUrl(800, 600)}
                    alt="Beauty products"
                    className="object-cover w-full h-64 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map Section */}
        <section className="py-12 bg-soft-pink dark:bg-gray-700">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-8 text-center animate-fade-in">
              <h2 className="text-2xl font-bold text-accent dark:text-accent">
                Tìm đường đến cửa hàng của chúng tôi
              </h2>
            </div>
            <div className="overflow-hidden bg-white dark:bg-gray-600 shadow-md rounded-xl animate-fade-in-up">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.479874057958!2d106.6825213748048!3d10.771906858991717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2f1a0f3f1d%3A0x1e4d5c3c2d5e5f5!2zMTIzIE5ndXnhu4VuIFRy4buHLCBRdeG6rW4gMSwgSOG7k25oIFBoxrDhu5tjLCBI4buTIENow60gTWluaCA3MDAwMDA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-12 text-center animate-fade-in">
              <h2 className="text-3xl font-bold text-accent dark:text-accent">
                Gửi tin nhắn cho chúng tôi 💌
              </h2>
              <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300">
                Hãy để lại thông tin và chúng tôi sẽ liên hệ với bạn trong thời
                gian sớm nhất
              </p>
            </div>

            <div className="max-w-3xl p-8 mx-auto shadow-lg bg-gradient-to-br from-soft-pink to-light-pink dark:from-gray-700 dark:to-gray-600 rounded-xl animate-fade-in-up">
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent dark:bg-gray-600 dark:border-gray-500 dark:text-white ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Nhập họ và tên của bạn"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email hoặc Số điện thoại
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent dark:bg-gray-600 dark:border-gray-500 dark:text-white ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Nhập email hoặc số điện thoại"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Nội dung tin nhắn
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent dark:bg-gray-600 dark:border-gray-500 dark:text-white ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Chia sẻ nhu cầu hoặc câu hỏi của bạn với chúng tôi"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-3 font-medium text-white transition duration-300 transform rounded-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 hover:scale-105"
                  >
                    Gửi liên hệ
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Branches Section */}
        <section className="py-12 bg-soft-pink dark:bg-gray-700">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-12 text-center animate-fade-in">
              <h2 className="text-3xl font-bold text-accent dark:text-accent">
                Chi nhánh / Đại lý
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Khám phá các chi nhánh của BeautyGlow trên toàn quốc
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 transition-shadow bg-white dark:bg-gray-600 shadow-md rounded-xl hover:shadow-lg animate-fade-in-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 rounded-full bg-accent/10 dark:bg-accent/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-accent dark:text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      TP.HCM
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">123 Nguyễn Trãi, Q.1</p>
                    <p className="mt-2 font-medium text-accent dark:text-accent">
                      0901 234 567
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 transition-shadow delay-100 bg-white dark:bg-gray-600 shadow-md rounded-xl hover:shadow-lg animate-fade-in-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 rounded-full bg-accent/10 dark:bg-accent/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-accent dark:text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Hà Nội
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">45 Láng Hạ, Đống Đa</p>
                    <p className="mt-2 font-medium text-accent dark:text-accent">
                      0902 345 678
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 transition-shadow delay-200 bg-white dark:bg-gray-600 shadow-md rounded-xl hover:shadow-lg animate-fade-in-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 rounded-full bg-accent/10 dark:bg-accent/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-accent dark:text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Đà Nẵng
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      244 Hoàng Diệu, Hải Châu
                    </p>
                    <p className="mt-2 font-medium text-accent dark:text-accent">
                      0903 456 789
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Chat Support */}
      <FloatingChatButton
        href="https://m.me/yourpage"
        title="Chat ngay với tư vấn viên"
        className="/* tùy chỉnh nếu cần */"
      />
    </div>
  );
};

export default Contact;
