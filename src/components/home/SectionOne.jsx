import React from "react";
import Phone from "../../assets/images/iPhone13.png";
import US from "../../assets/images/usa.png";
import { Link } from "react-router-dom";
import Mastercard from "../../assets/images/Mastercard-Logo 2.png";
import Phone2 from "../../assets/images/iPhone 12 Pro (Wooden Hands).png";
import Card from "../../assets/images/Group 5.png";
import CM from "../../assets/images/cou&map.png";

const SectionOne = () => {
  return (
    <div className="section-one pt-3">
      <header className="text-center mt-2 mb-4">
        <h2>
          One platform <span>for all transactions</span>
        </h2>
      </header>
      <div className="global-acct-bg">
        <div className="container">
          <div className="row m-0 align-items-center">
            <div className="col-7">
              <div className="pink-box">
                <img src={Phone} alt="" />
                <img src={CM} alt="" />
              </div>
            </div>
            <div className="col-5">
              <div className="home-section-text-area">
                <div>
                  {" "}
                  Open global accounts{" "}
                  <span>
                    <img width="30px" className="ms-2" src={US} alt="us-flag" />
                  </span>
                </div>
                <div>Open a US Dollar, Nigerian Naira, Canadian Dollar, UK Pounds account in less than 5 minutes.</div>

                <div className="my-4">
                  <Link style={{ background: "#767DFF" }} className="btn-with-shadow">
                    Open free account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row m-0 align-items-center">
          <div className="col-5">
            <div className="home-section-text-area">
              <div>
                {" "}
                Virtual Mastercard{" "}
                <span>
                  <img width="40px" className="ms-2" src={Mastercard} alt="Mastercard" />
                </span>
              </div>
              <div>Open Create a virtual master card for free today and shop online without limit. Find new ways to spend & save.</div>

              <div className="my-4">
                <Link style={{ background: "#F7931A" }} className="btn-with-shadow">
                  Create virtual card
                </Link>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="virtual-card-img-box mb-5 mt-3 mx-auto">
              <img src={Phone2} alt="phone and wodden hand" />
              <img src={Card} alt="debit card" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
