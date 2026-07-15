import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='mt-12 bg-[#114e61] px-6 py-12 text-white dark:border-slate-800 dark:bg-slate-950'>
      <div className='mx-auto grid max-w-6xl gap-6 md:grid-cols-3'>
        <div>
          <p className='font-heading text-lg font-bold text-white'>Bibek Sunar</p>
          <p className='mt-2 text-sm text-white/70'>Young Marketing Professional and Aspiring Entrepreneur</p>
        </div>

        <div className='text-sm text-white/75'>
          <p>Phone: +9779845900042</p>
          <p className='mt-1'>Email: bibek.contact1@gmail.com</p>
          <p className='mt-1'>Location: Bharatpur-6, Nepal</p>
          <div className='mt-3 flex flex-wrap gap-3'>
            <Link href='/about-bibek-sunar' className='text-xs font-semibold text-[#f5c766] hover:underline dark:text-brand-400'>About</Link>
            <Link href='/projects' className='text-xs font-semibold text-[#f5c766] hover:underline dark:text-brand-400'>Experience</Link>
            <Link href='/official-social-profiles' className='text-xs font-semibold text-[#f5c766] hover:underline dark:text-brand-400'>Official Profiles</Link>
          </div>
        </div>

        <div className='flex items-start gap-3'>
          <a
            href='https://www.instagram.com/bibek.contact1'
            target='_blank'
            rel='me noopener'
            className='rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white/80 transition hover:border-[#f5c766] hover:text-[#f5c766] dark:border-slate-700 dark:text-slate-300'
          >
            Instagram
          </a>
          <a
            href='https://facebook.com/bibek.contact1'
            target='_blank'
            rel='me noopener'
            className='rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white/80 transition hover:border-[#f5c766] hover:text-[#f5c766] dark:border-slate-700 dark:text-slate-300'
          >
            Facebook
          </a>
        </div>
      </div>

      <p className='mx-auto mt-8 max-w-6xl border-t border-white/10 pt-6 text-xs text-white/55 dark:border-slate-800 dark:text-slate-400'>
        Copyright {year} Bibek Sunar. All rights reserved.
      </p>
    </footer>
  );
}

