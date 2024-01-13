import React, { useContext } from "react";
import nig from "../../assets/images/nig.png";
import usa from "../../assets/images/usa.png";
import Fone from "../../assets/images/iPhone.png";
import Bitcoin from "../../assets/images/bitcoin-black.png";
import Tether from "../../assets/images/tether-usdt-logo.png";
import AppleLogo from "../../assets/images/apple.png";
import playStoreLogo from "../../assets/images/Inner Plugin Iframe.png";
import Blackthron from "../../assets/images/blackthorn.png";
import Mastercard from "../../assets/images/mastercard.png";
import Bitnob from "../../assets/images/bitnob.png";
import ArrowDown from "../../assets/images/arrow down.png";
import { ModalContext } from "../../App";
import axios from "axios";
import { useEffect, useState } from "react";

const Hero = () => {
  const [data, setData] = useState({});
  const [currentRate, setCurrentRate] = useState();
  useEffect(() => {
    axios
      .get("https://api.bitscard.app/api/v1/crypto-transactions/bitscard-rates")
      .then((res) => {
        setData(res?.data?.data);
        setCurrentRate(res?.data?.data?.btc?.buy);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);
  const [modal, setModal] = useContext(ModalContext);
  const showModal = () => {
    setModal(true);
  };
  return (
    <>
      <div className="hero py-4 mt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <h1>Do more Send,spend, bank, and trade gift cards or crypto</h1>
              <div>
                Neo banking built for you - USD Account, virtual cards, virtual
                account, gift cards and crypto trading...
              </div>

              <div className="exchange-rate-box mt-3 mx-lg-0 mx-auto">
                <div className="exchange-rate-box-header">Exchange Rate</div>
                <ul
                  class="nav nav-pills mb-3 mt-2 m-auto w-full d-flex justify-content-center"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                      onClick={() => setCurrentRate(data?.btc?.buy)}
                    >
                      Buy
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                      onClick={() => setCurrentRate(data?.btc?.sell)}
                    >
                      Sell
                    </button>
                  </li>
                </ul>
                <div className="input-box-wrapper align-items-center mt-3">
                  <div>
                    <img width="30px" src={nig} alt="nigeria flag" />
                    <span className="ms-2">NGN</span>
                    <img className="ms-2" width="10" src={ArrowDown} alt="" />
                  </div>
                  <div>74,000</div>
                </div>
                <div className="ms-5 my-1">Rate {currentRate}/$</div>

                <div className="input-box-wrapper align-items-center">
                  <div>
                    <img width="30px" src={usa} alt="nigeria flag" />
                    <span className="ms-2">USD</span>
                    <img className="ms-2" width="10" src={ArrowDown} alt="" />
                  </div>
                  <div>100.43</div>
                </div>
                <div className="my-4 text-center">
                  <button
                    onClick={showModal}
                    className="btn-without-shadow bgc-green"
                  >
                    Get started
                  </button>
                </div>
              </div>

              <div className="icon-btn-wrapper mx-lg-0 mx-auto">
                {/*  */}
                <div className="icon-btn">
                  <img src={Tether} alt="bitcoin logo" /> <span>730/$</span>
                </div>

                <div className="icon-btn">
                  <img src={Bitcoin} alt="bitcoin logo" /> <span>728/$</span>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="purple-box-wrapper">
                <img
                  className="phone-img"
                  width="400px"
                  src={Fone}
                  alt="iphone"
                />
                <div className="purple-box mx-auto"></div>
              </div>

              <div className="app-btn-wrapper mx-auto">
                <a
                  href="https://play.google.com/store/apps/details?id=com.production.bitscard"
                  className="app-btn"
                >
                  <img src={playStoreLogo} alt="google play logo" />
                  <span>Google play</span>
                </a>

                <div className="app-btn">
                  <img src={AppleLogo} alt="apple logo" />
                  <span>App store</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hero-footer */}
      <div className="hero-footer">
        <span>
          <img src={Blackthron} alt="" />
        </span>
        <span>
          <img src={Mastercard} alt="" />
        </span>

        <div
          style={{ backgroundImage: `url(${Bitnob})` }}
          className="hero-footer-box"
        ></div>
      </div>
    </>
  );
};

export default Hero;
