
"use client";

import * as React from "react";
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  FilterFn,
} from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const globalFilterFn: FilterFn<any> = (row, columnId, value, addMeta) => {
  const companyName = row.getValue("Company Name") as string;
  const subBrands =
    (row.getValue("Sub-companies / Brands") as { Brands: string })?.Brands ||
    "";

  const searchableContent = `${companyName} ${subBrands}`.toLowerCase();

  return searchableContent.includes(String(value).toLowerCase());
};

export function BoycottList({ companies }: { companies: Company[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] =
    React.useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [isSpilling, setIsSpilling] = React.useState(false);

  const categories = React.useMemo(() => {
    const uniqueCategories = new Set(
      companies.map((c) => c.Category).filter(Boolean).sort()
    );
    return ["All Categories", ...Array.from(uniqueCategories)];
  }, [companies]);

  const countries = React.useMemo(() => {
    const uniqueCountries = new Set(
      companies.map((c) => c.Country).filter(Boolean).sort()
    );
    return ["All Countries", ...Array.from(uniqueCountries)];
  }, [companies]);

  const columns: ColumnDef<Company>[] = [
    {
      accessorKey: "Category",
      header: () => <div className="text-center">Category</div>,
      cell: ({ row }) => (
        <div className="p-1 text-xs sm:text-sm sm:p-2 md:p-4 w-28 sm:w-32 md:w-36 text-center">
          {row.getValue("Category")}
        </div>
      ),
    },
    {
      accessorKey: "Company Name",
      header: () => <div className="text-center">Company</div>,
      cell: ({ row }) => (
        <div className="font-semibold p-1 text-xs sm:text-sm sm:p-2 md:p-4 w-24 sm:w-28 md:w-32 text-center">
          {row.getValue("Company Name")}
        </div>
      ),
    },
    {
      accessorKey: "Involvement",
      header: () => <div className="text-center">Involvement</div>,
      cell: ({ row }) => (
        <div className="text-muted-foreground max-w-sm sm:max-w-md md:max-w-lg p-1 text-xs sm:text-sm sm:p-2 md:p-4 text-center">
          {row.getValue("Involvement")}
        </div>
      ),
    },
    {
      accessorKey: "Sub-companies / Brands",
      header: () => <div className="text-center">Sub-companies</div>,
      cell: ({ row }) => {
        const value = row.getValue("Sub-companies / Brands") as {
          Brands: string;
        };
        const brands = value?.Brands?.trim();
        return (
          <div className="p-1 text-xs sm:text-sm sm:p-2 md:p-4 w-20 sm:w-24 md:w-28 text-center">
            {brands ? brands : "N/A"}
          </div>
        );
      },
    },
    {
      accessorKey: "Country",
      header: () => <div className="text-center">Country</div>,
      cell: ({ row }) => (
        <div className="p-1 text-xs sm:text-sm sm:p-2 md:p-4 w-24 sm:w-28 md:w-32 text-center">
          {row.getValue("Country")}
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: companies,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: globalFilterFn,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize: 20,
      },
    },
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
  });

  const handleRowClick = () => {
    setIsSpilling(true);
  };

  return (
    <div className="w-full">
      {isSpilling && (
        <RedSpillEffect onCompleted={() => setIsSpilling(false)} />
      )}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pb-4">
        <Input
          placeholder="Search by company or brand..."
          value={globalFilter ?? ""}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="max-w-xl border-2 w-full"
        />
        <div className="flex gap-4 w-full sm:w-auto">
          <Select
            value={
              (table.getColumn("Category")?.getFilterValue() as string) ?? "All Categories"
            }
            onValueChange={(value) =>
              table.getColumn("Category")?.setFilterValue(value === "All Categories" ? undefined : value)
            }
          >
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={
              (table.getColumn("Country")?.getFilterValue() as string) ?? "All Countries"
            }
            onValueChange={(value) =>
              table.getColumn("Country")?.setFilterValue(value === "All Countries" ? undefined : value)
            }
          >
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by Country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="rounded-lg border shadow-sm bg-card">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="first:pl-2 sm:first:pl-4"
                  >
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
                  className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="py-2 sm:py-3 first:pl-2 sm:first:pl-4"
                    >
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
