import type { ColumnDef } from "@tanstack/react-table";
import type { Entity, EntityType } from "../entities";

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export interface DataTableActionsProps {
  entity: Entity;
  entityType: EntityType;
}

export interface EntityListProps {
  entityType: EntityType;
}

export interface PaginationControlsProps {
  entityType: EntityType;
  totalPages: number;
}
