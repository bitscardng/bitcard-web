import React from "react";
import Blog from "../components/Blog";
import AppDownloadSection from "../components/AppDownloadSection";
import "../assets/scss/about.scss";
import Robot from "../assets/images/robot 3.png";
import Img1 from "../assets/images/3d-construction-abstract-geometrical-plastic-stack 1.png";
import Card1 from "../assets/images/Group 4.png";
import Card2 from "../assets/images/Group 5.png";

const About = () => {
  return (
    <div className="about-page py-4">
      <div className="container">
        <h2>About Us</h2>
        <div className="row mt-4">
          <div className="col position-relative img-wrapper">
            <img width="250" src={Img1} alt="" />
            <img width="150" src={Card1} alt="" />
            <img width="150" src={Card2} alt="" />
          </div>
          <div className="col">
            <div className="statement-details">
              We are building what financial services should look like for the next generation of immigrants. A financial service app that understands
              you and cares for you.
              <div className="header">Vision</div>
              To be the financial operating system for ambitious businesses.
              <div className="header">Mission Statement</div>
              We are on a mission to provide financial services that enables every business and consumer realize their full potential.
            </div>
          </div>
        </div>

        <div className="text-end">
          <img width="150" src={Robot} alt="" />
        </div>
      </div>

      <AppDownloadSection bgColor="#A875CF" firstContentWord="send &" content="send & spend, bank & trade crypto with ease" contentPosition="left" />
      <Blog />
    </div>
  );
};

export default About;
