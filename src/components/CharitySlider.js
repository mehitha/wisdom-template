// import React, { useState } from "react";
// import "../styles/CharitySlider.css";

// const CharitySlider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const totalSlides = 2;

//   const nextSlide = () => {
//     setActiveIndex((prev) => (prev + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   return (
//     <section className="charity-slider">

//       {/* 🔹 ARROWS */}
//       <div className="arrows">
//         <button onClick={prevSlide}>⬅</button>
//         <button onClick={nextSlide}>➡</button>
//       </div>

//       {/* 🔹 SLIDER */}
//       <div className="slider-container">
//         <div
//           className="slider-wrapper"
//           style={{
//             transform: `translateX(-${activeIndex * 100}%)`,
//           }}
//         >

//           {/* 🔸 SLIDE 1 */}
//           <div className="slide">
//             <div className="card">Card 1</div>
//             <div className="card">Card 2</div>
//             <div className="card">Card 3</div>
//           </div>

//           {/* 🔸 SLIDE 2 */}
//           <div className="slide">
//             <div className="card">Card 4</div>
//             <div className="card">Card 5</div>
//             <div className="card">Card 6</div>
//           </div>

//         </div>
//       </div>

//       {/* 🔹 DOTS */}
//       <div className="dots">
//         <span className={activeIndex === 0 ? "dot active" : "dot"}></span>
//         <span className={activeIndex === 1 ? "dot active" : "dot"}></span>
//       </div>

//     </section>
//   );
// };

// export default CharitySlider;