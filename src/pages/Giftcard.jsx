import React, { useEffect } from "react";
import Blog from "../components/Blog";
import AppDownloadSection from "../components/AppDownloadSection";
import SectionThree from "../components/giftcard/SectionThree";
import "../assets/scss/giftcard.scss";
import SectionTwo from "../components/giftcard/SectionTwo";
import Hero from "../components/giftcard/Hero";

const Giftcard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="giftcard-page">
      <Hero />
      <SectionTwo />
      <SectionThree />
      <AppDownloadSection
        withBorderRadius={true}
        bgColor="#5FC88F"
        contentPosition="right"
        firstContentWord="Start"
        content="trading your giftcards 
        for instant cash"
      />
      <Blog />
    </div>
  );
};

export default Giftcard;
