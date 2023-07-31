import React from "react";
import BannerBackground from "../../Assets/home-banner-background.png";
import BannerImage from "../../Assets/home-banner-image.png";
// import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container" id="home">
      {/* <Navbar /> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Delivering Happiness
          </h1>
          <p className="primary-text">
            Don't want to cook ? 
            <br></br>
            No problem order tasty meals easily.
          </p>

          <a href="#order" className="text-decoration-none">
          <button className="secondary-button">
            
            Order Now <FiArrowRight />{" "}
          </button>
          </a>
          
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
