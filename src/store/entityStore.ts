import { create } from "zustand";
import { Entity } from "@/types/entity.types";
import { api } from "./api";
import { API_BASE_URL } from "@/constants";

interface EntityState {
  entities: { [key: string]: Entity[] };
  singleEntity: Entity | null;
  loading: boolean;
  error: string | null;
  next: string | null;
  previous: string | null;
  count: number | null;
  currentPage: number;
  addEntity: (type: string, entity: Entity) => void;
  removeEntity: (type: string, id: string) => void;
  updateEntity: (type: string, id: string, updatedEntity: Entity) => void;
  fetchEntities: (type: string, pageUrl?: string) => void;
  fetchSingleEntity: (relativeUrl: string) => void;
}

export const useEntityStore = create<EntityState>((set) => ({
  entities: {},
  singleEntity: null,
  loading: false,
  error: null,
  next: null,
  previous: null,
  count: null,
  currentPage: 1,
  addEntity: (type, entity) =>
    set((state) => ({
      entities: {
        ...state.entities,
        [type]: [...(state.entities[type] || []), entity],
      },
    })),
  removeEntity: (type, id) =>
    set((state) => ({
      entities: {
        ...state.entities,
        [type]: state.entities[type].filter((entity) => entity.url !== id),
      },
    })),
  updateEntity: (type, id, updatedEntity) =>
    set((state) => ({
      entities: {
        ...state.entities,
        [type]: state.entities[type].map((entity) =>
          entity.url === id ? updatedEntity : entity
        ),
      },
    })),
  fetchEntities: async (type: string, pageUrl?: string) => {
    set({ loading: true, error: null });
    const url = pageUrl || `${API_BASE_URL}${type}`;
    try {
      const response = await api.get(url);
      const page = pageUrl ? new URL(pageUrl).searchParams.get("page") : "1";
      set((state) => ({
        entities: {
          ...state.entities,
          [type]: response.data.results,
        },
        next: response.data.next,
        previous: response.data.previous,
        count: response.data.count,
        currentPage: page ? parseInt(page, 10) : 1,
        loading: false,
      }));
    } catch (error) {
      set({ error: "Failed to fetch entities", loading: false });
    }
  },
  fetchSingleEntity: async (relativeUrl: string) => {
    set({ loading: true, error: null, singleEntity: null });
    try {
      const response = await api.get(`${relativeUrl}`);
      set({ singleEntity: response.data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch entity", loading: false });
    }
  },
}));
