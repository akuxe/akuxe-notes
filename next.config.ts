import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    mdxRs: true,
  },

  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/frontend/javascript/basics',
        permanent: false,
      },
      {
        source: '/docs/frontend',
        destination: '/docs/frontend/javascript/basics',
        permanent: false,
      },
      {
        source: '/docs/frontend/javascript',
        destination: '/docs/frontend/javascript/basics',
        permanent: false,
      },
    ];
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
