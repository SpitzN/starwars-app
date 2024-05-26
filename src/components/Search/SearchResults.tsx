import { useSearchStore } from "@/store/searchStore";
import SearchResultItem from "./SearchResultItem";
import { useNavigate } from "react-router-dom";
import { Entity } from "@/types/entity.types";
import { API_BASE_URL } from "@/constants";
import { Separator } from "@/components/ui/separator";
import { ArrowRightCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function SearchResults() {
  const { results, searchTerm, loading, error } = useSearchStore();
  const navigate = useNavigate();

  if (!searchTerm) return null;

  const handleViewAllClick = (category: string) => {
    navigate(`/entities/${category}`);
  };

  const handleResultClick = (entity: Entity) => {
    const relativeUrl = entity.url.replace(API_BASE_URL, "");
    navigate(`entity/${relativeUrl}`);
  };

  return (
    <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded mt-1 z-10">
      {loading && <div className="p-2 text-center">Loading...</div>}
      {error && <div className="p-2 text-center text-red-500">{error}</div>}
      {!loading &&
        !error &&
        Object.keys(results).map((category) => (
          <Table key={category} className="p-2">
            <TableHeader>
              <TableHead className="text-lg font-semibold capitalize">
                {category}
              </TableHead>
            </TableHeader>
            <Separator />
            <TableBody>
              {results[category].map((result: Entity) => (
                <TableRow
                  key={result.url}
                  onClick={() => handleResultClick(result)}
                  className="cursor-pointer"
                >
                  <TableCell className="py-1">
                    <SearchResultItem result={result} searchTerm={searchTerm} />
                  </TableCell>
                </TableRow>
              ))}
              <TableCell
                className="text-blue-500 cursor-pointer flex justify-start items-center gap-3"
                onClick={() => handleViewAllClick(category)}
              >
                View All {category}
                <ArrowRightCircle size={16} />
              </TableCell>
              <Separator />
            </TableBody>
          </Table>
        ))}
    </div>
  );
}

export default SearchResults;
