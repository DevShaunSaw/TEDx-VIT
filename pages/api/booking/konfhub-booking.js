import dbConnect from '../../../lib/mongodb';
import Booking from '../../../models/Booking';

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {

  await dbConnect();

  // Disable caching
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Surrogate-Control', 'no-store');

  if (req.method === "GET") {
    return res.status(200).json({ message: "Webhook endpoint working" });
  }

  if (req.method !== "POST") {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {

    const email = req.body?.attendee?.email;

    console.log("Webhook payload:", req.body);
    console.log("Webhook email:", email);

    if (!email) {
      return res.status(400).json({
        error: "Email not found in webhook payload",
      });
    }

    // Find booking by email
    const booking = await Booking.findOne({ email });

    if (!booking) {
      console.log("Booking not found for:", email);

      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    // Update confirmation
    booking.isConfirmed = true;

    await booking.save();

    console.log("Booking confirmed for:", email);

    return res.status(200).json({
      success: true,
      message: "Booking updated successfully",
    });

  } catch (error) {

    console.error("Webhook error:", error);

    return res.status(500).json({
      success: false,
      error: "Webhook failed",
    });
  }
}