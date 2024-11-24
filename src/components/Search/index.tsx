import { SearchField } from "./SearchField";
import { SearchIntro } from "./SearchIntro";
import { SearchResults } from "./SearchResults";

export function Search() {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
      <SearchIntro />
      <div className="w-full max-w-xl">
        <SearchField />
      </div>

      <div className="w-full max-w-3xl mt-4">
        <SearchResults />
      </div>
    </div>
  );
}
