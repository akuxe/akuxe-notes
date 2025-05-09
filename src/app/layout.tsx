import Footer from '@/components/footer';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { BASE_URL, siteConfig } from '@/lib/site-config';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Fira_Code, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },

  description: siteConfig.description,
  authors: siteConfig.authors,
  creator: siteConfig.creator,

  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: siteConfig.name,
    images: siteConfig.images,
  },

  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: siteConfig.images,
    creator: siteConfig.twitterHandle,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${inter.variable} ${firaCode.variable} bg-zinc-50 text-zinc-950 antialiased dark:bg-zinc-950 dark:text-zinc-50`}
    >
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
