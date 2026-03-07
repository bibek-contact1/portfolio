import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OfficialProfilesSection from '@/components/OfficialProfilesSection';

const url = 'https://bibeksunar.com.np/about-bibek-sunar';

export default function AboutBibekSunarPage() {
  return (
    <>
      <Head>
        <title>About Bibek Sunar | Marketing Professional in Nepal</title>
        <meta name='description' content='Learn about Bibek Sunar, a marketing graduate from Bharatpur-6, Nepal, focused on sales, marketing strategy, and entrepreneurship.' />
        <meta name='keywords' content='About Bibek Sunar, Bibek Sunar Nepal, marketing professional Bibek Sunar' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href={url} />
      </Head>
      <Navbar />
      <main className='mx-auto max-w-4xl px-6 py-16'>
        <h1 className='font-heading text-4xl font-bold text-slate-900 dark:text-white'>About Bibek Sunar</h1>
        <p className='mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-200'>
          Bibek Sunar is a young marketing professional from Bharatpur-6, Nepal. He completed his Bachelor&apos;s Degree in Business Administration (Marketing) and is building a career in marketing strategy, sales communication, and business growth.
        </p>
        <p className='mt-4 text-lg leading-relaxed text-slate-700 dark:text-slate-200'>
          Bibek Sunar is also an aspiring entrepreneur focused on creating impactful business ideas and long-term value through innovation and leadership.
        </p>
              <OfficialProfilesSection />
      </main>
      <Footer />
    </>
  );
}

