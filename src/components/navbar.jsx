import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "./nav";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons"; // Import specific icons
// import { faAngleLeft } from "@fortawesome/free-solid-svg
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faBasketShopping,
  faHeart,
  faSearch,
  faShoppingBasket,
  faSign,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ProductDetails from "../pages/ProductData";
import CountHeart from "./CountHeart";
import CartButton from "../pages/cartButton";
import CartPopup from "../pages/cartPopup";

const Navbar = ({ cart, Heart, removeFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMiniCart, setShowMiniCart] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar">
      <div className={`TopVar ${scrolled ? "hide" : ""}`}>
        <div className="first-div">
          <h1>Welcome Milano store </h1>
          <div className="icons">
            <i>
              <FontAwesomeIcon icon={faFacebook} />
            </i>
            <i>
              <FontAwesomeIcon icon={faInstagram} />
            </i>
            <i>
              <FontAwesomeIcon icon={faTiktok} />
            </i>
            <i>
              {" "}
              <FontAwesomeIcon icon={faYoutube} />
            </i>
            <i>
              <FontAwesomeIcon icon={faPinterest} />
            </i>
          </div>
        </div>
        <div className="second-div">
          <FontAwesomeIcon icon={faAngleLeft} />
          <div className="slides-slow">
            <h1>coats-every friday 75% off. shop sale </h1>
            <h1>sign Up for 10% off your first order. sign UP </h1>
            <h1>Summer sale discount off 50%. Shop Sale</h1>
          </div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div className="third-div">
          <h1>About</h1>
          <h1>help Center</h1>
          <img
            src="	https://cdn.shopify.com/static/images/flags/us.svg?width=352"
            alt="image"
          />
          <h2>United States (USD $)</h2>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>

      <div className={`Header ${scrolled ? "sticky" : ""}`}>
        <img
          src="https://demo-milano.myshopify.com/cdn/shop/files/logo.png?v=1742650856"
          alt="logo"
        />
        <div className="menu">
          <Nav />
        </div>
        <div className="order-div">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faUser} />
          {/* <CountHeart /> */}

          {/* <FontAwesomeIcon icon={faHeart} /> */}
          <div style={{ position: "relative", cursor: "pointer" }}>
            <FontAwesomeIcon icon={faHeart} />

            {/* Badge Count */}
            {/* {Heart > 0 && ( */}
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-10px",
                backgroundColor: "red",
                color: "white",
                fontSize: "10px",
                borderRadius: "50%",
                padding: "1px 4px",
              }}
            >
              {Heart}
            </span>
            {/* )} */}
          </div>
          <div style={{ position: "relative" }}>
            <div
              onClick={() => setIsOpen(true)}
              style={{ position: "relative", cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faShoppingBasket} />

              {/* Badge Count */}
              {/* {cart.length > 0 && ( */}
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-10px",
                  backgroundColor: "red",
                  color: "white",
                  fontSize: "10px",
                  borderRadius: "50%",
                  padding: "1px 4px",
                }}
              >
                {cart.length}
              </span>
              {/* )} */}
            </div>
            {/* Mini Cart Popup */}
            <CartPopup
              cart={cart}
              removeFromCart={removeFromCart}
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
