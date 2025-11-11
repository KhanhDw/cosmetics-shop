import React from "react";
import Hero from "@/components/ui/homepage/Hero";
import FeaturedCategories from "@/components/ui/homepage/FeaturedCategories";
import FeaturedProducts from "@/components/feature/product/FeaturedProducts";
import BestSellers from "@/components/ui/homepage/BestSellers";
import SpecialOffers from "@/components/ui/homepage/SpecialOffers";
import Collections from "@/components/ui/homepage/Collections";
import AboutUs from "@/components/ui/homepage/AboutUs";
import BeautyTips from "@/components/ui/homepage/BeautyTips";
import Testimonials from "@/components/ui/homepage/Testimonials";
import Newsletter from "@/components/ui/homepage/Newsletter";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <main>
        <ScrollAnimation>
          <Hero />
        </ScrollAnimation>
        <ScrollAnimation animationClass="animate-fade-in-up-delay-100">
          <FeaturedCategories />
        </ScrollAnimation>
        <ScrollAnimation animationClass="animate-fade-in-up-delay-200">
          <FeaturedProducts />
        </ScrollAnimation>
        <ScrollAnimation animationClass="animate-fade-in-up-delay-300">
          <BestSellers />
        </ScrollAnimation>
        <ScrollAnimation animationClass="animate-fade-in-up-delay-400">
          <SpecialOffers />
        </ScrollAnimation>
        <ScrollAnimation animationClass="animate-fade-in-up-delay-500">
          <Collections />
        </ScrollAnimation>
        <ScrollAnimation animationClass="animate-fade-in-up-delay-600">
          <AboutUs />
        </ScrollAnimation>
        <ScrollAnimation animationClass="animate-fade-in-up-delay-700">
          <BeautyTips />
        </ScrollAnimation>
        <ScrollAnimation animationClass="animate-fade-in-up-delay-800">
          <Testimonials />
        </ScrollAnimation>
        <ScrollAnimation animationClass="animate-fade-in-up-delay-900">
          <Newsletter />
        </ScrollAnimation>
      </main>
    </div>
  );
};

export default Home;
