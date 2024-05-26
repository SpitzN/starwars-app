import { useState, useEffect } from "react";
import { useSearchStore } from "@/store/searchStore";
import SearchResults from "./SearchResults";
import { Input } from "@/components/ui/input";

const SearchField = () => {
  const [term, setTerm] = useState("");
  const { setSearchTerm, fetchResults } = useSearchStore();

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(term);
      fetchResults(term);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [term, setSearchTerm, fetchResults]);

  return (
    <div className="relative">
      <Input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search..."
        // className="w-full p-2 border border-gray-300 rounded"
      />
      <SearchResults />
    </div>
  );
};

export default SearchField;
