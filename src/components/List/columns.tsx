import { ColumnDef } from "@tanstack/react-table";
import { Entity, EntityType } from "@/types/entity.types";
import DataTableActions from "./DataTableActions";

const getActionsColumn = (entityType: EntityType): ColumnDef<Entity> => ({
  header: "Actions",
  cell: ({ row }) => (
    <DataTableActions entity={row.original} entityType={entityType} />
  ),
});

export const peopleColumns: ColumnDef<Entity>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Birth Year",
    accessorKey: "birth_year",
  },
  {
    header: "Gender",
    accessorKey: "gender",
  },
  {
    header: "Height",
    accessorKey: "height",
  },
  {
    header: "Mass",
    accessorKey: "mass",
  },
  {
    header: "Hair Color",
    accessorKey: "hair_color",
  },
  {
    header: "Skin Color",
    accessorKey: "skin_color",
  },
  getActionsColumn(EntityType.People),
];

export const planetColumns: ColumnDef<Entity>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Population",
    accessorKey: "population",
  },
  getActionsColumn(EntityType.Planets),
];

export const filmColumns: ColumnDef<Entity>[] = [
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "Director",
    accessorKey: "director",
  },
  getActionsColumn(EntityType.Films),
];

export const starshipColumns: ColumnDef<Entity>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Model",
    accessorKey: "model",
  },
  getActionsColumn(EntityType.Starships),
];

export const speciesColumns: ColumnDef<Entity>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Classification",
    accessorKey: "classification",
  },
  getActionsColumn(EntityType.Species),
];

export const vehicleColumns: ColumnDef<Entity>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Model",
    accessorKey: "model",
  },
  getActionsColumn(EntityType.Vehicles),
];
