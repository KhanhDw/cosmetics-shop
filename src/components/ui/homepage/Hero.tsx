import { useTranslation } from 'react-i18next';
import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { getHeroImageUrl, getResponsiveImageAttributes } from "@/utils/imageService";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 overflow-hidden min-h-[50vh]">
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-cosmetic-pink-400/10 to-cosmetic-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-cosmetic-rose-400/10 to-cosmetic-pink-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-cosmetic-purple-400/10 to-cosmetic-indigo-400/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-cosmetic-pink-200 dark:border-cosmetic-pink-900/50 shadow-sm">
              <TrendingUp className="w-4 h-4 text-cosmetic-pink-500 mr-2" />
              <span className="text-sm font-semibold text-cosmetic-pink-600 dark:text-cosmetic-pink-400">
                {t('common.trending')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              {t('hero.title_part1')}
              <span className="block mt-2 bg-gradient-to-r from-cosmetic-pink-500 to-cosmetic-purple-600 bg-clip-text text-transparent">
                {t('hero.title_part2')}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-gradient-to-r from-cosmetic-pink-500 to-cosmetic-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2 shadow-cosmetic-lg shadow-cosmetic-pink-500/20">
                <span>{t('hero.shop_collection')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-full font-semibold text-gray-800 dark:text-gray-200 hover:shadow-md transition-all duration-300 hover:bg-white dark:hover:bg-gray-700/80">
                {t('hero.view_ingredients')}
              </button>
            </div>

            {/* Social proof */}
            <div className="pt-6 flex items-center space-x-8">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-cosmetic-pink-400 to-cosmetic-purple-400 border-2 border-white dark:border-gray-800"
                    ></div>
                  ))}
                </div>
                <div className="ml-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {t('hero.ratings_text', { rating: '4.9', count: 2.5 })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative">
            <div className="relative bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-2 border border-gray-200 dark:border-gray-700 shadow-xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-cosmetic-pink-400 to-cosmetic-purple-400 rounded-2xl blur opacity-20 dark:opacity-30"></div>
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={getHeroImageUrl(700, 600)}
                  alt={t('hero.image_alt')}
                  className="w-full h-auto object-cover"
                  loading="eager"
                  // For responsive images, you can uncomment and use the following:
                  // {...getResponsiveImageAttributes(700, 600, t('hero.image_alt') || '')}
                />
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cosmetic-pink-500 to-cosmetic-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              {t('common.new')}
            </div>

            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <div className="bg-cosmetic-pink-100 dark:bg-cosmetic-pink-900/50 p-2 rounded-lg">
                  <Star className="w-5 h-5 text-cosmetic-pink-500 dark:text-cosmetic-pink-400" />
                </div>
                <div className="ml-2">
                  <div className="text-sm font-bold text-gray-800 dark:text-white">
                    {t('hero.natural_label')}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {t('common.ingredients', { defaultValue: 'Ingredients' })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
