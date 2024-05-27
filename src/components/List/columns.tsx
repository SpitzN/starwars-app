import { ColumnDef } from "@tanstack/react-table";
import { Entity, EntityType } from "@/types/entity.types";
import DataTableActions from "./DataTableActions";

const getActionsColumn = (entityType: EntityType): ColumnDef<Entity> => ({
  header: "Actions",
  id: "actions",
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
  {
    header: "Diameter",
    accessorKey: "diameter",
  },
  {
    header: "Climate",
    accessorKey: "climate",
  },
  {
    header: "Gravity",
    accessorKey: "gravity",
  },
  {
    header: "Terrain",
    accessorKey: "terrain",
  },
  {
    header: "Surface Water",
    accessorKey: "surface_water",
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
  {
    header: "Producer",
    accessorKey: "producer",
  },
  {
    header: "Release Date",
    accessorKey: "release_date",
  },
  {
    header: "Opening Crawl",
    accessorKey: "opening_crawl",
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
  {
    header: "Manufacturer",
    accessorKey: "manufacturer",
  },
  {
    header: "Cost in Credits",
    accessorKey: "cost_in_credits",
  },
  {
    header: "Length",
    accessorKey: "length",
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
  {
    header: "Designation",
    accessorKey: "designation",
  },
  {
    header: "Average Height",
    accessorKey: "average_height",
  },
  {
    header: "Average Lifespan",
    accessorKey: "average_lifespan",
  },
  {
    header: "Language",
    accessorKey: "language",
  },
  {
    header: "Skin colors",
    accessorKey: "skin_colors",
  },
  {
    header: "Hair colors",
    accessorKey: "hair_colors",
  },
  {
    header: "Eye colors",
    accessorKey: "eye_colors",
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
  {
    header: "Manufacturer",
    accessorKey: "manufacturer",
  },
  {
    header: "Cost in Credits",
    accessorKey: "cost_in_credits",
  },
  {
    header: "Length",
    accessorKey: "length",
  },
  {
    header: "Max Atmosphering Speed",
    accessorKey: "max_atmosphering_speed",
  },
  {
    header: "Crew",
    accessorKey: "crew",
  },
  {
    header: "Passengers",
    accessorKey: "passengers",
  },
  {
    header: "Cargo Capacity",
    accessorKey: "cargo_capacity",
  },
  {
    header: "Consumables",
    accessorKey: "consumables",
  },
  getActionsColumn(EntityType.Vehicles),
];
