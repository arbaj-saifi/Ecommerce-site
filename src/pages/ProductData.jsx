import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// import { products } from "./Shop";
import ProductImages from "./sliderImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faBoxOpen,
  faShoppingBag,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import "./productData.css";

const ProductDetails = () => {
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
    <div style={{ padding: "30px", width: "100%", height: "100vh" }}>
      <h1>
        <Link to={"/"}>Home:</Link> <Link to={"/Shop"}>Shop:</Link>{" "}
        {product.title}
      </h1>
      <div style={{ padding: "10px" }}>
        <div style={{ display: "flex", gap: "30px" }}>
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
              style={{ width: "400px", height: "500px", borderRadius: "8px" }}
            />
          )}

          {/* Right: Details */}
          <div
            className="right-details"
            style={{
              flex: 1,

              padding: "20px",
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
            <button className="addToCart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
