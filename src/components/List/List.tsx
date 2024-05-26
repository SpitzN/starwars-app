import { useEffect, useMemo } from "react";
import { EntityType } from "@/types/entity.types";
import { useEntityStore } from "@/store/entityStore";
import EntityForm from "./EntityForm";
import DataTable from "./DataTable";
import PaginationControls from "./PaginationControls";
import {
  peopleColumns,
  planetColumns,
  filmColumns,
  starshipColumns,
  speciesColumns,
  vehicleColumns,
} from "./columns";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";

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

  // const [isCreating, setIsCreating] = useState(false);

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

  const entityList = entities[entityType] || [];
  const totalPages = count ? Math.ceil(count / entityList.length) : 1;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 capitalize">{entityType}</h1>
      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      {!loading && !error && (
        <>
          {/* <DataTable columns={columns} data={entityList} /> */}
          <DataTable columns={columns} data={entityList} />
          <PaginationControls entityType={entityType} totalPages={totalPages} />
          <div className="flex justify-end mt-4">
            <Dialog aria-label={`Create ${entityType}`}>
              <DialogTrigger asChild>
                <Button className="bg-green-500 text-white px-4 py-2 rounded">
                  Create {entityType.slice(0, -1)}
                </Button>
              </DialogTrigger>
              <EntityForm entityType={entityType} isEditing={false} />
            </Dialog>
          </div>
        </>
      )}
    </div>
  );
}

export default EntityList;
