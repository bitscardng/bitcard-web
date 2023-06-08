import React, { useState } from "react";
import Hero from "../components/virtual-card/Hero";
import "../assets/scss/virtualCard.scss";
import SectionTwo from "../components/virtual-card/SectionTwo";
import SectionThree from "../components/virtual-card/SectionThree";
import Blog from "../components/Blog";
import AppDownloadSection from "../components/AppDownloadSection";
import DownloadModal from "../components/DownloadModal";

const VirtualCard = () => {
  return (
    <div className="virtual-card-page">
      <Hero />
      <SectionTwo />
      <SectionThree />
      <AppDownloadSection
        bgColor="#D9D9D9"
        contentPosition="right"
        firstContentWord="send &"
        content="spend, bank & trade
crypto with ease "
      />
      <Blog />
    </div>
  );
};

export default VirtualCard;
