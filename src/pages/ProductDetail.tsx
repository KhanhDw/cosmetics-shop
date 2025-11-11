import React from "react";
import ProductDetailPage from "@/components/feature/product/ProductDetailPage";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const ProductDetail: React.FC = () => {
  return (
    <div className="min-h-screen bg-[color:var(--bg-primary)] text-[color:var(--text-primary)]">
      <main>
        <ScrollAnimation>
          <ProductDetailPage />
        </ScrollAnimation>
      </main>
    </div>
  );
};

export default ProductDetail;
