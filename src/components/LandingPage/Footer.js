import React from "react";
import Logo from "../../Assets/dine_logo1.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper pad-4">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
          <p>Dine<span>Hub</span></p>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
        <span><a href="#home">Home</a></span>
          <span><a href="#about">About</a></span>
          <span><a href="#test">Testimonial</a></span>
          <span><a href="#">Your Cart</a></span>
        </div>
        <div className="footer-section-columns">
          <span><a href="#">244-5333-7783</a></span>
          <span><a href="#">hello@food.com</a></span>
          <span><a href="#">press@food.com</a></span>
          <span><a href="#">contact@food.com</a></span>
        </div>
        <div className="footer-section-columns">
          <span><a href="#">Terms & Conditions</a></span>
          <span><a href="#">Privacy Policy</a></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
