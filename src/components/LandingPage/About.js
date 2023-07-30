import React from "react";
import AboutBackground from "../../Assets/about-background.png";
import AboutBackgroundImage from "../../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="about" className="about-section-container pad-4">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Good food. 
        <br></br>
        Good mood.
        </h1>
        <p className="primary-text">
        Eating a healthy diet is all about feeling great, having more energy, improving your health, and boosting your mood. 
        Good nutrition, physical activity, and healthy body weight are essential parts of a person’s overall health and well-being.
        </p>
        <p className="primary-text">
          So, let's dive into the world of healthy and delicious meals.
        </p>
        <div className="about-buttons-container">
          <a
            href="https://en.wikipedia.org/wiki/Healthy_diet"
            style={{ textDecoration: "none" }}
          >
            <button className="secondary-button">Learn More</button>
          </a>
          <a
            href="https://www.youtube.com/watch?v=NqV1Ig4_nfI"
            style={{ textDecoration: "none" }}
          >
            <button className="watch-video-button">
              <BsFillPlayCircleFill /> Watch Video
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
