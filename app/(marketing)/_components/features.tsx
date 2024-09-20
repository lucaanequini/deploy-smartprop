import { Bot, BrainCircuit, PersonStanding, Computer } from "lucide-react"


export const Features = () => {
    return (
        <div className="h-[120vh] xs:h-screen w-full flex items-center bg-light-gray ">
            <div className="w-full flex flex-col justify-center gap-5 xs:gap-3 sm:gap-5 p-5 sm:p-5 md:p-0">
                <div className="flex flex-col xs:flex-row gap-5 xs:gap-3 sm:gap-5 justify-center">
                    <div className="xs:w-2/3 md:w-1/2 xs:h-56 bg-dark-green flex flex-col rounded-3xl p-3 gap-y-5 xs:p-8 xs:gap-y-16"
                        data-aos='fade-right'
                    >
                        <img src="/logo.png" alt="Logo" className="w-20 h-15" />
                        <p className="xs:text-xl md:text-3xl text-white">Por que a Smart Prop é diferente?</p>
                    </div>
                    <div className="xs:w-1/3 md:w-1/4 xs:h-56 rounded-3xl p-3 xs:p-5 bg-light-green flex flex-col items-center justify-center gap-y-3 sm:gap-y-5"
                        data-aos='fade-left'
                    >
                        <Bot className="xs:w-12 xs:h-12 md:w-16 md:h-16 text-white" strokeWidth={1} />
                        <p className="text-white text-center text-sm xs:text-xs sm:text-sm">Utilizamos a Ciência de dados para entender quais traders tem o perfil para ingressar diretamente a conta real ou ter seu caminho no Simulador Remunerado encurtado.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-full xs:flex-row gap-5 xs:gap-3 sm:gap-5 justify-center">
                    <div className="md:w-[25%] xs:h-56 rounded-3xl p-3 xs:p-5 bg-white flex flex-col items-center justify-center gap-y-3 sm:gap-y-5"
                        data-aos='fade-right'
                    >
                        <BrainCircuit className="xs:w-12 xs:h-12 md:w-16 md:h-16 text-dark-green" strokeWidth={1} />
                        <p className="text-dark-green text-center text-sm xs:text-xs sm:text-sm">Guiamos nosso negócio nas melhores práticas de Business Intelligence e Analytics constantemente analisando o modelo do negócio para caminhar de forma saudável.</p>
                    </div>
                    <div className="md:w-[23.7%] xs:h-56 rounded-3xl p-3 xs:p-5 bg-dark-green opacity-80 flex flex-col items-center justify-center gap-y-3 sm:gap-y-5"
                        data-aos='fade-left'
                    >
                        <PersonStanding className="xs:w-12 xs:h-12 md:w-16 md:h-16 text-white" strokeWidth={1} />
                        <p className="text-white text-center text-sm xs:text-xs sm:text-sm">Processos recorrentes de pagamentos, promoções, aprovações  realizados de forma automatizada.</p>
                    </div>
                    <div className="md:w-[25%] xs:h-56 rounded-3xl p-3 xs:p-5 bg-dark-green flex flex-col items-center justify-center gap-y-3 sm:gap-y-5"
                        data-aos='fade-right'
                    >
                        <Computer className="xs:w-12 xs:h-12 md:w-16 md:h-16 text-white" strokeWidth={1} />
                        <p className="text-sm xs:text-xs sm:text-sm text-white text-center">A Smart é uma empresa de tecnologia e veio para profissionalizar o modelo de negócio das mesas proprietárias no Brasil.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}