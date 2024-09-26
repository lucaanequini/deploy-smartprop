import { Button } from "@/components/ui/button";

interface WelcomeProps {
    userId: string
}

export const Welcome = ({ userId }: WelcomeProps) => {

    return (
        <div className="w-full h-screen px-5 mt-5">
            <div className="flex flex-col gap-y-3 sm:flex-row justify-between items-center">
                <h1 className="text-default 2xl:text-lg">Olá, <span className="font-medium text-light-green">{userId}</span>! Aqui você pode visualizar e informar seus exames.</h1>
                <Button variant="green" className="w-[50%] sm:w-[150px]">Contratar um plano</Button>
            </div>
        </div>
    )
}