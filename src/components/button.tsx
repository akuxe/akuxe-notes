import { cn } from '@/lib/utils';
import type { ElementType, ComponentPropsWithoutRef } from 'react';

interface IconButtonProps<T extends ElementType> {
  as?: T;
  className?: string;
  children: React.ReactNode;
}

export function IconButton<T extends ElementType = 'button'>({
  as,
  className,
  children,
  ...props
}: IconButtonProps<T> & ComponentPropsWithoutRef<T>) {
  const Component = as || 'button';

  return (
    <Component
      className={cn(
        'relative inline-flex size-7 cursor-pointer items-center justify-center rounded-md text-zinc-950 hover:bg-zinc-950/5 dark:text-zinc-50 dark:hover:bg-zinc-50/10',
        className,
      )}
      {...props}
    >
      <span className='absolute top-1/2 left-1/2 size-11 -translate-1/2 pointer-fine:hidden' />
      {children}
    </Component>
  );
}
