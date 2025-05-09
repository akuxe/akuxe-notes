import { Breadcrumb } from '@/components/breadcrumb';
import Pagination from '@/components/pagination';
import TableOfContents from '@/components/table-of-contents';
import { metaData } from '@/lib/site-config';
import { notFound } from 'next/navigation';
import { Metadata } from 'next/types';
import {
  generateTableOfContents,
  getDocPageBySlug,
  getDocPageSlugs,
  getSectionAndTitleBySlug,
} from '../api';

export async function generateStaticParams() {
  const slugs = await getDocPageSlugs();

  return slugs.map((slug) => ({ slug: slug.split('/') }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugPath = slug.join('/');
  const post = await getDocPageBySlug(slugPath);

  if (!post) {
    return notFound();
  }

  const title = post.title;
  const imageUrl = `/api/og?title=${encodeURIComponent(post.title)}`;

  return {
    title,
    description: post.description,
    openGraph: {
      title,
      description: post.description,
      type: 'article',
      url: `/docs/${slug}`,
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: post.description,
      images: [{ url: imageUrl }],
      creator: metaData.twitterHandle,
    },
  };
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const slugPath = slug.join('/');

  const sectionAndTitle = getSectionAndTitleBySlug(slugPath);

  const [post, tableOfContents] = await Promise.all([
    getDocPageBySlug(slugPath),
    generateTableOfContents(slugPath),
  ]);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <div className='grid min-h-dvh grid-cols-1 lg:grid-cols-[minmax(0,1fr)_var(--container-2xs)]'>
        {/* Main content */}
        <main className='px-4 py-10 sm:px-6'>
          <div className='md:hidden'>
            {sectionAndTitle && <Breadcrumb items={sectionAndTitle} />}
          </div>
          <h1 className='text-3xl font-medium tracking-tight text-zinc-950 max-md:mt-5 dark:text-zinc-50'>
            {post.title}
          </h1>
          <p className='mt-4 text-base/7 text-zinc-600 dark:text-zinc-400'>
            {post.description}
          </p>
          <article className='prose mt-14'>
            <post.Component />
          </article>
          <Pagination slug={slugPath} />
        </main>

        {/* TOC */}
        <aside className='max-lg:hidden'>
          <nav className='sticky top-[65px] max-h-[calc(100svh-65px)] overflow-x-hidden px-6 py-10'>
            <TableOfContents tableOfContents={tableOfContents} />
          </nav>
        </aside>
      </div>
    </>
  );
}
