import { EntityType } from "@/types";

type BackgroundType = EntityType | "search" | "error" | "loading" | "galaxy";

export const useBackground = (type: BackgroundType) => `/images/${type}_background.webp`;
