
import { Button } from "@/components/ui/button";
import { CelebrityCategory } from "@/types";

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  const categories: (CelebrityCategory | "All")[] = [
    "All", 
    "Film", 
    "Business", 
    "Politics", 
    "Sports", 
    "Music", 
    "Science", 
    "Literature", 
    "Social"
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          className={`rounded-full px-6 ${
            activeCategory === category 
              ? "bg-india-saffron text-white" 
              : "hover:bg-india-saffron/10"
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
