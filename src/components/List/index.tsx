import { useEffect, useMemo, useState } from "react";
import { EntityListProps, EntityType } from "@/types";
import { useEntityStore } from "@/store/entityStore";
import { EntityForm } from "../EntityForm";
import { DataTable } from "./DataTable";
import { PaginationControls } from "./PaginationControls";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ITEMS_PER_PAGE } from "@/constants";
import { ErrorMessage } from "@/components/shared/ErrorMessage";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import { Button } from "@/components/ui/button";
import {
  peopleColumns,
  planetColumns,
  filmColumns,
  starshipColumns,
  speciesColumns,
  vehicleColumns,
} from "./columns";

export function List({ entityType }: EntityListProps) {
  const entities = useEntityStore((state) => state.entities);
  const fetchEntities = useEntityStore((state) => state.fetchEntities);
  const loading = useEntityStore((state) => state.loading);
  const error = useEntityStore((state) => state.error);
  const count = useEntityStore((state) => state.count);
  const [open, setOpen] = useState(false);

  const columns = useMemo(() => {
    switch (entityType) {
      case EntityType.People:
        return peopleColumns;
      case EntityType.Planets:
        return planetColumns;
      case EntityType.Films:
        return filmColumns;
      case EntityType.Starships:
        return starshipColumns;
      case EntityType.Species:
        return speciesColumns;
      case EntityType.Vehicles:
        return vehicleColumns;
      default:
        return [];
    }
  }, [entityType]);

  useEffect(() => {
    fetchEntities(entityType);
  }, [fetchEntities, entityType]);

  const totalPages = count ? Math.ceil(count / ITEMS_PER_PAGE) : 1;

  return (
    <div className="container mx-auto p-4 space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-orbitron capitalize text-theme-primary">{entityType}</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="bg-theme-primary/10 hover:bg-theme-primary/20 text-theme-primary border-theme-primary"
            >
              Create {entityType}
            </Button>
          </DialogTrigger>
          <EntityForm entityType={entityType} isEditing={false} onClose={setOpen} />
        </Dialog>
      </header>

      {loading ? (
        <LoadingSpinner size="lg" />
      ) : error ? (
        <ErrorMessage message={error} variant="bordered" />
      ) : (
        <div className="space-y-4 rounded-lg border border-theme-accent/20 bg-card">
          <DataTable columns={columns} data={entities} />
          <div className="p-4 border-t border-theme-accent/20">
            <PaginationControls entityType={entityType} totalPages={totalPages} />
          </div>
        </div>
      )}
    </div>
  );
}
