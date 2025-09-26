import React from "react";
// import "./productData.css";

const CartButton = ({ product, AddToCart }) => {
  return (
    <button
      onClick={() => AddToCart(product)}
      style={{
        display: "flex",
        width: "300px",
        background: "black",
        height: "50px",
        borderRadius: "20px",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: "1.2rem",
      }}
    >
      Add to Cart
    </button>
  );
};

export default CartButton;
