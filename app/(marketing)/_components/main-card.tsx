import { CalendarClock, DollarSign, LoaderCircle } from "lucide-react"

export const MainCard = () => {
    return (
        <div className="bg-white flex flex-col gap-y-5 gap-x-10 sm:flex-row sm:gap-x-5 mx-5 xl:mx-40 rounded-2xl p-5 justify-between mb-10 -mt-5 lg:-mt-10 shadow-bottom lg:py-9"
            data-aos='fade-up'>
            <div className="flex flex-col">
                <div className="flex gap-x-4 mb-2">
                    <CalendarClock className="w-12 h-12 xl:w-16 xl:h-16 text-light-green" strokeWidth={1} />
                    <p className="text-3xl sm:text-2xl lg:text-4xl font-semibold text-dark-green">45 dias</p>
                </div>
                <p className="text-sm text-dark-green xl:max-w-60 xl:ml-24 xl:-mt-7">Este é o prazo máximo para você alcançar a aprovação nos nossos exames. Atingir o sucesso em nossos desafios está ao seu alcance. Opere no seu ritmo para alcançar resultados consistentes.</p>
            </div>
            <div className="flex flex-col">
                <div className="flex gap-x-4 mb-2">
                    <DollarSign className="w-12 h-12 xl:w-16 xl:h-16 text-light-green" strokeWidth={1} />
                    <p className="text-3xl sm:text-2xl lg:text-4xl font-semibold text-dark-green">Perda Máx.</p>
                </div>
                <p className="text-sm text-dark-green xl:max-w-60 xl:ml-24 xl:-mt-7">Plano com limites confortáveis para se encaixar com seu operacional! Você tem o controle nas mãos!</p>
            </div>
            <div className="flex flex-col">
                <div className="flex gap-x-4 mb-2">
                    <LoaderCircle className="w-12 h-12 xl:w-16 xl:h-16 text-light-green" strokeWidth={1} />
                    <p className="text-3xl sm:text-2xl lg:text-4xl font-semibold text-dark-green xl:max-w-48">Bônus por perfomance</p>
                </div>
                <p className="text-sm text-dark-green xl:max-w-60 xl:ml-24">Receba estímulos para continuar operando de maneira consistente e seja premiado com bônus que aumentarão seu percentual de repasse em até 35%!</p>
            </div>
        </div >
    )
}