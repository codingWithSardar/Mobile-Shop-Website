import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Collection from "./pages/Collection";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Register from "./pages/Register";
import Order from "./pages/Order";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <ToastContainer />

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/placeOrder" element={<PlaceOrder />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
