import { useSearchStore } from "@/store/searchStore";
import SearchResultItem from "./SearchResultItem";
import { useNavigate } from "react-router-dom";
import { Entity } from "@/types/entity.types";
import { API_BASE_URL } from "@/constants";

const SearchResults = () => {
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
          <div key={category} className="p-2">
            <h3 className="text-lg font-semibold capitalize">{category}</h3>
            {results[category].map((result: Entity) => (
              <div
                key={result.url}
                onClick={() => handleResultClick(result)}
                className="cursor-pointer"
              >
                <SearchResultItem result={result} searchTerm={searchTerm} />
              </div>
            ))}
            <button
              className="text-blue-500"
              onClick={() => handleViewAllClick(category)}
            >
              View All
            </button>
          </div>
        ))}
    </div>
  );
};

export default SearchResults;
