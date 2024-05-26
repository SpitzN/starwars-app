import { v4 as uuidv4 } from "uuid";
import { RawEntity, Entity, EntityType } from "@/types/entity.types";

export function transformEntity(
  rawEntity: RawEntity,
  entityType: EntityType
): Entity {
  return {
    ...rawEntity,
    uuid: uuidv4(),
    entityType,
  } as Entity;
}
