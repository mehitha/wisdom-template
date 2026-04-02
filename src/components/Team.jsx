import React, { useState } from "react";

const teamData = [
  {
    name: "Dr. Anbu Rajan,",
    role: "Volunteer",
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
      <style>{`

        .team {
          padding: 80px 60px;
          background: #f8f8f8;
          text-align: center;
        }

        .team-title {
          font-size: 42px;
          margin-bottom: 60px;
          color: #0c2c55;
        }

        .team-title span {
          color: #db891d;
        }

        .team-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        /* CARD */
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

        /* DARK GRADIENT ALWAYS */
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

        /* TEXT ALWAYS VISIBLE */
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

        /* HOVER EFFECT */
        .team-card:hover img {
          transform: scale(1.1);
        }

        .team-card:hover {
          transform: translateY(-10px);
        }

        /* PLUS BUTTON */
        .plus-btn {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #8B6C44;
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
          background:#0c2c55;
          color: white;
        }

        /* BUTTON */
        .view-all-container {
          margin-top: 50px;
        }

        .view-btn {
          background: #8B6C44;
          border: none;
          padding: 15px 40px;
          border-radius: 30px;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
        }

        .view-btn:hover {
          background:#0c2c55;
          color:#8B6C44;
        }

        /* RESPONSIVE */
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

        <div className="team-container">
          {visibleData.map((member, index) => (
            <div className="team-card" key={index}>
              
              <img src={member.img} alt={member.name} />

              {/* ALWAYS VISIBLE TEXT */}
              <div className="info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>

              {/* <div className="plus-btn">+</div> */}
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <button
            className="view-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less ↑" : "View All ↗"}
          </button>
        </div>
      </section>
    </>
  );
};

export default Team;