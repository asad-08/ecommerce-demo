import React from "react";

const ServiceCard = ({ item }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center bg-slate-200 rounded-2xl py-8 px-5">
      <i
        className={`${item.icon} rounded-full text-teal-800 bg-teal-300 text-3xl h-[50px] w-[50px] flex items-center justify-center`}
      ></i>
      <label className="font-semibold">{item.item}</label>
    </div>
  );
};

export default ServiceCard;
