import React from "react";
import { EntityType, People, Film, Planet, Starship, Species, Vehicle } from "@/types";
import { SearchResultItemProps } from "@/types";

const SearchResultItem: React.FC<SearchResultItemProps> = React.memo(
  ({ result, searchTerm, entityType }) => {
    const highlightTerm = React.useCallback((text: string, term: string) => {
      const parts = text.split(new RegExp(`(${term})`, "gi"));
      return parts.map((part, index) =>
        part.toLowerCase() === term.toLowerCase() ? (
          <span key={index} className="bg-theme-accent/30">
            {part}
          </span>
        ) : (
          part
        )
      );
    }, []);

    const fieldToDisplay = React.useMemo(() => {
      switch (entityType) {
        case EntityType.Films:
          return (result as Film).title;
        case EntityType.People:
          return (result as People).name;
        case EntityType.Planets:
          return (result as Planet).name;
        case EntityType.Starships:
          return (result as Starship).name;
        case EntityType.Species:
          return (result as Species).name;
        case EntityType.Vehicles:
          return (result as Vehicle).name;
        default:
          return "";
      }
    }, [result, entityType]);

    return (
      <div className="py-1 px-2">
        <p className="truncate">{highlightTerm(fieldToDisplay, searchTerm)}</p>
      </div>
    );
  }
);

export default SearchResultItem;
