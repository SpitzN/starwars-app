import { useEntityStore } from "@/store/entityStore";
import { EntityType } from "@/types/entity.types";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationControlsProps {
  entityType: EntityType;
  totalPages: number;
}

function PaginationControls({
  entityType,
  totalPages,
}: PaginationControlsProps) {
  const { currentPage, count, previous, next, fetchEntities } = useEntityStore(
    (state) => ({
      currentPage: state.currentPage,
      count: state.count,
      previous: state.previous,
      next: state.next,
      fetchEntities: state.fetchEntities,
    })
  );

  return (
    <Pagination className="my-5">
      <PaginationContent>
        <PaginationItem>
          Page {currentPage} of {totalPages} (Total: {count})
        </PaginationItem>

        {previous && (
          <PaginationItem>
            <PaginationPrevious
              onClick={() => fetchEntities(entityType, previous)}
              href="#"
              className="curser px-4 py-2"
            >
              Previous
            </PaginationPrevious>
          </PaginationItem>
        )}
        {next && (
          <PaginationItem>
            <PaginationNext
              onClick={() => fetchEntities(entityType, next)}
              className="curser px-4 py-2"
              href="#"
            >
              Next
            </PaginationNext>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationControls;
