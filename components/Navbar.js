import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { navLinks } from '@/utils/data';
import { useTheme } from '@/utils/theme-context';

export default function Navbar() {
  const { theme, toggleTheme, ready } = useTheme();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== '/') {
      setActiveId('');
      return undefined;
    }

    const sectionIds = navLinks
      .map((link) => link.href.split('#')[1])
      .filter(Boolean);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const updateActiveSection = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 12) {
        setActiveId(sections[sections.length - 1].id);
        return;
      }

      if (window.scrollY + 120 < sections[0].offsetTop) {
        setActiveId('home');
        return;
      }

      const marker = window.scrollY + Math.min(window.innerHeight * 0.38, 360);
      const current = sections.reduce((active, section) => {
        if (section.offsetTop <= marker) return section;
        return active;
      }, sections[0]);

      setActiveId(current.id);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [router.pathname]);

  const isActive = (link) => {
    if (link.href.startsWith('/#')) return router.pathname === '/' && activeId === link.href.slice(2);
    return router.pathname === link.href || router.pathname.startsWith(link.href + '/');
  };

  return (
    <header className='sticky top-2 z-50 mx-auto w-[calc(100%-1rem)] max-w-6xl rounded-2xl border border-slate-200/80 bg-white/92 shadow-xl shadow-slate-900/10 backdrop-blur-md md:fixed md:left-1/2 md:top-4 md:-translate-x-1/2 dark:border-slate-800 dark:bg-slate-950/90'>
      <nav className='mx-auto flex items-center justify-between px-4 py-3 sm:px-5'>
        <Link href='/#home' className='inline-flex items-center gap-3'>
          <Image
            src='/bibek-sunar-portrait.jpg'
            alt='Bibek Sunar portrait logo'
            width={38}
            height={38}
            className='h-9 w-9 rounded-full border-2 border-[#c9a44f] object-cover dark:border-slate-700'
          />
          <span className='font-heading text-lg font-bold text-slate-950 dark:text-white'>Bibek Sunar</span>
        </Link>

        <div className='hidden items-center gap-4 lg:gap-5 md:flex'>
          {navLinks.map((link) => {
            const active = isActive(link);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  'relative py-2 text-[11px] font-bold uppercase tracking-wide transition duration-200 hover:scale-105 hover:text-[#0f766e] dark:hover:text-brand-400',
                  active ? 'scale-110 text-[#0f766e]' : 'text-slate-700'
                ].join(' ')}
              >
                {link.label}
                <span
                  className={[
                    'absolute inset-x-0 -bottom-0.5 h-0.5 origin-center rounded-full bg-[#c9a44f] transition-transform duration-200',
                    active ? 'scale-x-100' : 'scale-x-0'
                  ].join(' ')}
                />
              </Link>
            );
          })}
        </div>

        <div className='hidden md:block'>
          <motion.button
            whileTap={{ scale: 0.96 }}
            type='button'
            onClick={toggleTheme}
            className='rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:border-[#0f766e] hover:text-[#0f766e] dark:border-slate-700 dark:text-slate-100 dark:hover:border-brand-400 dark:hover:text-brand-400'
            aria-label='Toggle theme'
          >
            {ready ? (theme === 'dark' ? 'Light' : 'Dark') : 'Theme'}
          </motion.button>
        </div>

        <button
          type='button'
          className='inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-800 dark:border-slate-700 dark:text-slate-100 md:hidden'
          aria-label='Open menu'
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <svg viewBox='0 0 24 24' className='h-5 w-5' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'>
              <path d='M6 6l12 12M18 6L6 18' />
            </svg>
          ) : (
            <svg viewBox='0 0 24 24' className='h-5 w-5' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'>
              <path d='M4 7h16M4 12h16M4 17h16' />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className='border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden'>
          <div className='flex flex-col gap-3'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  'rounded-xl px-3 py-2 text-sm font-medium transition hover:text-brand-600 dark:hover:text-brand-400',
                  isActive(link)
                    ? 'bg-[#e8f5ef] text-[#0f766e] dark:bg-brand-900/30 dark:text-brand-300'
                    : 'text-slate-700 dark:text-slate-200'
                ].join(' ')}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <motion.button
              whileTap={{ scale: 0.96 }}
              type='button'
              onClick={toggleTheme}
              className='mt-2 w-fit rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#0f766e] hover:text-[#0f766e] dark:border-slate-700 dark:text-slate-100 dark:hover:border-brand-400 dark:hover:text-brand-400'
              aria-label='Toggle theme'
            >
              {ready ? (theme === 'dark' ? 'Light' : 'Dark') : 'Theme'}
            </motion.button>
          </div>
        </div>
      )}
    </header>
  );
}
