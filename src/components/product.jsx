import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    image: [
      "https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=360",
      "https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=185",
      "https://demo-milano.myshopify.com/cdn/shop/files/4_4_45faf918-dd6f-4e39-be59-dc66e7becead.webp?v=1742481531&width=185",
    ],
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
    price: "$300.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image: [
      "https://demo-milano.myshopify.com/cdn/shop/files/13_5_9c0bcbd4-c27f-4289-be76-af9c5c06aedf.webp?v=1742479315&width=660",
      "https://demo-milano.myshopify.com/cdn/shop/files/13_7_5b152aaa-fad5-4d7d-bfbe-3f498bd4fe67.webp?v=1742479315&width=185",
    ],
    category: "T-shirt",
    rating: 4,
  },
  {
    id: 4,
    title: "Zip neck jumper",
    price: "$200.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image: [
      "https://demo-milano.myshopify.com/cdn/shop/files/5_1_23fe5fb3-4888-4e7c-baf4-b6919271d29d.webp?v=1742481673&width=660",
      "https://demo-milano.myshopify.com/cdn/shop/files/16_3.webp?v=1742478345&width=720",
    ],
    category: "T-shirt",
    rating: 5,
  },
  {
    id: 5,
    title: "Flowing parka",
    price: "$245.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image: [
      "https://demo-milano.myshopify.com/cdn/shop/files/6_5.webp?v=1742480969&width=660",
      "https://demo-milano.myshopify.com/cdn/shop/files/14_3_f4e35f65-6d4b-49c0-b9bb-25af4d58e6fc.webp?v=1742479098&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/11_5_1c421dd0-c8e0-42c5-8a86-3310e50743eb.webp?v=1742480025&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/11_7_3c11b9b2-ae66-4200-ae52-57770538609b.webp?v=1742480025&width=720",
    ],
    category: "T-shirt",
    rating: 3,
  },
  {
    id: 6,
    title: "Short sleeve T-shirt",
    price: "$125.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image: [
      "https://demo-milano.myshopify.com/cdn/shop/files/12_1_0a40a6c4-7c4c-44fa-9b49-b65c5319d9be.webp?v=1742479651&width=660",
      "https://demo-milano.myshopify.com/cdn/shop/files/14_3_f4e35f65-6d4b-49c0-b9bb-25af4d58e6fc.webp?v=1742479098&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/11_5_1c421dd0-c8e0-42c5-8a86-3310e50743eb.webp?v=1742480025&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/11_7_3c11b9b2-ae66-4200-ae52-57770538609b.webp?v=1742480025&width=720",
    ],
    category: "T-shirt",
    rating: 4.2,
  },
  {
    id: 7,
    title: "Waistcoat with pockets",
    price: "$270.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image:
      "https://demo-milano.myshopify.com/cdn/shop/files/16_1.webp?v=1742478341",
    category: "T-shirt",
    rating: 4,
  },
  {
    id: 8,
    title: "Oversized shirt",
    price: "$120.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/8_3_1ecaf6b1-7775-44b3-b4df-4e9e0ddedefb.webp?v=1742480444&width=720",

    image: [
      "https://demo-milano.myshopify.com/cdn/shop/files/8_1_5daebf3d-8d8a-44ef-ae84-a8ebbfbb39ec.webp?v=1742480430&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/14_3_f4e35f65-6d4b-49c0-b9bb-25af4d58e6fc.webp?v=1742479098&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/11_5_1c421dd0-c8e0-42c5-8a86-3310e50743eb.webp?v=1742480025&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/11_7_3c11b9b2-ae66-4200-ae52-57770538609b.webp?v=1742480025&width=720",
    ],
    category: "T-shirt",
    rating: 5,
  },
  {
    id: 9,
    title: "Soft tracksuit sweatshirt",
    price: "$150.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/1_3_451af927-1187-4d22-8701-b05d7218b62b.webp?v=1742481105&width=720",

    image: [
      "https://demo-milano.myshopify.com/cdn/shop/files/1_1_69ccdae9-654a-4d42-b951-34c7656067e9.webp?v=1742481089&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/14_3_f4e35f65-6d4b-49c0-b9bb-25af4d58e6fc.webp?v=1742479098&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/11_5_1c421dd0-c8e0-42c5-8a86-3310e50743eb.webp?v=1742480025&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/11_7_3c11b9b2-ae66-4200-ae52-57770538609b.webp?v=1742480025&width=720",
    ],
    category: "crop-top",
    rating: 5,
  },
  {
    id: 10,
    title: "Faux fur gilet",
    price: "$320.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/10_2_3b899dee-1542-43b9-ad45-a84cd00bf928.webp?v=1742480250&width=720",

    image: [
      "https://demo-milano.myshopify.com/cdn/shop/files/10_1_477215e8-f440-481b-bd81-e16c9bc23e79.webp?v=1742480250&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/14_3_f4e35f65-6d4b-49c0-b9bb-25af4d58e6fc.webp?v=1742479098&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/11_5_1c421dd0-c8e0-42c5-8a86-3310e50743eb.webp?v=1742480025&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/11_7_3c11b9b2-ae66-4200-ae52-57770538609b.webp?v=1742480025&width=720",
    ],
    category: " crop-top",
    rating: 5,
  },
  {
    id: 11,
    title: "Stretch T-shirt with thin straps Pale Pink",
    price: "$140.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/3_3_ddf73933-7ca8-4573-afc7-9be48de7c3e4.webp?v=1742481427&width=720",

    image: [
      "https://demo-milano.myshopify.com/cdn/shop/files/3_1_98ff92ef-d5d3-4423-8a13-7bcf584b5c1b.webp?v=1742481425&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/14_3_f4e35f65-6d4b-49c0-b9bb-25af4d58e6fc.webp?v=1742479098&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/11_5_1c421dd0-c8e0-42c5-8a86-3310e50743eb.webp?v=1742480025&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/11_7_3c11b9b2-ae66-4200-ae52-57770538609b.webp?v=1742480025&width=720",
    ],
    category: "T-shirt ",
    rating: 5,
  },
  {
    id: 12,
    title: "Long belted sweater",
    price: "$240.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/9_3_40a7ed02-960b-474c-87f7-56c2903192b5.webp?v=1742459211&width=720",

    image: [
      "https://demo-milano.myshopify.com/cdn/shop/files/9_1_0e8a5236-cffc-4b58-954c-85aa7a471f4c.webp?v=1742459063&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/14_3_f4e35f65-6d4b-49c0-b9bb-25af4d58e6fc.webp?v=1742479098&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/11_5_1c421dd0-c8e0-42c5-8a86-3310e50743eb.webp?v=1742480025&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/11_7_3c11b9b2-ae66-4200-ae52-57770538609b.webp?v=1742480025&width=720",
    ],
    category: " Sweater",
    rating: 4.5,
  },
  {
    id: 13,
    title: "Short studded denim dress",

    price: "$400.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image: [
      "https://demo-milano.myshopify.com/cdn/shop/files/16_1.webp?v=1742478341&width=360",
      "https://demo-milano.myshopify.com/cdn/shop/files/14_3_f4e35f65-6d4b-49c0-b9bb-25af4d58e6fc.webp?v=1742479098&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/11_5_1c421dd0-c8e0-42c5-8a86-3310e50743eb.webp?v=1742480025&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/11_7_3c11b9b2-ae66-4200-ae52-57770538609b.webp?v=1742480025&width=720",
    ],
    category: " coats, T-shirt",
    rating: 4,
  },
  {
    id: 14,
    title: "Poplin shirt",
    price: "$100.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/7_3_b8f3bf27-9b7a-44d0-ae8a-033a20b04300.webp?v=1742480827&width=720",

    image: [
      "https://demo-milano.myshopify.com/cdn/shop/files/7_1_7e834f3a-e126-4202-be49-729718203ffa.webp?v=1742480743&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/14_3_f4e35f65-6d4b-49c0-b9bb-25af4d58e6fc.webp?v=1742479098&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/11_5_1c421dd0-c8e0-42c5-8a86-3310e50743eb.webp?v=1742480025&width=720",
      "https://demo-milano.myshopify.com/cdn/shop/files/11_7_3c11b9b2-ae66-4200-ae52-57770538609b.webp?v=1742480025&width=720",
    ],
    category: " T-shirt,  Jeans",
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
        pagination={{ clickable: true }}
        spaceBetween={25}
        slidesPerView={2}
        breakpoints={{
          1024: { slidesPerView: 4 }, // Desktop
          768: { slidesPerView: 2 }, // Tablet
        }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Link
              to={`/product/${product.id}`}
              state={product}
              style={{ textDecoration: "none", color: "inherit" }}
            >
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
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductAll;
