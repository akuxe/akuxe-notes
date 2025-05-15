import { IconButton } from '@/components/button';
import { GitHub, Logo } from '@/components/icons';
import MainNavLinks from '@/components/main-nav-link';
import ThemeToggle from '@/components/theme-toggle';
import { mainNav } from '@/lib/data';
import { socialLinks } from '@/lib/site-config';
import Link from 'next/link';

export default function MainNav() {
  return (
    <>
      <div className='flex w-full items-center justify-between'>
        <div className='flex items-center justify-start gap-10'>
          <Link href='/' aria-label='Home'>
            <Logo />
          </Link>

          <nav className='hidden md:block'>
            <ul className='flex items-center gap-6'>
              {mainNav.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <MainNavLinks href={item.href} title={item.title}>
                    {item.title}
                  </MainNavLinks>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className='hidden items-center gap-3 md:flex'>
          <IconButton
            as='a'
            href={socialLinks.github}
            target='_blank'
            rel='noreferrer noopener'
            aria-label='GitHub repository'
          >
            <GitHub className='size-4 fill-zinc-600 dark:fill-zinc-400' />
          </IconButton>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
