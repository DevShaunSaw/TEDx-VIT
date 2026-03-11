import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();

    const email = body.attendee?.email;

    if (!email) {
      return NextResponse.json(
        { error: "Email not found in webhook payload" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("event");

    const user = await db.collection("users").findOne({ email: email });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found in database",
      });
    }

    await db.collection("users").updateOne(
      { email: email },
      {
        $set: {
          isConfirmed: true
        },
      }
    );

    return NextResponse.json({
      success: true,
      message: "User updated successfully",
    });

  } catch (error) {
    console.error("Webhook error:", error);

    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}