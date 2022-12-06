import React from "react";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products &&
        products.length > 0 &&
        products.map((item) => <Product item={item} />)}
    </div>
  );
};

export default GridView;
