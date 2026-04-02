// import React, { useState } from "react";
// import "../styles/header.css";
// import { Link } from "react-router-dom";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaSearch,
//   FaChevronDown,
//   FaChevronUp,
//   FaInstagram,
//   FaYoutube,
//   FaFacebook
// } from "react-icons/fa";

// function Header() {

//   const [dropdown, setDropdown] = useState(null);

//   const toggleMenu = (menu) => {
//     setDropdown(dropdown === menu ? null : menu);
//   };

//   return (
//     <header>

//       {/* Top Bar */}
      


//       {/* Contact Bar */}
//       <div className="contact-bar">

//         <div className="contact-left">
//           <span>✉ contact@wisdomfoundation.in</span>
//           <span>📞 +2(305) 587-3407</span>
//         </div>

//         <div className="contact-right">
         
//           {/* <span>English</span> */}

//           <FaFacebook />
//           <FaYoutube />
//           <FaInstagram />
//         </div>

//       </div>


//       {/* Navbar */}
//       <nav className="navbar">

//         <div className="logo">
//           <img src="/hero.png" alt="logo"/>
//         </div>

//         <ul className="menu">
          

//           {/* Home */}
//         <Link to="/">Home</Link>


//                        <li>
//   <Link to="/about">About us</Link>
// </li>

//           {/* Pages */}
//           <li onClick={() => toggleMenu("pages")}>
//             Gallery {dropdown === "pages" ? <FaChevronUp /> : <FaChevronDown />}
//             {dropdown === "pages" && (
//               <ul className="dropdown">
//                 <li>
//   <Link to="/gallery">Photo Gallery</Link>
// </li>
//                 <li>
//   <Link to="/videos">Video Gallery</Link>
// </li>
//               </ul>
//             )}
//           </li>

//  <li>
//   <Link to="/resourcepeople">Resource</Link>
// </li>

//           {/* News */}
//           {/* <li onClick={() => toggleMenu("news")}>
//             News {dropdown === "news" ? <FaChevronUp /> : <FaChevronDown />}
//             {dropdown === "news" && (
//               <ul className="dropdown">
//                 <li>Blog Grid</li>
//                 <li>Blog Details</li>
//               </ul>
//             )}
//           </li> */}

//           <li>
//   <Link to="/contact">Contact Us</Link>
// </li>

//         </ul>

//         <div className="nav-right">
          
//           <button
//   className="donate-btn"
//   onClick={() => window.location.href = "tel:+91 8072385214"}
// >
//   Contact Now →
// </button>
//         </div>

//       </nav>

//     </header>
//   );
// }

// export default Header;


import React, { useState } from "react";
import Cursor from "../components/Cursor";

import "../styles/header.css";
import { Link } from "react-router-dom";
import {
  // FaFacebook,
  // FaInstagram,
  // FaYoutube,
  FaWhatsapp,
  
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

function Header() {

  const [dropdown, setDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // 🔥 NEW

  const toggleMenu = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <header>
      <Cursor />

      {/* CONTACT BAR */}
      <div className="contact-bar">
        <div className="contact-left">
          <span>✉ wisdomfoundation2015@gmail.com</span>
          <span>📞 +2(305) 587-3407</span>
        </div>

        <div className="contact-right">
          {/* <FaFacebook />
          <FaYoutube />
          <FaInstagram /> */}
          <FaWhatsapp />
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">

        {/* LOGO */}
        <div className="logo">
          <img src="/heero.png" alt="logo" />
        </div>

        {/* 🔥 HAMBURGER */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)}></div>}

        {/* MENU */}
        <ul className={`menu ${menuOpen ? "menu-open" : ""}`}>

          <li><Link to="/">Home</Link></li>

          <li><Link to="/about">About us</Link></li>

          {/* DROPDOWN */}
          <li onClick={() => toggleMenu("pages")}>
            Gallery {dropdown === "pages" ? <FaChevronUp /> : <FaChevronDown />}
            {dropdown === "pages" && (
              <ul className="dropdown">
                <li><Link to="/gallery">Photo Gallery</Link></li>
                <li><Link to="/videos">Video Gallery</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/resourcepeople">Resource</Link></li>

          <li><Link to="/contact">Contact Us</Link></li>

          {/* MOBILE BUTTON */}
          <li className="mobile-donate">
            {/* <button
              className="donate-btn"
              onClick={() => window.location.href = "tel:+918072385214"}
            >
              Contact Now →
            </button> */}
          </li>

        </ul>

        {/* DESKTOP BUTTON */}
        <div className="nav-right">
          <button
            className="donate-btn"
            onClick={() => window.location.href = "tel:+918072385214"}
          >
            Contact Now →
          </button>
        </div>

      </nav>

    </header>
  );
}

export default Header;