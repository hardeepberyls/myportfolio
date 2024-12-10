import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import ProgressBar from "@ramonak/react-progress-bar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className="row ">
        <Navbar />

        <div className="contact_banner">
          <h3>about us</h3>
        </div>
        <div className="col-md-10 mx-auto top_space">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="skill">
                <div className="myskill">
                  <h2>skill</h2>
                </div>
                <div className="skill_progress">
                  <div className="html_progress">
                    <h4>html</h4>
                    <div className="progress_html">
                      <ProgressBar
                        completed={75}
                        maxCompleted={100}
                        completedClassName="barCompleted"
                      />
                    </div>
                  </div>

                  <div className="html_progress css_pgs">
                    <h4>css</h4>
                    <div className="progress_html">
                      <ProgressBar
                        completed={85}
                        maxCompleted={100}
                        completedClassName="barCompleted"
                      />
                    </div>
                  </div>

                  <div className="html_progress css_pgs">
                    <h4>javascript</h4>
                    <div className="progress_html">
                      <ProgressBar
                        completed={65}
                        maxCompleted={100}
                        completedClassName="barCompleted"
                      />
                    </div>
                  </div>

                  <div className="html_progress css_pgs">
                    <h4>bootstrap</h4>
                    <div className="progress_html">
                      <ProgressBar
                        completed={80}
                        maxCompleted={100}
                        completedClassName="barCompleted"
                      />
                    </div>
                  </div>

                  <div className="html_progress css_pgs mb-5">
                    <h4>react js</h4>
                    <div className="progress_html">
                      <ProgressBar
                        completed={65}
                        maxCompleted={100}
                        completedClassName="barCompleted"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="user_pic text-center mb-5">
                <img
                  src="assets/images/hardeep.webp"
                  alt="profile_pic"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="about_section">
            <div className="about_user">
              <p>
                I’m <b>Hardeep Singh </b>, a <b>Frontend developer</b> with a
                passion for creating stunning, user-friendly websites that leave
                a lasting impression. With <b>6 years</b> of experience in the
                corporate sector, I’ve honed my skills in delivering
                high-quality web solutions that combine modern design with
                seamless functionality. My goal is to craft websites that not
                only look great but also provide an exceptional user experience.
              </p>
              <p>
                I take a user-first approach, ensuring every project is both
                visually appealing and technically robust.
              </p>
              <p>
                My expertise lies in transforming ideas into interactive,
                user-friendly web interfaces using{" "}
                <b>modern technologies like React, CSS, and JavaScript </b>. My
                mission is to craft websites that not only meet but exceed
                client expectations, delivering seamless and innovative
                solutions.
              </p>
            </div>
            <div className="about_contact pt-3">
              <NavLink to="tel:9810677283">
                contact me &nbsp;<span className="arrow_icon">&#x2192; </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
