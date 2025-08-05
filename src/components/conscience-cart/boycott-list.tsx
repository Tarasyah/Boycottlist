"use client";

import * as React from "react";
import Image from "next/image";
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
      accessorKey: "logo",
      header: () => <div className="sr-only">Logo</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-center p-1 bg-white rounded-md w-12 h-12 shadow-sm">
          <Image
            src={`https://placehold.co/40x40.png`}
            data-ai-hint={row.original.logo}
            alt={`${row.original.name} logo`}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      ),
      enableSorting: false,
    },
    {
      accessorKey: "name",
      header: "Company",
      cell: ({ row }) => (
        <div className="font-semibold text-base">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "reason",
      header: "Reason for Boycott",
      cell: ({ row }) => (
        <div className="text-muted-foreground max-w-sm">
          {row.getValue("reason")}
        </div>
      ),
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
          placeholder="Filter by company name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
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
                    <TableCell key={cell.id} className="py-3">
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
