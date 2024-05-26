import React from "react";
import { useParams } from "react-router-dom";
import EntityDetails from "@/components/EntityDetails";

const EntityPage: React.FC = () => {
  const { "*": relativeUrl } = useParams<{ "*": string }>();

  if (!relativeUrl) {
    return <div className="container mx-auto p-4">Invalid entity URL.</div>;
  }

  return <EntityDetails relativeUrl={relativeUrl} />;
};

export default EntityPage;
