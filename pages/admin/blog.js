import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AdminBlogPage() {
  const [token, setToken] = useState('');
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

  useEffect(() => {
    setToken(window.localStorage.getItem('admin_token') || '');
    load();
  }, []);
  const saveToken = () => window.localStorage.setItem('admin_token', token);

  const upload = async (file) => {
    if (!file || !token) return;
    const fd = new FormData();
    fd.append('file', file);
    const r = await fetch('/api/blog/upload', { method: 'POST', headers: { 'x-admin-token': token }, body: fd });
    const d = await r.json();
    if (!r.ok) return setMessage(d.message || 'Upload failed');
    setCoverImage(d.url);
  };

  const publish = async (e) => {
    e.preventDefault();
    const r = await fetch('/api/blog/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-token': token },
      body: JSON.stringify({ title, excerpt, content, coverImage })
    });
    const d = await r.json();
    if (!r.ok) return setMessage(d.message || 'Publish failed');
    setTitle('');
    setExcerpt('');
    setContent('');
    setCoverImage('');
    setMessage('Published');
    load();
  };

  return (
    <main className='mx-auto max-w-4xl px-6 py-12'>
      <h1 className='text-3xl font-bold'>Blog Admin</h1>
      <p className='mt-2 text-sm'>Public blog: <Link className='underline' href='/blog'>/blog</Link></p>
      <div className='mt-4 flex gap-2'>
        <input value={token} onChange={(e) => setToken(e.target.value)} placeholder='ADMIN_TOKEN' className='w-full rounded border px-3 py-2' />
        <button onClick={saveToken} className='rounded bg-black px-4 py-2 text-white'>Save</button>
      </div>
      <form onSubmit={publish} className='mt-6 space-y-3 rounded border p-4'>
        <input required value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' className='w-full rounded border px-3 py-2' />
        <input value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder='Excerpt' className='w-full rounded border px-3 py-2' />
        <textarea required rows={10} value={content} onChange={(e) => setContent(e.target.value)} placeholder='Write blog...' className='w-full rounded border px-3 py-2' />
        <div className='rounded border-2 border-dashed p-4 text-center' onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); upload(e.dataTransfer.files?.[0]); }}>
          Drag image here or choose <input type='file' accept='image/*' onChange={(e) => upload(e.target.files?.[0])} />
        </div>
        {coverImage && <img src={coverImage} alt='cover' className='max-h-52 rounded' />}
        <button className='rounded bg-green-600 px-4 py-2 text-white'>Publish</button>
        {message && <p className='text-sm'>{message}</p>}
      </form>
      <div className='mt-8 space-y-3'>
        {posts.map((p) => (
          <div key={p.id} className='rounded border p-3'>
            <Link className='font-semibold underline' href={'/blog/' + p.slug}>{p.title}</Link>
          </div>
        ))}
      </div>
    </main>
  );
}



