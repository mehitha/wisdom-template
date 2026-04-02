import mongoose from 'mongoose';

const albumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  images: [
    {
      type: String,
      required: false
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Album', albumSchema);
