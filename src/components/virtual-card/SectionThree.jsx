import React from "react";
import Phone1 from "../../assets/images/half-phone1.png";
import Phone2 from "../../assets/images/half-phone2.png";
import Phone3 from "../../assets/images/half-phone3.png";

const SectionThree = () => {
  return (
    <section className="py-4 section-three">
      <div className="container">
        <header className="text-center">
          <h4>Create your virtual card in 3 simple steps.</h4>
        </header>

        <div className="row gap-lg-0 gap-3 mt-5">
          <div className="col">
            <div style={{ background: "#FF6464" }} className="text-card mx-auto">
              <div>1</div>
              <div>
                <ul className="list-unstyled">
                  <li>*Click on the create card button</li>
                  <li>*Select the type of card</li>
                  <li>*Click on create mastercard</li>
                </ul>
              </div>
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
              <div>2</div>
              <div>*Kindly fund the card with a minimum of $5 to enable the virtual card creation.</div>
            </div>
          </div>

          <div className="col">
            <div style={{ background: "#219DFC" }} className="text-card mx-auto">
              <div>3</div>
              <div>
                <ul className="list-unstyled">
                  <li>*Select your preferred payment option/method.</li>
                  <li>*Click on pay, then the card will be created instantly</li>
                </ul>
              </div>
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
