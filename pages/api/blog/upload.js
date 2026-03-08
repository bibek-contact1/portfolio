import fs from 'fs';
import formidable from 'formidable';
import { put } from '@vercel/blob';
import { isAdminRequest } from '@/lib/admin-auth';

export const config = {
  api: {
    bodyParser: false
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  if (!isAdminRequest(req)) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const form = formidable({ multiples: false, maxFileSize: 5 * 1024 * 1024 });
    const [, files] = await form.parse(req);
    const file = files.file?.[0];

    if (!file) {
      return res.status(400).json({ message: 'File is required.' });
    }

    if (!(file.mimetype || '').startsWith('image/')) {
      return res.status(400).json({ message: 'Only image uploads are allowed.' });
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
