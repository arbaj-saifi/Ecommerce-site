import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faTrash,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";

// css import file
import "./cartPopup.css";
import { width } from "@fortawesome/free-solid-svg-icons/faStairs";

const CartPopup = ({ cart, removeFromCart, isOpen, onClose, lastAdded }) => {
  const [progress, setProgress] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isOpen);

    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    return () => setInterval(interval);
  }, [isOpen, cart]);

  if (!isOpen) return null;
  return (
    <div className={`cart-overlay ${isOpen ? "active" : ""}`} onClick={onClose}>
      <div
        className={`cart-drawer ${isOpen ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart-header" onClick={onClose}>
          <h2>Your Cart ({cart.length})</h2>
          <button className="close-btn" onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        {/* // successful cart product   line  Animation */}

        <div className="product-line">
          <div className="line-wrapper">
            <div
              className={`line ${cart.length === 0 ? "empty" : "filled"}`}
              style={{
                width: `${progress}%`,
                right: cart.length === 0 ? 0 : "auto", // empty → right to left
                left: cart.length > 0 ? 0 : "auto", // filled → left to right
              }}
            ></div>
          </div>
          <div className="congrats-text">
            {cart.length === 0
              ? "🛒 No cart items"
              : "Congratulations! You've got free shipping!"}
          </div>
        </div>

        <div className="product-details-items-cart">
          {cart.length === 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <h1 style={{ fontSize: "3rem" }}>🛒 </h1>
              <h2 style={{ fontSize: "1.3rem", fontWeight: "400" }}>
                Your cart is currently empty!.
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  textAlign: "center",
                  width: "400px",
                  color: "gray",
                }}
              >
                You may check out all the available products and buy some in the
                shop.
              </p>
              <button
                onClick={onClose}
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "250px",
                  height: "50px",
                  borderRadius: "30px",
                  cursor: "pointer",
                }}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="cart-items">
                <p>Products are limited, checkout within</p>
                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart-img"
                    />
                    <div className="cart-info">
                      <h3>{item.title}</h3>
                      <p>{item.price}</p>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price and Buy Section */}
              <div className="product-data-items-price">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "20px",
                  }}
                >
                  <h1>Subtotal</h1>
                  {/* Subtotal ke liye direct map karne ki jagah total calculate karna better hai */}
                  <h1>
                    {cart
                      .reduce(
                        (acc, item) =>
                          acc + parseFloat(item.price.replace("$", "")),
                        0
                      )
                      .toFixed(2)}
                    $
                  </h1>
                </div>

                <div
                  style={{
                    padding: "20px",
                    display: "flex",
                    gap: "20px",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="myCheckbox"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      style={{
                        width: "20px",
                        height: "20px",
                        cursor: "pointer",
                      }}
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
                    style={{
                      backgroundColor: isChecked ? "red" : "lightcoral",
                    }}
                  >
                    Buy It Now
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
