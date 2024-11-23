export enum EntityType {
  People = "people",
  Planets = "planets",
  Films = "films",
  Starships = "starships",
  Vehicles = "vehicles",
  Species = "species",
}

export interface BaseEntity {
  uuid: string;
  url: string;
  created: string;
  edited: string;
}

export interface FieldConfig {
  label: string;
  name: string;
}
