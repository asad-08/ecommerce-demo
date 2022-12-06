import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-32">
      <div className="flex flex-col items-center justify-between gap-4 bg-slate-800 relative pt-16">
        <div className="w-[90%] md:w-[700px] mx-auto absolute left-[50%] translate-x-[-50%] top-[-80px]">
          <div className="px-12 py-6 flex items-center justify-between bg-slate-200 rounded-2xl my-6 ">
            <div>
              <p>Get In Touch</p>
            </div>
            <button className="text-sm font-semibold uppercase bg-teal-600 hover:bg-teal-800 px-5 py-2 text-slate-100">
              get started
            </button>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-5 w-full flex flex-col md:flex-row items-start justify-between gap-4 text-slate-100">
          <div>
            <label className="font-semibold">Address</label>
            <address className="text-sm mt-4">
              House#09, Road#16, Nikunja-2, Khilkhet, Dhaka
            </address>
          </div>
          <div>
            <label className="font-semibold">
              Subscribe to get latest news
            </label>
            <div className=" mt-4 flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                autoComplete="off"
                className="outline-none px-5 py-2"
              />
              <button className="text-sm font-semibold uppercase bg-teal-600 hover:bg-teal-800 px-5 py-2 text-slate-100">
                subscribe
              </button>
            </div>
          </div>
          <div>
            <label className="font-semibold">Important Links</label>
            <ul className=" mt-4">
              <li className="text-sm underline hover:text-teal-500 hover:cursor-pointer">
                cart
              </li>
              <li className="text-sm underline hover:text-teal-500 hover:cursor-pointer">
                products
              </li>
              <li className="text-sm underline hover:text-teal-500 hover:cursor-pointer">
                contact
              </li>
            </ul>
          </div>
          <div>
            <label className="font-semibold">Helpline</label>
            <p className=" mt-4">+88017xxxxxxxx</p>
          </div>
        </div>
        <div className="border-t-2 border-slate-100 w-full text-slate-100">
          <div className="max-w-[1200px] mx-auto px-5 h-[80px] flex items-center">
            <p>
              <span>{currentYear}</span> Asad. &copy; All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
