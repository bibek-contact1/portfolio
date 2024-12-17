// /pages/api/submitForm.js

import Airtable from "airtable";

// Initialize Airtable with API key and Base ID from environment variables
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    try {
      // Create a new record in the "Contact Form Submissions" table
      await base("Contact Form Submissions").create([
        {
          fields: {
            Name: name,
            "Phone Number": phone,
            Email: email,
            Message: message,
          },
        },
      ]);
      // Send success response
      res.status(200).json({ success: true, message: "Form submitted successfully!" });
    } catch (error) {
      console.error("Error submitting form:", error);
      res.status(500).json({ success: false, message: "Error submitting form." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
