import { Pool } from '@neondatabase/serverless';
import { normalizeCategory, tagsToStorage } from '@/utils/blog-utils';

function getConnectionString() {
  return process.env.POSTGRES_URL || process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || '';
}

function getPool() {
  const connectionString = getConnectionString();
  if (!connectionString) {
    throw new Error('Missing database connection string. Set POSTGRES_URL or DATABASE_URL.');
  }
  return new Pool({ connectionString });
}

export async function ensureBlogTable() {
  const pool = getPool();
  await pool.query(
    'CREATE TABLE IF NOT EXISTS blog_posts (' +
      'id SERIAL PRIMARY KEY,' +
      'title TEXT NOT NULL,' +
      'slug TEXT NOT NULL UNIQUE,' +
      'excerpt TEXT,' +
      'content TEXT NOT NULL,' +
      'cover_image TEXT,' +
      'category TEXT,' +
      'tags TEXT,' +
      'created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),' +
      'updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()' +
    ')'
  );
  await pool.query("ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS category TEXT DEFAULT ''");
  await pool.query("ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS tags TEXT DEFAULT ''");
  await pool.end();
}
export function slugify(input) {
  return input.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
}

export async function getAllPosts() {
  await ensureBlogTable();
  const pool = getPool();
  const { rows } = await pool.query('SELECT id, title, slug, excerpt, content, cover_image, category, tags, created_at, updated_at FROM blog_posts ORDER BY created_at DESC');
  await pool.end();
  return rows;
}

export async function getPostBySlug(slug) {
  await ensureBlogTable();
  const pool = getPool();
  const { rows } = await pool.query('SELECT id, title, slug, excerpt, content, cover_image, category, tags, created_at, updated_at FROM blog_posts WHERE slug = $1 LIMIT 1', [slug]);
  await pool.end();
  return rows[0] || null;
}
export async function createPost({ title, excerpt, content, coverImage, category, tags }) {
  await ensureBlogTable();
  const pool = getPool();
  const baseSlug = slugify(title || 'post');
  let finalSlug = baseSlug;
  let counter = 1;

  while (true) {
    const { rows } = await pool.query('SELECT id FROM blog_posts WHERE slug = $1 LIMIT 1', [finalSlug]);
    if (!rows.length) break;
    counter += 1;
    finalSlug = baseSlug + '-' + counter;
  }

  const { rows } = await pool.query(
    'INSERT INTO blog_posts (title, slug, excerpt, content, cover_image, category, tags) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id, title, slug, excerpt, content, cover_image, category, tags, created_at, updated_at',
    [title, finalSlug, excerpt || '', content, coverImage || '', normalizeCategory(category), tagsToStorage(tags)]
  );
  await pool.end();
  return rows[0];
}

export async function updatePost(id, { title, excerpt, content, coverImage, category, tags }) {
  await ensureBlogTable();
  const pool = getPool();
  const { rows } = await pool.query(
    'UPDATE blog_posts SET title = $1, excerpt = $2, content = $3, cover_image = $4, category = $5, tags = $6, updated_at = NOW() WHERE id = $7 RETURNING id, title, slug, excerpt, content, cover_image, category, tags, created_at, updated_at',
    [title, excerpt || '', content, coverImage || '', normalizeCategory(category), tagsToStorage(tags), id]
  );
  await pool.end();
  return rows[0] || null;
}

export async function deletePost(id) {
  await ensureBlogTable();
  const pool = getPool();
  await pool.query('DELETE FROM blog_posts WHERE id = $1', [id]);
  await pool.end();
}
