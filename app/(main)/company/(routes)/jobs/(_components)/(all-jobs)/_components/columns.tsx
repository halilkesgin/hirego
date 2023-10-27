"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type JobsColumn = {
    id: string
    name: string;
    value: string;
    updatedAt: string;
}

export const columns: ColumnDef<JobsColumn>[] = [
    {
        accessorKey: "name",
        header: "Job",
    },
    {
        accessorKey: "status",
        header: "Status"
    },
    {
        accessorKey: "updatedAt",
        header: "Updated",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    },
];