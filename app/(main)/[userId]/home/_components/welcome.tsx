import { Button } from "@/components/ui/button";

interface WelcomeProps {
    userId: string
    onPlanClick: () => void
}

export const Welcome = ({ userId, onPlanClick }: WelcomeProps) => {

    return (
        <div className="w-full h-screen px-5">
            <div className="flex flex-col gap-y-3 sm:flex-row justify-between items-center">
                <h1 className="text-default 2xl:text-lg">Olá, <span className="font-medium text-light-green">{userId}</span>! Aqui você pode visualizar e informar seus exames.</h1>
                <Button variant="green" className="w-[50%] sm:w-[150px]" onClick={onPlanClick}>Contratar um plano</Button>
            </div>
        </div>
    )
}