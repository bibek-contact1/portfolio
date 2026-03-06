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

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Bibek Sunar | Marketing Professional & Aspiring Entrepreneur</title>
        <meta name='description' content='Professional portfolio of Bibek Sunar, a marketing graduate from Nepal focused on sales, strategy, and entrepreneurship.' />
        <meta name='keywords' content='Bibek Sunar, marketing portfolio, Nepal, entrepreneurship, sales, business development' />
        <meta property='og:title' content='Bibek Sunar Portfolio' />
        <meta property='og:description' content='Marketing professional and aspiring entrepreneur from Bharatpur-6, Nepal.' />
        <meta property='og:type' content='website' />
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
