import type { Entity, EntityType } from "../entities";

export interface EntityFormProps<T extends Entity> {
  entityType: EntityType;
  entity?: T;
  isEditing?: boolean;
  onClose: (open: boolean) => void;
}

export interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
