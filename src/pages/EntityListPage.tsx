import { useParams } from "react-router-dom";
import { List } from "@/components/List";
import { mapStringToEntityType } from "@/utils/entityUtils";

function EntityListPage() {
  const { type } = useParams<{ type: string }>();

  const entityType = type ? mapStringToEntityType(type) : null;

  if (!entityType) {
    return <div className="container mx-auto p-4">Invalid entity type.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <List entityType={entityType} />
    </div>
  );
}

export default EntityListPage;
