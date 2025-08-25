import React from "react";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="section-footer">
          <div className="footer-first">
            <img
              src="https://demo-milano.myshopify.com/cdn/shop/files/logo.png?v=1742650856"
              alt="logo"
            />
            <div className="footer-first-text">
              <h1>We only carry designs we believe in ethically and</h1>
              <h1>
                aesthetically – original, authentic pieces that are made to
              </h1>
              <div className="hover-section">
                <h1>last.</h1>
                <a href="javascript:void(0)">Learn more</a>
              </div>
            </div>
            <div className="section-icon-footer">
              <div className="section-icon-footers-first">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="currentcolor"
                    d="M 12 12 C 14.210938 12 16 10.210938 16 8 C 16 5.789062 14.210938 4 12 4 C 9.789062 4 8 5.789062 8 8 C 8 10.210938 9.789062 12 12 12 Z M 12 6 C 13.105469 6 14 6.894531 14 8 C 14 9.105469 13.105469 10 12 10 C 10.894531 10 10 9.105469 10 8 C 10 6.894531 10.894531 6 12 6 Z M 16 22.03125 L 24 23.976562 L 24 13.484375 C 24 12.160156 23.132812 10.996094 21.867188 10.613281 L 19.765625 9.910156 C 19.921875 9.289062 20 8.648438 20 8.007812 C 20 3.585938 16.417969 0.0078125 12 0.0078125 C 7.582031 0.0078125 4 3.585938 4 8.007812 C 4.003906 8.410156 4.035156 8.816406 4.101562 9.21875 C 3.179688 8.851562 2.132812 8.964844 1.3125 9.519531 C 0.492188 10.078125 0 11.007812 0 12 L 0 21.753906 L 7.984375 24.03125 Z M 7.757812 3.765625 C 10.101562 1.449219 13.875 1.460938 16.207031 3.789062 C 18.539062 6.117188 18.558594 9.890625 16.25 12.242188 L 12 16.398438 L 7.757812 12.25 C 5.414062 9.90625 5.414062 6.105469 7.757812 3.765625 Z M 2 12 C 1.996094 11.664062 2.164062 11.351562 2.445312 11.167969 C 2.738281 10.976562 3.113281 10.949219 3.429688 11.101562 L 4.863281 11.617188 C 5.246094 12.378906 5.75 13.070312 6.351562 13.675781 L 12 19.199219 L 17.65625 13.667969 C 18.214844 13.113281 18.683594 12.476562 19.058594 11.785156 L 21.273438 12.527344 C 21.703125 12.648438 22 13.039062 22 13.488281 L 22 21.4375 L 16 19.96875 L 8.019531 21.96875 L 2 20.246094 Z M 2 12 "
                  ></path>
                </svg>

                <h1> Street Address 2571 Oakridge</h1>
              </div>

              <div className="section-icon-footers-first">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="currentcolor"
                    d="M 13 1 C 13 0.449219 13.449219 0 14 0 C 19.519531 0.0078125 23.992188 4.480469 24 10 C 24 10.550781 23.550781 11 23 11 C 22.449219 11 22 10.550781 22 10 C 21.996094 5.582031 18.417969 2.003906 14 2 C 13.449219 2 13 1.550781 13 1 Z M 14 6 C 16.210938 6 18 7.789062 18 10 C 18 10.550781 18.449219 11 19 11 C 19.550781 11 20 10.550781 20 10 C 19.996094 6.6875 17.3125 4.003906 14 4 C 13.449219 4 13 4.449219 13 5 C 13 5.550781 13.449219 6 14 6 Z M 23.09375 16.738281 C 24.300781 17.949219 24.300781 19.90625 23.09375 21.117188 L 22.183594 22.164062 C 13.992188 30.007812 -5.9375 10.082031 1.78125 1.867188 L 2.933594 0.867188 C 4.144531 -0.304688 6.070312 -0.289062 7.261719 0.90625 C 7.289062 0.9375 9.144531 3.34375 9.144531 3.34375 C 10.285156 4.542969 10.28125 6.429688 9.136719 7.625 L 7.980469 9.082031 C 9.273438 12.226562 11.769531 14.726562 14.910156 16.027344 L 16.375 14.863281 C 17.570312 13.71875 19.457031 13.714844 20.65625 14.855469 C 20.65625 14.855469 23.0625 16.707031 23.09375 16.738281 Z M 21.71875 18.191406 C 21.71875 18.191406 19.324219 16.351562 19.292969 16.320312 C 18.863281 15.894531 18.171875 15.894531 17.742188 16.320312 C 17.71875 16.347656 15.699219 17.957031 15.699219 17.957031 C 15.421875 18.175781 15.050781 18.234375 14.722656 18.109375 C 10.644531 16.589844 7.425781 13.375 5.898438 9.300781 C 5.765625 8.964844 5.820312 8.582031 6.046875 8.300781 C 6.046875 8.300781 7.652344 6.28125 7.679688 6.257812 C 8.105469 5.828125 8.105469 5.136719 7.679688 4.707031 C 7.648438 4.675781 5.808594 2.28125 5.808594 2.28125 C 5.371094 1.894531 4.710938 1.910156 4.296875 2.320312 L 3.148438 3.320312 C -2.496094 10.105469 14.777344 26.417969 20.722656 20.800781 L 21.632812 19.75 C 22.074219 19.339844 22.113281 18.648438 21.71875 18.191406 Z M 21.71875 18.191406 "
                  ></path>
                </svg>

                <h1> +1 (973) 435-3638</h1>
              </div>

              <div className="section-icon-footers-first">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="currentcolor"
                    d="M 19 1 L 5 1 C 2.238281 1.003906 0.00390625 3.238281 0 6 L 0 18 C 0.00390625 20.761719 2.238281 22.996094 5 23 L 19 23 C 21.761719 22.996094 23.996094 20.761719 24 18 L 24 6 C 23.996094 3.238281 21.761719 1.003906 19 1 Z M 5 3 L 19 3 C 20.226562 3.003906 21.324219 3.75 21.78125 4.886719 L 14.121094 12.546875 C 12.949219 13.714844 11.050781 13.714844 9.878906 12.546875 L 2.21875 4.886719 C 2.675781 3.75 3.773438 3.003906 5 3 Z M 19 21 L 5 21 C 3.34375 21 2 19.65625 2 18 L 2 7.5 L 8.464844 13.960938 C 10.417969 15.910156 13.582031 15.910156 15.535156 13.960938 L 22 7.5 L 22 18 C 22 19.65625 20.65625 21 19 21 Z M 19 21 "
                  ></path>
                </svg>
                <h1>info@fashionwomen.com</h1>
              </div>
            </div>
          </div>
          <div className="footer-second">
            <h1>Our Company</h1>
            <div className="section-icon-nav">
              <ul>
                <li>About Us</li>
                <li>Context Us</li>
                <li>Our Store</li>
                <li>Store Lucation</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div className="footer-second">
            <h1>Quick links</h1>
            <div className="section-icon-nav">
              <ul>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Sale</li>
                <li>Size guide</li>
                <li>Wishlist</li>
                <li>Compare</li>
              </ul>
            </div>
          </div>
          <div className="footer-first">
            <h2>Sign Up to Newsletter</h2>
            <div className="footer-first-texts">
              <h1>Subscribe for store updates and discounts.</h1>
              <div className="section-btn-footer">
                <input type="text" placeholder="Enter Your Email..." />
                <button className="footer-btn">Sign Up</button>
              </div>
              <div className="section-text-p">
                <p>
                  ***By entering the e-mail you accept the terms and conditions
                  and the privacy policy.
                </p>
              </div>
              <div className="section-icon-footer-social">
                <i>
                  {" "}
                  <FontAwesomeIcon icon={faFacebook} />
                </i>
                <i>
                  <FontAwesomeIcon icon={faInstagram} />
                </i>
                <i>
                  {" "}
                  <FontAwesomeIcon icon={faTiktok} />
                </i>
                <i>
                  {" "}
                  <FontAwesomeIcon icon={faYoutube} />
                </i>
                <i>
                  {" "}
                  <FontAwesomeIcon icon={faPinterest} />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyRight">
        <h1>
          This is an Ecommerce website built for learning and practice. only
          Created by.
          <span>
            <a href="https://github.com/arbaj-saifi">Arbaj Khan</a>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
