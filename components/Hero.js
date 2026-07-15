import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id='home' className='relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16 lg:pt-20'>
      <div className='hero-gradient pointer-events-none absolute inset-0' />
      <div className='relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className='order-1 mx-auto w-full max-w-[19rem] sm:max-w-sm lg:order-2 lg:max-w-md'
        >
          <div className='relative overflow-hidden rounded-3xl border border-white/60 bg-white/75 p-2 shadow-2xl shadow-slate-900/15 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/75'>
            <Image
              src='/bibek-sunar-portrait.jpg'
              alt='Official portrait of Bibek Sunar, marketing professional from Nepal'
              width={1200}
              height={1800}
              priority
              className='h-auto w-full rounded-[1.35rem] object-contain'
            />
            <div className='absolute inset-x-4 bottom-4 rounded-2xl bg-slate-950/72 px-4 py-3 text-white shadow-xl backdrop-blur'>
              <p className='text-xs font-semibold uppercase tracking-[0.22em] text-brand-200'>Bibek Sunar</p>
              <p className='mt-1 text-sm font-medium text-white/90'>Marketing • Sales • Entrepreneurship</p>
            </div>
          </div>
        </motion.div>

        <div className='section-frame soft-grid order-2 p-6 sm:p-8 lg:order-1 lg:p-10'>
          <motion.p
            initial={{ y: 14, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className='eyebrow mb-4 inline-flex max-w-full items-center gap-2 rounded-full bg-white/70 px-3 py-1 shadow-sm ring-1 ring-brand-500/20 backdrop-blur dark:bg-slate-900/70'
          >
            <span className='h-2 w-2 rounded-full bg-brand-500 shadow-[0_0_0_6px_rgba(34,197,94,0.18)]' />
            <span className='leading-relaxed'>Marketing Professional • Entrepreneur in progress</span>
          </motion.p>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='font-heading max-w-4xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white'
          >
            Bibek <span className='text-gradient'>Sunar</span>
          </motion.h1>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className='mt-4 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300'
          >
            <span className='subtle-pill'>
              Based in Bharatpur, Nepal
            </span>
            <span className='subtle-pill'>
              Marketing • Sales • Digital Marketing
            </span>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-200'
          >
            I am Bibek Sunar, a marketing graduate from Nepal with a strong passion for marketing, sales, and entrepreneurship. I aim to build impactful businesses and create meaningful value through innovative ideas.
          </motion.p>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className='mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4'
          >
            <a href='#contact' className='rounded-full bg-brand-600 px-7 py-3 text-center text-sm font-semibold text-white shadow-glow transition hover:bg-brand-700'>
              Contact Me
            </a>
            <a href='#achievements' className='rounded-full border border-slate-300 bg-white px-7 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-brand-500 dark:hover:text-brand-400'>
              View Achievements
            </a>
            <a href='#about' className='rounded-full border border-slate-300 bg-white px-7 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-brand-500 dark:hover:text-brand-400'>
              About Me
            </a>
          </motion.div>

          <div className='mt-8 grid gap-4 sm:grid-cols-2'>
            <div className='glass-card flex items-start gap-3 p-5'>
              <div className='h-10 w-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-lg shadow-brand-500/30 flex items-center justify-center font-semibold'>
                M
              </div>
              <div>
                <p className='text-sm font-semibold text-slate-900 dark:text-white'>Marketing that converts</p>
                <p className='mt-1 text-sm text-slate-600 dark:text-slate-300'>Obsessed with data-backed storytelling, funnels, and repeatable growth.</p>
              </div>
            </div>
            <div className='glass-card flex items-start gap-3 p-5'>
              <div className='h-10 w-10 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-white shadow-lg shadow-sky-500/30 flex items-center justify-center font-semibold'>
                E
              </div>
              <div>
                <p className='text-sm font-semibold text-slate-900 dark:text-white'>Entrepreneurial drive</p>
                <p className='mt-1 text-sm text-slate-600 dark:text-slate-300'>Building and testing ideas that create value and real customer impact.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
