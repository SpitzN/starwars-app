import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { ArrowRightCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchResultItem from "./SearchResultItem";
import { EntityType, CategoryCardProps } from "@/types";

export const CategoryCard = ({
  category,
  results,
  searchTerm,
  onResultClick,
  onViewAll,
}: CategoryCardProps) => (
  <Card className="flex flex-col transition-transform hover:scale-[1.01]">
    <CardHeader className="bg-muted">
      <CardTitle className="font-orbitron capitalize">{category}</CardTitle>
    </CardHeader>
    <CardContent className="flex-1 p-4">
      <div className="space-y-2">
        {results.map((result) => (
          <div
            key={result.url}
            onClick={() => onResultClick(result)}
            className="p-2 hover:bg-muted/50 rounded-md cursor-pointer transition-colors"
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === "Enter" && onResultClick(result)}
          >
            <SearchResultItem
              result={result}
              searchTerm={searchTerm}
              entityType={category as EntityType}
            />
          </div>
        ))}
      </div>
    </CardContent>
    <CardFooter className="p-4 pt-0">
      <Button
        variant="ghost"
        onClick={() => onViewAll(category)}
        className="w-full text-theme-primary hover:text-theme-primary/80"
      >
        View All {category}
        <ArrowRightCircle size={16} className="ml-2" />
      </Button>
    </CardFooter>
  </Card>
);
