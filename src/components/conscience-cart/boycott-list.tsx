"use client";

import * as React from "react";
import Image from "next/image";
import type { ColumnDef, SortingState } from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  Link as LinkIcon,
  MoreVertical,
  Search,
  Flag,
  MessageSquarePlus,
  TriangleAlert,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ModerationForm } from "@/components/conscience-cart/moderation-form";
import type { Company } from "@/types";

type ModerationState = {
  isOpen: boolean;
  company: Company | null;
  type: "flag" | "suggest" | "report" | null;
};

export function BoycottList({ companies }: { companies: Company[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [moderationState, setModerationState] = React.useState<ModerationState>({
    isOpen: false,
    company: null,
    type: null,
  });

  const handleModeration = (
    company: Company,
    type: "flag" | "suggest" | "report"
  ) => {
    setModerationState({ isOpen: true, company, type });
  };

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
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Company
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="font-semibold text-base">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "category",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("category")}</div>
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
    {
      id: "source",
      header: () => <div className="text-center">Source</div>,
      cell: ({ row }) => (
        <div className="text-center">
          <Button asChild variant="ghost" size="icon">
            <a
              href={row.original.source}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Source for ${row.original.name}`}
            >
              <LinkIcon className="h-5 w-5" />
            </a>
          </Button>
        </div>
      ),
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const company = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleModeration(company, "flag")}>
                <Flag className="mr-2 h-4 w-4" />
                <span>Flag for Review</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleModeration(company, "suggest")}
              >
                <MessageSquarePlus className="mr-2 h-4 w-4" />
                <span>Suggest Correction</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleModeration(company, "report")}
              >
                <TriangleAlert className="mr-2 h-4 w-4" />
                <span>Report Inaccuracy</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data: companies,
    columns,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter,
    },
  });

  const moderationTitles = {
    flag: "Flag for Review",
    suggest: "Suggest a Correction",
    report: "Report Inaccuracy",
  };

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for a company or category..."
            value={globalFilter ?? ""}
            onChange={(event) => setGlobalFilter(event.target.value)}
            className="w-full pl-10 h-12 text-lg rounded-md shadow-sm"
          />
        </div>
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
                  No results found for "{globalFilter}".
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

      <Dialog
        open={moderationState.isOpen}
        onOpenChange={(isOpen) =>
          setModerationState((prev) => ({ ...prev, isOpen }))
        }
      >
        <DialogContent className="sm:max-w-[480px]">
          {moderationState.company && moderationState.type && (
            <>
              <DialogHeader>
                <DialogTitle>
                  {moderationTitles[moderationState.type]}:{" "}
                  {moderationState.company.name}
                </DialogTitle>
                <DialogDescription>
                  Your feedback is valuable for maintaining the integrity of this
                  list. All submissions are reviewed by moderators.
                </DialogDescription>
              </DialogHeader>
              <ModerationForm
                company={moderationState.company}
                type={moderationState.type}
                onFinished={() =>
                  setModerationState({
                    isOpen: false,
                    company: null,
                    type: null,
                  })
                }
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
