import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("demo@minimals.cc");
  const [password, setPassword] = useState("@2Minimal");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "demo@minimals.cc" && password === "@2Minimal") {
      
    localStorage.setItem("adminLoggedIn", "true");
navigate("/admin/home"); // 👉 redirect to Home
    } else {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        <h2 style={styles.title}>Sign in to your account</h2>

        <p style={styles.subtitle}>
          Don’t have an account?{" "}
          <span style={styles.link}>Get started</span>
        </p>

        {/* INFO BOX */}
        <div style={styles.infoBox}>
          <span style={styles.infoIcon}>i</span>
          <span>
            Use <b>demo@minimals.cc</b> with password <b>@2Minimal</b>
          </span>
        </div>

        <form onSubmit={handleLogin}>
          
          {/* EMAIL */}
          <div style={styles.inputGroup}>
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
          </div>

          {/* PASSWORD */}
          <div style={styles.inputGroup}>
            <div style={styles.passwordHeader}>
              <label>Password</label>
              <span style={styles.forgot}>Forgot password?</span>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>

          {/* BUTTON */}
          <button type="submit" style={styles.button}>
            Sign in
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;



/* 🔥 STYLES (same file) */
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5",
  },
  card: {
    width: "400px",
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "10px",
    fontWeight: "600",
  },
  subtitle: {
    color: "#777",
    marginBottom: "20px",
    fontSize: "14px",
  },
  link: {
    color: "#00b894",
    cursor: "pointer",
    fontWeight: "bold",
  },
  infoBox: {
    background: "#dff6f2",
    padding: "12px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
    fontSize: "14px",
  },
  infoIcon: {
    background: "#00b894",
    color: "#fff",
    borderRadius: "50%",
    width: "22px",
    height: "22px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
  },
  inputGroup: {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginTop: "5px",
    fontSize: "14px",
    outline: "none",
  },
  passwordHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  forgot: {
    fontSize: "12px",
    color: "#888",
    cursor: "pointer",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#1f2d3d",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    marginTop: "10px",
    cursor: "pointer",
    fontSize: "16px",
  },
};