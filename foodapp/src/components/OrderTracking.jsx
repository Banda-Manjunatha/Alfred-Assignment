import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { FaMotorcycle, FaCheckCircle } from "react-icons/fa";

const OrderTracking = () => {
  const location = useLocation();
  const { product, quantity } = location.state || {};
  const orderStatus = "On the way";

  if (!product) return <div>No order data available</div>;

  return (
    <div className="p-4 space-y-6">
      <Link to="/" className="text-2xl">
        <IoMdArrowBack />
      </Link>
      <h1 className="text-2xl font-bold text-center">Order Tracking</h1>
      <div className="bg-white rounded-lg shadow-md p-4 space-y-2 flex justify-start gap-6 items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-38 h-24 object-cover rounded-lg"
        />
        <div>
          <h2 className="font-semibold">{product.name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Total: ₹{product.price * quantity}</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <div className="flex items-center justify-center text-5xl text-green-500">
          <FaMotorcycle />
        </div>
        <h2 className="text-xl font-semibold text-center">{orderStatus}</h2>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-green-500 text-2xl" />
            <p className="text-sm mt-1">Order Placed</p>
          </div>
          <div className="h-1 flex-1 bg-green-500"></div>
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-green-500 text-2xl" />
            <p className="text-sm mt-1">Preparing</p>
          </div>
          <div className="h-1 flex-1 bg-green-500"></div>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full border-2 border-green-500"></div>
            <p className="text-sm mt-1">On the Way</p>
          </div>
          <div className="h-1 flex-1 bg-gray-300"></div>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
            <p className="text-sm mt-1">Delivered</p>
          </div>
        </div>
        <p className="text-center text-gray-600">
          Estimated delivery time: {product.deliveryTime} minutes
        </p>
      </div>
    </div>
  );
};

export default OrderTracking;
