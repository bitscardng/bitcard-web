import React from "react";
import Hero from "../components/global-account/Hero";
import Blog from "../components/Blog";
import "../assets/scss/globalAccount.scss";
import SectionTwo from "../components/global-account/SectionTwo";
import SectionThree from "../components/global-account/SectionThree";

const GlobalAccount = () => {
  return (
    <div className="global-account-page">
      <Hero />
      <SectionTwo />
      <SectionThree />
      <Blog />
    </div>
  );
};

export default GlobalAccount;
