# AI Tools Directory

A directory of AI tools built with Next.js 14 (App Router), featuring 20 AI tools across writing, coding, design, productivity, and marketing categories.

## Project Overview

This project is a static AI tools catalog that helps users discover and explore AI tools. The site includes:

- **Listing page** (`/tools`) displaying all tools in a responsive grid
- **Real-time search** to quickly find tools by name
- **Category filtering** with one-click category selection
- **Sorting options** by name (A-Z, Z-A) and pricing (Free → Paid)
- **Permutation page** (`/tools/free`) — a derived view showing only free tools, demonstrating how to create different permutations of the same dataset
- **Dynamic detail pages** (`/tools/[slug]`) for each tool with full information
- **Dark mode support** with system-aware theme switching
- **Mobile-responsive design** using Tailwind CSS

All pages are statically generated at build time using Next.js Static Site Generation (SSG).

## Dataset

### Source and Selection

The dataset consists of 20 AI tools manually curated from multiple sources:
- Product Hunt (AI category)
- There's An AI For That directory
- Personal research of popular and emerging AI tools

### Dataset Creation Process

1. **Research Phase**: Identified 50+ AI tools across different categories
2. **Selection Criteria**: 
   - Mix of well-known tools (ChatGPT, GitHub Copilot) and emerging solutions (Cursor, Sembly AI)
   - Balanced distribution across 5 categories
   - Variety in pricing models (Free, Freemium, Paid)
   - Tools with clear value propositions

3. **Data Structuring**:
   - Created consistent schema with 7 fields per tool
   - Generated URL-friendly slugs for routing
   - Wrote concise descriptions (1-2 sentences each)
   - Used placeholder logo paths for scalability

4. **Quality Assurance**:
   - Verified all tool websites are active
   - Ensured unique slugs for routing
   - Validated JSON structure and TypeScript types

The final dataset lives in `src/data/tools.json` and powers all pages through static generation.

## Tech Stack

### Core Technologies
- **Next.js 14** (App Router) - React framework with built-in SSG
- **TypeScript** - Type safety across components and data
- **Tailwind CSS** - Utility-first styling with dark mode support
- **React** - UI component library

### Key Features
- **Static Site Generation (SSG)** - All pages pre-rendered at build time
- **Type-safe data layer** - TypeScript interfaces for Tool data
- **SEO basics** - Metadata API, sitemap.ts, robots.ts
- **Responsive design** - Mobile-first approach with Tailwind breakpoints
- **Client-side interactivity** - Search, category filters, and sorting
- **Dark mode** - System-aware theme switching

### Project Structure
```
src/
├── app/              # Next.js App Router pages
│   ├── tools/        # Tools listing page
│   │   ├── [slug]/   # Dynamic detail pages
│   │   └── free/     # Permutation: free tools only
├── components/       # Reusable React components
├── data/            # Static JSON dataset
├── lib/             # Helper functions and utilities
└── types/           # TypeScript type definitions
```

## Page Permutations

To fulfill the requirement of creating different permutations using the same dataset, I implemented:

1. **`/tools`** — Main listing page with all 20 tools
2. **`/tools/free`** — Derived permutation showing only free tools (filtered subset)
3. **`/tools/[slug]`** — Individual detail pages for each tool

The `/tools/free` page reuses the same `tools.json` dataset and components, but filters the data to display only tools with `pricing: "Free"`. This demonstrates how a single dataset can power multiple page variations.

## Design Inspiration

Design decisions were influenced by:

- **Dribbble**: Searched for "directory website" and "tool catalog" patterns
  - Clean card layouts with subtle shadows and hover effects
  - Balanced use of white space
  - Category badge styling with soft colors

- **Awwwards**: Studied navigation patterns and hero sections
  - Minimal, centered hero sections
  - Professional typography hierarchy

- **Real Products**: Analyzed ProductHunt and indie tool directories
  - Consistent card heights for cleaner grids
  - Pricing badge color coding (green for Free, blue for Freemium)
  - Clear call-to-action buttons on detail pages

### Design Principles Applied
- Generous white space for readability
- Consistent spacing throughout
- Rounded corners for modern feel
- Subtle shadows and hover states
- Dark mode with proper contrast

## AI Tools Used

This project was built with assistance from AI coding tools:

### Tools
1. **GitHub Copilot** - Code completion and component generation
2. **ChatGPT** - Architecture decisions and dataset creation
3. **Claude Sonnet** - Code review and suggestions

### Example Prompts

**Dataset Generation**:
```
"Create a clean, realistic dataset for an AI tools catalog with 20 tools. 
Each tool must have: slug, name, category, pricing, description, website, logo. 
Use well-known and lesser-known AI tools. Categories: Writing, Coding, Design, 
Productivity, Marketing. Output only valid JSON."
```

**Component Architecture**:
```
"Design a TypeScript interface for an AI tool with fields: slug, name, category, 
pricing, description, website, logo. Use string literal unions for category and 
pricing. Explain how this type should be used across listing page, detail page, 
and components."
```

**SEO Strategy**:
```
"Explain how SEO should be handled for a Next.js 14 AI tools directory with: 
home page, listing page, and dynamic detail pages. Cover metadata, sitemap, 
robots.txt, and how static generation helps SEO."
```

### AI Usage Strategy

AI tools were used primarily for:
- Generating boilerplate code and initial structure
- Creating realistic dataset entries
- Explaining Next.js App Router patterns
- Reviewing code for best practices
- Drafting component logic and type definitions

All AI-generated code was reviewed, tested, and refined manually to ensure quality and understanding.

## Future Improvements

With additional time, I would implement:

### High Priority

1. **URL State Persistence**
   - Sync search, filter, and sort state to URL params
   - Enable shareable filtered views
   - Browser back/forward navigation support

2. **Enhanced UI**
   - Loading states for better user experience
   - Animations using Framer Motion
   - Favorite/bookmark functionality (localStorage)

3. **More Permutation Pages**
   - `/tools/category/[category]` — Filter by category
   - `/tools/paid` — Show only paid tools

### Medium Priority

4. **SEO Enhancements**
   - JSON-LD structured data for rich snippets
   - Open Graph images for social sharing

5. **Content Expansion**
   - Related tools section on detail pages
   - Tool comparison feature

6. **Accessibility**
   - Full keyboard navigation audit
   - Screen reader testing

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

Generates static pages in `.next/` directory.

### Production

```bash
npm start
```

Serves the production build locally.

## Deployment

This project can be deployed on Vercel:

1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Deploy with zero configuration

The site is fully static and can also be deployed to Netlify, Cloudflare Pages, or any static hosting provider.

## Project Summary

- **Type-safe**: Full TypeScript coverage
- **Static**: All pages pre-rendered at build time via SSG
- **SEO-ready**: Metadata, sitemap, and semantic HTML
- **Accessible**: Keyboard navigation and ARIA labels
- **Responsive**: Works on mobile, tablet, and desktop
- **Feature-complete**: Search, filtering, sorting, dark mode, and permutation pages

---

**Built by**: Ananta Chandra Das  
**Date**: February 2026
