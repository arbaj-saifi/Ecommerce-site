import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div className="hero2">
        <div className="hero-text2">
          <h1>Best Selling</h1>
          <p>
            Unmatched design—superior performance and customer satisfaction in
            one.
          </p>
        </div>
      </div>
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
              <video
                src="https://demo-milano.myshopify.com/cdn/shop/videos/c/vp/1c125896d5bd4a2cab0b37320373b210/1c125896d5bd4a2cab0b37320373b210.HD-1080p-2.5Mbps-51137723.mp4?v=0"
                autoPlay
                muted
                loop
                playsInline
                className="product-video"
              />

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
        <button className="slider-btn right" onClick={scrollRight}>
          &#10095;
        </button>
      </div>
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
