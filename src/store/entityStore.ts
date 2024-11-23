import { create } from "zustand";
import axios from "axios";
import { RawEntity, Entity, EntityType, EntityState } from "@/types";
import { API_BASE_URL } from "@/constants";
import { transformEntity } from "@/utils/entityUtils";

export const useEntityStore = create<EntityState>((set) => ({
  entities: [],
  singleEntity: null,
  loading: false,
  error: null,
  next: null,
  previous: null,
  count: null,
  currentPage: 1,
  addEntity: (entity) =>
    set((state) => ({
      entities: [...state.entities, entity],
    })),
  removeEntity: (id) =>
    set((state) => ({
      entities: state.entities.filter((entity) => entity.uuid !== id),
    })),
  updateEntity: (id, updatedEntity) =>
    set((state) => ({
      entities: state.entities.map((entity) => (entity.uuid === id ? updatedEntity : entity)),
    })),
  fetchEntities: async (type: EntityType, pageUrl?: string) => {
    set({ loading: true, error: null });
    const url = pageUrl || `${API_BASE_URL}${type}`;
    try {
      const response = await axios.get(url);
      const page = pageUrl ? new URL(pageUrl).searchParams.get("page") : "1";
      const transformedEntities = response.data.results.map((rawEntity: RawEntity) =>
        transformEntity(rawEntity, type)
      ) as Entity[];
      set({
        entities: transformedEntities,
        next: response.data.next,
        previous: response.data.previous,
        count: response.data.count,
        currentPage: page ? parseInt(page, 10) : 1,
        loading: false,
      });
    } catch (error) {
      set({ error: "Failed to fetch entities", loading: false });
    }
  },
  fetchSingleEntity: async (relativeUrl: string) => {
    set({ loading: true, error: null, singleEntity: null });
    try {
      const response = await axios.get(`${API_BASE_URL}${relativeUrl}`);
      const entityType = relativeUrl.split("/")[0] as EntityType;
      set({
        singleEntity: transformEntity(response.data, entityType),
        loading: false,
      });
    } catch (error) {
      set({ error: "Failed to fetch entity", loading: false });
    }
  },
}));
