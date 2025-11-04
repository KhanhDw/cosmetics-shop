import React from "react";
import ProductDetailPage from "@/components/feature/product/ProductDetailPage";

const ProductDetail: React.FC = () => {
  return (
    <div className="min-h-screen bg-[color:var(--bg-primary)] text-[color:var(--text-primary)]">
      <main>
        <ProductDetailPage />
      </main>
    </div>
  );
};

export default ProductDetail;
