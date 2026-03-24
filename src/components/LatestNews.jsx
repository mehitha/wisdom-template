import React from "react";
import "../styles/LatestNews.css";

import img1 from "../images/donate.png";
import img2 from "../images/donate.png";
import img3 from "../images/donate.png";

const LatestNews = () => {
  return (
    <section className="news-section">

      {/* Heading */}
      <div className="news-header">
        <p className="sub-title">Start Donating Poor People</p>
        <h2>
          Our Latest <span>News</span> & <br />
          Articles You Like
        </h2>
      </div>

      {/* Cards */}
      <div className="news-cards">

        {/* Card 1 */}
        <div className="card">
          <div className="card-img">
            <img src={img1} alt="news" />
            <span className="tag">Health</span>
          </div>

          <div className="card-content">
            <p className="meta">Robert Fox • Comments (03)</p>
            <h3>IT Service Case Studies Accelerate Business Fly Success Tech</h3>
            <a href="#">Read More →</a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="card-img">
            <img src={img2} alt="news" />
            <span className="tag">Education</span>
          </div>

          <div className="card-content">
            <p className="meta">Robert Fox • Comments (08)</p>
            <h3>IT Service Case Studies Accelerate Business Fly Success Tech</h3>
            <a href="#">Read More →</a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="card-img">
            <img src={img3} alt="news" />
            <span className="tag">Food</span>
          </div>

          <div className="card-content">
            <p className="meta">Robert Fox • Comments (13)</p>
            <h3>IT Service Case Studies Accelerate Business Fly Success Tech</h3>
            <a href="#">Read More →</a>
          </div>
        </div>

      </div>

      {/* Button */}
      <div className="view-all">
        <button>View All ↗</button>
      </div>

    </section>
  );
};

export default LatestNews;