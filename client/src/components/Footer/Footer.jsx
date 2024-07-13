import React from "react";
import "../../index.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer_container">
          <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>

            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
          </div>

          <div className="footer_column">
            <h3>CUSTOMER POLICIES</h3>

            <a href="#">Contact Us</a>
            <a href="#">FAQ</a>
            <a href="#">T&C</a>
            <a href="#">Terms Of Use</a>
            <a href="#">Track Orders</a>
            <a href="#">Shipping</a>
            <a href="#">Cancellation</a>
            <a href="#">Returns</a>
            <a href="#">Privacy policy</a>
            <a href="#">Grievance Officer</a>
          </div>

          <div className="footer_column">
            <h3>USEFUL LINKS</h3>

            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Site Map</a>
            <a href="#">Corporate Information</a>
            <a href="#">Whitehat</a>
            <a href="#">Cleartrip</a>
          </div>
        </div>
        <hr />

        <div className="copyright">
          © 2024 www.myntra.com. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
