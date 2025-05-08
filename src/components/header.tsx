import MainNav from '@/components/main-nav';
import MainNavMobile from '@/components/main-nav-mobile';

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 border-b border-zinc-950/5 bg-zinc-50/60 backdrop-blur-sm dark:border-zinc-50/10 dark:bg-zinc-950/60'>
      <div className='mx-auto flex h-16 max-w-360 items-center justify-between px-4 sm:px-6'>
        <MainNav />
        <MainNavMobile />
      </div>
    </header>
  );
}
