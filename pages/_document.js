import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en-NP'>
      <Head>
        <meta name='theme-color' content='#0f172a' />
        <link rel='icon' type='image/png' href='/bibek.png' />
        <link rel='apple-touch-icon' href='/bibek.png' />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <body className='bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
