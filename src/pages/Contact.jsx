// import React, { useRef, useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { MapPin, Phone, Mail, Share2, ArrowUpRight, MessageSquare, User } from "lucide-react";
// import { FaStar } from "react-icons/fa";
// import { School } from "lucide-react";

// import Header from "../components/Header";
// import Footer from "../components/Footer";

// import contactHero from "../assets/contact-hero.jpg";
// import contactOffice from "../assets/contact-office.jpg";
// import "./Contact.css";

// const Contact = () => {
//   const formRef = useRef();
//   const [status, setStatus] = useState("");

//   // Feedback rating
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);

//   // OTP
//   const [otpSent, setOtpSent] = useState(false);
//   const [otpInput, setOtpInput] = useState("");
//   const [generatedOtp, setGeneratedOtp] = useState("");
//   const [verified, setVerified] = useState(false);

//   // Form data states - Fixed name field
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: ""
//   });

//   // Show rating if Feedback selected
//   const [showRating, setShowRating] = useState(false);

//   // Image CAPTCHA
//   const [captchaCode, setCaptchaCode] = useState("");
//   const [captchaInput, setCaptchaInput] = useState("");

//   // Generate Image CAPTCHA
//   const generateImageCaptcha = () => {
//     const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
//     let text = "";
//     for (let i = 0; i < 5; i++) {
//       text += chars[Math.floor(Math.random() * chars.length)];
//     }
//     setCaptchaCode(text);
//   };

//   useEffect(() => {
//     generateImageCaptcha();
//   }, []);

//   // Update form data when inputs change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     // Handle both Name/Email/Phone and lowercase versions
//     setFormData(prev => ({
//       ...prev,
//       name: name === "Name" ? value : prev.name,
//       email: name === "Email" ? value : prev.email,
//       phone: name === "Phone" ? value : prev.phone
//     }));
//   };

//   // Handle Purpose Change
//   const handlePurposeChange = (e) => {
//     const purpose = e.target.value;
//     setShowRating(purpose === "Feedback");
//   };

//   // OTP Functions - Fixed
//   const sendOtp = async () => {
//     if (!formData.email) {
//       alert("Please enter your email first!");
//       return;
//     }
//     if (!formData.name) {
//       alert("Please enter your name first!");
//       return;
//     }

//     const code = Math.floor(100000 + Math.random() * 900000).toString();
//     setGeneratedOtp(code);
//     setOtpSent(true);

//     try {
//       await fetch("https://formsubmit.co/ajax/angelinmehitha@gmail.com", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email: formData.email,
//           otp: code,
//           name: formData.name,
//           _subject: "Your Verification OTP",
//         }),
//       });
//       alert("OTP sent to your email. Check inbox/spam!");
//     } catch (error) {
//       console.error("OTP send failed:", error);
//     }
//   };

//   const verifyOtp = () => {
//     if (otpInput === generatedOtp) {
//       setVerified(true);
//       alert("✅ Phone/email verified!");
//     } else {
//       alert("❌ Incorrect OTP. Try again.");
//     }
//   };

//   // Handle Form Submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check OTP
//     if (!verified) {
//       alert("Please verify your phone/email before submitting!");
//       return;
//     }

//     // Check Image CAPTCHA
//     if (captchaInput !== captchaCode) {
//       alert("Invalid captcha! Please try again.");
//       generateImageCaptcha();
//       setCaptchaInput("");
//       return;
//     }

//     // Save Feedback to SheetDB if Feedback purpose
//     const purpose = formRef.current?.purpose?.value;
//     if (purpose === "Feedback") {
//       const feedbackData = {
//         data: [
//           {
//             name: formData.name || formRef.current?.Name?.value,
//             email: formData.email || formRef.current?.Email?.value,
//             phone: formData.phone || formRef.current?.Phone?.value,
//             rating: rating,
//             message: formRef.current?.message?.value,
//             timestamp: new Date().toLocaleString(),
//           },
//         ],
//       };

//       try {
//         await fetch("https://sheetdb.io/api/v1/i184dnsc7bjbz", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(feedbackData),
//         });
//         console.log("✅ Feedback saved to SheetDB");
//       } catch (err) {
//         console.error("❌ SheetDB Error:", err);
//       }
//     }

//     // Submit to FormSubmit.co
//     if (formRef.current) {
//       formRef.current.submit();
//     }
//   };

//   return (
//     <>
//       <Header />

//       <div className="contact-page">
//         {/* Hero Section */}
//         <section className="contact-hero">
//           <img src={contactHero} alt="Contact us banner" className="hero-image" />
//           <div className="hero-overlay" />
//           <div className="hero-content">
//             <motion.div className="hero-tag" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//               <span className="tag-text">✿ Start Donating Poor People</span>
//             </motion.div>
//             <motion.h1 className="hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
//               Contact Us
//             </motion.h1>
//           </div>
//         </section>

//         {/* Body Section */}
//         <section className="contact-body">
//           <div className="contact-container">
//             {/* LEFT SIDE - Info */}
//             <div className="contact-info">
//               <h2 className="info-title">Contact Us</h2>
//               <div className="info-grid">
//                 <div>
//                   <div className="info-item">
//                     <MapPin className="info-icon" />
//                     <h4 className="info-label">Location</h4>
//                   </div>
//                   <p className="info-value">Melbourne, Australia</p>
//                 </div>
//                 <div>
//                   <div className="info-item">
//                     <Phone className="info-icon" />
//                     <h4 className="info-label">Phone</h4>
//                   </div>
//                   <p className="info-value">+1 234 567 890</p>
//                 </div>
//                 <div>
//                   <div className="info-item">
//                     <Mail className="info-icon" />
//                     <h4 className="info-label">Email</h4>
//                   </div>
//                   <p className="info-value">example@email.com</p>
//                 </div>
//                 <div>
//                   <div className="info-item">
//                     <Share2 className="info-icon" />
//                     <h4 className="info-label">Social</h4>
//                   </div>
//                   <div className="social-icons">
//                     {["f", "y", "i"].map((s, i) => (
//                       <a key={i} href="#" className="social-icon">{s}</a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <img src={contactOffice} alt="Office" className="office-image" />
//             </div>

