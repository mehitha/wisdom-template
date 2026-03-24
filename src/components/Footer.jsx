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
import "../styles/Footer.css";
import { 
  FaFacebookF, FaTwitter, FaLinkedinIn, FaVimeoV, 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowUp 
} from "react-icons/fa";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">

      {/* Newsletter Section */}
      {/* <div className="newsletter">
        
        <div className="newsletter-input">
          <input type="email" placeholder="Enter Email" />
          <button>
            <span>➤</span>
          </button>
        </div>
      </div> */}

      {/* Top section */}
      <div className="footer-top">
        {/* Logo & description */}
        <div className="footer-logo">
          <img src="/herooooo.png" alt="Charifund Logo" />
          
          <p>
            Our Secure Online Donation Platform Allows You To Make
            Contributions Quickly And Safely. Choose From Various.
          </p>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaVimeoV /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="#"></a></li>
            <li><a href="/resourcepeople">Resource People</a></li>
            {/* <li><a href="/faq">FAQ</a></li> */}
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer-services">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Our Causes</a></li>
            <li><a href="#">Education Support</a></li>
            <li><a href="#">Our Campaign</a></li>
            <li><a href="#">Food Support</a></li>
            <li><a href="#">Health Support</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <ul>
            <li><FaMapMarkerAlt /> 455 West Orchard Street, Kings Mountain, NC 280867</li>
            <li><FaPhoneAlt /> +088 (246) 642-27-10</li>
            <li><FaEnvelope /> example@email.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="footer-bottom">
        <p>© Wisdomfoundation. All Rights Reserved.</p>
        {/* <div className="footer-bottom-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Settings</a>
        </div> */}
      </div>

      {/* Scroll to top button */}
      <button className="scroll-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>

    </footer>
  );
}

export default Footer;