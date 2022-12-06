import React from "react";
import { useFilterContext } from "../../context/filterContext";

const ProductSort = () => {
  const { isGridView, filterProducts, setGridView, sortValue, handleSort } =
    useFilterContext();

  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <i
          onClick={(e) => setGridView(true)}
          className={`uil uil-apps hover:cursor-pointer  px-2 py-1 ${
            isGridView
              ? "bg-teal-800 text-slate-100"
              : " bg-teal-100 text-teal-800"
          }`}
        ></i>
        <i
          onClick={(e) => setGridView(false)}
          className={`uil uil-list-ul hover:cursor-pointer px-2 py-1 ${
            isGridView
              ? "bg-teal-100 text-teal-800"
              : " bg-teal-800 text-slate-100"
          }`}
        ></i>
      </div>
      <p className="text-sm font-semibold">
        {filterProducts && filterProducts.length} total products
      </p>
      <div>
        <select
          name="sort"
          id="sort"
          onChange={(e) => handleSort(e)}
          className="border border-teal-600"
        >
          <option value="#"> --Choose one-- </option>
          <option value="asc">Price(a-z)</option>
          <option value="desc">Price(z-a)</option>
          <option value="highest">Price(high to low)</option>
          <option value="lowest">Price(low to high)</option>
        </select>
      </div>
    </div>
  );
};

export default ProductSort;
