import { Entity, EntityType } from "../entities";

export interface SearchResultItemProps {
  result: Entity;
  searchTerm: string;
  entityType: EntityType;
}

export interface CategoryCardProps {
  category: string;
  results: Entity[];
  searchTerm: string;
  onResultClick: (result: Entity) => void;
  onViewAll: (category: string) => void;
}
