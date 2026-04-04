import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { navLinks } from '@/utils/data';
import { useTheme } from '@/utils/theme-context';

export default function Navbar() {
  const { theme, toggleTheme, ready } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
        <Link href='/#home' className='inline-flex items-center gap-3'>
          <Image
            src='/bibek-sunar-portrait.jpg'
            alt='Bibek Sunar portrait logo'
            width={38}
            height={38}
            className='h-10 w-10 rounded-full border border-slate-200 object-cover dark:border-slate-700'
          />
          <span className='font-heading text-xl font-bold text-slate-900 dark:text-white'>Bibek Sunar</span>
        </Link>

        <div className='hidden items-center gap-6 md:flex'>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className='text-sm font-medium text-slate-700 transition hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-400'>
              {link.label}
            </Link>
          ))}
        </div>

        <div className='hidden md:block'>
          <motion.button
            whileTap={{ scale: 0.96 }}
            type='button'
            onClick={toggleTheme}
            className='rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-100 dark:hover:border-brand-400 dark:hover:text-brand-400'
            aria-label='Toggle theme'
          >
            {ready ? (theme === 'dark' ? 'Light' : 'Dark') : 'Theme'}
          </motion.button>
        </div>

        <button
          type='button'
          className='inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-100 md:hidden'
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
        <div className='border-t border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden'>
          <div className='flex flex-col gap-3'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-sm font-medium text-slate-700 transition hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-400'
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <motion.button
              whileTap={{ scale: 0.96 }}
              type='button'
              onClick={toggleTheme}
              className='mt-2 w-fit rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-100 dark:hover:border-brand-400 dark:hover:text-brand-400'
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
