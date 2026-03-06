import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '@/utils/data';

export default function ProjectsSection() {
  return (
    <section id='projects' className='mx-auto max-w-6xl px-6 py-20'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='font-heading text-3xl font-bold text-slate-900 dark:text-white'
      >
        Projects & Experience
      </motion.h2>

      <div className='mt-8 grid gap-6 md:grid-cols-3'>
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900'
          >
            <Image src={project.image} alt={project.title} width={640} height={420} className='h-44 w-full object-cover' />
            <div className='p-5'>
              <p className='text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400'>{project.type}</p>
              <h3 className='mt-2 text-lg font-semibold text-slate-900 dark:text-white'>{project.title}</h3>
              <p className='mt-3 text-sm text-slate-600 dark:text-slate-300'>{project.summary}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
