import dbConnect from '../../../lib/mongodb';

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    return res.status(200).json({ message: "Webhook endpoint working" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const body = req.body;

    const email = body?.attendee?.email;

    if (!email) {
      return res.status(400).json({
        error: "Email not found in webhook payload",
      });
    }

    await db.collection("users").updateOne(
      { email },
      { $set: { isConfirmed: true } }
    );

    return res.status(200).json({
      success: true,
      message: "Webhook processed successfully",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Webhook failed",
    });
  }
}