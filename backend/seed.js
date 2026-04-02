import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import Album from './models/Album.js';

const defaultAlbums = [
  "Food Donation",
  "Charity Event",
  "Helping Hands",
  "Medical Camp",
  "Child Support",
  "Volunteer Work",
  "Education Help",
  "Old Age Support",
  "Disaster Relief"
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✅ Connected to MongoDB Atlas');

    // Clear existing albums (optional - comment out if you want to keep existing)
    // await Album.deleteMany({});
    // console.log('🗑️ Cleared existing albums');

    // Check if albums already exist
    const count = await Album.countDocuments();
    if (count === 0) {
      const albumsToInsert = defaultAlbums.map(name => ({ name, images: [] }));
      await Album.insertMany(albumsToInsert);
      console.log('✅ Default albums inserted!');
    } else {
      console.log(`ℹ️ ${count} albums already exist. Skipping seed.`);
    }

    mongoose.disconnect();
  })
  .catch((err) => {
    console.error('❌ Error:', err);
    mongoose.disconnect();
    process.exit(1);
  });
