import React from "react";
import Hero from "../components/home/hero";
import "../assets/scss/home.scss";
import SectionOne from "../components/home/SectionOne";
import SectionTwo from "../components/home/SectionTwo";
import SectionThree from "../components/home/SectionThree";
import SectionFour from "../components/home/SectionFour";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
};

export default Home;
