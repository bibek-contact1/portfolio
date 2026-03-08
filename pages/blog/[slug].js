import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getPostBySlug } from '@/lib/blog-store';

export default function BlogPostPage({ post }) {
  if (!post) {
    return (
      <>
        <Navbar />
        <main className='mx-auto max-w-4xl px-6 py-16'>Post not found.</main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} | Bibek Sunar Blog</title>
        <meta name='description' content={post.excerpt || post.title} />
      </Head>
      <Navbar />
      <main className='mx-auto max-w-4xl px-6 py-16'>
        <h1 className='font-heading text-4xl font-bold text-slate-900 dark:text-white'>{post.title}</h1>
        <p className='mt-3 text-sm text-slate-500 dark:text-slate-400'>{new Date(post.created_at).toLocaleDateString()}</p>
        {post.cover_image && (
          <img src={post.cover_image} alt={post.title} className='mt-6 max-h-96 w-full rounded-2xl object-cover' />
        )}
        {post.excerpt && <p className='mt-6 text-lg text-slate-700 dark:text-slate-200'>{post.excerpt}</p>}
        <article className='mt-6 whitespace-pre-wrap leading-8 text-slate-700 dark:text-slate-200'>
          {post.content}
        </article>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const post = await getPostBySlug(params.slug);
    return { props: { post: post ? JSON.parse(JSON.stringify(post)) : null } };
  } catch {
    return { props: { post: null } };
  }
}
