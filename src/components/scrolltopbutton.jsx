import React, { useEffect, useState } from "react";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollToTopButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 cursor-pointer rounded-full overflow-hidden shadow-lg"
      style={{
        width: "70px",
        height: "70px",

        backgroundColor: "white",
      }}
    >
      {/* Fill Background */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: `${scrollProgress}%`, // 👈 Fill from bottom → top
          backgroundColor: "black",
          transition: "height 0.2s ease-out",
        }}
      ></div>

      {/* Icon (always visible on top) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <FontAwesomeIcon
          icon={faAngleDoubleUp}
          className="text-white text-2xl"
          style={{
            color: scrollProgress > 50 ? "white" : "black",
            transition: "all 0.3s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

export default ScrollToTopButton;
