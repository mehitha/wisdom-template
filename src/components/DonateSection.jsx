import React, { useState } from "react";
import "../styles/DonateSection.css";

import img1 from "../images/donate.png"; // top image
import img2 from "../images/donatee.png"; // bottom image

const DonateSection = () => {
  const [activeTab, setActiveTab] = useState("mission"); // default active tab

  // Points for mission and excellence, vision is now a paragraph
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
    excellence: [
      "Maintain transparency in all operations",
      "Achieve maximum impact with minimal resources",
      "Build strong partnerships with local NGOs",
      "Ensure high-quality service delivery",
      "Continuously innovate charitable solutions",
    ],
  };

  return (
    <section className="donate-section">
      {/* LEFT SIDE IMAGES */}
      <div className="donate-left">
        <div className="img-box top-img">
          <img src={img1} alt="donate" />
        </div>

       
      </div>

      {/* RIGHT CONTENT */}
      <div className="donate-right">
     

        <h1 className="hero1">
          Wisdom Foundation 
          
        </h1> <p className="desc">
          is a youth-focused initiative dedicated to shaping a healthier and more
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
          {/* <button
            className={activeTab === "excellence" ? "active" : ""}
            onClick={() => setActiveTab("excellence")}
          >
            Our Excellence
          </button> */}
        </div>

        {/* Points / Vision Text */}
        {activeTab === "vision" ? (
          <p className="vision-text">{pointsData.vision}</p>
        ) : (
          <ul className="points">
            {pointsData[activeTab].map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default DonateSection;