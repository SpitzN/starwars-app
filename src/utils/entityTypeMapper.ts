import { EntityType } from "@/types/entity.types";

export function mapStringToEntityType(type: string): EntityType | null {
  switch (type.toLowerCase()) {
    case "people":
      return EntityType.People;
    case "planets":
      return EntityType.Planets;
    case "films":
      return EntityType.Films;
    case "starships":
      return EntityType.Starships;
    case "species":
      return EntityType.Species;
    case "vehicles":
      return EntityType.Vehicles;
    default:
      return null;
  }
}
