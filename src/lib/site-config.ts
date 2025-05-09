export const metaData = {
  baseUrl:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://akuxe-notes.vercel.app',

  title: 'Akuxe Notes',
  description: 'Notes and lessons on UI/UX design and web development.',
  creator: 'Arun',
  twitterHandle: '@arunuxe',
  authors: [{ name: 'Arun', url: 'https://akuxe.vercel.app' }],
  ogImage: [
    {
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Akuxe Notes',
    },
  ],
};

export const socialLinks = {
  twitter: 'https://x.com/arunuxe',
  github: 'https://github.com/akuxe/akuxe-notes',
  // instagram: 'https://www.instagram.com/',
  // linkedin: 'https://www.linkedin.com/',
  // email: 'mailto:example@gmail.com',
};
