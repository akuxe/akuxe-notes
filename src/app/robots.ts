import { metaData } from '@/lib/site-config';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
    },
    sitemap: `${metaData.baseUrl}/sitemap.xml`,
  };
}
