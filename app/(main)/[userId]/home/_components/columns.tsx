"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type ExamColumn = {
    id: string
    description: string
    createdAt: string
    statusDetails: string
    platform: string
    initDate: string
    endDate: string
}

export const columns: ColumnDef<ExamColumn>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "createdAt",
        header: "Data",
    },
    {
        accessorKey: "description",
        header: "Plano",
    },
    {
        accessorKey: "platform",
        header: "Plataforma",
    },
    {
        accessorKey: "initDate",
        header: "Data Início",
        cell: ({ row }) => row.original.initDate === "31/12/1969" ? "Pendente" : row.original.initDate,
    },
    {
        accessorKey: "endDate",
        header: "Data Fim",
        cell: ({ row }) => row.original.endDate === "31/12/1969" ? "Pendente" : row.original.endDate,
    },
    {
        id: 'actions',
        cell: ({ row }) => <CellAction data={row.original} />
    }
]