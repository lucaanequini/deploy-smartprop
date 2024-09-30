import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

interface WelcomeProps {
    userId: string
    userName: string
}

export const Welcome = ({ userId, userName }: WelcomeProps) => {
    const router = useRouter()
    return (
        <div className="w-full px-5 pt-5">
            <div className="flex flex-col gap-y-3 sm:flex-row justify-between items-center">
                <h1 className="text-default 2xl:text-lg">Olá, <span className="font-medium text-light-green">{userName}</span>! Aqui você pode visualizar e informar seus exames.</h1>
                <Button variant="green" className="w-[160px]" onClick={() => router.push(`/${userId}/carrinho`)}>Contratar um plano</Button>
            </div>
        </div>
    )
}