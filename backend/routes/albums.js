import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import Album from '../models/Album.js';

const router = express.Router();

// ✅ Multer config for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'uploads/';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    }
    cb(new Error('Only image files are allowed!'));
  }
});

// 🔒 POST admin login (முதலில் இது இருக்க வேண்டும்!)
router.post('/admin/login', (req, res) => {
  const { password } = req.body;
  const adminPassword = process.env.ADMIN_PASSWORD;

  console.log('=== ADMIN LOGIN DEBUG ===');
  console.log('Received password:', JSON.stringify(password));
  console.log('ENV password:', JSON.stringify(adminPassword));
  console.log('Are they equal?', password === adminPassword);
  console.log('========================');

  if (!adminPassword) {
    console.error('❌ ADMIN_PASSWORD not set in .env!');
    return res.status(500).json({ error: 'Admin password not configured' });
  }

  if (password === adminPassword) {
    console.log('✅ Login successful!');
    res.json({ success: true });
  } else {
    console.log('❌ Login failed!');
    res.status(401).json({ success: false });
  }
});

// 📥 GET all albums
router.get('/', async (req, res) => {
  try {
    const albums = await Album.find().sort({ createdAt: -1 });
    res.json(albums);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📤 POST upload image to specific album (இது கடைசியாக இருக்க வேண்டும்)
router.post('/:id/images', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const album = await Album.findById(req.params.id);
    if (!album) {
      return res.status(404).json({ error: 'Album not found' });
    }

    const imagePath = `uploads/${req.file.filename}`;
    album.images.push(imagePath);
    await album.save();

    res.json({ success: true, path: imagePath });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🆕 POST create new album (optional)
router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Album name is required' });
    }

    const newAlbum = new Album({ name, images: [] });
    await newAlbum.save();

    res.status(201).json(newAlbum);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// 🗑️ DELETE image from album
router.delete('/:id/images/:index', async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    if (!album) {
      return res.status(404).json({ error: 'Album not found' });
    }

    // Remove image at specified index
    album.images.splice(req.params.index, 1);
    await album.save();

    res.json({ success: true, message: 'Image deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🗑️ DELETE entire album
router.delete('/:id', async (req, res) => {
  try {
    const album = await Album.findByIdAndDelete(req.params.id);
    if (!album) {
      return res.status(404).json({ error: 'Album not found' });
    }

    res.json({ success: true, message: 'Album deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


export default router;
