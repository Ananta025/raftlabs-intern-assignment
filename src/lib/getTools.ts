import toolsData from '@/data/tools.json';
import { Tool, ToolCategory, ToolPricing } from '@/types/tool';

/**
 * Type-safe tools array
 * JSON is imported at build time (bundled into the app)
 */
const tools: Tool[] = toolsData as Tool[];

/**
 * Get all tools
 * Used in: listing page, generateStaticParams
 * SSG: Returns static data at build time
 */
export function getAllTools(): Tool[] {
  return tools;
}

/**
 * Get a single tool by slug
 * Used in: detail page /tools/[slug]
 * SSG: Enables static generation of individual tool pages
 * 
 * @param slug - URL-friendly tool identifier
 * @returns Tool object or undefined if not found
 */
export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

/**
 * Get all unique categories
 * Used in: filter components, category navigation
 * SSG: Static list for filter UI
 * 
 * @returns Array of unique category names
 */
export function getUniqueCategories(): ToolCategory[] {
  const categories = tools.map((tool) => tool.category);
  return Array.from(new Set(categories));
}

/**
 * Get all unique pricing options
 * Used in: filter components
 * SSG: Static list for pricing filters
 * 
 * @returns Array of unique pricing types
 */
export function getUniquePricingOptions(): ToolPricing[] {
  const pricingOptions = tools.map((tool) => tool.pricing);
  return Array.from(new Set(pricingOptions));
}

/**
 * Filter tools by category and/or pricing
 * Used in: listing page with active filters
 * Client-side: Runs in browser when filters change
 * 
 * @param category - Filter by category (optional)
 * @param pricing - Filter by pricing (optional)
 * @returns Filtered array of tools
 */
export function filterTools(
  category?: ToolCategory | 'All',
  pricing?: ToolPricing | 'All'
): Tool[] {
  return tools.filter((tool) => {
    const matchesCategory = !category || category === 'All' || tool.category === category;
    const matchesPricing = !pricing || pricing === 'All' || tool.pricing === pricing;
    return matchesCategory && matchesPricing;
  });
}

/**
 * SSG Support Explanation:
 * 
 * 1. Static Site Generation (app/page.tsx):
 *    - Call getAllTools() at build time
 *    - All data is embedded in HTML
 *    - Zero runtime data fetching
 * 
 * 2. Dynamic Routes (app/tools/[slug]/page.tsx):
 *    - generateStaticParams() uses getAllTools() to get all slugs
 *    - Each slug generates a static page at build time
 *    - getToolBySlug() runs once per page during build
 * 
 * 3. Client-side Filtering:
 *    - filterTools() can run client-side for interactive filters
 *    - OR re-fetch on server for search params like /tools?category=Coding
 *    - Data is already bundled, so no API calls needed
 */
