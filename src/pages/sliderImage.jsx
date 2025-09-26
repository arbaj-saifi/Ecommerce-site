import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductImages = ({ image }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="left-image" style={{ display: "flex", gap: "20px" }}>
      {/* Thumbnails */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          width: "70px",
        }}
      >
        {image.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            style={{
              height: "100px",
              objectFit: "cover",
              cursor: "pointer",
              border:
                activeIndex === index ? "2px solid black" : "1px solid #ccc",
              borderRadius: "5px",
            }}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>

      {/* Big Image Swiper */}
      <div style={{ flex: 1, borderRadius: "20px" }}>
        <Swiper
          modules={[Navigation]}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          initialSlide={activeIndex}
          style={{ width: "550px", height: "600px", borderRadius: "20px" }}
        >
          {image.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Product ${index}`}
                style={{
                  width: "100%",
                  height: "600px",
                  // padding: "10px",
                  objectFit: "fill",
                  marginTop: "-40px",
                  borderRadius: "20px",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductImages;
