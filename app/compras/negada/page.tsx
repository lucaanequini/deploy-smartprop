'use client'

import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

const DeniedPage = () => {
    const router = useRouter()
    return (
        <div className="w-full mt-40 flex flex-col sm:flex-row gap-20 justify-center items-center mx-8 sm:mx-0">
            <div className="flex flex-col gap-y-3 sm:w-[45%]">
                <p className="border border-light-green rounded-3xl p-2 px-4 text-sm text-white w-36">Ops! Nada feito</p>
                <p className="text-3xl sm:text-5xl font-bold text-white leading-snug">Sua compra não foi aprovada!</p>
                <p className="text-white">Toda a sua grana permanece intacta, segura e sonolenta na sua conta. Sim, nenhuma moedinha foi para a aventura desta vez.</p>
                <div className="flex flex-col items-center sm:flex-row gap-3">
                    <Button className="rounded-3xl w-44 mt-3 bg-white text-light-green hover:border border-white hover:bg-transparent hover:text-white" onClick={() => router.push(`/login`)}>Voltar</Button>
                </div>
            </div>
            <img src="/logo.png" alt="Logo" className="w-32 h-20 sm:w-40 sm:h-24" />
        </div>
    )
}

export default DeniedPage;