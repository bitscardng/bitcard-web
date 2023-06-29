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
      <AppDownloadSection bgColor="#A875CF" content="spend, bank & trade crypto with ease " firstContentWord="send &" contentPosition="left" />
      <BlogSection btnColor="#FCB721" sectionTitle="Crypto" bgColor="#767DFF" />
      <TwoColumnBlog sectionTitle="Virtual card" btnColor="#5FC88F" bgColor="#F04086" />
      <BlogSection btnColor="#FF6464" sectionTitle="Giftcard" bgColor="#2690BA" />
    </div>
  );
};

export default Blog;
