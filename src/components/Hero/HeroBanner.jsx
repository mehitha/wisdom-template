import React from "react";

function HeroBanner() {
  return (
    <>
      {/* CSS INSIDE SAME FILE */}
      <style>{`
        body {
          margin: 0;
          padding: 0;
        }

        .hero-banner {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: grayscale(100%);
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(247, 250, 249, 0.9) 30%,
            rgba(253, 250, 250, 0.958) 100%
          );
        }

        .hero-content {
          position: absolute;
          top: 30%;
          left: 10%;
          transform: translate(-50%, -50%);
          color: #fff;
          text-align: center;
        }

        .subtitle {
          color: #fbf8f5;
          font-size: 50px;
          margin-bottom: 10px;
        }

        .hero-content h1 {
          font-size: 70px;
          font-weight: bold;
        }
      `}</style>

      {/* JSX */}
      <section className="hero-banner">
        <img
          src="/images/hero1.png"
          alt="hero"
          className="hero-img"
        />

        <div className="overlay"></div>

        <div className="hero-content">
          <p className="subtitle">
            Discovering the people who need help.......We help to see the real happy faces
          </p>
          <h1>HELP TO SEE HAPPY FACES</h1>
        </div>
      </section>
    </>
  );
}

export default HeroBanner;