import { motion } from 'framer-motion';
import { skills } from '@/utils/data';

export default function SkillsSection() {
  return (
    <section id='skills' className='mx-auto max-w-6xl px-6 py-20'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='font-heading text-3xl font-bold text-slate-900 dark:text-white'
      >
        Skills & Interests
      </motion.h2>

      <div className='mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {skills.map((skill, index) => (
          <motion.article
            key={skill.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className='rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 transition dark:border-slate-800 dark:bg-slate-900'
          >
            <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>{skill.title}</h3>
            <p className='mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300'>{skill.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