//             {/* RIGHT SIDE - Form */}
//             <motion.div className="contact-form" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
//               <h3 className="form-title">For Contact our Wisdom Foundation</h3>
//               <p className="form-description">Fill The Form</p>

//               <form
//                 ref={formRef}
//                 action="https://formsubmit.co/angelinmehitha@gmail.com"
//                 method="POST"
//                 className="form-content"
//                 onSubmit={handleSubmit}
//               >
//                 {/* Disable Google reCAPTCHA */}
//                 <input type="hidden" name="_captcha" value="false" />
                
//                 {/* Name - FIXED */}
//                 <div className="input-group">
//                   <input 
//                     type="text" 
//                     name="Name" 
//                     placeholder="Enter Name" 
//                     className="input-field" 
//                     required 
//                     value={formData.name}
//                     onChange={handleInputChange}
//                   />
//                   <User className="input-icon" />
//                 </div>

//                 {/* Email */}
//                 <div className="input-group">
//                   <input 
//                     type="email" 
//                     name="Email" 
//                     placeholder="Enter Email" 
//                     className="input-field" 
//                     required 
//                     value={formData.email}
//                     onChange={handleInputChange}
//                   />
//                   <Mail className="input-icon" />
//                 </div>

//                 {/* Phone */}
//                 <div className="input-group">
//                   <input 
//                     type="tel" 
//                     name="Phone" 
//                     placeholder="Phone Number" 
//                     className="input-field" 
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                   />
//                   <Phone className="input-icon" />
//                 </div>

//                 {/* OTP */}
//                 <div className="input-group otp-group">
//                   {!otpSent && <button type="button" onClick={sendOtp} className="send-otp-btn">Send OTP</button>}
//                   {otpSent && !verified && <>
//                     <input 
//                       type="text" 
//                       placeholder="Enter OTP" 
//                       value={otpInput} 
//                       onChange={(e) => setOtpInput(e.target.value)} 
//                       className="input-field" 
//                     />
//                     <button type="button" onClick={verifyOtp} className="verify-otp-btn">Verify OTP</button>
//                   </>}
//                   {verified && <p style={{ color: "green" }}>✅ Verified</p>}
//                 </div>

//                 <div className="input-group">
//                   <input type="text" name="INSTITUTION NAME" placeholder="Institution Name" className="input-field" />
//                   <School className="input-icon" />
//                 </div>

//                 {/* Purpose */}
//                 <div className="input-group">
//                   <select name="purpose" className="input-field" required onChange={handlePurposeChange}>
//                     <option value="">Select Purpose</option>
//                     <option value="Testimony">Testimony</option>
//                     <option value="Feedback">Feedback</option>
//                     <option value="Invite Wisdom Foundation">TO Invite Wisdom Foundation</option>
//                   </select>
//                 </div>

//                 {/* Feedback Rating */}
//                 {showRating && (
//                   <div className="input-group rating-group">
//                     <label>Rate your experience:</label>
//                     <div className="stars">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <FaStar 
//                           key={star} 
//                           size={24} 
//                           style={{ cursor: "pointer", marginRight: 5 }} 
//                           color={(hoverRating || rating) >= star ? "#ffc107" : "#e4e5e9"} 
//                           onClick={() => setRating(star)} 
//                           onMouseEnter={() => setHoverRating(star)} 
//                           onMouseLeave={() => setHoverRating(0)} 
//                         />
//                       ))}
//                     </div>
//                     <input type="hidden" name="rating" value={rating} />
//                   </div>
//                 )}

//                 {/* Message */}
//                 <div className="input-group textarea-wrap">
//                   <textarea name="message" placeholder="Your Message..." rows={5} className="textarea-field" required />
//                   <MessageSquare className="input-icon" />
//                 </div>

//                 {/* Image CAPTCHA */}
//                 <div className="input-group captcha-group">
//                   <div className="captcha-box">{captchaCode}</div>
//                   <input 
//                     type="text" 
//                     className="input-field" 
//                     placeholder="Enter captcha" 
//                     value={captchaInput} 
//                     onChange={(e) => setCaptchaInput(e.target.value)} 
//                     required 
//                   />
//                   <button type="button" onClick={generateImageCaptcha} className="captcha-refresh-btn">Refresh</button>
//                 </div>

//                 {/* Submit */}
//                 <button type="submit" className="submit-btn">
//                   Submit <ArrowUpRight className="icon-arrow" />
//                 </button>

//                 {/* Status Messages */}
//                 {status === "sending" && <p style={{ color: "blue", marginTop: "1rem" }}>Sending...</p>}
//                 {status === "success" && <p style={{ color: "green", marginTop: "1rem" }}>✅ Message sent successfully!</p>}
//                 {status === "error" && <p style={{ color: "red", marginTop: "1rem" }}>❌ Failed to send. Please try again.</p>}
//               </form>
//             </motion.div>
//           </div>
//         </section>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Contact;






// import React, { useRef, useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { MapPin, Phone, Mail, Share2, ArrowUpRight, MessageSquare, User } from "lucide-react";
// import { FaStar } from "react-icons/fa";
// import { School } from "lucide-react";

// import Header from "../components/Header";
// import Footer from "../components/Footer";

// import contactHero from "../assets/contact-hero.jpg";
// import contactOffice from "../assets/contact-office.jpg";
// import "./Contact.css";

// const Contact = () => {
//   const formRef = useRef();

//   // Status
//   const [status, setStatus] = useState("");

//   // Feedback rating
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);

//   // Form data
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   // Show rating if Feedback selected
//   const [showRating, setShowRating] = useState(false);

