import React from 'react';
import { DocsSidebar } from '@/components/docs-sidebar';
import { DocsSidebarMobile } from '@/components/docs-sidebar-mobile';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='mx-auto max-w-360'>
      <DocsSidebarMobile />

      <div className='mt-[calc(64px+56px)] grid min-h-dvh grid-cols-1 grid-rows-1 justify-center md:mt-16 md:grid-cols-[var(--container-2xs)_minmax(0,calc(768px+288px))]'>
        {/* Sidebar */}
        <aside className='col-start-1 row-span-full max-md:hidden'>
          <div className='sticky top-16 max-h-[calc(100dvh-64px)] overflow-y-auto px-6 py-10 [scrollbar-width:thin]'>
            <DocsSidebar />
          </div>
        </aside>

        {/* Main content area */}
        <div className='md:col-start-2'>{children}</div>
      </div>
    </div>
  );
}
