import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { Entity } from "@/types";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "@/constants";
import { DataTableProps } from "@/types/components";

export function DataTable<TData extends Entity, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const navigate = useNavigate();

  const handleRowClick = (entity: Entity) => {
    const relativeUrl = entity.url.replace(API_BASE_URL, "");
    navigate(`/entity/${relativeUrl}`);
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow className="hover:bg-transparent" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="bg-theme-primary/5 text-theme-primary font-orbitron"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              className="group hover:bg-theme-accent/5 hover:cursor-pointer transition-colors"
            >
              {row.getVisibleCells().map((cell) =>
                cell.column.id === "actions" ? (
                  <TableCell key={cell.id} className="py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ) : (
                  <TableCell
                    key={cell.id}
                    className="py-2"
                    onClick={() => handleRowClick(row.original)}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
