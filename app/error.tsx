'use client'

import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

const Error = () => {
    const router = useRouter()
    return (
        <div className="h-screen flex flex-col gap-y-5 items-center justify-center">
            <p className="text-4xl font-bold text-white">Algo deu errado!</p>
            <Button variant='green' onClick={() => router.push('/')}>Voltar</Button>
        </div>
    )
}

export default Error;