import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const [blog, setBlog] = useState(null);
  const [blogErr, setBlogErr] = useState(null);

  const fetchNews = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(
        `http://ec2-3-231-77-121.compute-1.amazonaws.com:3000/api/v1/news?limit=3`
      );
      setBlog(data);
      console.log(data);
    } catch (error) {
      setBlogErr(error.message);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div className="blog-section">
      <div className="container">
        <div className="text-center mt-4 mb-5">
          <Link
            style={{ background: "#FCB721" }}
            className="btn-without-shadow px-5"
            to="/blog"
          >
            Blogs
          </Link>
        </div>

        <div className="row mb-4">
          {blogErr !== null
            ? `You have encountered an error ${blogErr}`
            : blog === null
            ? "loading..."
            : blog.map((blog) => {
                return (
                  <div key={blog._id} className="co" style={{ display:"flex", align:" iten" }}>
                    <Link to={`/blog/${blog._id}`}>
                      <div className="card blog-card mx-auto border-0 shadow">
                        <img className="card-img-top" src={blog.image} alt="" />
                        <div
                          style={{ background: "#FCB721" }}
                          className="card-body text-center"
                        >
                          {blog.title}
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
