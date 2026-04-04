import Head from 'next/head';
import { DEFAULT_KEYWORDS, DEFAULT_OG_IMAGE, SITE_NAME, absoluteUrl } from '@/utils/seo';

export default function SeoHead({
  title,
  description,
  path = '/',
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  imageAlt = 'Bibek Sunar portrait',
  imageWidth = 1200,
  imageHeight = 1800,
  type = 'website',
  noindex = false,
  schema = null
}) {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const allKeywords = Array.from(new Set([...DEFAULT_KEYWORDS, ...keywords])).join(', ');
  const robots = noindex
    ? 'noindex, nofollow, noarchive'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={allKeywords} />
      <meta name='robots' content={robots} />
      <meta name='author' content={SITE_NAME} />
      <link rel='canonical' href={canonical} />
      <link rel='image_src' href={imageUrl} />
      <meta itemProp='image' content={imageUrl} />

      <meta property='og:site_name' content={SITE_NAME} />
      <meta property='og:locale' content='en_NP' />
      <meta property='og:type' content={type} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={canonical} />
      <meta property='og:image' content={imageUrl} />
      <meta property='og:image:width' content={String(imageWidth)} />
      <meta property='og:image:height' content={String(imageHeight)} />
      <meta property='og:image:alt' content={imageAlt} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={imageUrl} />
      <meta name='twitter:image:alt' content={imageAlt} />

      {schema &&
        (Array.isArray(schema) ? schema : [schema]).map((item, index) => (
          <script
            key={index}
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
    </Head>
  );
}
