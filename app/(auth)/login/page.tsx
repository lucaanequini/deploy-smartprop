'use client'

import { LoginForm } from "./_components/login-form";

import authService from "@/services/authService";

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function LoginPage() {
    const router = useRouter()
    const [userId, setUserId] = useState<string>("");
    const token = typeof window !== 'undefined' ? localStorage.getItem("smartprop-token") : null;
    const checkAuthToken = async () => {
        if (token) {
            try {
                const res = await authService.checkToken(token)
                console.log(res)
                if (res.data.valid === true) {
                    setUserId(res.data.user_id)
                    router.push(`/${res.data.user_id}/home`)
                } else {
                    toast.error("Sessão expirada! Faça login novamente.")
                }
            } catch (error) {
                toast.error("Sessão expirada! Faça login novamente.")
            }
        }
    }

    useEffect(() => {
        checkAuthToken()
    }, [])

    return (
        <div className="w-full h-full sm:h-screen my-5 flex flex-col gap-y-5 items-center justify-center">
            <div>
                <img src="/logoRoboBranco.svg" alt="Logo" className="w-24 h-20" />
            </div>
            <LoginForm userId={userId} />
        </div>
    )
}