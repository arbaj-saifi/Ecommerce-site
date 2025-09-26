import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faTrash } from "@fortawesome/free-solid-svg-icons";

// css import file
import "./cartPopup.css";
import { width } from "@fortawesome/free-solid-svg-icons/faStairs";

const CartPopup = ({ cart, removeFromCart, isOpen, onClose, lastAdded }) => {
  const [progress, setProgress] = useState(0);

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
        <div className="cart-header">
          <h2>Your Cart ({cart.length})</h2>
          <button className="close-btn" onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        {/* // successful cart product   line  Animation */}

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
            : `🎉 Congratulations! "${lastAdded?.title}" added to cart`}
        </div>

        {cart.length === 0 ? (
          <p className="empty">Your cart is empty</p>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.img} alt={item.title} className="cart-img" />
                <div className="cart-info">
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPopup;
