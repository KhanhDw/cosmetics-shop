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

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <FeaturedCategories />
        <FeaturedProducts />
        <BestSellers />
        <SpecialOffers />
        <Collections />
        <AboutUs />
        <BeautyTips />
        <Testimonials />
        <Newsletter />
      </main>
    </div>
  );
};

export default Home;
