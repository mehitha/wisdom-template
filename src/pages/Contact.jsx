





import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Share2, ArrowUpRight, MessageSquare, User } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { School } from "lucide-react";


import Header from "../components/Header";
import Footer from "../components/Footer";

import contactHero from "../assets/contact-hero.jpg";
import contactOffice from "../assets/contact-office.jpg";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  // Feedback rating
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // OTP
  const [otpSent, setOtpSent] = useState(false);
  const [otpInput, setOtpInput] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [verified, setVerified] = useState(false);

  // Show rating if Feedback selected
  const [showRating, setShowRating] = useState(false);

  // Image CAPTCHA
  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  // Generate Image CAPTCHA
  const generateImageCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let text = "";
    for (let i = 0; i < 5; i++) {
      text += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptchaCode(text);
  };

  useEffect(() => {
    generateImageCaptcha();
  }, []);

  // Handle Purpose Change
  const handlePurposeChange = () => {
    const purpose = formRef.current.purpose.value;
    setShowRating(purpose === "Feedback");
  };

  // OTP Functions
  const sendOtp = async () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(code);
    setOtpSent(true);

    await fetch("https://formsubmit.co/ajax/angelinmehitha@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formRef.current.email.value,
        otp: code,
        name: formRef.current.name.value,
        _subject: "Your Verification OTP",
      }),
    });

    alert("OTP sent to your email. Check inbox/spam!");
  };

  const verifyOtp = () => {
    if (otpInput === generatedOtp) {
      setVerified(true);
      alert("✅ Phone/email verified!");
    } else {
      alert("❌ Incorrect OTP. Try again.");
    }
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default first

    // Check OTP
    if (!verified) {
      alert("Please verify your phone/email before submitting!");
      return;
    }

    // Check Image CAPTCHA
    if (captchaInput !== captchaCode) {
      alert("Invalid captcha! Please try again.");
      generateImageCaptcha();
      return;
    }

    // Save Feedback to SheetDB if Feedback purpose
    if (formRef.current.purpose.value === "Feedback") {
      const feedbackData = {
        data: [
          {
            name: formRef.current.name.value,
            email: formRef.current.email.value,
            phone: formRef.current.phone.value,
            rating: rating,
            message: formRef.current.message.value,
            timestamp: new Date().toLocaleString(),
          },
        ],
      };

      fetch("https://sheetdb.io/api/v1/i184dnsc7bjbz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedbackData),
      })
        .then(() => console.log("✅ Feedback saved to SheetDB"))
        .catch((err) => console.error("❌ SheetDB Error:", err));
    }

    // After validations, submit the form to FormSubmit.co
    formRef.current.submit();
  };

  return (
    <>
      <Header />

      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <img src={contactHero} alt="Contact us banner" className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <motion.div className="hero-tag" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="tag-text">✿ Start Donating Poor People</span>
            </motion.div>
            <motion.h1 className="hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              Contact Us
            </motion.h1>
          </div>
        </section>

        {/* Body Section */}
        <section className="contact-body">
          <div className="contact-container">
            {/* LEFT SIDE - Info */}
            <div className="contact-info">
              <h2 className="info-title">Contact Us</h2>
              <div className="info-grid">
                <div>
                  <div className="info-item">
                    <MapPin className="info-icon" />
                    <h4 className="info-label">Location</h4>
                  </div>
                  <p className="info-value">Melbourne, Australia</p>
                </div>
                <div>
                  <div className="info-item">
                    <Phone className="info-icon" />
                    <h4 className="info-label">Phone</h4>
                  </div>
                  <p className="info-value">+1 234 567 890</p>
                </div>
                <div>
                  <div className="info-item">
                    <Mail className="info-icon" />
                    <h4 className="info-label">Email</h4>
                  </div>
                  <p className="info-value">example@email.com</p>
                </div>
                <div>
                  <div className="info-item">
                    <Share2 className="info-icon" />
                    <h4 className="info-label">Social</h4>
                  </div>
                  <div className="social-icons">
                    {["f", "v", "t", "in"].map((s, i) => (
                      <a key={i} href="#" className="social-icon">{s}</a>
                    ))}
                  </div>
                </div>
              </div>
              <img src={contactOffice} alt="Office" className="office-image" />
            </div>

            {/* RIGHT SIDE - Form */}
            <motion.div className="contact-form" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="form-title">For Contact our Wisdom Foundation</h3>
              <p className="form-description">Fill The Form</p>

<form
  ref={formRef}
  action="https://formsubmit.co/angelinmehitha@gmail.com"
  method="POST"
  className="form-content"
  onSubmit={handleSubmit}
>
  {/* Disable Google reCAPTCHA */}
<input type="hidden" name="_captcha" value="false" />
                {/* Name */}
                <div className="input-group">
                  <input type="text" name="Name" placeholder="Enter Name" className="input-field" required />
                  <User className="input-icon" />
                </div>

                {/* Email */}
                <div className="input-group">
                  <input type="email" name="Email" placeholder="Enter Email" className="input-field" required />
                  <Mail className="input-icon" />
                </div>

                {/* Phone */}
                <div className="input-group">
                  <input type="tel" name="Phone" placeholder="Phone Number" className="input-field" />
                  <Phone className="input-icon" />
                </div>


                {/* OTP */}
                <div className="input-group otp-group">
                  {!otpSent && <button type="button" onClick={sendOtp} className="send-otp-btn">Send OTP</button>}
                  {otpSent && !verified && <>
                    <input type="text" placeholder="Enter OTP" value={otpInput} onChange={(e) => setOtpInput(e.target.value)} className="input-field" />
                    <button type="button" onClick={verifyOtp} className="verify-otp-btn">Verify OTP</button>
                  </>}
                  {verified && <p style={{ color: "green" }}>✅ Verified</p>}
                </div>

                  <div className="input-group">
                  <input type="text" name="INSTITUTION NAME" placeholder="Institution Name" className="input-field" />
                  <School className="input-icon" />
                </div>


                {/* Purpose */}
                <div className="input-group">
                  <select name="purpose" className="input-field" required onChange={handlePurposeChange}>
                    <option value="">Select Purpose</option>
                    <option value="Testimony">Testimony</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Invite Wisdom Foundation">TO Invite Wisdom Foundation</option>
                  </select>
                  {/* <ArrowUpRight className="input-icon" /> */}
                </div>

                {/* Feedback Rating */}
                {showRating && <div className="input-group rating-group">
                  <label>Rate your experience:</label>
                  <div className="stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} size={24} style={{ cursor: "pointer", marginRight: 5 }} color={(hoverRating || rating) >= star ? "#ffc107" : "#e4e5e9"} onClick={() => setRating(star)} onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)} />
                    ))}
                  </div>
                  <input type="hidden" name="rating" value={rating} />
                </div>}

                {/* Message */}
                <div className="input-group textarea-wrap">
                  <textarea name="message" placeholder="Your Message..." rows={5} className="textarea-field" required />
                  <MessageSquare className="input-icon" />
                </div>

                {/* Image CAPTCHA */}
                <div className="input-group captcha-group">
                  <div className="captcha-box">{captchaCode}</div>
                  <input type="text" className="input-field" placeholder="Enter captcha" value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} required />
                  <button type="button" onClick={generateImageCaptcha} className="captcha-refresh-btn">Refresh</button>
                </div>

                {/* Submit */}
                <button type="submit" className="submit-btn">Submit <ArrowUpRight className="icon-arrow" /></button>

                {/* Status Messages */}
                {status === "sending" && <p style={{ color: "blue", marginTop: "1rem" }}>Sending...</p>}
                {status === "success" && <p style={{ color: "green", marginTop: "1rem" }}>✅ Message sent successfully!</p>}
                {status === "error" && <p style={{ color: "red", marginTop: "1rem" }}>❌ Failed to send. Please try again.</p>}
              </form>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Contact;