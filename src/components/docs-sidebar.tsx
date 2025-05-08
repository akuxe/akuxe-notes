'use client';

import {
  NavList,
  NavListHeading,
  NavListItem,
  NavListItems,
  NavListLink,
} from '@/components/nav-list';
import { sidebarNav } from '@/lib/data';
import { usePathname } from 'next/navigation';

export function DocsSidebar({ onClick }: { onClick?: () => void }) {
  const pathname = usePathname();

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^\w-]/g, ''); // Remove non-alphanumeric characters (except - and _)

  const activeSection = sidebarNav.find((section) =>
    pathname.startsWith(`/docs/${slugify(section.title)}`),
  );

  return (
    <nav className='flex flex-col gap-12'>
      {activeSection &&
        activeSection.items.map((langSection, index) => (
          <NavList key={index}>
            <NavListHeading>{langSection.title}</NavListHeading>

            <NavListItems>
              {langSection.items.map((item, index) => (
                <NavListItem key={index}>
                  <NavListLink
                    isActive={pathname === item.href}
                    href={item.href}
                    onClick={onClick}
                  >
                    {item.title}
                  </NavListLink>

                  {Array.isArray(item.items) && item.items.length > 0 && (
                    <NavListItems nested>
                      {item.items.map((item, index) => (
                        <NavListItem key={index}>
                          <NavListLink
                            nested
                            isActive={pathname === item.href}
                            href={item.href}
                            onClick={onClick}
                          >
                            {item.title}
                          </NavListLink>
                        </NavListItem>
                      ))}
                    </NavListItems>
                  )}
                </NavListItem>
              ))}
            </NavListItems>
          </NavList>
        ))}
    </nav>
  );
}
