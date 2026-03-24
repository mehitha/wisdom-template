import React from "react";
import { motion } from "framer-motion";
import contactHero from "./contact.png";

const Hero = () => {
  return (
    <>
      {/* Inline CSS */}
      <style>{`
        .contact-hero {
          position: relative;
          height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
        }

        .hero-tag {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .tag-text {
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 1px;
          color: #fbbf24;
        }

        .hero-title {
          margin: 0;
          font-size: 2.5rem;
          font-weight: 900;
          color: #ffffff;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .contact-hero {
            height: 280px;
          }

          .hero-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .contact-hero {
            height: 220px;
          }

          .hero-title {
            font-size: 1.5rem;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="contact-hero">
        <img src={contactHero} alt="banner" className="hero-image" />
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <motion.div
            className="hero-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="tag-text">✿ Start Donating Poor People</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            OUR GALLERY
          </motion.h1>
        </div>
      </section>
    </>
  );
};

export default Hero;