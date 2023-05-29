import React from "react";
import Nig from "../../assets/images/nig.png";
import US from "../../assets/images/usa.png";
import { Link } from "react-router-dom";
import ArrowDown from "../../assets/images/arrow down.png";
import AppDownloadBtn from "../AppDownloadBtn";
import phone from "../../assets/images/iPhone13.png";
import World from "../../assets/images/world.png";
import country1 from "../../assets/images/kenya.png";
import country2 from "../../assets/images/nigeria.png";
import country3 from "../../assets/images/canada.png";
import country4 from "../../assets/images/democratic-republic-of-congo.png";
import country5 from "../../assets/images/united-states.png";
import country6 from "../../assets/images/ghana.png";
import country7 from "../../assets/images/united-kingdom.png";
import country8 from "../../assets/images/european-union.png";

const Hero = () => {
  return (
    <div className="py-3 hero">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Global Bank Account</h1>
            <p>Open a US Dollar, Nigerian Naira, Canadian Dollar, United Kingdom Pounds account in less than 1 minutes.</p>

            <div className="mt-3 position-relative image-container">
              <img src={phone} alt="phone" />
              <img src={World} alt="world map" />
              <div className="text-box">
                <div className="flag-wrapper ">
                  <img src={country1} alt="a country's flag" />
                  <img src={country2} alt="a country's flag" />
                  <img src={country3} alt="a country's flag" />
                  <img src={country4} alt="a country's flag" />
                  <img src={country5} alt="a country's flag" />
                  <img src={country6} alt="a country's flag" />
                  <img src={country7} alt="a country's flag" />
                  <img src={country8} alt="a country's flag" />
                </div>
                <p> Request money in over 20+ currencies and counting...</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="hero-exchange-rate-box mt-3 mx-auto">
              <div style={{ background: "#219DFC" }} className="hero-exchange-header">
                Exchange Rate
              </div>
              <div className="d-flex justify-content-center mt-2">
                <button className="buy-sell-btn buy-btn-bg">Buy</button>
                <button className="buy-sell-btn bgc-green">Sell</button>
              </div>

              <div className="mt-2">
                <div className="xchange-input-box">
                  <div>
                    <img width="30px" src={Nig} alt="nigeria flag" />
                    <span className="ms-2">NGN</span>
                    <img className="ms-2" width="10" src={ArrowDown} alt="" />
                  </div>
                  <div>74,000</div>
                </div>

                <div className="ms-5 my-1">Rate 740/$</div>

                <div className="xchange-input-box">
                  <div>
                    <img width="30px" src={US} alt="USA flag" />
                    <span className="ms-2">USD</span>
                    <img className="ms-2" width="10" src={ArrowDown} alt="" />
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

            <div className="app-btn-wrapper mx-auto">
              <AppDownloadBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
