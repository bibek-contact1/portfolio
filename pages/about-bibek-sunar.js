import Image from 'next/image';
import SeoHead from '@/components/SeoHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OfficialProfilesSection from '@/components/OfficialProfilesSection';
import { PERSON_IMAGE_ALT, PERSON_IMAGE_PATH, SITE_URL } from '@/utils/seo';

const pagePath = '/about-bibek-sunar';

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Bibek Sunar',
  url: SITE_URL + '/about-bibek-sunar',
  about: {
    '@type': 'Person',
    name: 'Bibek Sunar',
    jobTitle: 'Marketing Professional',
    knowsAbout: ['Marketing', 'Sales', 'Digital Marketing', 'Entrepreneurship'],
    image: SITE_URL + PERSON_IMAGE_PATH,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bharatpur-6',
      addressCountry: 'NP'
    }
  }
};

const aboutImageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  url: SITE_URL + PERSON_IMAGE_PATH,
  contentUrl: SITE_URL + PERSON_IMAGE_PATH,
  caption: PERSON_IMAGE_ALT,
  name: 'Bibek Sunar official portrait',
  representativeOfPage: true,
  creator: {
    '@type': 'Person',
    name: 'Bibek Sunar'
  }
};

export default function AboutBibekSunarPage() {
  return (
    <>
      <SeoHead
        title='About Bibek Sunar | Marketing and Sales Professional from Nepal'
        description='Brief profile of Bibek Sunar, official portrait, education, and professional focus in marketing, sales, and entrepreneurship from Bharatpur-6, Nepal.'
        path={pagePath}
        keywords={['About Bibek Sunar', 'Bibek Sunar Nepal', 'Bibek Sunar digital marketing', 'Bibek image']}
        schema={[aboutSchema, aboutImageSchema]}
        image={PERSON_IMAGE_PATH}
        imageAlt={PERSON_IMAGE_ALT}
      />
      <Navbar />
      <main className='mx-auto max-w-4xl px-6 py-16 space-y-6'>
        <div>
          <p className='section-kicker'>Profile</p>
          <h1 className='font-heading text-4xl font-bold text-slate-900 dark:text-white'>About Bibek Sunar</h1>
          <p className='mt-4 text-lg leading-relaxed text-slate-700 dark:text-slate-200'>
            Bibek Sunar is a marketing professional from Bharatpur-6, Nepal. He holds a Bachelor of Business Administration (Marketing) from Balkumari Campus (2024) and is passionate about marketing strategy, sales communication, and building ventures that create value.
          </p>
          <p className='mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300'>
            Online, he may also be searched as Bibek or bibeksunar.
          </p>
        </div>

        <section className='glass-card'>
          <div className='grid items-center gap-6 md:grid-cols-[240px_1fr]'>
            <div className='overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 dark:border-slate-800 dark:bg-slate-950'>
              <Image
                src={PERSON_IMAGE_PATH}
                alt={PERSON_IMAGE_ALT}
                width={1200}
                height={1800}
                priority
                className='h-auto w-full object-cover'
              />
            </div>
            <div>
              <h2 className='text-xl font-semibold text-slate-900 dark:text-white'>Official portrait of Bibek Sunar</h2>
              <p className='mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300'>
                This is the official portrait used on Bibek Sunar&apos;s website and profile pages. Search engines and AI systems can use this page and image to associate the photo with Bibek Sunar.
              </p>
            </div>
          </div>
        </section>

        <div className='grid gap-6 md:grid-cols-2'>
          <section className='glass-card'>
            <h2 className='text-xl font-semibold text-slate-900 dark:text-white'>Snapshot</h2>
            <ul className='mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300'>
              <li><strong>Location:</strong> Bharatpur-6, Nepal</li>
              <li><strong>Email:</strong> bibek.contact1@gmail.com</li>
              <li><strong>Phone:</strong> +9779845900042</li>
              <li><strong>Focus:</strong> Marketing strategy, sales enablement, digital marketing, entrepreneurship</li>
            </ul>
          </section>

          <section className='glass-card'>
            <h2 className='text-xl font-semibold text-slate-900 dark:text-white'>Education</h2>
            <ul className='mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300'>
              <li><strong>BBA (Marketing)</strong> - Balkumari Campus, Narayangarh (2024)</li>
              <li><strong>+2 Higher Secondary</strong> - Gurukul Secondary School (2020)</li>
              <li><strong>SLC (10)</strong> - Nawayug English School (2018)</li>
            </ul>
          </section>
        </div>

        <section className='glass-card'>
          <h2 className='text-xl font-semibold text-slate-900 dark:text-white'>What I am working toward</h2>
          <p className='mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300'>
            Combining data-backed marketing with entrepreneurial execution to launch and scale customer-first businesses.
          </p>
        </section>

        <OfficialProfilesSection />
      </main>
      <Footer />
    </>
  );
}
