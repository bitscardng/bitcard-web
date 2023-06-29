import React from "react";
import CryptoGraph from "./CryptoGraph";

const SectionThree = () => {
  return (
    <section className="py-5 section-three">
      <div className="container">
        <div className="row gap-lg-0 gap-5">
          <div className="col-lg">
            <CryptoGraph crypto="tether" />
          </div>
          <div className="col-lg">
            <CryptoGraph crypto="bitcoin" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
