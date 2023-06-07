import React from "react";
import Bg from "../../assets/images/map-bg.png";
import AppDownloadBtn from "../AppDownloadBtn";
import Woman from "../../assets/images/woman.png";

const SectionThree = () => {
  return (
    <div className="section-three">
      <div className="container">
        <div className="text-end">
          <img width="700" src={Bg} alt="map" />
        </div>
        <div className="d-flex justify-content-end">
          <AppDownloadBtn />
        </div>
        <div className="C-T-A">
          <div className="row">
            <div className="col">
              <img className="lady-pic" src={Woman} alt="" />
              <div className="text-box">Pay for your tuition fee, send money to your loved ones without stress ...</div>
            </div>
            <div className="col">
              <div className="text-end">
                Start <span className="fw-bold">send and receiving money internationally</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
