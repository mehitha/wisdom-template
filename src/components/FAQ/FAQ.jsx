import React, { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What kind of recipes can I find on your website?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
      question: "Are the recipes suitable for beginners?",
      answer: "Yes, our recipes are beginner friendly and easy to follow."
    },
    {
      question: "Do you offer cooking tips and techniques?",
      answer: "Yes, we provide useful cooking tips and techniques."
    },
    {
      question: "How frequently do you update your recipe collection?",
      answer: "We update our content regularly with new recipes."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <>
      {/* ===== CSS ===== */}
      <style>{`
        .faq-section {
          position: relative;
          padding: 80px 60px;
          background: #f8f8f8;
          overflow: hidden;
        }

        .faq-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 60px;
        }

        .faq-left {
          width: 50%;
        }

        .subtitle {
          color: #0f6d5c;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .faq-left h2 {
          font-size: 48px;
          margin-bottom: 30px;
          line-height: 1.2;
        }

        .faq-left span {
          color: #f4b400;
        }

        .faq-box {
          background: #ffffff;
          padding: 20px 25px;
          border-radius: 40px;
          margin-bottom: 15px;
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .faq-box h4 {
          font-size: 18px;
        }

        .faq-box.active {
          background: #0f6d5c;
          color: #fff;
        }

        .faq-box.active p {
          margin-top: 10px;
          color: #fff;
        }

        .faq-right {
          width: 50%;
          position: relative;
        }

        .faq-right::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: #0f6d5c;
          border-radius: 30px;
          z-index: 0;
        }

        .image-box {
          position: relative;
          z-index: 2;
          padding: 40px;
        }

        .image-box img {
          width: 100%;
          border-radius: 20px;
        }

        .small-img {
          position: absolute;
          bottom: -30px;
          right: -30px;
          width: 160px;
          border-radius: 20px;
          border: 6px solid #fff;
        }

        @media (max-width: 900px) {
          .faq-container {
            flex-direction: column;
          }

          .faq-left,
          .faq-right {
            width: 100%;
          }

          .faq-right::before {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .faq-container {
            flex-direction: column;
          }

          .faq-left,
          .faq-right {
            width: 100%;
          }
        }
      `}</style>

      {/* ===== HTML ===== */}
      <section className="faq-section">
        <div className="faq-container">

          {/* LEFT */}
          <div className="faq-left">
            <p className="subtitle">💛 Start Donating Poor People</p>

            <h2>
              Frequently <span>Asked</span> Questions
            </h2>

            {faqs.map((item, index) => (
              <div
                key={index}
                className={`faq-box ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <h4>{item.question}</h4>

                {activeIndex === index && (
                  <p>{item.answer}</p>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="faq-right">
            <div className="image-box">
              <img src="/images/hapy face.jpg" alt="main" />

              {/* FIXED SMALL IMAGE (you had typo <mg>) */}
              <img
                src="/images/happy.png"
                alt="small"
                className="small-img"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default FAQ;