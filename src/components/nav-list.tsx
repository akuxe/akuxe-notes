import clsx from 'clsx';
import Link, { type LinkProps } from 'next/link';

interface NavListLinkProps extends LinkProps {
  nested?: boolean;
  toc?: boolean;
  isActive?: boolean;
}

export function NavList({ children, ...rest }: React.PropsWithChildren) {
  return (
    <div className='flex flex-col gap-3' {...rest}>
      {children}
    </div>
  );
}

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export function NavListHeading({
  children,
  level = 3,
}: React.PropsWithChildren<{ level?: HeadingLevel }>) {
  const Element: `h${HeadingLevel}` = `h${level}`;
  return (
    <Element className='text-sm/6 font-medium text-zinc-950 dark:text-zinc-50'>
      {children}
    </Element>
  );
}

export function NavListItems({
  children,
  nested = false,
}: React.PropsWithChildren<{ nested?: boolean }>) {
  return (
    <ul
      className={clsx(
        'flex flex-col gap-3 border-l',
        nested ? 'border-transparent' : 'border-zinc-200 dark:border-zinc-800',
      )}
    >
      {children}
    </ul>
  );
}

export function NavListItem({ children }: React.PropsWithChildren) {
  return <li className='-ml-px flex flex-col items-start gap-2'>{children}</li>;
}

// <a> tag
export function NavListLink({
  href,
  children,
  nested = false,
  toc = false,
  isActive = false,
  ...props
}: React.PropsWithChildren<NavListLinkProps>) {
  const baseClassName =
    'inline-block border-l border-transparent transition-colors hover:text-zinc-950 text-sm/6 dark:hover:text-zinc-50';
  const activeClassName = toc
    ? 'border-zinc-950 font-medium text-zinc-950 dark:border-zinc-50 dark:text-zinc-50'
    : 'border-blue-600 font-medium text-blue-600 dark:border-blue-400 dark:text-blue-400';
  const inactiveClassName = 'text-zinc-600 dark:text-zinc-400';

  return (
    <Link
      className={clsx(
        baseClassName,
        isActive ? activeClassName : inactiveClassName,
        nested ? 'pl-8 sm:pl-7.5' : 'pl-5 sm:pl-4',
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}
