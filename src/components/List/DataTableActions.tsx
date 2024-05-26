import { useEntityStore } from "@/store/entityStore";
import EntityForm from "./EntityForm";
import { Button } from "../ui/button";
import { EntityType, Entity } from "@/types/entity.types";
import { Dialog, DialogTrigger } from "../ui/dialog";

interface DataTableActionsProps {
  entity: Entity;
  entityType: EntityType;
}

function DataTableActions({ entity, entityType }: DataTableActionsProps) {
  const { removeEntity } = useEntityStore((state) => ({
    removeEntity: state.removeEntity,
  }));

  const handleDelete = () => {
    removeEntity(entityType, entity.uuid);
  };

  return (
    <div className="flex justify-end space-x-2 opacity-0 group-hover:opacity-100">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="text-blue-500">Edit</Button>
        </DialogTrigger>
        <EntityForm entityType={entityType} entity={entity} isEditing={true} />
      </Dialog>
      <Button onClick={handleDelete} className="text-red-500 ml-4">
        Delete
      </Button>
    </div>
  );
}

export default DataTableActions;
