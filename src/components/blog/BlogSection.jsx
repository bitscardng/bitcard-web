import React from "react";
import { Link } from "react-router-dom";
import Netflix from "../../assets/images/Netflix 1.png";
import Coca from "../../assets/images/Always Coca-Cola 1.png";
import News from "../../assets/images/_124643633_gettyimages-1384896168 1.png";

const blogs = [
  {
    image: News,
    title: "The price of bitcoin will get to $50,000",
  },
  {
    image: Netflix,
    title: "The price of bitcoin will get to $50,000",
  },
  {
    image: Coca,
    title: "The price of bitcoin will get to $50,000",
  },
];

const Latest = ({ sectionTitle, bgColor, btnColor }) => {
  return (
    <div style={{ background: bgColor }} className="blog-section my-4">
      <div className="container">
        <div className="mt-4 mb-5">
          <Link style={{ background: btnColor }} className="btn-without-shadow px-5" to="#">
            {sectionTitle}
          </Link>
        </div>

        <div className="row mb-4">
          {blogs.map((blog, key) => {
            return (
              <div key={key} className="col">
                <div className="card blog-card border-0 shadow">
                  <img className="card-img-top" src={blog.image} alt="" />
                  <div style={{ background: "#FCB721" }} className="card-body text-center">
                    {blog.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Latest;
