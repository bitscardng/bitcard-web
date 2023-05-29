import React from "react";
import "../assets/scss/blog.scss";
import BlogHero from "../assets/images/blog-hero.png";
import TwoColumnBlog from "../components/TwoColumnBlog";
import AppDownloadSection from "../components/AppDownloadSection";

const BlogDetails = () => {
  return (
    <div className="blog-page py-5">
      <div className="container  ">
        <h2>Blog</h2>
        <div className="hero">
          <div style={{ backgroundImage: `url(${BlogHero})` }} className="hero-img"></div>
          <div className="blog-content">
            <h4 className="blog-title">Buy and send, How you can make payment using Bitscard in Ghana</h4>

            <p>
              Bitcoin (BTC) continues to lose ground in the wake of CoinDesk's Bitcoin Trend Indicator shedding the bullish bias for the first time in
              three weeks. The top cryptocurrency by market value fell to $26,160 before press time, reaching the lowest since March 17, according to
              CoinDesk data. Prices have declined by over 12% since May 6, decoupling from the uptick in traditional risk assets like Nasdaq. The BTI
              indicator, which measures the directional momentum and strength in bitcoin's price, flipped from bullish to neutral on Thursday. The
              indicator consistently signaled an uptrend since Jan. 13, barring the brief red flash (downtrend signal) in mid-March and the neutral
              reading on April 24. Bitcoin (BTC) continues to lose ground in the wake of CoinDesk's Bitcoin Trend Indicator shedding the bullish bias
              for the first time in three weeks. The top cryptocurrency by market value fell to $26,160 before press time, reaching{" "}
            </p>
            <AppDownloadSection bgColor="#A875CF" content="spend, bank & trade crypto with ease " firstContentWord="send &" contentPosition="left" />

            <p>
              Bitcoin (BTC) continues to lose ground in the wake of CoinDesk's Bitcoin Trend Indicator shedding the bullish bias for the first time in
              three weeks. The top cryptocurrency by market value fell to $26,160 before press time, reaching the lowest since March 17, according to
              CoinDesk data. Prices have declined by over 12% since May 6, decoupling from the uptick in traditional risk assets like Nasdaq.
            </p>
          </div>
        </div>
      </div>
      <TwoColumnBlog sectionTitle="Latest" btnColor="#5FC88F" bgColor="#66B6FF" />
    </div>
  );
};

export default BlogDetails;