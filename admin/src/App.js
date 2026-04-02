import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import User from "./pages/User";
import Feedback from "./pages/Feedback";
import Gallery from "./pages/Gallery";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("adminLoggedIn");

  return (
    <div>
      {/* ✅ Navbar only admin pages */}
      {location.pathname.startsWith("/admin") && isLoggedIn && <TopNavbar />}

      <Routes>
        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* PROTECTED ROUTES */}
        <Route
          path="/admin/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/user"
          element={isLoggedIn ? <User /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/gallery"
          element={isLoggedIn ? <Gallery /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/feedback"
          element={isLoggedIn ? <Feedback /> : <Navigate to="/login" />}
        />

        {/* DEFAULT */}
        <Route path="*" element={<Navigate to="/login" />} />
        
        
      </Routes>
            {location.pathname.startsWith("/admin") && isLoggedIn && <Footer />}
    </div>
  );
}

export default AppWrapper;