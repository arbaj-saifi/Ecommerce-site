import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./shop.css";
import {
  faAngleLeft,
  faAngleRight,
  faPlus,
  faSubtract,
} from "@fortawesome/free-solid-svg-icons";
import {
  faEye,
  faHeart,
  faLayerGroup,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

// import Product from "./product";

const AllImage = [
  {
    type: "image",
    src: "https://demo-milano.myshopify.com/cdn/shop/collections/fs_clt10.jpg?v=1743049581&width=550",
    title: "Blazers",
  },
  {
    type: "image",
    src: "https://demo-milano.myshopify.com/cdn/shop/collections/fsn_clt2.jpg?v=1742529975&width=550",
    title: "Demin",
  },
  {
    type: "image",
    src: "https://demo-milano.myshopify.com/cdn/shop/collections/fs_clt2.jpg?v=1742530012&width=480",
    title: "Crop-Top",
  },
  {
    type: "image",
    src: "https://demo-milano.myshopify.com/cdn/shop/collections/fs_clt4.jpg?v=1743049703&width=550",
    title: "Sweaters",
  },
  {
    type: "image",
    src: "https://demo-milano.myshopify.com/cdn/shop/collections/fs_clt3.jpg?v=1743049615&width=550",
    title: "T-Shirts",
  },
  {
    type: "image",
    src: "https://demo-milano.myshopify.com/cdn/shop/collections/fs_clt6.jpg?v=1743321756&width=550",
    title: "Dress",
  },
  {
    type: "image",
    src: "https://demo-milano.myshopify.com/cdn/shop/collections/fs_clt7.jpg?v=1743321745&width=550",
    title: "tops",
  },
];

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
    category: "crop-top",
    rating: 5,
  },
  {
    id: 10,
    title: "Faux fur gilet",
    price: "$320.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image: "https://m.media-amazon.com/images/I/61jLiCov7PL._SX679_.jpg",
    category: " crop-top",
    rating: 5,
  },
  {
    id: 11,
    title: "Stretch T-shirt with thin straps Pale Pink",
    price: "$140.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image: "https://m.media-amazon.com/images/I/61jLiCov7PL._SX679_.jpg",
    category: "T-shirt ",
    rating: 5,
  },
  {
    id: 12,
    title: "Long belted sweater",
    price: "$240.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image: "https://m.media-amazon.com/images/I/61jLiCov7PL._SX679_.jpg",
    category: " Sweater",
    rating: 4.5,
  },
  {
    id: 13,
    title: "Short studded denim dress",

    price: "$400.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image: "https://m.media-amazon.com/images/I/61jLiCov7PL._SX679_.jpg",
    category: " coats, T-shirt",
    rating: 4,
  },
  {
    id: 14,
    title: "Poplin shirt",
    price: "$100.00",
    img: "https://demo-milano.myshopify.com/cdn/shop/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722&width=660",

    image: "https://m.media-amazon.com/images/I/61jLiCov7PL._SX679_.jpg",
    category: " T-shirt,  Jeans",
    rating: 5,
  },
];

