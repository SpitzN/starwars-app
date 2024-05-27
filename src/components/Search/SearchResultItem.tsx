import {
  Entity,
  EntityType,
  People,
  Film,
  Planet,
  Starship,
  Species,
  Vehicle,
} from "@/types/entity.types";

interface SearchResultItemProps {
  result: Entity;
  searchTerm: string;
  entityType: EntityType;
}

function SearchResultItem({
  result,
  searchTerm,
  entityType,
}: SearchResultItemProps) {
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

  const getFieldToDisplay = () => {
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
  };

  return (
    <div className="py-1">
      <p>{highlightTerm(getFieldToDisplay(), searchTerm)}</p>
    </div>
  );
}

export default SearchResultItem;
