import React from "react";
import Client from "./../../assets/images/clients/dummy.jpg";

const Trusted = () => {
  return (
    <div className="w-full py-12 mt-12 mb-20 bg-slate-200 dark:bg-slate-800">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6 px-5">
        <label className="font-semibold">Trusted By 1000+ Companyies</label>
        <div className="flex gap-4 md:flex-row justify-center flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((x) => (
            <img
              className="w-[180px] h-[80px]"
              src={Client}
              alt={"client " + x}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trusted;
