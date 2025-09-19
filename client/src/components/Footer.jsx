import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-gray-400 py-8 mt-10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6">
        
        {/* Left side - logo / name */}
        <h2 className="text-white font-bold text-xl">eBazaar</h2>

        {/* Middle - navigation links */}
        <div className="flex items-center gap-6 text-sm">
          <a href="/" className="hover:text-white duration-200">Home</a>
          <a href="/products" className="hover:text-white duration-200">Products</a>
          <a href="/cart" className="hover:text-white duration-200">Cart</a>
          <a href="/login" className="hover:text-white duration-200">Login</a>
        </div>

        {/* Right side - copyright */}
        <p className="text-xs">
          © {new Date().getFullYear()} eBazaar. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
