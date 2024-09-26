'use client'

import { useEffect, useState } from "react"

import { useRouter } from "next/navigation"

import { Spinner } from "@/components/spinner";

import { Welcome } from "./_components/welcome";

import userService from "@/services/userService";

import { Navbar } from "@/components/navbar";

export default function HomePage({
    params
}: { params: { userId: string } }) {
    const [loading, setLoading] = useState(true)
    const [userInfo, setUserInfo] = useState('')

    const token = typeof window !== 'undefined' ? localStorage.getItem("smartprop-token") : null;

    useEffect(() => {
        if (token) {
            getUserInfo()
        }
    }, [params.userId])

    const getUserInfo = async () => {
        if (token) {
            const res = await userService.getUserInfo(params.userId, token)
            if (res.status === 200) {
                setUserInfo(res.data.nome)
            }
            setLoading(false)
        }
    }

    return (
        <>
            <Navbar />
            <div className="w-full h-screen flex flex-col gap-y-5 bg-slate-50">
                {loading &&
                    <div className="w-full flex justify-center mt-5">
                        <Spinner />
                    </div>
                }
                {userInfo && !loading &&
                    <Welcome userId={userInfo} />
                }
            </div>
        </>
    )
}