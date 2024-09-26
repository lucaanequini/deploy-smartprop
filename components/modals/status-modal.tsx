'use client'

import { useEffect, useState } from "react"

import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"

interface AlertModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
    loading: boolean
}

export const AlertModal: React.FC<AlertModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    loading
}) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <Modal
            title="Definição de Data de Início"
            description="ATENÇÃO! Essa ação não poderá ser desfeita"
            isOpen={isOpen}
            onClose={onClose}
        >
            <p className="py-5">Ao confirmar, você estará informando a data de início de hoje, <span className="text-light-green font-medium">{new Date().toLocaleString()}</span>, como início de seu exame. </p>
            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                    disabled={loading}
                    variant='outline'
                    onClick={onClose}
                >
                    Cancel
                </Button>
                <Button
                    disabled={loading}
                    variant='green'
                    onClick={onConfirm}
                >
                    Continue
                </Button>
            </div>
        </Modal>
    )
}