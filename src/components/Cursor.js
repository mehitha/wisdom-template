import React, { useEffect, useRef } from "react";
import "../styles/cursor.css";

function Cursor() {
  const bigDot = useRef(null);
  const smallDot = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let bigX = 0;
    let bigY = 0;

    let animationFrame;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // small dot (instant follow)
      if (smallDot.current) {
        smallDot.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const animate = () => {
      if (bigDot.current) {
        // smooth trailing effect
        bigX += (mouseX - bigX) * 0.12;
        bigY += (mouseY - bigY) * 0.12;

        bigDot.current.style.transform = `translate(${bigX}px, ${bigY}px)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    animate();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div ref={bigDot} className="cursor-big"></div>
      <div ref={smallDot} className="cursor-small"></div>
    </>
  );
}

export default Cursor;