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
import { useTranslation } from "react-i18next";
import { getRandomCosmeticImageUrl } from "@/utils/imageService";

const About: React.FC = () => {
  const { t } = useTranslation();
  
  // Sample data for the sections
  const values = [
    {
      icon: <FaLeaf className="w-10 h-10 text-[var(--text-accent)]" />,
      title: t("about.values.natural.title"),
      description: t("about.values.natural.description"),
    },
    {
      icon: <FaHeart className="w-10 h-10 text-[var(--text-accent)]" />,
      title: t("about.values.celebrate_women.title"),
      description: t("about.values.celebrate_women.description"),
    },
    {
      icon: <FaRecycle className="w-10 h-10 text-[var(--text-accent)]" />,
      title: t("about.values.sustainability.title"),
      description: t("about.values.sustainability.description"),
    },
    {
      icon: <FaAward className="w-10 h-10 text-[var(--text-accent)]" />,
      title: t("about.values.quality.title"),
      description: t("about.values.quality.description"),
    },
  ];

  const teamMembers = [
    {
      name: t("about.team.member1.name"),
      position: t("about.team.member1.position"),
      description: t("about.team.member1.description"),
      image: getRandomCosmeticImageUrl(150, 150),
    },
    {
      name: t("about.team.member2.name"),
      position: t("about.team.member2.position"),
      description: t("about.team.member2.description"),
      image: getRandomCosmeticImageUrl(150, 150),
    },
    {
      name: t("about.team.member3.name"),
      position: t("about.team.member3.position"),
      description: t("about.team.member3.description"),
      image: getRandomCosmeticImageUrl(150, 150),
    },
    {
      name: t("about.team.member4.name"),
      position: t("about.team.member4.position"),
      description: t("about.team.member4.description"),
      image: getRandomCosmeticImageUrl(150, 150),
    },
  ];

  const testimonials = [
    {
      name: t("about.testimonials.customer1.name"),
      age: t("about.testimonials.customer1.age"),
      comment: t("about.testimonials.customer1.comment"),
      rating: 5,
      image: getRandomCosmeticImageUrl(150, 150),
    },
    {
      name: t("about.testimonials.customer2.name"),
      age: t("about.testimonials.customer2.age"),
      comment: t("about.testimonials.customer2.comment"),
      rating: 5,
      image: getRandomCosmeticImageUrl(150, 150),
    },
    {
      name: t("about.testimonials.customer3.name"),
      age: t("about.testimonials.customer3.age"),
      comment: t("about.testimonials.customer3.comment"),
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
                {t("about.hero.title")}
              </h1>
              <p className="text-lg text-[var(--text-secondary)]">
                {t("about.hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-pastel-pink text-white px-6 py-3 rounded-2xl font-medium flex items-center justify-center hover:bg-pink-600 transition-colors">
                  {t("about.hero.explore_products")} <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button className="px-6 py-3 rounded-2xl font-medium border border-pastel-pink text-pastel-pink dark:border-rose-400 dark:text-rose-400">
                  {t("about.hero.our_story")}
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
                {t("about.brand_story.title")}
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
                    {t("about.brand_story.founded")}
                  </h3>
                  <p className="text-lg text-[var(--text-secondary)]">
                    {t("about.brand_story.founded_desc")}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[var(--card-bg)] shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-[var(--text-accent)]">
                    {t("about.brand_story.vision_mission")}
                  </h3>
                  <p className="text-lg text-[var(--text-secondary)]">
                    {t("about.brand_story.mission_desc")}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[var(--card-bg)] shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-[var(--text-accent)]">
                    {t("about.brand_story.founding_story")}
                  </h3>
                  <p className="text-lg text-[var(--text-secondary)]">
                    {t("about.brand_story.founding_desc")}
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
                {t("about.core_values.title")}
              </h2>
              <p className="text-lg mt-4 max-w-2xl mx-auto text-[var(--text-secondary)]">
                {t("about.core_values.description")}
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
                {t("about.quality.title")}
              </h2>
              <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                {t("about.quality.description")}
              </p>
              <div className="w-24 h-1 bg-pastel-pink mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  step: 1,
                  title: t("about.quality.steps.1.title"),
                  desc: t("about.quality.steps.1.description"),
                },
                {
                  step: 2,
                  title: t("about.quality.steps.2.title"),
                  desc: t("about.quality.steps.2.description"),
                },
                {
                  step: 3,
                  title: t("about.quality.steps.3.title"),
                  desc: t("about.quality.steps.3.description"),
                },
                {
                  step: 4,
                  title: t("about.quality.steps.4.title"),
                  desc: t("about.quality.steps.4.description"),
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
                {t("about.achievements.title")}
              </h2>
              <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                {t("about.achievements.description")}
              </p>
              <div className="w-24 h-1 bg-pastel-pink mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="p-8 rounded-2xl text-center bg-white dark:bg-neutral-800 shadow-sm">
                <div className="text-4xl font-bold text-pastel-pink mb-2">
                  {t("about.achievements.experience_years")}
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {t("about.achievements.experience_desc")}
                </p>
              </div>
              <div className="p-8 rounded-2xl text-center bg-white dark:bg-neutral-800 shadow-sm">
                <div className="text-4xl font-bold text-pastel-pink mb-2">
                  {t("about.achievements.satisfied_customers")}
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {t("about.achievements.satisfied_desc")}
                </p>
              </div>
              <div className="p-8 rounded-2xl text-center bg-white dark:bg-neutral-800 shadow-sm">
                <div className="text-4xl font-bold text-pastel-pink mb-2">
                  {t("about.achievements.distribution_countries")}
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {t("about.achievements.distribution_desc")}
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
                {t("about.team.title")}
              </h2>
              <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                {t("about.team.description")}
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
                {t("about.testimonials.title")}
              </h2>
              <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                {t("about.testimonials.description")}
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
                "{t("about.philosophy.quote")}"
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
                {t("about.contact.title")}
              </h2>
              <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                {t("about.contact.description")}
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
              <button className="bg-pastel-pink text-white px-8 py-4 rounded-2xl font-medium flex items-center justify-center hover:bg-pink-600 transition-colors">
                {t("about.contact.explore_products")} <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-transparent text-pastel-pink px-8 py-4 rounded-2xl font-medium border-2 border-pastel-pink flex items-center justify-center hover:bg-pastel-pink hover:text-white transition-colors dark:border-rose-400 dark:text-rose-400 dark:hover:bg-rose-800">
                {t("about.contact.subscribe_promotions")} <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>

            <div className="max-w-md mx-auto mb-12">
              <div className="flex">
                <input
                  type="email"
                  placeholder={t("about.contact.email_placeholder")}
                  className="flex-1 px-4 py-3 rounded-l-2xl border bg-white border-gray-300 focus:outline-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-gray-100"
                />
                <button className="bg-pastel-pink text-white px-6 py-3 rounded-r-2xl font-medium">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="text-center">
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                {t("about.contact.follow_us")}
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
