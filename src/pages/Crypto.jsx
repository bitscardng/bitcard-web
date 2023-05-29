import React from "react";
import Blog from "../components/Blog";
import "../assets/scss/crypto.scss";
import Hero from "../components/crypto/Hero";
import SectionTwo from "../components/crypto/SectionTwo";
import SectionThree from "../components/crypto/SectionThree";
import AppDownloadSection from "../components/AppDownloadSection";

const Crypto = () => {
  return (
    <div className="crypto-page">
      <Hero />
      <SectionTwo />
      <SectionThree />
      <AppDownloadSection
        bgColor="#A875CF"
        contentPosition="left"
        firstContentWord="send &"
        content="spend, bank & trade
crypto with ease "
      />
      <Blog />
    </div>
  );
};

export default Crypto;
