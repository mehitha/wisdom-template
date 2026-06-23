// import React, { useState } from "react";
// import { FaArrowLeft, FaArrowRight, FaGraduationCap, FaAppleAlt, FaPrescriptionBottle } from "react-icons/fa";
// import ".charitycards.css";

// const cards = [
//   {
//     title: "Child Education",
//     description:
//       "Set Up A Secure And User-Friendly Online Donation Platform That Accepts Multiple",
//     icon: <FaGraduationCap />,
//     color: "#f4b400",
//   },
//   {
//     title: "Healthy Food",
//     description:
//       "Set Up A Secure And User-Friendly Online Donation Platform That Accepts Multiple",
//     icon: <FaAppleAlt />,
//     color: "#0d3b2e",
//   },
//   {
//     title: "Medical Care",
//     description:
//       "Set Up A Secure And User-Friendly Online Donation Platform That Accepts Multiple",
//     icon: <FaPrescriptionBottle />,
//     color: "#ff5a3c",
//   },
// ];

// const CharityCards = () => {
//   const [current, setCurrent] = useState(0);

//   const nextCard = () => setCurrent((prev) => (prev + 1) % cards.length);
//   const prevCard = () => setCurrent((prev) => (prev - 1 + cards.length) % cards.length);

//   return (
//     <section className="charity-cards-section">
//       <div className="cards-container">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={card ${index === current ? "active" : "inactive"}}
//             style={{ borderColor: card.color }}
//           >
//             <div className="icon" style={{ backgroundColor: card.color }}>
//               {card.icon}
//             </div>
//             <h3>{card.title}</h3>
//             <p>{card.description}</p>
//           </div>
//         ))}
//       </div>

//       <div className="arrows">
//         <button className="arrow left" onClick={prevCard}>
//           <FaArrowLeft />
//         </button>
//         <button className="arrow right" onClick={nextCard}>
//           <FaArrowRight />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default CharityCards;