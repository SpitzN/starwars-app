import { useCallback, useEffect } from "react";
import { useSearchStore } from "@/store/searchStore";
import { useNavigate } from "react-router-dom";
import { Entity } from "@/types";
import { API_BASE_URL } from "@/constants";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import { ErrorMessage } from "@/components/shared/ErrorMessage";
import { CategoryCard } from "./CategoryCard";

function SearchResults() {
  const navigate = useNavigate();
  const searchTerm = useSearchStore((state) => state.searchTerm);
  const results = useSearchStore((state) => state.results);
  const loading = useSearchStore((state) => state.loading);
  const error = useSearchStore((state) => state.error);
  const fetchResults = useSearchStore((state) => state.fetchResults);
  const clearResults = useSearchStore((state) => state.clearResults);

  const handleViewAllClick = useCallback(
    (category: string) => {
      navigate(`/entities/${category}`);
    },
    [navigate]
  );

  const handleResultClick = useCallback(
    (entity: Entity) => {
      const relativeUrl = entity.url.replace(API_BASE_URL, "");
      navigate(`entity/${relativeUrl}`);
    },
    [navigate]
  );

  useEffect(() => {
    if (searchTerm.trim() === "") {
      clearResults();
    } else {
      fetchResults(searchTerm);
    }
  }, [searchTerm, fetchResults, clearResults]);

  if (!searchTerm.trim()) return null;

  return (
    <div className="w-full mt-4 space-y-4">
      {loading ? (
        <LoadingSpinner size="sm" />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          role="grid"
          aria-label="Search Results"
        >
          {Object.keys(results).map((category) => (
            <CategoryCard
              key={category}
              category={category}
              results={results[category]}
              searchTerm={searchTerm}
              onResultClick={handleResultClick}
              onViewAll={handleViewAllClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
