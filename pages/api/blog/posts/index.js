import { createPost, getAllPosts } from '@/lib/blog-store';

function isAuthorized(req) {
  const token = req.headers['x-admin-token'];
  return Boolean(process.env.ADMIN_TOKEN) && token === process.env.ADMIN_TOKEN;
}

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const posts = await getAllPosts();
      return res.status(200).json({ posts });
    }

    if (req.method === 'POST') {
      if (!isAuthorized(req)) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const { title, excerpt, content, coverImage } = req.body || {};
      if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required.' });
      }

      const post = await createPost({ title, excerpt, content, coverImage });
      return res.status(201).json({ post });
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    return res.status(500).json({ message: error.message || 'Server error' });
  }
}
