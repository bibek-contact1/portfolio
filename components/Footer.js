import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='border-t border-slate-200 bg-white/80 px-6 py-10 dark:border-slate-800 dark:bg-slate-950/80'>
      <div className='mx-auto grid max-w-6xl gap-6 md:grid-cols-3'>
        <div>
          <p className='font-heading text-lg font-bold text-slate-900 dark:text-white'>Bibek Sunar</p>
          <p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>Young Marketing Professional and Aspiring Entrepreneur</p>
        </div>

        <div className='text-sm text-slate-700 dark:text-slate-300'>
          <p>Phone: +9779845900042</p>
          <p className='mt-1'>Email: bibek.contact1@gmail.com</p>
          <p className='mt-1'>Location: Bharatpur-6, Nepal</p>
          <div className='mt-3 flex flex-wrap gap-3'>
            <Link href='/about-bibek-sunar' className='text-xs font-semibold text-brand-600 hover:underline dark:text-brand-400'>About</Link>
            <Link href='/projects' className='text-xs font-semibold text-brand-600 hover:underline dark:text-brand-400'>Projects</Link>
            <Link href='/blog' className='text-xs font-semibold text-brand-600 hover:underline dark:text-brand-400'>Blog</Link>
          </div>
        </div>

        <div className='flex items-start gap-3'>
          <a
            href='https://www.instagram.com/bibek.contact1'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300'
          >
            Instagram
          </a>
          <a
            href='https://www.facebook.com/bibek.contact1/'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300'
          >
            Facebook
          </a>
        </div>
      </div>

      <p className='mx-auto mt-8 max-w-6xl border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400'>
        Copyright {year} Bibek Sunar. All rights reserved.
      </p>
    </footer>
  );
}
