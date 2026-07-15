import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { experiences } from '@/utils/data';

export default function ExperienceSection() {
  const [openId, setOpenId] = useState(null);

  const toggle = (title) => {
    setOpenId((prev) => (prev === title ? null : title));
  };

  return (
    <section id='experience' className='mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20'>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='section-kicker'
      >
        Experience
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='section-title'
      >
        Experience
      </motion.h2>
      <p className='section-subtitle'>Professional roles, internships, and field work that shaped my marketing, sales, and operations foundation.</p>

      <div className='section-frame soft-grid mt-8'>
        <div className='grid gap-6 md:grid-cols-3'>
          {experiences.map((project, index) => (
            <motion.article
              key={project.title}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -8 }}
              className='group overflow-hidden rounded-lg border border-[#dcc68d] bg-white shadow-lg shadow-[#2b1b07]/10 transition duration-300 hover:-translate-y-1 hover:border-[#b98423] hover:shadow-2xl hover:shadow-[#2b1b07]/15 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700'
            >
              <div className='relative overflow-hidden'>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={640}
                  height={420}
                  className='h-44 w-full object-cover transition duration-500 group-hover:scale-110'
                />
                <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/0 to-transparent opacity-90' />
              </div>
              <div className='p-5'>
                <p className='text-xs font-bold uppercase tracking-wide text-[#b98423] dark:text-brand-400'>{project.type}</p>
                <h3 className='mt-2 text-lg font-semibold text-slate-900 transition-colors group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-400'>
                  {project.title}
                </h3>
                <p className='mt-3 text-sm text-slate-600 dark:text-slate-300'>{project.summary}</p>
                <AnimatePresence>
                  {openId === project.title && project.bullets && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className='mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300'
                    >
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx} className='flex gap-2'>
                          <span className='mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500/80' />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
                <button
                  type='button'
                  onClick={() => toggle(project.title)}
                  className='mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#114e61] transition group-hover:gap-3 dark:text-brand-400'
                >
                  {openId === project.title ? 'Hide details' : 'View details'}
                  <svg viewBox='0 0 24 24' className='h-4 w-4' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'>
                    <path d='M5 12h14M13 5l7 7-7 7' />
                  </svg>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
