import "./App.css";
import Home from "./components/LandingPage/Home";
import About from "./components/LandingPage/About";
import Work from "./components/LandingPage/Work";
import Testimonial from "./components/LandingPage/Testimonial";
import Contact from "./components/LandingPage/Contact";
import Footer from "./components/LandingPage/Footer";
import Navbar from "./components/LandingPage/Navbar"; 
import Navbar2 from "./components/navbar/navbar"; 
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function HomePage() {

  const { id } = useParams();
  const [userDetails, updatedUserDetails] = useState({});
  const [addNote, updatedAddNote] = useState({ data: "", imgURL: "", isCompleted: false, id: "" });
  const [stateIndex, updatedStateIndex] = useState(0);
  const [isLoading, updateIsLoading] = useState(false);
  const [type, updatedType] = useState("");


  const fetchData = () => {
    updateIsLoading(true);
    let url = window.API_URL + `/user/${id}`;
    axios.get(url)
      .then((res) => {
        updateIsLoading(false);
        updatedUserDetails(res.data.data)
      })
      .catch((err) => {
        updateIsLoading(false);
        alert(err?.response?.data?.msg)
      });
  }


  const rerenderComponentOnChange = () => {
    fetchData();
  }


  return (
    <div className="App">
      {sessionStorage.name ? <Navbar2 name={userDetails.name} rerenderComponentOnChange={rerenderComponentOnChange} /> : <Navbar/> };
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
