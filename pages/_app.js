// pages/_app.js
import '../src/styles/globals.css';
import '../src/styles/header.css';
import '../src/styles/footer.css';
import '../src/styles/charity-cards.css'; 
import '../src/styles/charity.css'; 
import '../src/pages/contact.css';  
import '../src/styles/resourcepeople.css'; 
import '../src/styles/DonateSection.css'; 
import '../src/components/Gallery/Gallery.css';  
import '../src/components/Gallery/VideoGallery.css'; 
import '../src/styles/hero.css'; 

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import WhatsAppIcon from '../src/components/WhatsAppIcon';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* ✅ Phone Font Fix - Global */}
      <style jsx global>{`
        /* Force consistent font on all devices */
        html, body {
          font-size: 16px !important;
          -webkit-text-size-adjust: 100% !important;
        }

        /* Phone-specific fixes */
        @media (max-width: 768px) {
          html, body {
            font-size: 15px !important;
          }
          
          p, span, div, li, a, button, input, textarea, label, h1, h2, h3, h4 {
            font-size: 15px !important;
          }
          
          h1 { font-size: 1.8rem !important; }
          h2 { font-size: 1.5rem !important; }
          h3 { font-size: 1.2rem !important; }
          
          .container, .wrapper, section {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }

        @media (max-width: 480px) {
          html, body {
            font-size: 14px !important;
          }
          
          p, span, div, li, a, button, input, textarea, label {
            font-size: 14px !important;
          }
        }
      `}</style>

      <Header />
      <Component {...pageProps} />
      <Footer />
      <WhatsAppIcon />
    </>
  );
}

export default MyApp;