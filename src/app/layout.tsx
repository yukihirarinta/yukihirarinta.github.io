import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yukihira Rinta',
  description: 'Showcase site built with Next.js',
  metadataBase: new URL('https://yukihirarinta.github.io'),
  icons: [{ rel: 'icon', url: '/favicon.svg' }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
          <nav className="container flex h-14 items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">
              Yukihira Rinta
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/works" className="hover:text-white/90">Works</Link>
              <Link href="/about" className="hover:text-white/90">About</Link>
              <Link href="/contact" className="hover:text-white/90">Contact</Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="section border-t border-white/10">
          <div className="container flex flex-col items-center gap-3 text-sm text-neutral-400">
            <div className="flex gap-4">
              <a href="#" aria-label="X (dummy)" className="hover:text-neutral-200">X</a>
              <a href="#" aria-label="GitHub (dummy)" className="hover:text-neutral-200">GitHub</a>
              <a href="#" aria-label="Email (dummy)" className="hover:text-neutral-200">Email</a>
            </div>
            <p>© {new Date().getFullYear()} Yukihira Rinta</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

