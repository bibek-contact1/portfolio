import { motion } from 'framer-motion';
import { skills } from '@/utils/data';

export default function SkillsSection() {
  return (
    <section id='skills' className='mx-auto max-w-6xl px-6 py-20'>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='section-kicker'
      >
        Expertise
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='section-title'
      >
        Skills & Interests
      </motion.h2>
      <p className='section-subtitle'>The areas where I focus my energy to create marketing and sales impact.</p>

      <div className='section-frame soft-grid mt-8'>
        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {skills.map((skill, index) => (
            <motion.article
              key={skill.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.015 }}
              className='glass-card group h-full transition duration-300 hover:-translate-y-1'
            >
              <div className='relative'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f766e] text-lg font-semibold text-white shadow-lg shadow-[#0f766e]/20'>
                    {skill.title.charAt(0)}
                  </div>
                  <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>{skill.title}</h3>
                </div>
                <p className='mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300'>{skill.description}</p>
                <div className='mt-5 h-1.5 w-10 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-20 group-hover:bg-[#0f766e] dark:bg-slate-700' />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

