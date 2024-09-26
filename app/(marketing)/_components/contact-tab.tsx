'use client'

import { useRouter } from "next/navigation"

export const ContactTab = () => {
    const toWpp = () => {
        window.open('https://wa.me/5511976758822', '_blank')
    }

    const router = useRouter()
    return (
        <div className="fixed bottom-0 right-0 mb-5 mr-5 p-3 bg-white rounded-full z-[99999] cursor-pointer" onClick={toWpp}>
            <img src="/wpp.svg" width={35} height={35} alt="My SVG" />
        </div>
    )
}