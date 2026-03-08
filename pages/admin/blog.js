import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AdminBlogPage() {
  const [token, setToken] = useState('');
  const [auth, setAuth] = useState(false);
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState('');

  const load = async () => {
    const r = await fetch('/api/blog/posts');
    const d = await r.json();
    setPosts(d.posts || []);
  };

  const checkAuth = async () => {
    const r = await fetch('/api/admin/session');
    const d = await r.json();
    setAuth(Boolean(d.authenticated));
  };

  useEffect(() => {
    checkAuth();
    load();
  }, []);

  const login = async () => {
    const r = await fetch('/api/admin/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token })
    });
    const d = await r.json();
    if (!r.ok) return setMessage(d.message || 'Login failed');
    setAuth(true);
    setToken('');
    setMessage('Authenticated');
  };

  const logout = async () => {
    await fetch('/api/admin/session', { method: 'DELETE' });
    setAuth(false);
    setMessage('Logged out');
  };

  const upload = async (file) => {
    if (!file || !auth) return;
    const fd = new FormData();
    fd.append('file', file);
    const r = await fetch('/api/blog/upload', { method: 'POST', body: fd });
    const d = await r.json();
    if (!r.ok) return setMessage(d.message || 'Upload failed');
    setCoverImage(d.url);
  };

  const publish = async (e) => {
    e.preventDefault();
    if (!auth) return setMessage('Login first');
    const r = await fetch('/api/blog/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, excerpt, content, coverImage })
    });
    const d = await r.json();
    if (!r.ok) return setMessage(d.message || 'Publish failed');
    setTitle(''); setExcerpt(''); setContent(''); setCoverImage(''); setMessage('Published'); load();
  };

  const remove = async (id) => {
    if (!auth) return setMessage('Login first');
    const r = await fetch('/api/blog/posts/' + id, { method: 'DELETE' });
    if (!r.ok) return setMessage('Delete failed');
    load();
  };

  return (
    <main className='mx-auto max-w-4xl px-6 py-12'>
      <h1 className='text-3xl font-bold'>Blog Admin</h1>
      <p className='mt-2 text-sm'>Public blog: <Link className='underline' href='/blog'>/blog</Link></p>

      {!auth && (
        <div className='mt-4 flex gap-2'>
          <input value={token} onChange={(e) => setToken(e.target.value)} placeholder='Enter admin token' className='w-full rounded border px-3 py-2' />
          <button type='button' onClick={login} className='rounded bg-black px-4 py-2 text-white'>Login</button>
        </div>
      )}

      {auth && (
        <div className='mt-4'>
          <button type='button' onClick={logout} className='rounded border px-4 py-2'>Logout</button>
        </div>
      )}

      <form onSubmit={publish} className='mt-6 space-y-3 rounded border p-4'>
        <input required value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' className='w-full rounded border px-3 py-2' />
        <input value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder='Excerpt' className='w-full rounded border px-3 py-2' />
        <textarea required rows={10} value={content} onChange={(e) => setContent(e.target.value)} placeholder='Write blog...' className='w-full rounded border px-3 py-2' />
        <div className='rounded border-2 border-dashed p-4 text-center' onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); upload(e.dataTransfer.files?.[0]); }}>
          Drag image here or choose <input type='file' accept='image/*' onChange={(e) => upload(e.target.files?.[0])} />
        </div>
        {coverImage && <img src={coverImage} alt='cover' className='max-h-52 rounded' />}
        <button className='rounded bg-green-600 px-4 py-2 text-white'>Publish</button>
      </form>

      {message && <p className='mt-3 text-sm'>{message}</p>}

      <div className='mt-8 space-y-3'>
        {posts.map((p) => (
          <div key={p.id} className='rounded border p-3'>
            <Link className='font-semibold underline' href={'/blog/' + p.slug}>{p.title}</Link>
            {auth && <button type='button' onClick={() => remove(p.id)} className='ml-3 rounded border px-2 py-1 text-xs text-red-600'>Delete</button>}
          </div>
        ))}
      </div>
    </main>
  );
}
