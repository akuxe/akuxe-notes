'use client';

import { DocsSidebar } from '@/components/docs-sidebar';
import Header from '@/components/header';
import { Dialog, DialogPanel } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { useState } from 'react';

interface MenuButtonProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MenuButton({ isOpen, setIsOpen }: MenuButtonProps) {
  return (
    <div className='fixed inset-x-0 top-16 z-30 flex h-14 items-center justify-start border-b border-zinc-950/5 bg-zinc-50/60 px-4 backdrop-blur-sm sm:px-6 md:hidden dark:border-zinc-50/10 dark:bg-zinc-950/60'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='inline-flex items-center justify-start gap-1'
      >
        <ChevronRightIcon
          className={clsx(
            'size-4 transition-transform',
            isOpen ? 'rotate-90' : 'rotate-0',
          )}
        />
        <span className='text-sm/6'>Menu</span>
      </button>
    </div>
  );
}

export function DocsSidebarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className='md:hidden'
      >
        <div className='fixed inset-x-0 top-[122px] bottom-0 bg-zinc-50/90 dark:bg-zinc-950/80' />

        <DialogPanel className='fixed top-[122px] bottom-0 w-full overflow-y-auto'>
          <Header />
          <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className='overflow-y-auto'>
            <div className='border-r border-zinc-950/5 bg-zinc-50 p-4 sm:p-6 dark:border-zinc-50/10 dark:bg-zinc-950'>
              <DocsSidebar onClick={() => setIsOpen(false)} />
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
