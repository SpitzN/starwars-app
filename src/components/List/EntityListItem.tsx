// src/components/List/EntityListItem.tsx
import React, { useState } from "react";
import { useEntityStore } from "@/store/entityStore";
import EntityForm from "./EntityForm";
import { Entity } from "@/types/entity.types";

interface EntityListItemProps {
  entity: Entity;
  entityType: string;
}

const EntityListItem: React.FC<EntityListItemProps> = ({
  entity,
  entityType,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const { removeEntity } = useEntityStore((state) => ({
    removeEntity: state.removeEntity,
  }));

  const handleDelete = () => {
    removeEntity(entityType, entity.url);
  };

  return (
    <tr>
      <td className="py-2">
        {("name" in entity && entity.name) ||
          ("title" in entity && entity.title)}
      </td>
      <td className="py-2">
        <button onClick={() => setIsEditing(true)} className="text-blue-500">
          Edit
        </button>
        <button onClick={handleDelete} className="text-red-500 ml-4">
          Delete
        </button>
        {isEditing && (
          <EntityForm
            entityType={entityType}
            entity={entity}
            onClose={() => setIsEditing(false)}
          />
        )}
      </td>
    </tr>
  );
};

export default EntityListItem;
