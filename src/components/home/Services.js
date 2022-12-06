import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const serviceItems = [
    { item: "Super Fast Delivery", icon: "uil uil-parcel" },
    { item: "Free Shipping", icon: "uil uil-truck" },
    { item: "Money Back Guaranteed", icon: "uil uil-money-withdrawal" },
    { item: "Secure Payment", icon: "uil uil-master-card" },
  ];
  return (
    <div className="max-w-[1200px] mx-auto w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5 px-5">
      {serviceItems.map((item) => (
        <ServiceCard key={Math.random} item={item} />
      ))}
    </div>
  );
};

export default Services;
