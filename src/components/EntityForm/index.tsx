import React, { useState, useEffect } from "react";
import { useEntityStore } from "@/store/entityStore";
import { Entity, EntityFormProps } from "@/types";
import {
  DialogPortal,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FormField } from "./FormField";
import { fieldMapping, getDefaultValues } from "@/utils/entityUtils";
import { cn } from "@/lib/utils";

export function EntityForm<T extends Entity>({
  entityType,
  entity,
  isEditing = false,
  onClose,
}: EntityFormProps<T>) {
  const [formData, setFormData] = useState<T>(entity || (getDefaultValues(entityType) as T));
  const addEntity = useEntityStore((state) => state.addEntity);
  const updateEntity = useEntityStore((state) => state.updateEntity);

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
      <DialogContent className="sm:max-w-3/6 overflow-scroll max-h-[80vh] bg-card border-theme-accent/20">
        <DialogHeader>
          <DialogTitle className="font-orbitron text-2xl text-theme-primary">
            {isEditing ? "Edit" : "Create"} {entityType}
          </DialogTitle>
          <DialogDescription>
            Fill out the form below to create or edit an entity.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {renderFields()}
          <div className="flex justify-end gap-4 mt-6">
            <Button
              type="button"
              variant="ghost"
              onClick={() => onClose(false)}
              className="text-theme-primary hover:bg-theme-primary/10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className={cn(
                "bg-theme-primary hover:bg-theme-primary/90",
                "relative after:absolute after:inset-0",
                "after:rounded-md after:shadow-[0_0_15px_rgba(0,191,255,0.3)]",
                "after:opacity-0 hover:after:opacity-100",
                "after:transition-opacity"
              )}
            >
              {isEditing ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </DialogPortal>
  );
}
