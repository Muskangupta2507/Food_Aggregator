import React from "react";
import rest1 from "../../Assets/rest1.jpeg";
import rest2 from "../../Assets/rest2.jpeg";
import rest3 from "../../Assets/rest3.jpg";
import rest4 from "../../Assets/rest4.jfif";
import rest5 from "../../Assets/rest5.jpg";
import rest6 from "../../Assets/rest6.jpg";
import { NavLink } from 'react-router-dom';

const Work = () => {
  const workInfoData = [
    {
      image: rest1,
      title: "Agrawal Restaurant",
      text: "Agrawal Restaurant Near Maheshwari Hospital, National Highway, Mathura",
    },
    {
      image: rest2,
      title: "Loft Cafe",
      text: "Hotel Spiti, near mandi samiti crossing, Nh-2, Mathura-281004",
    },
    {
      image: rest3,
      title: "Rahul Bakers",
      text: "Rahul Bakers 2-B, Krishna Nagar-281004",
    },
    {
      image: rest4,
      title: "Bansal Foods",
      text: "Bansal Foods Near Levis, Krishna Nagar-281004",
    },
    {
      image: rest5,
      title: "UP85",
      text: "UP85 chur-chur naan 102, near Deep nursing home, Krishna Nagar-281004",
    },
    {
      image: rest6,
      title: "Burger King",
      text: "Burger King PlotNo-169, 13, opposite to BSA College, Mathura-281004",
    },
  ];
  return (
    <div className="work-section-wrapper pad-4">
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
          <NavLink to="/restaurant" className="text-decoration-none text-light">
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Work;
