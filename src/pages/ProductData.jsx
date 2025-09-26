import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// import { products } from "./Shop";
import ProductImages from "./sliderImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faBoxOpen,
  faCodeCompare,
  faHeart,
  faShoppingBag,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import "./productData.css";
import SetHeart from "../components/setHeart";
import CartButton from "./cartButton";

import ProductAll from "../components/product";

const ProductDetails = ({ setHeart, AddToCart }) => {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState("L");

  const sizes = ["L", "M", "XL"];

  const [isChecked, setIsChecked] = useState(false);
  const { id } = useParams();
  const { state } = useLocation();
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <span key={i} className={i <= rating ? "star flailed " : "star"}>
            ★
          </span>
        );
      }
    }
    return stars;
  };

  const product = state || product.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={{ padding: "30px" }} className="main-container">
      <h1>
        <Link to={"/"}>Home:</Link> <Link to={"/Shop"}>Shop:</Link>{" "}
        {product.title}
      </h1>
      <div style={{ padding: "10px" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          {/* Left: Images */}
          {product.image ? (
            <ProductImages
              image={
                Array.isArray(product.image) ? product.image : [product.image]
              }
            />
          ) : (
            <img
              src={product.img}
              alt={product.title}
              style={{ width: "500px", height: "700px", borderRadius: "20px" }}
            />
          )}

          {/* Right: Details */}
          <div
            className="right-details"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1>{product.title}</h1>
            <h2>{product.price}</h2>
            <div className="rating">{renderStars(product.rating)}</div>
            <p>{product.description}</p>
            <p>
              The cotton long-sleeved striped t-shirt features a classic crew
              neckline, easy short <br /> sleeves, a slightly cropped length and
              a relaxed fit for a truly timeless look.
            </p>
            <div className="delivery">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faTruck} />{" "}
                  <h1>
                    Estimate delivery times: <b>3-5 days International</b>
                  </h1>
                </li>
                <hr />
                <li>
                  <FontAwesomeIcon icon={faBoxOpen} />{" "}
                  <h1>
                    Use code <b>"WELCOME15"</b> for discount 15% on your first
                    order.
                  </h1>
                </li>
                <hr />
                <li>
                  <FontAwesomeIcon icon={faShoppingBag} />{" "}
                  <h1>
                    Free shipping & returns: <b>On all orders over $150. </b>
                  </h1>
                </li>
              </ul>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "42vw",
                height: "70px",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "150px",
                  backgroundColor: "lightgrey",
                  height: "50px",
                  borderRadius: "20px",
                }}
              >
                <button
                  style={{ fontSize: "2rem", color: "gray", cursor: "pointer" }}
                  onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
                >
                  -
                </button>
                <h2 style={{ fontSize: "1.2rem", color: "black" }}>{count}</h2>
                <button
                  style={{
                    fontSize: "2rem",
                    color: "black",
                    cursor: "pointer",
                  }}
                  onClick={() => setCount((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <CartButton product={product} AddToCart={AddToCart} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100px",
                  height: "50px",
                }}
              >
                <button onClick={() => setHeart((prev) => prev + 1)}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ width: "25px", height: "25px", cursor: "pointer" }}
                  />
                </button>
                <FontAwesomeIcon
                  icon={faCodeCompare}
                  style={{ width: "25px", height: "25px", cursor: "pointer" }}
                />
              </div>
            </div>
            {/* // size of shirt */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "200px",
                gap: "20px",
              }}
            >
              <h1 style={{ fontSize: "1.1rem" }}>
                Size : <b>{size}</b>
              </h1>
              <div style={{ display: "flex", gap: "20px" }}>
                {sizes.map((s) => (
                  <button
                    key={s}
                    className={`size-button ${size === s ? "active" : "L"}`}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <h1 style={{ fontSize: "1.1rem" }}>
                Color: <b>indigo</b>
              </h1>
              <div></div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <input
                  type="checkbox"
                  id="myCheckbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  style={{ width: "20px", height: "20px", cursor: "pointer" }}
                />
                <label
                  htmlFor="myCheckbox"
                  style={{ fontSize: "1.2rem", cursor: "pointer" }}
                >
                  Accept Terms & Conditions
                </label>
              </div>

              <button
                className="BuyButton"
                style={{ backgroundColor: isChecked ? "red" : "lightcoral" }}
              >
                Buy It New
              </button>
            </div>
            {/* // continue */}
            <div></div>
          </div>
        </div>
      </div>
      <ProductAll />
    </div>
  );
};

export default ProductDetails;
