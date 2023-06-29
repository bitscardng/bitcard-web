import React from "react";
import Phone1 from "../../assets/images/half-phone1.png";
import Phone2 from "../../assets/images/half-phone2.png";
import Phone3 from "../../assets/images/half-phone3.png";

const SectionThree = () => {
  return (
    <section className="py-4 section-three">
      <div className="container">
        <header className="text-center">
          <h4>3 Benefits</h4>
        </header>

        <div className="row gap-lg-0 gap-4 mt-5">
          <div className="col">
            <div style={{ background: "#FF6464" }} className="text-card mx-auto">
              <div>Best Gift Card Rates</div>
              <div>*Exchange your gift cards at high rates and buy gift cards at low prices.</div>
            </div>
            <div className="text-center">
              <img width="250" src={Phone3} alt="" />
            </div>
          </div>

          <div className="col">
            <div className="text-center">
              <img width="250" src={Phone2} alt="" />
            </div>
            <div style={{ background: "#FCB721" }} className="text-card mx-auto">
              <div>Refer & Earn</div>
              <div>*Refer a user and earn a commission on their transactions for life.</div>
            </div>
          </div>

          <div className="col">
            <div style={{ background: "#219DFC" }} className="text-card mx-auto">
              <div>Instant Deals</div>
              <div>*Complete your transaction in minutes with us & free rewards every time you carry out a transaction with us..</div>
            </div>
            <div className="text-center">
              <img width="250" src={Phone1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
