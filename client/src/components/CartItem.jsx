import React from "react";
import { useDispatch } from "react-redux";
import { decreaseQuantity, deleteItem, increaseQuantity } from "../redux/bazarSlice";
import { MdOutlineClose } from "react-icons/md";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between border-b border-gray-300 py-4">
      {/* Product image */}
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-16 h-16 object-contain"
        />
        <div>
          <h2 className="font-semibold text-gray-800">{item.title}</h2>
          <p className="text-sm text-gray-500">₹{item.price}</p>
        </div>
      </div>

      {/* Quantity controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => dispatch(decreaseQuantity(item._id))}
          className="px-2 py-1 border rounded-md"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => dispatch(increaseQuantity(item._id))}
          className="px-2 py-1 border rounded-md"
        >
          +
        </button>
      </div>

      {/* Total price */}
      <p className="w-20 text-right font-medium">
        ₹{(item.price * item.quantity).toFixed(2)}
      </p>

      {/* Delete button */}
      <button
        onClick={() => dispatch(deleteItem(item._id))}
        className="text-red-600 hover:text-red-800"
      >
        <MdOutlineClose size={20} />
      </button>
    </div>
  );
};

export default CartItem;
