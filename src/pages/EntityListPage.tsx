import React from "react";
import { useParams } from "react-router-dom";
import EntityList from "../components/List/List";
import { mapStringToEntityType } from "@/utils/entityTypeMapper";

const EntityListPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  const entityType = type ? mapStringToEntityType(type) : null;

  if (!entityType) {
    return <div className="container mx-auto p-4">Invalid entity type.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <EntityList entityType={entityType} />
    </div>
  );
};

export default EntityListPage;
