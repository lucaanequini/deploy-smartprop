'use client'

import { useEffect, useState } from "react"

import { Spinner } from "@/components/spinner";

import { Welcome } from "./_components/welcome";

import userService from "@/services/userService";

import { Navbar } from "@/components/navbar";

import { DataTable } from "@/components/ui/data-table";

import { columns, ExamColumn } from "./_components/columns";
import { toast } from "sonner";

export default function HomePage({
    params
}: { params: { userId: string } }) {
    const [loading, setLoading] = useState(true)
    const [loadingTable, setLoadingTable] = useState(true)
    const [userInfo, setUserInfo] = useState('')
    const [userExams, setUserExams] = useState<ExamColumn[]>([])

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
                    const formattedRes: ExamColumn[] = res.data.products.map((exam: any) => ({
                        id: exam.id,
                        description: exam.description,
                        createdAt: new Date(exam.created_at).toLocaleDateString(),
                        statusDetails: exam.status_details,
                        platform: exam.platform_name,
                        initDate: new Date(exam.start_date).toLocaleDateString(),
                        endDate: new Date(exam.end_date).toLocaleDateString()
                    }))
                    setUserExams(formattedRes)
                }
            } catch (error) {
                if (error instanceof Error) {
                    toast.error(error.message)
                } else {
                    toast.error("An unknown error occurred")
                }
            } finally {
                setLoadingTable(false)
            }
        }
    }

    return (
        <div className="w-full h-full min-h-screen flex flex-col bg-slate-50">
            <Navbar />
            {loading &&
                <div className="w-full flex justify-center mt-5">
                    <Spinner />
                </div>
            }
            {userInfo && !loading &&
                <>
                    <Welcome userId={params.userId} userName={userInfo} />
                    <div className="w-full p-5">
                        {loadingTable ? (
                            <div className="flex justify-center">
                                <Spinner />
                            </div>
                        ) : (
                            <DataTable columns={columns} data={userExams} searchKey="description" />
                        )}
                    </div>
                </>
            }
        </div>
    )
}