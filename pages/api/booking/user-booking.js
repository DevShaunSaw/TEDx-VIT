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
      const session = await getServerSession(req, res, authOptions);

      if (!session) {
        console.log('No session found in API');
        return res.status(401).json({ message: 'Unauthorized. Please login to view your ticket.' });
      }

      console.log('Session user:', JSON.stringify(session.user));
      const userId = session.user.id;
      const userEmail = session.user.email;
      console.log('Fetching booking for userId:', userId);
      
      // Fetch the most recent booking for the user (try ID first, then Email as fallback)
      let booking = await Booking.findOne({ user_id: userId }).sort({ createdAt: -1 });
      
      if (!booking && userEmail) {
        console.log('No booking found by userId, trying email:', userEmail);
        booking = await Booking.findOne({ email: userEmail }).sort({ createdAt: -1 });
      }
      
      if (!booking) {
        console.log('No booking found for userId:', userId);
        return res.status(404).json({ message: 'No booking found' });
      }

      return res.status(200).json(booking);
    } catch (error) {
      console.error('Fetch booking error:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
