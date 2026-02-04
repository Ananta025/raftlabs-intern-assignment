import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllTools, getToolBySlug } from '@/lib/getTools';
import { Metadata } from 'next';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const tools = getAllTools();
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  return {
    title: `${tool.name} - ${tool.category} AI Tool`,
    description: tool.description,
    keywords: [tool.name, tool.category, "AI tool", tool.pricing, "artificial intelligence"],
    openGraph: {
      title: `${tool.name} - ${tool.category} AI Tool`,
      description: tool.description,
      type: 'website',
      url: `https://ai-tools-directory.com/tools/${tool.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.name} - ${tool.category} AI Tool`,
      description: tool.description,
    },
  };
}

export default async function ToolDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const pricingColors = {
    Free: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    Freemium: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    Paid: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/tools"
          className="mb-8 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to all tools
        </Link>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="p-8 sm:p-12">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
              <div className="shrink-0">
                <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
                  {tool.name}
                </h1>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    {tool.category}
                  </span>
                  <span
                    className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium ${pricingColors[tool.pricing]}`}
                  >
                    {tool.pricing}
                  </span>
                </div>

                <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  {tool.description}
                </p>

                <div className="mt-8">
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                  >
                    Visit Website
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-6 border-t border-gray-200 pt-8 dark:border-gray-800 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Category
                </h3>
                <p className="mt-2 text-base font-semibold text-gray-900 dark:text-gray-100">
                  {tool.category}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Pricing
                </h3>
                <p className="mt-2 text-base font-semibold text-gray-900 dark:text-gray-100">
                  {tool.pricing}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Website
                </h3>
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block truncate text-base font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {tool.website.replace(/^https?:\/\//, '')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
