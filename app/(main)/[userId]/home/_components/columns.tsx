"use client"

import { ColumnDef } from "@tanstack/react-table"

export type ExamColumn = {
    description: string
    createdAt: string
    statusDetails: string
}

export const columns: ColumnDef<ExamColumn>[] = [
    {
        accessorKey: "description",
        header: "Plano",
    },
    {
        accessorKey: "status_details",
        header: "Status",
    },
    {
        accessorKey: "created_at",
        header: "Data",
    }
]