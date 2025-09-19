import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = () => {
  const { productData, userInfo } = useSelector((state) => state.bazar);

  return (
    <div className="w-full bg-white h-20 border-b border-gray-300 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between px-6">
        
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>

        {/* Navigation links */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          <li className="hover:text-black duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-black duration-200">
            <Link to="/products">Products</Link>
          </li>
          <li className="hover:text-black duration-200">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-6">
          {/* Cart */}
          <Link to="/cart" className="relative">
            <FaShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 text-xs w-5 h-5 flex items-center justify-center bg-red-500 text-white rounded-full">
              {productData.length}
            </span>
          </Link>

          {/* Login / User */}
          <div>
            {userInfo ? (
              <p className="font-medium text-gray-700">Hi, {userInfo.name}</p>
            ) : (
              <Link
                to="/login"
                className="font-medium text-gray-700 hover:text-black duration-200"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
