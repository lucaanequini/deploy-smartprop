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
        cell: ({ row }) => row.original.initDate ? row.original.initDate : "Pendente",
    },
    {
        accessorKey: "endDate",
        header: "Data Fim",
    },
    {
        id: 'actions',
        cell: ({ row }) => <CellAction data={row.original} />
    }
]