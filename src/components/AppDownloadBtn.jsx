import React from "react";
import AppleLogo from "../assets/images/apple.png";
import playStoreLogo from "../assets/images/Inner Plugin Iframe.png";

const AppDownloadBtn = ({ location }) => {
  return (
    <div className={`d-flex ${location?.toLowerCase() === "left" && "justify-content-end"} `}>
      <a target="_blank" href="https://play.google.com/store/apps/details?id=com.val.bitscard">
        <button className="app-btn">
          <img src={playStoreLogo} alt="google play logo" />
          <span>Google play</span>
        </button>
      </a>

      <button className="app-btn ms-4">
        <img src={AppleLogo} alt="apple logo" />
        <span>App store</span>
      </button>
    </div>
  );
};

export default AppDownloadBtn;
