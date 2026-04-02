import express from "express";
import multer from "multer";
import Gallery from "../models/Gallery.js";

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage });

// ✅ POST upload image
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { album } = req.body;
    const url = req.file ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}` : null;

    if (!album || !url) return res.status(400).json({ msg: "Album or image missing" });

    const newImage = new Gallery({ album, url });
    await newImage.save();
    res.status(201).json(newImage);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

// ✅ GET all images
router.get("/", async (req, res) => {
  try {
    const images = await Gallery.find();
    res.json(images);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;