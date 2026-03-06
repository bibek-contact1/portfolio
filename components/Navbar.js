import Image from 'next/image';
import { motion } from 'framer-motion';
import { navLinks } from '@/utils/data';
import { useTheme } from '@/utils/theme-context';

export default function Navbar() {
  const { theme, toggleTheme, ready } = useTheme();

  return (
    <header className='sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
        <a href='#home' className='inline-flex items-center gap-3'>
          <Image
            src='/bibek.png'
            alt='Bibek Sunar logo'
            width={38}
            height={38}
            className='h-10 w-10 rounded-full border border-slate-200 object-cover dark:border-slate-700'
          />
          <span className='font-heading text-xl font-bold text-slate-900 dark:text-white'>Bibek Sunar</span>
        </a>

        <div className='hidden items-center gap-6 md:flex'>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className='text-sm font-medium text-slate-700 transition hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-400'>
              {link.label}
            </a>
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.96 }}
          type='button'
          onClick={toggleTheme}
          className='rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-100 dark:hover:border-brand-400 dark:hover:text-brand-400'
          aria-label='Toggle theme'
        >
          {ready ? (theme === 'dark' ? 'Light' : 'Dark') : 'Theme'}
        </motion.button>
      </nav>
    </header>
  );
}
