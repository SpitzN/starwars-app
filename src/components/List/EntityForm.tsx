import React, { useState } from "react";
import { useEntityStore } from "@/store/entityStore";
import { Entity, EntityType } from "@/types/entity.types";
import { hasName, hasTitle } from "@/utils/typeGuards";
import {
  DialogPortal,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
// import { mapStringToEntityType } from "@/utils/entityTypeMapper";

interface EntityFormProps {
  entityType: EntityType;
  isEditing: boolean;
  entity?: Entity;
}

function EntityForm({ entityType, isEditing, entity }: EntityFormProps) {
  // const mappedEntityType = mapStringToEntityType(entityType);

  const [formData, setFormData] = useState<Entity>(entity || ({} as Entity));
  console.log("formData", formData);

  const { addEntity, updateEntity } = useEntityStore((state) => ({
    addEntity: state.addEntity,
    updateEntity: state.updateEntity,
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      updateEntity(entityType, formData.uuid, formData);
    } else {
      addEntity(entityType, formData);
    }
  };

  return (
    <DialogPortal>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Edit" : "Create"} {entityType}
          </DialogTitle>
          <DialogDescription>
            "Fill out the form below to create or edit an entity."
          </DialogDescription>
        </DialogHeader>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            {/* {isPeople(entityType) ? "Name" : "Title"} */}
            <input
              type="text"
              name={hasName(formData) ? "name" : "title"}
              value={
                (hasName(formData)
                  ? formData.name
                  : hasTitle(formData)
                  ? formData.title
                  : "") || ""
              }
              onChange={handleChange}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </label>
        </div>

        <Button
          type="submit"
          className="text-white
          px-4
          py-2"
          onClick={handleSubmit}
        >
          {isEditing ? "Update" : "Create"}
        </Button>
      </DialogContent>
    </DialogPortal>
  );
}

export default EntityForm;
