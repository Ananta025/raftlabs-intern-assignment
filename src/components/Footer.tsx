export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <h3 className="text-base font-semibold text-foreground">
              AI Tools Directory
            </h3>
            <p className="mt-1 text-sm text-muted">
              Discover the best AI tools for your needs
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:items-end">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground"
            >
              View on GitHub
            </a>
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} AI Tools Directory. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
