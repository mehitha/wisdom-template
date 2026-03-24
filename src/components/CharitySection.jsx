import React from "react";
import "../styles/charity.css";

function LogoSlider() {
  return (
    <div className="partners-wrapper">
      <h1>OUR <span>CLIENT</span></h1>
      <div className="partners">

        {/* Set 1 */}
        <img src="/logo1.png" alt="logo" />
        <img src="/logo2.png" alt="logo" />
        <img src="/logo3.png" alt="logo" />
        <img src="/logo4.png" alt="logo" />
        <img src="/logo5.png" alt="logo" />

        {/* Set 2 (duplicate) */}
        <img src="/logo1.png" alt="logo" />
        <img src="/logo2.png" alt="logo" />
        <img src="/logo3.png" alt="logo" />
        <img src="/logo4.png" alt="logo" />
        <img src="/logo5.png" alt="logo" />

      </div>
    </div>
  );
}

export default LogoSlider;