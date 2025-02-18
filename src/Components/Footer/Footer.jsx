import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import user_icon from "../../assets/user_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>
            I'm a student of K21, majoring in Software Engineering at Saigon
            University.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© 2025 Le Huy Tin. All rights reserved.</p>
        </div>
        <div className="footer-bottom-right">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
