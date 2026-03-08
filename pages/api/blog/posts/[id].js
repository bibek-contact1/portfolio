import { deletePost, updatePost } from '@/lib/blog-store';
import { isAdminRequest } from '@/lib/admin-auth';

export default async function handler(req, res) {
  if (!isAdminRequest(req)) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { id } = req.query;

  try {
    if (req.method === 'PUT') {
      const { title, excerpt, content, coverImage } = req.body || {};
      if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required.' });
      }

      const post = await updatePost(Number(id), { title, excerpt, content, coverImage });
      if (!post) return res.status(404).json({ message: 'Post not found' });
      return res.status(200).json({ post });
    }

    if (req.method === 'DELETE') {
      await deletePost(Number(id));
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    return res.status(500).json({ message: error.message || 'Server error' });
  }
}
