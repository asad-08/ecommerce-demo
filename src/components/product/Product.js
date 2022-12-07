import React from "react";
import { NavLink } from "react-router-dom";
import { NumericFormat } from "react-number-format";

const Product = ({ item }) => {
  const {
    id,
    title,
    price,
    discountPercentage,
    rating,
    brand,
    category,
    thumbnail,
  } = item;
  return (
    <NavLink to={`/product/${id}`} className="w-full">
      <div className="w-sm group bg-white border border-teal-100 shadow-lg shadow-teal-300/20 dark:border-gray-700 dark:bg-gray-800 hover:cursor-pointer relative">
        {discountPercentage > 10 && (
          <div className="absolute rotate-[270deg] left-0 top-[20px] bg-teal-100 text-teal-800 px-2 py-1">
            Sale
          </div>
        )}
        <img
          src={thumbnail}
          alt={title}
          className="h-[250px] w-full p-2 group-hover:opacity-25"
        />
        <div className="p-5 flex items-center justify-between gap-6 border-t group-hover:opacity-25">
          <label className="text-sm font-semibold">{title}</label>
          <label className="flex flex-col">
            <span className="text-base font-semibold text-slate-500">
              <NumericFormat
                displayType="text"
                value={price}
                prefix="$"
                thousandsGroupStyle="lakh"
                thousandSeparator=","
              />
            </span>
            <span className="text-sm line-through font-semibold text-slate-500">
              <NumericFormat
                displayType="text"
                value={discountPercentage}
                suffix="%"
                thousandsGroupStyle="lakh"
                thousandSeparator=","
                fixedDecimalScale={2}
              />
            </span>
          </label>
        </div>

        <div className="absolute opacity-0 group-hover:opacity-100 top-0 left-0 bottom-0 right-0 flex items-center justify-center">
          <div className="flex items-center gap-4">
            <button className="text-sm font-semibold uppercase bg-teal-600 hover:bg-teal-800 px-5 py-2 text-slate-100">
              <i class="uil uil-shopping-cart text-2xl"></i>
            </button>
            <button className="text-sm font-semibold uppercase bg-teal-600 hover:bg-teal-800 px-5 py-2 text-slate-100">
              <i class="uil uil-eye text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
