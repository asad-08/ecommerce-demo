import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

const AddToCart = ({ id, price, product, clickedImage }) => {
  const [color, setColor] = useState("teal");
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([{ count: 0, amount: 0, productId: 0 }]);

  const { addToCart } = useCartContext();
  const handleAdd = () => {
    let obj = {
      count: count + 1,
      amount: (count + 1) * product.price ?? 0,
      productId: product.id ?? 0,
    };
    setCount((prev) => prev + 1);
    setCart(obj);
  };
  const handleDeduction = () => {
    let obj = {
      count: count - 1,
      amount: (count - 1) * product.price ?? 0,
      productId: product.id ?? 0,
    };
    setCount((prev) => (prev - 1 < 0 ? 0 : prev - 1));
    setCart(obj);
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <span>Colors: </span>
        {["teal", "yellow", "tomato", "black", "white"].map((item) => (
          <div
            style={{ backgroundColor: item }}
            className="w-[20px] h-[20px] rounded-full hover:cursor-pointer border flex items-center justify-center"
            onClick={(e) => setColor(item)}
          >
            {item === color ? (
              <i
                class={`uil uil-check ${
                  item == "white" || item == "yellow"
                    ? "text-black"
                    : "text-white"
                }`}
              ></i>
            ) : null}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-start mt-4">
        <label
          onClick={(e) => handleDeduction()}
          className="border border-teal-700 text-xl font-semibold px-3 py-1 hover:cursor-pointer rounded-tl-full rounded-bl-full"
        >
          -
        </label>
        <label className="border border-teal-700 text-xl font-semibold px-3 py-1 w-[50px] text-center">
          {count}
        </label>
        <label
          onClick={(e) => handleAdd()}
          className="border border-teal-700 text-xl font-semibold px-3 py-1  hover:cursor-pointer rounded-tr-full rounded-br-full"
        >
          +
        </label>
      </div>
      <NavLink
        to="/cart"
        onClick={() =>
          addToCart(
            product.id,
            color,
            product.price,
            product,
            clickedImage,
            cart.count,
            cart.amount
          )
        }
      >
        <button
          disabled={count <= 0}
          className={`mt-6 text-sm font-semibold uppercase ${
            count <= 0
              ? "bg-slate-200 text-slate-400"
              : "bg-teal-600 hover:bg-teal-800"
          }  px-5 py-2 text-slate-100`}
        >
          add to cart
        </button>
      </NavLink>
    </div>
  );
};

export default AddToCart;
