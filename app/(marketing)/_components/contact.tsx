import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export const Contact = () => {
    return (
        <div className="h-screen flex items-center px-5 sm:px-9 xl:px-10">
            <div className="bg-white w-[1100px] mx-auto rounded-3xl flex flex-col xs:flex-row items-center justify-center">
                <div className="flex flex-col justify-center gap-5 p-7 xs:max-w-[60%] sm:max-w-[56%] z-10">
                    <p className="text-xl sm:text-2xl md:text-4xl font-medium text-black">
                        <span className="text-light-green font-semibold">Alguma dúvida? </span>
                        Nos envie uma mensagem pelo <span className="text-dark-green font-semibold">WhatsApp</span>.
                    </p>
                    <p>
                        Temos profissionais de excelência ao seu dispor!
                    </p>
                    <Button variant='green' className="flex border-2 sm:py-4 md:py-7 sm:text-xl md:text-2xl font-medium gap-x-3 w-44 sm:w-60 md:w-72 rounded-full shadow-3xl">
                        Chamar no WPP <MessageCircle className='h-4 w-4 md:h-6 md:w-6' strokeWidth={3} />
                    </Button>
                </div>
                <img src="/hand.png" alt="Hand" className="h-full w-56 pr-2 sm:pr-0 sm:w-60 md:w-72" />
            </div>
        </div>
    )
}