//   // Image CAPTCHA
//   const [captchaCode, setCaptchaCode] = useState("");
//   const [captchaInput, setCaptchaInput] = useState("");

//   // Generate Image CAPTCHA
//   const generateImageCaptcha = () => {
//     const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
//     let text = "";
//     for (let i = 0; i < 5; i++) {
//       text += chars[Math.floor(Math.random() * chars.length)];
//     }
//     setCaptchaCode(text);
//   };

//   useEffect(() => {
//     generateImageCaptcha();
//   }, []);

//   // Update form data when inputs change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       name: name === "Name" ? value : prev.name,
//       email: name === "Email" ? value : prev.email,
//       phone: name === "Phone" ? value : prev.phone,
//     }));
//   };

//   // Handle Purpose Change
//   const handlePurposeChange = (e) => {
//     const purpose = e.target.value;
//     setShowRating(purpose === "Feedback");
//   };

//   // Handle Form Submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // CAPTCHA check
//     if (captchaInput !== captchaCode) {
//       alert("Invalid captcha! Please try again.");
//       generateImageCaptcha();
//       setCaptchaInput("");
//       return;
//     }

//     const purpose = formRef.current?.purpose?.value;

//     // SheetDB – only for Feedback
//     if (purpose === "Feedback") {
//       const feedbackData = {
//         data: [
//           {
//             name: formData.name || formRef.current?.Name?.value,
//             email: formData.email || formRef.current?.Email?.value,
//             phone: formData.phone || formRef.current?.Phone?.value,
//             rating: rating,
//             message: formRef.current?.message?.value,
//             purpose: purpose,
//             timestamp: new Date().toLocaleString(),
//           },
//         ],
//       };

//       try {
//         await fetch("https://sheetdb.io/api/v1/i184dnsc7bjbz", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(feedbackData),
//         });
//         console.log("✅ Feedback saved to SheetDB");
//       } catch (err) {
//         console.error("❌ SheetDB Error:", err);
//       }
//     }

//     // Finally submit to FormSubmit (admin mail)
//     if (formRef.current) {
//       setStatus("sending");
//       formRef.current.submit();
//       // FormSubmit redirect ஆனதுனால status UI perfect‑ஆ தெரியாம இருக்கலாம்.
//     }
//   };

//   return (
//     <>
//       <Header />

//       <div className="contact-page">
//         {/* Hero Section */}
//         <section className="contact-hero">
//           <img src={contactHero} alt="Contact us banner" className="hero-image" />
//           <div className="hero-overlay" />
//           <div className="hero-content">
//             <motion.div
//               className="hero-tag"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               <span className="tag-text">✿ Start Donating Poor People</span>
//             </motion.div>
//             <motion.h1
//               className="hero-title"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               Contact Us
//             </motion.h1>
//           </div>
//         </section>

//         {/* Body Section */}
//         <section className="contact-body">
//           <div className="contact-container">
//             {/* LEFT SIDE - Info */}
//             <div className="contact-info">
//               <h2 className="info-title">Contact Us</h2>
//               <div className="info-grid">
//                 <div>
//                   <div className="info-item">
//                     <MapPin className="info-icon" />
//                     <h4 className="info-label">Location</h4>
//                   </div>
//                   <p className="info-value">Melbourne, Australia</p>
//                 </div>
//                 <div>
//                   <div className="info-item">
//                     <Phone className="info-icon" />
//                     <h4 className="info-label">Phone</h4>
//                   </div>
//                   <p className="info-value">+1 234 567 890</p>
//                 </div>
//                 <div>
//                   <div className="info-item">
//                     <Mail className="info-icon" />
//                     <h4 className="info-label">Email</h4>
//                   </div>
//                   <p className="info-value">example@email.com</p>
//                 </div>
//                 <div>
//                   <div className="info-item">
//                     <Share2 className="info-icon" />
//                     <h4 className="info-label">Social</h4>
//                   </div>
//                   <div className="social-icons">
//                     {["f", "y", "i"].map((s, i) => (
//                       <a key={i} href="#" className="social-icon">
//                         {s}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <img src={contactOffice} alt="Office" className="office-image" />
//             </div>

//             {/* RIGHT SIDE - Form */}
//             <motion.div
//               className="contact-form"
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <h3 className="form-title">For Contact our Wisdom Foundation</h3>
//               <p className="form-description">Fill The Form</p>

//               <form
//                 ref={formRef}
//                 action="https://formsubmit.co/angelinmehitha@gmail.com"
//                 method="POST"
//                 className="form-content"
//                 onSubmit={handleSubmit}
//               >
//                 {/* Disable Google reCAPTCHA */}
//                 <input type="hidden" name="_captcha" value="false" />

//                 {/* Name */}
//                 <div className="input-group">
//                   <input
//                     type="text"
//                     name="Name"
//                     placeholder="Enter Name"
//                     className="input-field"
//                     required
//                     value={formData.name}
//                     onChange={handleInputChange}
//                   />
//                   <User className="input-icon" />
//                 </div>

//                 {/* Email */}
//                 <div className="input-group">
//                   <input
//                     type="email"
//                     name="Email"
//                     placeholder="Enter Email"
//                     className="input-field"
//                     required
//                     value={formData.email}
//                     onChange={handleInputChange}
//                   />
//                   <Mail className="input-icon" />
//                 </div>

//                 {/* Phone */}
//                 <div className="input-group">
//                   <input
//                     type="tel"
//                     name="Phone"
//                     placeholder="Phone Number"
//                     className="input-field"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                   />
//                   <Phone className="input-icon" />
//                 </div>

//                 {/* Institution */}
//                 <div className="input-group">
//                   <input
//                     type="text"
//                     name="INSTITUTION NAME"
//                     placeholder="Institution Name"
//                     className="input-field"
//                   />
//                   <School className="input-icon" />
//                 </div>

