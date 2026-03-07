import { motion } from 'framer-motion';

const aboutCards = [
  {
    title: 'Professional Bio',
    text: 'I am a young marketing professional from Bharatpur-6, Nepal, focused on practical growth strategies, relationship-driven sales, and long-term business value creation.'
  },
  {
    title: 'Education',
    text: 'Bachelor\'s Degree in Business Administration (Marketing), building strong foundations in market research, consumer behavior, branding, and strategic planning.'
  },
  {
    title: 'Core Interests',
    text: 'Marketing, sales, and entrepreneurship with an emphasis on solving real business problems and building trusted brands.'
  },
  {
    title: 'Career Goals',
    text: 'My goal is to lead and launch innovative ventures that generate meaningful impact, sustainable growth, and opportunities for others.'
  }
];

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
        {aboutCards.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * index }}
            whileHover={{ y: -8, scale: 1.01 }}
            className='group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 transition duration-300 hover:border-brand-300 hover:shadow-2xl hover:shadow-brand-500/15 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700'
          >
            <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-100/0 via-brand-100/0 to-brand-100/60 opacity-0 transition group-hover:opacity-100 dark:from-brand-900/0 dark:via-brand-900/0 dark:to-brand-900/30' />
            <div className='relative'>
              <div className='mb-4 h-1.5 w-14 rounded-full bg-brand-500/70 transition-all group-hover:w-24 group-hover:bg-brand-500' />
              <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>{item.title}</h3>
              <p className='mt-3 text-slate-700 dark:text-slate-300'>{item.text}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
