import React, { useState } from "react";
import { useEntityStore } from "@/store/entityStore";
import { Entity } from "@/types/entity.types";
import { hasName, hasTitle, isPeople, isFilm } from "@/utils/typeGuards";

interface EntityFormProps {
  entityType: string;
  entity?: Entity;
  onClose: () => void;
}

const EntityForm: React.FC<EntityFormProps> = ({
  entityType,
  entity,
  onClose,
}) => {
  const isEditing = !!entity;
  const [formData, setFormData] = useState<Entity>(entity || ({} as Entity));
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
      updateEntity(entityType, formData.url, formData);
    } else {
      addEntity(entityType, formData);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-4 rounded w-1/3">
        <h2 className="text-2xl mb-4">
          {isEditing ? "Edit" : "Create"} {entityType}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name/Title
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

          {isPeople(formData) && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Birth Year
                  <input
                    type="text"
                    name="birth_year"
                    value={formData.birth_year || ""}
                    onChange={handleChange}
                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Gender
                  <input
                    type="text"
                    name="gender"
                    value={formData.gender || ""}
                    onChange={handleChange}
                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </label>
              </div>
              {/* Add other fields specific to People entity */}
            </>
          )}

          {isFilm(formData) && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Director
                  <input
                    type="text"
                    name="director"
                    value={formData.director || ""}
                    onChange={handleChange}
                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Producer
                  <input
                    type="text"
                    name="producer"
                    value={formData.producer || ""}
                    onChange={handleChange}
                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </label>
              </div>
              {/* Add other fields specific to Film entity */}
            </>
          )}

          {/* Add conditional fields for other entity types here using similar pattern */}

          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-4">
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {isEditing ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EntityForm;