//                 {/* Purpose */}
//                 <div className="input-group">
//                   <select
//                     name="purpose"
//                     className="input-field"
//                     required
//                     onChange={handlePurposeChange}
//                   >
//                     <option value="">Select Purpose</option>
//                     <option value="Testimony">Testimony</option>
//                     <option value="Feedback">Feedback</option>
//                     <option value="Invite Wisdom Foundation">
//                       TO Invite Wisdom Foundation
//                     </option>
//                   </select>
//                 </div>

//                 {/* Feedback Rating */}
//                 {showRating && (
//                   <div className="input-group rating-group">
//                     <label>Rate your experience:</label>
//                     <div className="stars">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <FaStar
//                           key={star}
//                           size={24}
//                           style={{ cursor: "pointer", marginRight: 5 }}
//                           color={
//                             (hoverRating || rating) >= star
//                               ? "#ffc107"
//                               : "#e4e5e9"
//                           }
//                           onClick={() => setRating(star)}
//                           onMouseEnter={() => setHoverRating(star)}
//                           onMouseLeave={() => setHoverRating(0)}
//                         />
//                       ))}
//                     </div>
//                     <input type="hidden" name="rating" value={rating} />
//                   </div>
//                 )}

//                 {/* Message */}
//                 <div className="input-group textarea-wrap">
//                   <textarea
//                     name="message"
//                     placeholder="Your Message..."
//                     rows={5}
//                     className="textarea-field"
//                     required
//                   />
//                   <MessageSquare className="input-icon" />
//                 </div>

//                 {/* Image CAPTCHA */}
//                 <div className="input-group captcha-group">
//                   <div className="captcha-box">{captchaCode}</div>
//                   <input
//                     type="text"
//                     className="input-field"
//                     placeholder="Enter captcha"
//                     value={captchaInput}
//                     onChange={(e) => setCaptchaInput(e.target.value)}
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={generateImageCaptcha}
//                     className="captcha-refresh-btn"
//                   >
//                     Refresh
//                   </button>
//                 </div>

//                 {/* Submit */}
//                 <button type="submit" className="submit-btn">
//                   Submit <ArrowUpRight className="icon-arrow" />
//                 </button>

//                 {/* Status Messages (optional) */}
//                 {status === "sending" && (
//                   <p style={{ color: "blue", marginTop: "1rem" }}>Sending...</p>
//                 )}
//                 {status === "success" && (
//                   <p style={{ color: "green", marginTop: "1rem" }}>
//                     ✅ Message sent successfully!
//                   </p>
//                 )}
//                 {status === "error" && (
//                   <p style={{ color: "red", marginTop: "1rem" }}>
//                     ❌ Failed to send. Please try again.
//                   </p>
//                 )}
//               </form>
//             </motion.div>
//           </div>
//         </section>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Contact;









// import React, { useRef, useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { MapPin, Phone, Mail, Share2, ArrowUpRight, MessageSquare, User, School } from "lucide-react";
// import { FaStar } from "react-icons/fa";

// import Header from "../components/Header";
// import Footer from "../components/Footer";

// import contactHero from "../assets/contact-hero.jpg";
// import contactOffice from "../assets/contact-office.jpg";
// import "./Contact.css";

// // SINGLE SheetDB URL
// const SHEETDB_URL = "https://sheetdb.io/api/v1/i184dnsc7bjbz";

// const Contact = () => {
//   const formRef = useRef();
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
//   const [showRating, setShowRating] = useState(false);
//   const [captchaCode, setCaptchaCode] = useState("");
//   const [captchaInput, setCaptchaInput] = useState("");
//   const [status, setStatus] = useState("");

//   // CAPTCHA generator
//   const generateImageCaptcha = () => {
//     const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
//     let text = "";
//     for (let i = 0; i < 5; i++) {
//       text += chars[Math.floor(Math.random() * chars.length)];
//     }
//     setCaptchaCode(text);
//   };

//   useEffect(() => { generateImageCaptcha(); }, []);

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       name: name === "Name" ? value : prev.name,
//       email: name === "Email" ? value : prev.email,
//       phone: name === "Phone" ? value : prev.phone,
//     }));
//   };

//   // Show rating only for Feedback
//   const handlePurposeChange = (e) => {
//     const purpose = e.target.value;
//     setShowRating(purpose === "Feedback"); // ONLY Feedback shows rating
//   };

//   // Form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (captchaInput !== captchaCode) {
//       alert("Invalid captcha! Please try again.");
//       generateImageCaptcha();
//       setCaptchaInput("");
//       return;
//     }

//     const purpose = formRef.current?.purpose?.value;

//     // Prepare data for SheetDB
//     const postData = {
//       data: [
//         {
//           name: formData.name || formRef.current?.Name?.value,
//           email: formData.email || formRef.current?.Email?.value,
//           phone: formRef.current?.Phone?.value,
//           institution: formRef.current?.["INSTITUTION NAME"]?.value || "",
//           message: formRef.current?.message?.value,
//           timestamp: new Date().toLocaleString(),
//         },
//       ],
//     };

//     // Include rating ONLY for Feedback
//     if (purpose === "Feedback") {
//       postData.data[0].rating = rating;
//     }

//     // Determine which sheet to post to
//     let sheetName = "";
//     if (purpose === "Feedback") sheetName = "Feedback";
//     else if (purpose === "Testimony") sheetName = "Testimony";
//     else if (purpose === "Invite Wisdom Foundation") sheetName = "Invite";

//     try {
//       setStatus("sending");
//       await fetch(`${SHEETDB_URL}?sheet=${sheetName}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(postData),
//       });
//       console.log("✅ Saved to sheet:", sheetName);
//       setStatus("success");
//       alert("✅ Form submitted successfully!");
//       formRef.current.reset();
//       setRating(0);
//       setShowRating(false);
//       setFormData({ name: "", email: "", phone: "" });
//       generateImageCaptcha();
//     } catch (err) {
//       console.error("❌ SheetDB Error:", err);
//       setStatus("error");
//       alert("❌ Failed to submit. Please try again.");
//     }
//   };

