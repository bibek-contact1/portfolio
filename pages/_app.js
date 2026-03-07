import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import { Manrope, Sora } from 'next/font/google';
import { ThemeProvider } from '@/utils/theme-context';
import PageLoader from '@/components/PageLoader';
import { Analytics } from '@vercel/analytics/next';

const bodyFont = Manrope({ subsets: ['latin'], variable: '--font-body' });
const headingFont = Sora({ subsets: ['latin'], variable: '--font-heading' });

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

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
