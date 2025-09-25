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

import "./App.css";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
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
