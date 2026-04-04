import Link from 'next/link';
import { useMemo, useState } from 'react';
import SeoHead from '@/components/SeoHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAllPosts } from '@/lib/blog-store';
import { parseTags } from '@/utils/blog-utils';

export default function BlogPage({ posts }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTag, setActiveTag] = useState('All');

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Bibek Sunar Blog',
    url: 'https://bibeksunar.com.np/blog',
    description: 'Articles by Bibek Sunar on marketing, sales, digital marketing, and entrepreneurship.'
  };

  const postsWithMeta = useMemo(
    () =>
      (posts || []).map((post) => ({
        ...post,
        category: String(post.category || '').trim(),
        tags: parseTags(post.tags)
      })),
    [posts]
  );

  const categories = useMemo(() => {
    const set = new Set();
    for (const post of postsWithMeta) {
      if (post.category) set.add(post.category);
    }
    return ['All', ...Array.from(set)];
  }, [postsWithMeta]);

  const allTags = useMemo(() => {
    const set = new Set();
    for (const post of postsWithMeta) {
      for (const tag of post.tags) set.add(tag);
    }
    return ['All', ...Array.from(set)];
  }, [postsWithMeta]);

  const filteredPosts = useMemo(
    () =>
      postsWithMeta.filter((post) => {
        const categoryMatch = activeCategory === 'All' || post.category === activeCategory;
        const tagMatch = activeTag === 'All' || post.tags.includes(activeTag);
        return categoryMatch && tagMatch;
      }),
    [activeCategory, activeTag, postsWithMeta]
  );

  return (
    <>
      <SeoHead
        title='Bibek Sunar Blog | Marketing, Sales and Digital Marketing Insights'
        description='Read blog posts by Bibek Sunar about marketing strategy, sales communication, digital marketing, and entrepreneurship.'
        path='/blog'
        keywords={['Bibek Sunar blog', 'marketing blog Nepal', 'sales blog', 'digital marketing insights']}
        type='blog'
        schema={blogSchema}
      />
      <Navbar />
      <main className='mx-auto max-w-5xl px-6 py-16'>
        <h1 className='font-heading text-4xl font-bold text-slate-900 dark:text-white'>Blog</h1>
        <p className='mt-3 text-slate-600 dark:text-slate-300'>Insights by Bibek Sunar</p>

        {(categories.length > 1 || allTags.length > 1) && (
          <div className='mt-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900'>
            {categories.length > 1 && (
              <div className='flex flex-wrap gap-2'>
                {categories.map((category) => (
                  <button
                    key={category}
                    type='button'
                    onClick={() => setActiveCategory(category)}
                    className={'rounded-full px-3 py-1 text-xs font-semibold ' + (activeCategory === category ? 'bg-brand-600 text-white' : 'border border-slate-300 text-slate-600 dark:border-slate-700 dark:text-slate-300')}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
            {allTags.length > 1 && (
              <div className='flex flex-wrap gap-2'>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    type='button'
                    onClick={() => setActiveTag(tag)}
                    className={'rounded-full px-3 py-1 text-xs font-semibold ' + (activeTag === tag ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900' : 'border border-slate-300 text-slate-600 dark:border-slate-700 dark:text-slate-300')}
                  >
                    {tag === 'All' ? 'All Tags' : '#' + tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className='mt-8 grid gap-6'>
          {filteredPosts.length === 0 && (
            <div className='rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900'>
              {postsWithMeta.length === 0 ? 'No blogs yet.' : 'No posts found for selected category/tag.'}
            </div>
          )}

          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={'/blog/' + post.slug}
              className='group block rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 transition hover:-translate-y-0.5 hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700'
            >
              <article>
                <h2 className='text-2xl font-semibold text-slate-900 transition group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400'>
                  {post.title}
                </h2>
                <div className='mt-3 flex flex-wrap gap-2'>
                  {post.category && (
                    <span className='rounded-full bg-brand-100 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300'>
                      {post.category}
                    </span>
                  )}
                  {post.tags.map((tag) => (
                    <span key={tag} className='rounded-full border border-slate-300 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-300'>
                      #{tag}
                    </span>
                  ))}
                </div>
                {post.excerpt && <p className='mt-3 text-slate-600 dark:text-slate-300'>{post.excerpt}</p>}
                <p className='mt-4 text-sm text-slate-500 dark:text-slate-400'>
                  {new Date(post.created_at).toLocaleDateString()}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const posts = await getAllPosts();
    return { props: { posts: JSON.parse(JSON.stringify(posts)) } };
  } catch {
    return { props: { posts: [] } };
  }
}

