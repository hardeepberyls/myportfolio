import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Project_1 = () => {
  useEffect(() => {
    window.slider1();
  });
  return (
    <>
      <div className="row">
        <Navbar />

        <div className="project_title c_space mb-5 text-center">
          <h3>Breathing Science Network</h3>
        </div>
        <div className="col-md-6 mx-auto">
          <div className="carousel ">
            <section id="demos">
              <div className="row">
                <div className="large-12 columns">
                  <div className="owl-carousel owl-theme">
                    <div className="item">
                      <img src="mobile.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="item">
                      <img src="mobile.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="item">
                      <img src="mobile.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="item">
                      <img src="mobile.jpg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="tech_used">
                <h4>Technology used:</h4>
              </div>
            </div>
            <div className="col-md-8">
              <div className="tech_skill">
                <span className="skl">html</span>
              </div>
            </div>

            <div className="col-md-3 mt-3">
              <div className="tech_used">
                <h4>visit website:</h4>
              </div>
            </div>
            <div className="col-md-8 mt-3">
              <div className="visit_website">
                <NavLink
                  to="#"
                  onClick={() => {
                    window.location.href =
                      "https://www.breathingsciencenetwork.com/bsn/";
                  }}
                >
                  Breathing Science Network
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project_1;
