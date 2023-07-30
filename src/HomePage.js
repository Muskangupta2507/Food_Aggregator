import "./App.css";
import Home from "./components/LandingPage/Home";
import About from "./components/LandingPage/About";
import Work from "./components/LandingPage/Work";
import Testimonial from "./components/LandingPage/Testimonial";
import Contact from "./components/LandingPage/Contact";
import Footer from "./components/LandingPage/Footer";
import Navbar from "./components/LandingPage/Navbar";

function HomePage() {
  return (
    <div className="App">
      <Navbar />
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
