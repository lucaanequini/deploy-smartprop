'use client'

import { useEffect, useState } from "react"

import { useRouter } from "next/navigation"

import { Spinner } from "@/components/spinner";

import { Welcome } from "./_components/welcome";

import userService from "@/services/userService";

import { Navbar } from "@/components/navbar";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./_components/columns";
import { set } from "zod";

export default function HomePage({
    params
}: { params: { userId: string } }) {
    const [loading, setLoading] = useState(true)
    const [userInfo, setUserInfo] = useState('')
    const [userExams, setUserExams] = useState([])

    const token = typeof window !== 'undefined' ? localStorage.getItem("smartprop-token") : null;

    useEffect(() => {
        if (token) {
            getUserInfo()
            getUserExams()
        }
    }, [])

    const getUserInfo = async () => {
        if (token) {
            const res = await userService.getUserInfo(params.userId, token)
            if (res.status === 200) {
                setUserInfo(res.data.nome)
            }
            setLoading(false)
        }
    }

    const getUserExams = async () => {
        if (token) {
            try {
                const res = await userService.getUserExams(params.userId, token)
                if (res.status === 200) {
                    console.log('chegou')
                    setUserExams(res.data.products)
                }
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
    }

    return (
        <>
            <Navbar />
            <div className="w-full h-full sm:h-screen flex flex-col bg-slate-50">
                {loading &&
                    <div className="w-full flex justify-center mt-5">
                        <Spinner />
                    </div>
                }
                {userInfo && !loading &&
                    <>
                        <Welcome userId={params.userId} userName={userInfo} />
                        <div className="p-5">
                            <DataTable columns={columns} data={userExams} searchKey="description" />
                        </div>
                    </>
                }
            </div>
        </>
    )
}