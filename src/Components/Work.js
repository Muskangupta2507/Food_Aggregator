import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Restaurant 1",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: PickMeals,
      title: "Restaurant 2",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: PickMeals,
      title: "Restaurant 3",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: PickMeals,
      title: "Restaurant 4",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Order Now</p>
        <h1 className="primary-heading">Best Restaurants</h1>
        <h1 className="primary-heading">Near You</h1>
        <p className="primary-text">
          Best Restaurants in your city rated by our Trusteed Customer reviews and Qualified Anaylsts.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
