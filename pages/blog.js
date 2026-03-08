import Link from 'next/link';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAllPosts } from '@/lib/blog-store';

export default function BlogPage({ posts }) {
  return (
    <>
      <Head>
        <title>Blog | Bibek Sunar</title>
        <meta name='description' content='Blog posts by Bibek Sunar on marketing, sales, and entrepreneurship.' />
      </Head>
      <Navbar />
      <main className='mx-auto max-w-5xl px-6 py-16'>
        <h1 className='font-heading text-4xl font-bold text-slate-900 dark:text-white'>Blog</h1>
        <p className='mt-3 text-slate-600 dark:text-slate-300'>Insights by Bibek Sunar</p>

        <div className='mt-8 grid gap-6'>
          {posts.length === 0 && (
            <div className='rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900'>
              No blog posts yet. Start writing from <Link href='/admin/blog' className='text-brand-600 underline'>/admin/blog</Link>.
            </div>
          )}

          {posts.map((post) => (
            <article key={post.id} className='rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900'>
              <h2 className='text-2xl font-semibold text-slate-900 dark:text-white'>
                <Link href={'/blog/' + post.slug} className='hover:text-brand-600 dark:hover:text-brand-400'>
                  {post.title}
                </Link>
              </h2>
              {post.excerpt && <p className='mt-3 text-slate-600 dark:text-slate-300'>{post.excerpt}</p>}
              <p className='mt-4 text-sm text-slate-500 dark:text-slate-400'>
                {new Date(post.created_at).toLocaleDateString()}
              </p>
            </article>
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

