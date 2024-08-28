import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Netflix from "../../assets/images/Netflix 1.png";
import Coca from "../../assets/images/Always Coca-Cola 1.png";
import News from "../../assets/images/_124643633_gettyimages-1384896168 1.png";
import axios from "axios";
import { appConfig } from "../../config/app.config";

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
  const [blog, setBlog] = useState([]);
  const [blogErr, setBlogErr] = useState(null);

  const { api_url } = appConfig;

  const fetchNews = async () => {
    try {
      const { data } = await axios.get(`${api_url}/v1/news`);

      setBlog(data.data);
    } catch (error) {
      setBlogErr(error.message);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div className="blog-section my-4">
      <div className="container">
        <div className="mt-4 mb-5">
          <Link
            style={{ background: btnColor }}
            className="btn-without-shadow px-5"
            to="#"
          >
            {sectionTitle}
          </Link>
        </div>

        <div className="row gutter gy-5">
          {blog?.map((news, key) => {
            return (
              <Link className="col-4" key={news._id} to={`/blog/${news._id}`}>
                <div>
                  <div className="card blog-card border-0 shadow">
                    <img
                      className="card-img-top blog-img"
                      src={news?.image}
                      alt=""
                    />
                    <div
                      // style={{ background: "#FCB721" }}
                      className="card-body text-center"
                    >
                      {news?.title}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Latest;
