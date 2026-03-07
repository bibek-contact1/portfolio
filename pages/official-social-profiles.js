import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const url = 'https://bibeksunar.com.np/official-social-profiles';

const profileSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name: 'Bibek Sunar Official Social Profiles',
  url,
  mainEntity: {
    '@type': 'Person',
    name: 'Bibek Sunar',
    sameAs: [
      'https://facebook.com/bibek.contact1',
      'https://www.instagram.com/bibek.contact1'
    ]
  }
};

export default function OfficialSocialProfilesPage() {
  return (
    <>
      <Head>
        <title>Official Social Profiles | Bibek Sunar</title>
        <meta name='description' content='Official social media profiles of Bibek Sunar. Facebook: facebook.com/bibek.contact1 and Instagram: instagram.com/bibek.contact1.' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href={url} />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} />
      </Head>
      <Navbar />
      <main className='mx-auto max-w-4xl px-6 py-16'>
        <h1 className='font-heading text-4xl font-bold text-slate-900 dark:text-white'>Bibek Sunar Official Social Profiles</h1>
        <p className='mt-5 text-slate-700 dark:text-slate-200'>Use only these official profiles for Bibek Sunar.</p>
        <ul className='mt-6 list-disc space-y-3 pl-6 text-slate-700 dark:text-slate-200'>
          <li>
            Official Facebook: <a className='text-brand-600 underline' href='https://facebook.com/bibek.contact1' rel='me'>https://facebook.com/bibek.contact1</a>
          </li>
          <li>
            Official Instagram: <a className='text-brand-600 underline' href='https://www.instagram.com/bibek.contact1' rel='me'>https://www.instagram.com/bibek.contact1</a>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
