'use client'

import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

const PendingPage = () => {
    const router = useRouter()
    return (
        <div className="w-full mt-40 flex flex-col sm:flex-row gap-20 justify-center items-center mx-8">
            <div className="flex flex-col gap-y-3 w-[98%] sm:w-[45%]">
                <p className="border border-light-green rounded-3xl p-2 px-3 text-sm text-white w-24">Quase lá!</p>
                <p className="text-3xl sm:text-5xl font-bold text-white leading-snug">Sua compra está pendente!</p>
                <p className="text-white">Estamos quase lá! Sua compra foi gerada mas ainda está pendente, assim que conluída você terá acesso a todos os benefícios. </p>
                <Button variant="green" className="rounded-3xl w-44 mt-3" onClick={() => router.push('/home')}>Acessar plataforma!</Button>
            </div>
            <img src="/logo.png" alt="Logo" className="w-32 h-20 sm:w-40 sm:h-24" />
        </div>
    )
}

export default PendingPage;