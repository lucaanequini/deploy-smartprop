import { MessageSquare } from "lucide-react"
// import Instagram from "@/public/instagram.svg"
// import Telegram from "@/public/telegram.svg"

export const Footer = () => {
    return (
        <>
            <div className="flex justify-center w-full border-t border-b border-white" >
                <div className="grid grid-cols-2 sm:grid-cols-3 items-center justify-center py-5 gap-x-10 sm:gap-x-5 md:gap-x-10 lg:gap-x-40 xl:gap-x-64 text-white">
                    <div className="order-3 col-span-2 py-2 -mb-3 text-center sm:mb-0 sm:col-auto sm:order-first"><p className="font-light text-[10px] md:text-xs">2024 © Todos os direitos reservados</p></div>
                    <div className="sm:text-center"><p className="text-sm sm:text-regular font-bold text-light-green">#vemSerSmart</p></div>
                    <div className="flex gap-x-5 mx-auto sm:gap-x-20 md:gap-x-28 lg:gap-x-20 xl:gap-x-40">
                        <MessageSquare strokeWidth={1} className="h-6 w-6 sm:h-10 sm:w-10" />
                        <MessageSquare strokeWidth={1} className="h-6 w-6 sm:h-10 sm:w-10" />
                    </div>
                </div>
            </div >
            <p className="text-[10px] sm:text-xs text-center text-white py-2">by <span className="font-bold">GHL</span></p>
        </>
    )
}   