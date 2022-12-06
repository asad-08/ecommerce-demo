import React from "react";
import { NumericFormat } from "react-number-format";
import { NavLink } from "react-router-dom";
import Product from "./Product";

const ListView = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {products &&
        products.length > 0 &&
        products.map((item) => (
          <div className="flex items-center  gap-4 border border-teal-400 py-5">
            <div className="relative flex-1">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-[160px] w-full pl-8 group-hover:opacity-25"
              />
            </div>
            <div className="px-2 flex-[2]">
              <h3 className="text-sm font-semibold mb-3">{item.title}</h3>
              <label className="text-sm font-semibold text-slate-500 mb-3">
                <NumericFormat
                  displayType="text"
                  value={item.price}
                  prefix="$"
                  thousandsGroupStyle="lakh"
                  thousandSeparator=","
                />
              </label>

              <p className=" mb-3">{item.description.slice(0, 100)}...</p>
              <NavLink to={`/product/${item.id}`}>
                <button className="text-sm font-semibold uppercase bg-teal-600 hover:bg-teal-800 px-5 py-2 text-slate-100">
                  View Details
                </button>
              </NavLink>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ListView;
