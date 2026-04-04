import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import SeoHead from '@/components/SeoHead';
import { parseTags } from '@/utils/blog-utils';

export default function AdminBlogPage() {
  const router = useRouter();
  const [auth, setAuth] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [lastUploadedImage, setLastUploadedImage] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState('');
  const contentRef = useRef(null);

  const load = async () => {
    const r = await fetch('/api/blog/posts');
    const d = await r.json();
    setPosts(d.posts || []);
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const r = await fetch('/api/admin/session');
        const d = await r.json();
        const ok = Boolean(d.authenticated);
        setAuth(ok);
        if (!ok) router.replace('/admin');
      } finally {
        setCheckingAuth(false);
      }
    };
    checkAuth();
    load();
  }, [router]);

  const logout = async () => {
    await fetch('/api/admin/session', { method: 'DELETE' });
    setAuth(false);
    router.replace('/admin');
  };

  const upload = async (file) => {
    if (!file || !auth) return;
    const fd = new FormData();
    fd.append('file', file);
    const r = await fetch('/api/blog/upload', { method: 'POST', body: fd });
    const d = await r.json();
    if (!r.ok) {
      const m = d.message || 'Upload failed';
      setMessage(m);
      window.alert('Image upload failed: ' + m);
      return;
    }
    const url = d.url;
    setLastUploadedImage(url);
    insertImageAtCursor(url);
    window.alert('Image uploaded and inserted into content at cursor position.');
  };

  const insertImageAtCursor = (url) => {
    const textarea = contentRef.current;
    const marker = `[image:${url}]`;

    if (!textarea) {
      setContent((prev) => (prev ? prev + '\n' + marker : marker));
      return;
    }

    const start = textarea.selectionStart ?? content.length;
    const end = textarea.selectionEnd ?? content.length;

    setContent((prev) => {
      const before = prev.slice(0, start);
      const after = prev.slice(end);
      const prefix = before && !before.endsWith('\n') ? '\n' : '';
      const suffix = after && !after.startsWith('\n') ? '\n' : '';
      return before + prefix + marker + suffix + after;
    });

    setTimeout(() => {
      textarea.focus();
    }, 0);
  };

  const resetForm = () => {
    setTitle('');
    setExcerpt('');
    setContent('');
    setCoverImage('');
    setCategory('');
    setTags('');
    setLastUploadedImage('');
    setEditingId(null);
  };

  const startEdit = (post) => {
    setEditingId(post.id);
    setTitle(post.title || '');
    setExcerpt(post.excerpt || '');
    setContent(post.content || '');
    setCoverImage(post.cover_image || '');
    setCategory(post.category || '');
    setTags(parseTags(post.tags).join(', '));
    setMessage('Editing post: ' + (post.title || 'Untitled'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => contentRef.current?.focus(), 50);
  };

  const publish = async (e) => {
    e.preventDefault();
    if (!auth) return setMessage('Login first');
    setSaving(true);

    try {
      const endpoint = editingId ? '/api/blog/posts/' + editingId : '/api/blog/posts';
      const method = editingId ? 'PUT' : 'POST';

      const r = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, excerpt, content, coverImage, category, tags })
      });
      const d = await r.json();
      if (!r.ok) {
        const m = d.message || (editingId ? 'Update failed' : 'Publish failed');
        setMessage(m);
        window.alert((editingId ? 'Update failed: ' : 'Publish failed: ') + m);
        return;
      }

      resetForm();
      setMessage(editingId ? 'Blog updated successfully.' : 'Published');
      await load();
      window.alert(editingId ? 'Blog updated successfully.' : 'Blog published successfully.');
    } finally {
      setSaving(false);
    }
  };

  const remove = async (id) => {
    if (!auth) return setMessage('Login first');
    const r = await fetch('/api/blog/posts/' + id, { method: 'DELETE' });
    if (!r.ok) return setMessage('Delete failed');
    if (editingId === id) {
      resetForm();
    }
    setMessage('Blog deleted.');
    load();
  };

  if (checkingAuth) {
    return <main className='mx-auto max-w-4xl px-6 py-12'>Checking session...</main>;
  }

  if (!auth) {
    return null;
  }

  return (
    <>
      <SeoHead title='Admin Blog | Bibek Sunar' description='Admin blog dashboard' path='/admin/blog' noindex />
      <main className='mx-auto max-w-4xl px-6 py-12'>
        <h1 className='text-3xl font-bold'>Blog Admin</h1>
        <p className='mt-2 text-sm'>Public blog: <Link className='underline' href='/blog'>/blog</Link></p>

        <div className='mt-4'>
          <button type='button' onClick={logout} className='rounded border px-4 py-2'>Logout</button>
        </div>

      <form onSubmit={publish} className='mt-6 space-y-3 rounded border p-4'>
        <h2 className='text-lg font-semibold'>{editingId ? 'Edit Blog Post' : 'Create Blog Post'}</h2>
        <input required value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' className='w-full rounded border px-3 py-2' />
        <input value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder='Excerpt' className='w-full rounded border px-3 py-2' />
        <div className='grid gap-3 md:grid-cols-2'>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder='Category (e.g. Digital Marketing)'
            className='w-full rounded border px-3 py-2'
          />
          <input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder='Tags (comma separated)'
            className='w-full rounded border px-3 py-2'
          />
        </div>
        <p className='text-xs text-slate-500'>
          Put cursor where you want the image, then upload. Image will be inserted at that exact position in your content.
        </p>
        <textarea
          ref={contentRef}
          required
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Write blog...'
          className='w-full rounded border px-3 py-2'
        />
        <div className='rounded border-2 border-dashed p-4 text-center' onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); upload(e.dataTransfer.files?.[0]); }}>
          Drag image here or choose <input type='file' accept='image/*' onChange={(e) => upload(e.target.files?.[0])} />
        </div>
        {lastUploadedImage && (
          <button
            type='button'
            onClick={() => setCoverImage(lastUploadedImage)}
            className='rounded border border-slate-300 px-3 py-2 text-sm dark:border-slate-700'
          >
            Use last uploaded image as cover
          </button>
        )}
        {coverImage && <img src={coverImage} alt='cover' className='max-h-52 rounded' />}
        <div className='flex flex-wrap gap-2'>
          <button disabled={saving} className='rounded bg-green-600 px-4 py-2 text-white disabled:opacity-60'>
            {saving ? 'Saving...' : editingId ? 'Update Blog' : 'Publish'}
          </button>
          {editingId && (
            <button
              type='button'
              onClick={resetForm}
              className='rounded border border-slate-300 px-4 py-2 text-sm dark:border-slate-700'
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

        {message && <p className='mt-3 text-sm'>{message}</p>}

        <div className='mt-8 grid gap-4 md:grid-cols-2'>
          {posts.map((p) => {
            const tagList = parseTags(p.tags);
            return (
              <button
                key={p.id}
                type='button'
                onClick={() => startEdit(p)}
                className='w-full rounded-xl border border-slate-300 bg-white p-4 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:bg-slate-900'
              >
                <div className='flex items-center justify-between gap-2'>
                  <p className='font-semibold text-slate-900 underline decoration-2 underline-offset-2 dark:text-white'>{p.title}</p>
                  <Link
                    href={'/blog/' + p.slug}
                    target='_blank'
                    className='text-xs font-semibold text-brand-600 hover:underline dark:text-brand-400'
                    onClick={(e) => e.stopPropagation()}
                  >
                    View
                  </Link>
                </div>
                <p className='mt-1 text-xs text-slate-500'>
                  {p.category ? 'Category: ' + p.category : 'Category: Unspecified'}
                </p>
                {tagList.length > 0 && (
                  <p className='mt-1 text-xs text-slate-500'>Tags: {tagList.join(', ')}</p>
                )}
                <div className='mt-3 flex flex-wrap gap-2'>
                  <span className='rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300'>
                    Edit this post
                  </span>
                  <button
                    type='button'
                    onClick={(e) => {
                      e.stopPropagation();
                      remove(p.id);
                    }}
                    className='text-[11px] font-semibold text-red-600 underline underline-offset-2 hover:text-red-700'
                  >
                    Delete
                  </button>
                </div>
              </button>
            );
          })}
        </div>
      </main>
    </>
  );
}
