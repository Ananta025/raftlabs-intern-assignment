'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-xl font-bold text-foreground"
            >
              AI Tools Directory
            </Link>

            <div className="hidden items-center gap-6 sm:flex">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors ${
                  isActive('/')
                    ? 'text-blue-600'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                Home
              </Link>
              <Link
                href="/tools"
                className={`text-sm font-medium transition-colors ${
                  isActive('/tools')
                    ? 'text-blue-600'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                Tools
              </Link>
            </div>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
