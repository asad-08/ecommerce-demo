import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="px-4 md:px-20 bg-slate-200 flex items-center justify-between relative  h-20">
      <NavLink to="/" className="list-none">
        <h2 className="text-slate-800 dark:text-slate-100 text-xl md:text-4xl font-semibold">
          Site Logo
        </h2>
      </NavLink>
      <Navbar />
    </div>
  );
};

export default Header;
