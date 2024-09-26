'use client'

import { Pencil } from "lucide-react"

import { useState } from "react"

import userService from "@/services/userService"

import { Button } from "@/components/ui/button"

import { AlertModal } from "@/components/modals/status-modal"

import { toast, Toaster } from "sonner"

import { ExamColumn } from "./columns"

interface CellActionProps {
    data: ExamColumn
}

export const CellAction: React.FC<CellActionProps> = ({
    data
}) => {
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)

    const token = typeof window !== 'undefined' ? localStorage.getItem("smartprop-token") : null;

    const onSubmit = async () => {
        try {
            if (token) {
                const res = await userService.setDateExam(data.id, token)
                if (res.status === 200) {
                    toast.success(res.data.message)
                    window.location.reload();
                }

            }
        } catch (error) {
            toast.error('Algo deu errado.')
        } finally {
            setLoading(false)
            setOpen(false)
        }
    }
    console.log(data.initDate)
    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onSubmit}
                loading={loading}
            />
            <Button className='font-medium' variant="green" onClick={() => setOpen(true)} disabled={(data.statusDetails === "iniciado")}>
                <Pencil className='mr-2 h-4 w-4' />
                Edit
            </Button>
            <Toaster />
        </>
    )
}