import React from "react";

function AccountDropDown({ onClose, navigate, handleLogout }) {
  return (
    <>
      <div style={styles.overlay}>
        <div style={styles.panel}>

          {/* CLOSE BUTTON */}
          <span style={styles.close} onClick={onClose}>✕</span>

          {/* PROFILE TOP */}
          <div style={styles.top}>
            <img
              src="https://api.dicebear.com/7.x/personas/png?seed=admin"
              alt="avatar"
              style={styles.mainAvatar}
            />

            <h2 style={styles.name}>Jaydon Frankie</h2>
            <p style={styles.email}>demo@minimals.cc</p>

            {/* SMALL AVATARS */}
            <div style={styles.avatarRow}>
              <img src="https://api.dicebear.com/7.x/personas/png?seed=1" style={styles.smallAvatar}/>
              <img src="https://api.dicebear.com/7.x/personas/png?seed=2" style={styles.smallAvatar}/>
              <img src="https://api.dicebear.com/7.x/personas/png?seed=3" style={styles.smallAvatar}/>
              <div style={styles.addAvatar}>+</div>
            </div>
          </div>

          {/* MENU */}
          <div style={styles.menu}>
            <p onClick={() => navigate("/admin/home")}>🏠 Home</p>
            <p>👤 Profile</p>
            <p>⚙️ Account Settings</p>
          </div>

          {/* LOGOUT */}
          <button style={styles.logout} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default AccountDropDown;

/* 🔥 STYLES */
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },

  panel: {
    width: "380px",
    background: "#f9fafb",
    borderRadius: "20px",
    padding: "20px",
    position: "relative",
    animation: "slideUp 0.4s ease",
  },

  close: {
    position: "absolute",
    top: "15px",
    left: "15px",
    cursor: "pointer",
    fontSize: "18px",
  },

  top: {
    textAlign: "center",
    marginTop: "20px",
  },

  mainAvatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: "3px solid #00b894",
  },

  name: {
    margin: "10px 0 5px",
  },

  email: {
    color: "#666",
    fontSize: "14px",
  },

  avatarRow: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "15px",
  },

  smallAvatar: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
  },

  addAvatar: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    border: "2px dashed #aaa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },

  menu: {
    marginTop: "20px",
  },

  menuItem: {
    padding: "12px",
    borderRadius: "10px",
    cursor: "pointer",
  },

  logout: {
    width: "100%",
    marginTop: "20px",
    padding: "12px",
    border: "none",
    borderRadius: "12px",
    background: "#fddede",
    color: "#b91c1c",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

/* 🔥 KEYFRAME (INLINE FIX) */
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes slideUp {
  from {
    transform: translateY(80px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
`, styleSheet.cssRules.length);