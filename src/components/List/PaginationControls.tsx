import { cn } from "@/lib/utils";
import { useEntityStore } from "@/store/entityStore";
import { PaginationControlsProps } from "@/types";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationControls({ entityType, totalPages }: PaginationControlsProps) {
  const next = useEntityStore((state) => state.next);
  const previous = useEntityStore((state) => state.previous);
  const currentPage = useEntityStore((state) => state.currentPage);
  const count = useEntityStore((state) => state.count);
  const fetchEntities = useEntityStore((state) => state.fetchEntities);

  const paginationButtonStyles = cn(
    "relative text-theme-primary",
    "hover:text-theme-primary/80 hover:bg-theme-primary/10",
    "active:scale-95 disabled:opacity-50",
    "transition-all duration-200 ease-out",
    "after:absolute after:inset-0 after:rounded-md",
    "after:shadow-[0_0_15px_rgba(0,191,255,0.3)]",
    "after:opacity-0 hover:after:opacity-100",
    "after:transition-opacity"
  );

  return (
    <Pagination className="my-5">
      <PaginationContent className="grid items-center justify-between px-2">
        <PaginationItem className="flex items-center gap-2 justify-center">
          <span className="font-orbitron text-sm text-muted-foreground">
            Found {count} {entityType}
          </span>
        </PaginationItem>
        <div className="flex gap-2">
          {previous && (
            <PaginationItem>
              <PaginationPrevious
                onClick={() => fetchEntities(entityType, previous)}
                href="#"
                className={paginationButtonStyles}
              >
                Previous
              </PaginationPrevious>
            </PaginationItem>
          )}

          <PaginationItem className="font-orbitron text-sm text-muted-foreground self-center">
            Page {currentPage} of {totalPages}
          </PaginationItem>

          {next && (
            <PaginationItem>
              <PaginationNext
                onClick={() => fetchEntities(entityType, next)}
                href="#"
                className={paginationButtonStyles}
              >
                Next
              </PaginationNext>
            </PaginationItem>
          )}
        </div>
      </PaginationContent>
    </Pagination>
  );
}
