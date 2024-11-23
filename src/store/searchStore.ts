import { Entity, SearchState } from "@/types";
import { api } from "./api";
import { ENDPOINTS } from "@/constants";
import { create } from "zustand";

export const useSearchStore = create<SearchState>((set) => ({
  searchTerm: "",
  results: {},
  loading: false,
  error: null,
  setSearchTerm: (term) => set({ searchTerm: term }),
  clearResults: () => set({ results: {}, searchTerm: "" }),
  fetchResults: async (term: string) => {
    set({ loading: true, error: null });

    try {
      const promises = ENDPOINTS.map((endpoint) => api.get(`${endpoint}?search=${term}`));
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
}));
