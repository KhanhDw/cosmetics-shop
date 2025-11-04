import React from "react";
import ProductListContainer from "@/components/feature/product/ProductListContainer";

const Products: React.FC = () => {
  return (
    <div className="min-h-screen">
      <main>
        <ProductListContainer />
      </main>
    </div>
  );
};

export default Products;
