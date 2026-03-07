import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const url = 'https://bibeksunar.com.np/projects';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Bibek Sunar Projects | Marketing and Business Work</title>
        <meta name='description' content='Explore projects and experience by Bibek Sunar in marketing campaigns, sales strategy, and business development.' />
        <meta name='keywords' content='Bibek Sunar projects, marketing projects Nepal, Bibek Sunar portfolio' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href={url} />
      </Head>
      <Navbar />
      <main className='mx-auto max-w-4xl px-6 py-16'>
        <h1 className='font-heading text-4xl font-bold text-slate-900 dark:text-white'>Bibek Sunar Projects</h1>
        <p className='mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-200'>
          This page highlights project work by Bibek Sunar across marketing campaigns, sales initiatives, internship outcomes, and entrepreneurial business ideas.
        </p>
        <ul className='mt-6 list-disc space-y-3 pl-6 text-slate-700 dark:text-slate-200'>
          <li>Marketing campaign planning and execution</li>
          <li>Sales communication and customer conversion strategy</li>
          <li>Business development and growth-focused initiatives</li>
          <li>Early-stage entrepreneurship concepts and ventures</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
