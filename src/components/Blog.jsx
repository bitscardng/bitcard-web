import React from "react";
import { Link } from "react-router-dom";
import Netflix from "../assets/images/Netflix 1.png";
import Coca from "../assets/images/Always Coca-Cola 1.png";
import News from "../assets/images/_124643633_gettyimages-1384896168 1.png";

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

const Blog = () => {
  return (
    <div className="blog-section">
      <div className="container">
        <div className="text-center mt-4 mb-5">
          <Link style={{ background: "#FCB721" }} className="btn-without-shadow px-5" to="#">
            Blogs
          </Link>
        </div>

        <div className="row mb-4">
          {blogs.map((blog, key) => {
            return (
              <div key={key} className="col">
                <div className="card blog-card mx-auto border-0 shadow">
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

export default Blog;
