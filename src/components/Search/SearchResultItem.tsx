import { Entity } from "@/types/entity.types";
import { hasName, hasTitle } from "@/utils/typeGuards";

interface SearchResultItemProps {
  result: Entity;
  searchTerm: string;
}

function SearchResultItem({ result, searchTerm }: SearchResultItemProps) {
  const highlightTerm = (text: string, term: string) => {
    const parts = text.split(new RegExp(`(${term})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === term.toLowerCase() ? (
        <span key={index} className="bg-yellow-300">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="py-1">
      {hasName(result) ? (
        <p>{highlightTerm(result.name, searchTerm)}</p>
      ) : hasTitle(result) ? (
        <p>{highlightTerm(result.title, searchTerm)}</p>
      ) : null}
    </div>
  );
}

export default SearchResultItem;
