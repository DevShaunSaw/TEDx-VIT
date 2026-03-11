import dbConnect from '../../../lib/mongodb';
import Booking from '../../../models/Booking';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  await dbConnect();
  
  // Disable caching for this API
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Surrogate-Control', 'no-store');

  if (req.method === 'GET') {
    try {
      const { movie } = req.query;

      if (!movie) {
        return res.status(400).json({ message: 'Movie ID required' });
      }

      const bookings = await Booking.find({ movie }).select('seat_no user_id');
      return res.status(200).json(bookings);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to fetch bookings' });
    }
  } else if (req.method === 'POST') {
    try {
      const session = await getServerSession(req, res, authOptions);

      if (!session) {
        return res.status(401).json({ message: 'Unauthorized. Please login to book.' });
      }

      const { movie, seat_no, full_name, email, phone } = req.body;

      if (!movie || !seat_no) {
        console.error('Missing fields: movie=', movie, 'seat_no=', seat_no);
        return res.status(400).json({ message: 'Missing fields' });
      }

      // Check if user already booked a seat for this movie
      const userId = session.user.id;
      const existingUserBooking = await Booking.findOne({ user_id: userId, movie });
      if (existingUserBooking) {
        console.error('User already booked');
        return res.status(400).json({ message: 'You have already booked a seat for this movie' });
      }

      // Check if seat is already taken
      const existingSeatBooking = await Booking.findOne({ movie, seat_no });
      if (existingSeatBooking) {
        console.error('Seat already taken');
        return res.status(400).json({ message: 'Seat already taken' });
      }

      const booking = await Booking.create({
        user_id: userId,
        movie,
        seat_no,
        full_name,
        email,
        phone,
      });

      return res.status(201).json({ message: 'Booking successful', booking });
    } catch (error) {
      console.error('Booking error:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
