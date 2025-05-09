'use client';

import { IconButton, LinkButton } from '@/components/button';
import { GitHub, Logo } from '@/components/icons';
import MainNavLinks from '@/components/main-nav-link';
import ThemeToggle from '@/components/theme-toggle';
import { mainNav } from '@/lib/data';
import { socialLinks } from '@/lib/site-config';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';

export default function MainNavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton
        aria-label='Navigation'
        onClick={() => setIsOpen(true)}
        className='md:hidden'
      >
        <Bars2Icon className='size-4' />
      </IconButton>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className='fixed inset-0 z-50 bg-zinc-50 focus:outline-none md:hidden dark:bg-zinc-950'
      >
        <DialogPanel className='size-full overflow-y-auto'>
          <div className='flex h-16 items-center justify-between px-4 sm:px-6'>
            <Logo />
            <IconButton
              aria-label='Navigation'
              onClick={() => setIsOpen(false)}
            >
              <XMarkIcon className='size-4' />
            </IconButton>
          </div>

          <nav>
            <ul className='flex flex-col gap-1 px-1 sm:px-3'>
              {mainNav.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <MainNavLinks
                    onClick={() => setIsOpen(false)}
                    href={item.href}
                    title={item.title}
                    mobileNav
                  >
                    {item.title}
                  </MainNavLinks>
                </li>
              ))}
            </ul>
          </nav>

          <div className='mt-4 px-4 sm:px-6'>
            <div className='flex items-center gap-10 border-t border-zinc-950/5 pt-6 dark:border-zinc-50/10'>
              <LinkButton
                href={socialLinks.github}
                target='_blank'
                rel='noreferrer noopener'
                aria-label='GitHub repository'
              >
                <GitHub className='size-5 fill-zinc-600 dark:fill-zinc-400' />
              </LinkButton>
              <ThemeToggle />
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
