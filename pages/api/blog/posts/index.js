import { createPost, getAllPosts } from '@/lib/blog-store';
import { isAdminRequest } from '@/lib/admin-auth';

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const posts = await getAllPosts();
      return res.status(200).json({ posts });
    }

    if (req.method === 'POST') {
      if (!isAdminRequest(req)) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const { title, excerpt, content, coverImage, category, tags } = req.body || {};
      if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required.' });
      }

      const post = await createPost({ title, excerpt, content, coverImage, category, tags });
      return res.status(201).json({ post });
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    return res.status(500).json({ message: error.message || 'Server error' });
  }
}
