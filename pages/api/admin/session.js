import { clearSessionCookie, isAdminRequest, setSessionCookie } from '@/lib/admin-auth';

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ authenticated: isAdminRequest(req) });
  }

  if (req.method === 'POST') {
    const { token } = req.body || {};
    if (!process.env.ADMIN_TOKEN || token !== process.env.ADMIN_TOKEN) {
      return res.status(401).json({ message: 'Invalid admin token.' });
    }
    setSessionCookie(res);
    return res.status(200).json({ authenticated: true });
  }

  if (req.method === 'DELETE') {
    clearSessionCookie(res);
    return res.status(200).json({ authenticated: false });
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
