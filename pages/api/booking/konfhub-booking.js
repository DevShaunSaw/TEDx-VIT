export default async function handler(req, res) {

  console.log("METHOD:", req.method);
  console.log("BODY:", req.body);

  if (req.method === "GET") {
    return res.status(200).json({ message: "Webhook endpoint working" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const email = req.body.attendee?.email;

    console.log("EMAIL:", email);

    res.json({ success: true });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}