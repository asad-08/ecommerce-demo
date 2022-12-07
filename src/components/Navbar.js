import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cartContext";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const { cart } = useCartContext();

  const totalCartItems = cart.reduce((prev, cur) => {
    return prev + cur.count;
  }, 0);
  return (
    <nav>
      <ul className="hidden md:flex items-center gap-10 h-20">
        <li className="list-none">
          <NavLink
            to="/"
            className="text-slate-800 dark:text-slate-100 font-semibold text-base hover:text-teal-600"
          >
            Home
          </NavLink>
        </li>

        <li className="list-none">
          <NavLink
            to="/products"
            className="text-slate-800 dark:text-slate-100 font-semibold text-base hover:text-teal-600"
          >
            Products
          </NavLink>
        </li>

        <li className="list-none">
          <NavLink
            to="/about"
            className="text-slate-800 dark:text-slate-100 font-semibold text-base hover:text-teal-600"
          >
            About
          </NavLink>
        </li>

        <li className="list-none">
          <NavLink
            to="/contact"
            className="text-slate-800 dark:text-slate-100 font-semibold text-base hover:text-teal-600"
          >
            Contact
          </NavLink>
        </li>

        <li className="list-none">
          <NavLink
            to="/cart"
            className="text-slate-800 dark:text-slate-100 font-semibold text-base hover:text-teal-600 relative"
          >
            <i className="uil uil-shopping-cart text-2xl"></i>
            <span className="absolute -top-3.5 -right-3.5 rounded-full bg-teal-600 h-5 w-5 text-xs text-slate-100 flex items-center justify-center">
              {totalCartItems}
            </span>
          </NavLink>
        </li>
      </ul>
      <div className="flex md:hidden relative">
        {!openMobileMenu && (
          <i
            className="uil uil-bars"
            onClick={(e) => setOpenMobileMenu(true)}
          ></i>
        )}

        {openMobileMenu && (
          <div className="fixed top-0 right-0 left-0 bottom-0 bg-slate-200 p-6 z-[9999]">
            <i
              className="uil uil-times flex justify-end text-2xl "
              onClick={(e) => setOpenMobileMenu(false)}
            ></i>

            <ul className="flex flex-col items-start gap-6 h-auto">
              <li className="list-none">
                <NavLink
                  to="/"
                  onClick={(e) => setOpenMobileMenu(false)}
                  className="text-slate-800 dark:text-slate-100 font-semibold text-xl hover:text-teal-600"
                >
                  Home
                </NavLink>
              </li>

              <li className="list-none">
                <NavLink
                  to="/products"
                  onClick={(e) => setOpenMobileMenu(false)}
                  className="text-slate-800 dark:text-slate-100 font-semibold text-xl hover:text-teal-600"
                >
                  Products
                </NavLink>
              </li>

              <li className="list-none">
                <NavLink
                  to="/about"
                  onClick={(e) => setOpenMobileMenu(false)}
                  className="text-slate-800 dark:text-slate-100 font-semibold text-xl hover:text-teal-600"
                >
                  About
                </NavLink>
              </li>

              <li className="list-none">
                <NavLink
                  to="/contact"
                  onClick={(e) => setOpenMobileMenu(false)}
                  className="text-slate-800 dark:text-slate-100 font-semibold text-xl hover:text-teal-600"
                >
                  Contact
                </NavLink>
              </li>

              <li className="list-none">
                <NavLink
                  to="/cart"
                  onClick={(e) => setOpenMobileMenu(false)}
                  className="text-slate-800 dark:text-slate-100 font-semibold text-xl hover:text-teal-600 relative"
                >
                  <i className="uil uil-shopping-cart text-2xl"></i>
                  <span className="absolute -top-3.5 -right-3.5 rounded-full bg-teal-600 h-5 w-5 text-xs text-slate-100 flex items-center justify-center">
                    {totalCartItems}
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
