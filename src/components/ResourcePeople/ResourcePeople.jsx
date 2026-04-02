import React, { useState } from "react";

import Header from "../Header";
import Footer from "../Footer";
import Hero from "../Hero/Hero3";

const teamData = [
  {
    name: "Dr. Anbu Rajan,",
    role: "Director of Peace Health Centre, Tirunelveli. He actively works in community development and student awareness programs.Director of Peace Health Centre, Tirunelveli. He actively works in community development and student awareness programs.Director of Peace Health Centre, Tirunelveli. He actively works in community development and student awareness programs.Director of Peace Health Centre, Tirunelveli. He actively works in community development and student awareness programs.Director of Peace Health Centre, Tirunelveli. He actively works in community development and student awareness programs.",
    img: "/images/eventt.png",
  },
  {
    name: "Bro.Raja Stevenson",
    role: "Raja Stevenson N is a Qualified Mechanical Engineer. He earned his degree from Anna University in 2005 post his Successful School academics in Tirunelveli securing 93% during 2001.He also holds his MBA in Operations Management and has an experience of 20+ years having worked with Multiple industries across India and in Japan varying from Construction, Consulting , Manufacturing . He Specialises in Operations Management and has grown fast in his career.Currently he works as Industrial Director in Alstom Transport , a Global Pioneer leader in manufacturing of Trains",
    img: "/images/eventt.png",
  },
  {
    name: "Sis.Jishya",
    role: "Jishya is a keynote speaker, career coach, and digital marketing expert with a PhD in Digital Marketing. She has inspired 70,000+ students across India and helps individuals grow with clarity, confidence, and purpose. As the founder of Soul Spring Digital, she also supports brands in building strong digital strategies.",
    img: "/images/event.png",
  },
  {
    name: "Motivational Sessions",
    role: "Conducting impactful motivational sessions to inspire students towards better life choices and goal setting.",
    img: "/images/program3.jpg",
  },
];

const Team = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const getShortText = (text, wordLimit = 5) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <>
      <Header />

      <Hero title="Our Team" subtitle="✿ Meet Our Dedicated Volunteers" />

      <style>{`
        .team {
          padding: 80px 60px;
          background: #f8f8f8;
          text-align: center;
        }

        .team-title {
          font-size: 42px;
          margin-bottom: 60px;
          color: #0f3d35;
          font-family: cursive;
        }

        .team-title span {
          color: #da8a22;
        }

        .team-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .team-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: 0.4s;
          background: black;
        }

        /* 🔥 expanded card */
        .team-card.active {
          overflow: visible;
        }

        .team-card img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          transition: 0.5s;
        }

        /* 🔥 image height increase */
        .team-card.active img {
          height: 500px;
        }

        .team-card::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 60%;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
        }

        /* 🔥 remove overlay when expanded */
        .team-card.active::after {
          display: none;
        }

        .info {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          color: white;
          z-index: 2;
          text-align: left;
        }

        .info h3 {
          margin: 0;
          font-size: 18px;
        }

        .info p {
          margin: 5px 0 0;
          font-size: 13px;
          line-height: 1.5;
        }

        .read-more {
          color: #ffd700;
          cursor: pointer;
          margin-left: 5px;
          font-size: 12px;
          font-weight: bold;
        }

        @media (max-width: 992px) {
          .team-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .team-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="team">
        <h2 className="team-title">
          Our <span>Resource</span> People
        </h2>

        <div className="team-container">
          {teamData.map((member, index) => (
            <div
              className={`team-card ${
                expandedIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <img src={member.img} alt={member.name} />

              <div className="info">
                <h3>{member.name}</h3>

                <p>
                  {expandedIndex === index
                    ? member.role
                    : getShortText(member.role, 5)}

                  {member.role.split(" ").length > 5 && (
                    <span
                      className="read-more"
                      onClick={() =>
                        setExpandedIndex(
                          expandedIndex === index ? null : index
                        )
                      }
                    >
                      {expandedIndex === index ? " Read Less" : " Read More"}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Team;