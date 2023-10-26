"use client";

import { DataTable } from "@/components/ui/data-table";

import { columns, JobsColumn } from "./columns";

interface CategoriesClientProps {
    data: JobsColumn[];
}

export const CategoriesClient: React.FC<CategoriesClientProps> = ({
  data
}) => {
    return (
        <DataTable searchKey="name" columns={columns} data={data} />
    );
};