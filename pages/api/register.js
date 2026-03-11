import dbConnect from '../../lib/mongodb';
import Booking from "../../models/Booking";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { fullName, phoneNumber, email, seat, userId } = req.body;

    // Basic validation
    if (!fullName || !phoneNumber || !email) {
      return res.status(400).json({
        error: "All fields are required.",
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        error: "Invalid email address.",
      });
    }

    const cleanedPhone = phoneNumber.replace(/\s+/g, "");

    if (!/^[6-9]\d{9}$/.test(cleanedPhone)) {
      return res.status(400).json({
        error: "Enter a valid 10-digit Indian mobile number.",
      });
    }

    await connectMongo();

    const existing = await Booking.findOne({
      email: email.toLowerCase().trim(),
    });

    if (existing) {
      return res.status(409).json({
        error: "This email is already registered.",
      });
    }

    await Booking.create({
      fullName: fullName.trim(),
      phoneNumber: cleanedPhone,
      email: email.toLowerCase().trim(),
      seat,
      userId: userId || null,
    });

    return res.status(201).json({
      message: "Registered successfully.",
    });
  } catch (err) {
    console.error("Registration error:", err);

    return res.status(500).json({
      error: "Something went wrong. Please try again.",
    });
  }
}