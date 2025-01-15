import AppDownloadSection from "../components/AppDownloadSection";
import Blog from "../components/Blog";
import Hero from "../components/contact/Hero";

const Contact = () => {
  return (
    <div className="contact-page">
      <Hero />
      <AppDownloadSection bgColor="#A875CF" firstContentWord="send &" content="send & spend, bank & trade crypto with ease" contentPosition="left" />
      <Blog />
    </div>
  );
};

export default Contact;