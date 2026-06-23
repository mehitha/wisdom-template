import React from "react";
// import "../styles/charity.css";

function LogoSlider() {
  return (
    <div className="partners-wrapper">
      <h1>OUR <span>CLIENTS</span></h1>
     <div className="partners">
  {/* Set 1 */}
  <img src="/logo1.png" />
  <img src="/logo2.png" />
  <img src="/logo3.png" />
  <img src="/logo4.png" />
  <img src="/logo5.png" />

  {/* Set 2 */}
  <img src="/logo1.png" />
  <img src="/logo2.png" />
  <img src="/logo3.png" />
  <img src="/logo4.png" />
  <img src="/logo5.png" />

  {/* Set 3 🔥 */}
  <img src="/logo1.png" />
  <img src="/logo2.png" />
  <img src="/logo3.png" />
  <img src="/logo4.png" />
  <img src="/logo5.png" />

   <img src="/logo1.png" />
  <img src="/logo2.png" />
  <img src="/logo3.png" />
  <img src="/logo4.png" />
  <img src="/logo5.png" />
</div>
    </div>
  );
}

export default LogoSlider;