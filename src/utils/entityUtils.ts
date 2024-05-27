import { v4 as uuidv4 } from "uuid";
import { EntityType, RawEntity, Entity } from "@/types/entity.types";

interface FieldConfig {
  label: string;
  name: string;
}

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

export const fieldMapping: Record<EntityType, FieldConfig[]> = {
  [EntityType.People]: [
    { name: "name", label: "Name" },
    { name: "birth_year", label: "Birth Year" },
    { name: "gender", label: "Gender" },
    { name: "height", label: "Height" },
    { name: "mass", label: "Mass" },
    { name: "hair_color", label: "Hair Color" },
    { name: "skin_color", label: "Skin Color" },
    { name: "eye_color", label: "Eye Color" },
  ],
  [EntityType.Films]: [
    { name: "title", label: "Title" },
    { name: "director", label: "Director" },
    { name: "producer", label: "Producer" },
    { name: "release_date", label: "Release Date" },
    { name: "opening_crawl", label: "Opening Crawl" },
  ],
  [EntityType.Planets]: [
    { name: "name", label: "Name" },
    { name: "diameter", label: "Diameter" },
    { name: "climate", label: "Climate" },
    { name: "gravity", label: "Gravity" },
    { name: "terrain", label: "Terrain" },
    { name: "surface_water", label: "Surface Water" },
    { name: "population", label: "Population" },
  ],
  [EntityType.Starships]: [
    { name: "name", label: "Name" },
    { name: "model", label: "Model" },
    { name: "manufacturer", label: "Manufacturer" },
    { name: "cost_in_credits", label: "Cost in Credits" },
    { name: "length", label: "Length" },
    { name: "max_atmosphering_speed", label: "Max Atmosphering Speed" },
    { name: "crew", label: "Crew" },
    { name: "passengers", label: "Passengers" },
    { name: "hyperdrive_rating", label: "Hyperdrive Rating" },
    { name: "cargo_capacity", label: "Cargo Capacity" },
    { name: "consumables", label: "Consumables" },
  ],
  [EntityType.Species]: [
    { name: "name", label: "Name" },
    { name: "classification", label: "Classification" },
    { name: "designation", label: "Designation" },
    { name: "average_height", label: "Average Height" },
    { name: "skin_colors", label: "Skin Colors" },
    { name: "hair_colors", label: "Hair Colors" },
    { name: "eye_colors", label: "Eye Colors" },
    { name: "average_lifespan", label: "Average Lifespan" },
    { name: "language", label: "Language" },
  ],
  [EntityType.Vehicles]: [
    { name: "name", label: "Name" },
    { name: "model", label: "Model" },
    { name: "manufacturer", label: "Manufacturer" },
    { name: "cost_in_credits", label: "Cost in Credits" },
    { name: "length", label: "Length" },
    { name: "max_atmosphering_speed", label: "Max Atmosphering Speed" },
    { name: "crew", label: "Crew" },
    { name: "passengers", label: "Passengers" },
    { name: "cargo_capacity", label: "Cargo Capacity" },
    { name: "consumables", label: "Consumables" },
  ],
};

export const getDefaultValues = (entityType: EntityType): Partial<Entity> => {
  switch (entityType) {
    case EntityType.People:
      return {
        name: "",
        birth_year: "",
        gender: "",
        height: "",
        mass: "",
        hair_color: "",
        skin_color: "",
      };
    case EntityType.Films:
      return {
        title: "",
        director: "",
        producer: "",
        release_date: "",
        opening_crawl: "",
      };
    case EntityType.Planets:
      return {
        name: "",
        population: "",
        climate: "",
        diameter: "",
        gravity: "",
        terrain: "",
        surface_water: "",
      };
    case EntityType.Starships:
      return {
        name: "",
        model: "",
        manufacturer: "",
        cost_in_credits: "",
        length: "",
        max_atmosphering_speed: "",
        crew: "",
        passengers: "",
        hyperdrive_rating: "",
        cargo_capacity: "",
        consumables: "",
      };
    case EntityType.Species:
      return {
        name: "",
        classification: "",
        designation: "",
        average_height: "",
        skin_colors: "",
        hair_colors: "",
        eye_colors: "",
        average_lifespan: "",
        language: "",
      };
    case EntityType.Vehicles:
      return {
        name: "",
        model: "",
        manufacturer: "",
        cost_in_credits: "",
        length: "",
        max_atmosphering_speed: "",
        crew: "",
        passengers: "",
        cargo_capacity: "",
        consumables: "",
      };
    default:
      return {};
  }
};

export function transformEntity(
  rawEntity: RawEntity,
  entityType: EntityType
): Entity {
  return {
    ...rawEntity,
    uuid: uuidv4(),
    entityType,
  } as Entity;
}
