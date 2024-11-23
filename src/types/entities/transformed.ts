import { EntityType, BaseEntity } from "./base";
import type { RawPeople, RawFilm, RawStarship, RawVehicle, RawSpecies, RawPlanet } from "./raw";

export interface People extends RawPeople, BaseEntity {
  entityType: EntityType.People;
}

export interface Film extends RawFilm, BaseEntity {
  entityType: EntityType.Films;
}

export interface Starship extends RawStarship, BaseEntity {
  entityType: EntityType.Starships;
}

export interface Vehicle extends RawVehicle, BaseEntity {
  entityType: EntityType.Vehicles;
}

export interface Species extends RawSpecies, BaseEntity {
  entityType: EntityType.Species;
}

export interface Planet extends RawPlanet, BaseEntity {
  entityType: EntityType.Planets;
}

export type Entity = People | Film | Starship | Vehicle | Species | Planet;
