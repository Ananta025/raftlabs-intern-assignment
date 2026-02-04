import { getAllTools } from '@/lib/getTools';
import ToolCard from '@/components/ToolCard';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free AI Tools | AI Tools Directory',
  description: 'Discover free and freemium AI tools across writing, coding, design, productivity, and marketing. Get started without spending a dime.',
};

export default function FreeToolsPage() {
  const allTools = getAllTools();
  const freeTools = allTools.filter(
    (tool) => tool.pricing === 'Free' || tool.pricing === 'Freemium'
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            Free AI Tools
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Explore {freeTools.length} free and freemium AI tools. Get started without any upfront cost.
          </p>
          <div className="mt-6">
            <Link
              href="/tools"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              ← Browse all tools
            </Link>
          </div>
        </div>

        {freeTools.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {freeTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No free tools available at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
