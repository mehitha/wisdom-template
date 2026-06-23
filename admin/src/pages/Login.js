import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Load users from public/users.json
  useEffect(() => {
    loadUsers();
  }, []);

  // Check if already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/admin/home");
    }
  }, [navigate]);

  // ✅ Load users from public/users.json
  const loadUsers = async () => {
    try {
      const response = await fetch("/users.json");
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
        // Save to localStorage as backup
        localStorage.setItem("users_backup", JSON.stringify(data));
        console.log("✅ Users loaded from public/users.json:", data);
      } else {
        console.error("❌ Error loading users.json");
        // Try localStorage backup
        const backup = localStorage.getItem("users_backup");
        if (backup) {
          setUsers(JSON.parse(backup));
        } else {
          // Default users
          const defaultUsers = [
            {
              id: 1,
              name: "John Doe",
              role: "admin",
              email: "admin@gmail.com",
              phone: "9876543210",
              password: "1234",
            },
          ];
          setUsers(defaultUsers);
        }
      }
    } catch (error) {
      console.error("❌ Error loading users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password!");
      return;
    }

    // ✅ Check in loaded users
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("adminLoggedIn", "true");
      localStorage.setItem("loggedUser", JSON.stringify(foundUser));
      alert("✅ Login Successfully!");
      navigate("/admin/home");
    } else {
      alert("❌ Invalid Credentials! Email or Password is wrong.");
    }
  };

  if (loading) {
    return <div style={styles.container}>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Sign in to your account</h2>

        <p style={styles.subtitle}>
          Don't have an account? <span style={styles.link}>Get started</span>
        </p>

        <div style={styles.infoBox}>
          <span style={styles.infoIcon}>i</span>
          <span>
           Enter Admin Email
          </span>
        </div>

        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              placeholder="Enter your email"
              required
            />
          </div>

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
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" style={styles.button}>
            Sign in
          </button>
        </form>

        <div style={{ marginTop: "15px", textAlign: "center", fontSize: "12px", color: "#888" }}>
          <p>Total Users: {users.length}</p>
        </div>
      </div>
    </div>
  );
}

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

export default Login;