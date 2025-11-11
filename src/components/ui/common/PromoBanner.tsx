import React from "react";
import { Sparkles } from "lucide-react";

const PromoBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[color:var(--text-accent)] to-[color:var(--text-secondary)] rounded-2xl p-8 text-white mb-8">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wide">
              Khuyến Mãi Đặc Biệt
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Giảm 30% Cho Bộ Dưỡng Da Mùa Thu
          </h3>
          <p className="text-white/90 mb-4">
            Khám phá bộ sưu tập dưỡng da mùa thu với ưu đãi lên đến 30%. Giữ cho
            làn da của bạn mềm mại và khỏe mạnh suốt mùa thu.
          </p>
          <button className="bg-white !text-[var(--text-primary)] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Khám Phá Ngay
          </button>
        </div>
        <div className="hidden md:block ml-8">
          <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
            <Sparkles className="w-16 h-16 text-white/80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
