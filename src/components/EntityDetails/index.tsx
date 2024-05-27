import { useEffect } from "react";
import { useEntityStore } from "@/store/entityStore";
import { Entity, EntityType } from "@/types/entity.types";
import { mapStringToEntityType, fieldMapping } from "@/utils/entityUtils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface EntityDetailsProps {
  relativeUrl: string;
}

function EntityDetails({ relativeUrl }: EntityDetailsProps) {
  const { singleEntity, loading, error, fetchSingleEntity } = useEntityStore();

  useEffect(() => {
    if (relativeUrl) fetchSingleEntity(relativeUrl);
  }, [relativeUrl, fetchSingleEntity]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  const entityType = mapStringToEntityType(relativeUrl.split("/")[0]);

  if (!entityType || !singleEntity) {
    return <div className="text-center text-red-500">Invalid entity type</div>;
  }

  const renderEntityDetails = (entity: Entity, entityType: EntityType) => {
    const fields = fieldMapping[entityType];
    return (
      <CardContent>
        {fields.map((field) => (
          <CardDescription key={field.name}>
            <span>{field.label}:</span> {entity[field.name as keyof Entity]}
          </CardDescription>
        ))}
      </CardContent>
    );
  };

  return (
    <Card className="container mx-auto p-4">
      <CardHeader>
        <CardTitle className="text-3xl font-bold mb-4">
          {"name" in singleEntity ? singleEntity.name : singleEntity.title}
        </CardTitle>
      </CardHeader>

      {renderEntityDetails(singleEntity, entityType)}
    </Card>
  );
}

export default EntityDetails;
