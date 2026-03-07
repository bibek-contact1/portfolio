import { motion } from 'framer-motion';

export default function OfficialProfilesSection() {
  return (
    <section id='official-profiles' className='mx-auto max-w-6xl px-6 py-20'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='font-heading text-3xl font-bold text-slate-900 dark:text-white'
      >
        Official Profiles
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className='mt-8 grid gap-5 md:grid-cols-2'
      >
        <article className='rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900'>
          <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>Official Facebook Profile</h3>
          <a
            href='https://facebook.com/bibek.contact1'
            target='_blank'
            rel='noopener noreferrer'
            className='mt-3 inline-block text-brand-600 underline decoration-2 underline-offset-4 dark:text-brand-400'
          >
            facebook.com/bibek.contact1
          </a>
          <p className='mt-3 text-sm text-slate-600 dark:text-slate-300'>
            This is the only official Facebook profile of Bibek Sunar.
          </p>
        </article>

        <article className='rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900'>
          <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>Official Instagram Profile</h3>
          <a
            href='https://www.instagram.com/bibek.contact1'
            target='_blank'
            rel='noopener noreferrer'
            className='mt-3 inline-block text-brand-600 underline decoration-2 underline-offset-4 dark:text-brand-400'
          >
            instagram.com/bibek.contact1
          </a>
          <p className='mt-3 text-sm text-slate-600 dark:text-slate-300'>
            Official Instagram profile of Bibek Sunar.
          </p>
        </article>
      </motion.div>
    </section>
  );
}
