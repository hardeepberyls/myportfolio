import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Tab from "../pages/ReactTab";
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
            <h3>
              <span className="abt">abo</span>ut ourself
            </h3>
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

      <section>
        <div className="col-md-8 mx-auto">
          <div className="title">
            <h2><span>Fea</span>tured Projects</h2>
          </div>
        </div>
      </section>
      <Tab />
      <Footer />
    </>
  );
};
export default Home;
