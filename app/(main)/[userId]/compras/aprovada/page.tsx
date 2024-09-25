'use client'
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

const ApprovedPage = ({
    params
}: { params: { userId: string } }
) => {
    const router = useRouter()
    return (
        <div className="w-full mt-40 flex flex-col sm:flex-row gap-20 justify-center items-center mx-8 overflow-hidden">
            <div className="flex flex-col gap-y-3 sm:w-[45%]">
                <p className="border border-light-green rounded-3xl p-2 px-4 text-sm text-white w-24">Uhuuuu!</p>
                <p className="text-3xl sm:text-5xl font-bold text-white leading-snug">Sua compra foi aprovada!</p>
                <p className="text-white">Seja bem-vindo a melhor mesa de trading do Brasil! Estamos ansiosos para que possamos crescer juntos!</p>
                <Button variant="green" className="rounded-3xl w-44 mt-3" onClick={() => router.push(`/${params.userId}/home`)}>Prosseguir</Button>
            </div>
            <img src="/logo.png" alt="Logo" className="w-32 h-20 sm:w-40 sm:h-24" />
        </div>
    )
}

export default ApprovedPage;