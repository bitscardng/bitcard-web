import React, { useEffect } from "react";
import Hero from "../components/blog/Hero";
import "../assets/scss/blog.scss";
import BlogSection from "../components/blog/BlogSection";
import AppDownloadSection from "../components/AppDownloadSection";
import TwoColumnBlog from "../components/TwoColumnBlog";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="blog-page">
      <Hero />
      <BlogSection btnColor="#66B6FF" sectionTitle="Latest" bgColor="#5FC88F" />
      <AppDownloadSection
        bgColor="#A875CF"
        content="spend, bank & trade crypto with ease "
        firstContentWord="send &"
        contentPosition="left"
      />
    </div>
  );
};

export default Blog;
