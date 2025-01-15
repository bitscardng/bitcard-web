import AppDownloadSection from "../components/AppDownloadSection";
import Blog from "../components/Blog";
import Hero from "../components/privacy/Hero";

const Privacy = () => {
  return (
    <div className="privacy-page">
      <Hero />
      <AppDownloadSection bgColor="#A875CF" firstContentWord="send &" content="send & spend, bank & trade crypto with ease" contentPosition="left" />
      <Blog />
    </div>
  );
};

export default Privacy;