
import nodemailer from 'nodemailer';
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed." });
  const body = req.body || {};
  const name = body.name;
  const email = body.email;
  const message = body.message;
  if (!name || !email || !message) return res.status(400).json({ message: "Name, email, and message are required." });
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const receiver = process.env.CONTACT_RECEIVER || "bibek.contact1@gmail.com";
  if (!user || !pass) return res.status(500).json({ message: "Email credentials are missing on the server." });
  try {
    const transporter = nodemailer.createTransport({ service: "gmail", auth: { user: user, pass: pass } });
    await transporter.sendMail({ from: "Portfolio Contact <" + user + ">", to: receiver, replyTo: email, subject: "New message from " + name, text: "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message });
    return res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Failed to send message." });
  }
}
