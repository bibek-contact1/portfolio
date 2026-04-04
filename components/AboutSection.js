import { motion } from 'framer-motion';

const aboutCards = [
  {
    title: 'Professional Bio',
    text: 'I am a young marketing professional from Bharatpur-6, Nepal, focused on practical growth strategies, relationship-driven sales, and long-term business value creation.'
  },
  {
    title: 'Education',
    text: 'Bachelor of Business Administration (Marketing), Balkumari Campus (2024). +2 Higher Secondary Education, Gurukul Secondary School (2020). SLC (10), Nawayug English School (2018).'
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
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='section-kicker'
      >
        About
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='section-title'
      >
        About Me
      </motion.h2>
      <p className='section-subtitle'>A quick snapshot of my background, education, and career focus.</p>

      <div className='mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]'>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='section-frame soft-grid space-y-6'
        >
          <p className='text-lg leading-relaxed text-slate-700 dark:text-slate-200'>
            I thrive at the intersection of marketing strategy and entrepreneurial execution—crafting narratives that convert, testing lean experiments, and building trust-driven relationships with customers and partners.
          </p>
          <div className='flex flex-wrap gap-3'>
            <span className='subtle-pill'>BBA (Marketing)</span>
            <span className='subtle-pill'>Audience research first</span>
            <span className='subtle-pill'>Sales communication</span>
            <span className='subtle-pill'>Brand building</span>
          </div>
          <div className='grid gap-4 sm:grid-cols-2'>
            <div className='glass-card'>
              <p className='eyebrow mb-2'>Current focus</p>
              <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>Revenue-minded marketing</h3>
              <p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>Designing campaigns that align message, channel, and measurable outcomes.</p>
            </div>
            <div className='glass-card'>
              <p className='eyebrow mb-2'>Mindset</p>
              <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>Experiment -&gt; Learn -&gt; Ship</h3>
              <p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>Rapid tests, meaningful insights, and decisive follow-through to keep momentum.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className='grid gap-6 md:grid-cols-2'
        >
          {aboutCards.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * index }}
              whileHover={{ y: -8, scale: 1.01 }}
              className='glass-card group h-full transition duration-300 hover:-translate-y-1'
            >
              <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>{item.title}</h3>
              <p className='mt-3 text-slate-700 dark:text-slate-300'>{item.text}</p>
              <div className='mt-4 h-1 w-12 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-20 group-hover:bg-brand-500 dark:bg-slate-700' />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

