import { useState, useEffect } from "react";
import { useSearchStore } from "@/store/searchStore";
import SearchResults from "./SearchResults";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebounce";

function SearchField() {
  const [term, setTerm] = useState("");
  const debouncedTerm = useDebounce(term, 300);
  const { setSearchTerm, fetchResults, clearResults } = useSearchStore();

  useEffect(() => {
    if (debouncedTerm === "") {
      clearResults();
    } else {
      setSearchTerm(debouncedTerm);
      fetchResults(debouncedTerm);
    }
  }, [debouncedTerm, setSearchTerm, fetchResults, clearResults]);

  return (
    <div className="relative">
      <Input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search..."
      />
      <SearchResults />
    </div>
  );
}

export default SearchField;
