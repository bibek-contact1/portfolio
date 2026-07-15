import SeoHead from '@/components/SeoHead';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import DemoDaySection from '@/components/DemoDaySection';
import VisionSection from '@/components/VisionSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsappButton from '@/components/WhatsappButton';
import { PERSON_IMAGE_ALT, PERSON_IMAGE_PATH, SITE_URL } from '@/utils/seo';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Bibek Sunar',
  givenName: 'Bibek',
  familyName: 'Sunar',
  alternateName: ['Bibek', 'bibeksunar', 'Bibek Sunar Nepal'],
  identifier: 'Bibek Sunar Official Portfolio',
  mainEntityOfPage: SITE_URL,
  url: SITE_URL,
  jobTitle: 'Marketing Professional, Sales Enthusiast, and Aspiring Entrepreneur',
  description:
    'Bibek Sunar is a marketing graduate from Nepal focused on marketing strategy, sales communication, digital marketing, entrepreneurship, and Himurja Skincare.',
  knowsAbout: [
    'Marketing Strategy',
    'Sales Communication',
    'Digital Marketing',
    'Business Development',
    'Entrepreneurship',
    'Himurja Skincare',
    'Startup Pitching',
    'Leadership'
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Bachelor of Business Administration (Marketing)'
  },
  email: 'mailto:bibek.contact1@gmail.com',
  telephone: '+9779845900042',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bharatpur-6',
    addressCountry: 'NP'
  },
  sameAs: [
    'https://facebook.com/bibek.contact1',
    'https://www.instagram.com/bibek.contact1'
  ],
  image: {
    '@type': 'ImageObject',
    url: SITE_URL + PERSON_IMAGE_PATH,
    caption: PERSON_IMAGE_ALT,
    contentUrl: SITE_URL + PERSON_IMAGE_PATH,
    thumbnailUrl: SITE_URL + PERSON_IMAGE_PATH,
    name: 'Bibek Sunar official portrait',
    creditText: 'Bibek Sunar',
    representativeOfPage: true
  },
  subjectOf: [
    SITE_URL + '/about-bibek-sunar',
    SITE_URL + '/projects',
    SITE_URL + '/official-social-profiles'
  ]
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Bibek Sunar Portfolio',
  url: SITE_URL,
  alternateName: ['Bibek Sunar Official Website', 'Bibek', 'bibeksunar'],
  publisher: {
    '@type': 'Person',
    name: 'Bibek Sunar'
  }
};

const imageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  url: SITE_URL + PERSON_IMAGE_PATH,
  contentUrl: SITE_URL + PERSON_IMAGE_PATH,
  caption: PERSON_IMAGE_ALT,
  name: 'Bibek Sunar official portrait',
  thumbnailUrl: SITE_URL + PERSON_IMAGE_PATH,
  author: {
    '@type': 'Person',
    name: 'Bibek Sunar'
  },
  representativeOfPage: true
};

export default function HomePage() {
  return (
    <>
      <SeoHead
        title='Bibek Sunar | Official Website of Bibek, Marketing Professional in Nepal'
        description='Official website of Bibek Sunar from Bharatpur, Nepal. Bibek is a marketing graduate focused on marketing, sales, digital marketing, business development, and entrepreneurship.'
        path='/'
        keywords={[
          'Bibek',
          'Bibek website',
          'Bibek image',
          'BIBEK SUNAR',
          'Bibek Sunar marketing',
          'Bibek Sunar digital marketing',
          'Bibek Sunar sales',
          'Himurja Skincare',
          'Demo Day 7.0 Boston International College',
          'Bibek Sunar startup'
        ]}
        schema={[personSchema, websiteSchema, imageSchema]}
        image={PERSON_IMAGE_PATH}
        imageAlt={PERSON_IMAGE_ALT}
      />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <DemoDaySection />
        <VisionSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}






