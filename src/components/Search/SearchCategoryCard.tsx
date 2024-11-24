import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { ArrowRightCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MemoizedSearchResultEntry } from "./SearchResultEntry";
import { SearchCategoryCardProps } from "@/types";

export function SearchCategoryCard({ category, results }: SearchCategoryCardProps) {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate(`/entities/${category}`);
  };

  return (
    <Card className="flex flex-col transition-transform hover:scale-[1.01]">
      <CardHeader className="bg-muted">
        <CardTitle className="font-orbitron capitalize">{category}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <div className="space-y-2">
          {results.map((result) => (
            <MemoizedSearchResultEntry key={result.url} result={result} />
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          variant="ghost"
          onClick={handleViewAll}
          className="w-full text-theme-primary hover:text-theme-primary/80 font-orbitron"
        >
          View All {category}
          <ArrowRightCircle size={16} className="ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
}
