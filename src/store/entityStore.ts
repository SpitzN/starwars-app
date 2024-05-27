import { create } from "zustand";
import axios from "axios";
import { RawEntity, Entity, EntityType } from "@/types/entity.types";
import { API_BASE_URL } from "@/constants";
import { transformEntity } from "@/utils/transform";

interface EntityState {
  entities: Entity[];
  singleEntity: Entity | null;
  loading: boolean;
  error: string | null;
  next: string | null;
  previous: string | null;
  count: number | null;
  currentPage: number;
  addEntity: (entity: Entity) => void;
  removeEntity: (id: string) => void;
  updateEntity: (id: string, updatedEntity: Entity) => void;
  fetchEntities: (type: EntityType, pageUrl?: string) => void;
  fetchSingleEntity: (relativeUrl: string) => void;
}

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
      entities: state.entities.map((entity) =>
        entity.uuid === id ? updatedEntity : entity
      ),
    })),
  fetchEntities: async (type: EntityType, pageUrl?: string) => {
    set({ loading: true, error: null });
    const url = pageUrl || `${API_BASE_URL}${type}`;
    try {
      const response = await axios.get(url);
      const page = pageUrl ? new URL(pageUrl).searchParams.get("page") : "1";
      const transformedEntities = response.data.results.map(
        (rawEntity: RawEntity) => transformEntity(rawEntity, type)
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

// import { create } from "zustand";
// import axios from "axios";
// import { RawEntity, Entity, EntityType } from "@/types/entity.types";
// import { API_BASE_URL } from "@/constants";
// import { transformEntity } from "@/utils/transform";

// interface EntityState {
//   entities: { [key in EntityType]?: Entity[] };
//   singleEntity: Entity | null;
//   loading: boolean;
//   error: string | null;
//   next: string | null;
//   previous: string | null;
//   count: number | null;
//   currentPage: number;
//   addEntity: (type: EntityType, entity: Entity) => void;
//   removeEntity: (type: EntityType, id: string) => void;
//   updateEntity: (type: EntityType, id: string, updatedEntity: Entity) => void;
//   fetchEntities: (type: EntityType, pageUrl?: string) => void;
//   fetchSingleEntity: (relativeUrl: string) => void;
// }

// export const useEntityStore = create<EntityState>((set) => ({
//   entities: {},
//   singleEntity: null,
//   loading: false,
//   error: null,
//   next: null,
//   previous: null,
//   count: null,
//   currentPage: 1,
//   addEntity: (type, entity) =>
//     set((state) => ({
//       entities: {
//         ...state.entities,
//         [type]: [...(state.entities[type] || []), entity],
//       },
//     })),
//   removeEntity: (type, id) =>
//     set((state) => ({
//       entities: {
//         ...state.entities,
//         [type]: state.entities[type]?.filter((entity) => entity.uuid !== id),
//       },
//     })),
//   updateEntity: (type, id, updatedEntity) =>
//     set((state) => ({
//       entities: {
//         ...state.entities,
//         [type]: state.entities[type]?.map((entity) =>
//           entity.uuid === id ? updatedEntity : entity
//         ),
//       },
//     })),
//   fetchEntities: async (type: EntityType, pageUrl?: string) => {
//     set({ loading: true, error: null });
//     const url = pageUrl || `${API_BASE_URL}${type}`;
//     try {
//       const response = await axios.get(url);
//       const page = pageUrl ? new URL(pageUrl).searchParams.get("page") : "1";
//       const transformedEntities = response.data.results.map(
//         (rawEntity: RawEntity) => transformEntity(rawEntity, type)
//       );
//       set((state) => ({
//         entities: {
//           ...state.entities,
//           [type]: transformedEntities,
//         },
//         next: response.data.next,
//         previous: response.data.previous,
//         count: response.data.count,
//         currentPage: page ? parseInt(page, 10) : 1,
//         loading: false,
//       }));
//     } catch (error) {
//       set({ error: "Failed to fetch entities", loading: false });
//     }
//   },
//   fetchSingleEntity: async (relativeUrl: string) => {
//     set({ loading: true, error: null, singleEntity: null });
//     try {
//       const response = await axios.get(`${API_BASE_URL}${relativeUrl}`);
//       const entityType = relativeUrl.split("/")[0] as EntityType;
//       set({
//         singleEntity: transformEntity(response.data, entityType),
//         loading: false,
//       });
//     } catch (error) {
//       set({ error: "Failed to fetch entity", loading: false });
//     }
//   },
// }));
