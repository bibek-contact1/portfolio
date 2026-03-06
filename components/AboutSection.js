import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id='about' className='mx-auto max-w-6xl px-6 py-20'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='font-heading text-3xl font-bold text-slate-900 dark:text-white'
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className='mt-8 grid gap-6 md:grid-cols-2'
      >
        <article className='rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900'>
          <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>Professional Bio</h3>
          <p className='mt-3 text-slate-700 dark:text-slate-300'>
            I am a young marketing professional from Bharatpur-6, Nepal, focused on practical growth strategies, relationship-driven sales, and long-term business value creation.
          </p>
        </article>

        <article className='rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900'>
          <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>Education</h3>
          <p className='mt-3 text-slate-700 dark:text-slate-300'>
            Bachelor&rsquo;s Degree in Business Administration (Marketing), building strong foundations in market research, consumer behavior, branding, and strategic planning.
          </p>
        </article>

        <article className='rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900'>
          <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>Core Interests</h3>
          <p className='mt-3 text-slate-700 dark:text-slate-300'>
            Marketing, sales, and entrepreneurship with an emphasis on solving real business problems and building trusted brands.
          </p>
        </article>

        <article className='rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900'>
          <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>Career Goals</h3>
          <p className='mt-3 text-slate-700 dark:text-slate-300'>
            My goal is to lead and launch innovative ventures that generate meaningful impact, sustainable growth, and opportunities for others.
          </p>
        </article>
      </motion.div>
    </section>
  );
}
