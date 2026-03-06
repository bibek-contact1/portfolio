import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id='home' className='relative overflow-hidden px-6 pb-24 pt-20'>
      <div className='hero-gradient pointer-events-none absolute inset-0' />
      <div className='relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2'>
        <div>
          <motion.p
            initial={{ y: 14, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className='mb-4 inline-flex rounded-full border border-brand-300 bg-brand-50 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-brand-700 dark:border-brand-900 dark:bg-brand-900/40 dark:text-brand-300'
          >
            Marketing Professional | Aspiring Entrepreneur
          </motion.p>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='font-heading max-w-4xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white'
          >
            Bibek Sunar
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='mt-6 max-w-3xl text-lg leading-relaxed text-slate-700 dark:text-slate-200'
          >
            I am Bibek Sunar, a marketing graduate from Nepal with a strong passion for marketing, sales, and entrepreneurship. I aim to build impactful businesses and create meaningful value through innovative ideas.
          </motion.p>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className='mt-10 flex flex-wrap gap-4'
          >
            <a href='#contact' className='rounded-full bg-brand-600 px-7 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-700'>
              Contact Me
            </a>
            <a href='#about' className='rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-brand-500 dark:hover:text-brand-400'>
              About Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className='mx-auto hidden w-full max-w-md lg:block'
        >
          <div className='overflow-hidden rounded-3xl border border-white/30 bg-white/40 p-2 shadow-2xl backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/50'>
            <Image
              src='/bibek.png'
              alt='Bibek Sunar'
              width={700}
              height={850}
              priority
              className='h-auto w-full rounded-2xl object-cover'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
