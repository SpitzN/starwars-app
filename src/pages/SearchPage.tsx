import SearchField from "@/components/Search/SearchField";
import SearchResults from "@/components/Search/SearchResults";

const SearchPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <header className="space-y-6 mb-8">
          <h1 className="text-4xl font-starJedi">
            Welcome to Star Wars Explorer Your gateway to the galaxy
          </h1>
          <div className="space-y-2">
            <h6 className="font-orbitron">Discover the Star Wars Universe</h6>
            <p className="text-sm text-muted-foreground font-orbitron">
              Search through characters, planets, starships, vehicles, species, and films
            </p>
          </div>
        </header>

        <div className="w-full max-w-xl">
          <SearchField />
        </div>

        <div className="w-full max-w-3xl mt-4">
          <SearchResults />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
