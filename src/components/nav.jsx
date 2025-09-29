import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  const [isOvered, setIsOvered] = useState(null);
  return (
    <div className="nav-link">
      <nav className="nav">
        {" "}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setIsOvered("home")}
        >
          <Link to="/">
            Home <FontAwesomeIcon icon={faAngleDown} />
          </Link>
          {isOvered === "home" && (
            <div
              style={{
                position: "absolute",
                top: "32px", // dropdown nav ke niche lagega
                left: 0,
                backgroundColor: "white",
                padding: "15px",
                width: "460px",
                height: "400px",
                borderBottomRightRadius: "8px",
                borderBottomLeftRadius: "8px",
                borderTop: "1px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                zIndex: 1050,
                overflow: "hidden",
                overflowY: "auto",
                // scrollbarWidth: "",
                boxShadow: "5px 5px 15px rgba(5, 5, 5, 0.36)",
              }}
              onMouseLeave={() => setIsOvered(null)}
            >
              <div
                style={{
                  width: "230px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  top: "50px",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
                className=" h1"
              >
                <h1> HomePages</h1>
                <div className="section-icon-naB">
                  <ul>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                  </ul>
                </div>
              </div>
              <div
                style={{
                  width: "230px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  top: "50px",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
                className="h1"
              >
                <h1>HomePages</h1>
                <div className="section-icon-naB">
                  <ul>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setIsOvered("shop")}
        >
          <Link to="/Shop">
            Shop <FontAwesomeIcon icon={faAngleDown} />{" "}
          </Link>
          {isOvered === "shop" && (
            <div
              style={{
                position: "absolute",
                top: "33px", // dropdown nav ke niche lagega
                left: "-20vw",
                backgroundColor: "white",
                padding: "15px",
                width: "70vw",
                height: "400px",
                borderBottomRightRadius: "8px",
                borderBottomLeftRadius: "8px",
                borderTop: "1px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                zIndex: 1050,
                // overflow: "hidden",
                // overflowY: "auto",
                // scrollbarWidth: "",
                boxShadow: "5px 5px 15px rgba(5, 5, 5, 0.36)",
              }}
              onMouseLeave={() => setIsOvered(null)}
            >
              <div
                style={{
                  width: "230px",
                  // height: "200px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  top: "10px",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
                className=" h1"
              >
                <h1> Shop Layouts</h1>
                <div className="section-icon-naB">
                  <ul>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                  </ul>
                </div>
              </div>
              <div
                style={{
                  width: "230px",
                  // height: "200px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  // top: "10px",
                  gap: "20px",
                  alignItems: "flex-start",
                  marginTop: "-40px",
                }}
                className="h1"
              >
                <h1>Shop pages</h1>
                <div className="section-icon-naB">
                  <ul>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                  </ul>
                </div>
              </div>
              <div
                style={{
                  width: "45vw",
                  display: "flex",
                  gap: "40px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="img-hover-shop1">
                  <button
                    style={{
                      backgroundColor: "gray",
                      bottom: "30px",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "20px",
                      width: "100px",
                      height: "40px",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Demin
                  </button>
                </div>
                <div className="img-hover-shop2">
                  <button
                    style={{
                      backgroundColor: "gray",
                      bottom: "30px",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "20px",
                      width: "100px",
                      height: "40px",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Crop-Top
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setIsOvered("product")}
        >
          <Link to="/Product">
            Product <FontAwesomeIcon icon={faAngleDown} />{" "}
          </Link>
          {isOvered === "product" && (
            <div
              style={{
                position: "absolute",
                top: "32px", // dropdown nav ke niche lagega
                left: 0,
                backgroundColor: "white",
                padding: "15px",
                width: "460px",
                height: "400px",
                borderBottomRightRadius: "8px",
                borderBottomLeftRadius: "8px",
                borderTop: "1px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                zIndex: 1050,
                overflow: "hidden",
                overflowY: "auto",
                // scrollbarWidth: "",
                boxShadow: "5px 5px 15px rgba(5, 5, 5, 0.36)",
              }}
              onMouseLeave={() => setIsOvered(null)}
            >
              <div
                style={{
                  width: "230px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  top: "50px",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
                className=" h1"
              >
                <h1> product product</h1>
                <div className="section-icon-naB">
                  <ul>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                  </ul>
                </div>
              </div>
              <div
                style={{
                  width: "230px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  top: "50px",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
                className="h1"
              >
                <h1>HomePages</h1>
                <div className="section-icon-naB">
                  <ul>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setIsOvered("pages")}
        >
          <Link to="/Pages">
            Pages <FontAwesomeIcon icon={faAngleDown} />{" "}
          </Link>
          {isOvered === "pages" && (
            <div
              style={{
                position: "absolute",
                top: "32px", // dropdown nav ke niche lagega
                left: 0,
                backgroundColor: "white",
                padding: "15px",
                width: "460px",
                height: "400px",
                borderBottomRightRadius: "8px",
                borderBottomLeftRadius: "8px",
                borderTop: "1px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                zIndex: 1050,
                overflow: "hidden",
                overflowY: "auto",
                // scrollbarWidth: "",
                boxShadow: "5px 5px 15px rgba(5, 5, 5, 0.36)",
              }}
              onMouseLeave={() => setIsOvered(null)}
            >
              <div
                style={{
                  width: "230px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  top: "50px",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
                className=" h1"
              >
                <h1> pages product</h1>
                <div className="section-icon-naB">
                  <ul>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                  </ul>
                </div>
              </div>
              <div
                style={{
                  width: "230px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  top: "50px",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
                className="h1"
              >
                <h1>HomePages</h1>
                <div className="section-icon-naB">
                  <ul>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setIsOvered("blogs")}
        >
          <Link to="/Blog">
            Blogs <FontAwesomeIcon icon={faAngleDown} />
          </Link>
          {isOvered === "blogs" && (
            <div
              style={{
                position: "absolute",
                top: "32px", // dropdown nav ke niche lagega
                left: 0,
                backgroundColor: "white",
                padding: "15px",
                width: "460px",
                height: "400px",
                borderBottomRightRadius: "8px",
                borderBottomLeftRadius: "8px",
                borderTop: "1px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                zIndex: 1050,
                overflow: "hidden",
                overflowY: "auto",
                // scrollbarWidth: "",
                boxShadow: "5px 5px 15px rgba(5, 5, 5, 0.36)",
              }}
              onMouseLeave={() => setIsOvered(null)}
            >
              <div
                style={{
                  width: "230px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  top: "50px",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
                className=" h1"
              >
                <h1> blogs product</h1>
                <div className="section-icon-naB">
                  <ul>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                  </ul>
                </div>
              </div>
              <div
                style={{
                  width: "230px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  top: "50px",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
                className="h1"
              >
                <h1>HomePages</h1>
                <div className="section-icon-naB">
                  <ul>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setIsOvered("themes")}
        >
          <Link to="/Themes">
            Buy Theme! <FontAwesomeIcon icon={faAngleDown} />{" "}
          </Link>
          {isOvered === "themes" && (
            <div
              style={{
                position: "absolute",
                top: "32px", // dropdown nav ke niche lagega
                left: 0,
                backgroundColor: "white",
                padding: "15px",
                width: "460px",
                height: "400px",
                borderBottomRightRadius: "8px",
                borderBottomLeftRadius: "8px",
                borderTop: "1px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                zIndex: 1050,
                overflow: "hidden",
                overflowY: "auto",
                // scrollbarWidth: "",
                boxShadow: "5px 5px 15px rgba(5, 5, 5, 0.36)",
              }}
              onMouseLeave={() => setIsOvered(null)}
            >
              <div
                style={{
                  width: "230px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  top: "50px",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
                className=" h1"
              >
                <h1> them product</h1>
                <div className="section-icon-naB">
                  <ul>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                  </ul>
                </div>
              </div>
              <div
                style={{
                  width: "230px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  top: "50px",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
                className="h1"
              >
                <h1>HomePages</h1>
                <div className="section-icon-naB">
                  <ul>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                    <li>Main Demo</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
