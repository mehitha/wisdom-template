import React, { useState } from "react";
import "../styles/header.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaSearch,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

function Header() {

  const [dropdown, setDropdown] = useState(null);

  const toggleMenu = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <header>

      {/* Top Bar */}
      


      {/* Contact Bar */}
      <div className="contact-bar">

        <div className="contact-left">
          <span>✉ mt@newlifesociety.in</span>
          <span>📞 +919942235305</span>
        </div>

        <div className="contact-right">
          <span>USD</span>
          <span>English</span>

          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
        </div>

      </div>


      {/* Navbar */}
      <nav className="navbar">

        <div className="logo">
          <img src="/hero.png" alt="logo"/>
        </div>

        <ul className="menu">

          {/* Home */}
          <li onClick={() => toggleMenu("home")}>
            Home {dropdown === "home" ? <FaChevronUp /> : <FaChevronDown />}
            {dropdown === "home" && (
              <ul className="dropdown">
                <li>Home Style 1</li>
                <li>Home Style 2</li>
              </ul>
            )}
          </li>

          <li>About Us</li>

          {/* Causes */}
          <li onClick={() => toggleMenu("causes")}>
            Causes {dropdown === "causes" ? <FaChevronUp /> : <FaChevronDown />}
            {dropdown === "causes" && (
              <ul className="dropdown">
                <li>All Causes</li>
                <li>Cause Details</li>
              </ul>
            )}
          </li>

          {/* Pages */}
          <li onClick={() => toggleMenu("pages")}>
            Pages {dropdown === "pages" ? <FaChevronUp /> : <FaChevronDown />}
            {dropdown === "pages" && (
              <ul className="dropdown">
                <li>Volunteers</li>
                <li>Gallery</li>
                <li>FAQ</li>
              </ul>
            )}
          </li>

          {/* News */}
          <li onClick={() => toggleMenu("news")}>
            News {dropdown === "news" ? <FaChevronUp /> : <FaChevronDown />}
            {dropdown === "news" && (
              <ul className="dropdown">
                <li>Blog Grid</li>
                <li>Blog Details</li>
              </ul>
            )}
          </li>

          <li>Contact Us</li>

        </ul>

        <div className="nav-right">
          <FaSearch className="search"/>
          <button className="donate-btn">Donate Now →</button>
        </div>

      </nav>

    </header>
  );
}

export default Header;