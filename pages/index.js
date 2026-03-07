import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import VisionSection from '@/components/VisionSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsappButton from '@/components/WhatsappButton';

const siteUrl = 'https://bibeksunar.com.np';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Bibek Sunar',
  url: siteUrl,
  image: siteUrl + '/bibek.png',
  jobTitle: 'Marketing Professional and Aspiring Entrepreneur',
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
  ]
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Bibek Sunar | Marketing Professional in Nepal</title>
        <meta
          name='description'
          content='Bibek Sunar is a marketing professional and aspiring entrepreneur from Bharatpur-6, Nepal. Explore his portfolio, skills, projects, and contact details.'
        />
        <meta
          name='keywords'
          content='Bibek Sunar, bibeksunar, marketing professional Nepal, sales communication, entrepreneurship, business development'
        />
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <link rel='canonical' href={siteUrl} />
        <meta property='og:title' content='Bibek Sunar | Marketing Professional in Nepal' />
        <meta property='og:description' content='Portfolio of Bibek Sunar - marketing professional and aspiring entrepreneur from Nepal.' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={siteUrl} />
        <meta property='og:image' content={siteUrl + '/bibek.png'} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Bibek Sunar | Marketing Professional in Nepal' />
        <meta name='twitter:description' content='Portfolio of Bibek Sunar - marketing professional and aspiring entrepreneur from Nepal.' />
        <meta name='twitter:image' content={siteUrl + '/bibek.png'} />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <VisionSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}

