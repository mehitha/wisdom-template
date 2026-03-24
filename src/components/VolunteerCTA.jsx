// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Heart } from "lucide-react";
// import donateHandsImg from "../images/donatee.png"; 

// import "../styles/VolunteerCTA.css";

// const VolunteerCTA = () => {
//   return (
//     <section className="volunteer-section">
      
    
//       <div className="bg-container">
//         <img src={donateHandsImg} alt="Volunteer hands" />
//         <div className="overlay"></div>
//       </div>

     
//       <div className="content">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <Heart className="icon" />

//           <h2>Become A Volunteer!</h2>

//           <p>
//             Join our community of change-makers. Together, we can build a better 
//             future for those who need it most.
//           </p>

//           <div className="btn-group">
//             <a href="#contact" className="btn-yellow">
//               Join Us Today <ArrowRight size={20} />
//             </a>

//             <a href="#donate" className="btn-outline">
//               Make Donation
//             </a>
//           </div>
//         </motion.div>
//       </div>

//     </section>
//   );
// };

// export default VolunteerCTA;










import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Import Link
import donateHandsImg from "../images/donatee.png";

import "../styles/VolunteerCTA.css";

const VolunteerCTA = () => {
  return (
    <section className="volunteer-section">
      {/* Background Image */}
      <div className="bg-container">
        <img src={donateHandsImg} alt="Volunteer hands" />
        <div className="overlay"></div>
      </div>

      {/* Content */}
      <div className="content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heart className="icon" />
          <h2>Become A Volunteer!</h2>
          <p>
            Join our community of change-makers. Together, we can build a better 
            future for those who need it most.
          </p>

          <div className="btn-group">
            {/* ✅ Navigate to Contact page */}
            <Link to="/contact" className="btn-yellow">
              Join Us Today <ArrowRight size={20} />
            </Link>

            <a href="#donate" className="btn-outline">
              Make Donation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VolunteerCTA;