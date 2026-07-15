import Image from 'next/image';
import { motion } from 'framer-motion';
import { achievements, projects } from '@/utils/data';

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

const demoDayVideoUrl = 'https://www.facebook.com/reel/848954458029429/?rdid=WYqAyPw54ATxTvPR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1cLeGofr5f%2F';
const currentProject = projects[0];
const demoDayAchievement = achievements[0];

export default function ProjectsAchievementsSection() {
  return (
    <section id='projects-achievements' className='mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20'>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='section-kicker'
      >
        Projects & Achievements
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='section-title'
      >
        Himurja Skincare & Demo Day 7.0
      </motion.h2>
      <p className='section-subtitle max-w-3xl'>
        My current startup project and its first major achievement, kept together so the venture story is easy to follow.
      </p>

      <div className='mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-2xl shadow-slate-900/10 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 sm:mt-10'>
        <div className='grid gap-0 lg:grid-cols-[0.92fr_1.08fr]'>
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='relative overflow-hidden bg-slate-100 dark:bg-slate-950'
          >
            <div className='relative aspect-[4/5] min-h-[360px] overflow-hidden sm:aspect-[16/12] lg:aspect-auto lg:h-full lg:min-h-[720px]'>
              <Image
                src='/demo-day/winner-trophy-with-bibek.jpeg'
                alt='Bibek Sunar celebrating Himurja Skincare winning Demo Day 7.0 at Boston International College'
                fill
                sizes='(min-width: 1024px) 52vw, 100vw'
                className='object-cover object-center'
                priority
              />
              <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent p-6'>
                <p className='text-xs font-semibold uppercase tracking-[0.25em] text-brand-200 sm:text-sm'>Project + Achievement</p>
                <h3 className='mt-2 text-2xl font-bold text-white'>Himurja Skincare</h3>
              </div>
            </div>
          </motion.article>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className='space-y-6 p-5 sm:p-7 lg:p-8'
          >
            <div className='rounded-2xl border border-[#cce5dc] bg-[#effaf5] p-5 dark:border-brand-900/70 dark:bg-brand-900/20 sm:p-6'>
              <p className='eyebrow mb-3'>Current project</p>
              <h3 className='text-xl font-semibold text-slate-900 dark:text-white'>{currentProject.title}</h3>
              <p className='mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base'>{currentProject.summary}</p>
              {currentProject.bullets && (
                <ul className='mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300'>
                  {currentProject.bullets.map((bullet) => (
                    <li key={bullet} className='flex gap-2'>
                      <span className='mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500/80' />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className='rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950/40 sm:p-6'>
              <p className='eyebrow mb-3'>Achievement</p>
              <h3 className='text-xl font-semibold text-slate-900 dark:text-white'>{demoDayAchievement.title}</h3>
              <p className='mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base'>
                Demo Day 7.0 at Boston International College brought startup ideas into a competitive pitch environment where teams shared their business models, market thinking, and execution plans. Himurja Skincare stood out as a promising venture and earned the winner title for the program.
              </p>
              <a
                href={demoDayVideoUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#0f766e] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#0f766e]/20 transition hover:bg-[#115e59] sm:w-auto'
              >
                Watch Demo Day 7.0 Video
              </a>
            </div>

            <div className='grid gap-3 sm:grid-cols-3'>
              {team.map((member) => (
                <div key={member.name} className='rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-lg shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/80'>
                  <p className='text-sm font-semibold text-slate-900 dark:text-white'>{member.name}</p>
                  <p className='mt-1 text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-300'>{member.role}</p>
                </div>
              ))}
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              {gallery.map((image) => (
                <figure key={image.src} className='group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900'>
                  <div className='relative aspect-[16/10] overflow-hidden'>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes='(min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw'
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
      </div>
    </section>
  );
}
