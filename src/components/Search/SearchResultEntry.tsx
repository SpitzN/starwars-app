import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "@/constants";
import { SearchResultItem } from "./SearchResultItem";
import { SearchResultEntryProps } from "@/types";

export function SearchResultEntry({ result }: SearchResultEntryProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    const relativeUrl = result.url.replace(API_BASE_URL, "");
    navigate(`entity/${relativeUrl}`);
  };

  return (
    <div
      onClick={handleClick}
      className="p-2 hover:bg-muted/50 rounded-md cursor-pointer transition-colors"
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === "Enter" && handleClick()}
    >
      <SearchResultItem result={result} />
    </div>
  );
}

export const MemoizedSearchResultEntry = memo(SearchResultEntry);
