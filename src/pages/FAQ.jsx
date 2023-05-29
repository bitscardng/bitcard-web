import React from "react";
import "../assets/scss/faq.scss";
import Blog from "../components/Blog";
import AppDownloadSection from "../components/AppDownloadSection";
import ChatBot from "../assets/images/robot 3.png";
import "bootstrap/dist/js/bootstrap.bundle.min";

const FAQ = () => {
  return (
    <>
      <div className="container pt-4">
        <h2>FAQ</h2>
        <div className="accordion-section">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item border-0 bg-transparent">
              <h2 className="accordion-header">
                <button
                  className="accordion-button bg-transparent"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <strong>How you can make payment using Bitscard</strong>
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classNamees that we
                  use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions.
                  You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can
                  go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 bg-transparent">
              <h2 className="accordion-header">
                <button
                  class="accordion-button collapsed bg-transparent"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You
                  can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                  within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item border-0 bg-transparent">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed bg-transparent"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS
                  transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about
                  any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-end">
          <img width="100" src={ChatBot} alt="chat-bot" />
        </div>
      </div>
      <AppDownloadSection bgColor="#A875CF" content="spend, bank & trade crypto with ease " firstContentWord="send &" contentPosition="left" />
      <Blog />
    </>
  );
};

export default FAQ;