//   return (
//     <>
//       <Header />

//       <div className="contact-page">
//         <section className="contact-hero">
//           <img src={contactHero} alt="Contact us banner" className="hero-image" />
//           <div className="hero-overlay" />
//           <div className="hero-content">
//             <motion.div className="hero-tag" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//               <span className="tag-text">✿ Start Donating Poor People</span>
//             </motion.div>
//             <motion.h1 className="hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
//               Contact Us
//             </motion.h1>
//           </div>
//         </section>

//         <section className="contact-body">
//           <div className="contact-container">
//             {/* LEFT SIDE */}
//             <div className="contact-info">
//               <h2 className="info-title">Contact Us</h2>
//               <div className="info-grid">
//                 <div>
//                   <div className="info-item"><MapPin className="info-icon" /><h4 className="info-label">Location</h4></div>
//                   <p className="info-value">Melbourne, Australia</p>
//                 </div>
//                 <div>
//                   <div className="info-item"><Phone className="info-icon" /><h4 className="info-label">Phone</h4></div>
//                   <p className="info-value">+1 234 567 890</p>
//                 </div>
//                 <div>
//                   <div className="info-item"><Mail className="info-icon" /><h4 className="info-label">Email</h4></div>
//                   <p className="info-value">example@email.com</p>
//                 </div>
//                 <div>
//                   <div className="info-item"><Share2 className="info-icon" /><h4 className="info-label">Social</h4></div>
//                   <div className="social-icons">{["f", "y", "i"].map((s, i) => <a key={i} href="#" className="social-icon">{s}</a>)}</div>
//                 </div>
//               </div>
//               <img src={contactOffice} alt="Office" className="office-image" />
//             </div>

//             {/* RIGHT SIDE FORM */}
//             <motion.div className="contact-form" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
//               <h3 className="form-title">For Contact our Wisdom Foundation</h3>
//               <p className="form-description">Fill The Form</p>

//               <form ref={formRef} className="form-content" onSubmit={handleSubmit}>
//                 {/* Name */}
//                 <div className="input-group">
//                   <input type="text" name="Name" placeholder="Enter Name" className="input-field" required value={formData.name} onChange={handleInputChange} />
//                   <User className="input-icon" />
//                 </div>

//                 {/* Email */}
//                 <div className="input-group">
//                   <input type="email" name="Email" placeholder="Enter Email" className="input-field" required value={formData.email} onChange={handleInputChange} />
//                   <Mail className="input-icon" />
//                 </div>

//                 {/* Phone / Place */}
//                 <div className="input-group">
//                   <input type="tel" name="Phone" placeholder="Phone Number / Place" className="input-field" value={formData.phone} onChange={handleInputChange} />
//                   <Phone className="input-icon" />
//                 </div>

//                 {/* Institution */}
//                 <div className="input-group">
//                   <input type="text" name="INSTITUTION NAME" placeholder="Institution Name" className="input-field" />
//                   <School className="input-icon" />
//                 </div>

//                 {/* Purpose */}
//                 <div className="input-group">
//                   <select name="purpose" className="input-field" required onChange={handlePurposeChange}>
//                     <option value="">Select Purpose</option>
//                     <option value="Testimony">Testimony</option>
//                     <option value="Feedback">Feedback</option>
//                     <option value="Invite Wisdom Foundation">TO Invite Wisdom Foundation</option>
//                   </select>
//                 </div>

//                 {/* Feedback Rating */}
//                 {showRating && (
//                   <div className="input-group rating-group">
//                     <label>Rate your experience:</label>
//                     <div className="stars">
//                       {[1,2,3,4,5].map((star) => <FaStar key={star} size={24} style={{cursor:"pointer", marginRight:5}} color={(hoverRating || rating) >= star ? "#ffc107" : "#e4e5e9"} onClick={() => setRating(star)} onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)} />)}
//                     </div>
//                     <input type="hidden" name="rating" value={rating} />
//                   </div>
//                 )}

//                 {/* Message */}
//                 <div className="input-group textarea-wrap">
//                   <textarea name="message" placeholder="Your Message..." rows={5} className="textarea-field" required />
//                   <MessageSquare className="input-icon" />
//                 </div>

//                 {/* CAPTCHA */}
//                 <div className="input-group captcha-group">
//                   <div className="captcha-box">{captchaCode}</div>
//                   <input type="text" className="input-field" placeholder="Enter captcha" value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} required />
//                   <button type="button" onClick={generateImageCaptcha} className="captcha-refresh-btn">Refresh</button>
//                 </div>

//                 {/* Submit */}
//                 <button type="submit" className="submit-btn">Submit <ArrowUpRight className="icon-arrow" /></button>

//                 {/* Status */}
//                 {status === "sending" && <p style={{ color:"blue", marginTop:"1rem" }}>Sending...</p>}
//                 {status === "success" && <p style={{ color:"green", marginTop:"1rem" }}>✅ Form submitted successfully!</p>}
//                 {status === "error" && <p style={{ color:"red", marginTop:"1rem" }}>❌ Failed to submit. Please try again.</p>}
//               </form>
//             </motion.div>
//           </div>
//         </section>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Contact;












// import React, { useRef, useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { MapPin, Phone, Mail, Share2, ArrowUpRight, MessageSquare, User, School } from "lucide-react";
// import { FaStar } from "react-icons/fa";

// import Header from "../components/Header";
// import Footer from "../components/Footer";

// import contactHero from "../assets/contact-hero.jpg";
// import contactOffice from "../assets/contact-office.jpg";
// import "./Contact.css";

// const SHEETDB_URL = "https://sheetdb.io/api/v1/i184dnsc7bjbz";

// const Contact = () => {
//   const formRef = useRef();
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
//   const [showRating, setShowRating] = useState(false);
//   const [captchaCode, setCaptchaCode] = useState("");
//   const [captchaInput, setCaptchaInput] = useState("");
//   const [status, setStatus] = useState("");

