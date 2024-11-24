import { Entity } from "../entities";

export interface SearchResultItemProps {
  result: Entity;
}

export interface SearchResultEntryProps {
  result: Entity;
}

export interface SearchCategoryCardProps {
  category: string;
  results: Entity[];
}
