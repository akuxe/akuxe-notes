import type { TOCEntry } from '@/components/table-of-contents';
import { sidebarNav } from '@/lib/data';
import { CategoryItem, SubCategoryItem } from '@/types/nav';
import fs from 'node:fs/promises';
import path from 'node:path';
import React from 'react';

// Get the MDX file Component, title, and description by slug using dynamic import
export async function getDocPageBySlug(
  slug: string,
): Promise<null | { Component: React.FC; title: string; description: string }> {
  try {
    // Check if the file exists
    if (
      !(await fs
        .stat(path.join(process.cwd(), './src/content', `${slug}.mdx`))
        .catch(() => false))
    ) {
      return null;
    }

    const contentModule = await import(`@/content/${slug}.mdx`);
    if (!contentModule.default) {
      return null;
    }

    return {
      Component: contentModule.default,
      title: contentModule.title,
      description: contentModule.description,
    };
  } catch (e) {
    console.error(e);
    return null;
  }
}

// Recursive function to get slugs for generateStaticParams()
export async function getDocPageSlugs(): Promise<string[]> {
  const contentDir = path.join(process.cwd(), 'src', 'content');

  // Helper function to recursively get MDX files from directories
  const getFilesRecursively = async (dir: string): Promise<string[]> => {
    const files = await fs.readdir(dir);

    const filePromises = files.map(async (file) => {
      const fullPath = path.join(dir, file);
      const stat = await fs.stat(fullPath);

      if (stat.isDirectory()) {
        return getFilesRecursively(fullPath);
      } else if (file.endsWith('.mdx')) {
        const relativePath = path.relative(contentDir, fullPath);
        return relativePath.replace(/\.mdx$/, ''); // Return the slug
      }

      return [];
    });

    const results = await Promise.all(filePromises);
    return results.flat();
  };

  return getFilesRecursively(contentDir);
}

export async function generateTableOfContents(slug: string) {
  // Check if a file (e.g., slug.mdx) exists in the './src/content' directory
  if (
    !(await fs
      .stat(path.join(process.cwd(), './src/content', `${slug}.mdx`))
      // If the file doesn't exist or there's an error, catch the error and return false
      .catch(() => false))
  ) {
    return [];
  }

  const markdown = await fs.readFile(
    path.join(process.cwd(), './src/content', `${slug}.mdx`),
    'utf8',
  );

  return generateTableOfContentsFromMarkdown(markdown);
}

