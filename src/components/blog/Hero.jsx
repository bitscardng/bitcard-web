import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { Link } from "react-router-dom";

const responsive = {
  oneForAll: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const Hero = () => {
  const [blog, setBlog] = useState(null);
  const [blogErr, setBlogErr] = useState(null);

  const fetchNews = async () => {
    try {
      const { data } = await axios.get(
        "https://devadmin.bitscard.app/api/v1/news"
      );

      setBlog(data.data);
    } catch (error) {
      setBlogErr(error.message);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div className="container py-4">
      <h2>Blog</h2>
      <Carousel responsive={responsive}>
        {blogErr !== null ? (
          <div> {blogErr} error occured`</div>
        ) : blog === null ? (
          <div>Loading...</div>
        ) : (
          blog.map((news) => {
            return (
              <Link key={news._id} to={`/blog/${news._id}`}>
                <div className="hero">
                  <div
                    style={{ backgroundImage: `url(${news?.image})` }}
                    className="hero-img"
                  ></div>
                  <div className="blog-content">
                    <h4 className="blog-title">{news.title}</h4>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </Carousel>
    </div>
  );
};

export default Hero;
