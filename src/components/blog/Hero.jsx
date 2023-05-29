import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BlogHero from "../../assets/images/blog-hero.png";

const responsive = {
  oneForAll: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const Hero = () => {
  return (
    <div className="container py-4">
      <h2>Blog</h2>
      <Carousel responsive={responsive}>
        <div className="hero">
          <div style={{ backgroundImage: `url(${BlogHero})` }} className="hero-img"></div>
          <div className="blog-content">
            <h4 className="blog-title">Buy and send, How you can make payment using Bitscard in Ghana</h4>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
