"use client"

import { ColumnDef } from "@tanstack/react-table"

export type ProductColumn = {
    id: string
    name: string
    price: string
    category: string
    color: string
    isFeatured: boolean
    isArchived: boolean
    createdAt: string
    quantity: string
}

export const columns: ColumnDef<ProductColumn>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "isArchived",
        header: "Archived",
    },
    {
        accessorKey: "isFeatured",
        header: "Featured",
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "quantity",
        header: "Quantity",
    },
    {
        accessorKey: "createdAt",
        header: "Date",
    }
]