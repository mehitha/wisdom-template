import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

function AboutSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <style>{`
        .about-section {
          display: flex;
          padding: 80px;
          gap: 60px;
          align-items: center;
          background: #fff;
        }

        .about-left {
          position: relative;
          width: 50%;
        }

        .main-img {
          position: relative;
        }

        .main-img img {
          width: 100%;
          border-radius: 20px;
        }

        .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #ffc107;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .img-top {
          position: absolute;
          top: -40px;
          left: -40px;
        }

        .img-top img {
          width: 140px;
          border-radius: 15px;
          border: 6px solid #fff;
        }

        .img-bottom {
          position: absolute;
          bottom: -40px;
          right: -20px;
        }

        .img-bottom img {
          width: 160px;
          border-radius: 15px;
          border: 6px solid #fff;
        }

        .vertical-text {
          position: absolute;
          left: -70px;
          top: 50%;
          transform: rotate(-90deg);
          background: #0a4d3c;
          color: #fff;
          padding: 10px 20px;
          border-radius: 10px;
        }

        .about-right {
          width: 50%;
        }

        .tag {
          color: #ffc107;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .about-right h1 {
          font-size: 42px;
          margin-bottom: 20px;
        }

        .about-right span {
          color: #ffc107;
        }

        .desc {
          color: #555;
          margin-bottom: 20px;
        }

        .list {
          list-style: none;
          padding: 0;
        }

        .list li {
          margin-bottom: 10px;
        }

        .bottom-row {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .btn {
          background: #ffc107;
          border: none;
          padding: 12px 25px;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 600;
        }

        .phone {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .video-popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .video-box {
          position: relative;
          width: 90%;
          max-width: 900px;
        }

        .video-box iframe {
          width: 100%;
          height: 500px;
          border-radius: 10px;
        }

        .close {
          position: absolute;
          top: -35px;
          right: 0;
          color: white;
          font-size: 25px;
          cursor: pointer;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .about-section {
            flex-direction: column;
            padding: 40px 20px;
            gap: 30px;
          }

          .about-left,
          .about-right {
            width: 100%;
          }

          .about-right {
            text-align: center;
          }

          .about-right h1 {
            font-size: 26px;
          }

          .desc {
            font-size: 14px;
          }

          .bottom-row {
            flex-direction: column;
          }

          .btn {
            width: 100%;
            max-width: 250px;
          }

          .img-top,
          .img-bottom,
          .vertical-text {
            display: none;
          }

          .play-btn {
            width: 55px;
            height: 55px;
          }

          .video-box iframe {
            height: 220px;
          }
        }
      `}</style>

      <section className="about-section">

        {/* LEFT */}
        <div className="about-left">

          <div className="main-img">
            <img src="/images/hero1.png" alt="main" />

            <div className="play-btn" onClick={() => setShowVideo(true)}>
              <FaPlay />
            </div>
          </div>

          <div className="img-top">
            <img src="/images/child1.png" alt="child" />
          </div>

          <div className="img-bottom">
            <img src="/images/child2.jpg" alt="event" />
          </div>

          <div className="vertical-text">
            Donations to poor people
          </div>

        </div>

        {/* RIGHT */}
        <div className="about-right">

          <p className="tag">💛 Start Donating Poor People</p>

          <h1>
            Helping Each Other Can Make <span>World</span> Better
          </h1>

          <p className="desc">
            New Life Academyis a youth-focused initiative dedicated to shaping a healthier and more
purposeful future for the next generation. We work primarily with teenagers and young adults in
schools and colleges, helping them develop the mind-set, discipline, and life skills needed to
build a better tomorrow.
          </p>

          <ul className="list">
            <li>✔ Helped fund 3,265 projects</li>
            <li>✔ We give child education</li>
            <li>✔ Corporate social responsibility</li>
          </ul>

          <div className="bottom-row">
            <button className="btn">More About Us</button>

            <div className="phone">
              📞 <span>+236 (456) 896 22</span>
            </div>
          </div>

        </div>

      </section>

      {/* VIDEO POPUP */}
      {showVideo && (
        <div
          className="video-popup"
          onClick={(e) => {
            if (e.target.classList.contains("video-popup")) {
              setShowVideo(false);
            }
          }}
        >
          <div className="video-box">
            <span className="close" onClick={() => setShowVideo(false)}>✖</span>

            <iframe
              src="https://www.youtube.com/embed/XxVg_s8xAms"
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default AboutSection;