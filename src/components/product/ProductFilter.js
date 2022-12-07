import React from "react";
import { NumericFormat } from "react-number-format";
import { useFilterContext } from "../../context/filterContext";
import { useProductContext } from "../../context/productContext";

const ProductFilter = () => {
  const {
    filters: { searchText, category, brand, price },
    handleFilterSearch,
    categoryList,
    clearFilter,
  } = useFilterContext();
  const { allBrands } = useProductContext();

  return (
    <div className="flex flex-col gap-4 w-full px-5">
      <div className="w-full">
        <input
          className="border border-teal-700 w-full px-3 py-2 text-sm outline-none"
          placeholder="Search..."
          name="searchText"
          value={searchText}
          type="text"
          onChange={(e) => handleFilterSearch(e)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="category" className="text-sm font-semibold">
          Category
        </label>
        {categoryList &&
          categoryList.length > 0 &&
          categoryList.slice(0, 7).map((x) => (
            <button
              type="button"
              value={x}
              name="category"
              className={`text-sm text-left ${
                x === category ? "underline" : ""
              }`}
              onClick={(e) => handleFilterSearch(e)}
            >
              {x}
            </button>
          ))}
        <button
          type="button"
          name="category"
          className={`text-sm text-left text-teal-800 font-semibold flex items-center justify-center leading-3 bg-teal-50`}
        >
          <label>Load More</label>
          <i class="uil uil-angle-double-down text-base"></i>
        </button>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="brand" className="text-sm font-semibold">
          Brand
        </label>
        {allBrands &&
          allBrands.length > 0 &&
          allBrands.slice(0, 7).map((x) => (
            <button
              type="button"
              value={x}
              name="brand"
              className={`text-sm text-left ${x === brand ? "underline" : ""}`}
              onClick={(e) => handleFilterSearch(e)}
            >
              {x}
            </button>
          ))}
        <button
          type="button"
          name="brand"
          className={`text-sm text-left text-teal-800 font-semibold flex items-center justify-center leading-3 bg-teal-50`}
        >
          <label>Load More</label>
          <i class="uil uil-angle-double-down text-base"></i>
        </button>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="price" className="text-sm font-semibold">
          Price
        </label>
        <label>
          <NumericFormat
            displayType="text"
            value={price}
            prefix="$"
            thousandsGroupStyle="lakh"
            thousandSeparator=","
          />
        </label>
        <input
          type="range"
          name="price"
          className="range"
          min={0}
          max={1000}
          value={price}
          onChange={(e) => handleFilterSearch(e)}
        />
      </div>
      <button
        className="text-sm mt-6 font-semibold uppercase bg-rose-600 hover:bg-rose-800 px-5 py-2 text-slate-100"
        onClick={(e) => clearFilter(e)}
      >
        clear filter
      </button>
    </div>
  );
};

export default ProductFilter;
