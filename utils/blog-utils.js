export function normalizeCategory(value) {
  return String(value || '').trim();
}

export function parseTags(value) {
  if (!value) return [];
  const raw = Array.isArray(value) ? value : String(value).split(/[,\n]/);
  const seen = new Set();
  const tags = [];

  for (const item of raw) {
    const tag = String(item || '').trim();
    if (!tag) continue;
    const key = tag.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    tags.push(tag);
  }

  return tags;
}

export function tagsToStorage(value) {
  return parseTags(value).join(', ');
}

function norm(value) {
  return String(value || '').trim().toLowerCase();
}

function toTime(value) {
  const t = new Date(value || 0).getTime();
  return Number.isFinite(t) ? t : 0;
}

export function getRelatedPosts(currentPost, allPosts, limit = 3) {
  if (!currentPost || !Array.isArray(allPosts) || allPosts.length < 2) return [];

  const currentId = Number(currentPost.id);
  const currentCategory = norm(currentPost.category);
  const currentTags = new Set(parseTags(currentPost.tags).map((t) => t.toLowerCase()));

  const scored = allPosts
    .filter((post) => Number(post.id) !== currentId)
    .map((post) => {
      let score = 0;

      if (currentCategory && norm(post.category) === currentCategory) {
        score += 3;
      }

      const candidateTags = parseTags(post.tags).map((t) => t.toLowerCase());
      for (const tag of candidateTags) {
        if (currentTags.has(tag)) score += 2;
      }

      return { post, score, time: toTime(post.created_at) };
    });

  const withMatch = scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || b.time - a.time)
    .map((item) => item.post);

  const fallback = scored
    .filter((item) => item.score === 0)
    .sort((a, b) => b.time - a.time)
    .map((item) => item.post);

  return [...withMatch, ...fallback].slice(0, limit);
}
