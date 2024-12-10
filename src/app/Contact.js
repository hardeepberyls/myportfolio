import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import Mailbutton from "./Mailbutton";
import Callbutton from "./Callbutton";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div className="row">
        <Navbar />

        <div className="contact_banner">
          <h3>contact us</h3>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.3861620573944!2d77.28305977388472!3d28.407602540769453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cddd615937a83%3A0xf9c55fcbef492aff!2sPocket%20C%2C%20Sanjay%20Gandhi%20Memorial%20Nagar%2C%20Sector%2048%2C%20Faridabad%2C%20Haryana%20121012!5e0!3m2!1sen!2sin!4v1733811162068!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact_address">
              <div className="address">
                <h3>Get in touch</h3>
                <p>
                  Big dreams start with small conversations. Share your vision,
                  and let’s work together to bring it to life. Get in touch
                  today and take the first step toward something amazing.
                </p>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="addrs">
                    <h4>Address:</h4>
                    <p>FCA-1077/56, Block-C, SGM Nagar NIT Faridabad</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contme mb-5">
                    <h4>Call us:</h4>
                    <Callbutton telto="tel:9810677283" />
                  </div>

                  <div className="contemail">
                    <h4>Email:</h4>
                    <Mailbutton mailto="mailto:hardeepbhimra1992@gmail.com" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
