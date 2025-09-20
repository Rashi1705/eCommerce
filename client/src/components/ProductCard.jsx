import React from "react";
import { BsArrowBarRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/bazarSlice";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = product.title;

  const _idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };

  const rootId = _idString(_id);

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };

  return (
    <div className="group relative rounded-2xl overflow-hidden border border-gray-300 shadow-lg hover:shadow-xl transition-shadow">
      <figure
        onClick={handleDetails}
        className="w-60 sm:w-72 lg:w-full h-96 hover:cursor-pointer overflow-hidden"
      >
        <img
          src={product.image}
          alt="productImg"
          className="lg:w-full h-full object-cover group-hover:scale-110 duration-500"
        />
      </figure>
      <div className="info border border-b-0 px-2 py-4 w-full flex flex-col gap-2 bg-white">
        <div className="flex justify-between">
          <div>
            <h2>{product.title.substring(0, 15)}</h2>
          </div>
          <div className="flex justify-center gap-2 text-sm relative overflow-hidden">
            <div className="flex gap-2 relative justify-end transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="line-through text-gray-500">${product.oldPrice}</p>
              <p className="font-semibold">${product.price}</p>
            </div>
            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                ) && toast.success(`${product.title} added to Cart`)
              }
              className="absolute z-20 w-[100px] top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500 flex items-center gap-2 bg-gray-800 text-white py-1 px-2 rounded-full text-xs"
            >
              add to cart &nbsp;
              <span>
                <BsArrowBarRight />
              </span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-700 capitalize">{product.category}</p>
        </div>
        <div className="absolute top-4 right-0">
          {product.isNew && (
            <p className="bg-slate-900 text-gray-100 text-sm text-right px-3 py-1">
              Sale
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;