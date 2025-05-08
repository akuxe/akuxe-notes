import { sidebarNav } from '@/lib/data';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

export default function Pagination({ slug }: { slug: string }) {
  const section = slug.split('/')[0]; // 'frontend', 'backend', etc.

  const sectionNav = sidebarNav.find(
    (s) => s.title.toLowerCase().replace(/\s+/g, '-') === section,
  );
  if (!sectionNav) return null;

  const flatIndex = sectionNav.items.flatMap((subCategory) =>
    subCategory.items.flatMap((subItem) => [
      [subItem.title, subItem.href],
      ...(subItem.items?.map((item) => [item.title, item.href]) || []),
    ]),
  ) as [string, string][];

  const position = flatIndex.findIndex(([path]) => path === `/docs/${slug}`);
  if (position === -1) return null;

  const prev = position > 0 ? flatIndex[position - 1] : null;
  const next = position < flatIndex.length - 1 ? flatIndex[position + 1] : null;

  return (
    <nav className='mt-16 flex items-center justify-between text-sm/6 text-zinc-700 dark:text-zinc-300'>
      {prev && (
        <Link
          className='flex items-center gap-2 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50'
          href={prev[1]}
        >
          <ChevronLeftIcon className='size-4' />
          <span>{prev[0]}</span>
        </Link>
      )}

      {next && (
        <Link
          className='flex items-center gap-2 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50'
          href={next[1]}
        >
          <span>{next[0]}</span>
          <ChevronRightIcon className='size-4' />
        </Link>
      )}
    </nav>
  );
}
