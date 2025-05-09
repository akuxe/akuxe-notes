import { sidebarNav } from '@/lib/data';
import { metaData } from '@/lib/site-config';
import type { MetadataRoute } from 'next';

interface NavItem {
  href?: string;
  items?: NavItem[];
}

function getAllUrlsFromSidebarNav(navItems: NavItem[]): string[] {
  const allUrls: string[] = [];

  // Loop through each item in the navigation array
  for (const item of navItems) {
    // If the item has a direct URL, add it to the list
    if (item.href) {
      allUrls.push(item.href);
    }

    // If the item has child navigation items, recursively get their URLs
    if (item.items) {
      const childUrls = getAllUrlsFromSidebarNav(item.items);
      allUrls.push(...childUrls);
    }
  }

  return allUrls;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const allUrls = getAllUrlsFromSidebarNav(sidebarNav);

  const docsSitemap = allUrls.map((url) => ({
    url: `${metaData.baseUrl}/${url}`,
    changeFrequency: 'monthly' as const,
  }));

  const routes = ['' /* '/about', '/contact' */].map((route) => ({
    url: `${metaData.baseUrl}${route}/`,
    changeFrequency: 'monthly' as const,
  }));

  return [...routes, ...docsSitemap];
}
