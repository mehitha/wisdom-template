


import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaGraduationCap, FaAppleAlt, FaPrescriptionBottle } from "react-icons/fa";
import "../styles/charity-cards.css";

const cards = [
  {
    title: "350+ Schools visited",
    description: "Over the years, Wisdom Foundation has reached thousands of young people across South India",
    icon: <FaGraduationCap />,
    color: "#f4b400",
  },
  {
    title: "160+ Colleges visited",
    description: "Programs conducted across Tamil Nadu, Karnataka, Andhra Pradesh, and Telangana.",
    icon: <FaGraduationCap />,
    color: "#0d3b2e",
  },
  {
    title: "17,000+ Students reached",
    description: "Through these initiatives, we aim to inspire students to make wise choices and pursue a future free from destructive habits.",
    icon: <FaGraduationCap />,
    color: "#ff5a3c",
  },
];

const CharityCards = () => {
  const [current, setCurrent] = useState(1); // ✅ start with 2nd card highlighted

  const nextCard = () => setCurrent((prev) => (prev + 1) % cards.length);
  const prevCard = () => setCurrent((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <section className="charity-cards-section">
      <div className="cards-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${index === current ? "active" : "inactive"}`}
            style={{ borderColor: card.color }}
          >
            <div className="icon" style={{ backgroundColor: card.color }}>
              {card.icon}
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button className="arrow left" onClick={prevCard}>
          <FaArrowLeft />
        </button>
        <button className="arrow right" onClick={nextCard}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default CharityCards;