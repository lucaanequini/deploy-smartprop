'use client'

import { LoginForm } from "./_components/login-form";

import authService from "@/services/authService";

import { useRouter } from "next/navigation"
import { useEffect } from "react";
import { toast } from "sonner";

export default function LoginPage() {
    const router = useRouter()

    const token = typeof window !== 'undefined' ? localStorage.getItem("smartprop-token") : null;
    const checkAuthToken = async () => {
        if (token) {
            const res = await authService.checkToken(token)
            if (res === true) {
                router.push("/home")
            } else {
                toast.error("Sessão expirada! Faça login novamente.")
            }
        }
    }

    useEffect(() => {
        checkAuthToken()
    }, [])

    return (
        <div className="w-full h-screen flex flex-col gap-y-5 items-center justify-center">
            <div>
                <img src="/logo.png" alt="Logo" className="w-20 h-13" />
            </div>
            <LoginForm />
        </div>
    )
}