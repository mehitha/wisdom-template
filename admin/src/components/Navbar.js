import React from "react";
import Link from 'next/link';

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "#2c3e50",
        color: "white"
      }}
    >
      <div style={{ fontSize: "18px", fontWeight: "bold" }}>ADMIN LOGO</div>

      <div>
        <Link
          to="/admin/home"
          style={{ color: "white", textDecoration: "none", margin: "0 10px" }}
        >
          Home
        </Link>
        <Link
          to="/admin/user"
          style={{ color: "white", textDecoration: "none", margin: "0 10px" }}
        >
          User
        </Link>
        <Link
          to="/admin/gallery"
          style={{ color: "white", textDecoration: "none", margin: "0 10px" }}
        >
          Gallery
        </Link>
        <Link
          to="/admin/feedback"
          style={{ color: "white", textDecoration: "none", margin: "0 10px" }}
        >
          Feedback
        </Link>
      </div>

      <div style={{ marginLeft: "20px" }}>
        <Link
          to="/admin/account"
          style={{ color: "white", textDecoration: "none" }}
        >
          Account
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;