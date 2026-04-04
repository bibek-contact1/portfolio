import Link from 'next/link';
import { useState } from 'react';
import SeoHead from '@/components/SeoHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAllPosts, getPostBySlug } from '@/lib/blog-store';
import { getRelatedPosts, parseTags } from '@/utils/blog-utils';
import { PERSON_IMAGE_PATH, SITE_URL } from '@/utils/seo';

function parseContentBlocks(content) {
  const lines = String(content || '').split('\n');
  const blocks = [];
  let buffer = [];

  const flush = () => {
    if (!buffer.length) return;
    const text = buffer.join('\n').trim();
    if (text) blocks.push({ type: 'text', value: text });
    buffer = [];
  };

  for (const line of lines) {
    const match = line.trim().match(/^\[image:(https?:\/\/[^\s\]]+)\]$/i);
    if (match) {
      flush();
      blocks.push({ type: 'image', value: match[1] });
    } else {
      buffer.push(line);
    }
  }

  flush();
  return blocks;
}

export default function BlogPostPage({ post, relatedPosts }) {
  const [copied, setCopied] = useState(false);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className='mx-auto max-w-4xl px-6 py-16'>Post not found.</main>
        <Footer />
      </>
    );
  }

  const blocks = parseContentBlocks(post.content);
  const path = '/blog/' + post.slug;
  const shareUrl = 'https://bibeksunar.com.np' + path;
  const shareText = `${post.title} | Bibek Sunar Blog`;
  const tags = parseTags(post.tags);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || post.title,
    image: post.cover_image || SITE_URL + PERSON_IMAGE_PATH,
    datePublished: post.created_at,
    dateModified: post.updated_at || post.created_at,
    author: {
      '@type': 'Person',
      name: 'Bibek Sunar'
    },
    publisher: {
      '@type': 'Person',
      name: 'Bibek Sunar'
    },
    mainEntityOfPage: SITE_URL + path,
    articleSection: post.category || 'Blog',
    keywords: tags.join(', ')
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <SeoHead
        title={post.title + ' | Bibek Sunar Blog'}
        description={post.excerpt || post.title}
        path={path}
        image={post.cover_image || PERSON_IMAGE_PATH}
        type='article'
        keywords={['Bibek Sunar article', 'marketing article', 'sales article', 'digital marketing article', ...(post.category ? [post.category] : []), ...tags]}
        schema={articleSchema}
      />
      <Navbar />
      <main className='mx-auto max-w-4xl px-6 py-16'>
        <h1 className='font-heading text-4xl font-bold text-slate-900 dark:text-white'>{post.title}</h1>
        <p className='mt-3 text-sm text-slate-500 dark:text-slate-400'>{new Date(post.created_at).toLocaleDateString()}</p>
        <div className='mt-3 flex flex-wrap gap-2'>
          {post.category && (
            <span className='rounded-full bg-brand-100 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300'>
              {post.category}
            </span>
          )}
          {tags.map((tag) => (
            <span key={tag} className='rounded-full border border-slate-300 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-300'>
              #{tag}
            </span>
          ))}
        </div>
        {post.cover_image && (
          <img src={post.cover_image} alt={post.title} className='mt-6 max-h-96 w-full rounded-2xl object-cover' />
        )}
        {post.excerpt && <p className='mt-6 text-lg text-slate-700 dark:text-slate-200'>{post.excerpt}</p>}
        <article className='mt-6 space-y-6 leading-8 text-slate-700 dark:text-slate-200'>
          {blocks.map((block, index) => {
            if (block.type === 'image') {
              return <img key={index} src={block.value} alt='Blog inline visual' className='w-full rounded-2xl object-cover' />;
            }
            return (
              <p key={index} className='whitespace-pre-wrap'>
                {block.value}
              </p>
            );
          })}
        </article>

        <section className='mt-10 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-lg font-semibold text-slate-900 dark:text-white'>Share this post</h2>
          <div className='mt-3 flex flex-wrap gap-2'>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-200'
            >
              Facebook
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-200'
            >
              WhatsApp
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(shareUrl)}`}
              className='rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-200'
            >
              Email
            </a>
            <button
              type='button'
              onClick={copyLink}
              className='rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-200'
            >
              {copied ? 'Copied' : 'Copy Link'}
            </button>
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className='mt-10'>
            <h2 className='text-2xl font-semibold text-slate-900 dark:text-white'>Related Posts</h2>
            <div className='mt-4 grid gap-4 md:grid-cols-2'>
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={'/blog/' + related.slug}
                  className='rounded-xl border border-slate-200 bg-white p-4 transition hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700'
                >
                  <h3 className='font-semibold text-slate-900 dark:text-white'>{related.title}</h3>
                  {related.excerpt && <p className='mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-300'>{related.excerpt}</p>}
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const post = await getPostBySlug(params.slug);
    if (!post) return { props: { post: null, relatedPosts: [] } };
    const allPosts = await getAllPosts();
    const relatedPosts = getRelatedPosts(post, allPosts, 3);
    return {
      props: {
        post: JSON.parse(JSON.stringify(post)),
        relatedPosts: JSON.parse(JSON.stringify(relatedPosts))
      }
    };
  } catch {
    return { props: { post: null, relatedPosts: [] } };
  }
}
