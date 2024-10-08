import { Button } from "@/components/ui/button"

export const FirstView = () => {
    return (
        <div className="md:bg-transparent flex flex-col sm:flex-row justify-center gap-y-10 items-center sm:gap-x-10 xl:gap-x-48"
            data-aos='fade-left'
        >
            <div className="flex flex-col gap-5 mx-9 sm:mx-0 sm:max-w-[33%]">
                <p className="text-2xl sm:text-3xl xl:text-5xl font-semibold text-light-green leading-snug">Liberte o trader de sucesso que há em você!</p>
                <p className="text-light-gray">Seu futuro começa hoje! Construa seu futuro financeiro sem colocar seu capital em risco! O risco é por nossa conta!</p>
                <Button variant='green' className="rounded-full shadow-3xl w-40 xl:mx-auto mt-5">Quero fazer parte</Button>
            </div>
            <img src="/bonecos.png" alt="Bonecos" className="w-[300px] sm:w-[350px] xl:w-[400px] h-full" />
        </div>
    )
}