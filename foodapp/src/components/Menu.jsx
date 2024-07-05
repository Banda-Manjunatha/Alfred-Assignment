import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import "../Styling/menu.css";

const Menu = () => {
  const { id } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("Recommended");

  const categories = [
    "Recommended",
    "Biryanis",
    "Curries",
    "Desserts",
    "Beverages",
  ];

  const menuItems = {
    Recommended: [
      {
        id: 1,
        name: "Butter Chicken",
        price: 250,
        description: "Tender chicken in a rich, creamy tomato sauce",
        image:
          "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&resize=440,400",
      },
      {
        id: 2,
        name: "Vegetable Biryani",
        price: 200,
        description:
          "Fragrant rice dish with mixed vegetables and aromatic spices",
        image:
          "https://media.istockphoto.com/id/179085494/photo/indian-biryani.jpg?s=612x612&w=0&k=20&c=VJAUfiuavFYB7PXwisvUhLqWFJ20-9m087-czUJp9Fs=",
      },
      {
        id: 3,
        name: "Gulab Jamun",
        price: 100,
        description: "Sweet milk solids balls soaked in rose-scented syrup",
        image:
          "https://bakewithzoha.com/wp-content/uploads/2023/04/gulab-jamun-3-scaled.jpg",
      },
      {
        id: 4,
        name: "Masala Dosa",
        price: 120,
        description: "Crispy rice crepe filled with spiced potato mixture",
        image:
          "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg",
      },
      {
        id: 5,
        name: "Mango Lassi",
        price: 80,
        description: "Refreshing yogurt drink blended with sweet mango pulp",
        image:
          "https://img.freepik.com/free-photo/mango-juice-glass-blue-surface_1150-41955.jpg",
      },
    ],
    Biryanis: [
      {
        id: 6,
        name: "Hyderabadi Chicken Biryani",
        price: 280,
        description: "Aromatic rice dish with tender chicken and exotic spices",
        image:
          "https://cdn.siasat.com/wp-content/uploads/2020/02/Biryani-1.jpg",
      },
      // Add 4 more biryani items here
    ],
    Curries: [
      {
        id: 11,
        name: "Palak Paneer",
        price: 180,
        description: "Cottage cheese cubes in a creamy spinach gravy",
        image:
          "https://t4.ftcdn.net/jpg/05/93/18/97/360_F_593189797_ejdEF30DW7iMcW32f7x6Xz7sxH6FjDuJ.jpg",
      },
      // Add 4 more curry items here
    ],
    Desserts: [
      {
        id: 16,
        name: "Rasmalai",
        price: 120,
        description: "Soft cottage cheese dumplings in saffron-flavored milk",
        image:
          "https://media.istockphoto.com/id/515853026/photo/traditional-rasmalai-or-ras-malai-indian-dessert-bengali-sweet.jpg?s=612x612&w=0&k=20&c=LYftdDAkIa8lVyfmwt8iK-OPSQr2KCcJcYpPhbFtFBk=",
      },
      // Add 4 more dessert items here
    ],
    Beverages: [
      {
        id: 21,
        name: "Masala Chai",
        price: 50,
        description: "Spiced Indian tea with milk",
        image:
          "https://recipes.wellcurve.in/wp-content/uploads/2022/03/Masala-Tea.jpg",
      },
      // Add 4 more beverage items here
    ],
  };

  return (
    <div className="p-4 space-y-6 scrollbar-hide">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl">
          <IoMdArrowBack />
        </Link>
        <h1 className="text-2xl font-bold">Menu</h1>
        <button className="text-2xl">
          <FaSearch />
        </button>
      </div>

      <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              selectedCategory === category
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            style={{ minWidth: "fit-content" }} // Adjust button width based on content
          >
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {menuItems[selectedCategory].map((item) => (
          <Link
            key={item.id}
            to={`/menu/${id}/product/${item.id}`}
            className="block"
          >
            <div className="flex bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow h-34">
              <img
                src={item.image}
                alt={item.name}
                className="w-1/3 h-34 object-cover"
              />
              <div className="p-4 flex-1">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <p className="mt-2 font-semibold">₹{item.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
