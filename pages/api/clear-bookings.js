import { NextResponse } from "next/server";
import dbConnect from '../../lib/mongodb'
import Booking from "../../models/Booking";

export async function GET() {
  try {
    await connectDB();

    const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000);

    const result = await Booking.deleteMany({
      isConfirmed: false,
      createdAt: { $lt: fifteenMinutesAgo }
    });

    return NextResponse.json({
      success: true,
      deletedBookings: result.deletedCount
    });

  } catch (error) {
    console.error("Cleanup error:", error);

    return NextResponse.json({
      success: false,
      error: error.message
    });
  }
}