//   // OTP STATES
//   const [otp, setOtp] = useState("");
//   const [generatedOtp, setGeneratedOtp] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [verified, setVerified] = useState(false);

//   // CAPTCHA
//   const generateImageCaptcha = () => {
//     const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
//     let text = "";
//     for (let i = 0; i < 5; i++) {
//       text += chars[Math.floor(Math.random() * chars.length)];
//     }
//     setCaptchaCode(text);
//   };

//   useEffect(() => {
//     generateImageCaptcha();
//   }, []);

//   // INPUT CHANGE
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       name: name === "Name" ? value : prev.name,
//       email: name === "Email" ? value : prev.email,
//       phone: name === "Phone" ? value : prev.phone,
//     }));
//   };

//   // PURPOSE
//   const handlePurposeChange = (e) => {
//     const purpose = e.target.value;
//     setShowRating(purpose === "Feedback");
//   };

//   // SEND OTP (DEMO)
//   const sendOtp = () => {
//     if (!formData.phone) {
//       alert("Enter phone number");
//       return;
//     }

//     const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
//     setGeneratedOtp(otpCode);
//     setOtpSent(true);

//     alert("Your OTP is: " + otpCode); // demo only
//   };

//   // VERIFY OTP
//   const verifyOtp = () => {
//     if (otp === generatedOtp) {
//       setVerified(true);
//       alert("Phone verified ✅");
//     } else {
//       alert("Invalid OTP ❌");
//     }
//   };

//   // SUBMIT
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // OTP CHECK
//     if (!verified) {
//       alert("Please verify phone number");
//       return;
//     }

//     // CAPTCHA CHECK
//     if (captchaInput !== captchaCode) {
//       alert("Invalid captcha!");
//       generateImageCaptcha();
//       setCaptchaInput("");
//       return;
//     }

//     const purpose = formRef.current?.purpose?.value;

//     const postData = {
//       data: [
//         {
//           name: formData.name || formRef.current?.Name?.value,
//           email: formData.email || formRef.current?.Email?.value,
//           phone: formRef.current?.Phone?.value,
//           institution: formRef.current?.["INSTITUTION NAME"]?.value || "",
//           message: formRef.current?.message?.value,
//           timestamp: new Date().toLocaleString(),
//         },
//       ],
//     };

//     if (purpose === "Feedback") {
//       postData.data[0].rating = rating;
//     }

//     let sheetName = "";
//     if (purpose === "Feedback") sheetName = "Feedback";
//     else if (purpose === "Testimony") sheetName = "Testimony";
//     else if (purpose === "Invite Wisdom Foundation") sheetName = "Invite";

//     try {
//       setStatus("sending");

//       await fetch(`${SHEETDB_URL}?sheet=${sheetName}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(postData),
//       });

//       setStatus("success");
//       setTimeout(() => setStatus(""), 3000);

//       formRef.current.reset();
//       setRating(0);
//       setShowRating(false);
//       setFormData({ name: "", email: "", phone: "" });
//       setCaptchaInput("");
//       setOtp("");
//       setOtpSent(false);
//       setVerified(false);
//       generateImageCaptcha();

//     } catch (err) {
//       setStatus("error");
//       setTimeout(() => setStatus(""), 3000);
//     }
//   };

//   return (
//     <>
//       <Header />

//       <div className="contact-page">
//         <section className="contact-hero">
//           <img src={contactHero} alt="Contact us banner" className="hero-image" />
//           <div className="hero-overlay" />
//           <div className="hero-content">
//             <motion.div className="hero-tag" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//               <span className="tag-text">✿ Start Donating Poor People</span>
//             </motion.div>
//             <motion.h1 className="hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
//               Contact Us
//             </motion.h1>
//           </div>
//         </section>

//         <section className="contact-body">
//           <div className="contact-container">

//             {/* LEFT SIDE */}
//             <div className="contact-info">
//               <h2 className="info-title">Contact Us</h2>
//               <div className="info-grid">
//                 <div>
//                   <div className="info-item"><MapPin className="info-icon" /><h4 className="info-label">Location</h4></div>
//                   <p className="info-value">Melbourne, Australia</p>
//                 </div>
//                 <div>
//                   <div className="info-item"><Phone className="info-icon" /><h4 className="info-label">Phone</h4></div>
//                   <p className="info-value">+1 234 567 890</p>
//                 </div>
//                 <div>
//                   <div className="info-item"><Mail className="info-icon" /><h4 className="info-label">Email</h4></div>
//                   <p className="info-value">example@email.com</p>
//                 </div>
//                 <div>
//                   <div className="info-item"><Share2 className="info-icon" /><h4 className="info-label">Social</h4></div>
//                   <div className="social-icons">{["f", "y", "i"].map((s, i) => <a key={i} href="#" className="social-icon">{s}</a>)}</div>
//                 </div>
//               </div>
//               <img src={contactOffice} alt="Office" className="office-image" />
//             </div>

//             {/* FORM */}
//             <motion.div className="contact-form">
//               <h3 className="form-title">For Contact our Wisdom Foundation</h3>
//               <p className="form-description">Fill The Form</p>

//               <form ref={formRef} className="form-content" onSubmit={handleSubmit}>

//                 <div className="input-group">
//                   <input type="text" name="Name" placeholder="Enter Name" className="input-field" required value={formData.name} onChange={handleInputChange} />
//                   <User className="input-icon" />
//                 </div>

//                 <div className="input-group">
//                   <input type="email" name="Email" placeholder="Enter Email" className="input-field" required value={formData.email} onChange={handleInputChange} />
//                   <Mail className="input-icon" />
//                 </div>

//                 {/* PHONE + OTP */}
//                 <div className="input-group">
//                   <input type="tel" name="Phone" placeholder="Phone Number / Place" className="input-field" value={formData.phone} onChange={handleInputChange} />
//                   <Phone className="input-icon" />
//                 </div>

