import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Manrope, Sora } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/utils/theme-context';
import PageLoader from '@/components/PageLoader';

const bodyFont = Manrope({ subsets: ['latin'], variable: '--font-body' });
const headingFont = Sora({ subsets: ['latin'], variable: '--font-heading' });
const HOME_SECTION_IDS = new Set(['home', 'about', 'skills', 'projects', 'vision', 'contact']);

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const parts = router.asPath.split('#');
    if (parts.length < 2) return;

    const id = decodeURIComponent(parts[1]);

    if (router.pathname !== '/' && HOME_SECTION_IDS.has(id)) {
      router.replace('/#' + id);
      return;
    }

    const timer = setTimeout(() => {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);

    return () => clearTimeout(timer);
  }, [router.asPath, router.pathname, router]);

  return (
    <ThemeProvider>
      <div className={[bodyFont.variable, headingFont.variable, 'font-body'].join(' ')}>
        <PageLoader show={loading} />
        <Component {...pageProps} />
        <Analytics />
      </div>
    </ThemeProvider>
  );
}
