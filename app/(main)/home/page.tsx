'use client'

import { useEffect, useState } from "react"

import { useRouter } from "next/navigation"

import { Spinner } from "@/components/spinner";

export default function HomePage() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (!sessionStorage.getItem('smartprop-token')) {
            router.push('/login')
        } else {
            setLoading(false)
        }
    }, [])

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <Spinner />
            </div>
        )
    }

    return (
        <div className="w-full h-screen flex flex-col gap-y-5 items-center justify-center">
            Teste Auth
        </div>
    )
}