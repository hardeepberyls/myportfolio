import React from "react";
import Navbar from "./app/Navbar";
import Footer from "./app/Footer";
import Tab from "./app/ReactTab";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="row">
        <Navbar />
      </div>

      <div className="col-md-8 mx-auto">
        <div className="about_sctn">
          <div className="about-section">
            <h3>about ourself</h3>
          </div>
          <div className="about-content">
            <p>
              I’m <b>Hardeep Singh</b>, a <b>Frontend developer</b> with a
              passion for creating stunning, user-friendly websites that leave a
              lasting impression. With 6 years of experience in the corporate
              sector, I’ve honed my skills in delivering high-quality web
              solutions that combine modern design with seamless functionality.
              My goal is to craft websites that not only look great but also
              provide an exceptional user experience. I take a user-first
              approach, ensuring every project is both visually appealing and
              technically robust.
            </p>
          </div>
          <div className="about_btn">
            <NavLink to="/about">read more</NavLink>
          </div>
        </div>
      </div>
      <Tab />
      <Footer />
    </>
  );
};
export default Home;
