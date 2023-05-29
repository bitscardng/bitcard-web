import React from "react";
import Blog from "../components/Blog";
import AppDownloadSection from "../components/AppDownloadSection";
import "../assets/scss/about.scss";
import Robot from "../assets/images/robot 3.png";

const About = () => {
  return (
    <div className="about-page py-4">
      <div className="container">
        <h1>About Us</h1>
        <div className="statement-details">
          We are building what financial services should look like for the next generation of immigrants. A financial service app that understands you
          and cares for you.
          <h2>Vision</h2>
          To be the financial operating system for ambitious businesses.
          <h2>Mission Statement</h2>
          We are on a mission to provide financial services that enables every business and consumer realize their full potential.
        </div>

        <div className="text-end">
          <img width="200" src={Robot} alt="" />
        </div>
      </div>

      <AppDownloadSection bgColor="#A875CF" firstContentWord="send &" content="send & spend, bank & trade crypto with ease" contentPosition="left" />
      <Blog />
    </div>
  );
};

export default About;
