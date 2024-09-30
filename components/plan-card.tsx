import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"

import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"

interface CardProps {
    title: string
    value: string
    approvalGoal: string
    dailyRisk: string
    maxLoss: string
    contracts: number
    recomended?: boolean
    onCart?: boolean
}

export const PlanCard = ({ title, value, approvalGoal, dailyRisk, maxLoss, contracts, recomended, onCart }: CardProps) => {
    const router = useRouter()
    return (
        <>

            <div className={cn(`h-[400px] flex flex-col justify-between bg-white rounded-xl p-5 py-10 shadow-plans`,
                recomended && `border-4 border-light-green`,
                onCart ? 'w-[320px] sm:w-[270px] h-[280px] items-center sm:items-start sm:h-[300px]' : 'h-[400px] w-[270px]'
            )}>
                {recomended && (
                    <p className={cn("relative text-white py-1 px-5 -mt-14 ml-10 text-sm bg-light-green rounded-xl w-36",
                        onCart && 'ml-0 sm:ml-9')}>
                        Recomendado</p>
                )}
                <div className="flex flex-col items-center gap-5">
                    <p className="tracking-widest font-bold text-dark-green text-3xl">{title}</p>
                    {!onCart && (
                        <div className="flex items-center text-dark-green gap-1">
                            <p className=" font-semibold">R$</p>
                            <span className="font-bold">{value}</span>
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-y-2 text-black">
                    <div className="flex gap-2">
                        <Check className="w-4 h-4" />
                        <p className="text-xs">Meta de aprovação <span className="font-bold">R$ {approvalGoal},00</span></p>
                    </div>
                    <div className="flex gap-2">
                        <Check className="w-4 h-4" />
                        <p className="text-xs">Máx. de risco diário <span className="font-bold">R$ {dailyRisk},00</span></p>
                    </div>
                    <div className="flex gap-2">
                        <Check className="w-4 h-4" />
                        <p className="text-xs">Limite de perda máx. <span className="font-bold">R$ {maxLoss},00</span></p>
                    </div>
                    <div className="flex gap-2">
                        <Check className="w-4 h-4" />
                        <p className="text-xs">Repasse de <span className="font-bold">90% + Bônus</span></p>
                    </div>
                    <div className="flex gap-2">
                        <Check className="w-4 h-4" />
                        <p className="text-xs">60 dias</p>
                    </div>
                    <div className="flex gap-2">
                        <Check className="w-4 h-4" />
                        <p className="text-xs">{contracts} contratos</p>
                    </div>
                </div>
                {!onCart && <Button variant='green' onClick={() => router.push('/login')} className="shadow-3xl rounded-xl">Contratar</Button>}
            </div>
        </>
    )
}