const Shop = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [collapsed1, setCollapsed1] = useState(false);
  const [collapsed2, setCollapsed2] = useState(true);
  const [collapsed3, setCollapsed3] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [gridCols, setGridCols] = useState(3);
  const [selectPrice, setSelectPrice] = useState(500);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // page pagination state use

  const [currentPage, setCurrentPage] = useState(1);
  const ProductPerPage = 10;

  // filter + price range functionality

  useEffect(() => {
    let filtered = products;
    // category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter((product) =>
        product.category
          .split(",")
          .map((c) => c.trim().toLowerCase())
          .includes(selectedCategory.toLowerCase())
      );
    }

    // price range filter
    filtered = filtered.filter((product) => {
      const priceNumber = parseFloat(product.price.replace(/[^0-9.-]+/g, ""));
      return priceNumber <= selectPrice;
    });
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [selectedCategory, selectPrice]);

  useEffect(() => {
    // fetch products data
    const uniqueCategories = [
      ...new Set(
        products.flatMap((product) =>
          product.category.split(",").map((cat) => cat.trim())
        )
      ),
    ];
    setCategories(uniqueCategories);
  }, []);

  // Pagination logic case page products
  const totalPage = Math.ceil(filteredProducts.length / ProductPerPage);
  const StartIndex = (currentPage - 1) * ProductPerPage;
  const EndIndex = StartIndex + ProductPerPage;
  const currenProducts = filteredProducts.slice(StartIndex, EndIndex);

  // rating stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <span key={i} className={i <= rating ? "star flaild " : "star"}>
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="shop-container">
      <div className="shop-image-first">
        <div className="div-container">
          <Link to={"/Home"}>Home.</Link>

          <h1>Shop</h1>
        </div>
        <h2>Shop</h2>
      </div>
      <div className="swiper">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          spaceBetween={20}
          slidesPerView={5}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            725: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="mySwiper"
        >
          {AllImage.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="Swiper-slide-firs">
                <div className="swiper-img">
                  {item.type === "image" ? (
                    <img src={item.src} alt={`Slide ${index + 1}`} />
                  ) : item.type === "video" ? (
                    <video
                      src={item.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="product-media"
                    />
                  ) : null}
                </div>

                <h3>{item.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="filter-container">
        <div className="left-container">
          <div
            className="left-container-scroll"
            style={{ height: collapsed ? "50px" : "250px" }}
          >
            <div className="left-container-scroll-block">
              <h1>Product Category</h1>

              <div
                className="left-container-scroll-block-cond"
                onClick={() => setCollapsed(!collapsed)}
                style={{ cursor: "pointer" }}
              >
                {collapsed ? (
                  <FontAwesomeIcon icon={faPlus} />
                ) : (
                  <FontAwesomeIcon icon={faSubtract} />
                )}
              </div>
            </div>
            <div className="left-container-scroll-category">
              <ul>
                {categories.map((category, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    style={{
                      cursor: "pointer",

                      background:
                        selectedCategory === category ? "#ddd" : "transparent",
                    }}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr
            style={{
              marginTop: "20px",
              width: "100%",
            }}
          />
          <div
            className="left-container-scroll-second"
            style={{
              height: collapsed1 ? "50px" : "150px",
              cursor: "pointer",
            }}
          >
            <div className="left-container-scroll-block">
              <h1>Availability </h1>

              <div
                className="left-container-scroll-block-cond"
                onClick={() => setCollapsed1(!collapsed1)}
                style={{ cursor: "pointer" }}
              >
                {collapsed1 ? (
                  <FontAwesomeIcon icon={faPlus} />
                ) : (
                  <FontAwesomeIcon icon={faSubtract} />
                )}
              </div>
            </div>
            <div className="left-container-scroll-category">
              <ul>
                <li>
                  <input type="checkbox" id="in-stock" name="in-stock" />
                  <label htmlFor="in-stock"> In Stock (6)</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="out-of-stock"
                    name="out-of-stock"
                  />
                  <label htmlFor="out-of-stock"> Out of Stock (0)</label>
                </li>
              </ul>
            </div>
          </div>
          <hr
            style={{
              marginTop: "20px",
              width: "100%",
            }}
          />

          <div
            className="left-container-scroll-second"
            style={{
              height: collapsed2 ? "50px" : "150px",
              cursor: "pointer",
            }}
          >
            <div className="left-container-scroll-block">
              <h1>Price</h1>

              <div
                className="left-container-scroll-block-cond"
                onClick={() => setCollapsed2(!collapsed2)}
                style={{ cursor: "pointer" }}
              >
                {collapsed2 ? (
                  <FontAwesomeIcon icon={faPlus} />
                ) : (
                  <FontAwesomeIcon icon={faSubtract} />
                )}
              </div>
            </div>
            <div
              className="left-container-scroll-category"
              style={{ gap: "10px", display: "flex", flexDirection: "column" }}
            >
              {/* Price range inputs */}
              <div
                className="price-range-btn"
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-between",
                }}
              >
                <input type="text" placeholder="$0.00" />
                -
                <input type="text" value={`$${selectPrice}.00`} readOnly />
              </div>
              <input
                type="range"
                min="0"
                max="500"
                step="1"
                value={selectPrice}
                onChange={(e) => setSelectPrice(Number(e.target.value))}
              />
              <output>${selectPrice}</output>
            </div>
          </div>
          <hr
            style={{
              marginTop: "20px",
              width: "100%",
            }}
          />
          <div
            className="left-container-scroll-second"
            style={{
              height: collapsed3 ? "50px" : "480px",
              cursor: "pointer",
            }}
          >
            <div className="left-container-scroll-block">
              <h1>Feature Product </h1>

              <div
                className="left-container-scroll-block-cond"
                onClick={() => setCollapsed3(!collapsed3)}
                style={{ cursor: "pointer" }}
              >
                {collapsed3 ? (
                  <FontAwesomeIcon icon={faPlus} />
                ) : (
                  <FontAwesomeIcon icon={faSubtract} />
                )}
              </div>
            </div>
            <div className="left-container-scroll-product">
              {filteredProducts.slice(2, 5).map((product) => (
                <div
                  key={product.id}
                  className="feature-product-box"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: "10px",
                    padding: "10px",
                  }}
                >
                  <div>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: "90px",
                        height: "120px",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                  <div className="feature-product-details">
                    <h3 className="feature-product-title">{product.title}</h3>
                    <div className="feature-product-rating">
                      {renderStars(product.rating)}
                    </div>
                    <h3 className="feature-product-price">{product.price}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr
            style={{
              marginTop: "20px",
              width: "100%",
            }}
          />
          <div style={{ marginTop: "50px" }}>
            <img
              src="https://demo-milano.myshopify.com/cdn/shop/files/fs_category.jpg?v=1743049451&width=240"
              alt="image"
              style={{ width: "280px", height: "300px", borderRadius: "8px" }}
            />
          </div>
        </div>
        <div className="product-container">
          <div className="product-details-grid">
            <div>There are {products.length} results in total </div>
            <div style={{ marginBottom: "15px", gap: "10px", display: "flex" }}>
              <button onClick={() => setGridCols(2)}>2 Columns</button>
              <button onClick={() => setGridCols(3)}>3 Columns</button>
              <button onClick={() => setGridCols(4)}>4 Columns</button>
            </div>
            <div>3</div>
          </div>
          <div
            className="product-grid"
            style={{
              gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
              display: "grid",
              gap: "20px",
            }}
          >
            {currenProducts.map((product) => (
              <div key={product.id} className="product-box">
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
              </div>
            ))}
          </div>
          {/* // Pagination logic case control  */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
              gap: "8px",
            }}
          >
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              style={{
                backgroundColor: "grey",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                padding: "10px",
                display: "flex",
                fontSize: "1.3rem",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </button>

            {Array.from({ length: totalPage }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                style={{
                  fontWeight: currentPage === i + 1 ? "bold" : "normal",
                  fontSize: "1.5rem",
                }}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPage))
              }
              disabled={currentPage === totalPage}
              style={{
                backgroundColor: "grey",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                padding: "10px",
                display: "flex",
                fontSize: "1.3rem",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
