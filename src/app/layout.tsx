import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = new URL('https://yukihirarinta.github.io');
const siteTitle = 'Yukihira Rinta';
const siteDescription = 'Showcase site';
const shareImage = '/blog-thumbnail.svg';

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: shareImage,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [shareImage],
  },
  icons: [{ rel: 'icon', url: '/favicon.svg' }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
          <nav className="container flex h-14 items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">
              Yukihira Rinta
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="https://github.com/yukihirarinta"
                className="hover:text-white/90"
                target="_blank"
                rel="noreferrer"
              >
                About
              </a>
            </div>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="section border-t border-white/10">
          <div className="container flex flex-col items-center gap-3 text-sm text-neutral-400">
            <p>© {new Date().getFullYear()} Yukihira Rinta</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

