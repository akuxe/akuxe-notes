import { ArrowUpRightIcon } from '@heroicons/react/16/solid';

export default function Footer() {
  return (
    <footer className='border-t border-zinc-950/5 max-md:py-6 dark:border-zinc-50/10'>
      <div className='mx-auto max-w-360 px-6 py-4 text-sm/6 text-balance text-zinc-600 max-md:text-center dark:text-zinc-400'>
        Built by{' '}
        <a
          href='#'
          target='_blank'
          rel='noopener noreferrer'
          className='transition-colors hover:text-zinc-950 dark:hover:text-zinc-50'
        >
          Arun
          <span className='ml-px inline-block'>
            <ArrowUpRightIcon className='size-3' />
          </span>
        </a>{' '}
        using Next.js.
      </div>
    </footer>
  );
}
