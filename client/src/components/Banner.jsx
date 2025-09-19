import React from "react";
import banner from "../assets/banner.jpg"; // make sure banner.jpg is in src/assets/

const Banner = () => {
  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Banner Image */}
      <img
        src={banner}
        alt="Banner"
        className="w-full h-full object-cover rounded-lg shadow-md"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to eBazaar</h1>
        <p className="text-lg mb-6">
          Shop the latest products at the best prices
        </p>
        <button className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-md transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
