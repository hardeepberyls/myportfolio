import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import GalleryLightbox from "./GalleryLightbox";

const Project_1 = () => {
  useEffect(() => {
    window.slider1();
  });
  return (
    <>
      <div className="row">
        <Navbar />

        <div className="project_title c_space mb-5 text-center">
          <h3>Barossa Bushwalks</h3>
        </div>
        <div className="col-md-8 mx-auto">
          <section className="overview_section">
            <div className="projectTitle">
              <h3>Project Overview:</h3>
            </div>
            <div className="overview_content">
              <p>
                Barossa Bushwalks is a user-friendly hiking guide map designed
                for visitors to the Barossa Valley. It provides a detailed
                overview of all hiking locations in the region, complete with
                important information to help hikers plan their trips
                effectively. The map features interactive flags to pinpoint
                hiking spots, making navigation seamless and intuitive.
              </p>
            </div>
          </section>

          <section className="tech_section">
            <div className="tech_used">
              <h4>Tech Stack:</h4>
            </div>
            <div className="tech_skill">
              <span className="html">html</span>
              <span className="css">css</span>
              <span className="bootstrap">bootstrap</span>
            </div>
          </section>

          <section className="feature_section">
            <div className="projectTitle">
              <h3>Key Features:</h3>
            </div>
            <div className="kf_content">
              <ol>
                <li>
                  <h6>Difficulty Levels:</h6>
                </li>
                <ul>
                  <li>
                    Each hiking trail is categorized into <b>Easy</b>,
                    <b>Moderate</b>, and <b>Difficult</b>, allowing users to
                    choose trails that suit their fitness levels and
                    preferences.
                  </li>
                </ul>
                <li>
                  <h6>Accessibility Information:</h6>
                </li>
                <ul>
                  <li>Highlights whether a hiking trail is:</li>
                  <ul>
                    <li>Dog-friendly</li>
                    <li>Wheelchair accessible</li>
                  </ul>
                </ul>
                <li>
                  <h6>Hiking Details:</h6>
                </li>
                <ul>
                  <li>
                    Displays the <b>Distance</b> between trails and the
                    estimated <b>Time Required</b> to complete each hike.
                  </li>
                </ul>
              </ol>
            </div>
          </section>

          <section className="demo_section">
            <div className="projectTitle">
              <h3>Demo:</h3>
            </div>
            <div className="demo_link">
              <p>
                Barossa Bushwalks:{" "}
                <NavLink to="https://www.barossabushwalks.com/">
                  https://www.barossabushwalks.com/
                </NavLink>
              </p>
            </div>
          </section>

          <section className="gallery_section">
            <div className="projectTitle">
              <h3>Gallery:</h3>
            </div>
            <div className="carousel ">
              {/* <section id="demos">
                <div className="row">
                  <div className="large-12 columns">
                    <div className="owl-carousel owl-theme">
                      <div className="item">
                        <img
                          src="../assets/images/barossa_screenshots/full-page.png"
                          alt="full page"
                          className="img-fluid"
                        />
                      </div>
                      <div className="item">
                        <img
                          src="../assets/images/barossa_screenshots/Respectful-Hiking-Barossa.png"
                          alt="Respectful-Hiking-Barossa"
                          className="img-fluid"
                        />
                      </div>
                      <div className="item">
                        <img
                          src="../assets/images/barossa_screenshots/The-Lavender-Federation-Trail-Barossa.png"
                          alt="The-Lavender-Federation-Trail-Barossa"
                          className="img-fluid"
                        />
                      </div>
                      <div className="item">
                        <img
                          src="../assets/images/barossa_screenshots/Bites-for-Your-Hike-Barossa.png"
                          alt="Bites-for-Your-Hike-Barossa"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}

              <GalleryLightbox/>
            </div>
          </section>

          {/* <div className="col-md-3 mt-3">
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
            </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project_1;
