import SeoHead from '@/components/SeoHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/utils/data';

const projectsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Bibek Sunar Projects',
  url: 'https://bibeksunar.com.np/projects',
  description: 'Experience highlights for Bibek Sunar across Himurja Skincare, banking, marketing, research, and venture testing.'
};

export default function ProjectsPage() {
  return (
    <>
      <SeoHead
        title='Experience | Bibek Sunar'
        description='Experience of Bibek Sunar across Himurja Skincare, banking operations, marketing assistance, field research, and venture experimentation.'
        path='/projects'
        keywords={['Bibek Sunar experience', 'Bibek Sunar projects', 'Himurja Skincare', 'Demo Day 7.0', 'marketing internship Nepal']}
        schema={projectsSchema}
      />
      <Navbar />
      <main className='mx-auto max-w-5xl px-6 py-16 space-y-8'>
        <div>
          <p className='section-kicker'>Experience</p>
          <h1 className='font-heading text-4xl font-bold text-slate-900 dark:text-white'>Projects & Experience</h1>
          <p className='mt-3 text-lg leading-relaxed text-slate-700 dark:text-slate-200'>
            A concise view of my startup work, internships, roles, and venture experiments. Click any card to see responsibilities.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2'>
          {projects.map((item) => (
            <details key={item.title} className='glass-card group'>
              <summary className='flex cursor-pointer list-none items-start justify-between gap-3 text-left'>
                <div>
                  <p className='text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400'>{item.type}</p>
                  <h2 className='mt-1 text-lg font-semibold text-slate-900 dark:text-white'>{item.title}</h2>
                  <p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>{item.summary}</p>
                </div>
                <span className='mt-1 text-brand-600 transition group-open:rotate-90 dark:text-brand-400'>▶</span>
              </summary>
              {item.bullets && (
                <ul className='mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300'>
                  {item.bullets.map((b, idx) => (
                    <li key={idx} className='flex gap-2'>
                      <span className='mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500/80' />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </details>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
