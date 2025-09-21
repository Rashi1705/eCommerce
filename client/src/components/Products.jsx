import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div id="shop" className="py-10">
      <div className="text-center mt-12 mb-6">
        <h2 className="text-3xl font-bold mb-4">Our Products</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our curated collection of high-quality products designed to meet your needs
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 justify-items-center">
        {products.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
