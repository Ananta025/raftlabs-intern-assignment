'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { getAllTools, getUniqueCategories } from '@/lib/getTools';
import ToolCard from '@/components/ToolCard';
import SearchBar from '@/components/SearchBar';
import Filter from '@/components/Filter';
import { ToolCategory } from '@/types/tool';

type SortOption = 'name-asc' | 'name-desc' | 'pricing-asc';

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory | 'All'>('All');
  const [sortBy, setSortBy] = useState<SortOption>('name-asc');

  const tools = getAllTools();
  const categories = getUniqueCategories();

  const filteredAndSortedTools = useMemo(() => {
    let result = tools;

    // Filter by search query
    if (searchQuery) {
      result = result.filter((tool) =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter((tool) => tool.category === selectedCategory);
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'name-desc') {
        return b.name.localeCompare(a.name);
      } else if (sortBy === 'pricing-asc') {
        const pricingOrder = { Free: 0, Freemium: 1, Paid: 2 };
        return pricingOrder[a.pricing] - pricingOrder[b.pricing];
      }
      return 0;
    });

    return result;
  }, [tools, searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-2xl font-medium text-gray-900 dark:text-gray-100 sm:text-5xl">
            Browse all AI tools
          </h1>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
            Explore {tools.length} curated AI tools across 5 categories
          </p>
        </div>

        <div className="mb-8 space-y-6">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search AI tools..."
          />

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <Filter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            <div className="flex items-center gap-4">
              <Link
                href="/tools/free"
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Free Tools
              </Link>

              <div className="flex items-center gap-2">
                <label
                  htmlFor="sort-select"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Sort by:
                </label>
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:border-blue-400 dark:focus:ring-blue-400"
                >
                  <option value="name-asc">Name (A–Z)</option>
                  <option value="name-desc">Name (Z–A)</option>
                  <option value="pricing-asc">Pricing (Free → Paid)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {filteredAndSortedTools.length > 0 ? (
          <>
            <p className="mb-6 text-center text-sm text-gray-600 dark:text-gray-400">
              Showing {filteredAndSortedTools.length} {filteredAndSortedTools.length === 1 ? 'tool' : 'tools'}
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredAndSortedTools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </>
        ) : (
          <div className="py-16 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
              No tools found
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter to find what you&apos;re looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSortBy('name-asc');
              }}
              className="mt-6 rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
