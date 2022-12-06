import React from "react";
import ProductFilter from "../components/product/ProductFilter";
import ProductList from "../components/product/ProductList";
import ProductSort from "../components/product/ProductSort";

const Products = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-5">
      <div className="flex flex-col md:flex-row items-start justify-start gap-4">
        <div className="px-3 flex-[1]">
          <ProductFilter />
        </div>
        <div className="px-3 flex-[4]">
          <div>
            <ProductSort />
          </div>
          <div className="mt-6">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
