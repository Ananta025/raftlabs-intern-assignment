import Link from 'next/link';
import Image from 'next/image';
import { Tool } from '@/types/tool';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const pricingColors = {
    Free: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    Freemium: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    Paid: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  };

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group block rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-muted hover:shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0">
          <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-muted/10">
            <Image
              src={tool.logo}
              alt={`${tool.name} logo`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-blue-600">
              {tool.name}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            <span className="inline-flex items-center rounded-full bg-muted/10 border border-border px-3 py-1 text-xs font-medium text-foreground">
              {tool.category}
            </span>
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${pricingColors[tool.pricing]}`}>
              {tool.pricing}
            </span>
          </div>

          <p className="text-sm text-muted line-clamp-2">
            {tool.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
