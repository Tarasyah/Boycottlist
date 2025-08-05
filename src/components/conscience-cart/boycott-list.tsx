
"use client";

import * as React from "react";
import type {
  ColumnDef,
  ColumnFiltersState,
} from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import type { Company } from "@/types";
import { RedSpillEffect } from "./red-spill-effect";

export function BoycottList({ companies }: { companies: Company[] }) {
  const [columnFilters, setColumnFilters] =
    React.useState<ColumnFiltersState>([]);
  const [isSpilling, setIsSpilling] = React.useState(false);

  const columns: ColumnDef<Company>[] = [
    {
      accessorKey: "Category",
      header: "Category",
      cell: ({ row }) => <div>{row.getValue("Category")}</div>,
    },
    {
      accessorKey: "Company Name",
      header: "Company",
      cell: ({ row }) => (
        <div className="font-semibold">{row.getValue("Company Name")}</div>
      ),
    },
    {
      accessorKey: "Involvement",
      header: "Involvement",
      cell: ({ row }) => (
        <div className="text-muted-foreground max-w-sm">
          {row.getValue("Involvement")}
        </div>
      ),
    },
    {
      accessorKey: "Sub-companies / Brands",
      header: "Sub-companies",
      cell: ({ row }) => {
        const value = row.getValue("Sub-companies / Brands") as { Brands: string };
        const brands = value?.Brands?.trim();
        return <div>{brands ? brands : "N/A"}</div>;
      },
    },
    {
      accessorKey: "Country",
      header: "Country",
      cell: ({ row }) => <div>{row.getValue("Country")}</div>,
    },
  ];

  const table = useReactTable({
    data: companies,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  const handleRowClick = () => {
    setIsSpilling(true);
  };

  return (
    <div className="w-full">
       {isSpilling && <RedSpillEffect onCompleted={() => setIsSpilling(false)} />}
      <div className="flex justify-center items-center py-4">
        <Input
          placeholder="search by company name"
          value={(table.getColumn("Company Name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("Company Name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-lg border shadow-sm bg-card">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="first:pl-4">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={handleRowClick}
                  className="cursor-pointer"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-3 px-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No companies found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
