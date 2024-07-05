import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Restaurent from "./components/Restaurent";
import Menu from "./components/Menu";
import Product from "./components/Product";
import OrderTracking from "./components/OrderTracking";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="max-w-md mx-auto bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Restaurent />} />
          <Route path="/menu/:id" element={<Menu />} />
          <Route path="/menu/:id/product/:productId" element={<Product />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
