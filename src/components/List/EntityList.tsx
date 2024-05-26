import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useEntityStore } from "@/store/entityStore";
import EntityListItem from "./EntityListItem";
import EntityForm from "./EntityForm";

interface EntityListProps {
  entityType: string;
}

const EntityList: React.FC<EntityListProps> = ({ entityType }) => {
  const {
    entities,
    fetchEntities,
    loading,
    error,
    next,
    previous,
    count,
    currentPage,
  } = useEntityStore((state) => ({
    entities: state.entities,
    fetchEntities: state.fetchEntities,
    loading: state.loading,
    error: state.error,
    next: state.next,
    previous: state.previous,
    count: state.count,
    currentPage: state.currentPage,
  }));

  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    fetchEntities(entityType);
  }, [fetchEntities, entityType]);

  const entityList = entities[entityType] || [];
  const totalPages = count ? Math.ceil(count / entityList.length) : 1;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 capitalize">{entityType}</h1>
      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      {!loading && !error && (
        <>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Name/Title</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {entityList.map((entity) => (
                <EntityListItem
                  key={entity.url || uuidv4()}
                  entity={entity}
                  entityType={entityType}
                />
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4">
            <div>
              Page {currentPage} of {totalPages} (Total: {count})
            </div>
            <div className="flex space-x-2">
              {previous && (
                <button
                  onClick={() => fetchEntities(entityType, previous)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Previous
                </button>
              )}
              {next && (
                <button
                  onClick={() => fetchEntities(entityType, next)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Next
                </button>
              )}
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={() => setIsCreating(true)}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Create {entityType.slice(0, -1)}
            </button>
          </div>
        </>
      )}
      {isCreating && (
        <EntityForm
          entityType={entityType}
          onClose={() => setIsCreating(false)}
        />
      )}
    </div>
  );
};

export default EntityList;
