import React, { useState, useEffect } from "react";
import { useEntityStore } from "@/store/entityStore";
import { Entity, EntityType } from "@/types/entity.types";
import {
  DialogPortal,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FormField from "./FormField";
import { fieldMapping, getDefaultValues } from "@/utils/entityUtils";

interface EntityFormProps<T extends Entity> {
  entityType: EntityType;
  isEditing: boolean;
  entity?: T;
  onClose: (open: boolean) => void;
}

function EntityForm<T extends Entity>({
  entityType,
  isEditing,
  entity,
  onClose,
}: EntityFormProps<T>) {
  const [formData, setFormData] = useState<T>(
    entity || (getDefaultValues(entityType) as T)
  );

  const { addEntity, updateEntity } = useEntityStore((state) => ({
    addEntity: state.addEntity,
    updateEntity: state.updateEntity,
  }));

  useEffect(() => {
    if (entity) {
      setFormData(entity);
    }
  }, [entity]);

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
      updateEntity(formData.uuid, formData);
    } else {
      addEntity(formData);
    }
    onClose(false);
  };

  const renderFields = () => {
    const fields = fieldMapping[entityType];
    return fields.map((field) => (
      <FormField
        key={field.name}
        label={field.label}
        name={field.name}
        value={formData[field.name as keyof T] as string}
        onChange={handleChange}
      />
    ));
  };

  return (
    <DialogPortal>
      <DialogContent className="sm:max-w-3/6 overflow-scroll max-h-96">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Edit" : "Create"} {entityType}
          </DialogTitle>
          <DialogDescription>
            Fill out the form below to create or edit an entity.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          {renderFields()}
          <div className="flex justify-end mt-4">
            <Button
              onClick={() => onClose(false)}
              type="button"
              className="mr-4"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {isEditing ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </DialogPortal>
  );
}

export default EntityForm;
