import React from "react";

function Home() {
  return (
    <div style={styles.container}>
      
      {/* 🔥 HEADER */}
      <h1 style={styles.title}>Admin Dashboard</h1>

      {/* 🔥 STATS CARDS */}
      <div style={styles.cardContainer}>

        <div style={styles.card}>
          <h3>Total Users</h3>
          <p style={styles.count}>120</p>
        </div>

        <div style={styles.card}>
          <h3>Gallery Images</h3>
          <p style={styles.count}>85</p>
        </div>

        <div style={styles.card}>
          <h3>Feedback</h3>
          <p style={styles.count}>45</p>
        </div>

        {/* <div style={styles.card}>
          <h3>Visitors</h3>
          <p style={styles.count}>320</p>
        </div> */}

      </div>

      {/* 🔥 QUICK ACTIONS */}
    

      {/* 🔥 RECENT ACTIVITY */}
     

    </div>
  );
}

export default Home;


/* 🔥 STYLES */
const styles = {
  container: {
    padding: "30px",
    background: "#f4f6f8",
    minHeight: "100vh",
    fontFamily: "sans-serif",
  },

  title: {
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "25px",
    color: "#222",
  },

  /* CARDS */
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    transition: "0.3s",
  },

  count: {
    fontSize: "26px",
    fontWeight: "bold",
    marginTop: "10px",
    color: "#00b894",
  },

  /* ACTIONS */
  actions: {
    marginTop: "40px",
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
  },

  actionBtns: {
    display: "flex",
    gap: "15px",
    marginTop: "15px",
    flexWrap: "wrap",
  },

  btn: {
    padding: "10px 18px",
    background: "#1f2d3d",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
  },

  /* ACTIVITY */
  activity: {
    marginTop: "40px",
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
  },

  list: {
    marginTop: "15px",
    paddingLeft: "20px",
  },
};