import React from "react";
import { useProductContext } from "../context/productContext";
import Product from "./product/Product";

const FeaturedProducts = () => {
  const { isLoading, featuredProducts } = useProductContext();
  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <div className="mb-12 bg-slate-200 dark:bg-slate-800">
      <div className="max-w-[1200px] px-5 mx-auto flex flex-col items-start justify-center py-12">
        <label className="text-sm">Check Now!!!</label>
        <label className="text-xl font-semibold">Featured Products</label>
        <div className="mt-4 w-full flex items-center flex-col md:flex-row justify-between gap-4">
          {featuredProducts.map((item) => (
            <Product key={Math.random} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
