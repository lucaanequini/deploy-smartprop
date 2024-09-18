'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"

import { LoginForm } from "./_components/login-form";
import { Spinner } from "@/components/spinner";

export default function LoginPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!sessionStorage.getItem('onebitflix-token')) {
            router.push('/login')
        } else {
            setLoading(false)
        }
    }, [])

    // if (loading) {
    //     return <Spinner />
    // }
    return (
        <div className="w-full h-screen flex flex-col gap-y-5 items-center justify-center">
            <div>
                <img src="/logo.png" alt="Logo" className="w-20 h-13" />
            </div>
            <LoginForm />
        </div>
    )
}