export async function generateTableOfContentsFromMarkdown(markdown: string) {
  const regex =
    /^(#{2,3})\s+(.+)$|<h([23])(?:\s+[^>]*\bid=["'](.*?)["'][^>]*)?>(.*?)<\/h[23]>/gm;

  // Match Markdown and HTML headings (e.g., ## Heading, <h2>Heading</h2>)
  const headings = [...markdown.matchAll(regex)].map((match) => {
    let level, text, id;

    if (match[1]) {
      // Markdown headings (## or ###)
      level = match[1].length;
      text = match[2].trim();
    } else {
      // HTML headings (<h2> or <h3>)
      level = parseInt(match[3]);
      text = match[5].trim();
      if (match[4]) {
        id = `#${match[4]}`;
      }
    }

    // Generate id
    id ??= `#${text
      .toString() // Ensure the input is a string.
      .toLowerCase() // Convert the string to lowercase.
      .trim() // Remove whitespace from both ends of the string.
      .replace(/\s+/g, '-') // Replace spaces with hyphens.
      .replace(/&/g, '-and-') // Replace '&' with 'and'.
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters except hyphens.
      .replace(/\-\-+/g, '-') // Replace multiple hyphens with a single hyphen.
      .replace(/-$/, '')}`; // Remove trailing hyphen, if any.

    return { level, text, id, children: [] };
  });

  const toc: TOCEntry[] = [];
  const stack: TOCEntry[] = [{ level: 0, text: '', id: '', children: toc }];

  for (const heading of headings) {
    while (stack[stack.length - 1].level >= heading.level) {
      stack.pop();
    }
    stack[stack.length - 1].children.push(heading);
    stack.push(heading);
  }
  return toc;
}

export function getSectionAndTitleBySlug(slug: string): string[] {
  const currentPath = `/docs/${slug}`;

  // Type guard: checks if item has an href (i.e., it's a SubCategoryItem)
  function isSubCategoryItem(
    item: CategoryItem | SubCategoryItem,
  ): item is SubCategoryItem {
    return typeof (item as SubCategoryItem).href === 'string';
  }

  function findPath(
    items: (CategoryItem | SubCategoryItem)[],
    path: string,
    trail: string[] = [],
  ): string[] | null {
    for (const item of items) {
      if (isSubCategoryItem(item) && item.href === path) {
        return [...trail, item.title];
      }

      if (item.items) {
        const result = findPath(item.items, path, [...trail, item.title]);
        if (result) return result;
      }
    }

    return null;
  }

  for (const section of sidebarNav) {
    const result = findPath(section.items, currentPath);
    if (result) return result;
  }

  return []; // Return empty if not found
}

/* getSectionAndTitleBySlug() Explained */
/*  
section = { title: 'Frontend', items: [...] }
findPath(
[{ title: 'HTML & CSS', items: [...] }, { title: 'JavaScript', ... }, {...}], 
 '/docs/frontend/html/Child')

Inside findPath function 
item = { title: 'HTML & CSS', items: [...] }
if(isSubCategoryItem) ❌ FALSE
if (item.items) ✅, Update trail, trail = ['HTML & CSS']

item = {
  title: 'HTML Cheatsheet',
  href: '/docs/frontend/html/cheatsheet',
  items: [...]
}
if(isSubCategoryItem) item.href === '/docs/frontend/html/Child' ❌ no match
if (item.items) ✅, trail = ['HTML & CSS', 'HTML Cheatsheet']

item = {
  title: 'HTML Child',
  href: '/docs/frontend/html/Child'
}
if(isSubCategoryItem) item.href === '/docs/frontend/html/Child' // ✅ TRUE
return ['HTML & CSS', 'HTML Cheatsheet', 'HTML Child']
*/

/* generateTableOfContentsFromMarkdown() Explained */
/* 
const markdown = `
<h2 id="id-2">Section 2</h2>
<h1 id="id-1">Section 1</h1>
### markHeading
`;

Capturing Groups  ( ): 
(#+)    → match[1] =	Matches Markdown ## or ### headings (e.g., ## Heading)
(.+)    → match[2] =	Matches the text after # in Markdown
([1-6]) → match[3] =	Matches the number inside <hN> (e.g., h2 → 2)
(.*?)   → match[4] =	Matches the optional id="some-id" inside <hN>
(.*?)   → match[5] =	Matches the actual heading text inside <hN>

// HEADINGS RETURN

[
  [
    0: '<h2 id="id-2">Section 2</h2>'
    1: undefined
    2: undefined
    3: "2"
    4: "id-2"
    5: "Section 2"
    groups: undefined
    index: 1
    input: '\n<h2 id="id-2">Section 2</h2>\n<h1 id="id-1">Section 1</h1>\n### markHeading\n'
  ],

  [
    0: '<h1 id="id-1">Section 1</h1>'
    ​​1: undefined
    2: undefined
    3: "1"
    4: "id-1"
    5: "Section 1"
    groups: undefined
    ​​index: 30
    ​​input: '\n<h2 id="id-2">Section 2</h2>\n<h1 id="id-1">Section 1</h1>\n### markHeading\n'
  ],

  [
    0: "### markHeading"​​
    1: "###"
    2: "markHeading"
    3: undefined
    4: undefined
    5: undefined
    groups: undefined
    index: 59
    input: '\n<h2 id="id-2">Section 2</h2>\n<h1 id="id-1">Section 1</h1>\n### markHeading\n'
  ]
]

// HEADINGS MAP RETURN 
[
  { level: 2, text: "Section 2", slug: "#id-2", children: []},
  { level: 1, text: "Section 1", slug: "#id-1", children: []},
  { level: 3, text: "markHeading", slug: "#markheading", children: []},
]

// the stack and toc works because the items(objects) in the headings are reference type

// STACK AFTER LOOP
[
  { level: 0, text: '', id: '', children: toc },
  { 
    level: 1,
    text: "Section 1",
    slug: "#id-1",
    children: [
      { level: 3, text: "markHeading", slug: "#markheading", children: [] }
    ] 
  },
  { level: 3, text: "markHeading", slug: "#markheading", children: [] }
]

// TOC AFTER LOOP
[
  { level: 2, text: "Section 2", slug: "#id-2", children: [] },
  { 
    level: 1,
    text: "Section 1",
    slug: "#id-1",
    children: [
      { level: 3, text: "markHeading", slug: "#markheading", children: [] }
    ]
  }
]

*/
