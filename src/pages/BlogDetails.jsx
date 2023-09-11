import { useEffect, useState } from "react";
import "../assets/scss/blog.scss";
import TwoColumnBlog from "../components/TwoColumnBlog";
import AppDownloadSection from "../components/AppDownloadSection";
import ShareBtn from "../assets/images/Vector.png";
import Fb from "../assets/images/fb.png";
import Insta from "../assets/images/insta.png";
import Twitter from "../assets/images/twitter.png";
import Tumblr from "../assets/images/tumblr.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";

function sanitizeHtml(html) {
  const cleanHtml = DOMPurify.sanitize(html);
  return cleanHtml;
}

const BlogDetails = () => {
  const { blogpost } = useParams();
  const [post, setPost] = useState(null);
  const fetchNews = async () => {
    try {
      const res = await axios.get(
        `https://api.bitscard.app/api/v1/news/${blogpost}`
      );
      setPost(res?.data?.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchNews();
  }, []);
  return (
    <div className="blog-page py-5">
      <div className="container  ">
        <h2>Blog</h2>
        <div className="hero">
          <div
            style={{ backgroundImage: `url(${post?.image})` }}
            className="hero-img"
          ></div>
          <div className="blog-content">
            <h4 className="blog-title">{post?.title}</h4>
            <div
              className="accordion-body"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(post?.content),
              }}
            />
            <AppDownloadSection
              bgColor="#A875CF"
              content="spend, bank & trade crypto with ease "
              firstContentWord="send &"
              contentPosition="left"
            />

            <div className="blog-details-social">
              <button>
                <img src={ShareBtn} alt="" />
              </button>
              <Link to="#">
                <img src={Tumblr} alt="" />
              </Link>

              <Link to="#">
                <img src={Insta} alt="" />
              </Link>

              <Link to="#">
                <img src={Fb} alt="" />
              </Link>

              <Link to="#">
                <img src={Twitter} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <TwoColumnBlog
        sectionTitle="Latest"
        btnColor="#5FC88F"
        bgColor="#66B6FF"
      />
    </div>
  );
};

export default BlogDetails;
