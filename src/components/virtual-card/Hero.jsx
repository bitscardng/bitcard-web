import React from "react";
import Nig from "../../assets/images/nig.png";
import US from "../../assets/images/usa.png";
import { Link } from "react-router-dom";
import Card1 from "../../assets/images/Group 5.png";
import Card2 from "../../assets/images/Group 4.png";
import AppleLogo from "../../assets/images/apple.png";
import playStoreLogo from "../../assets/images/Inner Plugin Iframe.png";

const Hero = () => {
  return (
    <div className="virtual-card-hero py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <h1>Virtual Master Card</h1>
            <p>
              Get all the benefits of the Bitscard mastercard - spend online, in-store and abroad while saving on currency conversion fees, with the
              extra layer of security of the Bitscard digital card.
            </p>

            <div className="hero-exchange-rate-box mt-3">
              <div className="hero-exchange-header">Exchange Rate</div>
              <div className="d-flex justify-content-center mt-2">
                <button className="buy-sell-btn buy-btn-bg">Buy</button>
                <button className="buy-sell-btn bgc-green">Sell</button>
              </div>

              <div className="mt-2">
                <div className="xchange-input-box">
                  <div>
                    <img width="30px" src={Nig} alt="nigeria flag" />
                    <span className="ms-2">NGN</span>
                  </div>
                  <div>74,000</div>
                </div>

                <div className="ms-5 my-1">Rate 740/$</div>

                <div className="xchange-input-box">
                  <div>
                    <img width="30px" src={US} alt="USA flag" />
                    <span className="ms-2">USD</span>
                  </div>
                  <div>100.43</div>
                </div>
              </div>

              <div className="my-4 text-center">
                <Link to="#" className="btn-without-shadow bgc-green">
                  Get started
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div style={{ background: "#FCB721" }} className="hero-color-box mt-5">
              <img src={Card1} alt="card" />
              <img src={Card2} alt="card" />
            </div>

            <div className="app-btn-wrapper mx-auto">
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
    </div>
  );
};

export default Hero;
