import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Gallery.css";

function ImageView() {
    
  const location = useLocation();
  const navigate = useNavigate();

  const { img } = location.state || {};

  if (!img) {
    return <h2 style={{ textAlign: "center" }}>No Image Found</h2>;
  }

  return (
    <div className="image-page">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <div className="image-container">
        <img src={img} alt="full" />
      </div>

    </div>
  );
}

export default ImageView;