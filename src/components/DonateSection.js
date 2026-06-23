'use client';  // ✅ Add this for useState

import React, { useState } from "react";
import Image from 'next/image';  // ✅ Add Next.js Image
import img1 from "../images/donatesss.png";

const DonateSection = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const pointsData = {
    mission: [
      "To guide and mentor youth in developing a strong mindset, discipline, and purpose for life",
      "To equip students with practical life skills to overcome challenges and make wise decisions",
      "To create awareness about the dangers of addictions and promote a healthy lifestyle",
      "To inspire young people to pursue excellence in education and personal growth",
      "To build character, confidence, and a sense of responsibility toward society",
      "To actively contribute to nation-building by empowering the next generation",
    ],
    vision: `To create a better tomorrow by empowering today's youth with wisdom, discipline, and purpose.
We believe that when young people are guided with the right knowledge, encouragement, and
practical tools, they can transform not only their own lives but also the future of the society.`,
  };

  return (
    <section className="donate-section">
      {/* LEFT SIDE IMAGE */}
      <div className="donate-left">
        <div className="img-box top-img">
          <Image 
            src={img1} 
            alt="donate" 
            width={400}
            height={400}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </div>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="donate-right">
        <h1 className="hero1">New Life Academy</h1>
        <p className="desc">
          New Life Academy is a youth-focused initiative dedicated to shaping a healthier and more
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