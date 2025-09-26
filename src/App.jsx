// import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

import Home from "./pages/home";

import Product from "./pages/product";
import Shop from "./pages/Shop";
import Pages from "./pages/pages";
import Blog from "./pages/blog";
import Themes from "./pages/Theme";
import ScrollTopButton from "./components/scrolltopbutton";
import ProductDetails from "./pages/ProductData";
import Footer from "./components/Footer";
import CartPopup from "./pages/cartPopup";

import "./App.css";
import { useState } from "react";

function App() {
  const [Heart, setHeart] = useState(0);
  const [cart, setCart] = useState([]);

  // add to cart logic implement
  const AddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // remove cart popup
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <Navbar cart={cart} Heart={Heart} removeFromCart={removeFromCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route
            path="/product/:id"
            element={
              <ProductDetails AddToCart={AddToCart} setHeart={setHeart} />
            }
          />
          {/* <Route path="cartPopup" element={<CartPopup cart={cart} />} /> */}
          <Route path="/product" element={<Product />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Themes" element={<Themes />} />
        </Routes>
        <ScrollTopButton />
        <Footer />
      </Router>
    </>
  );
}

export default App;
