import React from "react";
import AppDownloadBtn from "./AppDownloadBtn";

const AppDownloadSection = ({ contentPosition, firstContentWord, content, bgColor, withBorderRadius }) => {
  return (
    <section className="container app-download-section my-5">
      <div style={{ background: bgColor }} className={`app-download-wrapper ${withBorderRadius && "with-b-radius"}`}>
        <div className="row align-items-center">
          <div className="col">
            <AppDownloadBtn location={contentPosition} />
          </div>
          <div className={`col ${contentPosition?.toLowerCase() === "left" && "order-first"}`}>
            <div className={`c-t-a-text ${contentPosition?.toLowerCase() === "right" && "text-end"}`}>
              {firstContentWord} <span>{content}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
