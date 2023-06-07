import React from "react";
import AppDownloadBtn from "../AppDownloadBtn";
import Pic1 from "../../assets/images/08.png";
import Pic2 from "../../assets/images/05.png";

const SectionTwo = () => {
  return (
    <section className="pt-4 pb-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="col-4">
            <h2>Trade everytime and everywhere</h2>
          </div>
          <div className="col-3">
            <AppDownloadBtn />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <div style={{ background: "#9F9DF3" }} className="section-two-card">
              <div className="row align-items-center">
                <div className="col">
                  <img width="100" src={Pic2} alt="icon" />
                </div>
                <div className="col">
                  <div className="section-card-header">P2P trading</div>
                </div>
              </div>
              <p>Get the most accurate and trusted source for market cap, valuation, and cryptocurrency information</p>
            </div>
          </div>

          <div className="col">
            <div style={{ background: "#F7931A" }} className="section-two-card">
              <div className="row align-items-center">
                <div className="col">
                  <img width="100" src={Pic2} alt="icon" />
                </div>
                <div className="col">
                  <div className="section-card-header">Buy Crypto</div>
                </div>
              </div>
              <p>You can buy bitcoin and usdt with ease by funding your wallet or by P2P which is very safe nd secured.</p>
            </div>
          </div>

          <div className="col">
            <div style={{ background: "#5FC88F" }} className="section-two-card">
              <div className="row align-items-center">
                <div className="col">
                  <img width="100" src={Pic1} alt="icon" />
                </div>
                <div className="col">
                  <div className="section-card-header">Send & receive</div>
                </div>
              </div>
              <p>Send and receive crypto at zero fee also at a lighting speed.You don’t have to spend big to get started.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
