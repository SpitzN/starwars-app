import { memo } from "react";
import { SearchResultItemProps } from "@/types";
import { highlightText } from "@/utils/highlightText";
import { useSearchStore } from "@/store/searchStore";

export function SearchResultItem({ result }: SearchResultItemProps) {
  const searchTerm = useSearchStore((state) => state.searchTerm);
  const displayText = "title" in result ? result.title : result.name;

  return (
    <div className="w-full text-left">
      <div className="text-sm font-medium font-orbitron">
        {highlightText(displayText, searchTerm)}
      </div>
    </div>
  );
}

export const MemoizedSearchResultItem = memo(SearchResultItem);
