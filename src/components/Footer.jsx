// import React from "react";
// import "../styles/Footer.css";
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaVimeoV } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       {/* Newsletter Section */}
//       <div className="newsletter">
//         <div className="newsletter-text">
//           <h2>Subscribe To Our Newsletter</h2>
//           <p>Regular Inspections And Feedback Mechanisms</p>
//         </div>
//         <div className="newsletter-input">
//           <input type="email" placeholder="Enter Email" />
//           <button>
//             <span>➤</span>
//           </button>
//         </div>
//       </div>

//       {/* Footer Links */}
//       <div className="footer-links">
//         <div className="footer-brand">
          
        
//           <div className="social-icons">
//             <FaFacebookF />
//             <FaVimeoV />
//             <FaTwitter />
//             <FaLinkedinIn />
//           </div>
//         </div>

       

       

        
//       </div>

      
     
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import "../styles/footer.css";
import { 
  FaWhatsapp,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowUp 
} from "react-icons/fa";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">

      <div className="footer-top">
        
        {/* Logo & description */}
        <div className="footer-logo">
          <img src="/heero.png" alt="Charifund Logo" />
          
         <p>
  Wisdom Foundation is a youth-focused initiative dedicated to shaping a healthier...
  <a href="/about" style={{ color: "#00b894", marginLeft: "5px", fontWeight: "bold" }}>
    Read More
  </a>
</p>

          <div className="footer-social">
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/resourcepeople">Resource People</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <ul>
            <li><FaMapMarkerAlt /> 455 West Orchard Street, Kings Mountain, NC 280867</li>
            <li><FaPhoneAlt /> +088 (246) 642-27-10</li>
            <li><FaEnvelope /> wisdomfoundation2015@gmail.com</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Wisdomfoundation. All Rights Reserved.</p>
      </div>

      <button className="scroll-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>

    </footer>
  );
}

export default Footer;