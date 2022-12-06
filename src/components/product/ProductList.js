import React from "react";
import { useFilterContext } from "../../context/filterContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filterProducts, setGridView, isGridView } = useFilterContext();

  if (isGridView) {
    return (
      <div>
        <GridView products={filterProducts} />
      </div>
    );
  } else
    return (
      <div>
        <ListView products={filterProducts} />
      </div>
    );
};

export default ProductList;
