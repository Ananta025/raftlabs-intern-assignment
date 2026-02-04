import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Tools Directory | Discover the Best AI Tools',
  description: 'Explore curated AI tools across writing, coding, design, productivity, and marketing. Find the perfect AI solution for your needs.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-medium text-gray-900 dark:text-gray-100 sm:text-6xl md:text-6xl">
            Discover the Best&nbsp;
            <span className="group/title relative inline-block cursor-pointer text-blue-600 dark:text-blue-400 rounded">
              <span className="relative z-10 transition-colors duration-300 group-hover/title:text-gray-900 dark:group-hover/title:text-gray-100">AI Tools</span>
              <span className="absolute bottom-0 left-0 h-0.75 w-full origin-bottom scale-x-100 bg-blue-600 transition-all duration-500 ease-out group-hover/title:h-full group-hover/title:scale-y-100 group-hover/title:bg-linear-to-r group-hover/title:from-blue-500/90 group-hover/title:via-purple-500/90 group-hover/title:to-blue-500/90 dark:bg-blue-400 dark:group-hover/title:from-blue-400/90 dark:group-hover/title:via-purple-400/90 dark:group-hover/title:to-blue-400/90"></span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-gray-600 dark:text-gray-400 sm:text-xl">
            A curated directory of 20 AI tools across writing, coding, design,
            productivity, and marketing. Find the perfect AI solution to boost
            your productivity.
          </p>

          <div className="mt-10 flex items-center justify-center gap-6">
            <Link
              href="/tools"
              className="group relative inline-flex items-center gap-5 overflow-hidden rounded-full border-2 border-gray-300 bg-transparent px-6 py-3 text-lg text-gray-900 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-500/20 dark:border-gray-600 dark:text-gray-100 dark:hover:border-blue-400 dark:hover:bg-blue-950/30 dark:hover:shadow-blue-400/20"
            >
              <span className="absolute inset-0 -z-10 bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30"></span>
              Browse all tools
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group relative rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700 dark:hover:shadow-blue-400/10">
            <div className="absolute inset-0 rounded-xl bg-linear-to-br from-blue-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-950/20"></div>
            <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 dark:bg-blue-900/30">
              <svg
                className="h-6 w-6 text-blue-600 transition-colors duration-300 group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="relative mt-4 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
              Curated Selection
            </h3>
            <p className="relative mt-2 text-gray-600 transition-colors duration-300 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
              Handpicked AI tools from industry leaders and emerging innovators
            </p>
          </div>

          <div className="group relative rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-500/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-purple-700 dark:hover:shadow-purple-400/10">
            <div className="absolute inset-0 rounded-xl bg-linear-to-br from-purple-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-purple-950/20"></div>
            <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 dark:bg-purple-900/30">
              <svg
                className="h-6 w-6 text-purple-600 transition-colors duration-300 group-hover:text-purple-700 dark:text-purple-400 dark:group-hover:text-purple-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
            </div>
            <h3 className="relative mt-4 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
              Multiple Categories
            </h3>
            <p className="relative mt-2 text-gray-600 transition-colors duration-300 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
              Tools organized across writing, coding, design, productivity, and marketing
            </p>
          </div>

          <div className="group relative rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-2xl hover:shadow-green-500/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-700 dark:hover:shadow-green-400/10">
            <div className="absolute inset-0 rounded-xl bg-linear-to-br from-green-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-green-950/20"></div>
            <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 dark:bg-green-900/30">
              <svg
                className="h-6 w-6 text-green-600 transition-colors duration-300 group-hover:text-green-700 dark:text-green-400 dark:group-hover:text-green-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="relative mt-4 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-green-600 dark:text-gray-100 dark:group-hover:text-green-400">
              Free & Paid Options
            </h3>
            <p className="relative mt-2 text-gray-600 transition-colors duration-300 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
              Discover tools with free tiers, freemium models, and premium solutions
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}