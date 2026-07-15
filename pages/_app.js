import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Manrope, Sora } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/utils/theme-context';
import PageLoader from '@/components/PageLoader';
import RouteProgress from '@/components/RouteProgress';

const bodyFont = Manrope({ subsets: ['latin'], variable: '--font-body' });
const headingFont = Sora({ subsets: ['latin'], variable: '--font-heading' });
const HOME_SECTION_IDS = new Set(['home', 'about', 'skills', 'projects', 'demo-day', 'vision', 'contact']);

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);

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

  useEffect(() => {
    const onStart = () => setRouteLoading(true);
    const onDone = () => setRouteLoading(false);

    router.events.on('routeChangeStart', onStart);
    router.events.on('routeChangeComplete', onDone);
    router.events.on('routeChangeError', onDone);

    return () => {
      router.events.off('routeChangeStart', onStart);
      router.events.off('routeChangeComplete', onDone);
      router.events.off('routeChangeError', onDone);
    };
  }, [router.events]);

  return (
    <ThemeProvider>
      <div className={[bodyFont.variable, headingFont.variable, 'font-body', 'site-shell', 'body-sheen'].join(' ')}>
        <PageLoader show={loading} />
        <RouteProgress show={routeLoading} />
        <Component {...pageProps} />
        <Analytics />
      </div>
    </ThemeProvider>
  );
}



