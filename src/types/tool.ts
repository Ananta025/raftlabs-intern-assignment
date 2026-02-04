/**
 * AI Tool type definition
 * Based on tools.json structure
 */

export type ToolCategory = 
  | 'Writing' 
  | 'Coding' 
  | 'Design' 
  | 'Productivity' 
  | 'Marketing';

export type ToolPricing = 'Free' | 'Freemium' | 'Paid';

export interface Tool {
  slug: string;
  name: string;
  category: ToolCategory;
  pricing: ToolPricing;
  description: string;
  website: string;
  logo: string;
}

/**
 * Usage across the app:
 * 
 * 1. Data fetching (lib/getTools.ts):
 *    - Import tools.json with type assertion: `const tools: Tool[] = ...`
 *    - Filter/search utilities return `Tool[]`
 * 
 * 2. Listing page (app/tools/page.tsx):
 *    - Props: `{ tools: Tool[] }`
 *    - Filter state uses `ToolCategory | 'All'` and `ToolPricing | 'All'`
 * 
 * 3. Detail page (app/tools/[slug]/page.tsx):
 *    - Props: `{ params: { slug: string } }`
 *    - Data: `tool: Tool | undefined`
 *    - generateStaticParams returns `{ slug: string }[]`
 * 
 * 4. Components:
 *    - ToolCard: `{ tool: Tool }`
 *    - Filter: `{ categories: ToolCategory[], onFilter: (category: ToolCategory) => void }`
 */
