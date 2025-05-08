import { ChevronRightIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

interface BreadcrumbProps {
  items: string[]; // e.g., [ 'HTML & CSS', 'HTML Cheatsheet', 'HTML Child' ]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <ul className='flex flex-wrap items-center gap-2 text-sm/6'>
      {items.map((label, index) => {
        const isLast = index === items.length - 1;

        return (
          <li key={index} className='flex items-center gap-2 whitespace-nowrap'>
            <span
              className={clsx(
                isLast
                  ? 'truncate text-zinc-950 dark:text-zinc-50'
                  : 'text-zinc-600 dark:text-zinc-400',
              )}
            >
              {label}
            </span>
            {!isLast && (
              <ChevronRightIcon className='size-4 text-zinc-600 dark:text-zinc-400' />
            )}
          </li>
        );
      })}
    </ul>
  );
}
