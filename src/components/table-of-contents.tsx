'use client';

import {
  NavList,
  NavListHeading,
  NavListItem,
  NavListItems,
  NavListLink,
} from '@/components/nav-list';
import { useEffect, useState } from 'react';

export type TOCEntry = {
  level: number;
  text: string;
  id: string;
  children: TOCEntry[];
};

export default function TableOfContents({
  tableOfContents,
}: {
  tableOfContents: TOCEntry[];
}) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll('.prose h2, .prose h3'),
    );
    if (!headings.length) return;

    // Observe headings for scroll position
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-65px 0px -70% 0px', threshold: 1 },
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <NavList>
      <NavListHeading>On this page</NavListHeading>
      <NavListItems data-toc='true'>
        {tableOfContents.map(({ text, id, children }, i) => (
          <NavListItem key={i}>
            <NavListLink toc isActive={activeId === id} href={id}>
              {text}
            </NavListLink>
            {children.length > 0 && (
              <NavListItems nested>
                {children.map(({ text, id }, i) => (
                  <NavListItem key={i}>
                    <NavListLink
                      toc
                      nested
                      isActive={activeId === id}
                      href={id}
                    >
                      {text}
                    </NavListLink>
                  </NavListItem>
                ))}
              </NavListItems>
            )}
          </NavListItem>
        ))}
      </NavListItems>
    </NavList>
  );
}
