import React, { useState } from "react";

import Header from "../Header";
import Footer from "../Footer";

// 🔥 HERO IMPORT
import Hero from "../Hero/Hero3";

const teamData = [
  {
    name: "Dr. Anbu Rajan,",
    role: "Director of Peace Health Centre, Tirunelveli.",
    img: "/images/hero.jpg",
  },
  {
    name: "Youth Development Training",
    role: "Volunteer",
    img: "/images/event.jpg",
  },
  {
    name: "Community Events",
    role: "Volunteer",
    img: "/images/program.jpg",
  },
  {
    name: "Motivational Sessions",
    role: "Volunteer",
    img: "/images/program3.jpg",
  },
  {
    name: "Women Empowerment",
    role: "Volunteer",
    img: "/images/student.jpg",
  },
  {
    name: "Child Education",
    role: "Volunteer",
    img: "/images/program4.jpg",
  },
];

const Team = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleData = showAll ? teamData : teamData.slice(0, 4);

  return (
    <>
      <Header />

      {/* 🔥 HERO */}
      <Hero 
        title="Our Team" 
        subtitle="✿ Meet Our Dedicated Volunteers" 
      />

      <style>{`

        .team {
          padding: 80px 60px;
          background: #f8f8f8;
          text-align: center;
        }
        .hi {
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 1.7;
  color: #555;
  max-width: 990px;
  margin: 0 auto 10px auto;
  padding: 0 20px;
  margin-top:-25px;
  margin-bottom:40px;
}

@media (max-width: 1024px) {
  .hi {
    font-size: 16px;
    line-height: 1.7;
    max-width: 650px;
  }
}

@media (max-width: 768px) {
  .hi {
    font-size: 15px;
    line-height: 1.6;
    padding: 0 15px;
  }
}

@media (max-width: 480px) {
  .hi {
    font-size: 14px;
    line-height: 1.6;
  }
}

.hii {
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 1.7;
  color: #555;
  max-width: 990px;
  margin: 0 auto 10px auto;
  padding: 0 20px;
  margin-top:25px;
}

@media (max-width: 1024px) {
  .hii {
    font-size: 16px;
    line-height: 1.7;
    max-width: 650px;
  }
}

@media (max-width: 768px) {
  .hii {
    font-size: 15px;
    line-height: 1.6;
    padding: 0 15px;
  }
}

@media (max-width: 480px) {
  .hii {
    font-size: 14px;
    line-height: 1.6;
  }
}

        .team-title {
          font-size: 42px;
          margin-bottom: 60px;
          color: #0f3d35;
        }

        .team-title span {
          color: #ffc107;
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
        }

        .team-card img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          transition: 0.5s;
        }

        .team-card::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 60%;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.8),
            transparent
          );
        }

        .info {
          position: absolute;
          bottom: 20px;
          left: 20px;
          color: white;
          z-index: 2;
          text-align: left;
        }

        .info h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
        }

        .info p {
          margin: 5px 0 0;
          font-size: 13px;
          opacity: 0.8;
        }

        .team-card:hover img {
          transform: scale(1.1);
        }

        .team-card:hover {
          transform: translateY(-10px);
        }

        .plus-btn {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #ffc107;
          color: black;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          z-index: 2;
          transition: 0.3s;
        }

        .team-card:hover .plus-btn {
          background: #0f6b57;
          color: white;
        }

        .view-all-container {
          margin-top: 50px;
        }

        .view-btn {
          background: #ffc107;
          border: none;
          padding: 15px 40px;
          border-radius: 30px;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
        }

        .view-btn:hover {
          background: #0f3d35;
          color: #ffc107;
        }

        @media (max-width: 992px) {
          .team-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .team {
            padding: 50px 20px;
          }

          .team-title {
            font-size: 26px;
          }

          .team-container {
            grid-template-columns: 1fr;
          }

          .team-card img {
            height: 250px;
          }

          .plus-btn {
            width: 35px;
            height: 35px;
            font-size: 16px;
          }

          .view-btn {
            width: 200px;
          }
        }

      `}</style>

      <section className="team">
        <h2 className="team-title">
          Our <span>Resource</span> People
        </h2>

        <h1 className="hi">
          Wisdom Foundation is driven by a passionate team of committed volunteers who share a
common vision—to help build a better nation by guiding and empowering the younger
generation.
Our volunteers are educated graduates who dedicate their time and energy to mentoring
students and young adults. With a mind-set focused on nation-building and positive social
change, they actively engage with students through awareness programs, motivational
sessions, and practical life guidance.
        </h1>

        <div className="team-container">
          {visibleData.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.img} alt={member.name} />

              <div className="info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <h1 className="hii">
          Together, our team seeks to inspire young people to make wise choices, overcome harmful
          habits, and pursue a life of purpose, discipline, and responsibility.
        </h1>

        <div className="view-all-container">
          <button
            className="view-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less ↑" : "View All ↗"}
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Team;