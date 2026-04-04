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
      <p className='section-kicker'>Connect</p>
      <h2 className='section-title'>Contact Me</h2>
      <p className='section-subtitle'>Ready to collaborate or discuss an opportunity? Send a message anytime.</p>
      <div className='section-frame soft-grid mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]'>
        <div className='space-y-4'>
          <p className='text-lg font-semibold text-slate-900 dark:text-white'>Let&apos;s build something impactful.</p>
          <p className='text-sm leading-relaxed text-slate-600 dark:text-slate-300'>
            Share a challenge, a campaign idea, or a partnership opportunity. I reply within 24 hours.
          </p>
          <div className='space-y-2 text-sm text-slate-700 dark:text-slate-200'>
            <p className='flex items-center gap-2'><span className='h-2 w-2 rounded-full bg-brand-500' /> Bharatpur-6, Nepal</p>
            <p className='flex items-center gap-2'><span className='h-2 w-2 rounded-full bg-brand-500' /> +9779845900042</p>
            <p className='flex items-center gap-2'><span className='h-2 w-2 rounded-full bg-brand-500' /> bibek.contact1@gmail.com</p>
          </div>
          <div className='flex gap-3 pt-2'>
            <a className='subtle-pill hover:bg-brand-600 hover:text-white transition' href='https://facebook.com/bibek.contact1' target='_blank' rel='noreferrer'>Facebook</a>
            <a className='subtle-pill hover:bg-brand-600 hover:text-white transition' href='https://www.instagram.com/bibek.contact1' target='_blank' rel='noreferrer'>Instagram</a>
          </div>
        </div>

        <form onSubmit={submit} className='glass-card'>
          <div className='grid gap-5 md:grid-cols-2'>
            <input required name='name' placeholder='Name' value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className='w-full rounded-xl border border-slate-300/80 bg-white/70 px-4 py-3 text-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 dark:border-slate-700/80 dark:bg-slate-950/60' />
            <input required type='email' name='email' placeholder='Email' value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className='w-full rounded-xl border border-slate-300/80 bg-white/70 px-4 py-3 text-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 dark:border-slate-700/80 dark:bg-slate-950/60' />
          </div>
          <textarea required name='message' rows={6} placeholder='Message' value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className='mt-5 w-full rounded-xl border border-slate-300/80 bg-white/70 px-4 py-3 text-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 dark:border-slate-700/80 dark:bg-slate-950/60' />
          <button type='submit' disabled={sending} className='mt-6 w-full rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-60'>
            {sending ? 'Sending...' : 'Send Message'}
          </button>
          {status && <p className='mt-4 text-sm text-slate-700 dark:text-slate-300'>{status}</p>}
        </form>
      </div>
    </section>
  );
}


