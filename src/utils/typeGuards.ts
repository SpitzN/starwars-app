import { Entity, Film, People } from "@/types/entity.types";

export const hasName = (entity: Entity): entity is People => {
  return (entity as People).name !== undefined;
};

export const hasTitle = (entity: Entity): entity is Film => {
  return (entity as Film).title !== undefined;
};

export const isPeople = (entity: Entity): entity is People => {
  return (entity as People).birth_year !== undefined;
};

export const isFilm = (entity: Entity): entity is Film => {
  return (entity as Film).director !== undefined;
};
