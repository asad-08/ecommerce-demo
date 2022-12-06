import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <p className="font-semibold text-2xl">404</p>
      <p className="font-semibold text-4xl">OH NO .....</p>
      <p className="w-full md:w-[500px] px-5 text-center">
        Your desired page is not found.
      </p>
    </div>
  );
};

export default ErrorPage;
