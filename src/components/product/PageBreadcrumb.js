import React from "react";
import { NavLink } from "react-router-dom";

const PageBreadcrumb = ({ title }) => {
  return (
    <div className="bg-teal-50 p-4 mb-12">
      <NavLink to="/" className="text-xl font-semibold text-teal-600">
        Home
      </NavLink>
      <span className="text-sm font-semibold"> / {title}</span>
    </div>
  );
};

export default PageBreadcrumb;
