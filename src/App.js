// import Header from "./components/Header";
// import Hero from "./components/Hero";

// function App() {
//   return (
//     <div>
//       <Header />
//       <Hero />
{/* <CharitySection /> */}
//     </div>
//   );
// }

// export default App;



// import CharitySection from "./components/CharitySection";

// function App() {
//   return (
//     <>
      
//       <CharitySection />
//     </>
//   );
// }

// export default App;


// import Header from "./components/Header";
// import Hero from "./components/Hero";

// function App() {
//   return (
//     <div>
//       <Header />
//       <Hero />
{/* <CharitySection /> */}
//     </div>
//   );
// }

// export default App;


// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import CharitySection from "./components/CharitySection";

// function App() {
//   return (
//     <>
//        <Header />
//       <Hero />
//       <CharitySection />
//     </>
//   );
// }

// export default App;



// import React from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import CharitySection from "./components/CharitySection";
// import CharityCards from "./components/CharityCards"; // <-- Import the cards component

// function App() {
//   return (
//     <>
//       <Header />
//       <Hero />
//       <CharitySection />  {/* Logos section */}
//       <CharityCards />    {/* Sliding cards section */}
//     </>
//   );
// }

// export default App;



// import React from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
//  // ✅ NEW
// import CharitySection from "./components/CharitySection";
// import CharityCards from "./components/CharityCards";
// import CharityHero from "./components/CharityHero";
// import Footer from "./components/Footer";


// function App() {
//   return (
//     <>
//       <Header />

//       <Hero /> 
     

      

//       <CharitySection /> 
     

//       <CharityCards /> 
      
//       <CharityHero /> 
//       <Footer />
//     </>
//   );
// }

// export default App;




// 1️⃣ All imports go here at the top
// import React from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import CharitySection from "./components/CharitySection";
// import CharityCards from "./components/CharityCards";
// import CharityHero from "./components/CharityHero";



// import Team from "./components/Team";
// import Testimonials from "./components/Testimonials";
// import Footer from "./components/Footer";

// // 2️⃣ Then define your component
// function App() {
//   return (
//     <>
//       <Header />
//       <Hero />
//       <CharitySection />
//       <CharityCards />
//       <CharityHero />
      
//       <Team />
//       <Testimonials />
//       <Footer />
//     </>
//   );
// }

// export default App;




// import React from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import CharitySection from "./components/CharitySection";
// import CharityCards from "./components/CharityCards";
// import CharityHero from "./components/CharityHero";

// import VolunteerCTA from "./components/VolunteerCTA"; // ✅ ADD THIS

// import Team from "./components/Team";

// import Testimonials from "./components/Testimonials";
// import DonateSection from "./components/DonateSection";
// import LatestNews from "./components/LatestNews";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <Header />
//       <Hero />
//       <CharitySection />
//       <CharityCards />
//       <CharityHero />
     

//       <VolunteerCTA />  {/* ✅ ADD HERE */}

//       <Team />
//       <Testimonials />
//        <DonateSection />
//        <LatestNews />
//       <Footer />
//     </>
//   );
// }

// export default App;





// import { Routes, Route } from "react-router-dom";

// import Header from "./components/Header";

// import ContactHeader from "./contact/Header"; 

// import Hero from "./components/Hero";
// import CharitySection from "./components/CharitySection";
// import CharityCards from "./components/CharityCards";
// import CharityHero from "./components/CharityHero";
// import VolunteerCTA from "./components/VolunteerCTA";
// import Team from "./components/Team";
// import Testimonials from "./components/Testimonials";
// import DonateSection from "./components/DonateSection";
// import LatestNews from "./components/LatestNews";
// import Footer from "./components/Footer";

// import Header from "./contact/Header";

// function App() {
//   return (
//     <Routes>

     
//       <Route
//         path="/"
//         element={
//           <>
//             <Header />
//             <Hero />
//             <CharitySection />
//             <CharityCards />
//             <CharityHero />
//             <VolunteerCTA />
//             <Team />
//             <Testimonials />
//             <DonateSection />
//             <LatestNews />
//             <Footer />
//           </>
//         }
//       />

      
//       <Route
//         path="/contact"
//         element={
//           <>
//             <ContactHeader />
//             <Contact />
//             <Footer />
//           </>
//         }
//       />

//     </Routes>
//   );
// }

// export default App;




// App.js
// src/App.js
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Gallery from "./components/Gallery/Gallery";
// import VideoGallery from "./components/Gallery/VideoGallery";
// // import ResourcePeople from "./components/ResourcePeople/ResourcePeople";
// // import AboutSection from "./components/About/AboutSection";
// // import FAQ from "./components/FAQ/FAQ";
// // import Feedback from "./components/Feedback/Feedback"; 
// // import ContactForm from "./components/ContactForm/ContactForm";
// import Team from "./components/Team";

// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//               <Route path="/gallery" element={<Gallery />} />
//               <Route path="/Videos" element={<VideoGallery />} />
              // {/* <Route path="/resourcepeople" element={<ResourcePeople />} />
//               <Route path="/aboutsection" element={<AboutSection />} />
//               <Route path="/feedback" element={<Feedback />} />
//               <Route path="/faq" element={<FAQ />} />
//               <Route path="/contactform" element={<ContactForm />} /> */}
              
// <Route path="/team" element={<Team />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import About from "./pages/About";
import Gallery from "./components/Gallery/Gallery";
import ResourcePeople from "./components/ResourcePeople/ResourcePeople";
import VideoGallery from "./components/Gallery/VideoGallery";
// import Team from "./components/Team";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/resourcepeople" element={<ResourcePeople />} />
      <Route path="/videos" element={<VideoGallery />} />
      {/* <Route path="/team" element={<Team />} /> */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;