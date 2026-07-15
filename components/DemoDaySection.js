import Image from 'next/image';
import { motion } from 'framer-motion';

const gallery = [
  {
    src: '/demo-day/bibek-winner-trophy.jpeg',
    alt: 'Bibek Sunar holding the Demo Day 7.0 winner trophy for Himurja Skincare',
    label: 'Winner moment'
  },
  {
    src: '/demo-day/himurja-winner-cheque.jpeg',
    alt: 'Himurja Skincare winner cheque and trophy at Demo Day 7.0',
    label: 'Himurja recognized'
  },
  {
    src: '/demo-day/stage-recognition.jpeg',
    alt: 'Himurja Skincare receiving Demo Day 7.0 recognition on stage',
    label: 'Stage recognition'
  },
  {
    src: '/demo-day/demo-day-group-photo.jpeg',
    alt: 'Participants and winners group photo from Demo Day 7.0 at Boston International College',
    label: 'Program community'
  }
];

const team = [
  { name: 'Bibek Sunar', role: 'Founder' },
  { name: 'Mahendra Parajuli', role: 'COO' },
  { name: 'Sachin Silwal', role: 'R&D Head' }
];

export default function DemoDaySection() {
  return (
    <section id='demo-day' className='mx-auto max-w-6xl px-6 py-20'>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='section-kicker'
      >
        Startup Win
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='section-title'
      >
        Himurja Skincare at Demo Day 7.0
      </motion.h2>
      <p className='section-subtitle'>
        A milestone from Boston International College where our startup team presented Himurja Skincare and won the Demo Day 7.0 startup competition.
      </p>

      <div className='mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]'>
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900'
        >
          <div className='relative aspect-[4/5] min-h-[420px] overflow-hidden sm:aspect-[16/12] lg:aspect-auto lg:h-full'>
            <Image
              src='/demo-day/winner-trophy-with-bibek.jpeg'
              alt='Bibek Sunar celebrating Himurja Skincare winning Demo Day 7.0 at Boston International College'
              fill
              sizes='(min-width: 1024px) 52vw, 100vw'
              className='object-cover'
              priority
            />
            <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent p-6'>
              <p className='text-sm font-semibold uppercase tracking-[0.25em] text-brand-200'>Winner, Demo Day 7.0</p>
              <h3 className='mt-2 text-2xl font-bold text-white'>Himurja Skincare</h3>
            </div>
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className='space-y-6'
        >
          <div className='glass-card'>
            <p className='eyebrow mb-3'>About the program</p>
            <p className='text-base leading-relaxed text-slate-700 dark:text-slate-200'>
              Demo Day 7.0 at Boston International College brought startup ideas into a competitive pitch environment where teams shared their business models, market thinking, and execution plans. Himurja Skincare stood out as a promising venture and earned the winner title for the program.
            </p>
          </div>

          <div className='grid gap-4 sm:grid-cols-3'>
            {team.map((member) => (
              <div key={member.name} className='rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-lg shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/70'>
                <p className='text-sm font-semibold text-slate-900 dark:text-white'>{member.name}</p>
                <p className='mt-1 text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-300'>{member.role}</p>
              </div>
            ))}
          </div>

          <div className='grid grid-cols-2 gap-4'>
            {gallery.map((image) => (
              <figure key={image.src} className='group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900'>
                <div className='relative aspect-[4/3] overflow-hidden'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes='(min-width: 1024px) 24vw, 50vw'
                    className='object-cover transition duration-500 group-hover:scale-105'
                  />
                </div>
                <figcaption className='px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300'>
                  {image.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
