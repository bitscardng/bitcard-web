import React, { useEffect, useState } from "react";
import "../assets/scss/faq.scss";
import Blog from "../components/Blog";
import AppDownloadSection from "../components/AppDownloadSection";
import ChatBot from "../assets/images/robot 3.png";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import DOMPurify from "dompurify";

function sanitizeHtml(html) {
  const cleanHtml = DOMPurify.sanitize(html);
  return cleanHtml;
}

const FAQ = () => {
  const [faq, setFaq] = useState(null);
  const [faqErr, setFaqErr] = useState(null);
  const fetchFAQ = async () => {
    try {
      const res = await axios.get("https://api.bitscard.app/api/v1/faq");
      setFaq(res.data.data);
    } catch (error) {
      setFaqErr(error.message);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchFAQ();
  }, []);
  return (
    <>
      <div className="container pt-4">
        <h2>FAQ</h2>
        <div className="accordion-section">
          <div className="accordion" id="accordionExample">
            {faqErr !== null
              ? `you have encountered an error`
              : faq === null
              ? "loading..."
              : faq.map((data, key) => {
                  return (
                    <div
                      key={data._id}
                      className="accordion-item border-0 bg-transparent"
                    >
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button bg-transparent"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${key}`}
                          aria-expanded="true"
                          aria-controls={`collapse${key}`}
                        >
                          <strong>{data.title}</strong>
                        </button>
                      </h2>
                      <div
                        id={`collapse${key}`}
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div
                          className="accordion-body"
                          dangerouslySetInnerHTML={{
                            __html: sanitizeHtml(data?.content),
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
        <div className="text-end">
          <img width="100" src={ChatBot} alt="chat-bot" />
        </div>
      </div>
      <AppDownloadSection
        bgColor="#A875CF"
        content="spend, bank & trade crypto with ease "
        firstContentWord="send &"
        contentPosition="left"
      />
      <Blog />
    </>
  );
};

export default FAQ;