//                 {/* OTP UI */}
//                 <div className="input-group">
//                   {!otpSent && (
//                     <button type="button" onClick={sendOtp} className="submit-btn">
//                       Send OTP
//                     </button>
//                   )}

//                   {otpSent && !verified && (
//                     <>
//                       <input
//                         type="text"
//                         placeholder="Enter OTP"
//                         className="input-field"
//                         value={otp}
//                         onChange={(e) => setOtp(e.target.value)}
//                       />
//                       <button type="button" onClick={verifyOtp} className="submit-btn">
//                         Verify OTP
//                       </button>
//                     </>
//                   )}

//                   {verified && <p style={{ color: "green" }}>✅ Verified</p>}
//                 </div>

//                 <div className="input-group">
//                   <input type="text" name="INSTITUTION NAME" placeholder="Institution Name" className="input-field" />
//                   <School className="input-icon" />
//                 </div>

//                 <div className="input-group">
//                   <select name="purpose" className="input-field" required onChange={handlePurposeChange}>
//                     <option value="">Select Purpose</option>
//                     <option value="Testimony">Testimony</option>
//                     <option value="Feedback">Feedback</option>
//                     <option value="Invite Wisdom Foundation">TO Invite Wisdom Foundation</option>
//                   </select>
//                 </div>

//                 {showRating && (
//                   <div className="input-group rating-group">
//                     <label>Rate your experience:</label>
//                     <div className="stars">
//                       {[1,2,3,4,5].map((star) => (
//                         <FaStar key={star} size={24}
//                           style={{cursor:"pointer", marginRight:5}}
//                           color={(hoverRating || rating) >= star ? "#ffc107" : "#e4e5e9"}
//                           onClick={() => setRating(star)}
//                           onMouseEnter={() => setHoverRating(star)}
//                           onMouseLeave={() => setHoverRating(0)}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 <div className="input-group textarea-wrap">
//                   <textarea name="message" placeholder="Your Message..." rows={5} className="textarea-field" required />
//                   <MessageSquare className="input-icon" />
//                 </div>

//                 <div className="input-group captcha-group">
//                   <div className="captcha-box">{captchaCode}</div>
//                   <input type="text" className="input-field" placeholder="Enter captcha" value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} required />
//                   <button type="button" onClick={generateImageCaptcha} className="captcha-refresh-btn">Refresh</button>
//                 </div>

//                 <button type="submit" className="submit-btn">
//                   Submit <ArrowUpRight className="icon-arrow" />
//                 </button>

//                 {status === "sending" && <p style={{ color:"blue" }}>Sending...</p>}
//                 {status === "success" && <p style={{ color:"green" }}>✅ Form submitted successfully!</p>}
//                 {status === "error" && <p style={{ color:"red" }}>❌ Failed to submit.</p>}
//               </form>
//             </motion.div>
//           </div>
//         </section>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Contact;














import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Share2, ArrowUpRight, MessageSquare, User, School } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import Header from "../components/Header";
import Footer from "../components/Footer";

import contactHero from "../assets/concon.png";
// import contactOffice from "../assets/con111.png";
import "./Contact.css";

const SHEETDB_URL = "https://sheetdb.io/api/v1/i184dnsc7bjbz";

