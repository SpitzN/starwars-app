// src/pages/EntityListPage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import EntityList from "../components/List/EntityList";

const EntityListPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  if (!type) {
    return <div className="container mx-auto p-4">Invalid entity type.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <EntityList entityType={type} />
    </div>
  );
};

export default EntityListPage;
