import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductAll from "./product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  faAngleLeft,
  faAngleRight,
  faCodeCompare,
  faEye,
  faHeart,
  faLayerGroup,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStairs } from "@fortawesome/free-solid-svg-icons/faStairs";

const Hero = () => {
  const sliderRef = useRef(null);
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="hero">
      <div className="hero1">
        <div className="icon">
          <i>
            <FontAwesomeIcon icon={faAngleLeft} />
          </i>
          <i>
            {" "}
            <FontAwesomeIcon icon={faAngleRight} />
          </i>
        </div>
        <div className="hero-text">
          <p>Modern EveryDay Looks</p>
          <h1>Soft Comfort </h1>
          <h1>Bold Looks</h1>
          <button className="shop-now">Shop Collection </button>
        </div>
      </div>
      <div className="hero2">
        <div className="hero-text2">
          <h1>Shop By Category </h1>
          <p>
            Express your style with our standout collection—fashion meets
            sophistication.
          </p>
        </div>
      </div>
      <div className="all-images">
        <div className="name-images">
          <img
            src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt3.webp?v=1745943972&width=550"
            alt="image1"
          />
        </div>

        <div className="name-images">
          <img
            src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt2.webp?v=1745943972&width=550"
            alt="image1"
          />
        </div>
        <div className="name-images">
          <img
            src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt1.webp?v=1745943972&width=550"
            alt="image1"
          />
        </div>
        <div className="name-images">
          <img
            src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt4.webp?v=1745943972&width=550"
            alt="image1"
          />
        </div>
        <div className="name-images">
          <img
            src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt5.webp?v=1745943972&width=550"
            alt="image1"
          />
        </div>
      </div>
      <div className="all-images2">
        <div className="name-images">
          <img
            src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt3.webp?v=1745943972&width=550"
            alt="image1"
          />
          <h1>Demin</h1>
        </div>
        <div className="name-images">
          <img
            src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt2.webp?v=1745943972&width=550"
            alt="image1"
          />
          <h1>Blazers</h1>
        </div>
      </div>
      <div className="caption">
        <h1>Demin</h1>
        <h1>Blazers</h1>
        <h1>Crop-Top</h1>
        <h1>Sweaters</h1>
        <h1>T-Shirts</h1>
      </div>
      <div className="hero3">
        <div className="hero3-1">
          <div className="hero-text3">
            <p>Save 30-50% Blazers</p>
            <h1>Color Spotlight</h1>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="hero3-2">
          <div className="hero-text3">
            <p>Save 30-50% Blazers</p>
            <h1>Color Spotlight</h1>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
      <div className="mobile-hero3">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="hero3-1">
              <div className="hero-text3">
                <p>Save 30-50% Blazers</p>
                <h1>Color Spotlight</h1>
                <button>Shop Now</button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero3-2">
              <div className="hero-text3">
                <p>Save 30-50% Blazers</p>
                <h1>Color Spotlight</h1>
                <button>Shop Now</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hero2">
        <div className="hero-text2">
          <h1>Best Selling</h1>
          <p>
            Unmatched design—superior performance and customer satisfaction in
            one.
          </p>
        </div>
      </div>
      <ProductAll />

      <div className="section5">
        <div className="first-section">
          <div className="section-image">
            <img
              src="https://demo-milano.myshopify.com/cdn/shop/files/fs_new_3.webp?v=1748226426&width=550"
              alt="image style"
            />
          </div>
          <div className="section-text">
            <p>DAYTIME STAPLES</p>
            <h1>Cool & Confident</h1>
            <p>Crisp whites and sharp shades for your everyday power look.</p>
            <button className="shop-now">Shop Collection</button>
          </div>
        </div>
        <div className="second-section">
          <div className="section-image">
            <img
              src="https://demo-milano.myshopify.com/cdn/shop/files/fs_new_4.webp?v=1748226426&width=550"
              alt="image style"
            />
          </div>
          <div className="section-text">
            <p>BOLD ESSENTIALS</p>
            <h1>Golden Layers</h1>
            <p>
              Soft knits in rich tones—effortlessly stylish, endlessly wearable.
            </p>
            <button className="shop-now">Shop Collection</button>
          </div>
        </div>
        <div className="third-section">
          <div className="section-image">
            <img
              src="https://demo-milano.myshopify.com/cdn/shop/files/fs_new_5.webp?v=1748226869&width=550"
              alt="image style"
            />
          </div>
          <div className="section-text">
            <p>SAVE 10—30% ON STATEMENT PIECES</p>
            <h1>Modern Ease Unfolded</h1>
            <p>
              Effortless looks for every moment—from poolside to city strolls.
            </p>
            <button className="shop-now">Shop Collection</button>
          </div>
        </div>
      </div>
      <div className="mobile-section5">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="first-section">
              <div className="section-image">
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/fs_new_3.webp?v=1748226426&width=550"
                  alt="image style"
                />
              </div>
              <div className="section-text">
                <p>DAYTIME STAPLES</p>
                <h1>Cool & Confident</h1>
                <p>
                  Crisp whites and sharp shades for your everyday power look.
                </p>
                <button className="shop-now">Shop Collection</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="second-section">
              <div className="section-image">
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/fs_new_4.webp?v=1748226426&width=550"
                  alt="image style"
                />
              </div>
              <div className="section-text">
                <p>BOLD ESSENTIALS</p>
                <h1>Golden Layers</h1>
                <p>
                  Soft knits in rich tones—effortlessly stylish, endlessly
                  wearable.
                </p>
                <button className="shop-now">Shop Collection</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="third-section">
              <div className="section-image">
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/fs_new_5.webp?v=1748226869&width=550"
                  alt="image style"
                />
              </div>
              <div className="section-text">
                <p>SAVE 10—30% ON STATEMENT PIECES</p>
                <h1>Modern Ease Unfolded</h1>
                <p>
                  Effortless looks for every moment—from poolside to city
                  strolls.
                </p>
                <button className="shop-now">Shop Collection</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="section6">
        <div className="section-text1">
          <h1>OUR PHILOSOPHY</h1>
          <p>
            We're on a mission to show the world that modern fashion can be both
            stylish and sustainable. Looking good doesn't have to cost the
            earth.
          </p>
          <div className="section-btn">
            <button className="section-btn-first"> read more</button>
            <button className="section-btn-second">New Arrivals</button>
          </div>
        </div>
      </div>
      <div className="hero2">
        <div className="hero-text2">
          <h1>Popular Picks</h1>
          <p>
            Unmatched design—superior performance and customer satisfaction in
            one.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
