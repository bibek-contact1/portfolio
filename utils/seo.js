export const SITE_URL = 'https://bibeksunar.com.np';
export const SITE_NAME = 'Bibek Sunar';
export const PERSON_IMAGE_PATH = '/bibek-sunar-portrait.jpg';
export const PERSON_IMAGE_ALT = 'Official portrait of Bibek Sunar, marketing professional from Nepal';
export const DEFAULT_OG_IMAGE = PERSON_IMAGE_PATH;

export const DEFAULT_KEYWORDS = [
  'Bibek',
  'Bibek Sunar',
  'bibeksunar',
  'Bibek official website',
  'Bibek Nepal',
  'Bibek Sunar Nepal',
  'marketing professional',
  'sales professional',
  'digital marketing',
  'marketing strategy',
  'sales communication',
  'entrepreneurship',
  'business development',
  'Bharatpur Nepal'
];

export function absoluteUrl(path = '/') {
  if (!path) return SITE_URL;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return SITE_URL + (path.startsWith('/') ? path : '/' + path);
}
