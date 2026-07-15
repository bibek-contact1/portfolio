import { getAllPosts } from '@/lib/blog-store';
import { PERSON_IMAGE_ALT, PERSON_IMAGE_PATH, SITE_URL } from '@/utils/seo';

function renderImages(images = []) {
  return images
    .map(
      (image) =>
        [
          '<image:image>',
          `<image:loc>${image.loc}</image:loc>`,
          image.title ? `<image:title>${image.title}</image:title>` : '',
          image.caption ? `<image:caption>${image.caption}</image:caption>` : '',
          '</image:image>'
        ].join('')
    )
    .join('');
}

function toUrlXml({ loc, lastmod, changefreq, priority, images = [] }) {
  return [
    '<url>',
    `<loc>${loc}</loc>`,
    `<lastmod>${lastmod}</lastmod>`,
    `<changefreq>${changefreq}</changefreq>`,
    `<priority>${priority}</priority>`,
    renderImages(images),
    '</url>'
  ].join('');
}

export async function getServerSideProps({ res }) {
  const today = new Date().toISOString();
  const portraitImage = {
    loc: SITE_URL + PERSON_IMAGE_PATH,
    title: 'Bibek Sunar official portrait',
    caption: PERSON_IMAGE_ALT
  };
  const staticUrls = [
    {
      loc: SITE_URL + '/',
      lastmod: today,
      changefreq: 'weekly',
      priority: '1.0',
      images: [
        portraitImage,
        {
          loc: SITE_URL + '/demo-day/winner-trophy-with-bibek.jpeg',
          title: 'Himurja Skincare Demo Day 7.0 winner',
          caption: 'Bibek Sunar and Himurja Skincare winning Demo Day 7.0 at Boston International College'
        }
      ]
    },
    { loc: SITE_URL + '/about-bibek-sunar', lastmod: today, changefreq: 'monthly', priority: '0.9', images: [portraitImage] },
    { loc: SITE_URL + '/projects', lastmod: today, changefreq: 'monthly', priority: '0.9' },
    { loc: SITE_URL + '/blog', lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: SITE_URL + '/official-social-profiles', lastmod: today, changefreq: 'monthly', priority: '0.8' }
  ];

  let postUrls = [];
  try {
    const posts = await getAllPosts();
    postUrls = posts.map((post) => ({
      loc: SITE_URL + '/blog/' + post.slug,
      lastmod: new Date(post.updated_at || post.created_at || Date.now()).toISOString(),
      changefreq: 'monthly',
      priority: '0.8'
    }));
  } catch {
    postUrls = [];
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...staticUrls.map(toUrlXml),
    ...postUrls.map(toUrlXml),
    '</urlset>'
  ].join('');

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.write(xml);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
