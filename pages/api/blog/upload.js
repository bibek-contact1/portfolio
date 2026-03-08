import fs from 'fs';
import formidable from 'formidable';
import { put } from '@vercel/blob';

export const config = {
  api: {
    bodyParser: false
  }
};

function isAuthorized(req) {
  const token = req.headers['x-admin-token'];
  return Boolean(process.env.ADMIN_TOKEN) && token === process.env.ADMIN_TOKEN;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  if (!isAuthorized(req)) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const form = formidable({ multiples: false });
    const [fields, files] = await form.parse(req);
    const file = files.file?.[0];

    if (!file) {
      return res.status(400).json({ message: 'File is required.' });
    }

    const buffer = fs.readFileSync(file.filepath);
    const filename = 'blog/' + Date.now() + '-' + (file.originalFilename || 'image');

    const blob = await put(filename, buffer, {
      access: 'public',
      contentType: file.mimetype || 'application/octet-stream'
    });

    return res.status(200).json({ url: blob.url });
  } catch (error) {
    return res.status(500).json({ message: error.message || 'Upload failed' });
  }
}

