import React from "react";
import Card1 from "../../assets/images/amazon.png";
import Card2 from "../../assets/images/itunes 2.png";
import Card3 from "../../assets/images/steam.png";
import Phone from "../../assets/images/iPhone13pro.png";
import Netflix from "../../assets/images/netflix.png";
import Music from "../../assets/images/music.png";
import Spotify from "../../assets/images/spotify.png";

const Hero = () => {
  return (
    <div className="py-4 hero">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Buy and Sell gift cards</h1>
            <p>
              The best platform to sell and buy gift cards in Nigeria, Ghana and Kenya. We guaranty you instant payment for your gift card
              transaction.
            </p>

            <div className="hero-img-wrapper">
              <img src={Card1} alt="amazon" />
              <img src={Card2} alt="" />
              <img src={Card3} alt="" />
            </div>
          </div>
          <div className="col">
            <div style={{ background: "#5FC88F" }} className="hero-color-box">
              <img src={Phone} alt="iphone" />
              <img src={Netflix} alt="netflix" />
              <img src={Music} alt="music" />
              <img src={Spotify} alt="spotify" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
