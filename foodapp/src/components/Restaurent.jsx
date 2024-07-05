import React from "react";
import { Link } from "react-router-dom";
import { PiSortDescending, PiClockCountdownFill } from "react-icons/pi";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import rest1 from "../images/rest1.avif";

const Restaurent = () => {
  const restaurants = [
    {
      id: 1,
      name: "Roti-Wala.Com",
      rating: 4.2,
      cuisines: ["North Indian", "Chinese"],
      price: 150,
      offer: "20% OFF up to ₹50",
    },
    {
      id: 2,
      name: "Pizza Paradise",
      rating: 4.5,
      cuisines: ["Italian", "Fast Food"],
      price: 200,
      offer: "Free delivery on orders above ₹300",
    },
    {
      id: 3,
      name: "Sushi Sensation",
      rating: 4.3,
      cuisines: ["Japanese", "Asian"],
      price: 250,
      offer: "15% OFF on all sushi platters",
    },
  ];

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center tracking-wide">
        ALL RESTAURANTS
      </h1>
      <div className="flex justify-between items-center text-sm">
        <button className="flex items-center gap-1 hover:bg-gray-200 transition-colors border px-2 py-1 rounded-md">
          <PiSortDescending /> Sort <MdArrowDropDown />
        </button>
        <button className="flex items-center gap-2 border rounded-md px-2 py-1 hover:bg-gray-200 transition-colors">
          <span className="bg-red-500 text-white px-2 py-[1.6px] rounded-md text-xs">
            New
          </span>
          Near and Fast
        </button>
        <button className="border rounded-md py-1 px-2 hover:bg-gray-200 transition-colors">
          Rating 4.0+
        </button>
      </div>
      <p className="text-gray-500 text-center">
        {restaurants.length} restaurants delivering to you
      </p>
      <h2 className="text-xl font-semibold text-center tracking-wide">
        FEATURED
      </h2>
      <div className="space-y-6">
        {restaurants.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={`/menu/${restaurant.id}`}
            className="block"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={rest1}
                alt={restaurant.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-xl">{restaurant.name}</h3>
                  <span className="flex items-center bg-green-500 text-white px-2 py-1 rounded">
                    {restaurant.rating} <IoMdStar />
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {restaurant.cuisines.join(" • ")} • ₹{restaurant.price} for
                  one
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <PiClockCountdownFill className="text-green-500 mr-1" /> 30-40
                  mins
                </div>
                <hr />
                <p className="text-blue-600 font-semibold flex items-center text-sm">
                  <BiSolidOffer className="mr-1" /> {restaurant.offer}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Restaurent;
