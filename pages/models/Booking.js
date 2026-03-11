import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  movie: {
    type: String,
    required: true,
  },
  seat_no: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

// Ensure unique booking per user per movie if needed
BookingSchema.index({ user_id: 1, movie: 1 }, { unique: true });

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
