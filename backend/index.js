const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// simple test route
app.get("/", (req, res) => {
  res.json({ message: "Wisdom backend is running" });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});