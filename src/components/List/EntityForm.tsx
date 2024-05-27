import React, { useState, useEffect } from "react";
import { useEntityStore } from "@/store/entityStore";
import {
  Entity,
  EntityType,
  People,
  Film,
  Vehicle,
  Species,
  Starship,
  Planet,
} from "@/types/entity.types";
import {
  DialogPortal,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

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
  const [formData, setFormData] = useState<T>(entity || ({} as T));

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
    switch (entityType) {
      case EntityType.People:
        return (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
                <Input
                  type="text"
                  name="name"
                  value={(formData as People).name || ""}
                  onChange={handleChange}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Birth Year
                <Input
                  type="text"
                  name="birth_year"
                  value={(formData as People).birth_year || ""}
                  onChange={handleChange}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Gender
                <Input
                  type="text"
                  name="gender"
                  value={(formData as People).gender || ""}
                  onChange={handleChange}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Height
                <Input
                  type="text"
                  name="height"
                  value={(formData as People).height || ""}
                  onChange={handleChange}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Mass
                <Input
                  type="text"
                  name="mass"
                  value={(formData as People).mass || ""}
                  onChange={handleChange}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Hair Color
                <Input
                  type="text"
                  name="hair_color"
                  value={(formData as People).hair_color || ""}
                  onChange={handleChange}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Skin Color
                <Input
                  type="text"
                  name="skin_color"
                  value={(formData as People).skin_color || ""}
                  onChange={handleChange}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
            </div>
          </>
        );
      case EntityType.Films:
        return (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Title
                <Input
                  type="text"
                  name="title"
                  value={(formData as Film).title || ""}
                  onChange={handleChange}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Director
                <Input
                  type="text"
                  name="director"
                  value={(formData as Film).director || ""}
                  onChange={handleChange}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
            </div>
            {/* Add other Film specific fields */}
          </>
        );
      case EntityType.Planets:
        return (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
                <Input
                  type="text"
                  name="name"
                  value={(formData as Planet).name || ""}
                  onChange={handleChange}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Population
                <Input
                  type="text"
                  name="population"
                  value={(formData as Planet).population || ""}
                  onChange={handleChange}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
            </div>
            {/* Add other Planet specific fields */}
          </>
        );
      case EntityType.Starships:
        return (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
                <Input
                  type="text"
                  name="name"
                  value={(formData as Starship).name || ""}
                  onChange={handleChange}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Model
                <Input
                  type="text"
                  name="model"
                  value={(formData as Starship).model || ""}
                  onChange={handleChange}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
            </div>
            {/* Add other Starship specific fields */}
          </>
        );
      case EntityType.Species:
        return (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
                <Input
                  type="text"
                  name="name"
                  value={(formData as Species).name || ""}
                  onChange={handleChange}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Classification
                <Input
                  type="text"
                  name="classification"
                  value={(formData as Species).classification || ""}
                  onChange={handleChange}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
            </div>
            {/* Add other Species specific fields */}
          </>
        );
      case EntityType.Vehicles:
        return (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
                <Input
                  type="text"
                  name="name"
                  value={(formData as Vehicle).name || ""}
                  onChange={handleChange}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Model
                <Input
                  type="text"
                  name="model"
                  value={(formData as Vehicle).model || ""}
                  onChange={handleChange}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
            </div>
            {/* Add other Vehicle specific fields */}
          </>
        );
      default:
        return null;
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
