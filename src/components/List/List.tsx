import { useEffect, useMemo, useState } from "react";
import { EntityType } from "@/types/entity.types";
import { useEntityStore } from "@/store/entityStore";
import EntityForm from "./EntityForm";
import DataTable from "./DataTable";
import PaginationControls from "./PaginationControls";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  peopleColumns,
  planetColumns,
  filmColumns,
  starshipColumns,
  speciesColumns,
  vehicleColumns,
} from "./columns";

interface EntityListProps {
  entityType: EntityType;
}

function EntityList({ entityType }: EntityListProps) {
  const { entities, fetchEntities, loading, error, count } = useEntityStore(
    (state) => ({
      entities: state.entities,
      fetchEntities: state.fetchEntities,
      loading: state.loading,
      error: state.error,
      next: state.next,
      previous: state.previous,
      count: state.count,
      currentPage: state.currentPage,
    })
  );

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

  const totalPages = count ? Math.ceil(count / entities.length) : 1;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 capitalize">{entityType}</h1>
      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      {!loading && !error && (
        <>
          <DataTable columns={columns} data={entities} />
          <PaginationControls entityType={entityType} totalPages={totalPages} />
          <div className="flex justify-end mt-4">
            <Dialog
              open={open}
              onOpenChange={setOpen}
              aria-label={`Create ${entityType}`}
            >
              <DialogTrigger asChild>
                <Button className="bg-green-500 text-white px-4 py-2 rounded">
                  Create {entityType}
                </Button>
              </DialogTrigger>
              <EntityForm
                entityType={entityType}
                isEditing={false}
                onClose={setOpen}
              />
            </Dialog>
          </div>
        </>
      )}
    </div>
  );
}

export default EntityList;
