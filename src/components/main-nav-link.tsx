'use client';

import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface MainNavLinksProps extends LinkProps {
  title: string;
  mobileNav?: boolean;
  children: React.ReactNode;
}

export default function MainNavLinks({
  href,
  title,
  children,
  mobileNav = false,
  ...props
}: MainNavLinksProps) {
  const pathname = usePathname();

  const isActive = pathname.startsWith(
    `/docs/${title.toLowerCase().replace(/\s+/g, '-')}`,
  );

  const baseClassName = mobileNav
    ? 'block rounded-lg px-3 py-2 text-base/8 font-medium transition-colors hover:bg-zinc-950/5 dark:hover:bg-zinc-50/10'
    : 'text-sm/6 font-medium transition-colors';
  const activeClassName = 'text-blue-600 dark:text-blue-400';
  const inactiveClassName = mobileNav
    ? 'text-zinc-600  dark:text-zinc-400'
    : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50';

  return (
    <Link
      href={href}
      {...props}
      className={clsx(
        baseClassName,
        isActive ? activeClassName : inactiveClassName,
      )}
    >
      {children}
    </Link>
  );
}
