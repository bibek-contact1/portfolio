import { SITE_URL } from '@/utils/seo';

export async function getServerSideProps({ res }) {
  const content = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /admin',
    'Disallow: /api',
    '',
    `Sitemap: ${SITE_URL}/sitemap.xml`
  ].join('\n');

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.write(content);
  res.end();

  return { props: {} };
}

export default function Robots() {
  return null;
}
