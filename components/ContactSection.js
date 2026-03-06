import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to send message.');
      setForm({ name: '', email: '', message: '' });
      setStatus('Message sent successfully.');
    } catch (err) {
      setStatus(err.message || 'Something went wrong.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id='contact' className='mx-auto max-w-6xl px-6 py-20'>
      <h2 className='font-heading text-3xl font-bold text-slate-900 dark:text-white'>Contact Me</h2>
      <form onSubmit={submit} className='mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900'>
        <div className='grid gap-5 md:grid-cols-2'>
          <input required name='name' placeholder='Name' value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className='w-full rounded-xl border border-slate-300 px-4 py-3 dark:border-slate-700 dark:bg-slate-950' />
          <input required type='email' name='email' placeholder='Email' value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className='w-full rounded-xl border border-slate-300 px-4 py-3 dark:border-slate-700 dark:bg-slate-950' />
        </div>
        <textarea required name='message' rows={6} placeholder='Message' value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className='mt-5 w-full rounded-xl border border-slate-300 px-4 py-3 dark:border-slate-700 dark:bg-slate-950' />
        <button type='submit' disabled={sending} className='mt-6 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-60'>
          {sending ? 'Sending...' : 'Send Message'}
        </button>
        {status && <p className='mt-4 text-sm text-slate-700 dark:text-slate-300'>{status}</p>}
      </form>
    </section>
  );
}
