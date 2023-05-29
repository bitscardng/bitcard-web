import React from "react";
import Insta from "../assets/images/insta.png";
import Fb from "../assets/images/fb.png";
import Linkedin from "../assets/images/linkedin.png";
import Twitter from "../assets/images/twitter.png";
import Tumblr from "../assets/images/tumblr.png";
import playStoreLogo from "../assets/images/Inner Plugin Iframe.png";
import AppleLogo from "../assets/images/apple.png";

const Newsletter = () => {
  return (
    <section className="py-4 newsletter-section">
      <div className="container">
        <h4 className="fw-bold">Stay updated with Bitscard by signing up for our newsletter</h4>
        <div className="row">
          <div className="col">
            <form className="d-flex newsletter-form">
              <input className="newsletter-input" type="text" placeholder="Enter your email" />
              <input className="newsletter-btn" type="submit" value="Subscribe" />
            </form>
          </div>
          <div className="col">
            <div className="social-media-wrapper">
              <a target="_blank" href="#">
                <img src={Tumblr} alt="tumblr" />
              </a>
              <a target="_blank" href="#">
                <img src={Linkedin} alt="linkedin" />
              </a>
              <a target="_blank" href="#">
                <img src={Fb} alt="facebook" />
              </a>
              <a target="_blank" href="#">
                <img src={Insta} alt="instagram" />
              </a>
              <a target="_blank" href="#">
                <img src={Twitter} alt="Twitter" />
              </a>
            </div>
            <div className="app-btn-wrapper ms-auto">
              <div className="app-btn">
                <img src={playStoreLogo} alt="google play logo" />
                <span>Google play</span>
              </div>

              <div className="app-btn">
                <img src={AppleLogo} alt="apple logo" />
                <span>App store</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
