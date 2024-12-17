import Airtable from 'airtable';

// Initialize Airtable
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { name, number, email, message } = req.body;

            // Validate incoming data
            if (!name || !number || !email || !message) {
                return res.status(400).json({ error: 'All fields are required!' });
            }

            // Insert data into Airtable
            await base(process.env.AIRTABLE_TABLE_NAME).create([
                {
                    fields: {
                        Name: name,
                        Number: number,
                        Email: email,
                        Message: message,
                    },
                },
            ]);

            // Success response
            return res.status(200).json({ success: true, message: 'Form submitted successfully!' });
        } catch (error) {
            console.error('Error saving to Airtable:', error);
            return res.status(500).json({ error: 'Failed to submit form. Try again later.' });
        }
    } else {
        // Handle unsupported methods
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
