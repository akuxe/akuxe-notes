'use client';

import { IconButton } from '@/components/button';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';

import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, systemTheme, setTheme } = useTheme();

  return (
    <IconButton
      aria-label='Theme Toggle'
      onClick={() => {
        const resolvedTheme = theme === 'system' ? systemTheme : theme;
        const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
        const newThemeMatchesSystem = newTheme === systemTheme;
        setTheme(newThemeMatchesSystem ? 'system' : newTheme);
      }}
    >
      <SunIcon className='block size-5 fill-zinc-600 md:size-4 dark:hidden dark:fill-zinc-400' />
      <MoonIcon className='hidden size-5 fill-zinc-600 md:size-4 dark:block dark:fill-zinc-400' />
    </IconButton>
  );
}

/* ThemeToggle() Explained */
/* 
// Default on load
theme = system
systemTheme = dark

resolvedTheme                           dark
newTheme                                light
newThemeMatchesSystem (light === dark)  False
onClick                                 LIGHT

// light mode after switching from default
theme = light
systemTheme = dark

resolvedTheme                           light
newTheme                                dark
newThemeMatchesSystem (dark === dark)   True
onClick                                 SYSTEM                                      
*/
