import React, { useState } from "react";
import "../styles/DonateSection.css";

import img1 from "../images/donates.png"; // top image

const DonateSection = () => {
  const [activeTab, setActiveTab] = useState("mission"); // default active tab

  const pointsData = {
    mission: [
      "Provide essential resources to those in need",
      "Support education for underprivileged children",
      "Offer medical aid and treatment",
      "Promote community development programs",
      "Encourage sustainable charity practices",
    ],
    vision: `To create a better tomorrow by empowering today’s youth with wisdom, discipline, and purpose.
We believe that when young people are guided with the right knowledge, encouragement, and
practical tools, they can transform not only their own lives but also the future of the society.`,
  };

  return (
    <section className="donate-section">
      {/* LEFT SIDE IMAGE */}
      <div className="donate-left">
        <div className="img-box top-img">
          <img src={img1} alt="donate" />
        </div>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="donate-right">
        <h1 className="hero1">Wisdom Foundation</h1>
        <p className="desc">
          Wisdom Foundation is a youth-focused initiative dedicated to shaping a healthier and more
          purposeful future for the next generation. We work primarily with teenagers and young adults in
          schools and colleges, helping them develop the mind-set, discipline, and life skills needed to
          build a better tomorrow.
        </p>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={activeTab === "mission" ? "active" : ""}
            onClick={() => setActiveTab("mission")}
          >
            Our Mission
          </button>
          <button
            className={activeTab === "vision" ? "active" : ""}
            onClick={() => setActiveTab("vision")}
          >
            Our Vision
          </button>
        </div>

        {/* Tab Content */}
        <p className="vision-text">
          {activeTab === "vision"
            ? pointsData.vision
            : pointsData.mission.join(". ")}
        </p>
      </div>
    </section>
  );
};

export default DonateSection;