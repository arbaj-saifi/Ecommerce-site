import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import SetHeart from "./setHeart";
import ProductDetails from "../pages/ProductData";

const CountHeart = () => {
  const [Heart, setHeart] = useState(0);
  return (
    <div>
      <FontAwesomeIcon icon={faHeart} />
      <h1>{Heart}</h1>
      <SetHeart Heart={Heart} setHeart={setHeart} />
      {/* <ProductDetails Heart={Heart} setHeart={setHeart} /> */}
    </div>
  );
};

export default CountHeart;
