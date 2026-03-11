import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {

  if (req.method === "GET") {
    return res.status(200).json({ message: "Webhook endpoint working" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const body = req.body;

    const email = body.attendee?.email;

    if (!email) {
      return res.status(400).json({
        error: "Email not found in webhook payload",
      });
    }

    const client = await clientPromise;
    const db = client.db("event");

    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User not found in database",
      });
    }

    await db.collection("users").updateOne(
      { email },
      {
        $set: { isConfirmed: true }
      }
    );

    return res.json({
      success: true,
      message: "User updated successfully"
    });

  } catch (error) {
    console.error("Webhook error:", error);

    return res.status(500).json({
      success: false,
      error: "Internal server error"
    });
  }
}