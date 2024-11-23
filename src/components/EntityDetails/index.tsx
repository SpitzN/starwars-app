import { useEffect } from "react";
import { useEntityStore } from "@/store/entityStore";
import { Entity, EntityType } from "@/types";
import { mapStringToEntityType, fieldMapping } from "@/utils/entityUtils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import { ErrorMessage } from "@/components/shared/ErrorMessage";

interface EntityDetailsProps {
  relativeUrl: string;
}

function EntityDetails({ relativeUrl }: EntityDetailsProps) {
  const singleEntity = useEntityStore((state) => state.singleEntity);
  const loading = useEntityStore((state) => state.loading);
  const error = useEntityStore((state) => state.error);
  const fetchSingleEntity = useEntityStore((state) => state.fetchSingleEntity);

  useEffect(() => {
    if (relativeUrl) fetchSingleEntity(relativeUrl);
  }, [relativeUrl, fetchSingleEntity]);

  if (loading) return <LoadingSpinner size="lg" minHeight="min-h-[400px]" />;
  if (error) return <ErrorMessage message={error} variant="bordered" />;

  const entityType = mapStringToEntityType(relativeUrl.split("/")[0]);

  if (!entityType || !singleEntity) {
    return <ErrorMessage message="Invalid entity type" variant="bordered" />;
  }

  const renderEntityDetails = (entity: Entity, entityType: EntityType) => {
    const fields = fieldMapping[entityType];
    return (
      <CardContent className="grid gap-4">
        {fields.map((field) => (
          <div
            key={field.name}
            className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
          >
            <span className="font-orbitron text-sm text-theme-primary">{field.label}:</span>
            <span className="text-right">{entity[field.name as keyof Entity]}</span>
          </div>
        ))}
      </CardContent>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="border-theme-accent/20 bg-card transition-all duration-300 hover:shadow-lg">
        <CardHeader className="border-b border-theme-accent/10">
          <CardTitle className="text-3xl font-orbitron text-theme-primary">
            {"name" in singleEntity ? singleEntity.name : singleEntity.title}
          </CardTitle>
        </CardHeader>

        {renderEntityDetails(singleEntity, entityType)}
      </Card>
    </div>
  );
}

export default EntityDetails;
