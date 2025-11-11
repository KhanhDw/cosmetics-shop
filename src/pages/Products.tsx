import React from "react";
import ProductListContainer from "@/components/feature/product/ProductListContainer";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const Products: React.FC = () => {
  return (
    <div className="min-h-screen">
      <main>
        <ScrollAnimation>
          <ProductListContainer />
        </ScrollAnimation>
      </main>
    </div>
  );
};

export default Products;
