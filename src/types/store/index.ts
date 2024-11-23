import type { Entity, EntityType } from "../entities";

export interface EntityState {
  entities: Entity[];
  singleEntity: Entity | null;
  loading: boolean;
  error: string | null;
  next: string | null;
  previous: string | null;
  count: number | null;
  currentPage: number;
  addEntity: (entity: Entity) => void;
  removeEntity: (id: string) => void;
  updateEntity: (id: string, updatedEntity: Entity) => void;
  fetchEntities: (type: EntityType, pageUrl?: string) => void;
  fetchSingleEntity: (relativeUrl: string) => void;
}

export interface SearchState {
  searchTerm: string;
  results: { [key: string]: Entity[] };
  loading: boolean;
  error: string | null;
  setSearchTerm: (term: string) => void;
  fetchResults: (term: string) => void;
  clearResults: () => void;
}
