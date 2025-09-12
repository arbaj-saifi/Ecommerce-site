import React, { useRef } from "react";
import ProductAll from "./product";
import {
  faHeart,
  faLayerGroup,
  faEye,
  faStar,
  faBox,
  faBasketShopping,
  faRightLong,
  faSms,
  faCheck,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const slides = [
  {
    type: "img",
    src: "https://demo-milano.myshopify.com/cdn/shop/files/fsn_i4.webp?v=1744451595&width=550",
  },
  {
    type: "img",
    src: "https://demo-milano.myshopify.com/cdn/shop/files/fsn_i6.webp?v=1744451595&width=550",
  },
  {
    type: "img",
    src: "https://demo-milano.myshopify.com/cdn/shop/files/fsn_i1.jpg?v=1742270196&width=550",
  },
  {
    type: "video",
    src: "https://demo-milano.myshopify.com/cdn/shop/videos/c/vp/044d27e84dea40c3bf076656842ef4c1/044d27e84dea40c3bf076656842ef4c1.HD-720p-3.0Mbps-44645405.mp4?v=0",
  },
  {
    type: "img",
    src: "https://demo-milano.myshopify.com/cdn/shop/files/fsn_i5.jpg?v=1742719683&width=1370",
  },
  {
    type: "img",
    src: "https://demo-milano.myshopify.com/cdn/shop/files/fsn_i2.webp?v=1744451595&width=550",
  },
];

const Slider = () => {
  const repeatedSlides = [...slides, ...slides];

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
  const sliderRef1 = useRef(null);
  const scrollLeft1 = () => {
    if (sliderRef1.current) {
      sliderRef1.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };
  const scrollRight1 = () => {
    if (sliderRef1.current) {
      sliderRef1.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <ProductAll />
      <div className="section7">
        <div className="hero2">
          <div className="hero-text2">
            <h1>Happy Customers</h1>
            <p>
              Customers love our products and we always strive to please them
              all.
            </p>
          </div>
        </div>
        <div className="section7-slider">
          <button className="slider-btn  left " onClick={scrollLeft}>
            &#10094;
          </button>
          <div className="sliders" ref={sliderRef}>
            <div className="section7-slider-first">
              <div className="section-slider-img">
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/fs2_new_testi1.webp?v=1748226426&width=550"
                  alt="title image"
                />
              </div>
              <div className="section-slider-title">
                <div>
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      style={{ color: "red" }}
                    />
                  ))}
                </div>
                <h1>Cameron Smith. Verified Buyer</h1>
                <p>
                  A perfect product, it keeps you very warm without over
                  heating. True to size, I couldn't be happier with the
                  purchase... Thank you! 🤗
                </p>
                <hr />
                <div className="section-slider-title-img">
                  <div className="section-slider-title-images">
                    <img
                      src="https://demo-milano.myshopify.com/cdn/shop/files/14_1_4f52feaa-9e18-462c-b05e-f508d14c8535.webp?v=1742478979&width=240"
                      alt="images title "
                    />
                    <img
                      src="https://demo-milano.myshopify.com/cdn/shop/files/14_3_f4e35f65-6d4b-49c0-b9bb-25af4d58e6fc.webp?v=1742479098&width=240"
                      alt="images title2"
                      className="over-image"
                    />
                  </div>
                  <div className="section-slider-title-images-text">
                    <h1>Waistcoat with pockets</h1>
                    <p>$270.00 </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="section7-slider-first">
              <div className="section-slider-img">
                <video
                  src="https://demo-milano.myshopify.com/cdn/shop/videos/c/vp/1eaa97de0c0144f1b7f5fdd677932d3b/1eaa97de0c0144f1b7f5fdd677932d3b.HD-1080p-7.2Mbps-44632515.mp4?v=0"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="product-video"
                />
              </div>
              <div className="section-slider-title">
                <div>
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      style={{ color: "red" }}
                    />
                  ))}
                </div>
                <h1>Algistino Lionel. Verified Buyer</h1>
                <p>
                  A fantastic purchase! The product provides just the right
                  amount of warmth without causing overheating. Highly
                  recommend! 😊
                </p>
                <hr />
                <div className="section-slider-title-img">
                  <div className="section-slider-title-images">
                    <img
                      src="https://demo-milano.myshopify.com/cdn/shop/files/5_1_23fe5fb3-4888-4e7c-baf4-b6919271d29d.webp?v=1742481673&width=60"
                      alt="images title "
                    />
                    <img
                      src="https://demo-milano.myshopify.com/cdn/shop/files/5_3_9014796c-913f-44f8-b335-f81f00f0941a.webp?v=1742481723&width=60"
                      alt="images title2"
                      className="over-image"
                    />
                  </div>
                  <div className="section-slider-title-images-text">
                    <h1>Zip neck jumper</h1>
                    <p>$200.00 </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="section7-slider-first">
              <div className="section-slider-img">
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/fs2_t2_1aaad4b0-4c65-42c0-ae84-f3ad2af0cd31.jpg?v=1742654216&width=480"
                  alt="title image"
                />
              </div>
              <div className="section-slider-title">
                <div>
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      style={{ color: "red" }}
                    />
                  ))}
                </div>
                <h1>Carie-Gosée H. Verified Buyer</h1>
                <p>
                  These are sooo pretty and very comfy. Perfect color as well. I
                  love wearing these with a neutral top and Chelsea boots.
                  Wicked cute...😍
                </p>
                <hr />
                <div className="section-slider-title-img">
                  <div className="section-slider-title-images">
                    <img
                      src="https://demo-milano.myshopify.com/cdn/shop/files/preview_images/1c125896d5bd4a2cab0b37320373b210.thumbnail.0000000000.jpg?v=1752397862"
                      alt="images title "
                    />
                    <img
                      src="https://demo-milano.myshopify.com/cdn/shop/files/14_3_f4e35f65-6d4b-49c0-b9bb-25af4d58e6fc.webp?v=1742479098&width=240"
                      alt="images title2"
                      className="over-image"
                    />
                  </div>
                  <div className="section-slider-title-images-text">
                    <h1>Waistcoat with pockets</h1>
                    <p>$270.00 </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <button className="slider-btn right " onClick={scrollRight}>
            &#10095;
          </button>
        </div>
      </div>
      <div className="section8">
        <div className="hero2">
          <div className="hero-text2">
            <h1>@Yourinstagram</h1>
            <p>
              Inspire and let yourself be inspired, from one unique fashion to
              another. Instagram shop
            </p>
          </div>
        </div>
        <div className="sliding-wrapper">
          <div className="sliding-track">
            {repeatedSlides.map((item, idx) => (
              <div className="slide" key={idx}>
                {item.type === "video" ? (
                  <video src={item.src} autoPlay muted loop playsInline />
                ) : (
                  <img src={item.src} alt={`slide-${idx}`} />
                )}
                <div className="heart-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section9">
        <div className="hero2">
          <div className="hero-text2">
            <FontAwesomeIcon icon={faBox} />
            <h1>Free Shopping</h1>
            <p>
              Enjoy free worldwide shipping and returns, with customs and duties
              taxes included.
            </p>
          </div>
        </div>
        <div className="hero2">
          <div className="hero-text2">
            <FontAwesomeIcon icon={faRightLong} />
            <h1>Free Returns</h1>
            <p>
              Free returns within 15 days, please make sure the items are in
              undamaged condition.
            </p>
          </div>
        </div>
        <div className="hero2">
          <div className="hero-text2">
            <FontAwesomeIcon icon={faCheckCircle} />
            <h1>Support Online</h1>
            <p>
              We support customers 24/7, send questions we will solve for you
              immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
