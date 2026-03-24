import React, { useState, useEffect } from 'react';
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.png";
import "../styles/Hero1.css";

const Hero1 = () => {
  // Array of your slider data
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
      subtitle: "✨ Start Donating Poor People",
      title: <>Giving Help <br /> To Those <br /> Who Need It.</>
    },
    {
      image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2070",
      subtitle: "🌿 Pure Charity for Humanity",
      title: <>Better Life <br /> For Every <br /> Single Child.</>
    },
    {
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070",
      subtitle: "🤝 Support Each Other Today",
      title: <>Your Small <br /> Help Can <br /> Change Worlds.</>
    }
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };


  const [amount, setAmount] = useState(50);
  
    const amounts = [20, 50, 100, 200];
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section 
        className="hero" 
        style={{ backgroundImage: `linear-gradient(to right, rgba(26, 36, 40, 0.9), rgba(26, 36, 40, 0.4)), url(${slides[current].image})` }}
      >
        <div className="hero-content fade-in" key={current}>
          <p className="subtitle">{slides[current].subtitle}</p>
          <h1>{slides[current].title}</h1>
          <div className="hero-btns">
            <button className="btn-secondary">Discover More ↗</button>
            <button className="btn-primary">Get A Quote ↗</button>
          </div>
        </div>
        
        {/* Slider Controls */}
        <div className="slider-controls">
          <button className="prev" onClick={prevSlide}>←</button>
          <button className="next" onClick={nextSlide}>→</button>
        </div>

        {/* Optional Page Indicator */}
        <div className="slide-number">
            0{current + 1} / 0{slides.length}
        </div>


      </section>


      <div className="homepage">

    {/* HERO + CARD WRAPPER */}
    <div className="hero-wrapper">

      {/* HERO SECTION */}
      <section 
        className="hero" 
        style={{ 
          backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
          
        }}
      >
        <div className="hero-content fade-in" key={current}>
          <p>
            Join The <span>Community</span> To Give Education For Children
          </p>

        </div>

        <div className="slider-controls">
          <button onClick={prevSlide}>←</button>
          <button onClick={nextSlide}>→</button>
        </div>

        <div className="slide-number">
          0{current + 1} / 0{slides.length}
        </div>
      </section>

      {/* 🔥 OVERLAP DONATION CARD */}
      
      <div className="donation-overlap">
        <section className="donation">

          <div className="donation-container">

            {/* LEFT */}
            <div className="donation-left">
              <h2>Support Where It Counts.</h2>

              <div className="notice">
                ⚠ Test Mode Is Enabled
              </div>

              <h3>Your Donation:</h3>

              <div className="amount-box">
                <span>$</span>
                <input value={amount} readOnly />
              </div>

              <div className="amount-buttons">
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    className={amount === amt ? "active" : ""}
                    onClick={() => setAmount(amt)}
                  >
                    {amt}
                  </button>
                ))}
              </div>

              <button className="donate-btn">Donate Now →</button>
            </div>

            {/* RIGHT */}
            <div className="donation-right">
              <img src={image} alt="donation" />
            </div>

          </div>
        </section>
      </div>

    </div>
  </div>


      
    </div>
  );
};

export default Hero1;