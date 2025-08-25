import React, { useRef } from "react";
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
  return (
    <div>
      <div className="product">
        <button className="slider-btn left" onClick={scrollLeft}>
          &#10094;
        </button>
        <div className="slider" ref={sliderRef}>
          <div className="product-list">
            <div className="product-sale">
              <img
                src="https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=360"
                alt="image-sale"
              />
              <img
                src="https://demo-milano.myshopify.com/cdn/shop/files/4_4_45faf918-dd6f-4e39-be59-dc66e7becead.webp?v=1742481531&width=660"
                alt="imgae-sale2"
                className="over-image"
              />
              <div className="overflow-icon">
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
              <button className="bottom-btn">Select Option </button>
            </div>
            <div className="product-details">
              <h1>high neck Jumper</h1>
              <div>
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
              </div>
              <p>$250.00</p>
              <div className="circle-image">
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=360"
                  alt="image-circle"
                />
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/4_5_49f2ee17-4cbe-4ed7-9abd-146d3f9ac54e.webp?v=1742481512"
                  alt="images-circle"
                />
              </div>
            </div>
          </div>
          <div className="product-list">
            <div className="product-sale">
              <img
                src="https://demo-milano.myshopify.com/cdn/shop/files/preview_images/1c125896d5bd4a2cab0b37320373b210.thumbnail.0000000000.jpg?v=1752397862&width=480"
                alt="image-sale"
              />
              <img
                src="https://demo-milano.myshopify.com/cdn/shop/files/15_5_269aa495-12a9-46de-9e89-d83e379fa809.webp?v=1752397915"
                alt=""
              />
              <img
                src="https://demo-milano.myshopify.com/cdn/shop/files/15_5_269aa495-12a9-46de-9e89-d83e379fa809.webp?v=1752397915s"
                alt="image-sale2"
                className="over-image"
              />
              <div className="overflow-icon">
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
              <button className="bottom-btn">Select Option </button>
            </div>
            <div className="product-details">
              <h1>Basic blazer </h1>
              <div>
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
              </div>
              <p>$225.00</p>
              <div className="circle-image">
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/15_1.webp?v=1752397915"
                  alt="image-circle"
                />
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/15_5_269aa495-12a9-46de-9e89-d83e379fa809.webp?v=1752397915"
                  alt="images-circle"
                />
              </div>
            </div>
          </div>
          <div className="product-list">
            <div className="product-sale">
              <img
                src="https://demo-milano.myshopify.com/cdn/shop/files/13_5_9c0bcbd4-c27f-4289-be76-af9c5c06aedf.webp?v=1742479315"
                alt="image-sale"
              />
              <img
                src="https://demo-milano.myshopify.com/cdn/shop/files/13_7_5b152aaa-fad5-4d7d-bfbe-3f498bd4fe67.webp?v=1742479315&width=660"
                alt="image-sale2"
                className="over-image"
              />
              <div className="overflow-icon">
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
              <button className="bottom-btn">Select Option </button>
            </div>
            <div className="product-details">
              <h1>Belted blazer dress</h1>
              <div>
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
              </div>
              <p>$300.00</p>
              <div className="circle-image">
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/13_5_9c0bcbd4-c27f-4289-be76-af9c5c06aedf.webp?v=17424793150"
                  alt="image-circle"
                />
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/13_1_5644aee9-7e1a-4296-baac-e448257d812c.webp?v=1742479315"
                  alt="images-circle"
                />
              </div>
            </div>
          </div>
          <div className="product-list">
            <div className="product-sale">
              <img
                src="https://demo-milano.myshopify.com/cdn/shop/files/5_1_23fe5fb3-4888-4e7c-baf4-b6919271d29d.webp?v=1742481673&width=660"
                alt="image-sale"
              />
              <img
                src="https://demo-milano.myshopify.com/cdn/shop/files/5_3_9014796c-913f-44f8-b335-f81f00f0941a.webp?v=1742481723&width=660"
                alt="image-sale2"
                className="over-image"
              />
              <div className="overflow-icon">
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
              <button className="bottom-btn">Select Option </button>
            </div>
            <div className="product-details">
              <h1>Zip neck jumper</h1>
              <div>
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
              </div>
              <p>$200.00</p>
              <div className="circle-image">
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/5_1_23fe5fb3-4888-4e7c-baf4-b6919271d29d.webp?v=1742481673&width=660"
                  alt="image-circle"
                />
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/5_5_227d3051-829a-4ccf-8281-d96e0c31d539.webp?v=1742481673"
                  alt="images-circle"
                />
              </div>
            </div>
          </div>
          <div className="product-list">
            <div className="product-sale">
              <img
                src="https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=360"
                alt="image-sale"
              />
              <div className="overflow-icon">
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
              <button className="bottom-btn">Select Option </button>
            </div>
            <div className="product-details">
              <h1>high neck Jumper</h1>
              <div>
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
              </div>
              <p>$250.00</p>
              <div className="circle-image">
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=360"
                  alt="image-circle"
                />
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/4_5_49f2ee17-4cbe-4ed7-9abd-146d3f9ac54e.webp?v=1742481512"
                  alt="images-circle"
                />
              </div>
            </div>
          </div>
          <div className="product-list">
            <div className="product-sale">
              <img
                src="https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=360"
                alt="image-sale"
              />
              <div className="overflow-icon">
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
              <button className="bottom-btn">Select Option </button>
            </div>
            <div className="product-details">
              <h1>high neck Jumper</h1>
              <div>
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
              </div>
              <p>$250.00</p>
              <div className="circle-image">
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=360"
                  alt="image-circle"
                />
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/4_5_49f2ee17-4cbe-4ed7-9abd-146d3f9ac54e.webp?v=1742481512"
                  alt="images-circle"
                />
              </div>
            </div>
          </div>
          <div className="product-list">
            <div className="product-sale">
              <img
                src="https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=360"
                alt="image-sale"
              />
              <div className="overflow-icon">
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
              <button className="bottom-btn">Select Option </button>
            </div>
            <div className="product-details">
              <h1>high neck Jumper</h1>
              <div>
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
              </div>
              <p>$250.00</p>
              <div className="circle-image">
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=360"
                  alt="image-circle"
                />
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/4_5_49f2ee17-4cbe-4ed7-9abd-146d3f9ac54e.webp?v=1742481512"
                  alt="images-circle"
                />
              </div>
            </div>
          </div>
          <div className="product-list">
            <div className="product-sale">
              <img
                src="https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=360"
                alt="image-sale"
              />
              <div className="overflow-icon">
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
              <button className="bottom-btn">Select Option </button>
            </div>
            <div className="product-details">
              <h1>high neck Jumper</h1>
              <div>
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
              </div>
              <p>$250.00</p>
              <div className="circle-image">
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=360"
                  alt="image-circle"
                />
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/4_5_49f2ee17-4cbe-4ed7-9abd-146d3f9ac54e.webp?v=1742481512"
                  alt="images-circle"
                />
              </div>
            </div>
          </div>
          <div className="product-list">
            <div className="product-sale">
              <img
                src="https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=360"
                alt="image-sale"
              />
              <div className="overflow-icon">
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
              <button className="bottom-btn">Select Option </button>
            </div>
            <div className="product-details">
              <h1>high neck Jumper</h1>
              <div>
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
              </div>
              <p>$250.00</p>
              <div className="circle-image">
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=360"
                  alt="image-circle"
                />
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/4_5_49f2ee17-4cbe-4ed7-9abd-146d3f9ac54e.webp?v=1742481512"
                  alt="images-circle"
                />
              </div>
            </div>
          </div>
          <div className="product-list">
            <div className="product-sale">
              <img
                src="https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=360"
                alt="image-sale"
              />
              <div className="overflow-icon">
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
              <button className="bottom-btn">Select Option </button>
            </div>
            <div className="product-details">
              <h1>high neck Jumper</h1>
              <div>
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
              </div>
              <p>$250.00</p>
              <div className="circle-image">
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=360"
                  alt="image-circle"
                />
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/4_5_49f2ee17-4cbe-4ed7-9abd-146d3f9ac54e.webp?v=1742481512"
                  alt="images-circle"
                />
              </div>
            </div>
          </div>
          <div className="product-list">
            <div className="product-sale">
              <img
                src="https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=360"
                alt="image-sale"
              />
              <div className="overflow-icon">
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
              <button className="bottom-btn">Select Option </button>
            </div>
            <div className="product-details">
              <h1>high neck Jumper</h1>
              <div>
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
              </div>
              <p>$250.00</p>
              <div className="circle-image">
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=360"
                  alt="image-circle"
                />
                <img
                  src="https://demo-milano.myshopify.com/cdn/shop/files/4_5_49f2ee17-4cbe-4ed7-9abd-146d3f9ac54e.webp?v=1742481512"
                  alt="images-circle"
                />
              </div>
            </div>
          </div>
        </div>
        <button className="slider-btn right right " onClick={scrollRight}>
          &#10095;
        </button>
      </div>
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
