import React from "react";
import Phone from "../../assets/images/iPhone 13 Pro (2).png";
import Phone2 from "../../assets/images/iPhone 13 Pro (3).png";
import Phone3 from "../../assets/images/iPhone 13 Pro (4).png";

const SectionFour = () => {
  return (
    <section className="py-3">
      <div className="container">
        <div className="section-four-bg bgc-grey pt-2">
          <div className="row">
            <div className="col text-center">
              <img width="300" src={Phone} alt="" />
            </div>
            <div className="col text-center">
              <img width="300" src={Phone2} alt="" />
            </div>
            <div className="col text-center">
              <img width="300" src={Phone3} alt="" />
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col text-center">
            <h3>Spend</h3>
            <div>With our virtual master card you have no spend limit</div>
          </div>
          <div className="col text-center">
            <h3>Bank</h3>
            <div>Send and receive payment anywhere in the world with your USD, GBP & EURO account </div>
          </div>
          <div className="col text-center">
            <h3>Trade</h3>
            <div>Buy, sell, send and receive crypto, also buy and sell your giftcards.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
