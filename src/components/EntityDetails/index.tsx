import React, { useEffect } from "react";
import { useEntityStore } from "@/store/entityStore";
import { Entity } from "@/types/entity.types";

interface EntityDetailsProps {
  relativeUrl: string;
}

const EntityDetails: React.FC<EntityDetailsProps> = ({ relativeUrl }) => {
  const { singleEntity, loading, error, fetchSingleEntity } = useEntityStore();

  useEffect(() => {
    if (relativeUrl) fetchSingleEntity(relativeUrl);
  }, [relativeUrl, fetchSingleEntity]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  const renderEntityDetails = (entity: Entity) => {
    if ("birth_year" in entity) {
      // Render details for a "people" entity
      return (
        <div>
          <p>
            <strong>Birth Year:</strong> {entity.birth_year}
          </p>
          <p>
            <strong>Gender:</strong> {entity.gender}
          </p>
          <p>
            <strong>Height:</strong> {entity.height} cm
          </p>
          <p>
            <strong>Mass:</strong> {entity.mass} kg
          </p>
          <p>
            <strong>Hair Color:</strong> {entity.hair_color}
          </p>
          <p>
            <strong>Skin Color:</strong> {entity.skin_color}
          </p>
          <p>
            <strong>Eye Color:</strong> {entity.eye_color}
          </p>
        </div>
      );
    }

    // Placeholder for other entity types
    return <div>Details not available for this entity type.</div>;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        {singleEntity &&
          ("name" in singleEntity
            ? singleEntity.name
            : "title" in singleEntity
            ? singleEntity.title
            : "")}
      </h1>
      {singleEntity && renderEntityDetails(singleEntity)}
    </div>
  );
};

export default EntityDetails;
