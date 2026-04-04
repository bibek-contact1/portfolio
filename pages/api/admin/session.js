import { clearSessionCookie, isAdminRequest, setSessionCookie } from '@/lib/admin-auth';

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ authenticated: isAdminRequest(req) });
  }

  if (req.method === 'POST') {
    const { id, password, token } = req.body || {};
    const useLoginPair = Boolean(process.env.ADMIN_LOGIN_ID && process.env.ADMIN_LOGIN_PASSWORD);

    const validByPair = useLoginPair && id === process.env.ADMIN_LOGIN_ID && password === process.env.ADMIN_LOGIN_PASSWORD;
    const validByToken = process.env.ADMIN_TOKEN && token === process.env.ADMIN_TOKEN;

    if (!validByPair && !validByToken) {
      return res.status(401).json({ message: 'Invalid credentials.' });
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
