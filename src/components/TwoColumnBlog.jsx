import React from "react";
import { Link } from "react-router-dom";
import Netflix from "../assets/images/Netflix 1.png";
import Coca from "../assets/images/Always Coca-Cola 1.png";
import AdsBanner from "../assets/images/ads-banner.png";

const blogs = [
  {
    image: Netflix,
    title: "The price of bitcoin will get to $50,000",
  },
  {
    image: Coca,
    title: "The price of bitcoin will get to $50,000",
  },
];

const TwoColumnBlog = ({ sectionTitle, bgColor, btnColor }) => {
  return (
    <div className="row align-items-center m-0 py-5">
      <div style={{ background: bgColor }} className="col-8 blog-section">
        <div className="ms-5 mt-4 mb-5">
          <Link style={{ background: btnColor }} className="ms-5 btn-without-shadow px-5" to="#">
            {sectionTitle}
          </Link>
        </div>
        <div className="d-flex justify-content-evenly">
          {blogs.map((blog, key) => {
            return (
              <div key={key} className="card blog-card border-0 shadow">
                <img className="card-img-top" src={blog.image} alt="" />
                <div style={{ background: "#FCB721" }} className="card-body text-center">
                  {blog.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col">
        <div className="text-center">
          <small>Advertisment</small>
          <div>
            <img width="350" src={AdsBanner} alt="ads banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnBlog;
