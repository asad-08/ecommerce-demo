import React from "react";
import { NumericFormat } from "react-number-format";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cartContext";

const Cart = () => {
  const { cart, addItem, removeItem, removeFromCart, clearCart, shippingFee } =
    useCartContext();

  const subTotal = cart.reduce((prev, cur) => {
    return prev + cur.amount;
  }, 0);

  return (
    <div className="my-24">
      <table className="w-[80%] mx-auto">
        <tr>
          <th className="border-b border-b-teal-600 text-sm w-[20%]">IMAGE</th>
          <th className="border-b border-b-teal-600 text-sm">ITEM</th>
          <th className="border-b border-b-teal-600 text-sm">PRICE</th>
          <th className="border-b border-b-teal-600 text-sm">QTY</th>
          <th className="border-b border-b-teal-600 text-sm">SUBTOTAL</th>
          <th className="border-b border-b-teal-600 text-sm">ACTION</th>
        </tr>
        {cart && cart.length > 0 ? (
          cart.map((x) => (
            <tr>
              <td className="text-sm px-2 py-1 text-center w-[20%]">
                <img src={x.image} className="w-[100px] h-[60px]" />
              </td>
              <td className="text-sm px-2 py-1 text-center w-[30%]">
                <label className="w-full">{x.title}</label>
              </td>
              <td className="text-sm px-2 py-1 text-center w-[15%]">
                <NumericFormat
                  displayType="text"
                  value={x.price}
                  prefix="$"
                  thousandsGroupStyle="lakh"
                  thousandSeparator=","
                />
              </td>
              <td className="text-sm px-2 py-1 text-center w-[15%]">
                <div className="flex items-center justify-center gap-2">
                  <label
                    className="hover:cursor-pointer"
                    onClick={(e) => removeItem(x.id, x.count)}
                  >
                    -
                  </label>
                  <NumericFormat
                    displayType="text"
                    value={x.count}
                    thousandSeparator=","
                  />
                  <label
                    className="hover:cursor-pointer"
                    onClick={(e) => addItem(x.id, x.count)}
                  >
                    +
                  </label>
                </div>
              </td>
              <td className="text-sm px-2 py-1 text-center w-[20%] ">
                <NumericFormat
                  displayType="text"
                  value={x.amount}
                  prefix="$"
                  thousandsGroupStyle="lakh"
                  thousandSeparator=","
                />
              </td>
              <td className="text-sm px-2 py-1 text-center w-[10%]">
                <i
                  class="uil uil-trash-alt text-rose-800 hover:cursor-pointer"
                  onClick={(e) => removeFromCart(x.id)}
                ></i>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6" className="py-6 font-semibold text-center">
              No Cart Item Found
            </td>
          </tr>
        )}
      </table>
      <hr className="border-teal-700 w-[80%] mx-auto" />
      <div className="w-[80%] mx-auto my-12 flex items-center justify-between">
        <NavLink to="/products">
          <button className="text-sm font-semibold uppercase bg-teal-600 hover:bg-teal-800 px-5 py-2 text-slate-100">
            continue shopping
          </button>
        </NavLink>
        {cart && cart.length > 0 ? (
          <button
            className="text-sm font-semibold uppercase bg-rose-600 hover:bg-rose-800 px-5 py-2 text-slate-100"
            onClick={(e) => clearCart(e)}
          >
            clear cart
          </button>
        ) : null}
      </div>
      <div className="w-[80%] mx-auto flex items-center justify-end">
        <div className="w-full md:w-[500px] bg-teal-100 text-teal-800 p-4">
          <div className=" flex items-center justify-between my-3">
            <label>Sub Total: </label>
            <NumericFormat
              displayType="text"
              value={subTotal}
              prefix="$"
              thousandsGroupStyle="lakh"
              thousandSeparator=","
            />
          </div>
          <div className=" flex items-center justify-between my-3">
            <label>Shipping Fee: </label>
            <NumericFormat
              displayType="text"
              value={shippingFee}
              prefix="$"
              thousandsGroupStyle="lakh"
              thousandSeparator=","
            />
          </div>
          <hr className="border-teal-700" />
          <div className=" flex items-center justify-between my-3">
            <label>Grand Total: </label>
            <NumericFormat
              displayType="text"
              value={subTotal + shippingFee}
              prefix="$"
              thousandsGroupStyle="lakh"
              thousandSeparator=","
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
