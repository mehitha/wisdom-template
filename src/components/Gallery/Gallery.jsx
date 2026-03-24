import "./Gallery.css";
import React, { useState } from "react";

// ✅ HEADER & FOOTER
import Header from "../Header";
import Footer from "../Footer";

// 🔥 HERO IMPORT
import Hero from "../Hero/Hero1";

// ✅ LIGHTGALLERY
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

// 🔥 IMAGES
import img1 from "../../assets/wisdomgallery/WhatsApp Image 2026-03-13 at 1.53.59 PM (1).jpeg";
import img2 from "../../assets/gallery/2.jpg";
import img3 from "../../assets/gallery/3.jpg";
import img4 from "../../assets/gallery/4.jpeg";
import img5 from "../../assets/wisdomgallery/WhatsApp Image 2026-03-13 at 1.53.59 PM.jpeg";
import img6 from "../../assets/wisdomgallery/WhatsApp Image 2026-03-13 at 1.54.02 PM (1).jpeg";
import img7 from "../../assets/wisdomgallery/WhatsApp Image 2026-03-13 at 1.54.02 PM.jpeg";

function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const [albums] = useState([
    { name: "Food Donation", images: [img1, img2, img3, img4] },
    { name: "Charity Event", images: [img5, img6, img7, img1] },
    { name: "Helping Hands", images: [img1, img3, img4, img2] },
    { name: "Medical Camp", images: [img2, img4, img1, img3] },
    { name: "Child Support", images: [img1, img2, img4, img3] },
    { name: "Volunteer Work", images: [img2, img3, img1, img4] },
    { name: "Education Help", images: [img1, img2, img3, img4] },
    { name: "Old Age Support", images: [img2, img3, img4, img1] },
    { name: "Disaster Relief", images: [img1, img3, img2, img4] },
  ]);

  const visibleAlbums = showAll ? albums : albums.slice(0, 6);

  return (
    <>
      {/* 🔝 HEADER */}
      <Header />

      {/* 🔥 HERO */}
      <Hero 
        title="Gallery" 
        subtitle="✿ Explore Our Memories" 
      />

      {/* 📸 GALLERY */}
      <section className="gallery">
        <div className="gallery-header">
          <h2>Our Albums</h2>
        </div>

        {/* ALBUM LIST */}
        {!selectedAlbum && (
          <>
            <div className="album-grid">
              {visibleAlbums.map((album, i) => (
                <div
                  key={i}
                  className="album-tile"
                  onClick={() => setSelectedAlbum(album)}
                >
                  <div className="stack">
                    {album.images.slice(0, 3).map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt=""
                        className={`stack-img img-${index}`}
                      />
                    ))}
                  </div>
                  <div className="album-overlay">
                    <p>{album.name}</p>
                  </div>
                  <p className="album-title">{album.name}</p>
                </div>
              ))}
            </div>

            {albums.length > 6 && (
              <button
                className="show-more-btn"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            )}
          </>
        )}

        {/* ALBUM OPEN */}
        {selectedAlbum && (
          <div className="lightgallery-wrapper">
            <div className="album-header">
              <h3>{selectedAlbum.name}</h3>
              <span
                className="close-btn"
                onClick={() => setSelectedAlbum(null)}
              >
                Back
              </span>
            </div>

            <LightGallery
              speed={500}
              plugins={[
                lgThumbnail,
                lgZoom,
                lgAutoplay,
                lgFullscreen,
                lgRotate,
                lgShare,
              ]}
            >
              {selectedAlbum.images.map((img, index) => (
                <a href={img} key={index}>
                  <img src={img} alt="" />
                </a>
              ))}
            </LightGallery>
          </div>
        )}
      </section>

      {/* 🔚 FOOTER */}
      <Footer />
    </>
  );
}

export default Gallery;