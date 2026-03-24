// import React, { useEffect, useState } from "react";
// import "../styles/cursor.css";

// function Cursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const moveCursor = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", moveCursor);
//     return () => window.removeEventListener("mousemove", moveCursor);
//   }, []);

//   return (
//     <div
//       className="custom-cursor"
//       style={{
//         transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
//       }}
//     ></div>
//   );
// }

// export default Cursor;


import React, { useEffect, useRef } from "react";
import "../styles/cursor.css";

function Cursor() {
  const shadowDotRef = useRef(null); // trailing dot with shadow
  const normalDotRef = useRef(null); // cursor dot

  const pos = useRef({ x: 0, y: 0 }); // real cursor position
  const shadowPos = useRef({ x: 0, y: 0 }); // trailing position

  useEffect(() => {
    const moveMouse = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", moveMouse);

    const animate = () => {
      // Trailing dot moves slowly toward cursor
      shadowPos.current.x += (pos.current.x - shadowPos.current.x) * 0.1;
      shadowPos.current.y += (pos.current.y - shadowPos.current.y) * 0.1;

      if (shadowDotRef.current) {
        shadowDotRef.current.style.transform = `translate3d(${shadowPos.current.x}px, ${shadowPos.current.y}px, 0)`;
      }

      if (normalDotRef.current) {
        normalDotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("mousemove", moveMouse);
  }, []);

  return (
    <>
      <div className="cursor-shadow" ref={shadowDotRef}></div>
      <div className="cursor-dot" ref={normalDotRef}></div>
    </>
  );
}

export default Cursor;