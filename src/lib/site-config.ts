export const BASE_URL = getBaseUrl();

export const siteConfig = {
  name: 'Akuxe Notes',
  description:
    'Personal notes and lessons on UI/UX design and web development.',
  creator: 'Arun',
  twitterHandle: '@arunuxe',
  authors: [{ name: 'Arun', url: 'https://akuxe.vercel.app' }],
  images: [
    {
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Akuxe Notes',
    },
  ],

  links: {
    twitter: 'https://x.com/arunuxe',
    github: 'https://github.com/akuxe/akuxe-notes',
  },
};

export type SiteConfig = typeof siteConfig;

function getBaseUrl(): string {
  const url =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.NEXT_PUBLIC_APP_URL;

  if (!url) {
    throw new Error('Missing NEXT_PUBLIC_APP_URL in environment variables.');
  }

  return url;
}
