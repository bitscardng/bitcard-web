import React from "react";
import Coin3d from "../../assets/images/3d-plastilina-three-quarter-view-of-a-bitcoin-emblem 1.png";
import Mastercard from "../../assets/images/Group 5.png";
import Upwork from "../../assets/images/upwork.png";
import Freelancer from "../../assets/images/freelancer.png";
import AppleLogo from "../../assets/images/apple.png";
import playStoreLogo from "../../assets/images/Inner Plugin Iframe.png";
import Bit from "../../assets/images/bit.png";
import nig from "../../assets/images/nig.png";
import { Link } from "react-router-dom";

const SectionThree = () => {
  return (
    <section className="py-5 section-three">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card-one">
              <img src={Mastercard} alt="" />
              <img src={Coin3d} alt="" />
              <div className="head">Virtual card funding</div>
              <div>You can now create and fund your virtual mastercard with crypto at zero cost.</div>
            </div>

            <div className="card-two">
              <img src={Upwork} alt="upwork logo" />
              <img src={Freelancer} alt="freelancer logo" />
              <div className="head">Receive payment from foreign employers</div>
              <div>Freelancer, remote worker or corporate employee? Get paid fast and securely!</div>
            </div>
          </div>
          <div className="col">
            <div className="app-btn-wrapper mx-auto mt-0">
              <div className="app-btn">
                <img src={playStoreLogo} alt="google play logo" />
                <span>Google play</span>
              </div>

              <div className="app-btn">
                <img src={AppleLogo} alt="apple logo" />
                <span>App store</span>
              </div>
            </div>

            <div className="section-three-xchange-box mt-3 mx-auto">
              <div className="header">
                <div style={{ background: "#F7931A" }}>Exchange Rate</div>
                <div style={{ background: "#767DFF" }}>Crypto Rate</div>
              </div>
              <div className="d-flex justify-content-center mt-2">
                <button style={{ background: "#EB6A98" }} className="buy-sell-btn">
                  Buy
                </button>
                <button style={{ background: "#18BBFE" }} className="buy-sell-btn">
                  Sell
                </button>
              </div>

              <div className="xchange-input-box mt-1">
                <div>
                  <img width="30px" src={Bit} alt="Bitcoin logo" />
                  <span className="ms-2">BTC</span>
                </div>

                <div>$74</div>
              </div>

              <div className="ms-5 my-1">Rate 740/$</div>

              <div className="xchange-input-box mt-1">
                <div>
                  <img width="30px" src={nig} alt="Bitcoin logo" />
                  <span className="ms-2">NGN</span>
                </div>

                <div>NGN63,433.43</div>
              </div>

              <div className="mt-3 xchange-text-box mx-auto">
                Exchange rates are volatile right now, so we can't guarantee this rate. We'll use the rate that's live when we receive your money.
              </div>

              <div className="my-4 text-center">
                <Link style={{ background: "#47A348" }} to="#" className="btn-without-shadow">
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
