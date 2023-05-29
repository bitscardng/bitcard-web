import React from "react";
import { Link } from "react-router-dom";
import Bitcoin from "../../assets/images/bitcoin.png";
import Phone from "../../assets/images/another-phone.png";
import Coin3d from "../../assets/images/3d-plastilina-three-quarter-view-of-a-bitcoin-emblem 1.png";
import Gplay from "../../assets/images/googleplay 1.png";
import Itunes from "../../assets/images/itunes 1.png";

const SectionTwo = () => {
  return (
    <section className="py-5 bgc-grey home-section ">
      <div className="container">
        <div className="row m-0 align-items-center">
          <div className="col-7">
            <div style={{ background: "#6B7CFE" }} className="section-img-box">
              <img className="float-end" src={Phone} alt="" />
              <img src={Coin3d} alt="bitoin 3d" />
              <img src={Gplay} alt="google play gift card" />
              <img src={Itunes} alt="itunes giftcard" />
            </div>
          </div>
          <div className="col-5">
            <div className="home-section-text-area">
              <div>
                {" "}
                Trade crypto & Gift card{" "}
                <span>
                  <img width="30px" className="ms-2" src={Bitcoin} alt="us-flag" />
                </span>
              </div>
              <div>Buy, sell, send and receive crypto , you can also buy or sell your favorite gift card with us today.</div>

              <div className="my-4">
                <Link className="btn-with-shadow bgc-green">Open free account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
