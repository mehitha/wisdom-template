import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const data = [
  {
    name: "Ruby Klara",
    role: "Cloth Store Inc.",
    img: "/images/child2.jpg",
  },
  {
    name: "Bishu Kiev",
    role: "Cloth Store Inc.",
    img: "/images/program.jpg",
  },
  {
    name: "Michel Smith",
    role: "Cloth Store Inc.",
    img: "/images/child1.png",
  },
  {
    name: "John Doe",
    role: "Cloth Store Inc.",
    img: "/images/about.jpg",
  },
];

function Feedback() {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < data.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <>
      {/* ===== PREMIUM CSS ===== */}
      <style>{`
        .feedback {
          padding: 120px 60px;
          background: linear-gradient(135deg, #eef5f3, #f7f7f7);
          text-align: center;
        }

        .feedback h2 {
          font-size: 48px;
          font-weight: 700;
          color: #0f3d35;
          margin-bottom: 60px;
        }

        .feedback span {
          color: #ffc107;
        }

        .slider-wrapper {
          overflow: hidden;
          max-width: 1100px;
          margin: auto;
        }

        .slider {
          display: flex;
          gap: 30px;
          transition: 0.6s ease;
        }

        /* CARD */
        .card {
          min-width: 320px;
          height: 320px;
          padding: 25px;
          border-radius: 25px;

          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);

          box-shadow: 0 10px 30px rgba(0,0,0,0.08);

          text-align: left;
          position: relative;

          display: flex;
          flex-direction: column;
          justify-content: space-between;

          transition: all 0.4s ease;
          opacity: 0.6;
          transform: scale(0.9);
        }

        /* ACTIVE CARD */
        .card.active {
          opacity: 1;
          transform: scale(1);
          border: 2px solid #ffc107;
        }

        /* HOVER */
        .card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .stars {
          color: #ffc107;
          font-size: 18px;
        }

        .card p {
          font-size: 14px;
          color: #555;
          line-height: 1.6;
        }

        .user {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .user img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid #ffc107;
          object-fit: cover;
        }

        .user h4 {
          margin: 0;
          font-size: 16px;
        }

        .user span {
          font-size: 12px;
          color: #777;
        }

        /* QUOTE STYLE */
        .badge {
          position: absolute;
          top: 10px;
          right: 15px;
          font-size: 70px;
          color: rgba(0,0,0,0.05);
        }

        /* ARROWS */
        .arrows {
          margin-top: 50px;
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .arrows button {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          border: none;
          font-size: 18px;
          cursor: pointer;
          transition: 0.3s;
        }

        .left {
          background: #0f3d35;
          color: white;
        }

        .right {
          background: #ffc107;
          color: black;
        }

        .arrows button:hover {
          transform: scale(1.1);
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .feedback {
            padding: 60px 20px;
          }

          .feedback h2 {
            font-size: 26px;
          }

          .card {
            min-width: 260px;
          }
        }
      `}</style>

      {/* ===== HTML ===== */}
      <section className="feedback">
        <h2>
          Our Valuable <span>Customer</span><br />
          Awesome Feedback
        </h2>

        <div className="slider-wrapper">
          <div
            className="slider"
            style={{ transform: `translateX(-${index * 350}px)` }}
          >
            {data.map((item, i) => (
              <div
                className={`card ${i === index ? "active" : ""}`}
                key={i}
              >
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p>
                  “Charity is the voluntary act of giving help, typically in the
                  form of money, time, or resources.”
                </p>

                <div className="user">
                  <img src={item.img} alt="" />
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>

                <div className="badge">“</div>
              </div>
            ))}
          </div>
        </div>

        <div className="arrows">
          <button onClick={prev} className="left">
            <FaArrowLeft />
          </button>
          <button onClick={next} className="right">
            <FaArrowRight />
          </button>
        </div>
      </section>
    </>
  );
}

export default Feedback;