'use client'

import { useEffect, useState } from "react"

import { useRouter } from "next/navigation"

import { Spinner } from "@/components/spinner";

import authService from "@/services/authService";

import { Navbar } from "./_components/navbar";
import { Welcome } from "./_components/welcome";

export default function HomePage() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [token, setToken] = useState<string | null>(null)

    useEffect(() => {
        const storedToken = localStorage.getItem("smartprop-token")
        setToken(storedToken)
    }, [])

    const checkAuthToken = async () => {
        if (token) {
            const res = await authService.checkToken(token)
            if (res === false) {
                router.push("/login")
            }
        } else {
            router.push("/login")
        }
        setLoading(false)
    }

    useEffect(() => {
        if (token !== null) {
            console.log('chegou')
            checkAuthToken()
        }
    }, [token])


    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <Spinner />
            </div>
        )
    }

    return (
        <div className="w-full h-screen flex flex-col gap-y-5">
            <Navbar />
            <Welcome />
        </div>
    )
}