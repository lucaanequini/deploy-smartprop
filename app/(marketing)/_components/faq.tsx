import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const Faq = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-white">
            <div className="bg-cover absolute left-0 mt-52">
                <img src="/circulo.png" className="w-40 h-80" alt="Circulo" />
            </div>
            <div className="hidden z-0 md:flex md:right-0 bg-cover absolute xl:right-24">
                <img src="/linha.png" className="w-[150%] h-screen" alt="Linha" />
            </div>
            <div className="flex flex-col items-center gap-24 z-10">
                <p className="text-dark-green text-4xl sm:text-5xl drop-shadow-5xl font-bold">FAQ&apos;s</p>
                <Accordion type="single" collapsible className="w-[300px] xs:w-[400px] text-sm sm:text-base sm:w-[500px]">
                    <AccordionItem value="item-1" data-aos='fade-left'>
                        <AccordionTrigger>Posso ter mais de um plano?</AccordionTrigger>
                        <AccordionContent>
                            <span className="font-semibold text-dark-green">SIM</span>, você pode ter mais de um plano, com limite máximo de 3 planos ativos simultâneos.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" data-aos='fade-right'>
                        <AccordionTrigger>A perda máxima é zerada mensalmente?</AccordionTrigger>
                        <AccordionContent>
                            <span className="font-semibold text-dark-green">NÃO</span>, a perda máxima do plano não é zerada mensalmente, ela se mantém negativa, e vale sempre o saldo líquido total que aparece em sua plataforma.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" data-aos='fade-left'>
                        <AccordionTrigger>Há simulador remunerado?</AccordionTrigger>
                        <AccordionContent>
                            <span className="font-semibold text-dark-green">SIM</span> ,temos simulador remunerado. Ao ser aprovado no exame, você será migrado para o simulador remunerado já podendo receber repasses.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" data-aos='fade-right'>
                        <AccordionTrigger>O que é o Bônus por Performance?</AccordionTrigger>
                        <AccordionContent>
                            Todo mês iremos disponibilizar desafios para os traders de conta real que ajudarão o trader a se manter no gerenciamento, caso o trader cumpra as metas ele receberá acréscimo de percentual em cima do valor líquido do repasse. Por exemplo o trader fez R$1000,00 será retirado 20% de IR e 10% da SmartProp sobrando R$800,00. Caso o trader cumpra os desafios, ele ganhará até 35% de acréscimo chegando a R$972,00.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
        </div>
    )
}