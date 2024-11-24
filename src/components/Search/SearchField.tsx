import { useEffect, useRef } from "react";
import { useSearchStore } from "@/store/searchStore";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebounce";
import { useState } from "react";
import { Search } from "lucide-react";

export function SearchField() {
  const setSearchTerm = useSearchStore((state) => state.setSearchTerm);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedValue = useDebounce(inputValue, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    setSearchTerm(debouncedValue);
  }, [debouncedValue, setSearchTerm]);

  return (
    <div className="relative">
      <Input
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        className="pl-10"
        placeholder="Search..."
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
    </div>
  );
}
