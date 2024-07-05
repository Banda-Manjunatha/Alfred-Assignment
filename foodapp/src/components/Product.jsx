import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

const Product = () => {
  const { id, productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulating fetching product data based on productId
    const fetchProduct = () => {
      const allProducts = [
        {
          id: 1,
          name: "Butter Chicken",
          price: 250,
          description: "Tender chicken in a rich, creamy tomato sauce",
          image:
            "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&resize=440,400",
          rating: 4.5,
          deliveryTime: 25,
        },
        {
          id: 2,
          name: "Vegetable Biryani",
          price: 200,
          description:
            "Fragrant rice dish with mixed vegetables and aromatic spices",
          image:
            "https://media.istockphoto.com/id/179085494/photo/indian-biryani.jpg?s=612x612&w=0&k=20&c=VJAUfiuavFYB7PXwisvUhLqWFJ20-9m087-czUJp9Fs=",
          rating: 4.2,
          deliveryTime: 30,
        },
        {
          id: 3,
          name: "Gulab Jamun",
          price: 100,
          description: "Sweet milk solids balls soaked in rose-scented syrup",
          image:
            "https://bakewithzoha.com/wp-content/uploads/2023/04/gulab-jamun-3-scaled.jpg",
          rating: 4.0,
          deliveryTime: 20,
        },
        {
          id: 4,
          name: "Masala Dosa",
          price: 120,
          description: "Crispy rice crepe filled with spiced potato mixture",
          image:
            "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg",
          rating: 4.1,
          deliveryTime: 25,
        },
        {
          id: 5,
          name: "Mango Lassi",
          price: 80,
          description: "Refreshing yogurt drink blended with sweet mango pulp",
          image:
            "https://img.freepik.com/free-photo/mango-juice-glass-blue-surface_1150-41955.jpg",
          rating: 4.3,
          deliveryTime: 15,
        },
        {
          id: 6,
          name: "Hyderabadi Chicken Biryani",
          price: 280,
          description:
            "Aromatic rice dish with tender chicken and exotic spices",
          image:
            "https://cdn.siasat.com/wp-content/uploads/2020/02/Biryani-1.jpg",
          rating: 4.7,
          deliveryTime: 35,
        },
        {
          id: 11,
          name: "Palak Paneer",
          price: 180,
          description: "Cottage cheese cubes in a creamy spinach gravy",
          image:
            "https://t4.ftcdn.net/jpg/05/93/18/97/360_F_593189797_ejdEF30DW7iMcW32f7x6Xz7sxH6FjDuJ.jpg",
          rating: 4.4,
          deliveryTime: 30,
        },
        {
          id: 16,
          name: "Rasmalai",
          price: 120,
          description: "Soft cottage cheese dumplings in saffron-flavored milk",
          image:
            "https://media.istockphoto.com/id/515853026/photo/traditional-rasmalai-or-ras-malai-indian-dessert-bengali-sweet.jpg?s=612x612&w=0&k=20&c=LYftdDAkIa8lVyfmwt8iK-OPSQr2KCcJcYpPhbFtFBk=",
          rating: 4.2,
          deliveryTime: 25,
        },
        {
          id: 21,
          name: "Masala Chai",
          price: 50,
          description: "Spiced Indian tea with milk",
          image:
            "https://recipes.wellcurve.in/wp-content/uploads/2022/03/Masala-Tea.jpg",
          rating: 4.0,
          deliveryTime: 20,
        },
      ];

      const selectedProduct = allProducts.find(
        (p) => p.id === parseInt(productId),
      );
      setProduct(selectedProduct);
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate("/order-tracking", { state: { product, quantity } });
    }, 1000);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-4 space-y-6 relative">
      <button onClick={() => navigate(-1)} className="text-2xl">
        <IoMdArrowBack />
      </button>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-600">{product.description}</p>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-xl">₹{product.price}</p>
        <div className="flex items-center">
          <IoMdStar className="text-yellow-400 mr-1" />
          <span>{product.rating}</span>
        </div>
      </div>
      <div className="flex items-center">
        {product.deliveryTime <= 30 ? (
          <FaRegClock className="text-green-500 mr-2" />
        ) : (
          <FaRegClock className="text-yellow-500 mr-2" />
        )}
        <span>{product.deliveryTime} mins delivery time</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300 transition-colors"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300 transition-colors"
          >
            +
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent">
          <div className="bg-white p-6 rounded-lg flex flex-col items-center shadow-lg">
            <FaCheckCircle className="text-green-500 text-5xl mb-4" />
            <p className="text-xl font-semibold">Order placed successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
