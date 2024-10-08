import { MessageSquare } from "lucide-react"
// import Instagram from "@/public/instagram.svg"
// import Telegram from "@/public/telegram.svg"

export const Footer = () => {
    return (
        <>
            <div className="flex justify-between items-center py-5 w-full border-t border-b border-white px-5 sm:px-10" >
                <div className="order-3 col-span-2 py-2 -mb-3 text-center sm:mb-0 sm:col-auto sm:order-first"><p className="font-light text-[10px] md:text-xs text-white">2024 © Todos os direitos reservados</p></div>
                <div className="sm:text-center"><p className="text-sm sm:text-regular font-bold text-light-green">#vemSerSmart</p></div>
            </div >
            <p className="text-[10px] sm:text-xs text-center text-white py-2">by <span className="font-bold">GHL</span></p>
        </>
    )
}   