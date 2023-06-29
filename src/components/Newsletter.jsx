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
        <div className="row gap-lg-0 gap-4">
          <div className="col-lg">
            <form className="d-flex newsletter-form">
              <input className="newsletter-input" type="text" placeholder="Enter your email" />
              <input className="newsletter-btn" type="submit" value="Subscribe" />
            </form>
          </div>
          <div className="col-lg">
            <div className="social-media-wrapper">
              <a target="_blank" href="#">
                <img src={Tumblr} alt="tumblr" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/bitscard-co/">
                <img src={Linkedin} alt="linkedin" />
              </a>
              <a target="_blank" href="http://Facebook.com/bitscardng">
                <img src={Fb} alt="facebook" />
              </a>
              <a target="_blank" href="#">
                <img src={Insta} alt="http://instagram.com/bitscardng" />
              </a>
              <a target="_blank" href="http://Twitter.com/bitscardng">
                <img src={Twitter} alt="Twitter" />
              </a>
            </div>
            <div className="app-btn-wrapper ms-auto">
              <a target="_blank" href="https://play.google.com/store/apps/details?id=com.val.bitscard">
                <div className="app-btn">
                  <img src={playStoreLogo} alt="google play logo" />
                  <span>Google play</span>
                </div>
              </a>

              <a target="_blank" href="">
                <div className="app-btn">
                  <img src={AppleLogo} alt="apple logo" />
                  <span>App store</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
