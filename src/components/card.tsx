import { cardNav } from '@/lib/data';
import type { CardNav } from '@/types/nav';
import Link from 'next/link';

function Card({ title, href, icon: Icon, description }: CardNav) {
  return (
    <Link
      href={href}
      aria-label={title}
      className='aspect-[16/9] w-full rounded-lg border border-zinc-200 bg-zinc-100 p-4 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-50/3 dark:hover:border-zinc-700/80'
    >
      <div className='flex size-full flex-col items-start justify-between'>
        {Icon && <Icon />}
        <div>
          <h3 className='text-base/7 font-medium'>{title}</h3>
          <p className='line-clamp-1 text-xs/6 tracking-widest text-zinc-600 dark:text-zinc-400'>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function CardList() {
  return (
    <div className='mx-auto mt-32 mb-16 max-w-7xl px-4 sm:px-6'>
      {cardNav.map((section, sectionIndex) => (
        <div key={sectionIndex} className='mb-20'>
          <h2 className='mb-4 font-mono text-sm/6 font-medium tracking-widest text-zinc-600 uppercase dark:text-zinc-400'>
            {section.title}
          </h2>
          <div className='grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {section.items.map((item, itemIndex) => (
              <Card key={itemIndex} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
