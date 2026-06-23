'use client';

import React from "react";
import { useRouter } from 'next/navigation';  // ✅ Changed from useNavigate
import "./Gallery.css";

function ImageView() {
    
  const router = useRouter();  // ✅ Changed from useNavigate

  // ✅ Get image from URL params instead of location.state
  const [img, setImg] = React.useState(null);

  React.useEffect(() => {
    // Get image from URL query params
    const urlParams = new URLSearchParams(window.location.search);
    const imageUrl = urlParams.get('image');
    if (imageUrl) {
      setImg(imageUrl);
    }
  }, []);

  if (!img) {
    return <h2 style={{ textAlign: "center" }}>No Image Found</h2>;
  }

  return (
    <div className="image-page">

      <button className="back-btn" onClick={() => router.back()}>  {/* ✅ Changed from navigate(-1) */}
        ⬅ Back
      </button>

      <div className="image-container">
        <img src={img} alt="full" />
      </div>

    </div>
  );
}

export default ImageView;