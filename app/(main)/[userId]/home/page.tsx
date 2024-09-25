'use client'

import { useEffect, useState } from "react"

import { useRouter } from "next/navigation"

import { Spinner } from "@/components/spinner";

import authService from "@/services/authService";

import { Welcome } from "./_components/welcome";
import userService from "@/services/userService";
import paymentService from "@/services/paymentService";

export default function HomePage({
    params
}: { params: { userId: string } }) {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [userInfo, setUserInfo] = useState('')

    const token = typeof window !== 'undefined' ? localStorage.getItem("smartprop-token") : null;

    useEffect(() => {
        if (token) {
            getUserInfo()
        }
    }, [params.userId])

    useEffect(() => {
        if (token !== null) {
            checkAuthToken()
        } else {
            router.push('/login')
        }
    }, [])

    const getUserInfo = async () => {
        if (token) {
            const res = await userService.getUserInfo(params.userId, token)
            if (res.status === 200) {
                setUserInfo(res.data.nome)
            }
        }
    }

    const createPayment = async () => {
        if (token) {
            const res = await paymentService.createPayment(token)
            if (res.status === 201) {
                window.open(res.payment_link, '_blank')
            }
        }
    }

    const checkAuthToken = async () => {
        if (token) {
            try {
                const res = await authService.checkToken(token)
                if (res.error) {
                    router.push("/login")
                }
                if (res === false) {
                    router.push("/login")
                }
            } catch (error) {
                console.error("Error checking token:", error)
                router.push("/login")
            }
        } else {
            router.push("/login")
        }
        setLoading(false)
    }

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <Spinner />
            </div>
        )
    }

    return (
        <div className="w-full h-screen flex flex-col gap-y-5 mt-5">
            {userInfo &&
                <Welcome userId={userInfo} onPlanClick={createPayment} />
            }
        </div>
    )
}