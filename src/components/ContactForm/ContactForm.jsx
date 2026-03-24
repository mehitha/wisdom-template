import React from "react";
import { FaPaperPlane, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

function ContactForm() {
  return (
    <>
      {/* ===== CSS INSIDE SAME FILE ===== */}
      <style>{`
        .contact {
          height: 100vh;
          background: #0f6b57;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-box {
          width: 100%;
          max-width: 700px;
          padding: 40px;
        }

        .title {
          font-size: 42px;
          color: white;
          margin-bottom: 40px;
          text-align: center;
        }

        .title span {
          color: #ffc107;
        }

        .form-row {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }

        .input-box {
          position: relative;
          flex: 1;
        }

        .input-box input,
        .input-box textarea {
          width: 100%;
          padding: 16px 45px 16px 15px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.2);
          background: transparent;
          color: white;
          font-size: 14px;
        }

        .input-box input::placeholder,
        .input-box textarea::placeholder {
          color: rgba(255,255,255,0.6);
        }

        .input-box svg {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #ffc107;
        }

        .full {
          margin-bottom: 20px;
        }

        .textarea textarea {
          height: 140px;
          resize: none;
        }

        .btn {
          display: block;
          margin: 20px auto 0;
          background: #ffc107;
          color: black;
          border: none;
          padding: 15px 35px;
          border-radius: 50px;
          font-weight: bold;
          cursor: pointer;
        }

        .btn:hover {
          background: #e0a800;
        }

        @media (max-width: 768px) {
          .form-row {
            flex-direction: column;
          }

          .contact {
            height: auto;
            padding: 40px 20px;
          }
        }
      `}</style>

      {/* ===== FORM ===== */}
      <section className="contact">

        <div className="contact-box">

          <h1 className="title">
            Start donating poor people For donation!
            <br />
            <span>Send Us Message</span>
          </h1>

          <div className="form-row">
            <div className="input-box">
              <input type="text" placeholder="your email..." />
              <FaPaperPlane />
            </div>

            <div className="input-box">
              <input type="text" placeholder="your phone..." />
              <FaPhoneAlt />
            </div>
          </div>

          <div className="input-box full">
            <input type="text" placeholder="your address..." />
            <FaMapMarkerAlt />
          </div>

          <div className="input-box full textarea">
            <textarea placeholder="your message..."></textarea>
            <FaEnvelope />
          </div>

          <button className="btn">Get A Quote ↗</button>

        </div>

      </section>
    </>
  );
}

export default ContactForm;