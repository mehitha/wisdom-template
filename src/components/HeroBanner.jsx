import { useRef, useState } from "react";
import "../styles/HeroBanner.css";

// Heart-hands icon SVG (matches the screenshot)
function HeartHandsIcon() {
  return (
    <svg
      className="panel-icon"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 18c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 3 1.6 5.6 4 7.1V44h8V25.1c2.4-1.5 4-4.1 4-7.1z"
        fill="white"
        opacity="0.15"
      />
      {/* Hands */}
      <path
        d="M10 38c0 0 4-4 10-4h4c2.2 0 4 1.8 4 4v2H10v-2z"
        fill="white"
      />
      <path
        d="M54 38c0 0-4-4-10-4h-4c-2.2 0-4 1.8-4 4v2h18v-2z"
        fill="white"
      />
      <path
        d="M10 40v6c0 1.1.9 2 2 2h40c1.1 0 2-.9 2-2v-6H10z"
        fill="white"
      />
      {/* Heart */}
      <path
        d="M32 30l-7-7c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8 0L32 18.4l1.2-1.2c1.6-1.6 4.2-1.6 5.8 0 1.6 1.6 1.6 4.2 0 5.8L32 30z"
        fill="white"
      />
    </svg>
  );
}

// Play icon
function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export default function HeroBanner() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      } else {
        videoRef.current.play();
        setPlaying(true);
      }
    }
  };

  return (
    <>
      {/* Settings button */}
      <button className="settings-btn" title="Settings">
        ⚙
      </button>

      <section className="hero-banner">
        {/* ── LEFT PANEL ── */}
        <div className="hero-panel left">
          <div className="panel-content">
            <HeartHandsIcon />
            <p className="panel-subtitle">We Give Child A Gift Of A Education</p>
            <h2 className="panel-title">Become A Volunteer?</h2>
            <button className="btn-contact">Contact Now</button>
          </div>
        </div>

        {/* ── CENTER VIDEO PANEL ── */}
        <div className="hero-center">
          {/* 
            Replace the src below with your actual video file path.
            Example: src="/videos/charity.mp4"
            The video is grayscale via CSS filter.
          */}
          <video
            ref={videoRef}
            src="/your-video.mp4"
            loop
            playsInline
            preload="metadata"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "grayscale(100%) brightness(0.75)" }}
          />

          {/* Jagged yellow edges */}
          <div className="center-edge-left" />
          <div className="center-edge-right" />

          {/* Play/Pause overlay button */}
          <div className="play-overlay">
            <button className="play-btn" onClick={handlePlay} title={playing ? "Pause" : "Play"}>
              {playing ? (
                // Pause icon
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <PlayIcon />
              )}
            </button>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="hero-panel right">
          <div className="panel-content">
            <HeartHandsIcon />
            <p className="panel-subtitle">We Give Child A Gift Of A Education</p>
            <h2 className="panel-title">Make Donation To Us?</h2>
            <button className="btn-donate">Donate Now</button>
          </div>
        </div>
      </section>
    </>
  );
}

