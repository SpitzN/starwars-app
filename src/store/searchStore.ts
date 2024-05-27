import { create } from "zustand";
import { Entity } from "@/types/entity.types";
import { api } from "./api";
import { ENDPOINTS } from "@/constants";

interface SearchState {
  searchTerm: string;
  results: { [key: string]: Entity[] };
  loading: boolean;
  error: string | null;
  setSearchTerm: (term: string) => void;
  fetchResults: (term: string) => void;
  clearResults: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchTerm: "",
  results: {},
  loading: false,
  error: null,
  setSearchTerm: (term) => set({ searchTerm: term }),
  fetchResults: async (term: string) => {
    set({ loading: true, error: null });

    try {
      const promises = ENDPOINTS.map((endpoint) =>
        api.get(`${endpoint}?search=${term}`)
      );

      const responses = await Promise.all(promises);

      const results = responses.reduce((acc, response, index) => {
        const key = ENDPOINTS[index];
        acc[key] = response.data.results.slice(0, 3) as Entity[];
        return acc;
      }, {} as { [key: string]: Entity[] });

      set({ results, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch results", loading: false });
    }
  },
  clearResults: () => set({ results: {}, searchTerm: "" }),
}));
