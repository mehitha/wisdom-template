import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema({
  album: { type: String, required: true },
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Gallery", GallerySchema);