'use client'

import { useEffect, useState } from "react"

import { useRouter } from "next/navigation"

import { Spinner } from "@/components/spinner";

import authService from "@/services/authService";

export default function HomePage() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const checkAuthToken = async () => {
            const token = localStorage.getItem("smartprop-token")
            if (token !== null) {
                const res = await authService.checkToken(token)
                console.log(res)
                if (res == true) {
                    router.push('/home')
                    setLoading(false)
                } else {
                    setLoading(false)
                    console.log('Token inválido')
                    router.push("/login")
                }
            } else {
                setLoading(false)
                router.push("/login")
                console.log('Token inválido')
            }
        }
        checkAuthToken()
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