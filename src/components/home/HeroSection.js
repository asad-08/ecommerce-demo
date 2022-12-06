import React from "react";
import Banner from "./../../assets/images/home/banner.jpg";

const HeroSection = ({ title, name, text }) => {
  return (
    <div className="max-w-[1200px] md:max-h-[500px] flex flex-col md:flex-row items-center justify-between mx-auto py-12 md:py-24 px-5">
      <div className="flex-1 flex flex-col items-start gap-3">
        <p className="uppercase">{title}</p>
        <h2 className="text-3xl md:text-5xl font-semibold">{name}</h2>
        <p className="text-base">{text}</p>
        <button className="mt-6 text-sm font-semibold uppercase bg-teal-600 hover:bg-teal-800 px-5 py-2 text-slate-100">
          Shop Now
        </button>
      </div>
      <div className="flex-1 w-full flex items-center justify-center py-24">
        <img
          src={Banner}
          alt="hero"
          className="w-full md:w-[400px] h-[400px] md:h-[300px] rounded-2xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
