import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import custom swiper styles
import "./productSl.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHeart,
  faLayerGroup,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    id: 1,
    title: "High neck jumper",
    price: "$200.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",
    image:
      "https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=360",
    category: "T-shirt",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Basic blazer",
    price: "$225.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    video:
      "https://demo-milano.myshopify.com/cdn/shop/videos/c/vp/1c125896d5bd4a2cab0b37320373b210/1c125896d5bd4a2cab0b37320373b210.HD-1080p-2.5Mbps-51137723.mp4?v=0",
    category: "T-shirt",
    rating: 4.5,
  },
  {
    id: 3,
    title: "Belted blazer dress",
    price: "$3000.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image:
      "https://demo-milano.myshopify.com/cdn/shop/files/13_5_9c0bcbd4-c27f-4289-be76-af9c5c06aedf.webp?v=1742479315&width=660",
    category: "T-shirt",
    rating: 4,
  },
  {
    id: 4,
    title: "BZip neck jumper",
    price: "$200.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image:
      "https://demo-milano.myshopify.com/cdn/shop/files/5_1_23fe5fb3-4888-4e7c-baf4-b6919271d29d.webp?v=1742481673&width=660",
    category: "T-shirt",
    rating: 5,
  },
  {
    id: 5,
    title: "Flowing parka",
    price: "$245.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image:
      "https://demo-milano.myshopify.com/cdn/shop/files/6_5.webp?v=1742480969&width=660",
    category: "T-shirt",
    rating: 3,
  },
  {
    id: 6,
    title: "Short sleeve T-shirt",
    price: "$125.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image:
      "https://demo-milano.myshopify.com/cdn/shop/files/12_1_0a40a6c4-7c4c-44fa-9b49-b65c5319d9be.webp?v=1742479651&width=660",
    category: "T-shirt",
    rating: 4.2,
  },
  {
    id: 7,
    title: "Waistcoat with pockets",
    price: "$270.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image: "https://m.media-amazon.com/images/I/61jLiCov7PL._SX679_.jpg",
    category: "T-shirt",
    rating: 4,
  },
  {
    id: 8,
    title: "Oversized shirt",
    price: "$120.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image: "https://m.media-amazon.com/images/I/61jLiCov7PL._SX679_.jpg",
    category: "T-shirt",
    rating: 5,
  },
  {
    id: 9,
    title: "Soft tracksuit sweatshirt",
    price: "$150.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image: "https://m.media-amazon.com/images/I/61jLiCov7PL._SX679_.jpg",
    category: "crop-top, T-shirt",
    rating: 5,
  },
  {
    id: 10,
    title: "Faux fur gilet",
    price: "$320.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image: "https://m.media-amazon.com/images/I/61jLiCov7PL._SX679_.jpg",
    category: "T-shirt, crop-top",
    rating: 5,
  },
  {
    id: 11,
    title: "Stretch T-shirt with thin straps Pale Pink",
    price: "$140.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image: "https://m.media-amazon.com/images/I/61jLiCov7PL._SX679_.jpg",
    category: "T-shirt, crop-top, ",
    rating: 5,
  },
  {
    id: 12,
    title: "Long belted sweater",
    price: "$240.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image: "https://m.media-amazon.com/images/I/61jLiCov7PL._SX679_.jpg",
    category: "crop-top, sweater",
    rating: 4.5,
  },
  {
    id: 13,
    title: "Short studded denim dress",

    price: "$400.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image: "https://m.media-amazon.com/images/I/61jLiCov7PL._SX679_.jpg",
    category: "T-shirt, crop-top, coats",
    rating: 4,
  },
  {
    id: 14,
    title: "Poplin shirt",
    price: "$100.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image: "https://m.media-amazon.com/images/I/61jLiCov7PL._SX679_.jpg",
    category: "crop-top, jean, T-shirt",
    rating: 5,
  },
];

const ProductAll = () => {
  // rating use stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <span key={i} className={i <= rating ? "star flaild " : "star"}>
            {" "}
            ★
          </span>
        );
      }
    }
    return stars;
  };
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-cart">
              <div className="product-sales">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-media"
                  />
                ) : product.video ? (
                  <video
                    src={product.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="product-media"
                  />
                ) : null}
                <img
                  src={product.img}
                  alt={product.name}
                  className="over-image"
                />
                <div className="overflow-icons">
                  <i>
                    <FontAwesomeIcon icon={faHeart} />
                  </i>
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faLayerGroup} />
                  </i>
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faEye} />
                  </i>
                </div>
                <button className="bottoms-btn">Select Option </button>
              </div>
            </div>
            <div className="product-tag">
              {" "}
              <h3 className="product-title"> {product.title}</h3>
              <div className="product-rating">
                {renderStars(product.rating)}
              </div>
              <h3 className="product-price"> {product.price}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductAll;
