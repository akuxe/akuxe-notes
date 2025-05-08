import { YouTube } from '@/components/icons';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import Link, { type LinkProps } from 'next/link';
import React from 'react';
import { highlight } from 'sugar-high';

export interface CustomLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    LinkProps {
  href: string;
}

function getTextContent(node: React.ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }

  if (React.isValidElement(node)) {
    return getTextContent(
      (node as React.ReactElement<{ children: React.ReactNode }>).props
        .children,
    );
  }

  if (Array.isArray(node)) {
    return node.map(getTextContent).join('');
  }

  return ''; // If the node is neither text nor a React element
}

function slugify(str: React.ReactNode) {
  return getTextContent(str)
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/-$/, ''); // Remove trailing hyphen, if any.
}

// Generate a heading component dynamically
function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  const Heading = ({ children }: React.PropsWithChildren) => {
    const slug = slugify(children);
    return React.createElement(`h${level}`, { id: slug }, [
      React.createElement(
        'a',
        {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        },
        children,
      ),
    ]);
  };
  Heading.displayName = `Heading${level}`;
  return Heading;
}

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ color: 'red' }}>{children}</h1>,
    ...components, // Preserve existing components

    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),

    // Custom anchor component with Link
    a(props: CustomLinkProps) {
      const { href, children, ...restProps } = props;
      const isYouTubeLink =
        href.includes('youtu.be') || href.includes('youtube.com');

      if (href.startsWith('/')) {
        return (
          <Link href={href} {...restProps}>
            {children}
          </Link>
        );
      }

      if (href.startsWith('#')) {
        return (
          <a href={href} {...restProps}>
            {children}
          </a>
        );
      }

      return (
        <a target='_blank' rel='noopener noreferrer' href={href} {...restProps}>
          {children}
          {isYouTubeLink ? (
            <span className='ml-1 inline-block align-text-bottom'>
              <YouTube className='size-5 fill-current' />
            </span>
          ) : (
            <span className='ml-px inline-block align-text-top'>
              <ArrowUpRightIcon className='size-3' />
            </span>
          )}
        </a>
      );
    },

    // Custom image component with rounded corners
    img(props: ImageProps) {
      const { alt, ...restProps } = props;
      return (
        <Image
          width={768}
          height={432}
          className='rounded-lg'
          alt={alt}
          {...restProps}
        />
      );
    },

    pre(props) {
      const child = React.Children.only(props.children) as React.ReactElement;
      if (!child) return null;

      let { children: code } = child.props as { children: string };

      // Extract `// !CodeFilename:…` directive from the first line of code
      const filenameRegex = /^\/\/\s?!CodeFilename:\s?(.+?)\s*$/m;
      const filename = code.match(filenameRegex)?.[1]?.trim() || undefined;
      if (filename) {
        code = code.replace(filenameRegex, '').trimStart();
      }

      const highlightedCode = highlight(code);

      return (
        <div className='mt-6 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800'>
          {filename && (
            <div className='border-b border-zinc-200 bg-zinc-200/60 px-3 py-2 text-xs/5 tracking-wider text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400'>
              {filename}
            </div>
          )}

          <pre>
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }}></code>
          </pre>
        </div>
      );
    },
  };
}

/* getTextContent() Explained */
/* 
In MDX file
## Text with obj <small>check</small>

node = [
  0 : 'Text with obj ',
  1 : {
        ...
        type: 'small',
        props: { children: 'check' }
        ...
      }
]

typeof node === 'string' || typeof node === 'number' FALSE
React.isValidElement(node)  FALSE
Array.isArray(node)         TRUE

runs node.map(getTextContent).join('');

map 1st item in the array
typeof node === 'string' || typeof node === 'number' TRUE
returns 'Text with obj '

map 2nd item in the array
typeof node === 'string' || typeof node === 'number' FALSE
React.isValidElement(node)  TRUE

runs getTextContent(node.props.children)
typeof node === 'string' || typeof node === 'number' TRUE
returns 'check'

after mapping [ 'Text with obj ', 'check' ]
after .join('') 'Text with obj check' */
