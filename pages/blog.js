import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const url = 'https://bibeksunar.com.np/blog';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog by Bibek Sunar | Marketing and Entrepreneurship Insights</title>
        <meta name='description' content='Read insights by Bibek Sunar on marketing, sales communication, entrepreneurship, and business development.' />
        <meta name='keywords' content='Bibek Sunar blog, marketing insights Nepal, entrepreneurship blog Bibek Sunar' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href={url} />
      </Head>
      <Navbar />
      <main className='mx-auto max-w-4xl px-6 py-16'>
        <h1 className='font-heading text-4xl font-bold text-slate-900 dark:text-white'>Blog by Bibek Sunar</h1>
        <p className='mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-200'>
          This blog will publish practical insights from Bibek Sunar on marketing strategy, sales communication, business development, and entrepreneurship in Nepal.
        </p>
        <div className='mt-8 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-xl font-semibold text-slate-900 dark:text-white'>First article coming soon</h2>
          <p className='mt-3 text-slate-700 dark:text-slate-200'>
            Topic: Building a personal brand as a young marketing professional in Nepal.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