const Contact = () => {
  const formRef = useRef();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [showRating, setShowRating] = useState(false);
  const [status, setStatus] = useState("");


 




  // 🔥 PHONE NUMBER VALIDATION
const handlePhoneChange = (e) => {
  let value = e.target.value;
  
  // Remove all non-digits except +
  value = value.replace(/[^+0-9]/g, '');
  
  // Auto-add +91 if starts with 9/8/7/6 and length > 1
  if (value.length === 1 && (value === '9' || value === '8' || value === '7' || value === '6')) {
    value = '+91' + value;
  }
  
  // Limit to +91 + 10 digits (total 13 chars)
  if (value.length > 13) {
    value = value.slice(0, 13);
  }
  
  setFormData(prev => ({
    ...prev,
    phone: value
  }));
};
  // INPUT CHANGE
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      name: name === "Name" ? value : prev.name,
      email: name === "Email" ? value : prev.email,
      phone: name === "Phone" ? value : prev.phone,
    }));
  };

  // PURPOSE
  const handlePurposeChange = (e) => {
    const purpose = e.target.value;
    setShowRating(purpose === "Feedback");
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const purpose = formRef.current?.purpose?.value;

    const postData = {
      data: [
        {
          name: formData.name || formRef.current?.Name?.value,
          email: formData.email || formRef.current?.Email?.value,
          phone: formRef.current?.Phone?.value,
          institution: formRef.current?.["INSTITUTION NAME"]?.value || "",
          message: formRef.current?.message?.value,
          timestamp: new Date().toLocaleString(),
        },
      ],
    };

    if (purpose === "Feedback") {
      postData.data[0].rating = rating;
    }

    let sheetName = "";
    if (purpose === "Feedback") sheetName = "Feedback";
    else if (purpose === "Invite Wisdom Foundation") sheetName = "Invite";

    try {
      setStatus("sending");

      await fetch(`${SHEETDB_URL}?sheet=${sheetName}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      setStatus("success");
      setTimeout(() => setStatus(""), 3000);

      formRef.current.reset();
      setRating(0);
      setShowRating(false);
      setFormData({ name: "", email: "", phone: "" });

    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <>
      <Header />

      <div className="contact-page">
        <section className="contact-hero">
          <img src={contactHero} alt="Contact us banner" className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <motion.div className="hero-tag" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              {/* <span className="tag-text">✿ Start Donating Poor People</span> */}
            </motion.div>
            <motion.h1 className="hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              Contact Us
            </motion.h1>
          </div>
        </section>

        <section className="contact-body">
          <div className="contact-container">

            {/* LEFT SIDE */}
            <div className="contact-info">
              <h2 className="info-title">Contact Us</h2>
              <div className="info-grid">
                <div>
                  <div className="info-item"><MapPin className="info-icon" /><h4 className="info-label">Location</h4></div>
                  <p className="info-value">Melbourne, Australia</p>
                </div>
                <div>
                  <div className="info-item"><Phone className="info-icon" /><h4 className="info-label">Phone</h4></div>
                  <p className="info-value">+1 234 567 890</p>
                </div>
                <div>
                  <div className="info-item"><Mail className="info-icon" /><h4 className="info-label">Email</h4></div>
                  <p className="info-value">wisdomfoundation2015@gmail.com</p>
                </div>
                <div>
                 <div>
  <div className="info-item">
    <FaWhatsapp className="info-icon" />
    <h4 className="info-label">WhatsApp</h4>
  </div>
  <p className="info-value">
  <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
    +91 98765 43210
  </a>
</p>
</div>




<div>
  {/* <div className="info-item">
    <MapPin className="info-icon" />
    <h4 className="info-label">Google Maps</h4>
  </div> */}

 {/* Corrected Code */}
 
  {/* <div style={{ width: "100%", height: "400px" }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805190.2363110061!2d144.39373113219776!3d-37.97072603712361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1775112378386!5m2!1sen!2sin"
    style={{ width: "100%", height: "100%", border: 0 }}
    allowFullScreen
    loading="lazy"
  ></iframe>
</div> */}
{/* Corrected Code Ends */}

{/* Pre Corrected Code | Error google.com refused to connect */}
  
  
  
  {/* <div style={{ width: "100%", height: "400px" }}>


    <iframe
  src="https://maps.app.goo.gl/mVAuacWkQjm1gFv89"
  style={{ width: "100%", height: "400px", border: 0 }}
  allowFullScreen
  loading="lazy"
></iframe>

      <iframe
        src="https://maps.app.goo.gl/mVAuacWkQjm1gFv89"
        style={{ width: "100%", height: "100%", border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div> */}



  </div>
{/* Corrected Code Ends*/}


                </div>
              </div>


              <div className="info-item">
    <MapPin className="info-iconn" />
    <h4 className="info-labell">Locate Us</h4>
  </div>

 {/* Corrected Code */}
 
  <div style={{ width: "100%", height: "335px",  borderRadius: "10px",
  overflow: "hidden"  }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805190.2363110061!2d144.39373113219776!3d-37.97072603712361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1775112378386!5m2!1sen!2sin"
    style={{ width: "100%", height: "100%", border: 0 }}
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>


              {/* <img src={contactOffice} alt="Office" className="office-image" /> */}
            </div>

            {/* FORM */}
            <motion.div className="contact-form">
              <h3 className="form-title">Kindly Fill The Below Form</h3>
              <p className="form-description">Feel Free To Contact Us !</p>

              <form ref={formRef} className="form-content" onSubmit={handleSubmit}>

                <div className="input-group">
                  <input type="text" name="Name" placeholder="Enter Name" className="input-field" required value={formData.name} onChange={handleInputChange} />
                  <User className="input-icon" />
                </div>

                <div className="input-group">
                  <input type="email" name="Email" placeholder="Enter Email" className="input-field" required value={formData.email} onChange={handleInputChange} />
                  <Mail className="input-icon" />
                </div>

                <div className="input-group">
  {/* <input 
    type="tel" 
    name="Phone" 
    placeholder="Phone No" 
    className="input-field" 
    value={formData.phone}
    onChange={handlePhoneChange}  // 🔥 New handler
    maxLength="13"  // +91 + 10 digits
    pattern="[+]?[0-9]{10,13}"
    required
  />
  <Phone className="input-icon" />
</div> */}

<div className="input-box">
  
  {/* 🌍 Country Code Dropdown */}
  <select 
    className="country-code"
    value={formData.countryCode}
    onChange={(e) =>
      setFormData({ ...formData, countryCode: e.target.value })
    }
  >
    <option value="+91">🇮🇳 +91</option>
    <option value="+1">🇺🇸 +1</option>
    <option value="+44">🇬🇧 +44</option>
    <option value="+61">🇦🇺 +61</option>
  </select>

  {/* 📞 Phone Input */}
  <input 
    type="tel"
    name="phone"
    placeholder="Phone No"
    className="input-field"
    value={formData.phone}
    onChange={(e) => {
      const value = e.target.value.replace(/\D/g, ""); // numbers மட்டும்
      if (value.length <= 10) {
        setFormData({ ...formData, phone: value });
      }
    }}
    maxLength="10"
    required
  />

</div>
</div>
                <div className="input-group">
                  <input type="text" name="Institution Name" placeholder="Institution Name" className="input-field" />
                  <School className="input-icon" />
                </div>

                <div className="input-group">
                  <select   name="purpose" className="input-field" required onChange={handlePurposeChange}>
                    <option value="">Select Purpose</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Invite Wisdom Foundation">To Invite Wisdom Foundation</option>
                  </select>
                </div>

                {showRating && (
                  <div className="input-group rating-group">
                    <label>Rate your experience:</label>
                    <div className="stars">
                      {[1,2,3,4,5].map((star) => (
                        <FaStar key={star} size={24}
                          style={{cursor:"pointer", marginRight:5}}
                          color={(hoverRating || rating) >= star ? "#ffc107" : "#e4e5e9"}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="input-group textarea-wrap">
                  <textarea name="message" placeholder="Your Message..." rows={1} className="textarea-field" required />
                  <MessageSquare className="input-icon" />
                </div>

                <button type="submit" className="submit-btn">
                  Submit <ArrowUpRight className="icon-arrow" />
                </button>

                {status === "sending" && <p style={{ color:"blue" }}>Sending...</p>}
                {status === "success" && <p style={{ color:"green" }}>✅ Form submitted successfully!</p>}
                {status === "error" && <p style={{ color:"red" }}>❌ Failed to submit.</p>}
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