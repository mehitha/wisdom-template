// import dotenv from 'dotenv';
// dotenv.config();

// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// import albumRoutes from './routes/albums.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const app = express();
// const PORT = process.env.PORT || 5000;

// // ✅ Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ✅ Serve uploaded images statically
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // ✅ Routes
// app.use('/api/albums', albumRoutes);

// // ✅ Test Route
// app.get('/api', (req, res) => {
//   res.json({ message: 'Gallery API is running!' });
// });

// // ✅ MongoDB Atlas Connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log('✅ MongoDB Atlas Connected Successfully'))
//   .catch((err) => {
//     console.error('❌ MongoDB Connection Error:', err.message);
//     process.exit(1);
//   });

// // ✅ Start Server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });






const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ This creates uploads folder in backend folder
const UPLOAD_PATH = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOAD_PATH)) {
  fs.mkdirSync(UPLOAD_PATH, { recursive: true });
}

// ✅ THIS IS THE IMPORTANT LINE - Serve images from uploads folder
app.use('/uploads', express.static(UPLOAD_PATH));

const upload = multer({ dest: UPLOAD_PATH });

const ALBUMS_FILE = path.join(__dirname, 'albums.json');

function loadAlbums() {
  try {
    return fs.existsSync(ALBUMS_FILE) ? JSON.parse(fs.readFileSync(ALBUMS_FILE)) : [];
  } catch {
    return [];
  }
}

function saveAlbums(albums) {
  fs.writeFileSync(ALBUMS_FILE, JSON.stringify(albums, null, 2));
}

// API Routes
app.get('/api/albums', (req, res) => {
  res.json(loadAlbums());
});

app.post('/api/albums', (req, res) => {
  const albums = loadAlbums();
  const newAlbum = {
    _id: Date.now(),
    name: req.body.name,
    images: [],
    createdAt: new Date().toISOString()
  };
  albums.unshift(newAlbum);
  saveAlbums(albums);
  res.json(newAlbum);
});

app.delete('/api/albums/:id', (req, res) => {
  const albums = loadAlbums();
  const filtered = albums.filter(a => a._id != req.params.id);
  saveAlbums(filtered);
  res.json({ success: true });
});

app.post('/api/albums/:id/images', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No image' });
  
  const albums = loadAlbums();
  const album = albums.find(a => a._id == req.params.id);
  if (!album) return res.status(404).json({ error: 'Album not found' });
  
  const imagePath = `uploads/${req.file.filename}`;
  album.images.push(imagePath);
  saveAlbums(albums);
  
  res.json({ success: true, path: imagePath });
});

app.delete('/api/albums/:id/images/:filename', (req, res) => {
  const filePath = path.join(UPLOAD_PATH, req.params.filename);
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  
  const albums = loadAlbums();
  const album = albums.find(a => a._id == req.params.id);
  if (album) {
    album.images = album.images.filter(img => !img.includes(req.params.filename));
    saveAlbums(albums);
  }
  res.json({ success: true });
});

app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
  console.log('📁 Images from:', UPLOAD_PATH);
});