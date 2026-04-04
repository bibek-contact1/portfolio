import { useState } from 'react';
import { useRouter } from 'next/router';
import SeoHead from '@/components/SeoHead';

export default function AdminLoginPage() {
  const router = useRouter();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/admin/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, password })
      });
      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || 'Login failed');
        return;
      }

      router.push('/admin/blog');
    } catch {
      setMessage('Unable to login right now. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SeoHead title='Admin Login | Bibek Sunar' description='Admin login' path='/admin' noindex />
      <main className='mx-auto flex min-h-screen max-w-md items-center px-6 py-10'>
        <div className='w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900'>
          <h1 className='text-2xl font-bold text-slate-900 dark:text-white'>Admin Login</h1>
          <p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>Sign in to manage blog posts.</p>

          <form onSubmit={submit} className='mt-5 space-y-3'>
            <input
              required
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder='Login ID'
              className='w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-500 dark:border-slate-700 dark:bg-slate-950'
            />
            <input
              required
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              className='w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-500 dark:border-slate-700 dark:bg-slate-950'
            />
            <button
              type='submit'
              disabled={loading}
              className='w-full rounded-lg bg-slate-900 px-4 py-2 text-white disabled:opacity-60 dark:bg-slate-100 dark:text-slate-900'
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {message && <p className='mt-3 text-sm text-red-600 dark:text-red-400'>{message}</p>}
        </div>
      </main>
    </>
  );
}
