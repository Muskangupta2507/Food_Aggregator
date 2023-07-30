import React from "react";
import ProfilePic from "../../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div id="test" className="work-section-wrapper pad-4">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">Rating and Reviews</h1>
        <p className="primary-text">
        Hey everyone!
        Positive reviews from awesome customers like you help new visitors to feel confident about choosing Dine Hub. 
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          It is an amazing experience. Delivery is on time.
          The staff is very polite and responsible.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Rajesh Kumar</h2>
      </div>
    </div>
  );
};

export default Testimonial;
