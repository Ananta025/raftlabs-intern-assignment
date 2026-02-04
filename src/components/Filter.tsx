import { ToolCategory } from '@/types/tool';

interface FilterProps {
  categories: ToolCategory[];
  selectedCategory: ToolCategory | 'All';
  onCategoryChange: (category: ToolCategory | 'All') => void;
}

export default function Filter({
  categories,
  selectedCategory,
  onCategoryChange,
}: FilterProps) {
  const allCategories: (ToolCategory | 'All')[] = ['All', ...categories];

  return (
    <div className="flex flex-wrap gap-2">
      {allCategories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            selectedCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-card border border-border text-foreground hover:bg-muted/20'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
