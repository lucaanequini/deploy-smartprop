import { Goal, ArrowRight, NotebookPen, CheckCheck, HandCoins, ArrowDown, ArrowLeft } from "lucide-react"

export const Info = () => {
    return (
        <div className="h-full flex flex-col items-center gap-10 lg:gap-12 p-5 w-[90%] pb-20" data-aos='flip-up'>
            <p className="custom text-3xl sm:text-5xl xl:text-6xl font-bold text-dark-green">Repasse de 90%</p>
            <div className="flex flex-col items-center gap-7">
                <p className="text-sm sm:text-lg xl:text-xl text-black text-center mx-auto xl:max-w-[60%]">O risco é todo nosso! Alcance o valor de progressão do plano que aumentamos o seu número de contratos e limites financeiros.</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-y-3">
                <div className="flex flex-col sm:flex-row items-center justify-center">
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <NotebookPen className="w-14 h-14 text-dark-green" strokeWidth={2} />
                        <p className="font-semibold text-xl text-dark-green">Passo 1</p>
                        <p className="w-60 text-center">Escolha o plano ideal para o seu perfil como trader</p>
                    </div>
                    <ArrowDown className="sm:hidden w-10 h-10 text-dark-green mx-auto" />
                    <ArrowRight className="hidden sm:flex w-10 h-10 text-dark-green" />
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <Goal className="w-14 h-14 text-dark-green" strokeWidth={2} />
                        <p className="font-semibold text-xl text-dark-green">Passo 2</p>
                        <p className="w-60 text-center">Complete nosso exame e alcance a meta do seu plano</p>
                        <ArrowDown className="hidden sm:flex lg:hidden w-10 h-10 text-dark-green" />
                    </div>
                    <ArrowDown className="sm:hidden w-10 h-10 text-dark-green mx-auto" />
                    <ArrowRight className="hidden lg:flex w-10 h-10 text-dark-green" />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center">
                    <ArrowLeft className="hidden sm:flex lg:hidden w-10 h-10 text-dark-green order-5" />
                    <div className="flex flex-col gap-y-3 items-center justify-center sm:order-5 lg:order-3">
                        <CheckCheck className="w-14 h-14 text-dark-green" strokeWidth={2} />
                        <p className="font-semibold text-xl text-dark-green">Passo 3</p>
                        <p className="w-60 text-center">Após aprovação, seja um trade patrocinado pela SmartProp</p>
                    </div>
                    <ArrowDown className="sm:hidden w-10 h-10 text-dark-green mx-auto" />
                    <ArrowRight className="hidden lg:flex w-10 h-10 text-dark-green order-4" />
                    <div className="flex flex-col gap-y-3 items-center sm:order-3 lg:order-5">
                        <HandCoins className="w-14 h-14 text-dark-green" strokeWidth={2} />
                        <p className="font-semibold text-xl text-dark-green">Passo 4</p>
                        <p className="w-60 text-center">Solicite seu repasse!</p>
                    </div>
                </div>
            </div>
            <div id="info"></div>
        </div>
    )
}