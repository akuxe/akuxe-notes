import { cn } from '@/lib/utils';

export function IconButton({
  className,
  children,
  ...props
}: React.ComponentProps<'button'>) {
  return (
    <button
      type='button'
      className={cn(
        'relative inline-flex size-7 cursor-pointer items-center justify-center rounded-md text-zinc-950 hover:bg-zinc-950/5 dark:text-zinc-50 dark:hover:bg-zinc-50/10',
        className,
      )}
      {...props}
    >
      <span className='absolute top-1/2 left-1/2 size-11 -translate-1/2 pointer-fine:hidden' />
      {children}
    </button>
  );
}

export function LinkButton({
  className,
  children,
  ...props
}: React.ComponentProps<'a'>) {
  return (
    <a
      className={cn(
        'relative inline-flex size-7 items-center justify-center rounded-md text-zinc-950 hover:bg-zinc-950/5 dark:text-zinc-50 dark:hover:bg-zinc-50/10',
        className,
      )}
      {...props}
    >
      <span className='absolute top-1/2 left-1/2 size-11 -translate-1/2 [@media(pointer:fine)]:hidden' />
      {children}
    </a>
  );
}
