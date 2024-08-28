import React from "react";
import AppleLogo from "../assets/images/apple.png";
import playStoreLogo from "../assets/images/Inner Plugin Iframe.png";
import { appConfig } from "../config/app.config";

const AppDownloadBtn = ({ location }) => {
    const { playStoreUrl } = appConfig
  return (
    <div
      className={`d-flex ${
        location?.toLowerCase() === "left" && "justify-content-end"
      } `}
    >
      <a
        target="_blank"
        href={playStoreUrl}
      >
        <a
          href={playStoreUrl}
          className="app-btn"
        >
          <img src={playStoreLogo} alt="google play logo" />
          <span>Google play</span>
        </a>
      </a>

      <button className="app-btn ms-4">
        <img src={AppleLogo} alt="apple logo" />
        <span>App store</span>
      </button>
    </div>
  );
};

export default AppDownloadBtn;
